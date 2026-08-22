import fs from "node:fs/promises";
import { FileBlob, SpreadsheetFile } from "@oai/artifact-tool";

const sourcePath = "/Users/samxie/Desktop/pilot 问卷变量与题项总表.xlsx";
const previewDir = "/Users/samxie/Research/YoYoRecomSys_GenPic/Research_Proj/Psy/genai-ad-image-research/tmp/spreadsheet_questionnaire/reference_previews";

await fs.mkdir(previewDir, { recursive: true });
const input = await FileBlob.load(sourcePath);
const workbook = await SpreadsheetFile.importXlsx(input);

const overview = await workbook.inspect({
  kind: "workbook,sheet,table",
  maxChars: 16000,
  tableMaxRows: 12,
  tableMaxCols: 16,
  tableMaxCellChars: 160,
});
process.stdout.write(`${overview.ndjson}\n`);

for (const sheet of workbook.worksheets.items) {
  const used = sheet.getUsedRange();
  if (used) {
    const region = await workbook.inspect({
      kind: "region",
      sheetId: sheet.name,
      range: used.address,
      maxChars: 24000,
      tableMaxRows: 80,
      tableMaxCols: 18,
      tableMaxCellChars: 240,
    });
    process.stdout.write(`SHEET_REGION ${sheet.name}\n${region.ndjson}\n`);
  }
  const preview = await workbook.render({
    sheetName: sheet.name,
    autoCrop: "all",
    scale: 1.5,
    format: "png",
  });
  const safeName = sheet.name.replace(/[^A-Za-z0-9_-]+/g, "_");
  await fs.writeFile(`${previewDir}/${safeName}.png`, new Uint8Array(await preview.arrayBuffer()));
}

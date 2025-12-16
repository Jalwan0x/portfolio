import fs from "node:fs";
import path from "node:path";
import http from "node:http";

async function downloadReport() {
  const url = "http://localhost:3000/api/report?download=1";
  const filePath = path.join(process.cwd(), "sample-report.pdf");

  await new Promise<void>((resolve, reject) => {
    http.get(url, (res) => {
      if (res.statusCode !== 200) {
        reject(new Error(`Unexpected status: ${res.statusCode}`));
        return;
      }
      const file = fs.createWriteStream(filePath);
      res.pipe(file);
      file.on("finish", () => {
        file.close();
        resolve();
      });
    }).on("error", reject);
  });

  console.log("Sample report saved to", filePath);
}

downloadReport().catch((err) => {
  console.error(err);
  process.exit(1);
});

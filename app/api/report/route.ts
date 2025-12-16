import { NextResponse } from "next/server";
import PDFDocument from "pdfkit";
import template from "../../../lib/report-template.json" assert { type: "json" };

function buildPdfBuffer(): Promise<Buffer> {
  return new Promise((resolve) => {
    const doc = new PDFDocument({ size: "A4", margin: 50 });
    const chunks: Buffer[] = [];
    doc.on("data", (chunk) => chunks.push(chunk as Buffer));
    doc.on("end", () => resolve(Buffer.concat(chunks)));

    // Title / Branding
    doc
      .fontSize(20)
      .fillColor("#000")
      .text("Web Penetration Testing Report", { align: "left" })
      .moveDown(0.2);
    doc.fontSize(12).fillColor("#444").text("Prepared by: Jalwan").moveDown(1);

    // Executive summary
    doc
      .fontSize(14)
      .fillColor("#000")
      .text("Executive Summary", { underline: true })
      .moveDown(0.5);
    doc
      .fontSize(11)
      .fillColor("#333")
      .text(
        "Manual web and API penetration test guided by OWASP Top 10. Findings include severity, CVSS v3.1, and practical remediation steps. Retest is included.",
      )
      .moveDown(1);

    // Sample finding based on template
    doc.fontSize(14).fillColor("#000").text("Findings", { underline: true }).moveDown(0.5);
    doc.fontSize(12).fillColor("#111").text(`1) ${template.title}`);
    doc
      .fontSize(10)
      .fillColor("#333")
      .text(`CVSS v3.1: ${template.cvss} | Severity: ${template.severity} | Priority: ${template.priority}`)
      .moveDown(0.3);
    doc.fontSize(10).text(`Proof of Concept: ${template.poc}`).moveDown(0.3);
    doc.fontSize(10).text("Remediation:");
    template.remediation.forEach((r: string) => {
      doc.text(`• ${r}`);
    });

    // Methodology summary
    doc.moveDown(1);
    doc.fontSize(14).fillColor("#000").text("Methodology (NIST SP 800-115)", { underline: true }).moveDown(0.5);
    doc
      .fontSize(10)
      .fillColor("#333")
      .text("Scope → Discovery → Manual testing → Exploitation/impact → Reporting → Retest");

    doc.end();
  });
}

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const download = searchParams.get("download") === "1";

  const buffer = await buildPdfBuffer();
  const headers = new Headers({
    "Content-Type": "application/pdf",
  });
  if (download) {
    headers.set("Content-Disposition", "attachment; filename=jalwan-sample-report.pdf");
  } else {
    headers.set("Content-Disposition", "inline; filename=jalwan-sample-report.pdf");
  }
  return new NextResponse(buffer, { headers });
}
import { NextRequest, NextResponse } from "next/server";
import PDFDocument from "pdfkit";
import reportTemplate from "../../../lib/report-template.json" assert { type: "json" };

export const dynamic = "force-dynamic";

export async function GET(request: NextRequest) {
  const download = request.nextUrl.searchParams.get("download");

  const doc = new PDFDocument({ margin: 50, size: "A4" });
  const chunks: Buffer[] = [];
  doc.on("data", (chunk) => chunks.push(chunk));

  doc.fontSize(20).fillColor("#0b1021").text("Jalwan Security — Penetration Test Report", { align: "left" });
  doc.moveDown();
  doc.fontSize(12).fillColor("#333").text("Executive Summary", { underline: true });
  doc.text("Manual web + API penetration test covering OWASP Top 10, auth, misconfig, and business-logic abuse.");
  doc.moveDown();
  doc.fontSize(12).fillColor("#333").text("Methodology (NIST SP 800-115)", { underline: true });
  doc.text("Scope → Discovery → Manual Testing → Exploitation/Impact → Reporting → Retest");
  doc.moveDown();

  doc.fontSize(12).fillColor("#333").text("Findings", { underline: true });
  doc.moveDown(0.5);

  doc.fontSize(11).text(`Title: ${reportTemplate.title}`);
  doc.text(`CVSS v3.1: ${reportTemplate.cvss}`);
  doc.text(`Severity: ${reportTemplate.severity}`);
  doc.text(`Priority: ${reportTemplate.priority}`);
  doc.text(`Proof of Concept: ${reportTemplate.poc}`);
  doc.text(`Screenshots: ${reportTemplate.screenshots.join(", ") || "None"}`);
  doc.text(`Remediation: ${reportTemplate.remediation.join("; ")}`);
  doc.text(`Status: ${reportTemplate.status}`);
  doc.moveDown();

  doc.text("Risk Prioritization: P1–P3 based on CVSS + business impact.");
  doc.text("Fix Checklist: Map remediation to owners and deadlines.");
  doc.text("Retest: Included after fixes are applied.");

  doc.end();
  await new Promise((resolve) => doc.on("end", resolve));

  const pdfBuffer = Buffer.concat(chunks);
  return new NextResponse(pdfBuffer, {
    status: 200,
    headers: {
      "Content-Type": "application/pdf",
      "Content-Disposition": download ? "attachment; filename=jalwan-sample-report.pdf" : "inline"
    }
  });
}

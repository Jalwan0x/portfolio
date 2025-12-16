import { render, screen } from "@testing-library/react";
import { CTAButton } from "../app/components/CTAButton";

describe("CTAButton", () => {
  it("renders primary CTA text", () => {
    render(<CTAButton href="/contact">Request Security Audit</CTAButton>);
    expect(screen.getByText("Request Security Audit")).toBeInTheDocument();
  });
});

import { render } from "@testing-library/react";
import Analytics from "../Analytics";
import "@testing-library/jest-dom";

test("renders Analytics component without crashing", () => {
  render(<Analytics />);
});

test("renders Analytics component with Google Analytics ID", () => {
  render(<Analytics googleAnalyticsId="UA-12345678-1" />);
  expect(
    document.querySelector(
      'script[src="https://www.googletagmanager.com/gtag/js?id=UA-12345678-1"]'
    )
  ).toBeInTheDocument();
});

test("renders Analytics component with Google Ads Conversion ID", () => {
  render(
    <Analytics
      googleAnalyticsId="UA-12345678-1"
      googleAdsConversionId="AW-1234567890"
    />
  );
  expect(
    document.querySelector(
      'script[src="https://www.googletagmanager.com/gtag/js?id=UA-12345678-1"]'
    )
  ).toBeInTheDocument();
});

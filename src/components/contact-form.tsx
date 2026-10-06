"use client";

import Script from "next/script";

export default function ContactForm() {
  return (
    <>
      <iframe
        src="https://api.leadconnectorhq.com/widget/form/eDxv2YrBzpW83pK0YEPO"
        style={{
          width: "100%",
          height: "100%",
          border: "none",
          borderRadius: "8px",
        }}
        id="inline-eDxv2YrBzpW83pK0YEPO"
        data-layout="{'id':'INLINE'}"
        data-trigger-type="alwaysShow"
        data-trigger-value=""
        data-activation-type="alwaysActivated"
        data-activation-value=""
        data-deactivation-type="neverDeactivate"
        data-deactivation-value=""
        data-form-name="Brixen Consultancy Form"
        data-height="undefined"
        data-layout-iframe-id="inline-eDxv2YrBzpW83pK0YEPO"
        data-form-id="eDxv2YrBzpW83pK0YEPO"
        data-cookie-consent="true"
        data-cookie-consent-provider="auto"
        title="Brixen Consultancy Form"
      />

      <Script
        src="https://link.msgsndr.com/js/form_embed.js"
        strategy="afterInteractive"
      />
    </>
  );
}

/* eslint-disable @next/next/no-img-element */
import * as React from "react";

const baseUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : "http://localhost:3000";

export const SignInEmail = ({ url }: { url: string }) => (
  <html lang="en">
    <body style={main}>
      <div style={container}>
        <section style={box}>
          <img
            src={`${baseUrl}/static/emailLogo.svg || https://www.georgieshouse.org.au/Logo_Orange_InvertedWhite.svg`}
            width="300"
            height="300"
            alt="Georgies House"
            style={image}
          />
          <p style={paragraph}>Hi 👋🏻,</p>
          <p style={paragraph}>
            This is your secure link to sign in to Georgies House.
          </p>
          <p style={paragraph}>Click the button below to log in.</p>
          <a style={button} href={url}>
            🪄 Magic Sign In Link
          </a>

          <hr style={hr} />

          <p style={paragraph}>- Georgie</p>
          <hr style={hr} />
          <p>
            <a href={baseUrl} style={anchor}>
              Click here
            </a>{" "}
            to return to Georgies House.
          </p>
          <p style={footer}>Georgies House PTY Ltd Copyright 2024 &copy;</p>
        </section>
      </div>
    </body>
  </html>
);

export default SignInEmail;

const main = {
  padding: "1rem",
  backgroundColor: "#f7f6fc",
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Ubuntu,sans-serif',
};

const container = {
  backgroundColor: "#ffffff",
  margin: "0 auto",
  padding: "20px 0 48px",
  marginBottom: "64px",
  borderRadius: "18px",
};

const box = {
  padding: "0 48px",
};

const hr = {
  borderColor: "#e6ebf1",
  margin: "10px 0",
};

const paragraph = {
  color: "#525f7f",
  fontSize: "16px",
  lineHeight: "24px",
  textAlign: "left" as const,
};

const anchor = {
  color: "#FF7900",
};

const button = {
  backgroundColor: "#FF7900",
  borderRadius: "5px",
  color: "#fff",
  fontSize: "16px",
  fontWeight: "bold",
  textDecoration: "none",
  textAlign: "center" as const,
  display: "block",
  width: "100%",
  padding: "10px",
  marginBottom: "20px",
};

const image = {
  display: "block",
  margin: "0 auto",
  marginBottom: "20px",
};

const footer = {
  color: "#8898aa",
  fontSize: "12px",
  lineHeight: "16px",
};

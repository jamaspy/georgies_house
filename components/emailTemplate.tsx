import * as React from "react";

interface EmailTemplateProps {
  name: string;
  email: string;
  message: string;
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  name,
  email,
  message,
}) => (
  <div style={{ fontFamily: "Arial, Helvetica, sans-serif" }}>
    <h1 style={{ display: "block", fontWeight: "bold", fontSize: "16px" }}>
      You have received and email from {name}!
    </h1>
    <p style={{ display: "block", fontSize: "12px" }}>
      Their email address is: <a href={`mailto:${email}`}> {email}</a>
    </p>
    <p style={{ display: "block", fontSize: "14px" }}>Here is their message:</p>
    <p style={{ display: "block", fontSize: "12px" }}>{message}</p>
  </div>
);

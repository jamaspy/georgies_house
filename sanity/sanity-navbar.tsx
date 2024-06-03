import Link from "next/link";
import React from "react";
import { VscDebugStepBack } from "react-icons/vsc";
import { SanityLogo } from "./sanity-logo";
import { defineConfig, NavbarProps, useWorkspace } from "sanity";
import { Card, Stack, Text } from "@sanity/ui";
export const SanityNavbar = (props: NavbarProps) => {
  const { renderDefault } = props;
  const { dataset } = useWorkspace();
  return (
    <Stack>
      <SanityLogo />
      <Card padding={3} tone="primary">
        <Link href="/dashboard" className="text-sm text-slate-800">
          Back to App
        </Link>
      </Card>
      {renderDefault(props)} {/* Render the default navbar */}
    </Stack>
  );
};

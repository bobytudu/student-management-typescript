import React from "react";
import { Helmet } from "react-helmet-async";

export default function Page({ children, title }: { children: React.ReactNode, title: string }) {
  return (
    <div id="page">
      <Helmet>
        <title>{title}</title>
      </Helmet>
      {children}
    </div>
  );
}

import * as React from "react";

import { ReactNode } from "react";

const pageStyles = {
  color: "#232129",
  padding: 16,
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
};

export const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <main style={pageStyles}>
      <nav
        style={{
          paddingBottom: 16,
        }}
      >
        <a href="/">
          <img alt="B+ logo" src="/logo.png" height={40} />
        </a>
      </nav>
      {children}
    </main>
  );
};

import * as React from "react";
import "./layout.css";

import { ReactNode } from "react";
import { Typography } from "@mui/material";
import { Link } from "gatsby-theme-material-ui";

const pageStyles = {
  color: "#232129",
  padding: 16,
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
};

export const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <div>
      <nav
        style={{
          marginBottom: 16,
          paddingLeft: 16,
          paddingRight: 16,
          paddingTop: 8,
          paddingBottom: 8,
          borderBottom: "1px solid #a6a6a666",
        }}
      >
        <a href="/">
          <img alt="B+ logo" src="/logo.png" height={40} />
        </a>
      </nav>
      <main style={pageStyles}>{children}</main>
      <footer
        style={{
          paddingLeft: 16,
          paddingRight: 16,
          paddingTop: 8,
          paddingBottom: 8,
          marginTop: 16,
          borderTop: "1px solid #a6a6a666",
          textAlign: "center",
        }}
      >
        <Typography>
          Built by{" "}
          <Link href="https://www.linkedin.com/in/milos-mladenovic-048633205/">
            Milos Mladenovic
          </Link>
        </Typography>
      </footer>
    </div>
  );
};

import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
import {
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
} from "@mui/material";
import { CardValidityForm } from "../../../components/CardValidityForm";

const pageStyles = {
  color: "#232129",
  padding: 96,
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
};
const headingStyles = {
  marginTop: 0,
  marginBottom: 64,
  maxWidth: 320,
};

const Page: React.FC<PageProps> = () => {
  return (
    <main style={pageStyles}>
      <CardValidityForm />
    </main>
  );
};

export default Page;

export const Head: HeadFC = () => <title>Home Page</title>;

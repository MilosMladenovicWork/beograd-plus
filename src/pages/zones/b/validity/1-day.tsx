import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
import { ConfirmCardChoice } from "../../../../components/ConfirmCardChoice";
import { CardZoneValue } from "../../../../hooks/use-card-zones";
import { CardValidityValue } from "../../../../hooks/use-card-validity";

const pageStyles = {
  color: "#232129",
  padding: 96,
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
};

const Page: React.FC<PageProps> = () => {
  return (
    <main style={pageStyles}>
      <ConfirmCardChoice
        zone={CardZoneValue.B}
        validity={CardValidityValue.ONE_DAY}
      />
    </main>
  );
};

export default Page;

export const Head: HeadFC = () => <title>Home Page</title>;

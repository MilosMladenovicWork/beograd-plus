import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
import { Grid, Typography } from "@mui/material";
import { CardZonesForm } from "../components/CardZonesForm";
import { Layout } from "../components/Layout";
import { enTranslations } from "../translations/en/en-translations";

const IndexPage: React.FC<PageProps> = () => {
  return (
    <Layout>
      <Grid container rowSpacing={2}>
        <Grid item xs={12}>
          <Typography variant="h1" sx={{ fontSize: 16 }}>
            {enTranslations.useThisAppToEasilyGenerateSms}
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="body2">
            {enTranslations.afterAFewStepsAppWillGenerateSms}
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <CardZonesForm
            cardZonesTranslation={enTranslations.cardZones}
            estimatedPriceRangeDependingOnValidityTimeIsTranslation={
              enTranslations.estimatedPriceRangeDependingOnValidityTimeIs
            }
            nextTranslation={enTranslations.next}
            toTranslation={enTranslations.to}
            yourCardWillBeValidInFollowingMunicipalitiesTranslation={
              enTranslations.yourCardWillBeValidInFollowingMunicipalities
            }
            zoneATranslation={enTranslations.zoneA}
            zoneBTranslation={enTranslations.zoneB}
          />
        </Grid>
      </Grid>
    </Layout>
  );
};

export default IndexPage;

export const Head: HeadFC = () => (
  <>
    <title>Beograd Plus</title>
    <meta name="description" content={enTranslations.homePageDescription} />
  </>
);

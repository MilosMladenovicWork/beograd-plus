import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
import { Grid, Typography } from "@mui/material";
import { CardZonesForm } from "../components/CardZonesForm";
import { Layout } from "../components/Layout";
import { rsTranslations } from "../translations/en/rs-translations";

const IndexPage: React.FC<PageProps> = () => {
  return (
    <Layout>
      <Grid container rowSpacing={2}>
        <Grid item xs={12}>
          <Typography variant="h1" sx={{ fontSize: 16 }}>
            {rsTranslations.useThisAppToEasilyGenerateSms}
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="body2">
            {rsTranslations.afterAFewStepsAppWillGenerateSms}
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <CardZonesForm
            cardZonesTranslation={rsTranslations.cardZones}
            estimatedPriceRangeDependingOnValidityTimeIsTranslation={
              rsTranslations.estimatedPriceRangeDependingOnValidityTimeIs
            }
            nextTranslation={rsTranslations.next}
            toTranslation={rsTranslations.to}
            yourCardWillBeValidInFollowingMunicipalitiesTranslation={
              rsTranslations.yourCardWillBeValidInFollowingMunicipalities
            }
            zoneATranslation={rsTranslations.zoneA}
            zoneBTranslation={rsTranslations.zoneB}
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
    <meta name="description" content={rsTranslations.homePageDescription} />
  </>
);

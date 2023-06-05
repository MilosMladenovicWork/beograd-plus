import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
import { CardValidityForm } from "../../../components/CardValidityForm";
import { Layout } from "../../../components/Layout";
import { CardZoneValue } from "../../../hooks/use-card-zones";
import { rsTranslations } from "../../../translations/en/rs-translations";

const Page: React.FC<PageProps> = () => {
  return (
    <Layout>
      <CardValidityForm
        zone={CardZoneValue.A}
        cardValidityTranslation={rsTranslations.cardValidity}
        estimatedPriceIsTranslation={rsTranslations.estimatedPriceIs}
        ninetyMinutesTranslation={rsTranslations.ninetyMinutes}
        oneDayTranslation={rsTranslations.oneDay}
        sevenDaysTranslation={rsTranslations.sevenDays}
        thirtyDaysTranslation={rsTranslations.thirtyDays}
        youChooseTranslation={rsTranslations.youChoose}
        youChooseZoneAAndBTranslation={rsTranslations.youChooseZoneAAndB}
        youChooseZoneATranslation={rsTranslations.youChooseZoneA}
        youChooseZoneBTranslation={rsTranslations.youChooseZoneB}
      />
    </Layout>
  );
};

export default Page;

export const Head: HeadFC = () => (
  <>
    <title>Beograd Plus</title>
    <meta name="description" content={rsTranslations.zoneAPageDescription} />
  </>
);

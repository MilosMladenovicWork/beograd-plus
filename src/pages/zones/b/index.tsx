import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
import { CardValidityForm } from "../../../components/CardValidityForm";
import { CardZoneValue } from "../../../hooks/use-card-zones";
import { Layout } from "../../../components/Layout";
import { enTranslations } from "../../../translations/en/en-translations";

const Page: React.FC<PageProps> = () => {
  return (
    <Layout>
      <CardValidityForm
        zone={CardZoneValue.B}
        cardValidityTranslation={enTranslations.cardValidity}
        estimatedPriceIsTranslation={enTranslations.estimatedPriceIs}
        ninetyMinutesTranslation={enTranslations.ninetyMinutes}
        oneDayTranslation={enTranslations.oneDay}
        sevenDaysTranslation={enTranslations.sevenDays}
        thirtyDaysTranslation={enTranslations.thirtyDays}
        youChooseTranslation={enTranslations.youChoose}
        youChooseZoneAAndBTranslation={enTranslations.youChooseZoneAAndB}
        youChooseZoneATranslation={enTranslations.youChooseZoneA}
        youChooseZoneBTranslation={enTranslations.youChooseZoneB}
      />
    </Layout>
  );
};

export default Page;

export const Head: HeadFC = () => (
  <>
    <title>Beograd Plus</title>
    <meta name="description" content={enTranslations.zoneBPageDescription} />
  </>
);

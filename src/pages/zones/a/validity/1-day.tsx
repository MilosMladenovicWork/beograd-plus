import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
import { ConfirmCardChoice } from "../../../../components/ConfirmCardChoice";
import {
  CardZoneValue,
  cardZoneMunicipalities,
} from "../../../../hooks/use-card-zones";
import { CardValidityValue } from "../../../../hooks/use-card-validity";
import { Layout } from "../../../../components/Layout";
import { enTranslations } from "../../../../translations/en/en-translations";

const pageStyles = {
  color: "#232129",
  padding: 16,
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
};

const Page: React.FC<PageProps> = () => {
  return (
    <Layout>
      <ConfirmCardChoice
        zone={CardZoneValue.A}
        validity={CardValidityValue.ONE_DAY}
        afterSmsIsCreatedForYouTranslation={
          enTranslations.afterSmsIsCreatedForYou
        }
        clickButtonBelowToAutomaticallyTranslation={
          enTranslations.clickButtonBelowToAutomatically
        }
        createSmsTranslation={enTranslations.createSms}
        estimatedPriceIsTranslation={enTranslations.estimatedPriceIs}
        orTranslation={enTranslations.or}
        sendCodeTranslation={enTranslations.sendCode}
        toPhoneNumberTranslation={enTranslations.toPhoneNumber}
        withValidityOfNinetyMinutesTranslation={
          enTranslations.withValidityOfNinetyMinutes
        }
        withValidityOfOneDayTranslation={enTranslations.withValidityOfOneDay}
        withValidityOfSevenDaysTranslation={
          enTranslations.withValidityOfSevenDays
        }
        withValidityOfThirtyDaysTranslation={
          enTranslations.withValidityOfThirtyDays
        }
        withValidityOfTranslation={enTranslations.withValidityOf}
        youChooseTranslation={enTranslations.youChoose}
        youChooseZoneAAndBTranslation={enTranslations.youChooseZoneAAndB}
        youChooseZoneATranslation={enTranslations.youChooseZoneA}
        youChooseZoneBTranslation={enTranslations.youChooseZoneB}
        cardZoneMunicipalities={cardZoneMunicipalities}
      />
    </Layout>
  );
};

export default Page;

export const Head: HeadFC = () => (
  <>
    <title>Beograd Plus</title>
    <meta
      name="description"
      content={enTranslations.zoneAValidity1DayDescription}
    />
  </>
);

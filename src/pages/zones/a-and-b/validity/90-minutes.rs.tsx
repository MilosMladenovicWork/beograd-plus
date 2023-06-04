import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
import { ConfirmCardChoice } from "../../../../components/ConfirmCardChoice";
import {
  CardZoneValue,
  cardZoneMunicipalitiesRs,
} from "../../../../hooks/use-card-zones";
import { CardValidityValue } from "../../../../hooks/use-card-validity";
import { Layout } from "../../../../components/Layout";
import { rsTranslations } from "../../../../translations/en/rs-translations";

const Page: React.FC<PageProps> = () => {
  return (
    <Layout>
      <ConfirmCardChoice
        zone={CardZoneValue.A_AND_B}
        validity={CardValidityValue.NINETY_MINUTES}
        afterSmsIsCreatedForYouTranslation={
          rsTranslations.afterSmsIsCreatedForYou
        }
        clickButtonBelowToAutomaticallyTranslation={
          rsTranslations.clickButtonBelowToAutomatically
        }
        createSmsTranslation={rsTranslations.createSms}
        estimatedPriceIsTranslation={rsTranslations.estimatedPriceIs}
        orTranslation={rsTranslations.or}
        sendCodeTranslation={rsTranslations.sendCode}
        toPhoneNumberTranslation={rsTranslations.toPhoneNumber}
        withValidityOfNinetyMinutesTranslation={
          rsTranslations.withValidityOfNinetyMinutes
        }
        withValidityOfOneDayTranslation={rsTranslations.withValidityOfOneDay}
        withValidityOfSevenDaysTranslation={
          rsTranslations.withValidityOfSevenDays
        }
        withValidityOfThirtyDaysTranslation={
          rsTranslations.withValidityOfThirtyDays
        }
        withValidityOfTranslation={rsTranslations.withValidityOf}
        youChooseTranslation={rsTranslations.youChoose}
        youChooseZoneAAndBTranslation={rsTranslations.youChooseZoneAAndB}
        youChooseZoneATranslation={rsTranslations.youChooseZoneA}
        youChooseZoneBTranslation={rsTranslations.youChooseZoneB}
        cardZoneMunicipalities={cardZoneMunicipalitiesRs}
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
      content={rsTranslations.zoneAAndBValidity90MinutesDescription}
    />
  </>
);

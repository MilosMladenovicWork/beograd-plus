import * as React from "react";
import { Button } from "gatsby-theme-material-ui";
import {
  CardZoneValue,
  cardZoneMunicipalities,
  cardZoneNames,
} from "../hooks/use-card-zones";
import {
  CardValidityValue,
  cardValidityNames,
} from "../hooks/use-card-validity";
import { useConfirmCardChoice } from "../hooks/use-confirm-card-choice";
import { Grid, Typography } from "@mui/material";
import { useCardPricing } from "../hooks/use-card-pricing";
import { useMemo } from "react";

export const ConfirmCardChoice = ({
  zone,
  validity,
  youChooseTranslation,
  youChooseZoneATranslation,
  youChooseZoneBTranslation,
  youChooseZoneAAndBTranslation,
  withValidityOfNinetyMinutesTranslation,
  withValidityOfOneDayTranslation,
  withValidityOfSevenDaysTranslation,
  withValidityOfThirtyDaysTranslation,
  withValidityOfTranslation,
  estimatedPriceIsTranslation,
  sendCodeTranslation,
  toPhoneNumberTranslation,
  orTranslation,
  clickButtonBelowToAutomaticallyTranslation,
  afterSmsIsCreatedForYouTranslation,
  createSmsTranslation,
}: {
  zone: CardZoneValue;
  validity: CardValidityValue;
  youChooseTranslation: string;
  youChooseZoneATranslation: string;
  youChooseZoneBTranslation: string;
  youChooseZoneAAndBTranslation: string;
  withValidityOfNinetyMinutesTranslation: string;
  withValidityOfOneDayTranslation: string;
  withValidityOfSevenDaysTranslation: string;
  withValidityOfThirtyDaysTranslation: string;
  withValidityOfTranslation: string;
  estimatedPriceIsTranslation: string;
  sendCodeTranslation: string;
  toPhoneNumberTranslation: string;
  orTranslation: string;
  clickButtonBelowToAutomaticallyTranslation: string;
  afterSmsIsCreatedForYouTranslation: string;
  createSmsTranslation: string;
}) => {
  const { cardPricing } = useCardPricing(zone, validity);
  const { smsHref, smsCode, smsReceiverPhoneNumber } = useConfirmCardChoice(
    zone,
    validity
  );

  const chosenZone = useMemo(() => {
    switch (zone) {
      case CardZoneValue.A: {
        return youChooseZoneATranslation;
      }
      case CardZoneValue.B: {
        return youChooseZoneBTranslation;
      }
      case CardZoneValue.A_AND_B: {
        return youChooseZoneAAndBTranslation;
      }
    }
  }, [zone]);

  const chosenValidity = useMemo(() => {
    switch (validity) {
      case CardValidityValue.NINETY_MINUTES: {
        return withValidityOfNinetyMinutesTranslation;
      }
      case CardValidityValue.ONE_DAY: {
        return withValidityOfOneDayTranslation;
      }
      case CardValidityValue.SEVEN_DAYS: {
        return withValidityOfSevenDaysTranslation;
      }
      case CardValidityValue.THIRTY_DAYS: {
        return withValidityOfThirtyDaysTranslation;
      }
    }
  }, [validity]);

  return (
    <Grid container rowSpacing={3}>
      <Grid item container rowSpacing={1}>
        <Grid item>
          <Typography>
            {youChooseTranslation} <b>{chosenZone}</b>:
          </Typography>
          <Typography variant="body2">
            {cardZoneMunicipalities[zone].join(", ")}.
          </Typography>
        </Grid>
        <Grid item>
          <Typography>
            {withValidityOfTranslation} <b>{chosenValidity}</b>.
          </Typography>
        </Grid>
      </Grid>
      <Grid item>
        <Typography>
          {estimatedPriceIsTranslation} <b>{cardPricing}</b>
        </Typography>
      </Grid>
      <Grid item>
        <Typography>
          {sendCodeTranslation}: <b>{smsCode}</b>, {toPhoneNumberTranslation}{" "}
          <b>{smsReceiverPhoneNumber}</b>, {orTranslation}{" "}
          <b>{clickButtonBelowToAutomaticallyTranslation}</b>.{" "}
          {afterSmsIsCreatedForYouTranslation}:
        </Typography>
      </Grid>
      <Grid item>
        <Button href={smsHref} variant="contained">
          {createSmsTranslation}
        </Button>
      </Grid>
    </Grid>
  );
};

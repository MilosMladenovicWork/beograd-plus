import { FormControlLabelProps, RadioGroupProps } from "@mui/material";
import { useCallback, useEffect, useState } from "react";
import { CardZoneValue } from "./use-card-zones";
import { useCardPricing } from "./use-card-pricing";

enum NextPageUrls {
  VALIDITY_90_MINUTES = "./validity/90-minutes",
  VALIDITY_1_DAY = "./validity/1-day",
  VALIDITY_7_DAYS = "./validity/7-days",
  VALIDITY_30_DAYS = "./validity/30-days",
}

export enum CardValidityValue {
  NINETY_MINUTES = "90min",
  ONE_DAY = "1day",
  SEVEN_DAYS = "7days",
  THIRTY_DAYS = "30days",
}

export const cardValidityNames = {
  [CardValidityValue.NINETY_MINUTES]: "90 minutes",
  [CardValidityValue.ONE_DAY]: "1 day",
  [CardValidityValue.SEVEN_DAYS]: "7 days",
  [CardValidityValue.THIRTY_DAYS]: "30 days",
};

export const useCardValidity = ({ zone }: { zone: CardZoneValue }) => {
  const [nextPageUrl, setNextPageUrl] = useState<NextPageUrls>(
    NextPageUrls.VALIDITY_90_MINUTES
  );
  const [selectedValidity, setSelectedValidity] = useState<CardValidityValue>(
    CardValidityValue.NINETY_MINUTES
  );

  const handleValidityOnChange = useCallback<
    NonNullable<RadioGroupProps["onChange"]>
  >((_event, value) => {
    setSelectedValidity(value as CardValidityValue);
  }, []);

  useEffect(() => {
    switch (selectedValidity) {
      case CardValidityValue.NINETY_MINUTES: {
        setNextPageUrl(NextPageUrls.VALIDITY_90_MINUTES);
        break;
      }
      case CardValidityValue.ONE_DAY: {
        setNextPageUrl(NextPageUrls.VALIDITY_1_DAY);
        break;
      }
      case CardValidityValue.SEVEN_DAYS: {
        setNextPageUrl(NextPageUrls.VALIDITY_7_DAYS);
        break;
      }
      case CardValidityValue.THIRTY_DAYS: {
        setNextPageUrl(NextPageUrls.VALIDITY_30_DAYS);
        break;
      }
    }
  }, [selectedValidity]);

  const { cardPricing } = useCardPricing(zone, selectedValidity);

  return {
    nextPageUrl,
    handleValidityOnChange,
    selectedValidityEstimatedPricing: cardPricing,
  };
};

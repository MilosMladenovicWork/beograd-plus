import { FormControlLabelProps, RadioGroupProps } from "@mui/material";
import { useCallback, useEffect, useState } from "react";

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

export const useCardValidity = () => {
  const [nextPageUrl, setNextPageUrl] = useState<NextPageUrls>(
    NextPageUrls.VALIDITY_90_MINUTES
  );
  const [selectedValidity, setSelectedValidity] = useState<CardValidityValue>();

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

  return {
    nextPageUrl,
    handleValidityOnChange,
  };
};

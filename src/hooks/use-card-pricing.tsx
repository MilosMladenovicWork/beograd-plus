import { useMemo } from "react";
import { CardZoneValue } from "./use-card-zones";
import { CardValidityValue } from "./use-card-validity";
import { cardPricing } from "../constants/card-pricing";
import { CardChoiceCode } from "../constants/card-choice-codes";

const getCardPricing = (zone: CardZoneValue, validity: CardValidityValue) => {
  switch (zone) {
    case CardZoneValue.A: {
      switch (validity) {
        case CardValidityValue.NINETY_MINUTES: {
          return cardPricing[CardChoiceCode.ZONE_A_VALIDITY_90_MINUTES];
        }
        case CardValidityValue.ONE_DAY: {
          return cardPricing[CardChoiceCode.ZONE_A_VALIDITY_1_DAY];
        }
        case CardValidityValue.SEVEN_DAYS: {
          return cardPricing[CardChoiceCode.ZONE_A_VALIDITY_7_DAYS];
        }
        case CardValidityValue.THIRTY_DAYS: {
          return cardPricing[CardChoiceCode.ZONE_A_VALIDITY_30_DAYS];
        }
      }
    }
    case CardZoneValue.B: {
      switch (validity) {
        case CardValidityValue.NINETY_MINUTES: {
          return cardPricing[CardChoiceCode.ZONE_B_VALIDITY_90_MINUTES];
        }
        case CardValidityValue.ONE_DAY: {
          return cardPricing[CardChoiceCode.ZONE_B_VALIDITY_1_DAY];
        }
        case CardValidityValue.SEVEN_DAYS: {
          return cardPricing[CardChoiceCode.ZONE_B_VALIDITY_7_DAYS];
        }
        case CardValidityValue.THIRTY_DAYS: {
          return cardPricing[CardChoiceCode.ZONE_B_VALIDITY_30_DAYS];
        }
      }
    }
    case CardZoneValue.A_AND_B: {
      switch (validity) {
        case CardValidityValue.NINETY_MINUTES: {
          return cardPricing[CardChoiceCode.ZONE_A_AND_B_VALIDITY_90_MINUTES];
        }
        case CardValidityValue.ONE_DAY: {
          return cardPricing[CardChoiceCode.ZONE_A_AND_B_VALIDITY_1_DAY];
        }
        case CardValidityValue.SEVEN_DAYS: {
          return cardPricing[CardChoiceCode.ZONE_A_AND_B_VALIDITY_7_DAYS];
        }
        case CardValidityValue.THIRTY_DAYS: {
          return cardPricing[CardChoiceCode.ZONE_A_AND_B_VALIDITY_30_DAYS];
        }
      }
    }
  }
};

export const useCardPricing = (
  zone?: CardZoneValue,
  validity?: CardValidityValue
) => {
  const cardPricing = useMemo(() => {
    if (zone && validity) {
      return getCardPricing(zone, validity);
    }
    return null;
  }, [zone, validity]);

  return {
    cardPricing,
  };
};

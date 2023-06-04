import { useMemo } from "react";
import { CardZoneValue } from "./use-card-zones";
import { CardValidityValue } from "./use-card-validity";
import {
  OperatingSystem,
  useMobileOperatingSystem,
} from "./use-mobile-operating-system";
import { CardChoiceCode } from "../constants/card-choice-codes";

const getSmsCode = (zone: CardZoneValue, validity: CardValidityValue) => {
  switch (zone) {
    case CardZoneValue.A: {
      switch (validity) {
        case CardValidityValue.NINETY_MINUTES: {
          return CardChoiceCode.ZONE_A_VALIDITY_90_MINUTES;
        }
        case CardValidityValue.ONE_DAY: {
          return CardChoiceCode.ZONE_A_VALIDITY_1_DAY;
        }
        case CardValidityValue.SEVEN_DAYS: {
          return CardChoiceCode.ZONE_A_VALIDITY_7_DAYS;
        }
        case CardValidityValue.THIRTY_DAYS: {
          return CardChoiceCode.ZONE_A_VALIDITY_30_DAYS;
        }
      }
    }
    case CardZoneValue.B: {
      switch (validity) {
        case CardValidityValue.NINETY_MINUTES: {
          return CardChoiceCode.ZONE_B_VALIDITY_90_MINUTES;
        }
        case CardValidityValue.ONE_DAY: {
          return CardChoiceCode.ZONE_B_VALIDITY_1_DAY;
        }
        case CardValidityValue.SEVEN_DAYS: {
          return CardChoiceCode.ZONE_B_VALIDITY_7_DAYS;
        }
        case CardValidityValue.THIRTY_DAYS: {
          return CardChoiceCode.ZONE_B_VALIDITY_30_DAYS;
        }
      }
    }
    case CardZoneValue.A_AND_B: {
      switch (validity) {
        case CardValidityValue.NINETY_MINUTES: {
          return CardChoiceCode.ZONE_A_AND_B_VALIDITY_90_MINUTES;
        }
        case CardValidityValue.ONE_DAY: {
          return CardChoiceCode.ZONE_A_AND_B_VALIDITY_1_DAY;
        }
        case CardValidityValue.SEVEN_DAYS: {
          return CardChoiceCode.ZONE_A_AND_B_VALIDITY_7_DAYS;
        }
        case CardValidityValue.THIRTY_DAYS: {
          return CardChoiceCode.ZONE_A_AND_B_VALIDITY_30_DAYS;
        }
      }
    }
  }
};

const smsReceiverPhoneNumber = 9011;

export const useConfirmCardChoice = (
  zone: CardZoneValue,
  validity: CardValidityValue
) => {
  const operatingSystem = useMobileOperatingSystem();

  const smsCode = useMemo(() => getSmsCode(zone, validity), [zone, validity]);

  const smsHref = useMemo(() => {
    switch (operatingSystem) {
      case OperatingSystem.ANDROID: {
        return `sms://${smsReceiverPhoneNumber}/?body=${smsCode}`;
      }
      case OperatingSystem.IOS: {
        return `sms://${smsReceiverPhoneNumber}/&body=${smsCode}`;
      }
    }
  }, [operatingSystem, smsCode]);

  return {
    smsHref,
    smsReceiverPhoneNumber,
    smsCode,
  };
};

import { FormControlLabelProps } from "@mui/material";
import { useCallback, useEffect, useMemo, useState } from "react";
import { CardZoneValue } from "./use-card-zones";
import { CardValidityValue } from "./use-card-validity";
import {
  OperatingSystem,
  useMobileOperatingSystem,
} from "./use-mobile-operating-system";

enum CardChoiceCode {
  ZONE_A_VALIDITY_90_MINUTES = "A90",
  ZONE_B_VALIDITY_90_MINUTES = "B90",
  ZONE_A_AND_B_VALIDITY_90_MINUTES = "C90",
  ZONE_A_VALIDITY_1_DAY = "A1",
  ZONE_B_VALIDITY_1_DAY = "B1",
  ZONE_A_AND_B_VALIDITY_1_DAY = "C1",
  ZONE_A_VALIDITY_7_DAYS = "A7",
  ZONE_B_VALIDITY_7_DAYS = "B7",
  ZONE_A_AND_B_VALIDITY_7_DAYS = "C7",
  ZONE_A_VALIDITY_30_DAYS = "A30",
  ZONE_B_VALIDITY_30_DAYS = "B30",
  ZONE_A_AND_B_VALIDITY_30_DAYS = "C30",
}

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

  const smsHref = useMemo(() => {
    const smsCode = getSmsCode(zone, validity);

    switch (operatingSystem) {
      case OperatingSystem.ANDROID: {
        return `sms://${smsReceiverPhoneNumber}/?body=${smsCode}`;
      }
      case OperatingSystem.IOS: {
        return `sms://${smsReceiverPhoneNumber}/&body=${smsCode}`;
      }
    }
  }, [operatingSystem]);

  return {
    smsHref,
  };
};

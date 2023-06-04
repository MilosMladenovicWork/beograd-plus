import { FormControlLabelProps } from "@mui/material";
import { useCallback, useEffect, useState } from "react";
import { cardPricing } from "../constants/card-pricing";
import { CardChoiceCode } from "../constants/card-choice-codes";

enum NextPageUrls {
  ZONE_A = "./zones/a",
  ZONE_B = "./zones/b",
  ZONE_A_AND_B = "./zones/a-and-b",
}

export enum CardZoneValue {
  A = "a",
  B = "b",
  A_AND_B = "a-and-b",
}

export const cardZoneNames = {
  [CardZoneValue.A]: "Zone A",
  [CardZoneValue.B]: "Zone B",
  [CardZoneValue.A_AND_B]: "Zone A and B",
};

const zoneAMunicipalities = [
  "Novi Beograd",
  "Zemun",
  "Stari grad",
  "Savski venac",
  "Vozdovac",
  "Cukarica",
  "Vracar",
  "Rakovica",
  "Palilula",
  "Zvezdara",
  "Surcin",
  "Grocka (north of the road 347 Brcin - Zaklopaca)",
];

const zoneBMunicipalities = [
  "Lazarevac",
  "Mladenovac",
  "Obrenovac",
  "Barajevo",
  "Sopot",
  "Grocka (south of the road 347 Vrcin - Zaklopaca)",
];

export const cardZoneMunicipalities: { [key in CardZoneValue]: string[] } = {
  [CardZoneValue.A]: zoneAMunicipalities,
  [CardZoneValue.B]: zoneBMunicipalities,
  [CardZoneValue.A_AND_B]: [...zoneAMunicipalities, ...zoneBMunicipalities],
};

const estimatedPricingPerZone = {
  [CardZoneValue.A]: {
    from: cardPricing[CardChoiceCode.ZONE_A_VALIDITY_90_MINUTES],
    to: cardPricing[CardChoiceCode.ZONE_A_VALIDITY_30_DAYS],
  },
  [CardZoneValue.B]: {
    from: cardPricing[CardChoiceCode.ZONE_B_VALIDITY_90_MINUTES],
    to: cardPricing[CardChoiceCode.ZONE_B_VALIDITY_30_DAYS],
  },
  [CardZoneValue.A_AND_B]: {
    from: cardPricing[CardChoiceCode.ZONE_A_AND_B_VALIDITY_90_MINUTES],
    to: cardPricing[CardChoiceCode.ZONE_A_AND_B_VALIDITY_30_DAYS],
  },
};

export const useCardZones = () => {
  const [nextPageUrl, setNextPageUrl] = useState<NextPageUrls | null>(
    NextPageUrls.ZONE_A
  );
  const [zoneASelected, setZoneASelected] = useState(true);
  const [zoneBSelected, setZoneBSelected] = useState(false);
  const [selectedZoneMunicipalities, setSelectedZoneMunicipalities] = useState<
    string[] | null
  >(cardZoneMunicipalities[CardZoneValue.A]);
  const [selectedZoneEstimatedPricing, setSelectedZoneEstimatedPricing] =
    useState<{ from: string; to: string } | null>(
      estimatedPricingPerZone[CardZoneValue.A]
    );

  const handleZoneACheckboxOnChange = useCallback<
    NonNullable<FormControlLabelProps["onChange"]>
  >((_event, checked) => {
    setZoneASelected(checked);
  }, []);

  const handleZoneBCheckboxOnChange = useCallback<
    NonNullable<FormControlLabelProps["onChange"]>
  >((_event, checked) => {
    setZoneBSelected(checked);
  }, []);

  useEffect(() => {
    if (zoneASelected && zoneBSelected) {
      setNextPageUrl(NextPageUrls.ZONE_A_AND_B);
      setSelectedZoneMunicipalities(
        cardZoneMunicipalities[CardZoneValue.A_AND_B]
      );
      setSelectedZoneEstimatedPricing(
        estimatedPricingPerZone[CardZoneValue.A_AND_B]
      );
    } else if (zoneASelected) {
      setNextPageUrl(NextPageUrls.ZONE_A);
      setSelectedZoneMunicipalities(cardZoneMunicipalities[CardZoneValue.A]);
      setSelectedZoneEstimatedPricing(estimatedPricingPerZone[CardZoneValue.A]);
    } else if (zoneBSelected) {
      setNextPageUrl(NextPageUrls.ZONE_B);
      setSelectedZoneMunicipalities(cardZoneMunicipalities[CardZoneValue.B]);
      setSelectedZoneEstimatedPricing(estimatedPricingPerZone[CardZoneValue.B]);
    } else {
      setSelectedZoneMunicipalities(null);
      setNextPageUrl(null);
      setSelectedZoneEstimatedPricing(null);
    }
  }, [zoneASelected, zoneBSelected]);

  return {
    nextPageUrl,
    handleZoneACheckboxOnChange,
    handleZoneBCheckboxOnChange,
    selectedZoneMunicipalities,
    selectedZoneEstimatedPricing,
  };
};

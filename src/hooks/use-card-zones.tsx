import { FormControlLabelProps } from "@mui/material";
import { useCallback, useEffect, useState } from "react";

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

export const useCardZones = () => {
  const [nextPageUrl, setNextPageUrl] = useState<NextPageUrls | null>(
    NextPageUrls.ZONE_A
  );
  const [zoneASelected, setZoneASelected] = useState(true);
  const [zoneBSelected, setZoneBSelected] = useState(false);

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
    } else if (zoneASelected) {
      setNextPageUrl(NextPageUrls.ZONE_A);
    } else if (zoneBSelected) {
      setNextPageUrl(NextPageUrls.ZONE_B);
    } else {
      setNextPageUrl(null);
    }
  }, [zoneASelected, zoneBSelected]);

  return {
    nextPageUrl,
    handleZoneACheckboxOnChange,
    handleZoneBCheckboxOnChange,
  };
};

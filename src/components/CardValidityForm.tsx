import * as React from "react";
import {
  FormControl,
  FormControlLabel,
  FormLabel,
  Grid,
  Radio,
  RadioGroup,
  Typography,
} from "@mui/material";
import { CardValidityValue, useCardValidity } from "../hooks/use-card-validity";
import { Button } from "gatsby-theme-material-ui";
import { CardZoneValue, cardZoneNames } from "../hooks/use-card-zones";
import { useMemo } from "react";

export const CardValidityForm = ({
  zone,
  ninetyMinutesTranslation,
  oneDayTranslation,
  sevenDaysTranslation,
  thirtyDaysTranslation,
  estimatedPriceIsTranslation,
  youChooseZoneATranslation,
  youChooseZoneBTranslation,
  youChooseZoneAAndBTranslation,
  youChooseTranslation,
  cardValidityTranslation,
}: {
  zone: CardZoneValue;
  ninetyMinutesTranslation: string;
  oneDayTranslation: string;
  sevenDaysTranslation: string;
  thirtyDaysTranslation: string;
  estimatedPriceIsTranslation: string;
  youChooseZoneATranslation: string;
  youChooseZoneBTranslation: string;
  youChooseZoneAAndBTranslation: string;
  youChooseTranslation: string;
  cardValidityTranslation: string;
}) => {
  const {
    nextPageUrl,
    handleValidityOnChange,
    selectedValidityEstimatedPricing,
  } = useCardValidity({ zone });

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

  return (
    <Grid container rowSpacing={3}>
      <Grid item xs={12}>
        <Typography variant="h1" sx={{ fontSize: 16 }}>
          {youChooseTranslation} <b>{chosenZone}</b>
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <FormControl fullWidth>
          <FormLabel id="card-validity">{cardValidityTranslation}</FormLabel>
          <RadioGroup
            aria-labelledby="card-validity"
            defaultValue={CardValidityValue.NINETY_MINUTES}
            name="card-validity"
            onChange={handleValidityOnChange}
          >
            <FormControlLabel
              value={CardValidityValue.NINETY_MINUTES}
              control={<Radio />}
              label={ninetyMinutesTranslation}
            />
            <FormControlLabel
              value={CardValidityValue.ONE_DAY}
              control={<Radio />}
              label={oneDayTranslation}
            />
            <FormControlLabel
              value={CardValidityValue.SEVEN_DAYS}
              control={<Radio />}
              label={sevenDaysTranslation}
            />
            <FormControlLabel
              value={CardValidityValue.THIRTY_DAYS}
              control={<Radio />}
              label={thirtyDaysTranslation}
            />
            <Button variant="contained" href={nextPageUrl}>
              Next
            </Button>
          </RadioGroup>
        </FormControl>
      </Grid>
      {selectedValidityEstimatedPricing && (
        <Grid item xs={12}>
          <Typography>{estimatedPriceIsTranslation}:</Typography>
          <Typography>{selectedValidityEstimatedPricing}</Typography>
        </Grid>
      )}
    </Grid>
  );
};

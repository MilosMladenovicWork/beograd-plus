import * as React from "react";
import {
  Checkbox,
  FormControl,
  FormControlLabel,
  FormGroup,
  FormLabel,
  Grid,
  Typography,
} from "@mui/material";
import { Button } from "gatsby-theme-material-ui";
import { useCardZones } from "../hooks/use-card-zones";

export const CardZonesForm = ({
  cardZonesTranslation,
  zoneATranslation,
  zoneBTranslation,
  nextTranslation,
  yourCardWillBeValidInFollowingMunicipalitiesTranslation,
  estimatedPriceRangeDependingOnValidityTimeIsTranslation,
  toTranslation,
}: {
  cardZonesTranslation: string;
  zoneATranslation: string;
  zoneBTranslation: string;
  nextTranslation: string;
  yourCardWillBeValidInFollowingMunicipalitiesTranslation: string;
  estimatedPriceRangeDependingOnValidityTimeIsTranslation: string;
  toTranslation: string;
}) => {
  const {
    nextPageUrl,
    handleZoneACheckboxOnChange,
    handleZoneBCheckboxOnChange,
    selectedZoneMunicipalities,
    selectedZoneEstimatedPricing,
  } = useCardZones();

  return (
    <Grid container rowSpacing={3}>
      <Grid item xs={12}>
        <FormControl fullWidth>
          <FormLabel id="card-zones">{cardZonesTranslation}</FormLabel>
          <FormGroup aria-labelledby="card-zones">
            <FormControlLabel
              control={<Checkbox defaultChecked />}
              label={zoneATranslation}
              value="a"
              onChange={handleZoneACheckboxOnChange}
            />
            <FormControlLabel
              control={<Checkbox />}
              label={zoneBTranslation}
              value="b"
              onChange={handleZoneBCheckboxOnChange}
            />
            {nextPageUrl && (
              <Button href={nextPageUrl} variant="contained">
                {nextTranslation}
              </Button>
            )}
          </FormGroup>
        </FormControl>
      </Grid>
      {selectedZoneMunicipalities && (
        <Grid item xs={12}>
          <Typography>
            {yourCardWillBeValidInFollowingMunicipalitiesTranslation}:
          </Typography>
          <Typography variant="body2">
            {selectedZoneMunicipalities.join(", ")}
          </Typography>
        </Grid>
      )}
      {selectedZoneEstimatedPricing && (
        <Grid item xs={12}>
          <Typography>
            {estimatedPriceRangeDependingOnValidityTimeIsTranslation}:
          </Typography>
          <Typography>
            {selectedZoneEstimatedPricing.from} {toTranslation}{" "}
            {selectedZoneEstimatedPricing.to}
          </Typography>
        </Grid>
      )}
    </Grid>
  );
};

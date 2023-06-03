import * as React from "react";
import {
  Checkbox,
  FormControl,
  FormControlLabel,
  FormControlLabelProps,
  FormGroup,
  FormLabel,
  Radio,
  RadioGroup,
} from "@mui/material";
import { Button } from "gatsby-theme-material-ui";
import { useCallback, useEffect, useState } from "react";
import { useCardZones } from "../hooks/use-card-zones";

export const CardZonesForm = () => {
  const {
    nextPageUrl,
    handleZoneACheckboxOnChange,
    handleZoneBCheckboxOnChange,
  } = useCardZones();

  return (
    <FormControl>
      <FormLabel id="card-zones">Card zones</FormLabel>
      <FormGroup aria-labelledby="card-zones">
        <FormControlLabel
          control={<Checkbox defaultChecked />}
          label="Zone A"
          value="a"
          onChange={handleZoneACheckboxOnChange}
        />
        <FormControlLabel
          control={<Checkbox />}
          label="Zone B"
          value="b"
          onChange={handleZoneBCheckboxOnChange}
        />
        {nextPageUrl && (
          <Button href={nextPageUrl} variant="contained">
            Next
          </Button>
        )}
      </FormGroup>
    </FormControl>
  );
};

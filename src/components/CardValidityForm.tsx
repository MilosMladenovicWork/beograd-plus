import * as React from "react";
import {
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
} from "@mui/material";
import { CardValidityValue, useCardValidity } from "../hooks/use-card-validity";
import { Button } from "gatsby-theme-material-ui";

export const CardValidityForm = () => {
  const { nextPageUrl, handleValidityOnChange } = useCardValidity();
  return (
    <FormControl>
      <FormLabel id="card-validity">Card Validity</FormLabel>
      <RadioGroup
        aria-labelledby="card-validity"
        defaultValue={CardValidityValue.NINETY_MINUTES}
        name="card-validity"
        onChange={handleValidityOnChange}
      >
        <FormControlLabel
          value={CardValidityValue.NINETY_MINUTES}
          control={<Radio />}
          label="90 minutes"
        />
        <FormControlLabel
          value={CardValidityValue.ONE_DAY}
          control={<Radio />}
          label="1 Day"
        />
        <FormControlLabel
          value={CardValidityValue.SEVEN_DAYS}
          control={<Radio />}
          label="7 Days"
        />
        <FormControlLabel
          value={CardValidityValue.THIRTY_DAYS}
          control={<Radio />}
          label="30 Days"
        />
        <Button variant="contained" href={nextPageUrl}>
          Next
        </Button>
      </RadioGroup>
    </FormControl>
  );
};

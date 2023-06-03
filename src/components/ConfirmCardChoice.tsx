import * as React from "react";
import { Button } from "gatsby-theme-material-ui";
import { CardZoneValue } from "../hooks/use-card-zones";
import { CardValidityValue } from "../hooks/use-card-validity";
import { useConfirmCardChoice } from "../hooks/use-confirm-card-choice";

export const ConfirmCardChoice = ({
  zone,
  validity,
}: {
  zone: CardZoneValue;
  validity: CardValidityValue;
}) => {
  const { smsHref } = useConfirmCardChoice(zone, validity);

  return (
    <Button href={smsHref} variant="contained">
      Create SMS
    </Button>
  );
};

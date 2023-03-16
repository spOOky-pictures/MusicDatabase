import React, { useEffect, useState } from 'react';
import Button from "@mui/material/Button";

const ButtonComponent = (props) => {
  return (
    <Button
      variant={props.buttonVariant}
      color={props.buttonColor}
      size={props.buttonSize}
      sx={
        {
            marginBottom: 10,
            marginTop: 10,
            background: '#D9D9D9'
        }
      }
    >
        {props.buttonText}
    </Button>
  );
}

export default ButtonComponent;
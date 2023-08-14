import React, { useState } from "react";
import { TextField, Typography, Grid, IconButton } from "@mui/material";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";

const GuestPicker = () => {
  const [showOptions, setShowOptions] = useState(false);
  const [adults, setAdults] = useState(0);
  const [children, setChildren] = useState(0);

  const getDisplayValue = () => {
    if (adults + children === 0) {
      return "";
    }
    let ret = ``;
    if (adults > 0) {
      ret += `${adults} adults; `;
    }
    if (children > 0) {
      ret += `${children} children`;
    }
    return `${adults + children} Guests : ${ret}`;
  };

  return (
    <div className="loc-search">
      <div className="loc-input" style={{ border: showOptions ? `1px solid black` : `` }}>
        <Typography variant="subtitle1" htmlFor="add-loc">
          Guests
        </Typography>
        <TextField
          type="text"
          name="location"
          id="add-loc"
          value={getDisplayValue()}
          placeholder="Add Location..."
          onFocus={(e) => {
            e.target.style.outline = `none`;
            setShowOptions(true);
          }}
        />
      </div>
      {showOptions && (
        <div className="guest-options">
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <div className="option">
                <Typography variant="h6">Adults</Typography>
                <Typography variant="subtitle2">Ages 13 or above</Typography>
                <div className="guest-input">
                  <IconButton
                    onClick={() => {
                      setAdults((prev) => (prev > 0 ? prev - 1 : 0));
                    }}
                  >
                    <RemoveCircleOutlineIcon />
                  </IconButton>
                  <TextField type="text" value={adults} />
                  <IconButton
                    onClick={() => {
                      setAdults((prev) => prev + 1);
                    }}
                  >
                    <AddCircleOutlineIcon />
                  </IconButton>
                </div>
              </div>
            </Grid>
            <Grid item xs={6}>
              <div className="option">
                <Typography variant="h6">Children</Typography>
                <Typography variant="subtitle2">Ages 2-12</Typography>
                <div className="guest-input">
                  <IconButton
                    onClick={() => {
                      setChildren((prev) => (prev > 0 ? prev - 1 : 0));
                    }}
                  >
                    <RemoveCircleOutlineIcon />
                  </IconButton>
                  <TextField type="text" value={children} />
                  <IconButton
                    onClick={() => {
                      setChildren((prev) => prev + 1);
                    }}
                  >
                    <AddCircleOutlineIcon />
                  </IconButton>
                </div>
              </div>
            </Grid>
          </Grid>
        </div>
      )}
    </div>
  );
};

export default GuestPicker;

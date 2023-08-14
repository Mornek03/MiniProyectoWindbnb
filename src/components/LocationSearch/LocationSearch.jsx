import React, { useState } from "react";
import { TextField, Typography, Container, Grid, IconButton, Paper } from "@mui/material";
import PlaceIcon from "@mui/icons-material/Place";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";

const LocationSearch = () => {
  const [showResults, setShowResults] = useState(false);

  return (
    <Container>
      <div className="loc-search">
        <Paper className="loc-input" elevation={showResults ? 1 : 0}>
          <Typography variant="subtitle1" htmlFor="add-loc">
            Location
          </Typography>
          <TextField
            type="text"
            name="location"
            id="add-loc"
            placeholder="Add Location..."
            onFocus={(e) => {
              e.target.style.outline = "none";
              setShowResults(true);
            }}
            onBlur={() => {
              setShowResults(false);
            }}
          />
        </Paper>
        {showResults && (
          <div className="loc-search-results">
            <div className="loc-result">
              <PlaceIcon />
              <Typography variant="body2">Helsinki, Finland</Typography>
            </div>
            <div className="loc-result">
              <PlaceIcon />
              <Typography variant="body2">Helsinki, Finland</Typography>
            </div>
            <div className="loc-result">
              <PlaceIcon />
              <Typography variant="body2">Helsinki, Finland</Typography>
            </div>
            <div className="loc-result">
              <PlaceIcon />
              <Typography variant="body2">Helsinki, Finland</Typography>
            </div>
            <div className="loc-result">
              <PlaceIcon />
              <Typography variant="body2">Helsinki, Finland</Typography>
            </div>
          </div>
        )}
      </div>
    </Container>
  );
};

export default LocationSearch;

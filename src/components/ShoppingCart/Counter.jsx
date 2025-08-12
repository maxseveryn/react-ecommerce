import React from "react";
import { IconButton, TextField, Box } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";

export default function Counter({ quantity, onIncrement, onDecrement }) {
  return (
    <Box sx={{ display: "flex", alignItems: "center", gap: 0.5 }}>
      <IconButton
        color="primary"
        size="small"
        onClick={onDecrement}
        disabled={quantity === 0}
        aria-label="Decrease"
      >
        <RemoveIcon fontSize="small" />
      </IconButton>

      <TextField
        value={quantity}
        size="small"
        inputProps={{
          style: {
            textAlign: "center",
            padding: "2px",
            color: "#16a34a",
          },
          readOnly: true,
        }}
        sx={{ width: 40 }}
      />

      <IconButton
        color="primary"
        size="small"
        onClick={onIncrement}
        aria-label="Increase"
      >
        <AddIcon fontSize="small" />
      </IconButton>
    </Box>
  );
}

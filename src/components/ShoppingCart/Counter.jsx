import React, { useState } from "react";
import { IconButton, TextField, Box } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";

export default function Counter() {
  const [count, setCount] = useState(0);

  const increment = () => setCount((c) => c + 1);
  const decrement = () => setCount((c) => Math.max(0, c - 1));

  return (
    <Box sx={{ display: "flex", alignItems: "center", gap: 0.5 }}>
      <IconButton
        color="primary"
        size="small"
        onClick={decrement}
        disabled={count === 0}
        aria-label="Decrease"
      >
        <RemoveIcon fontSize="small" />
      </IconButton>

      <TextField
        value={count}
        size="small"
        onChange={(e) => {
          const val = parseInt(e.target.value);
          if (!isNaN(val) && val >= 0) setCount(val);
        }}
        inputProps={{ style: { textAlign: "center", padding: "2px" } }}
        sx={{ width: 40 }}
      />

      <IconButton
        color="primary"
        size="small"
        onClick={increment}
        aria-label="Increase"
      >
        <AddIcon fontSize="small" />
      </IconButton>
    </Box>
  );
}

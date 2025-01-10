import * as React from "react";
import CircularProgress from "@mui/material/CircularProgress";
import { Box } from "@mui/material";

export default function CircularSize() {
  return (
    <Box sx={{ display: "flex", justifyContent: "center", zIndex: 10 }}>
      <CircularProgress size="200px" />
    </Box>
  );
}

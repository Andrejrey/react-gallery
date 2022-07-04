import React from "react";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import "../pagination.css";

const outerTheme = createTheme({
  palette: {
    secondary: {
      main: "#fd2232",
    },
  },
});

export default function AppPagination() {
  return (
    <Stack spacing={2}>
      <ThemeProvider theme={outerTheme}>
        <Pagination className="pagination" count={10} color="secondary" />
      </ThemeProvider>
    </Stack>
  );
}

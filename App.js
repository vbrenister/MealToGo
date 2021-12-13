import React from "react";

import { RestaurantsScreen } from "./src/features/screens/restaurants.screen";
import { ThemeProvider } from "styled-components/native";

import { theme } from "./src/infrastructure/theme";

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <RestaurantsScreen />
    </ThemeProvider>
  );
}

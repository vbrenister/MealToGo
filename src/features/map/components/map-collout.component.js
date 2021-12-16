import React from "react";

import { CompactRestaurantInfo } from "../../restaurants/components/compact-restaurants-info.component";

export const MapCallout = ({ restaurant }) => {
  return <CompactRestaurantInfo restaurant={restaurant} />;
};

import React, { useState } from "react";
import { StatusBar } from "react-native";
import { Searchbar } from "react-native-paper";
import styled from "styled-components/native";

import { RestaurantInfoCard } from "../components/restaurant-info-card.component";

const RestaurantScreenArea = styled.SafeAreaView`
  flex: 1;
  margin-top: ${StatusBar.currentHeight}px;
`;

const RestaurantSearchArea = styled.View`
  padding: 16px;
`;

const RestaurantsList = styled.View`
  flex: 1;
  padding: 16px;
  background-color: blue;
`;

export const RestaurantsScreen = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const onChangeSearch = (query) => {
    console.log(query);
    setSearchQuery(query);
  };

  return (
    <RestaurantScreenArea>
      <RestaurantSearchArea>
        <Searchbar
          placeholder="Search"
          onChangeText={onChangeSearch}
          value={searchQuery}
        />
      </RestaurantSearchArea>

      <RestaurantsList>
        <RestaurantInfoCard />
      </RestaurantsList>
    </RestaurantScreenArea>
  );
};

import React, { useState, useContext } from "react";

import styled from "styled-components/native";
import { Spacer } from "../../components/spacer/spacer.component";
import { ActivityIndicator, Colors } from "react-native-paper";

import { RestaurantsContext } from "../../services/restaurants/restaurants.context";

import { RestaurantInfoCard } from "../components/restaurant-info-card.component";
import { SafeArea } from "../../components/utility/safe-area.component";
import { Search } from "../components/search.component";

const RestaurantList = styled.FlatList.attrs({
  contentContainerStyle: { padding: 16 },
})``;

const Loading = styled(ActivityIndicator)`
  margin-left: -25px;
`;

const LoadingContainer = styled.View`
  position: absolute;
  top: 50%;
  left: 50%;
`;

export const RestaurantsScreen = () => {
  const { isLoading, error, restaurants } = useContext(RestaurantsContext);

  return (
    <SafeArea>
      {isLoading && (
        <LoadingContainer>
          <Loading animating={true} color={Colors.red800} size="large" />
        </LoadingContainer>
      )}
      <Search />
      {
        <RestaurantList
          data={restaurants}
          renderItem={({ item }) => (
            <Spacer position="bottom" size="large" key={item.name}>
              <RestaurantInfoCard restaurant={item} />
            </Spacer>
          )}
          keyExtractor={(item) => item.name}
        />
      }
    </SafeArea>
  );
};

import { View, Text, SafeAreaView, ScrollView } from 'react-native';
import React from 'react';
import HeaderTabs from '../components/HeaderTabs';
import SearchBar from '../components/SearchBar';
import Categories from '../components/Categories';
// import { ScrollView } from 'react-native-web';
import RestaurantItems, { localRestaurants } from '../components/RestaurantItems';
import { useEffect } from 'react';


const YELP_API_KEY = "Uro3nAsCbRTCXcXs2IJAifgY2WMW7nFP2NJRY07DeYlH9bvDzpploF5pgqFsywf0DCFhGvIjm8ff0w1dpdWE-5PJ0I3lGUsXvPVOXH2q40EiEBNPniJgsMgol_j0YXYx";

export default function Home() {

  const [restaurantData, setRestaurantData] = React.useState(localRestaurants);

  const getRestaurantsFromYelp = () => {
    const yelpUrl = 'https://api.yelp.com/v3/businesses/search?term=restaurant&location=Toronto';

  const apiOptions = {
    headers: {
      Authorization: `Bearer ${YELP_API_KEY}`,
    }
  }

    return fetch(yelpUrl, apiOptions)
            .then((res) => res.json())
            .then((json) => setRestaurantData(json.businesses));
  };

  useEffect(() => {
    getRestaurantsFromYelp()
  }, []);

  return (
    <SafeAreaView style={{ backgroundColor: "#eee", flex: 1 }}>
        <View style={{ backgroundColor: "white", padding: 15 }}>
            <HeaderTabs />
            <SearchBar />
        </View>
        <ScrollView showsVerticalScrollIndicator={false}>
          <Categories />

          <RestaurantItems RestaurantData={restaurantData} />
          
        </ScrollView>
    </SafeAreaView>
  );
}

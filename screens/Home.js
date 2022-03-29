import { View, Text, SafeAreaView, ScrollView } from 'react-native';
import React from 'react';
import HeaderTabs from '../components/home/HeaderTabs';
import SearchBar from '../components/home/SearchBar';
import Categories from '../components/home/Categories';
// import { ScrollView } from 'react-native-web';
import RestaurantItems, { localRestaurants } from '../components/home/RestaurantItems';
import { useEffect, useState } from 'react';
// import { Divider } from 'react-native-elements';
import BottomTabs from '../components/home/BottomTabs';


const YELP_API_KEY = "Uro3nAsCbRTCXcXs2IJAifgY2WMW7nFP2NJRY07DeYlH9bvDzpploF5pgqFsywf0DCFhGvIjm8ff0w1dpdWE-5PJ0I3lGUsXvPVOXH2q40EiEBNPniJgsMgol_j0YXYx";

export default function Home() {

  const [restaurantData, setRestaurantData] = React.useState(localRestaurants);
  const [city, setCity] = useState("San Francisco");
  const [activeTab, setActiveTab] = useState("Delivery");

  const getRestaurantsFromYelp = () => {
    const yelpUrl = `https://api.yelp.com/v3/businesses/search?term=restaurant&location=${city}`;

  const apiOptions = {
    headers: {
      Authorization: `Bearer ${YELP_API_KEY}`,
    }
  }

    return fetch(yelpUrl, apiOptions)
            .then((res) => res.json())
            .then((json) => setRestaurantData(json.businesses.filter((business) => business.transactions.includes(activeTab.toLowerCase())
            )
            )
          );
  };

  useEffect(() => {
    getRestaurantsFromYelp()
  }, [city, activeTab]);

  return (
    <SafeAreaView style={{ backgroundColor: "#eee", flex: 1 }}>
        <View style={{ backgroundColor: "white", padding: 15 }}>
            <HeaderTabs activeTab={activeTab} setActiveTab={setActiveTab}/>
            <SearchBar cityHandler={setCity} />
        </View>
        <ScrollView showsVerticalScrollIndicator={false}>
          <Categories />

          <RestaurantItems RestaurantData={restaurantData}/>
          
        </ScrollView>
        {/* <Divider width={1} /> */}
        <BottomTabs />
    </SafeAreaView>
  );
}

import { View, Text, Image, ScrollView } from 'react-native';
import React from 'react';

const items = [{
    image: require("../assets/images/shopping-bag.png"),
    text: "Pick-up",
},
{
    image: require("../assets/images/soft-drink.png"),
    text: "Soft Drinks",
},
{
    image: require("../assets/images/bread.png"),
    text: "Bakery Items",
},
{
    image: require("../assets/images/fast-food.png"),
    text: "Fast Foods",
},
];  

export default function Categories() {
  return (
    <ScrollView horizontal>
        <View style={{alignItems: "center", marginRight: 30,}}>
            <Image source={items[0].image} style={{width: 50, height: 40, resize: "contain"}}/>
            <Text style={{
                fontSize: 13,
                fontWeight: "900",
            }}>{items[0].text}
            </Text>
      </View>
    </ScrollView>
  );
}

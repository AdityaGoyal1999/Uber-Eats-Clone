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
    image: require("../assets/images/desserts.png"),
    text: "Desserts",
},
{
    image: require("../assets/images/fast-food.png"),
    text: "Fast Foods",
},
];  

export default function Categories() {
  return (
      <View style={{
          marginTop: 5,
          backgroundColor: "white",
          paddingVertical: 10, 
          paddingLeft: 20,
      }}>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>

            {/* loop starts here */}
            {items.map((item, index) => (
                <View key={index} style={{alignItems: "center", marginRight: 30,}}>
                    <Image source={item.image} style={{
                        width: 50, 
                        height: 40,
                        // resize: "contain",
                    }}/>
                    <Text style={{
                        fontSize: 13,
                        fontWeight: "900",
                    }}>{item.text}
                    </Text>
                </View>
        ))}
        </ScrollView>
    </View>
  );
}

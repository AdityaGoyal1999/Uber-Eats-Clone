import { View, Text } from 'react-native';
import React from 'react';
import FontAwesome5 from "react-native-vector-icons/FontAwesome5"


export default function BottomTabs() {
  return (
    <View style={{
      flexDirection: "row", 
      margin: 10,
      marginHorizontal: 30,
      justifyContent: "space-between",
    }}>
      
      {/* icon subcomponent icon_name and text */}
      {/* <Icon name="home" text="home"></Icon> */}
      {/* <Icon icon="home" text="home"></Icon>
      <Icon icon="home" text="home"></Icon>
      <Icon icon="home" text="home"></Icon>
      <Icon icon="home" text="home"></Icon> */}


    </View>
  );
}

const Icon = (props) => {
<View>
    <FontAwesome5
          name={props.name} 
          size={25}   
          style={{
            marginBottom: 3,
            alignSelf: "center",
          }}
    />
    <Text>{props.text}</Text>
</View>
}
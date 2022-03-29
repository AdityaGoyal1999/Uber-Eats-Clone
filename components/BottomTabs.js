import { View, Text } from 'react-native';
import React from 'react';

export default function BottomTabs() {
  return (
    <View style={{
      flexDirection: "row", 
      margin: 10,
      marginHorizontal: 30,
      justifyContent: "space-between",
    }}>
      
      {/* icon component */}
      <Text>BOTTOM</Text>
      <Text>BOTTOM</Text>
      <Text>BOTTOM</Text>

    </View>
  );
}


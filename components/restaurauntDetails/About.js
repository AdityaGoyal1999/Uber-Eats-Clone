import { View, Text, Image } from 'react-native'
import React from 'react'


const image_url = 'https://media-cdn.tripadvisor.com/media/photo-s/11/45/b4/61/beachside-restaurant.jpg';

const title = 'Farmhouse Thai Restaurant';
const description = "Thai . Comfort Food . $$"

export default function About() {
  return (
    <View>
      {/* Added subcomponents */}
      {/* <Image source={{uri: image_url}}/> */}
      <Text>{description}</Text>
      {/* Restaurant Image */}
      {/* <RestaurantImage image={image} /> */}
      {/* Restaurant Title */}
      {/* Restaurant Description */}
    </View>
  )
}

const RestaurantImage = (props) => {
  <Image 
      source={{uri: props.image}}
      style={{
        width: "100%",
        height: 180,
      }}
  />

}
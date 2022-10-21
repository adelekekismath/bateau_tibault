
import React from 'react';
import { TouchableOpacity } from 'react-native';
import { Card, Title } from 'react-native-paper';
import { RestaurantContextProvider } from '../contexts/RestaurantsContext';
import navigation from '../navigation';
import Navigation from '../navigation';

export type Restaurant = {
    name: string;
    description: string;
    image: string;
    
};

export type RestaurantProps = {
    data : Restaurant ;
    onPress: (Restaurant : Restaurant)=>void
};



    


export default function RestaurantInfo(props: RestaurantProps) {
    return (
      <TouchableOpacity >
      <Card>
      <Card.Content>
        <Title>{props.data.name}</Title>
      </Card.Content>
      <Card.Cover source={{ uri: props.data.image }}/>
    </Card>
 </TouchableOpacity>
       
       
      );
}



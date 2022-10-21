
import React from 'react';
import { Card } from 'react-bootstrap';
import { TouchableOpacity } from 'react-native';
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
        <Title>{props.data.namee}</Title>
      </Card.Content>
      <Card.Cover source={{ uri: props.data.image }}/>
    </Card>
 </TouchableOpacity>
       
       
      );
}



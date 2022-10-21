
import React from 'react';
import { TouchableOpacity } from 'react-native';
import { Card, Title } from 'react-native-paper';
import { RestaurantContextProvider } from '../contexts/RestaurantsContext';
import navigation from '../navigation';
import Navigation from '../navigation';

export type List = {
    name: string;
    description: string;
    image: string;
    
};

export type ListProps = {
    data : List ;
    onPress: (List : List)=>void
};

export default function ListInfo(props: ListProps) {
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



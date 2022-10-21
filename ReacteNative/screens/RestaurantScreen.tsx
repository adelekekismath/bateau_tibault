import React, { useContext } from 'react';
import { Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';
import { SafeAreaView, ScrollView, StatusBar, StyleSheet, TouchableOpacity } from 'react-native';
import RestaurantInfo, { Restaurant } from '../components/RestautantInfo';
import { Text, View } from '../components/Themed';
import { RestaurantContextProvider, RestaurantsContext } from '../contexts/RestaurantsContext';
import { RootTabScreenProps } from '../types';


export default function RestaurantScreen({navigation}: RootTabScreenProps<'Restaurant'>){
const {restaurants} = useContext(RestaurantsContext);
const saveRestaurant= (_Object: any)=>{return navigation.navigate('RestaurantSingle', _Object)};
return (
    <SafeAreaView   style={styles.container}>
    <ScrollView contentContainerStyle={styles.contentContainer} horizontal={true}>
        {restaurants.map((item : Restaurant , index)=>{
         
            // return <RestaurantInfo data={item} onPress={() =>saveRestaurant(item)} key={index}/>
            return(   
            //onPress={() =>saveRestaurant(item)} 
         <TouchableOpacity key={index} onPress={() =>saveRestaurant(item)}>
          <Card>
    <Card.Title title="Card Title" subtitle="Card Subtitle"  />
             <Card.Content>
      <Title>{item.name}</Title>
    </Card.Content>
    <Card.Cover source={{ uri: item.image }}/>
  </Card>
        </TouchableOpacity>)
        })}
    </ScrollView>
  </SafeAreaView>
);
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
  Card : {
    margin : '5%',
  },
  contentContainer: {
    paddingVertical: 20 , 
    margin :'5%'
  }
});

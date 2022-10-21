import { StyleSheet, TouchableOpacity } from 'react-native';
import Button from 'react-bootstrap/Button';
import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import { RootTabScreenProps } from '../types';

export default function HomeScreen ({ navigation }: RootTabScreenProps<'Home'>) {
  const customDataRestaurant = require('../data/restaurants.json');
  const customDataBoat = require('../data/boats.json');
  const customDataRecette = require('../data/recettes.json');
  
  let onPress: ()=>void ; 
  let databoat = {};
    const affichecomponent = (element : string)=>{
      let _objectif = "List";
      if (element == "restaurant")
      {
        const result = JSON.stringify(customDataRestaurant)
        databoat = JSON.parse(result);
      }
      if (element == "boat")
      {
        const result = JSON.stringify(customDataBoat)
        databoat = JSON.parse(result);
      }
      if (element == "recette")
      {
        const result = JSON.stringify(customDataRecette)
        databoat = JSON.parse(result);
      }
      navigation.navigate(_objectif, databoat)
    };


  return (
   
    <View style={styles.container}>
      <TouchableOpacity onPress={() =>affichecomponent("restaurant")}> 
      <Button variant="primary">Restaurant</Button>
      </TouchableOpacity>
      <TouchableOpacity onPress={() =>affichecomponent("boat")}> 
      <Button variant="primary">Bateau</Button>
      </TouchableOpacity>
      <TouchableOpacity onPress={() =>affichecomponent("recette")}> 
      <Button variant="primary">Recette</Button>
      </TouchableOpacity>
      <TouchableOpacity onPress={() =>affichecomponent("boat")}> 
      <Button variant="primary">Contact</Button>
      </TouchableOpacity>
    </View>
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
});

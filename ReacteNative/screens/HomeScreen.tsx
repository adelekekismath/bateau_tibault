import { StyleSheet, TouchableOpacity } from 'react-native';
import Button from 'react-bootstrap/Button';
import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import { RootTabScreenProps } from '../types';

export default function HomeScreen ({ navigation }: RootTabScreenProps<'Home'>) {
  const customData = require('../data/boats.json');
  const customDataBoat = require('../data/boats.json');
  let onPress: ()=>void ; 
  let databoat = {};
    const affichecomponent = (_Object: any)=>{
      if (_Object == "Restaurant")
      {
        const result = JSON.stringify(customData)
        databoat = JSON.parse(result);
        navigation.navigate(_Object, databoat)
        console.log(databoat)
      }
      if (_Object == "List")
      {
        
        const result = JSON.stringify(customDataBoat)
        databoat = JSON.parse(result);
        navigation.navigate(_Object, databoat)
        console.log(databoat)
      }
    };


  return (
   
    <View style={styles.container}>
      <TouchableOpacity onPress={() =>affichecomponent("Restaurant")}> 
      <Button variant="primary">Restaurant</Button>
      </TouchableOpacity>
      <TouchableOpacity onPress={() =>affichecomponent("List")}> 
      <Button variant="primary">Boat</Button>
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

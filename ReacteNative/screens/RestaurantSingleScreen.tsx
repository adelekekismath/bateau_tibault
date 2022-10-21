import { useRoute } from '@react-navigation/native';
import RestaurantInfo, { Restaurant } from '../components/RestautantInfo';
import { RootTabScreenProps } from '../types';
import { StyleSheet } from 'react-native';
import { Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';


export default function RestaurantSingleScreen({ navigation }: RootTabScreenProps<'RestaurantSingle'>){
    // const { item } = this.props.route.params;
      const route = useRoute(); 
     // const { params } = this.route.params.user.name ;
      var dataSource: { name: any; description : any ; image : string}
      const item = route.params ; 
      const img = item.image; 
      if(route.params)
      {
        
      }
return (
  console.log(item.image),
  <Card>
    <Card.Content>
      <Title>{item.name}</Title>
      <Paragraph>{item.description}</Paragraph>
    </Card.Content>
    <Card.Cover source={{ uri: img }}/>
  </Card>
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

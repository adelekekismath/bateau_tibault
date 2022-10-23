import * as React from 'react';
import { Appbar , Avatar } from 'react-native-paper';
import { View } from '../components/Themed';
import { RootTabScreenProps } from '../types';
import { Text, StyleSheet } from "react-native";
import { Container } from 'react-bootstrap';

export default function ContactScreen ({ navigation }: RootTabScreenProps<'Contact'>) {
  const _goBack = () => navigation.navigate('Home'); 

  return (
    <>
     <Appbar.Header>
      <Appbar.BackAction onPress={_goBack} />
      <Appbar.Content title="Contact" />
    </Appbar.Header>
    <Container style={styles.container}>
    <View style={{ flex: 0.5, flexDirection: 'column' , height: 100  , justifyContent : 'center' , backgroundColor:'none' }}>
    <Text style={{color :'blue' , fontSize:21}}>Le bateau de thibeault</Text>
    <br/>
    <br/>
    <Avatar.Image style={{marginLeft:10}} size={200} source={require('../assets/images/photothibeau.jpg')} />
    <br/>
  <Text>0663999978
    <br/>
    bateauthibeau@gmail.com</Text>
  <br/>Cassii montis illius celsi praetermeans funditur in Parthenium mare, Gnaeus Pompeius superato Tigrane regnis Armeniorum abstractas dicioni Romanae coniunxit
  <br/>Has autem provincias, quas Orontes ambiens amnis imosque pedes 
    </View>
    </Container>
   </>
  );
};
const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        fontFamily : 'Fjalla One',
        margin : '20%',
        marginTop : '70%',
        textAlign : 'center'  
      }
})
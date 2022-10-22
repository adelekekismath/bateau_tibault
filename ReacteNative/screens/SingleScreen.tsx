import { useRoute } from "@react-navigation/native";
import React from "react";
import { View } from "../components/Themed";
import { RootTabScreenProps } from "../types";
import { StyleSheet, TouchableOpacity } from 'react-native';
import Button from 'react-bootstrap/Button';
import { Appbar, Avatar, Card, Paragraph, Title } from "react-native-paper";


export default function SingleScreen ({ navigation , route }: RootTabScreenProps<'SingleElement'>) {
    
     var dataSource: { name: any; description : any ; image : string}
     const item = route.params ; 
     const img = item.image; 
     const _goBack = () => navigation.goBack(); 
    return (
      <>
      <Appbar.Header>
      <Appbar.BackAction onPress={_goBack} />

      <TouchableOpacity style={{margin: 'auto'}} onPress={()=>{navigation.push('Home')}}>
                  <Avatar.Image 
                      size={40}
                      source={require('../assets/images/log.png')}
                  />
              </TouchableOpacity>
      
      <Appbar.Action icon="home" onPress={()=>{navigation.push('Home')}} />
    </Appbar.Header>
       <Card style={styles.card}>
       <Card.Content>
         <Title style={styles.text}>{item.name}</Title>
         <br/>
       <Card.Cover source={{ uri: img }}/>
        <br/>
       <Paragraph>{item.description}</Paragraph>
       </Card.Content>
     </Card>
     </>
   );
      
      }
      const styles = StyleSheet.create({
        card:{
          marginHorizontal:20,
          borderRadius : 30,
          marginTop : '10%'
        },
        text: {
          marginTop:'10%',
          textAlign : 'center',
          color: 'black',
          },
      })
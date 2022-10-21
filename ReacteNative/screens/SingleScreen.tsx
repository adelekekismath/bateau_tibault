import { useRoute } from "@react-navigation/native";
import React from "react";
import { View } from "../components/Themed";
import { RootTabScreenProps } from "../types";
import { StyleSheet, TouchableOpacity } from 'react-native';
import Button from 'react-bootstrap/Button';
import { Card, Paragraph, Title } from "react-native-paper";


export default function SingleScreen ({ navigation , route }: RootTabScreenProps<'SingleElement'>) {
    
     var dataSource: { name: any; description : any ; image : string}
     const item = route.params ; 
     const img = item.image; 
    return (
       console.log(route.params),
       <Card>
       <Card.Content>
         <Title>{item.name}</Title>
         <Paragraph>{item.description}</Paragraph>
       </Card.Content>
       <Card.Cover source={{ uri: img }}/>
     </Card>
   );
          

       
   
   
      
      }
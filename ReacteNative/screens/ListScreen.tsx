import { useRoute } from "@react-navigation/native";
import React from "react";
import { View } from "../components/Themed";
import { RootTabScreenProps } from "../types";
import { SafeAreaView, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';

import { Card, FAB, Button, Title } from "react-native-paper";
import { white } from "react-native-paper/lib/typescript/styles/themes/v2/colors";



export default function ListScreen ({ navigation }: RootTabScreenProps<'List'>) {
    const route = useRoute(); 
    const savelementinformation= (_Object: any)=>{return navigation.navigate("SingleElement" ,_Object) };
    return (
       console.log("Hi"),
       <SafeAreaView   style={styles.container} >
       <ScrollView style={styles.contentContainer} horizontal={true} >

       {route.params.map((userData) => {
            return  (
                <TouchableOpacity style={styles.contentContainer} onPress={() =>savelementinformation(userData)} >
     
                 <Card style={styles.Card}> <Button icon="plus" > </Button>
    <Card.Title title={userData.name} />
             {/* <Card.Content>
      <Title>{userData.name}</Title>
    </Card.Content> */}
    <Card.Cover source={{ uri: userData.image }}/>
  </Card>
              </TouchableOpacity>
              
       )})
            }
        </ScrollView>
        </SafeAreaView>
      
    );
      }

      const styles = StyleSheet.create({
        fab: {
            position: 'absolute',
            margin: 16,
            right: 0,
            bottom: 0,
            color:'white'
          },
        container: {
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
        },
        title: {
          fontSize: 20,
          fontWeight: 'bold',
        },
        Card : {
        
        width : '80%',
         marginRight : '-20%'
        },
        contentContainer: {
            height: 0.8,
            width: '90%',
        
        },
        scrollView: {
            marginHorizontal: 20,
            paddingVertical: 20 , 
            paddingHorizontal : 20 
          },
      });
      
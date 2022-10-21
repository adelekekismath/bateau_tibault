import { useRoute } from "@react-navigation/native";
import React from "react";
import { View } from "../components/Themed";
import { RootTabScreenProps } from "../types";
import { StyleSheet, TouchableOpacity } from 'react-native';
import Button from 'react-bootstrap/Button';


export default function ListScreen ({ navigation }: RootTabScreenProps<'List'>) {
    const route = useRoute(); 
    const savelementinformation= (_Object: any)=>{return navigation.navigate("SingleElement" ,_Object) };
    return (
        route.params.map((userData) => {
            return  (
                <TouchableOpacity onPress={() =>savelementinformation(userData)} > 
              <Button variant="primary">{userData.name}</Button>
              </TouchableOpacity>
              );
        })
    );
   
      
      }
import { StyleSheet, TouchableOpacity,Image } from "react-native";
import { Avatar, Button } from "react-native-paper";
import { Text, View } from "../components/Themed";
import { RootTabScreenProps } from "../types";
import { First } from "react-bootstrap/esm/PageItem";
import { Container} from "react-bootstrap";
import Card from 'react-bootstrap/Card';
import { useRoute } from "@react-navigation/native";
import {CartContextProvider,
  CreateCartContext, Product} from "../contexts/CartContext"
import { useContext } from "react";

export default function ProductsListScreen({ navigation }: RootTabScreenProps<"ProductsList">) {
  const route = useRoute();
  
  const context = useContext(contextObject);
   const goToCart = () => {
    //productsData = JSON.parse(data);
    navigation.navigate("Cart");
   
  };
  
  return (
    
      
    
    route.params.map((product, idx) => {
      return (
        <div key={idx} className="col-md-12">
          <Card>
          <Card.Body>{product.name}
          <Button
            icon="plus"
            onPress={() => context.addProductToCart({item:product, quantity:1})}
          >
        </Button>
          </Card.Body>
          
          </Card>
        </div>
      );
    })
     
  );
}


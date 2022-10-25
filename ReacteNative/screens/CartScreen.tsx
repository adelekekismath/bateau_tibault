import { StyleSheet, TouchableOpacity,Image } from "react-native";
import { Text, View } from "../components/Themed";
import { RootTabScreenProps } from "../types";
import { Container, Card, Tab, Row,Col,ListGroup} from "react-bootstrap";
import { Avatar, Button } from "react-native-paper";
import { useContext } from "react";
import {CartContextProvider,
    CreateCartContext, Product} from "../contexts/CartContext"

export default function CartScreen({
  navigation,
}: RootTabScreenProps<"Cart">) {
  const data = require("../data/categories.json");
  const context = useContext(contextObject);
  let onPress: () => void;



  return (
    <>
   
        <div>
      <h2>Cart:</h2>
      {context.cart.map((cartItem, index) => {
        return (
          <div key={index}>
            <h2>{cartItem.item.name}</h2>
            <p> {cartItem.item.price}</p>
            <Button
              icon="plus"
              onPress={() => context.addProductToCart({item:cartItem.item, quantity:1})}
            >  
            </Button>
            <Button
                icon="home"
                onPress={() => context.removeProductFromCart(cartItem.item)}
            > 
            </Button>
          </div>
        )
      })}
    </div>
  </>
  );
}



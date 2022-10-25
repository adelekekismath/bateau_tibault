import { StyleSheet, TouchableOpacity,Image } from "react-native";
import { Text, View } from "../components/Themed";
import { RootTabScreenProps } from "../types";
import { Container, Card, Tab, Row,Col,ListGroup} from "react-bootstrap";
import { Avatar, Button } from "react-native-paper";

export default function ProductsCategoriesScreen({
  navigation,
}: RootTabScreenProps<"Category">) {
  const data = require("../data/categories.json");

  let onPress: () => void;
  let productsData = {};

  const goToProductsList = (productsData) => {
    //productsData = JSON.parse(data);
    navigation.navigate("ProductsList", productsData);
    console.log("kiss");
  };
  const goToCart = () => {
    //productsData = JSON.parse(data);
    navigation.navigate("Cart");
   
  };

  return (
    <>
    <Button icon="cart" onPress={() =>  goToCart()}  ></Button>
    <Tab.Container id="list-group-tabs-example" defaultActiveKey="#link1">
    
    <Row>
      <Col sm={12}>
        <ListGroup>
        {data.map((category) => {
            return (
              <>    
              <Button onPress={() =>  goToProductsList(category.products)}  key={category.name}  >
                {category.name}
              </Button>
              </>
            );
          })}
        </ListGroup>
      </Col>
    </Row>
  </Tab.Container>
  </>
  );
}

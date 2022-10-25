import { StyleSheet, TouchableOpacity, Image } from "react-native";
import { Avatar, Button } from "react-native-paper";
import { Text, View } from "../components/Themed";
import { RootTabScreenProps } from "../types";
import { First } from "react-bootstrap/esm/PageItem";
import { Container } from "react-bootstrap";

export default function HomeScreen({ navigation }: RootTabScreenProps<"Home">) {
  const customDataRestaurant = require("../data/restaurants.json");
  const customDataBoat = require("../data/boats.json");
  const customDataRecette = require("../data/recettes.json");

  let onPress: () => void;
  let databoat = {};
  const onGoToProductsCategory =() => {
    navigation.navigate("Category");
  }

  const affichecomponent = (element: string) => {
    let _objectif = "List";
    if (element == "restaurant") {
      const result = JSON.stringify(customDataRestaurant);
      databoat = JSON.parse(result);
    }
    if (element == "boat") {
      const result = JSON.stringify(customDataBoat);
      databoat = JSON.parse(result);
    }
    if (element == "recette") {
      const result = JSON.stringify(customDataRecette);
      databoat = JSON.parse(result);
    }
    navigation.navigate(_objectif, databoat);
  };

  return (
    <>
      <Button
        icon="contacts"
        style={styles.contact}
        labelStyle={{ color: "black" }}
        onPress={() => navigation.navigate("Contact")}
      >
        Contact
      </Button>
      <Container style={styles.container}>
        <Avatar.Image
          style={styles.image}
          size={200}
          source={require("../assets/images/log.png")}
        />

        <View
          style={{
            flex: 0.5,
            flexDirection: "row",
            height: 100,
            justifyContent: "center",
            backgroundColor: "none",
          }}
        >
          <TouchableOpacity>
            <Button style={styles.buttonblue} onPress={() =>  onGoToProductsCategory()} icon="cart" mode="contained">
              <Text style={styles.Text}>Produits</Text>
            </Button>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => affichecomponent("restaurant")}>
            <Button style={styles.buttonbeige} icon="home" mode="contained">
              <Text style={styles.Text}>Restaurants</Text>
            </Button>
          </TouchableOpacity>
        </View>
        <View
          style={{
            flex: 0.3,
            flexDirection: "row",
            justifyContent: "center",
            backgroundColor: "none",
          }}
        >
          <TouchableOpacity onPress={() => affichecomponent("boat")}>
            <Button style={styles.buttonbeige} icon="anchor" mode="contained">
              <Text style={styles.Text}>Bateau</Text>
            </Button>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => affichecomponent("recette")}>
            <Button style={styles.buttonblue} icon="fish" mode="contained">
              <Text style={styles.Text}>Recettes</Text>
            </Button>
          </TouchableOpacity>
        </View>
      </Container>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    fontFamily: "Fjalla One",
    marginTop: "30%",
    textAlign: "center",
  },
  boat: {
    height: "100%",
  },
  title: {
    fontSize: 100,
    fontWeight: "bold",
  },
  buttonblue: {
    height: 85,
    width: 150,
    textAlign: First,
    margin: 5,
    backgroundColor: "#b8c2d7",
  },
  buttonbeige: {
    height: 85,
    width: 150,
    textAlign: First,
    margin: 5,
    backgroundColor: "#d1d1d1",
    alignContent: "flex-end",
  },
  Text: {
    fontSize: 15,
    marginTop: 10,
  },
  image: {
    width: 200,
    height: 200,
    display: "flex",
    marginLeft: "auto",
    marginRight: "auto",
    marginBottom: 50,
    backgroundColor: "none",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
  textbienvenue: {
    marginLeft: "10%",
    color: "#428cff",
    fontSize: 21,
    fontWeight: "bold",
  },
  contact: {
    fontWeight: "bold",
    fontSize: 25,
    marginLeft: 250,
    flexDirection: "row-reverse",
  },
});

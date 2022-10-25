import { useRoute } from "@react-navigation/native";
import React from "react";
import { RootTabScreenProps } from "../types";
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { Text, View } from "../components/Themed";
import {
  Card,
  FAB,
  Button,
  Title,
  Appbar,
  IconButton,
  MD3Colors,
  Avatar,
} from "react-native-paper";

export default function ListScreen({ navigation }: RootTabScreenProps<"List">) {
  const route = useRoute();
  const savelementinformation = (_Object: any) => {
    return navigation.navigate("SingleElement", _Object);
  };
  const _goBack = () => navigation.goBack();

  return (
    <>
      <Appbar.Header>
        <Appbar.BackAction onPress={_goBack} />

        <TouchableOpacity
          style={{ margin: "auto" }}
          onPress={() => {
            navigation.push("Home");
          }}
        >
          <Avatar.Image
            size={40}
            source={require("../assets/images/log.png")}
          />
        </TouchableOpacity>

        <Appbar.Action
          icon="home"
          onPress={() => {
            navigation.push("Home");
          }}
        />
      </Appbar.Header>
      <Text style={styles.text}>
        <p style={{ fontWeight: "bold" }}>Nos Partenaires</p>
        <br />
        06.63.99.99.78
        <br />
        lebateaudethibault@gmail.com www.facebook.com/lebateaudethibault
      </Text>
      <SafeAreaView style={styles.container}>
        <ScrollView
          persistentScrollbar={true}
          pagingEnabled
          showsHorizontalScrollIndicator={true}
          style={styles.contentContainer}
          horizontal={true}
        >
          {route.params.map((userData) => {
            return (
              <TouchableOpacity onPress={() => savelementinformation(userData)}>
                <Card style={styles.Card}>
                  {/* <Button icon="plus" > </Button> */}
                  <IconButton
                    icon="plus"
                    size={20}
                    iconColor={MD3Colors.error50}
                  />
                  <Card.Title title={userData.name} />

                  <Card.Cover
                    style={styles.Card_image}
                    source={{ uri: userData.image }}
                  />
                </Card>
              </TouchableOpacity>
            );
          })}
        </ScrollView>
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 3,
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  text: {
    marginTop: "10%",
    textAlign: "center",
    color: "black",
  },
  Card: {
    borderRadius: 30,
    width: 180,
    marginRight: "10%",
    height: 400,
  },
  contentContainer: {
    height: "80%",
    width: "100%",
    marginTop: "10%",
  },
  scrollView: {
    marginHorizontal: 20,
    paddingVertical: 20,
    paddingHorizontal: 20,
  },
  Card_image: {
    flex: 1,
    margin: 10,
    justifyContent: "center",
    borderRadius: 10,
  },
});

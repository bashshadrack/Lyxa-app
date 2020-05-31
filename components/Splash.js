import React, { Component } from "react";
import { StyleSheet, Animated, Text, View, Image } from "react-native";

class Splash extends Component {
  constructor(props) {
    super(props);

    this.fadeAnimation = new Animated.Value(0);
  }

  componentDidMount() {
    Animated.timing(this.fadeAnimation, {
      toValue: 1,
      duration: 4000,
      useNativeDriver: true,
    }).start();
  }

  render() {
    return (
      <View style={styles.container}>
        <View>
          <Animated.Image
            source={require("../assets/images/Splash-icon.png")}
            style={[styles.Splash, { opacity: this.fadeAnimation }]}
          ></Animated.Image>
          <Image />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
    width: "110%",
    height: 110,
    justifyContent: "center",
  },
  Splash: {
    width: 365,
    height: 150,
    marginLeft: 10,
  },
});

export default Splash;

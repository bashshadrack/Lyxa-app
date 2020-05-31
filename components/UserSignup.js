import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  Button,
  View,
  Image,
} from "react-native";
import PhoneInput from "react-native-phone-input";
import CountryPicker from "react-native-country-picker-modal";

class UserSignup extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: ["User", "Event's Provider"],
      checked: 0,
      cca2: "",
    };
    this.onPressFlag = this.onPressFlag.bind(this);
    this.selectCountry = this.selectCountry.bind(this);
  }
  componentDidMount() {
    this.setState({
      pickerData: this.phone.getPickerData(),
    });
  }

  onPressFlag() {
    this.countryPicker.openModal();
  }

  selectCountry(country) {
    this.phone.selectCountry(country.cca2.toLowerCase());
    this.setState({ cca2: country.cca2 });
  }

  check = () => {
    var select = this.state.checked;
    switch (select) {
      case 0:
        return "User";
      case 1:
        return "Event's Provider";
      default:
        return null;
    }
  };
  render() {
    return (
      <View>
        <View style={styles.head}>
          <Image
            source={require("../assets/images/Splash-icon.png")}
            style={styles.Splashtitle}
          />
        </View>

        <View style={styles.body}>
          <Text style={styles.text1}> Welcome to Lyxa! </Text>
          <Text style={styles.text2}> I'm here to socialise!</Text>
          <View style={styles.selectbtnbg}>
            {this.state.data.map((data, key) => {
              return (
                <View key={key}>
                  {this.state.checked == key ? (
                    <TouchableOpacity>
                      <View style={styles.btn1}>
                        <Text style={styles.txtData}>{data}</Text>
                      </View>
                    </TouchableOpacity>
                  ) : (
                    <TouchableOpacity
                      onPress={() => {
                        this.setState({ checked: key });
                      }}
                    >
                      <View style={styles.btn2}>
                        <Text style={styles.txtData}>{data}</Text>
                      </View>
                    </TouchableOpacity>
                  )}
                </View>
              );
            })}
          </View>
          <View style={styles.telphne}>
            <Text style={styles.PhneData}>Phone</Text>
            <PhoneInput
              ref={(ref) => {
                this.phone = ref;
              }}
              onChange={(value) => this.selectCountry(value)}
              translation="eng"
              cca2={this.state.cca2}
              style={styles.phne}
              textProps={{ placeholder: "Enter Mobile Number" }}
            />

            {/* <CountryPicker
              ref={(ref) => {
                this.countryPicker = ref;
              }}
              onChange={(value) => this.selectCountry(value)}
              translation="eng"
              cca2={this.state.cca2}
            ></CountryPicker> */}
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  head: {
    backgroundColor: "#000",
    width: 375,
    height: 140,
    justifyContent: "center",
  },
  Splashtitle: {
    width: 160,
    height: 80,
    marginLeft: 100,
  },
  text1: {
    marginTop: 40,
    marginLeft: 10,
    color: "#000",
    fontSize: 30,
    fontWeight: "bold",
  },
  text2: {
    marginTop: 3,
    marginLeft: 10,
    color: "#000",
    fontSize: 18,
  },
  selectbtnbg: {
    width: 356,
    marginTop: 20,
    height: 55,
    backgroundColor: "#eeeef0",
    marginLeft: 10,
    borderRadius: 5,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    display: "flex",
  },
  btn1: {
    backgroundColor: "#fff",
    width: 190,
    height: 46,
    paddingLeft: 10,
    marginTop: 1,
    borderRadius: 4,
  },
  btn2: {
    backgroundColor: "#eeeef0",
    width: 150,
    height: 46,
    paddingLeft: 10,
    borderRadius: 4,
    paddingTop: 3,
  },
  txtData: {
    fontSize: 17,
    paddingLeft: 10,
    paddingTop: 10,
  },
  telphne: {
    flexDirection: "row",
  },
  PhneData: {
    fontSize: 18,
    fontWeight: "bold",
    marginLeft: 10,
    marginTop: 24,
  },
  phne: {
    marginTop: 20,
    width: 290,
    paddingLeft: 10,
    marginLeft: 10,
    height: 40,
    backgroundColor: "#eeeef0",
  },
});

export default UserSignup;

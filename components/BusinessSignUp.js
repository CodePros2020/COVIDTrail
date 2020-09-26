import React from "react";
import { StyleSheet, Text, SafeAreaView, ScrollView, View } from "react-native";
import Header from "./header";
import CustomButton from "./customButton";
import { List, Divider, TextInput } from "react-native-paper";
import Icon from "react-native-vector-icons/FontAwesome5";

const BusinessSignUp = ({ navigation, props }) => {
  const userTypeHandler = () => {
    navigation.navigate("QRCodePage");
  };
  const [text, setText] = React.useState("");
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <Header title="Sign Up" navigation={navigation}></Header>
        <ScrollView style={styles.scrollView}>
          <View>
            <TextInput
              label="Business Name"
              placeholderTextColor="ffffff"
              underlineColror="red"
              value={text}
              onChangeText={(text) => setText(text)}
              style={styles.input}
            />
            <TextInput
              type="outlined"
              style={{ ...styles.textInput, ...this.props.style }}
              underlineColor={this.theme.colors.primary}
              onChangeText={this.props.onChange}
              label={this.props.label}
              value={this.props.value || "Replace this text"}
              placeholder={this.props.placeholder}
              theme={{ colors: { text: this.props.style.color } }}
            />
          </View>
          <View>
            <TextInput
              label="Address line 1*"
              underlineColror="#979797"
              //   value={text}
              //   onChangeText={(text) => setText(text)}
              style={styles.listItem}
            />
          </View>

          <TextInput
            label="Address Line 2"
            underlineColror="#979797"
            // value={text}
            // onChangeText={(text) => setText(text)}
            style={styles.listItem}
          />
          <TextInput
            label="City"
            underlineColror="#979797"
            selectionColor="#979797"
            // value={text}
            // onChangeText={(text) => setText(text)}
            style={styles.listItem}
          />

          <List.Accordion title="Province *" style={{ color: "#ffffff" }}>
            <List.Item
              title="First item"
              underlineColror="#979797"
              style={{ color: "#ffffff" }}
            />
            <Divider />
            <List.Item title="Second item" style={{ color: "#ffffff" }} />
            <Divider />
          </List.Accordion>
          <Divider style={styles.divider} />
          <TextInput
            label="Postal Code *"
            // value={text}
            // onChangeText={(text) => setText(text)}
            style={styles.listItem}
          />
          <TextInput
            label="Password *"
            // value={text}
            // onChangeText={(text) => setText(text)}
            style={styles.listItem}
          />
          <TextInput
            label="Confirm Password *"
            // value={text}
            // onChangeText={(text) => setText(text)}
            style={styles.listItem}
          />

          <TextInput
            label="Email"
            // value={text}
            // onChangeText={(text) => setText(text)}
            style={styles.listItem}
          >
            <Icon name="user" />
          </TextInput>

          <CustomButton name="Next" onPress={userTypeHandler} />
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignSelf: "stretch",
    backgroundColor: "#262D37",
    alignItems: "center",
    marginTop: 0,
    // marginTop: Constants.statusBarHeight,
  },
  scrollView: {
    backgroundColor: "#262D37",
    marginHorizontal: 20,
    alignSelf: "stretch",
  },
  text: {
    fontSize: 42,
  },
  listItem: {
    backgroundColor: "#262D37",
    color: "grey",
  },
  divider: {
    backgroundColor: "darkgrey",
    height: 0.75,
  },
  input: {
    color: "#ffffff",
    backgroundColor: "#262D37",
  },
});

export default BusinessSignUp;

import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  SafeAreaView,
  ScrollView,
  View,
  FlatList,
  SectionList,
  Dimensions,
} from "react-native";
import Constants from "expo-constants";
import HeaderWide from "./HeaderWide";
import { List } from "react-native-paper";
import API from "../api";

var width = Dimensions.get("window").width;

// const success = () => {
//   console.log('coming to this');
//   API.get('api/placesVisitedLog/1/user')
//     .then((response) => {

//       var account = response.data;
//       console.log('account inside sucesss', account);
//       return account;

//       // if (account) {
//       //   // alert('what is account' + JSON.stringify(account));
//       //   // navigation.navigate('NavBarBottom', { account: account }); 
//       //   console.log('this is account log', JSON.stringify(account));
//       // }
//     })
//     .catch(error => {
//       alert('Error' + error);
//     });
// };

const InvididualLogsPage = ({ navigation }) => {

// var account;

  const [logsData, setLogsData] = useState([]);
  const [desiredData, setDesiredData] = useState([]);


  const data = [
    {
      title: "September 7, 2020",
      data: [
        {
          name: "Restaurant 1",
          time: "1:00 PM",
          date: "September 7, 2020",
          address: "Toronto",
          phone: "4163334567",
          email: "restaurant1@email.com",
        },
        {
          name: "Restaurant 2",
          time: "1:00 PM",
          date: "September 7, 2020",
          address: "Toronto",
          phone: "4163334567",
          email: "restaurant2@email.com",
        },
        {
          name: "Restaurant 3",
          time: "1:00 PM",
          date: "September 7, 2020",
          address: "Toronto",
          phone: "4163334567",
          email: "restaurant3@email.com",
        },
        {
          name: "Restaurant 4",
          time: "1:00 PM",
          date: "September 7, 2020",
          address: "Toronto",
          phone: "4163334567",
          email: "restaurant4@email.com",
        },
        {
          name: "Restaurant 5",
          time: "1:00 PM",
          date: "September 7, 2020",
          address: "Toronto",
          phone: "4163334567",
          email: "restaurant5@email.com",
        },
      ],
    },
    {
      title: "September 1, 2020",
      data: [
        {
          name: "Restaurant 6",
          time: "1:00 PM",
          date: "September 7, 2020",
          address: "Toronto",
          phone: "4163334567",
          email: "restaurant6@email.com",
        },
        {
          name: "Restaurant 7",
          time: "1:00 PM",
          date: "September 7, 2020",
          address: "Toronto",
          phone: "4163334567",
          email: "restaurant7@email.com",
        },
        {
          name: "Restaurant 8",
          time: "1:00 PM",
          date: "September 7, 2020",
          address: "Toronto",
          phone: "4163334567",
          email: "restaurant8@email.com",
        },
        {
          name: "Restaurant 9",
          time: "1:00 PM",
          date: "September 7, 2020",
          address: "Toronto",
          phone: "4163334567",
          email: "restaurant9@email.com",
        },
        {
          name: "Restaurant 10",
          time: "1:00 PM",
          date: "September 7, 2020",
          address: "Toronto",
          phone: "4163334567",
          email: "restaurant10@email.com",
        },
      ],
    },
  ];

  useEffect( () => {
    
    API.get('api/placesVisitedLog/1/user')
    .then((response) => {

      var account = response.data;
      setLogsData(account);

    })
    .catch(error => {
      alert('Error' + error);
    });

    logsData.map( res => {
      // console.log('check', res.visitedDate);
    })

  });

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <HeaderWide title="Logs"></HeaderWide>
        <SectionList
          sections={data}
          renderItem={({ item, index, section }) => (
            <View style={styles.item}>
              <Text
                style={styles.itemDetails}
                onPress={() =>
                  navigation.navigate("IndividualLogsDetailPage", {
                    name: item.name,
                    time: item.time,
                    date: item.date,
                    address: item.address,
                    phone: item.phone,
                    email: item.email,
                  })
                }
              >
                {item.name}
              </Text>
              <Text
                style={styles.itemDetails}
                onPress={() =>
                  navigation.navigate("IndividualLogsDetailPage", {
                    name: item.name,
                    time: item.time,
                    date: item.date,
                    address: item.address,
                    phone: item.phone,
                    email: item.email,
                  })
                }
              >
                {item.time}
              </Text>
            </View>
          )}
          renderSectionHeader={({ section }) => (
            <View style={styles.sectionHeader}>
              <Text style={styles.sectionHeader}>{section.title}</Text>
            </View>
          )}
          keyExtractor={(item, index) => item + index}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#262D37",
    alignItems: "center",
    marginTop: 0,
    paddingHorizontal: 10,
    // marginTop: Constants.statusBarHeight,
  },
  scrollView: {
    backgroundColor: "#262D37",
    marginHorizontal: 20,
  },
  text: {
    fontSize: 42,
  },
  sectionHeader: {
    width: width,
    paddingTop: 2,
    paddingBottom: 2,
    paddingLeft: 3,
    paddingRight: 10,
    fontSize: 18,
    fontWeight: "bold",
    color: "#00C0C1",
    backgroundColor: "#41464e",
  },

  item: {
    width: "82%",
    padding: 10,
    // height: 38,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  itemDetails: {
    fontSize: 16,
    color: "#ffffff",
  },
});

export default InvididualLogsPage;

import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  SafeAreaView,
  View,
  SectionList,
  Dimensions,
} from "react-native";
import HeaderWide from "./HeaderWide";
import API from "../api";
import Moment from 'moment';
import { NetworkContext } from "../NetworkContext";
import { useIsFocused } from "@react-navigation/native";

var width = Dimensions.get("window").width;
var arr;

const InvididualLogsPage = ({ navigation }) => {
  const network = React.useContext(NetworkContext);
  const isFocused = useIsFocused();


  const [desiredData, setDesiredData] = useState();

  useEffect( () => {

    async function getLogData() {

      await API.get('api/placesVisitedLog/' + network.id + '/user')
        .then((response) => {

          var account = response.data;
          console.log('response', JSON.stringify(account));
          
          arr = [];

          account.map( res => {

          var businessDet = [];

          res.businessDetails.map( res2 => {
        
            var logBusinessDet = {
              id: res2.id,
              visitedDateTime: res2.visitedDateTime,
              businessName: res2.businessAccount.businessName,
              email: res2.businessAccount.email,
              phone: res2.businessAccount.phone,
              addressLine1: res2.businessAccount.address.addressLineOne,
              addressLine2: res2.businessAccount.address.addressLineTwo,
              city: res2.businessAccount.address.city,
              province: res2.businessAccount.address.province,
              postalCode: res2.businessAccount.address.postalCode
            }

            businessDet.push(logBusinessDet);
          });

          var log = {
            title: res.visitedDate,
            data: businessDet
          }
      
          arr.push(log);
        });

        console.log('user id', network.id);
        console.log('what is arr', arr.length);
        if (arr.length > 0) {
        // console.log('its not empty', arr.length);
        setDesiredData(arr);
        // console.log('desired data length', desiredData.length);
      } else {
        alert('No record found!');
      }
    })
        .catch(error => {
          alert('Error!' + error);
      });
    }
    
    getLogData();

  }, [isFocused]);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <HeaderWide title="Logs"></HeaderWide>
        <SectionList
          sections={desiredData}
          renderItem={({ item, index, section }) => (
            <View style={styles.item}>
              <Text
                style={styles.itemDetails}
                onPress={() =>
                  navigation.navigate("IndividualLogsDetailPage", {
                    name: item.businessName,
                    time: item.visitedDateTime,
                    date: item.visitedDateTime,
                    addressLine1: item.addressLine1,
                    addressLine2: item.addressLine2,
                    city: item.city,
                    province: item.province,
                    postalCode: item.postalCode,
                    phone: item.phone,
                    email: item.email,
                  })
                }
              >
                {item.businessName}
              </Text>
              <Text
                style={styles.itemDetails}
                onPress={() =>
                  navigation.navigate("IndividualLogsDetailPage", {
                    name: item.businessName,
                    time: item.visitedDateTime,
                    date: item.visitedDateTime,
                    address: item.addressLine1,
                    phone: item.phone,
                    email: item.email,
                  })
                }
              >
                {Moment(item.visitedDateTime).format('LT')}
              </Text>
            </View>
          )}
          renderSectionHeader={({ section }) => (
            <View style={styles.sectionHeader}>
              <Text style={styles.sectionHeader}>{Moment(section.title).format('MMMM DD, YYYY')}</Text>
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

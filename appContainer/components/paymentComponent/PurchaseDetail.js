import React from "react";
import { View, Text, StyleSheet } from "react-native";

const PurchaseDetail = () => {
  return (
    <View style={styles.container}>
      <View style={styles.purchaseDetail}>
        <Text style={styles.label}>Purchase Detail:</Text>
      </View>
      <View style={styles.detailBox}>
        <Text style={styles.text}>
          Date: <Text style={styles.boldText}>15-4-2024</Text>
        </Text>
        <Text style={styles.text}>
          Price Of Course: <Text style={styles.boldText}>100$</Text>
        </Text>
        <Text style={styles.text}>
          Coupon: <Text style={styles.boldText}>Added 30% Discount</Text>
        </Text>
      </View>
      <Text style={styles.finalPrice}>
        Final Price: <Text style={styles.price}>70$</Text>
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // padding: 20,
    // backgroundColor: "#fff",
    marginBottom: 30,
  },
  purchaseDetail: {
    position: "absolute",
    top: 5,
    left: 15,
    backgroundColor: "#fff",
    paddingHorizontal: 5,
    zIndex: 1,
  },
  label: {
    fontSize: 13,
    fontWeight: "bold",
  },
  detailBox: {
    borderWidth: 1,
    borderColor: "#A2AAA5",
    borderRadius: 10,
    padding: 20,
    marginTop: 15,
    paddingLeft: 50,
  },
  text: {
    fontSize: 16,
    marginBottom: 5,
  },
  boldText: {
    fontWeight: "700",
    fontSize: 16,
  },
  finalPrice: {
    textAlign: "right",
    marginTop: 10,
    fontSize: 16,
  },
  price: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#B427A8",
  },
});

export default PurchaseDetail;

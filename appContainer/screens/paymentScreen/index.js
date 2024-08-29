import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
  ScrollView,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import StepIndicator from "../../components/paymentComponent/StepIndicator";
import TopBar from "../../components/commonComponent/TopBar";
import { globalStyle } from "../../utils/globalStyle";
import WeekIcon from "../../../assets/courseDetailsIcon/Week";
import OffIcon from "../../../assets/courseDetailsIcon/OFF";
import LessonIcon from "../../../assets/courseDetailsIcon/Lesson";
import CertificateIcon from "../../../assets/courseDetailsIcon/Certificate";
import PurchaseDetail from "../../components/paymentComponent/PurchaseDetail";
import PaymentMethod from "../../components/paymentComponent/PaymentMethod";
import AddDetails from "../../components/paymentComponent/AddDetails";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

export default function PaymentScreen({ route }) {
  const navigation = useNavigation();
  const [activeStep, setActiveStep] = useState(2);
  const { stars, author } = route.params || {};

  return (
    <View style={[styles.container, globalStyle.container]}>
      {/* Image Section */}

      <TopBar />
      <ScrollView>
        <StepIndicator activeStep={activeStep} />
        <PaymentMethod />
      </ScrollView>
      <TouchableOpacity
        style={styles.enrollButton}
        onPress={() => navigation.navigate("Completed")}
      >
        <Text style={styles.enrollButtonText}>Continue</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    // alignItems: "center",
    // justifyContent: "center",
    paddingHorizontal: 20,
    height: windowHeight * 0.9,
  },

  ratingSection: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 2,
  },

  enrollButton: {
    backgroundColor: "#D456DF",
    padding: 10,
    marginVertical: 10,
    borderRadius: 10,
    marginLeft: 5,
    marginRight: 5,
    alignItems: "center",
  },
  enrollButtonText: {
    fontSize: 24,
    color: "#fff",
    fontWeight: "600",
  },
});

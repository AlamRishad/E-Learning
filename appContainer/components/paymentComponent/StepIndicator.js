import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
} from "react-native";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;
const StepIndicator = ({ activeStep }) => {
  return (
    <View style={styles.container}>
      {/* View for Step Circles and Lines */}
      <View style={styles.stepsWrapper}>
        {/* Step 1 */}
        <TouchableOpacity
          style={[
            activeStep === 1 ? styles.activeOuterCircle : styles.outerCircle,
          ]}
        >
          <View
            style={[activeStep === 1 ? styles.activeCircle : styles.circle]}
          >
            <Text style={styles.circleText}>1</Text>
          </View>
        </TouchableOpacity>

        <View
          style={[
            activeStep === 1 || activeStep === 2
              ? styles.activeLine
              : styles.line,
          ]}
        />

        {/* Step 2 */}
        <TouchableOpacity
          style={[
            activeStep === 2 ? styles.activeOuterCircle : styles.outerCircle,
          ]}
        >
          <View
            style={[activeStep === 2 ? styles.activeCircle : styles.circle]}
          >
            <Text style={styles.circleText}>2</Text>
          </View>
        </TouchableOpacity>

        <View style={[activeStep === 3 ? styles.activeLine : styles.line]} />
        {/* Step 3 */}
        <TouchableOpacity
          style={[
            activeStep === 3 ? styles.activeOuterCircle : styles.outerCircle,
          ]}
        >
          <View
            style={[activeStep === 3 ? styles.activeCircle : styles.circle]}
          >
            <Text style={styles.circleText}>3</Text>
          </View>
        </TouchableOpacity>
      </View>

      {/* View for Step Labels */}
      <View style={styles.labelsWrapper}>
        <Text style={styles.stepLabel}>Overview</Text>
        <Text style={styles.stepLabel}>Payment Method</Text>
        <Text style={styles.stepLabel}>Confirmation</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#f0e6f6",
    padding: 20,
    borderRadius: 10,
    // margin: 20,
    marginVertical: 15,
    width: windowWidth * 0.9,
  },
  stepsWrapper: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: windowWidth * 0.78,
  },
  labelsWrapper: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 10,
  },

  circle: {
    backgroundColor: "#8AB3B5",
    width: 33,
    height: 33,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  outerCircle: {
    width: 41,
    height: 41,
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 5,
    backgroundColor: "#C6D0D7",
  },
  activeCircle: {
    backgroundColor: "#9E08AB",
    width: 33,
    height: 33,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  activeOuterCircle: {
    backgroundColor: "#E07CD6",
    width: 41,
    height: 41,
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 5,
  },
  circleText: {
    color: "#fff",
    fontWeight: "bold",
  },
  stepLabel: {
    fontSize: 12,
    color: "black",
    textAlign: "center",
    fontWeight: "600",
  },
  line: {
    height: 2,
    flex: 1,
    // width: windowWidth * 1,
    backgroundColor: "#C6D0D7", // Line color
    // marginHorizontal: 10,
  },
  activeLine: {
    height: 2,
    flex: 1,
    // width: windowWidth * 1,
    backgroundColor: "#9E08AB", // Line color
    // marginHorizontal: 10,
  },
});

export default StepIndicator;

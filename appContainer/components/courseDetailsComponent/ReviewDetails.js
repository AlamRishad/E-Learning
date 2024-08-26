import React from "react";
import { ScrollView } from "react-native";
import ReviewCard from "./ReviewCard";

const ReviewDetails = () => {
  return (
    <ScrollView>
      <ReviewCard
        // profileImage={require("../../../assets/courseDetailsIcon/girl.png")}
        name="Jannatul Ferdous"
        role="Student"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi vitae dolor lectus. Fusce laoreet, ipsum id luctus tincidunt, dui mi malesuada tortor, "
        stars={5}
      />
      <ReviewCard
        // profileImage={require("../../../assets/courseDetailsIcon/boy.png")}
        name="Alam Rishad"
        role="Student"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi vitae dolor lectus. Fusce laoreet, ipsum id luctus tincidunt, dui mi malesuada tortor, "
        stars={4}
      />
      <ReviewCard
        // profileImage={require("../../../assets/courseDetailsIcon/boy.png")}
        name="Alam Rishad"
        role="Student"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi vitae dolor lectus. Fusce laoreet, ipsum id luctus tincidunt, dui mi malesuada tortor, "
        stars={4}
      />
    </ScrollView>
  );
};

export default ReviewDetails;

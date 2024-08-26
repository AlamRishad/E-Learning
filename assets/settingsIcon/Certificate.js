import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgComponent = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={22}
    height={20}
    fill="none"
    {...props}
  >
    <Path
      fill="#9E08AB"
      d="M19 0a3 3 0 0 1 3 3v2h-2v12a3 3 0 0 1-3 3H3a3 3 0 0 1-3-3v-2h16v2a1 1 0 0 0 .883.993L17 18a1 1 0 0 0 .993-.883L18 17V2H5a1 1 0 0 0-.993.883L4 3v10H2V3a3 3 0 0 1 3-3h14Z"
    />
  </Svg>
);
export default SvgComponent;

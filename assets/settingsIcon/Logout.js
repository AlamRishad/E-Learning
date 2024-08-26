import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgComponent = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={22}
    height={21}
    fill="none"
    {...props}
  >
    <Path
      fill="#9E08AB"
      d="M5 9.014h8v2H5v3l-5-4 5-4v3Zm-1 7h2.708a8 8 0 1 0 0-12H4a9.985 9.985 0 0 1 8.001-4c5.523 0 10 4.477 10 10s-4.477 10-10 10a9.985 9.985 0 0 1-8-4Z"
    />
  </Svg>
);
export default SvgComponent;

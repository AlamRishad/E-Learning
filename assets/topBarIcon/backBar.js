import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgComponent = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={16}
    height={16}
    fill="none"
    {...props}
  >
    <Path fill="#000" d="M8 9v7L0 8l8-8v7h8v2H8Z" />
  </Svg>
);
export default SvgComponent;

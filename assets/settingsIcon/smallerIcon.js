import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgComponent = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={8}
    height={13}
    fill="none"
    {...props}
  >
    <Path
      fill="#000"
      d="M5.035 6.474 0 1.439 1.439 0l6.473 6.474-6.473 6.473L0 11.508l5.035-5.034Z"
    />
  </Svg>
);
export default SvgComponent;

import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgComponent = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={20}
    height={18}
    fill="none"
    {...props}
  >
    <Path
      fill="#9E08AB"
      d="M1 0h18a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1V1a1 1 0 0 1 1-1Zm17 8H2v8h16V8Zm0-2V2H2v4h16Zm-6 6h4v2h-4v-2Z"
    />
  </Svg>
);
export default SvgComponent;

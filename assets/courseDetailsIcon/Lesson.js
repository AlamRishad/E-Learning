import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgComponent = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={18}
    height={20}
    fill="none"
    {...props}
  >
    <Path
      fill="#9E08AB"
      d="M18 2H4a2 2 0 1 0 0 4h14v13a1 1 0 0 1-1 1H4a4 4 0 0 1-4-4V4a4 4 0 0 1 4-4h13a1 1 0 0 1 1 1v1Zm-1 3H4a1 1 0 0 1 0-2h13v2Z"
    />
  </Svg>
);
export default SvgComponent;

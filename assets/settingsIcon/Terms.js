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
      d="M17 20H1a1 1 0 0 1-1-1V1a1 1 0 0 1 1-1h16a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1Zm-1-2V2H2v16h14ZM4 4h4v4H4V4Zm0 6h10v2H4v-2Zm0 4h10v2H4v-2Zm6-9h4v2h-4V5Z"
    />
  </Svg>
);
export default SvgComponent;

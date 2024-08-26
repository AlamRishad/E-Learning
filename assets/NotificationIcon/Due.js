import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgComponent = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={38}
    height={38}
    fill="none"
    {...props}
  >
    <Path
      fill="#FF0B37"
      fillOpacity={0.81}
      d="M38 19c0 10.493-8.507 19-19 19S0 29.493 0 19 8.507 0 19 0s19 8.507 19 19Z"
    />
    <Path
      fill="#000"
      d="M27 29.5H11a1 1 0 0 1-1-1v-18a1 1 0 0 1 1-1h16a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1Zm-1-2v-16H12v16h14Zm-12-14h4v4h-4v-4Zm0 6h10v2H14v-2Zm0 4h10v2H14v-2Zm6-9h4v2h-4v-2Z"
    />
  </Svg>
);
export default SvgComponent;

import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgComponent = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <Path fill="#F2E1F3" d="M.5.5h23v23H.5z" />
    <Path fill="#9E08AB" d="M.5.5h23v23H.5z" />
    <Path stroke="#FAFAFA" d="M.5.5h23v23H.5z" />
    <Path
      fill="#fff"
      d="M11 11V7h2v4h4v2h-4v4h-2v-4H7v-2h4Zm1 11C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10Zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16Z"
    />
  </Svg>
);
export default SvgComponent;

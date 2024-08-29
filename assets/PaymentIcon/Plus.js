import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgComponent = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={20}
    height={20}
    fill="none"
    {...props}
  >
    <Path
      fill="#FAFAFA"
      stroke="#8AB3B5"
      d="M9 9.5h.5v-4h1v4h4v1h-4v4h-1v-4h-4v-1H9Zm1 10a9.5 9.5 0 1 1 0-19 9.5 9.5 0 0 1 0 19Zm0-1a8.5 8.5 0 1 0 0-17 8.5 8.5 0 0 0 0 17Z"
    />
  </Svg>
);
export default SvgComponent;

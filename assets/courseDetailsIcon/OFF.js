import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgComponent = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={21}
    height={21}
    fill="none"
    {...props}
  >
    <Path
      fill="#9E08AB"
      d="m9.485 0 9.9 1.414 1.414 9.9-9.192 9.192a1 1 0 0 1-1.415 0l-9.9-9.9a1 1 0 0 1 0-1.414L9.486 0Zm.707 2.121L2.414 9.9l8.486 8.486 7.778-7.778-1.06-7.425-7.426-1.06Zm2.122 6.364a2 2 0 1 1 2.828-2.828 2 2 0 0 1-2.828 2.828Z"
    />
  </Svg>
);
export default SvgComponent;

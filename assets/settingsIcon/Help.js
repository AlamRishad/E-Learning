import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgComponent = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={20}
    height={21}
    fill="none"
    {...props}
  >
    <Path
      fill="#9E08AB"
      d="M20 15.002a6.002 6.002 0 0 1-4.713 5.86l-.638-1.914A4.003 4.003 0 0 0 17.465 17H15a2 2 0 0 1-2-2v-4a2 2 0 0 1 2-2h2.938A8.001 8.001 0 0 0 2.062 9H5a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-5C0 4.477 4.477 0 10 0s10 4.477 10 10v5.002ZM18 15v-4h-3v4h3ZM2 11v4h3v-4H2Z"
    />
  </Svg>
);
export default SvgComponent;

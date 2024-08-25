import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgComponent = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={11}
    height={10}
    fill="none"
    {...props}
  >
    <Path
      fill="#1445F7"
      d="M5.075 7.51 1.94 9.37 2.79 5.9 0 3.579l3.664-.285L5.075 0l1.412 3.294 3.664.285-2.792 2.32.853 3.47L5.075 7.51Z"
    />
  </Svg>
);
export default SvgComponent;

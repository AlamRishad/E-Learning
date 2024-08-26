import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgComponent = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={16}
    height={21}
    fill="none"
    {...props}
  >
    <Path
      fill="#9E08AB"
      d="M8 5.001a8 8 0 1 1 0 16 8 8 0 0 1 0-16Zm0 2a6 6 0 1 0 0 12 6 6 0 0 0 0-12Zm0 1.5 1.322 2.68 2.958.43-2.14 2.085.505 2.946L8 15.25l-2.645 1.39.505-2.945-2.14-2.086 2.958-.43L8 8.502Zm6-8.5v3l-1.363 1.138A9.935 9.935 0 0 0 9 3.05L9 0l5 .001ZM7 0v3.05a9.935 9.935 0 0 0-3.636 1.088L2 3.001v-3L7 0Z"
    />
  </Svg>
);
export default SvgComponent;

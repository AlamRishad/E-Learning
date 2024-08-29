import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgComponent = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={53}
    height={59}
    fill="none"
    {...props}
  >
    <Path
      fill="#9E08AB"
      d="M52.375 3.625v51.774a2.854 2.854 0 0 1-2.856 2.851H3.481c-1.577 0-2.856-1.309-2.856-2.851V3.6A2.854 2.854 0 0 1 3.481.75H49.5a2.875 2.875 0 0 1 2.875 2.875ZM24.467 32.724l-7.115-7.116-4.066 4.066 11.181 11.181L40.73 24.592l-4.065-4.066-12.198 12.198Z"
    />
  </Svg>
);
export default SvgComponent;

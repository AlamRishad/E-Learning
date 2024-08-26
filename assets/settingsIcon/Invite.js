import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgComponent = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={22}
    height={21}
    fill="none"
    {...props}
  >
    <Path
      fill="#9E08AB"
      d="M21.03 1.424 15.576 20.51c-.15.529-.475.553-.717.07l-4.556-9.113-9.077-3.63c-.51-.205-.504-.51.034-.689L20.346.786c.529-.176.832.12.684.638Zm-2.692 2.14L6.115 7.638l5.637 2.255 3.04 6.081 3.546-12.41Z"
    />
  </Svg>
);
export default SvgComponent;

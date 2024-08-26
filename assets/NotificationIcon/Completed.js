import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgComponent = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={41}
    height={45}
    fill="none"
    {...props}
  >
    <Path
      fill="#9E08AB"
      d="M40.05 2.225v40.068c0 1.22-.99 2.207-2.21 2.207H2.21A2.225 2.225 0 0 1 0 42.293V2.207C0 .988.99 0 2.21 0h35.615c1.229 0 2.225.996 2.225 2.225ZM19.866 23.331a2 2 0 0 1-2.828 0l-2.679-2.678a2 2 0 0 0-2.828 0l-.318.318a2 2 0 0 0 0 2.828l5.825 5.825a2 2 0 0 0 2.828 0l9.758-9.758a2 2 0 0 0 0-2.828l-.318-.319a2 2 0 0 0-2.829 0l-6.611 6.612Z"
    />
  </Svg>
);
export default SvgComponent;

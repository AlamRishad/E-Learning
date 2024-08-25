import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgComponent = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={20}
    height={24}
    fill="none"
    {...props}
  >
    <Path
      fill="#fff"
      d="M16.804 23.372H2.957c-.547 0-.99-.515-.99-1.15V12.76c0-.493-.4-.893-.893-.893a.893.893 0 0 1-.649-1.507l8.79-9.295a.89.89 0 0 1 1.33 0l8.79 9.295c.54.57.136 1.507-.648 1.507-.494 0-.893.4-.893.893v9.46c0 .636-.443 1.151-.99 1.151ZM10.87 18.6a2.473 2.473 0 1 0 4.945 0v-6.49a5.935 5.935 0 0 0-11.87 0v6.49a2.473 2.473 0 0 0 4.946 0v-3.441a.99.99 0 1 1 1.979 0v3.44Z"
    />
  </Svg>
);
export default SvgComponent;

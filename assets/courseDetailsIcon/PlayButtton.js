import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgComponent = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={37}
    height={38}
    fill="none"
    {...props}
  >
    <Path
      fill="#fff"
      stroke="#fff"
      strokeWidth={3}
      d="M18.573 35.65C9.215 35.68 1.593 28.08 1.56 18.66c-.03-9.42 7.542-17.07 16.9-17.1 9.357-.031 16.98 7.568 17.01 16.988.032 9.42-7.541 17.07-16.898 17.1Zm-.003-.71c8.99-.029 16.24-7.373 16.21-16.388C34.75 9.537 27.453 2.24 18.464 2.27c-8.99.03-16.24 7.374-16.21 16.389.029 9.015 7.328 16.312 16.317 16.282Zm-2.23-11.72-.03-9.215 6.893 4.585-6.862 4.63Zm7.805-4.004h-.001Z"
    />
  </Svg>
);
export default SvgComponent;

import * as React from "react";
import Svg, { Circle, Path } from "react-native-svg";
const SvgComponent = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={28}
    height={35}
    fill="none"
    {...props}
  >
    <Circle cx={14} cy={21} r={14} fill="#E07CD6" />
    <Path
      fill="#FAFAFA"
      stroke="#FAFAFA"
      d="m16.436 20.058.354-.354-.354-.353-.787-.787-.353-.354-.354.354-5.183 5.183-.146.146v1.494h1.494l.146-.146 5.183-5.183Zm.08-.787.354.354.353-.354.787-.787.354-.354-.354-.353-.787-.787-.353-.354-.354.354-.787.787-.353.353.353.354.787.787Zm.394-2.755 1.573 1.575a.056.056 0 0 1 0 .08l-7.33 7.329H9.5v-1.654l7.33-7.33a.056.056 0 0 1 .08 0Z"
    />
  </Svg>
);
export default SvgComponent;

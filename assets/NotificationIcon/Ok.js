import * as React from "react";
import Svg, { Ellipse, Path } from "react-native-svg";
const SvgComponent = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={41}
    height={38}
    fill="none"
    {...props}
  >
    <Ellipse
      cx={20.02}
      cy={19}
      fill="#F8C562"
      fillOpacity={0.95}
      rx={20.02}
      ry={19}
    />
    <Path
      fill="#000"
      d="M9.483 15.84h3.161v12h-3.16c-.583 0-1.055-.448-1.055-1v-10c0-.552.472-1 1.054-1Zm5.577-1.293 6.744-6.4a.548.548 0 0 1 .689-.047l.898.64c.511.363.741.982.584 1.57l-1.216 4.53h6.744c1.164 0 2.107.895 2.107 2v2.104c0 .261-.053.52-.158.762l-3.26 7.515c-.163.374-.548.619-.975.619H15.805c-.582 0-1.053-.448-1.053-1V15.254c0-.265.11-.52.308-.707Z"
    />
  </Svg>
);
export default SvgComponent;

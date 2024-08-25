import * as React from "react"
import Svg, { Path } from "react-native-svg"
const SvgComponent = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={16}
    height={16}
    fill="none"
    {...props}
  >
    <Path
      fill="#000"
      d="M2.042 11.405H.552v1.504h14.896v-1.504h-1.49V6.142C13.958 2.82 11.291.127 8 .127c-3.29 0-5.958 2.693-5.958 6.015v5.263Zm1.49 0V6.142c0-2.492 2-4.511 4.468-4.511s4.469 2.02 4.469 4.51v5.264H3.53Zm6.702 3.007H5.766v1.504h4.468v-1.504Z"
    />
  </Svg>
)
export default SvgComponent
import * as React from "react"
import Svg, { Path } from "react-native-svg"
const SvgComponent = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={21}
    height={18}
    fill="none"
    {...props}
  >
    <Path
      fill="#FAFAFA"
      stroke="#fff"
      d="M5.934 15.91a2.81 2.81 0 0 0-1.774.632c-1.183.963-2.953.122-2.953-1.404V1.027c0-.308.235-.526.489-.526H19.5c.253 0 .49.218.49.526v14.359a.508.508 0 0 1-.49.525H5.934Zm-1.442-.958a.414.414 0 0 1 .262-.093h7.603a6.654 6.654 0 0 0 0-13.308h-5.25a4.922 4.922 0 0 0-4.922 4.922v7.383c0 1.191 1.383 1.849 2.307 1.096Zm5.617-6.783a.49.49 0 1 1 .978 0v.073a.49.49 0 1 1-.978 0v-.073Zm-3.957 0a.49.49 0 0 1 .978 0v.073a.49.49 0 1 1-.978 0v-.073Zm7.913 0a.49.49 0 1 1 .979 0v.073a.49.49 0 0 1-.979 0v-.073Z"
    />
  </Svg>
)
export default SvgComponent

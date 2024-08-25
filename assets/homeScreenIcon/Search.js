import * as React from "react"
import Svg, { Path } from "react-native-svg"
const SvgComponent = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={20}
    height={18}
    fill="none"
    {...props}
  >
    <Path
      fill="#9E08AB"
      d="M13.168 2.15a3.5 3.5 0 1 0-.046 7 3.5 3.5 0 0 0 .046-7ZM7.645 5.614a5.5 5.5 0 1 1 10.761 1.643c-.29.953-.242 2.054.458 2.763l.748.758a1 1 0 1 1-1.424 1.405l-.747-.758c-.7-.709-1.8-.772-2.757-.494a5.5 5.5 0 0 1-7.039-5.317ZM.668 2.068a1 1 0 0 1 1.007-.993l3 .02a1 1 0 0 1-.014 2l-3-.02a1 1 0 0 1-.993-1.007Zm-.045 7a1 1 0 0 1 1.006-.993l3 .02a1 1 0 1 1-.013 2l-3-.02a1 1 0 0 1-.993-1.007Zm16.96 6.11a1 1 0 1 1-.013 2l-16-.103a1 1 0 0 1 .013-2l16 .104Z"
    />
  </Svg>
)
export default SvgComponent

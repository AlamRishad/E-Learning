import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgComponent = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={32}
    height={28}
    fill="none"
    {...props}
  >
    <Path
      fill="#4285F4"
      fillRule="evenodd"
      d="M31.36 13.834c0-.96-.102-1.882-.291-2.767h-15.07v5.232h8.611c-.37 1.691-1.498 3.124-3.192 4.083v3.394h5.17c3.026-2.355 4.771-5.823 4.771-9.942Z"
      clipRule="evenodd"
    />
    <Path
      fill="#34A853"
      fillRule="evenodd"
      d="M16 27.053c4.32 0 7.941-1.212 10.588-3.277l-5.17-3.394c-1.433.811-3.266 1.29-5.418 1.29-4.168 0-7.695-2.378-8.953-5.576H1.702v3.505c2.632 4.42 8.043 7.452 14.297 7.452Z"
      clipRule="evenodd"
    />
    <Path
      fill="#FBBC05"
      fillRule="evenodd"
      d="M7.047 16.097a7 7 0 0 1-.502-2.57 7 7 0 0 1 .502-2.57V7.452H1.702C.618 9.278 0 11.344 0 13.527c0 2.182.618 4.248 1.702 6.074l5.345-3.504Z"
      clipRule="evenodd"
    />
    <Path
      fill="#EA4335"
      fillRule="evenodd"
      d="M16 5.38c2.349 0 4.458.682 6.116 2.023l4.589-3.88C23.934 1.34 20.312 0 16 0 9.744 0 4.333 3.031 1.701 7.452l5.345 3.504C8.305 7.76 11.832 5.38 16 5.38Z"
      clipRule="evenodd"
    />
  </Svg>
);
export default SvgComponent;

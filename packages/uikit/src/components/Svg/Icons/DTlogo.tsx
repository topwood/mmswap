import React from "react";
import Svg from "../Svg";
import { SvgProps } from "../types";

const Icon: React.FC<React.PropsWithChildren<SvgProps>> = (props) => {
  return (
    <Svg viewBox="0 0 20 20" {...props}>
      <mask id="mask0_283_14577" maskUnits="userSpaceOnUse" x="1" y="3" width="18" height="15">
      <path d="M6.25008 4.3335L6.25079 4.3335C6.82566 4.33309 7.39216 4.47121 7.90233 4.73616C8.41251 5.00111 8.85133 5.38509 9.18164 5.85559C9.36873 6.12208 9.67385 6.28079 9.99945 6.281C10.3251 6.2812 10.6304 6.12287 10.8178 5.85661C11.4676 4.93349 12.539 4.3335 13.7501 4.3335C15.729 4.3335 17.3334 5.93787 17.3334 7.91683C17.3334 9.82438 16.1902 11.7716 14.5499 13.4281C13.048 14.9449 11.2724 16.0711 10.0001 16.5722C8.72773 16.0711 6.95217 14.9449 5.45024 13.4281C3.80995 11.7716 2.66675 9.82438 2.66675 7.91683C2.66675 5.93787 4.27112 4.3335 6.25008 4.3335Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </mask>
      <g mask="url(#mask0_283_14577)">
      <path d="M0 0H20V20H0V0Z" fill="url(#paint0_linear_283_14577)"/>
      </g>
      <defs>
      <linearGradient id="paint0_linear_283_14577" x1="0" y1="10" x2="21.5873" y2="10" gradientUnits="userSpaceOnUse">
      <stop stopColor="#7962E7"/>
      <stop offset="1" stopColor="#4169FF"/>
      </linearGradient>
      </defs>
    </Svg>
  );
};

export default Icon;

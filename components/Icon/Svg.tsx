import styled, { css, keyframes } from 'styled-components';
import { SVGAttributes } from 'react';

export interface SvgProps extends SVGAttributes<HTMLOrSVGElement> {
    color?: string;
}

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const Svg = styled...<SvgProps>`
    align-self: center; // Safari fix
    /* fill: ${({ color }) => color}; */
    flex-shrink: 0;
`;

Svg.defaultProps = {
    color: 'text',
    width: '20px',
    xmlns: 'http://www.w3.org/2000/svg'
};

export default Svg;

import { FC, ReactElement } from 'react';
import styled from 'styled-components';

const LoadingContent = styled.div`
  text-align: center;
  padding: 20px 0;
  svg {
    display: inline-block;
    width: 35px;
    height: 35px;
    animation: rotate 2s linear infinite;
  }
`;

const NodataContent = styled.div`
  text-align: center;
  padding: 20px 0;
  font-size: 16px;
`;

interface Props {
  loading: boolean;
  fontColor?: string;
  children?: any;
}

const LoadingMain: FC<{ fontColor?: string }> = ({ fontColor }): ReactElement => (
  <LoadingContent>
    <svg viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="13617" width="26" height="26">
      <path d="M512 170.666667v85.333333a256 256 0 1 1-223.573333 131.2L213.930667 345.6A341.333333 341.333333 0 1 0 512 170.666667z" fill={fontColor} p-id="13618"></path>
    </svg>
  </LoadingContent>
);

const Loading: FC<Props> = ({ loading, fontColor = '#3a3a3a', children }: Props): ReactElement => {
  const checkElement = () => {
    if (loading) {
      return <LoadingMain fontColor={fontColor} />;
    } else {
      return <>{children}</>;
    }
  };
  return <>{checkElement()}</>;
};

export default Loading;

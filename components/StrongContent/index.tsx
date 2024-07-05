import { FC, ReactElement } from 'react';

interface Props {
  color?: string;
  children?: ReactElement | string;
}

const Index: FC<Props> = ({ color, children }) => {
  return (
    <span style={{ color: color || '#EE57B1' }}>
      {children}
    </span>
  );
};

export default Index;

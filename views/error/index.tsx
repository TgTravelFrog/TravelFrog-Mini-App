'use client';

import { FC, ReactElement } from 'react';
import './error.scss';
import { parseUrlQuery } from '../../utils/url';

const Error: FC<any> = (props: any): ReactElement => {
  const query: any = typeof window !== 'undefined' ? parseUrlQuery(window.location.search.substring(1)) : {};
  let msg: string = '';
  if (query?.msg) msg = query.msg;

  return <div className="Error">Error: {msg}</div>;
};

export default Error;

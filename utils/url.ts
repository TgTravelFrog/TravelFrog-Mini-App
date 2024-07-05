export function dict2query(data: any, prefix: string = '', exclude: string[] = []) {
  if (!data || Object.keys(data).length === 0) {
    return '';
  }
  let res = prefix;
  for (let k in data) {
    if (exclude.includes(k)) continue;
    res += `&${k}=${data[k]}`;
  }
  return res;
}

export function parseUrlQuery(query: string) {
  const vars = query.split('&');
  const params: any = {};
  for (let i = 0; i < vars.length; i++) {
    let pair = vars[i].split('=');
    params[pair[0]] = decodeURIComponent(pair[1]);
  }
  return params;
}

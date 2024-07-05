import env from '../.env.json';
const config: any = { ...env };

export function getConfig(_key: string, _default: any = null) {
  if (Object.keys(config).includes(_key)) {
    return config[_key];
  } else {
    return _default;
  }
}

export function setConfig(_key: string, _value: any) {
  config[_key] = _value;
}

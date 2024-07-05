import cookie from 'cookie';

export class Cookies {
  cookie: any;
  cookies: Record<string, string> = {};
  constructor(_cookie: any) {
    this.cookie = _cookie;
    if (_cookie) {
      this.cookies = cookie.parse(_cookie);
    }
  }

  get(key: string) {
    return this.cookies[key];
  }
}

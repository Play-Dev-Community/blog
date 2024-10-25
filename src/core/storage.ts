import { EStorage } from "models/storage.model";

export class Storage {
  constructor() { }

  private setCookie(cname: string, cvalue: string, exdays: number, http: boolean) {
    const d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    let expires = "expires=" + d.toUTCString();

    let cookie = `${cname}=${cvalue};${expires};path/`;

    if (http) {
      cookie = `${cookie};SameSite=None;Secure;HttpOnly;`
    }

    document.cookie = cookie;
  }

  private getCookie(cname: string) {
    let name = cname + "=";
    let ca = document.cookie.split(';');
    for (let i = 0; i < ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) == ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
  }

  private deleteCookie(cname: string) {
    if (this.getCookie(cname)) {
      document.cookie = `${cname}=;expires=Thu, 01 Jan 1970 00:00:01 GMT`
    }
  }

  setData(key: string, value: any) {
    this.setCookie(key, JSON.stringify(value), 3, key === EStorage.TOKEN);
  }

  getData(key: string) {
    return JSON.parse(this.getCookie(key));
  }

  clearData() {
    const keys = Object.values(EStorage);

    for (let key of keys) {
      this.deleteCookie(key);
    }
  }
};
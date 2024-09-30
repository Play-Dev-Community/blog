import { EStorage } from "models/storage.model";

function getCookie(cname: string) {

  let name = cname + "=";
  let ca = document.cookie.split(';');

  for(let i = 0; i < ca.length; i++) {
    let c = ca[i];

    while (c.charAt(0) === ' ') {
      c = c.substring(1);
    }

    if (c.indexOf(name) === 0) {
      return c.substring(name.length, c.length);
    }
    
  }
  
  return "";
}

export const getUserData = () => {
  let data: any = getCookie(EStorage.MEMBER);
  data = data ? data : null;

  return JSON.parse(data);
};

export const getUserAvatar = () => {
  let data: any = getCookie(EStorage.AVATAR);
  data = data ? data : null;

  return JSON.parse(data);
};

export const getUserRoles = () => {
  let data: any = getCookie(EStorage.ROLES);
  data = data ? data : null;

  return JSON.parse(data);
};
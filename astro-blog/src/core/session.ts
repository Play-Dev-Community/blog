import { getMemberRoles, getUserDetails } from "./api";
import { EStorage } from "models/storage.model";
import { Storage } from './storage';
import { atom } from "nanostores";

export const isLoggedIn = atom(false);

const storage = new Storage();
let currentToken: string | null;
let isLogged!: boolean;

function getHeaders(token: string) {
  return {
    headers: {
      authorization: `Bearer ${token}`
    }
  }
}

export async function getUser(save = false, token: string): Promise<any> {
  const userData = await getUserDetails(getHeaders(token));

  if (userData && save) {
    storage.setData(EStorage.MEMBER, userData);
    isLogged = true;
    isLoggedIn.set(true);
  }

  return userData;
}

export async function getRoles(save = false, token: string): Promise<any> {
  const memberRolesData = await getMemberRoles(getHeaders(token));

  if (memberRolesData && save) {
    storage.setData(EStorage.ROLES, memberRolesData);
  }

  return memberRolesData;
}

export function logOut() {
  currentToken = null;
  isLogged = false;
  isLoggedIn.set(false);

  storage.clearData();

  window.location.reload();
}

export async function startSession(token: string) {
  token = token;

  await getUser(true, token);
  await getRoles(true, token);
}
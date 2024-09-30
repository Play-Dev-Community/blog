import { getMemberRoles, getUserDetails } from "@api/discord";
import { EStorage } from "models/storage.model";
import { Storage } from './storage';
import { atom } from "nanostores";

import { EmailAuthProvider } from "firebase/auth";
import { navigate } from "astro:transitions/client";

export const isLoggedIn = atom(false);

let storage: Storage | null = new Storage();
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
    storage!.setData(EStorage.MEMBER, userData);
    isLogged = true;
    isLoggedIn.set(true);
  }

  return userData;
}

export async function getRoles(save = false, token: string): Promise<any> {
  const memberRolesData = await getMemberRoles(getHeaders(token));

  if (memberRolesData && save) {
    storage!.setData(EStorage.ROLES, memberRolesData);
  }

  return memberRolesData;
}

export function logOut() {
  currentToken = null;
  isLogged = false;
  isLoggedIn.set(false);

  storage!.clearData();

  navigate('/');

  setTimeout(() => {
    storage = null;
    window.location.reload();
  })
}

export async function startSession(accessToken: string) {
  // const provider = firebase.auth.OAuthProvider('discord.com');
  // const result = await firebase.auth().signInWithPopup(provider);
  // const token = await result.user.getIdToken(); // JWT token

  await getUser(true, accessToken);
  await getRoles(true, accessToken);
}
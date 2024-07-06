import { EStorage } from "models/storage.model";

export const getUserData = () => {
  return JSON.parse(localStorage.getItem(EStorage.USER)!);
};

export const getUserRoles = () => {
  return JSON.parse(localStorage.getItem(EStorage.ROLES)!);
};
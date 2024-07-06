import { EStorage } from "models/storage.model";
import { atom } from "nanostores";

const $user = atom();
const $roles = atom();

export class Storage {
  constructor() {
    this.handleInitialData();
  }

  private handleInitialData() {
    const data = Object.values(EStorage);
  }

  setData(key: string, value: any) {
    window.localStorage.setItem(key, JSON.stringify(value));
  }

  getData(key: string) {
    let localData = window.localStorage.getItem(key);
    localData = JSON.parse(localData!);

    return localData;
  }

  clearData() {
    const keys = Object.values(EStorage);

    for (let key of keys) {
      window.localStorage.removeItem(key);
    }
  }
};
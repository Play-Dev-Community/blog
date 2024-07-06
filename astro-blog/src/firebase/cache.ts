
import { getStorage } from "firebase/storage";
import { app } from "./conn";

export const storage = getStorage(app);

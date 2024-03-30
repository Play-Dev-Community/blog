import { getStorage } from "firebase/cache";
import { app } from "./conn";

export const storage = getStorage(app);

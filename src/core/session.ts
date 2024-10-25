import { EStorage } from "models/storage.model";
import { Storage } from './storage';
import { atom } from "nanostores";
import { navigate } from "astro:transitions/client";
import { signInWithCustomToken } from "firebase/auth";
import { auth } from "./firebase";
import confetti from "canvas-confetti";

import { delay, from } from 'rxjs';

export const isLoggedIn = atom(false);

let storage: Storage | null = new Storage();
let isLogged!: boolean;

async function signInDiscord(accessToken: string) {
  try {
    // 2. Fetch custom token with Discord access token
    const authDiscord = await fetch(`${import.meta.env.PUBLIC_PLAYDEV_API}/auth/discord`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        authorization: `${accessToken}`
      }
    });

    if (!authDiscord.ok) {
      throw new Error(`Backend request failed with status: ${authDiscord.status}`);
    }

    const authDiscordData = await authDiscord.json(); // Parse JSON response
    const customToken = authDiscordData.token;

    await signInWithCustomToken(auth, customToken).then(async (userCredential) => {

      storage!.setData(EStorage.TOKEN, await userCredential.user.getIdToken());
      storage!.setData(EStorage.MEMBER, authDiscordData.data);
      storage!.setData(EStorage.ROLES, authDiscordData.roles);

      isLogged = true;
      isLoggedIn.set(true);

      document.querySelector('.auth-title')!.classList.add('success');
      document.querySelector('.auth-title')!.textContent = 'Sucesso!';

      document.querySelector('.auth-redirect')!.remove();

      const colors = ['#14b8c0', '#ffffff'];

      from([
        confetti({
          particleCount: 100,
          angle: 60,
          spread: 55,
          origin: { x: 0 },
          colors: colors
        }),
        confetti({
          particleCount: 100,
          angle: 120,
          spread: 55,
          origin: { x: 1 },
          colors: colors
        })
      ])
        .pipe(
          delay(2000)
        )
        .subscribe(r => {
          navigate('/');
        });

    });

  } catch (error) {
    console.error("Erro ao autenticar via Discord:", error);
  }
}

export function logOut() {
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
  await signInDiscord(accessToken);
}
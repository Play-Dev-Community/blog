import { EStorage } from "models/storage.model";
import { Storage } from './storage';
import { atom } from "nanostores";
import { navigate } from "astro:transitions/client";
import { signInWithCustomToken, signOut } from "firebase/auth";
import { auth } from "./firebase";
import confetti from "canvas-confetti";

import { delay, from } from 'rxjs';

export const isLoggedIn = atom(false);

let storage: Storage | null = new Storage();
let isLogged!: boolean;

async function signInDiscord(accessToken: string) {
  try {

    const authDiscord = await fetch(`${import.meta.env.PUBLIC_PLAYDEV_API}/auth/discord`, {
      credentials: 'include',
      headers: {
        authorization: `${accessToken}`
      }
    });

    if (!authDiscord.ok) {
      throw new Error(`Backend request failed with status: ${authDiscord.status}`);
    }

    const authDiscordData = await authDiscord.json();

    const customToken = authDiscordData.token;

    signInWithCustomToken(auth, customToken).then(async (userCredential) => {

      const impersonateToken = await userCredential.user.getIdToken();

      console.log('AccessToken', accessToken);
      console.log('CustomToken', customToken);
      console.log('impersonateToken', impersonateToken);

      await fetch(`${import.meta.env.PUBLIC_PLAYDEV_API}/auth/discord/session`, {
        headers: {
          authorization: `Bearer ${impersonateToken}`
        }
      });

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

export async function logOut() {

  await fetch(`${import.meta.env.PUBLIC_PLAYDEV_API}/auth/signout`);

  signOut(auth).then(() => {
    isLogged = false;
    isLoggedIn.set(false);

    storage!.clearData();

    navigate('/');

    setTimeout(() => {
      storage = null;
      window.location.reload();
    })
  });

}

export async function startSession(accessToken: string) {
  await signInDiscord(accessToken);
}
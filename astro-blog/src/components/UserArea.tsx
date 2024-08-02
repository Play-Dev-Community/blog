export const prerender = true;

import React, { useEffect, useState } from 'react';
import discordIcon from '@icons/discord.svg';
import UserOptions from './UserOptions';
import { getUserAvatar, getUserData, getUserRoles } from '@utils/user.utils';
import type { DiscordUserData } from 'core/api';
import { Storage } from '../core/storage';
import { EStorage } from 'models/storage.model';

import './UserArea.scss';

interface UserInfoProps {}

const UserArea: React.FC<UserInfoProps> = () => {
  const [name, setName] = useState<string | null>(null);
  const [avatar, setAvatar] = useState<string | null>(null);
  const [optionsVisible, setOptionsVisible] = useState<boolean>(false);
  const [readyToRender, setReadyToRender] = useState<boolean>(false);
  const [isStudent, setStudent] = useState<boolean>(false);

  useEffect(() => {

    setReadyToRender(true);

    if (!getUserData() || !getUserRoles()) return;

    const storedUser: DiscordUserData = getUserData();
    const storedRoles = getUserRoles();
    const storedAvatar = getUserAvatar();

    if (storedRoles) {
      setStudent(storedRoles.includes('1237165303616634963'));
    }

    if (!getUserAvatar()) {
      if (storedUser) {
        const avatar = `https://cdn.discordapp.com/avatars/${storedUser.id}/${storedUser.avatar}`;

        setName(storedUser.global_name);
        setAvatar(avatar);
        new Storage().setData(EStorage.AVATAR, avatar);
      }
    } else {
      if (storedUser) {
        setName(storedUser.global_name);
        setAvatar(storedAvatar);
      }
    }

  }, []);

  const toggleUserOptions = () => {
    setOptionsVisible(!optionsVisible );
  };

  const convertURL = () => {
    let url = window.location.origin;

    return `${url}/auth`;
  };

  const authDiscord = () => {
    console.log('URL', convertURL());

    const
    clientID = '1192987982257475675',
    type = 'token',
    URI = convertURL(),
    scope = 'identify+guilds.members.read+guilds';

    window.location.href = `https://discord.com/oauth2/authorize?client_id=${clientID}&response_type=${type}&redirect_uri=${URI}&scope=${scope}`;
  }

  if (!readyToRender) return null;

  if (readyToRender && !name && !avatar) {
      return (
          <button onClick={authDiscord} className='btn-login'>
            <img
              src={discordIcon.src}
              alt='Ícone da logo do Discord'
              width='25'
              height='25'
            />
            Login
          </button>
      );
  }

  return (
    <div className='profile'>

      <div className="avatar" onClick={toggleUserOptions}>
        <img className='image' src={avatar!} alt={name!} />
      </div>

      { optionsVisible && <UserOptions username={name!} isStudent={isStudent} client:load /> }

    </div>
  );
}

export default UserArea;
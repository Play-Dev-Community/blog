import React, { useEffect, useState } from 'react';
import discordIcon from '@icons/discord.svg';
import UserOptions from '../UserOptions/UserOptions';
import { getUserAvatar, getUserData, getUserRoles } from '@utils/user.utils';
import type { DiscordUserData } from '@api/discord';
import { Storage } from '@core/storage';
import { EStorage } from 'models/storage.model';

import './UserArea.scss';
import { startSession } from '@core/session';

interface UserInfoProps {
}

const UserArea: React.FC<UserInfoProps> = ({ }) => {
  const [name, setName] = useState<string | null>(null);
  const [memberID, setMemberID] = useState<string | null>(null);
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
      setStudent(storedRoles.includes(import.meta.env.PUBLIC_DW_ID));
    }

    if (!getUserAvatar()) {
      if (storedUser) {
        const avatar = `https://cdn.discordapp.com/avatars/${storedUser.id}/${storedUser.avatar}`;

        setName(storedUser.global_name);
        setMemberID(storedUser.id);
        setAvatar(avatar);

        Storage.setData(EStorage.AVATAR, avatar, 7 * 24 * 60 * 60 * 1000);
      }
    } else {
      if (storedUser) {
        setName(storedUser.global_name);
        setAvatar(storedAvatar);
        setMemberID(storedUser.id);
      }
    }

  }, []);

  const toggleUserOptions = () => {
    setOptionsVisible(!optionsVisible);
  };

  const convertURL = () => {
    let url = window.location.origin;

    return `${url}/auth`;
  };

  const loginDiscord = () => {
    console.log('URL', convertURL());

    const
      clientID = '1278932305406197842',
      type = 'token',
      URI = convertURL(),
      scope = 'identify+guilds.members.read+guilds',
      url = `https://discord.com/oauth2/authorize?client_id=${clientID}&response_type=${type}&redirect_uri=${URI}&scope=${scope}`;

    // const popup = window.open(url, 'discordAuth', 'width=500,height=500');

    window.location.href = url;

    // Listener para receber a mensagem do popup
    window.addEventListener('message', async (event) => {

      // Valida a origem da mensagem
      if (event.origin !== URI) return;

      // Extrai o token ou dados recebidos
      const { token } = event.data;

      if (token) {

        await startSession(token);

        // Fecha o popup
        // popup!.close();

        // Aqui você pode atualizar o estado da aplicação com os dados de login
        // Exemplo: setUser(loggedInUserData);
      }
    });
  }

  if (!readyToRender) return null;

  if (readyToRender && !name && !avatar) {
    return (
      <button onClick={loginDiscord} className='btn-login'>
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

      {optionsVisible && <UserOptions data={{ id: memberID, isStudent, username: name }} />}

    </div>
  );
}

export default UserArea;
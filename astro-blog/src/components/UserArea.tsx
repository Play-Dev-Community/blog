import React, { useEffect, useState } from 'react';
import discordIcon from '@icons/discord.png';
import UserOptions from './UserOptions';
import { getUserData, getUserRoles } from '@utils/user.utils';

interface UserInfoProps {
  name?: string;
  avatar?: string;
}

const UserArea: React.FC<UserInfoProps> = () => {
  const [name, setName] = useState<string | null>(null);
  const [avatar, setAvatar] = useState<string | null>(null);
  const [optionsVisible, setOptionsVisible] = useState<boolean>(false);
  const [readyToRender, setReadyToRender] = useState<boolean>(false);
  const [isStudent, setStudent] = useState<boolean>(false);

  useEffect(() => {
    setReadyToRender(true);

    if (!getUserData() || !getUserRoles()) return;

    const storedUser = getUserData();
    const storedRoles = getUserRoles();

    if (storedUser) {
      setName(storedUser.global_name);
      setAvatar(`https://cdn.discordapp.com/avatars/${storedUser.id}/${storedUser.avatar}`);
    }

    if (storedRoles) {
      setStudent(storedRoles.includes('1237165303616634963'));
    }

    document.addEventListener("click", (e) => {
      const target = e.target as HTMLElement;
  
      if (target !== document.querySelector('.avatar')) {
        if (optionsVisible) {
          setOptionsVisible(false);
        }
      }
    });

  }, []);

  const toggleUserOptions = () => {
    setOptionsVisible(!optionsVisible);
  };

  const authDiscord = () => {
    const
    clientID = '1192987982257475675',
    type = 'token',
    URI = 'http%3A%2F%2Flocalhost%3A4321%2Fauth',
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
              width='40'
              height='40'
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

      { optionsVisible && <UserOptions username={name!} isStudent={isStudent} /> }

    </div>
  );
}

export default UserArea;
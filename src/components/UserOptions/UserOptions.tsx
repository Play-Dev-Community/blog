import { logOut } from 'core/session';
import React, { Fragment, useEffect, useState } from 'react';

import './UserOptions.scss';
import { getDevCoins } from '@api/coins';
import devcoinIcon from '@icons/devcoin.png';

import { from } from 'rxjs';

interface Props {
  data: {
    id: any;
    username: any;
    isStudent: any;
  }
}

const UserOptions: React.FC<Props> = ({ data }) => {
  const [devCoins, setDevcoins] = useState<number | null>(null);

  useEffect(() => {
    from(getDevCoins(data.id))
      .subscribe(r => {
        setDevcoins(r);
      });
  }, [data.id])

  const formatDevCoins = (coins: string | number) => {
    return `${String(coins).split(/(?=(?:...)*$)/).join('.')} DevCoins`;
  }

  return (
    <div className="user-options flex justify-end items-start flex-col">
      <h2 className='w-full font-bold tracking-wide'>{data.username}</h2>

      {devCoins && (
        <span className='flex gap-2'>
          <img src={devcoinIcon.src} width={25} />
          {formatDevCoins(devCoins)}
        </span>
      )}

      {

        <Fragment>
          <hr />

          <ul className='flex flex-col items-start gap-3 sm:gap-0'>
            {
              data.isStudent &&
              <Fragment>
                <a className='opacity-[0.33] pointer-events-none'>

                  <li>🔒 Minhas Aulas</li>

                </a>
                <a href="/minha-trilha">

                  <li>🛤️ Minha Trilha</li>

                </a>

                <a href="/meus-feedbacks">

                  <li>🚩 Meus Feedbacks</li>

                </a>
              </Fragment>
            }

            <a className='opacity-[0.33] pointer-events-none'>

              <li>🔒 Meus Desafios</li>

            </a>

            <button onClick={logOut}>

              <li> ↪️ Sair </li>

            </button>
          </ul>

        </Fragment>
      }
    </div>
  );
};

export default UserOptions;
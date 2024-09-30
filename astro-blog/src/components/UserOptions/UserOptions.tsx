import { logOut } from 'core/session';
import React, { Fragment } from 'react';

import './UserOptions.scss';

interface Props {
  username: any;
  isStudent: any;
  devcoins?: number;
}

const UserOptions: React.FC<Props> = ({ username, isStudent }) => {

  // const formatDevCoins = (coins: string | number) => {
  //   return `${String(coins).split(/(?=(?:...)*$)/).join('.')} DevCoins`;
  // }

  return (
    <div className="user-options flex justify-end items-start flex-col">
      <h2 className='w-full font-bold tracking-wide'>{username}</h2>

      {/* { devcoins && formatDevCoins(devcoins) } */}

      {
        
        <Fragment>
          <hr />

          <ul className='flex flex-col items-start gap-3 sm:gap-0'>
            {
              isStudent &&
              <Fragment>
                <a href="/minha-trilha">

                  <li>🛤️ Minha Trilha </li>

                </a>

                <a href="/meus-feedbacks">

                  <li>🚩 Meus Feedbacks </li>

                </a>
              </Fragment>
            }

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
import React, { Fragment } from 'react';

interface Props {
  username: string;
  isStudent: boolean;
}

const UserOptions: React.FC<Props> = ({ username, isStudent }) => {

  return (
    <div className="user-options">
      <h2>Olá, {username}</h2>

      {
        isStudent &&
        <Fragment>
          <hr />

          <ul>
            <a href="/minha-trilha">

            <li>🛤️ Minha Trilha </li> 

            </a>
          </ul>
        </Fragment>
      }
    </div>
  );
};

export default UserOptions;
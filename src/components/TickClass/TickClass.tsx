import { getUserData } from "@utils/user.utils";
import type { DiscordUserData } from "@api/discord";
import { createTick, readUserTick, updateTick } from "@api/ticks";
// import React from "react";
import { useEffect, useRef, useState } from "react";

import './TickClass.scss';
// import { Sounds } from "@utils/Sounds";

interface Props {
  slugClass: any;
}

export default function TickClass({ slugClass }: Props) {
  const inputRef = useRef<HTMLInputElement>(null);
  const [inputVal, setInputVal] = useState<boolean | null>(null);
  const [memberID, setMemberID] = useState<string | null>(null);
  const [tickClass, setTickClass] = useState<any | null>(null);
  const [initialLoad, setInitialLoad] = useState<boolean>(true);

  const dateOptions: any = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    timeZone: 'America/Sao_Paulo'
  };

  const handleToggle = () => {
    const newInputVal = !inputVal;
    setInputVal(newInputVal);
    handleTick(false, newInputVal);
    setInitialLoad(false);
  };

  const [tickTitle, setTickTitle] = useState<string>('Carregando...');
  const [tickDesc, setTickDesc] = useState<string>('Aguarde, estamos consultando as informações da sua aula');

  useEffect(() => {
    const storedUser: DiscordUserData = getUserData();

    if (!storedUser) return;

    setMemberID(storedUser.id);
  }, []);

  useEffect(() => {
    if (memberID) {
      handleTick(true);
    }
  }, [memberID]);

  useEffect(() => {
    if (tickClass) {
      updateVisualState();
    }
  }, [tickClass]);

  const handleTick = async (isFirstChange = false, completed?: boolean) => {

    if (!memberID) return;

    const res = await readUserTick(memberID, slugClass);

    if (!res) {
      if (isFirstChange) {
        await createTick({
          member_id: memberID,
          datetime: new Date().getTime(),
          class: slugClass,
          completed: completed ?? false
        });

        const newTickClass = await readUserTick(memberID, slugClass);
        setTickClass(newTickClass);
      }
    } else {
      if (!isFirstChange) {
        await updateTick(memberID, slugClass, completed!);
      }
      const updatedTickClass = await readUserTick(memberID, slugClass);
      const formatted = {
        ...updatedTickClass,
        datetime: new Date(updatedTickClass.datetime).toLocaleDateString('pt-BR', dateOptions)
      };
      setTickClass(formatted);
    }
  };

  const updateVisualState = () => {
    if (inputRef.current) {
      document.querySelector('.tick-container')?.classList.remove('disabled');
      inputRef.current.checked = tickClass?.completed || false;
    }
    setInputVal(tickClass?.completed || false);

    setTickTitle(tickClass?.completed ? 'Aula Concluída!' : 'Concluir Aula');

    const completedText = tickClass?.completed && initialLoad
      ? `Você concluiu essa aula em\n${tickClass.datetime}`
      : 'Parabéns por concluir esta aula!\nContinue para a próxima quando estiver pronto.';

    setTickDesc(tickClass?.completed
      ? completedText
      : 'Quando terminar de estudar esta aula, clique no botão acima para marcá-la como concluída.');
  };

  return (
    <>
      <div className="flex flex-col gap-2 sm:max-w-[30%]">
        <div className="flex items-center justify-between gap-5">
          <span className="tick-text">{tickTitle}</span>

          <div className='tick-container disabled' onClick={handleToggle}>
            <input ref={inputRef} className="tick-input" type="checkbox" hidden checked={inputVal ?? false} readOnly />
            <div className="tick-toggle"></div>
          </div>
        </div>

        <div
          className="tick-desc text-sm text-skin-base opacity-60 sm:max-w-[200px]"
        >
          {
            tickDesc.split('\n').map((line, index) => (
              <span className="first-of-type:mr-1 sm:mr-0" key={index}>
                {line}
                <br className="hidden sm:block" />
              </span>
            ))
          }
        </div>
      </div>
    </>
  );
}

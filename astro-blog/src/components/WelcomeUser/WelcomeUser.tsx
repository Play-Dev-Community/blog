import { getUserData, getUserRoles } from "@utils/user.utils";
import { useEffect, useState } from "react";

import './WelcomeUser.scss';

export interface Props {
}

export default function WelcomeUser({ }: Props) {
  const [userName, setUsername] = useState<string | null>(null);
  const [title, setTitle] = useState<string | null>(null);
  const [desc, setDesc] = useState<string | null>(null);
  const [readyToRender, setReadyToRender] = useState<boolean>(false);

  useEffect(() => {
    const storedUser = getUserData();

    if (!storedUser) return;

    setUsername(storedUser.global_name.split(' ')[0]);
    setTitle(`Bem vindo(a) de volta, ${userName}`);
    
    setReadyToRender(true);
  });

  useEffect(() => {
    if (readyToRender) {
      const storedRoles = getUserRoles();

      if (!storedRoles) return;

      setDesc(getDescRoles(storedRoles));
    }
  }, [userName]);

  const getDescRoles = (memberRoles: string[]): string => {
    // Mapeia IDs de funções para descrições
    const roles = new Map<string, string>([
        ['1200298866952638517', 'Front end'],
        ['1200299036469637140', 'Back end'],
        ['1200299272260825129', 'Full Stack'],
        ['1200322340630843402', 'Full Cycle'],
        ['1219495924171280404', 'Mobile'],
        ['1210079016883855420', 'Game'],
        ['1211539874143014932', 'Designer'],
        ['1200299533075222640', 'UI/UX'],
        ['1269500715739381781', 'Staff Oficial do Discord']
    ]);

    // Prefixos para diferentes IDs
    const developerRoleIds = new Set([
        '1200298866952638517',
        '1200299036469637140',
        '1200299272260825129',
        '1200322340630843402',
        '1219495924171280404',
        '1210079016883855420'
    ]);

    // Cria a descrição final
    const descriptions = memberRoles
        .map(roleId => {
            const roleDesc = roles.get(roleId);

            if (roleDesc) {
                // Adiciona o prefixo 'Developer' para IDs específicos
                const prefix = developerRoleIds.has(roleId) ? 'Developer' : '';
                return `${roleDesc} ${prefix}`.trim();
            }

            return null;
        })
        .filter(desc => desc !== null) // Remove valores nulos
        .map(desc => desc as string); // Assegura que `desc` é string

    // Junta todas as descrições com vírgula e substitui a última vírgula por 'e'
    if (descriptions.length === 0) {
        return '';
    }
    
    if (descriptions.length === 1) {
        return descriptions[0];
    }

    const lastDesc = descriptions.pop(); // Remove o último elemento
    const finalDesc = `${descriptions.join(', ')} e ${lastDesc}`;

    return finalDesc;
};


  if (!userName) {
    return null;
  }

  if (userName && !readyToRender) {
    return (
      <section className="mt-5">
        <div className="skeleton"></div>
        <div className="h-5 w-80 overflow-hidden mt-3">
          <div className="skeleton"></div>
        </div>
      </section>
    )
  }

  return (
    <section className="mt-5">
      <h1 className="text-2xl font-bold sm:text-2xl">{title}</h1>
      <span className="mt-2 italic">{desc}</span>
    </section>
  );
}

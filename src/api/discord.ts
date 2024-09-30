export interface DiscordUserData {
  avatar: string;
  discriminator: string;
  id: string;
  username: string;
  global_name: string;
  accent_color: number;
  banner_color: string;
  flags: number;
  locale: string;
  premium_type: 0 | 1 | 2;
}

const getMe = async (headers: any) => {

  const res = await fetch('https://discord.com/api/users/@me', headers);

  const user: Partial<DiscordUserData> = await res.json();

  return user;
}

const getMeRoles = async (headers: any) => {

  const res = await fetch(`https://discord.com/api/users/@me/guilds/${import.meta.env.PUBLIC_GUILD_ID}/member`, headers);

  const roles = await res.json();

  return roles.roles;
}

export { getMe as getUserDetails, getMeRoles as getMemberRoles };

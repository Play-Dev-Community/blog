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

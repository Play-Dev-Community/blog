/// <reference path="../.astro/actions.d.ts" />
/// <reference path="../.astro/types.d.ts" />
/// <reference types="astro/client" />

interface ImportMetaEnv {
  readonly PUBLIC_FIREBASE_API_KEY: string;
  readonly PUBLIC_FIREBASE_AUTH_DOMAIN: string;
  readonly PUBLIC_FIREBASE_DB_URL: string;
  readonly PUBLIC_FIREBASE_PROJECT_ID: string;
  readonly PUBLIC_FIREBASE_STORAGE_BUCKET: string;
  readonly PUBLIC_FIREBASE_MESSASING_SENDER_ID: string;
  readonly PUBLIC_FIREBASE_APP_ID: string;
  readonly PUBLIC_FIREBASE_MEASUREMENT_ID: string;
  readonly MONGODB_URI: string;
  readonly STUDENTS_ID: string[];
  readonly PUBLIC_DW_ID: string;
  readonly PUBLIC_GUILD_ID: string;
  readonly GOOGLE_SITE_VERIFICATION: string;
  readonly PUBLIC_PLAYDEV_API: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
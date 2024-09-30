/// <reference path="../.astro/actions.d.ts" />
/// <reference path="../.astro/types.d.ts" />
/// <reference types="astro/client" />

interface ImportMetaEnv {  
  readonly FIREBASE_API_KEY: string;
  readonly FIREBASE_AUTH_DOMAIN: string;
  readonly FIREBASE_DB_URL: string;
  readonly PUBLIC_FIREBASE_PROJECT_ID: string;
  readonly FIREBASE_STORAGE_BUCKET: string;
  readonly FIREBASE_MESSASING_SENDER_ID: string;
  readonly FIREBASE_APP_ID: string;
  readonly FIREBASE_MEASUREMENT_ID: string;
  readonly MONGODB_URI: string;
  readonly STUDENTS_ID: string[];
  readonly PUBLIC_DW_ID: string;
  readonly PUBLIC_GUILD_ID: string;
  readonly GOOGLE_SITE_VERIFICATION: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
    /// <reference types="vite/client" />

    interface ImportMetaEnv {
      readonly VITE_SUPABASE_URL: string; // Example: Replace with your actual env variables
      readonly VITE_SUPABASE_PUBLISHABLE_KEY: string;
    }

    interface ImportMeta {
      readonly env: ImportMetaEnv;
    }
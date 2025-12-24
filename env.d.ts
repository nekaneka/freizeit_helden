/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_CONTACT_ENDPOINT?: string;
  readonly VITE_RESEND_API_KEY?: string;
  readonly VITE_RESEND_FROM_EMAIL?: string;
  readonly VITE_COMPANY_EMAIL?: string;
  readonly VITE_SEND_USER_COPY?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}

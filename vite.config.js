import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

export default ({ mode }) => {
  const { VITE_SUPABASE_ANON_KEY } = loadEnv(mode, process.cwd());
  console.log(VITE_SUPABASE_ANON_KEY);

  return defineConfig({
    plugins: [react()],
  });
};

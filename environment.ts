// runtime env

const env = (key: string, defaultValue = '') =>
  process.env[key] || defaultValue;

export const GITHUB = env('DEPLOY_ENV') === 'github';

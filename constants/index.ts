/* head meta tag data */

const DEV = process.env.NODE_ENV === 'development';

export const PROJ_NAME = 'BiiMe-store-web';
export const SITE_TITLE = 'BiiMe';
export const SITE_DESC = 'BiiMe';
export const SITE_URL = 'localhost';
export const FAVICON_PATH = DEV
  ? '/static/favicon-biime-32x32.ico'
  : `/${PROJ_NAME}/static/favicon-biime-32x32.ico`;
export const LARGE_ICON_PATH = DEV
  ? '/static/large-icon.png'
  : `/${PROJ_NAME}/static/logo_BiiMe@3.png`;
export const NAV_TITLE = 'nav title';

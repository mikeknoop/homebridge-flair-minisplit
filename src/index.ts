import type { API } from 'homebridge';

import { PLATFORM_NAME } from './settings';
import { FlairPlatform } from './platform';
import 'reflect-metadata';

// import Client from './client';

/**
 * This method registers the platform with Homebridge
 */
export = (api: API) => {
  api.registerPlatform(PLATFORM_NAME, FlairPlatform);
}

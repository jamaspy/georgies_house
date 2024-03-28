import { ApiKeySession, ProfilesApi } from 'klaviyo-api';

export const session = new ApiKeySession(process.env.KLAVYO_API_KEY || '');

export const profilesApi = new ProfilesApi(session);

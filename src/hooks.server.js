import * as cookie from 'cookie';

/** @type {import('@sveltejs/kit').Handle} */
export const handle = async ({ event, resolve }) => {
  const cookies = cookie.parse(event.request.headers.get('cookie') || '');
  event.locals.userID = cookies['userID'] || crypto.randomUUID();

  const response = await resolve(event);

  if (!cookies['userID']) {
    // if this is the first time the user has visited this app,
    // set a cookie so that we recognise them when they return
    const now = new Date();
    now.setDate(now.getHours() + 12);
    const c = cookie.serialize('userID', event.locals.userID, {
      path: '/',
      httpOnly: true,
      expires: now,
    });
    response.headers.set('set-cookie', c);
  }

  return response;
};

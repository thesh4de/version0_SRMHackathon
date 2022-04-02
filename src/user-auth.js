import GUN from 'gun';
import 'gun/sea';
import 'gun/axe';

export const gun = GUN();
export const user = gun.user().recall({ sessionStorage: true });

export const username = writable('');

user.get('alias').on(v => username.set(v))

db.on('auth', async (event) => {
    const alias = await user.get('alias');
    username.set(alias);
});

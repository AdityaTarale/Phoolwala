import { changeLanguage, changeTheme } from './app/app-slice';
import { setDeviceId } from './auth/auth-slice';
import { addStep, decrement, increment } from './counter/counter-slice';
import { getUser } from './user/user-slice';
import { persistor, store } from './store';

export { persistor, store };

export { addStep, changeLanguage, changeTheme, decrement, getUser, increment, setDeviceId };

import { Duration } from 'date-fns';
import { v4 as uuid } from 'uuid';

/* generating a random identifier for `deviceId` */
const generateDeviceId = () => uuid();

/* generate a timestamp when user signup & login */
const generateTimeStamp = () => new Date().getTime();

const validateAuthToken = async () => {
  setTimeout(() => {
    return true;
  }, 2000);
};

const isLastLoginInDate = auth => {
  const now = new Date();
  const lastLogin = new Date(auth?.lastLogin);
  const diff = Duration.between(lastLogin, now);
  return diff.asDays() > 28;
};

export { generateDeviceId, generateTimeStamp, isLastLoginInDate, validateAuthToken };

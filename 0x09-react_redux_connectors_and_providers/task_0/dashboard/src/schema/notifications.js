import notificationArray from '../../notifications.json';
import { normalize, schema } from 'normalizr';

const user = new schema.Entity('user');

const message = new schema.Entity(
  'messages',
  {},
  { idAttribute: (value) => value.context.guid }
);
export const newIds = normalize(notificationArray, [message]);

const notification = new schema.Entity(
  'notifications',
  {},
  {
    author: user,
    context: message,
  },
  {
    idAttribute: 'id',
  }
);

export const normalizedNotifications = normalize(notificationArray, [
  notification,
]);

export const getAllNotificationsByUser = (userId) => {
  const userContexts = Object.values(
    normalizedNotifications.entities.notifications
  );
  const userContext = userContexts.filter((user) => user.id === userId);
  return userContext[0].context;
};

export { user, message, notification };

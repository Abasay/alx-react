import notificationArray from '../../notifications.json';
import { normalize, schema } from 'normalizr';

export const getAllNotificationsByUser = (userId) => {
  const filteredNotifications = notificationArray.filter(
    (notification) => notification.author.id === userId
  );

  const context = filteredNotifications.map(
    (notification) => notification.context
  );

  return context;
};

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

export const newNotifications = normalize(notificationArray, [notification]);

export { user, message, notification };

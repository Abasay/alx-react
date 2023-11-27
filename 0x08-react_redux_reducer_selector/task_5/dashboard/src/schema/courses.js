import { normalize, schema } from 'normalizr';

const courses = new schema.Entity('courses');
const notifications = new schema.Entity('notifications');

export const courseNormalizer = (data) => {
  return normalize(data, [courses]);
};

export const notificationsNormalizer = (data) => {
  return normalize(data, [notifications]);
};

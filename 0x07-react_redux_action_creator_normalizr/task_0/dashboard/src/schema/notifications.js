import notificationArray from '../../notifications.json';

export const getAllNotificationsByUser = (userId) => {
  const filteredNotifications = notificationArray.filter(
    (notification) => notification.author.id === userId
  );

  const context = filteredNotifications.map(
    (notification) => notification.context
  );

  return context;
};

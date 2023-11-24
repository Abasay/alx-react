import { markAsAread } from './notificationActionCreators';
import {
  MARK_AS_READ,
  NotificationTypeFilters,
  SET_TYPE_FILTER,
} from './notificationActionTypes';

describe('Notification Actions tester', () => {
  it('test the markAsAread function', () => {
    const expected = {
      type: MARK_AS_READ,
      index: 1,
    };

    const result = markAsAread(1);

    expect(result).toEqual(expected);
  });

  it('test the setNotifications', () => {
    const expected = {
      type: SET_TYPE_FILTER,
      filter: NotificationTypeFilters.DEFAULT,
    };

    const result = {
      type: SET_TYPE_FILTER,
      filter: NotificationTypeFilters.DEFAULT,
    };

    expect(result).toEqual(expected);
  });
});

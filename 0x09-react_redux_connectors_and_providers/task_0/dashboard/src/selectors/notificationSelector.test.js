import { Map, List } from 'immutable';
import {
  filterTypeSelected,
  getNotifications,
  getUnreadNotifications,
} from './notificationSelector';

describe('filterTypeSelected selector', () => {
  it('returns the filter type selected', () => {
    const state = Map({
      filterType: 'important', // Sample filter type
    });
    expect(filterTypeSelected(state)).toEqual('important');
  });
});

describe('getNotifications selector', () => {
  it('returns a list of notifications in a Map format', () => {
    const notifications = List([
      Map({ id: 1, message: 'Notification 1', read: true }),
      Map({ id: 2, message: 'Notification 2', read: false }),
      Map({ id: 3, message: 'Notification 3', read: false }),
    ]);

    const state = Map({
      notifications,
    });

    expect(getNotifications(state)).toEqual(notifications);
  });
});

describe('getUnreadNotifications selector', () => {
  it('returns a list of unread notifications in a Map format', () => {
    const notifications = List([
      Map({ id: 1, message: 'Notification 1', read: true }),
      Map({ id: 2, message: 'Notification 2', read: false }),
      Map({ id: 3, message: 'Notification 3', read: false }),
    ]);

    const state = Map({
      notifications,
    });

    const unreadNotifications = List([
      Map({ id: 2, message: 'Notification 2', read: false }),
      Map({ id: 3, message: 'Notification 3', read: false }),
    ]);

    expect(getUnreadNotifications(state)).toEqual(unreadNotifications);
  });
});

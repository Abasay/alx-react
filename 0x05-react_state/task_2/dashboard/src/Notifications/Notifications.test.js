import React from 'react';
import { render, screen } from '@testing-library/react';
import { Notifications } from './Notifications';
import { shallow } from 'enzyme';
import { getLatestNotification } from '../utils/utils';
import { StyleSheetTestUtils } from 'aphrodite';

const listNotifications = [
  { id: 1, type: 'default', value: 'New course available' },
  { id: 2, type: 'urgent', value: 'New resume available' },
  { id: 3, type: 'urgent', html: { __html: getLatestNotification() } },
];
describe('Notifications Component when displayDrawer is false', () => {
  let renderWrapper;
  let shallowWrapper;
  beforeEach(() => {
    StyleSheetTestUtils.suppressStyleInjection();
    renderWrapper = render(<Notifications />);
    shallowWrapper = shallow(<Notifications />);
  });

  afterEach(() => {
    StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
  });
  it('display menuItem when displayDrawer is false', () => {
    // render(<Notifications />)
    const txt = screen.getByText('Your notifications');
    expect(txt).toBeInTheDocument();
  });

  it('should not display div.Notifcations when the displayDrawer is false', () => {
    const wrapper = shallow(<Notifications />);
    expect(shallowWrapper.find('.Notifications').exists()).toBe(false);
  });

  it('menuItem is displayed when displayDrawer is ftrue', () => {
    expect(shallowWrapper.find('.menuItem').exists()).toBe(true);
  });

  it('should display div.Notifcations when the displayDrawer is true', () => {
    const wrapper = shallow(<Notifications displayDrawer={true} />);
    expect(wrapper.find('.Notifications').exists()).toBe(true);
  });

  it('renders the text renders correctly when passed empty array', () => {
    const wrapper = shallow(
      <Notifications displayDrawer={true} listNotifications={[]} />
    );

    expect(wrapper).toMatchSnapshot();
  });
});

describe('Notication component when displayDrawer is true', () => {
  let renderWrapper;
  let shallowWrapper;

  beforeEach(() => {
    renderWrapper = render(
      <Notifications
        displayDrawer={true}
        listNotifications={listNotifications}
      />
    );
    shallowWrapper = shallow(
      <Notifications
        displayDrawer={true}
        listNotifications={listNotifications}
      />
    );
  });

  it('renders three list items', () => {
    const wrapper = shallow(
      <Notifications
        displayDrawer={true}
        listNotifications={listNotifications}
      />
    );
    expect(shallowWrapper.find('NotificationItem')).toHaveLength(3);
  });

  it('renders the correct html for the first element', () => {
    const firstElem = shallowWrapper.find('NotificationItem').first();
    expect(firstElem.html()).toContain(
      '<li data-notification-type="default">New course available</li>'
    );
  });

  it('renders the text "Here is the list of notifications"', () => {
    const text = screen.getByText('Here is the list of notifications');
    expect(text).toBeInTheDocument();
  });

  it('renders text "no notification available now"', () => {
    render(<Notifications displayDrawer={true} listNotifications={[]} />);
    const text = screen.getByText('No new notification for now');
    expect(text).toBeInTheDocument();
  });

  it('Check that when calling the function markAsRead on an instance of the component, the spy is being called with the right message', () => {
    console.log = jest.fn();
    const wrapper = mount(
      <Notifications
        displayDrawer={true}
        listNotifications={listNotifications}
      />
    );
    const mock = jest.spyOn(console, 'log');
    const noti = wrapper.find('li').first();
    noti.simulate('click');
    expect(mock).toBeCalledWith('Notification 1 has been marked as read');
    mock.mockRestore();
    jest.restoreAllMocks();
  });
});

it('Should not render when the props length are d same', () => {
  const { rerender } = render(
    <Notifications displayDrawer={true} listNotifications={listNotifications} />
  );
  const initialRenderCount = Notifications.mock.calls.length;

  rerender(
    <Notifications displayDrawer={true} listNotifications={listNotifications} />
  );

  expect(Notifications.mock.calls.length).toBe(initialRenderCount);
});

describe('Testing Notifications Component Drawer Display handlers ', () => {
  let wrapper;

  beforeEach(() => {
    StyleSheetTestUtils.suppressStyleInjection();
    wrapper = mount(
      <Notifications
        handleDisplayDrawer={jest.fn()}
        handleHideDrawer={jest.fn()}
      />
    );
  });

  it('verify thet clicking on your notifications get handleDisplayDrawer is called', () => {
    const simulate = wrapper.find('div').at(0).simulate('click');
    expect(simulate.props().handleHideDrawer).toBeCalled();
  });

  it('verify thet clicking on your notifications get handleDisplayDrawer is called', () => {
    wrapper.setState({ displayDrawer: true });
    const simulate = wrapper.find('div').at(0).simulate('click');
    expect(simulate.props().handleDisplayDrawer).toBeCalled();
  });
});

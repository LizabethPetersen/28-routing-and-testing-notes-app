import React from 'react';
import { configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Dashboard from '../components/dashboard/dashboard';

configure({ adapter: new Adapter() });

describe('Dashboard testing', () => {
  let mountedDashboard;
  
  beforeEach(() => {
    mountedDashboard = mount(<Dashboard />);
  });

  afterEach(() => {
    mountedDashboard.unmount();
  });

  test('Simple test for initial state', () => {
    expect(mountedDashboard.state('notes')).toEqual([]);
  });

  test('Adding a new note to the state', () => {
    const mockNote = [{ title: 'Test', content: 'More test', _id: '1357' }];
    mountedDashboard.setState({ notes: mockNote });
    expect(mountedDashboard.state('notes')).toEqual(mockNote);
    expect(mountedDashboard.state('notes')).toHaveLength(1);
  });
});

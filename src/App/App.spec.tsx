import { shallow } from 'enzyme';

import App from './App';

describe('App', () => {
  it('renders with required props', () => {
    const wrapper = shallow(<App />);

    expect(wrapper).toMatchSnapshot();
  });

  it('renders with all props', () => {
    const wrapper = shallow(<App />);

    expect(wrapper).toMatchSnapshot();
  });
});

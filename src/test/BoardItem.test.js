import { shallow } from 'enzyme';
import BoardItem from '../components/BoardItem';

describe('<BoardItem />  Component test', () => {
  var wrapper = shallow(<BoardItem />);
  beforeEach(() => {
    wrapper = shallow(<BoardItem />);
  });

  test('renders empty BoardItem component', () => {
    const wrapper = shallow(<BoardItem value={-1} />);
    const counterText = wrapper.find('li').text().trim();
    expect(counterText).toBe('');
  });

  test('renders x when the value is 1', () => {
    const wrapper = shallow(<BoardItem value={0} />);
    const counterText = wrapper.find('li').text().trim();
    expect(counterText).toBe('x');
  });

  test('renders o when the value is 0', () => {
    const wrapper = shallow(<BoardItem value={1} />);
    const counterText = wrapper.find('li').text().trim();
    expect(counterText).toBe('o');
  });
})


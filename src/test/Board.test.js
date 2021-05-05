import { shallow, mount } from 'enzyme';
import Board from '../components/Board';

describe('<Board />  Component test', () => {
  var wrapper = shallow(<Board />);
  beforeEach(() => {
    wrapper = shallow(<Board />);
  });

  test('renders empty Board component', () => {
    expect(wrapper).toMatchSnapshot();
  });

  test('test, turn 1 player 1', () => {
    wrapper = mount(<Board />);
    wrapper.find('ul').children().at(0).simulate('click');
    const boardItem = wrapper.find('ul').children().at(0).text().trim();
    expect(boardItem).toBe('x');
  });

  test('test, turn 1 player 2', () => {
    wrapper = mount(<Board />);
    wrapper.find('ul').children().at(0).simulate('click');
    wrapper.find('ul').children().at(2).simulate('click');
    const boardItem = wrapper.find('ul').children().at(2).text().trim();
    expect(boardItem).toBe('o');
  });
})


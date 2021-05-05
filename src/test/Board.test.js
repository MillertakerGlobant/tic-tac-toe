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

  test('test, turn 2 player 2', () => {
    wrapper = mount(<Board />);
    wrapper.find('ul').children().at(0).simulate('click');
    wrapper.find('ul').children().at(2).simulate('click');
    wrapper.find('ul').children().at(1).simulate('click');
    const boardItem = wrapper.find('ul').children().at(1).text().trim();
    expect(boardItem).toBe('x');
  });

  test('draw game board', () => {
    wrapper = mount(<Board />);
    for(let i = 0; i < 9; i++) wrapper.find('ul').children().at(i).simulate('click');

    expect(wrapper).toMatchSnapshot();
  });
})


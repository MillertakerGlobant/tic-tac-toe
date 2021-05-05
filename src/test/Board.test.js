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
    wrapper.find('ul').children().at(0).simulate('click');
    wrapper.find('ul').children().at(1).simulate('click');
    wrapper.find('ul').children().at(2).simulate('click');
    wrapper.find('ul').children().at(4).simulate('click');
    wrapper.find('ul').children().at(7).simulate('click');  
    wrapper.find('ul').children().at(6).simulate('click');  
    wrapper.find('ul').children().at(8).simulate('click');  
    wrapper.find('ul').children().at(5).simulate('click');  
    wrapper.find('ul').children().at(3).simulate('click');  

    const gameOverText = wrapper.find('h3').text().trim();
    expect(gameOverText).toBe('GAME OVER');
  });

  test('Player 1 winner', () => {
    wrapper = mount(<Board />);
    wrapper.find('ul').children().at(0).simulate('click');
    wrapper.find('ul').children().at(2).simulate('click');
    wrapper.find('ul').children().at(3).simulate('click');
    wrapper.find('ul').children().at(4).simulate('click');
    wrapper.find('ul').children().at(6).simulate('click');  
    
    const gameOverText = wrapper.find('h3').text().trim();
    expect(gameOverText).toBe('x player is the winner');
  });

  test('Player 2 winner', () => {
    wrapper = mount(<Board />);
    wrapper.find('ul').children().at(0).simulate('click');
    wrapper.find('ul').children().at(1).simulate('click');
    wrapper.find('ul').children().at(2).simulate('click');
    wrapper.find('ul').children().at(4).simulate('click');
    wrapper.find('ul').children().at(5).simulate('click');  
    wrapper.find('ul').children().at(7).simulate('click');  
    
    const gameOverText = wrapper.find('h3').text().trim();
    expect(gameOverText).toBe('o player is the winner');
  });

  test('reset Board click', () => {
    wrapper = mount(<Board />);
    wrapper.find('ul').children().at(0).simulate('click');
    wrapper.find('ul').children().at(1).simulate('click');
    wrapper.find('ul').children().at(2).simulate('click');
    wrapper.find('ul').children().at(4).simulate('click');
    wrapper.find('.resetBtn').simulate('click'); 
  
    for(let i = 0; i < 9; i++) {
      let boardItemValue = wrapper.find('ul').children().at(i).prop('value');
      expect(boardItemValue).toBe(-1);
    }
  });

  test('rewind Board ', () => {
    wrapper = mount(<Board />);
    wrapper.find('ul').children().at(0).simulate('click');
    wrapper.find('ul').children().at(1).simulate('click');
    wrapper.find('ul').children().at(2).simulate('click');
    wrapper.find('.rewindBtn').simulate('click'); 
  
    expect(wrapper.find('ul').children().at(2).text().trim());
  });
})


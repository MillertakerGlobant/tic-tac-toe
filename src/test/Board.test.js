import { shallow } from 'enzyme';
import Board from '../components/Board';

describe('<Board />  Component test', () => {
  test('renders emoty Board component', () => {
    let wrapper = shallow(<Board />);
  });
})


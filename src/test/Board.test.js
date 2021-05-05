import { shallow } from 'enzyme';
import Board from '../components/Board';

describe('<Board />  Component test', () => {
  var wrapper = shallow(<Board />);
  beforeEach(() => {
    wrapper = shallow(<Board />);
  });

  test('renders empty Board component', () => {
    expect(wrapper).toMatchSnapshot();
  });
})


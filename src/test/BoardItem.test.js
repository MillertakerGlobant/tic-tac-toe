import { shallow } from 'enzyme';
import BoardItem from '../components/BoardItem';

describe('<BoardItem />  Component test', () => {
  var wrapper = shallow(<BoardItem />);
  beforeEach(() => {
    wrapper = shallow(<BoardItem />);
  });

  test('renders empty BoardItem component', () => {
    expect(wrapper).toMatchSnapshot();
  });

  test('renders X when the value is 1', () => {

  });

  test('renders O when the value is 0', () => {
    
  });
})


import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import Auth from './auth';
import Home from './home';

const switchNavigator = createSwitchNavigator(
  {
    Auth,
    Home,
  },
  {
    initialRouteName: 'Auth',
  },
);

export default createAppContainer(switchNavigator);

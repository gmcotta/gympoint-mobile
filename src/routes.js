import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import SignIn from './pages/SignIn';
import CheckIn from './pages/CheckIn';
import HelpOrder from './pages/HelpOrder';

export default createAppContainer(
  createSwitchNavigator({
    SignIn,
    CheckIn,
    HelpOrder,
  })
);

import React from 'react';
import {createAppContainer} from 'react-navigation';
import createSwitchNavigator from 'react-navigation-animated-switch';
import {Transition} from 'react-native-reanimated';

import Login from './pages/Login';
import Dashboard from './pages/Dashboard';

const mainNavigation = createSwitchNavigator(
  {
    Login,
    Dashboard,
  },
  {
    Transition: (
      <Transition.Together>
        <Transition.Out type="slide-bottom" durationMs={200} />
        <Transition.In type="fade" durationMs={200} />
      </Transition.Together>
    ),
  },
);

export default createAppContainer(mainNavigation);

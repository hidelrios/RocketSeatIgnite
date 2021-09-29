/**
 * @format
 */

import {AppRegistry} from 'react-native';
import YourApp from './App';
import Splash from './telas/splash';
import Home from './telas/home';

import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => Home);

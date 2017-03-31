import {Navigation} from 'react-native-navigation';
import HomeFragment from '../page/HomeFragment';
import OrderFragment from '../page/OrderFragment';
import IMFragment from '../page/IMFragment';
import MeFragment from '../page/MeFragment';

// register all screens of the app (including internal ones)
export function registerScreens() {
	Navigation.registerComponent('shopping.HomeTabScreen', () => HomeFragment);
  	Navigation.registerComponent('shopping.OrderTabScreen', () => OrderFragment);
  	Navigation.registerComponent('shopping.IMTabScreen', () => IMFragment);
  	Navigation.registerComponent('shopping.MeTabScreen', () => MeFragment);
}

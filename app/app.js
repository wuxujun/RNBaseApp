/**
 * Created by xujunwu on 3/25/17.
 * 启动入口
 */
import {Platform} from 'react-native';
import {Navigation} from 'react-native-navigation';

// screen related book keeping
import {registerScreens} from './page';
registerScreens();

const createTabs = () => {
  let tabs = [
    {
      label: '首页',
      screen: 'shopping.HomeTabScreen',
      icon: require('./images/ic_tab_home.png'),
      selectedIcon: require('./images/ic_tab_home_s.png'),
      title: '天下良仓'
    },
    {
      label: '订单',
      screen: 'shopping.OrderTabScreen',
      icon: require('./images/ic_tab_order.png'),
      selectedIcon: require('./images/ic_tab_order_s.png'),
      title: '订单',
      navigatorStyle: {
        tabBarBackgroundColor: '#4dbce9',
      }
    },
    {
      label: '聊天',
      screen: 'shopping.IMTabScreen',
      icon: require('./images/ic_tab_im.png'),
      selectedIcon: require('./images/ic_tab_im_s.png'),
      title: '聊天',
      navigatorStyle: {
        tabBarBackgroundColor: '#4dbce9',
      }
    },
    {
      label: '我的',
      screen: 'shopping.MeTabScreen',
      icon: require('./images/ic_tab_my.png'),
      selectedIcon: require('./images/ic_tab_my_s.png'),
      title: '我的',
      navigatorStyle: {
        tabBarBackgroundColor: '#4dbce9',
      }
    }
  ];
  return tabs;
};
// this will start our app
Navigation.startTabBasedApp({
  tabs: createTabs(),
  appStyle: {
    tabBarBackgroundColor: '#0f2362',
    tabBarButtonColor: '#ffffff'
  },
  drawer: {

  }
});

/**
 * Created by xujunwu on 9/25/16.
 */
'use strict';

import React, {Component} from 'react';
import {Text, View, StyleSheet, Platform, ToastAndroid} from 'react-native';
import ScrollableTabView, {DefaultTabBar, } from 'react-native-scrollable-tab-view';
import OrderAllTab from './OrderAllTab';
import OrderRecvTab from './OrderRecvTab';
import OrderEvalTab from './OrderEvalTab';
import theme from '../config/theme';
import px2dp from '../util/px2dp';


export default class OrderFragment extends Component{
  static navigatorButtons = {
    rightButtons: [
      {
        icon: require('../images/ic_nav_notice.png'),
        id: 'notice'
      }
    ]
  };
    constructor(props){
        super(props);
        this.state = {

        };
    }
    render(){
        return(
          <ScrollableTabView style={{marginTop: 0, }} renderTabBar={() => <DefaultTabBar />}>
            <OrderRecvTab tabLabel='待收货'/>
            <OrderEvalTab tabLabel='待评价'/>
            <OrderAllTab tabLabel='全部订单'/>
          </ScrollableTabView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: theme.pageBackgroundColor
    }
});

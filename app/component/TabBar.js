/**
 * Created by xujunwu on 4/11/16.
 */
'use strict';

import React, {Component} from 'react';
import {Text, StyleSheet, Image} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import TabNavigator from 'react-native-tab-navigator';
import HomeFragment from '../page/HomeFragment';
import OrderFragment from '../page/OrderFragment';
import MeFragment from '../page/MeFragment';
import IMFragment from '../page/IMFragment';
import px2dp from '../util/px2dp';


export default class TabBar extends Component{
    static defaultProps = {
        selectedColor: 'rgb(22,131,251)',
        normalColor: '#a9a9a9'
    };

    constructor(props){
        super(props);
        this.state = {
            selectedTab: 'home',
            tabName: ['首页','订单','聊天','我的']
        }
    }

    render(){
        const {selectedColor} = this.props;
        const {tabName} = this.state;
        return(
            <TabNavigator
                hidesTabTouch={true}
                tabBarStyle={styles.tabbar}
                sceneStyle={{ paddingBottom: styles.tabbar.height }}>
                <TabNavigator.Item
                    tabStyle={styles.tabStyle}
                    title={tabName[0]}
                    selected={this.state.selectedTab === 'home'}
                    selectedTitleStyle={{color: selectedColor}}
                    renderIcon={() => <Image style={styles.tab} source={this.state.homeNormal} />}
                    renderSelectedIcon={() => <Image style={styles.tab} source={this.state.homeSelected} />}
                    onPress={() => this.setState({ selectedTab: 'home' })}>
                    {<HomeFragment navigator={this.props.navigator}/>}
                </TabNavigator.Item>
                <TabNavigator.Item
                    tabStyle={styles.tabStyle}
                    title={tabName[1]}
                    selected={this.state.selectedTab === 'order'}
                    selectedTitleStyle={{color: selectedColor}}
                    renderIcon={() => <Image style={styles.tab} source={this.state.orderNormal} />}
                    renderSelectedIcon={() => <Image style={styles.tab} source={this.state.orderSelected} />}
                    onPress={() => this.setState({ selectedTab: 'order' })}>
                    {<OrderFragment />}
                </TabNavigator.Item>
                <TabNavigator.Item
                    tabStyle={styles.tabStyle}
                    title={tabName[2]}
                    selected={this.state.selectedTab === 'im'}
                    selectedTitleStyle={{color: selectedColor}}
                    renderIcon={() => <Image style={styles.tab} source={this.state.imNormal} />}
                    renderSelectedIcon={() => <Image style={styles.tab} source={this.state.imSelected} />}
                    onPress={() => this.setState({ selectedTab: 'im' })}>
                    {<IMFragment navigator={this.props.navigator}/>}
                </TabNavigator.Item>
                <TabNavigator.Item
                    tabStyle={styles.tabStyle}
                    title={tabName[3]}
                    selected={this.state.selectedTab === 'me'}
                    selectedTitleStyle={{color: selectedColor}}
                    renderIcon={() => <Image style={styles.tab} source={this.state.meNormal} />}
                    renderSelectedIcon={() => <Image style={styles.tab} source={this.state.meSelected} />}
                    onPress={() => this.setState({ selectedTab: 'me' })}>
                    {<MeFragment navigator={this.props.navigator}/>}
                </TabNavigator.Item>
            </TabNavigator>
        );
    }

    componentWillMount() {
        const {selectedColor, normalColor} = this.props;
        this.setState({ homeNormal: require('../images/ic_tab_home.png') });
        this.setState({ homeSelected: require('../images/ic_tab_home_s.png') });
        this.setState({ orderNormal: require('../images/ic_tab_order.png') });
        this.setState({ orderSelected: require('../images/ic_tab_order_s.png') });
        this.setState({ imNormal: require('../images/ic_tab_im.png') });
        this.setState({ imSelected: require('../images/ic_tab_im_s.png')});
        this.setState({ meNormal: require('../images/ic_tab_my.png') });
        this.setState({ meSelected: require('../images/ic_tab_my_s.png') });
        }
}

const styles = StyleSheet.create({
    tabbar: {
        height: px2dp(49),
        alignItems:'center',
        justifyContent: 'center',
        backgroundColor: '#fff'
    },
    tabStyle:{
        padding: px2dp(8)
    },
    tab: {
        width: px2dp(22),
        height: px2dp(22)
    }
});

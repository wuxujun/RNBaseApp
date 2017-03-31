/**
 * Created by xujunwu on 9/25/16.
 */
'use strict';

import React, {Component} from 'react';
import {Text, View, StyleSheet, Platform, ToastAndroid} from 'react-native';
import theme from '../config/theme';
import px2dp from '../util/px2dp';

export default class IMFragment extends Component{
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
            <View style={styles.container}>

            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: theme.pageBackgroundColor
    }
});

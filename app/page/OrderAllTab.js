/**
 * Created by xujunwu on 4/11/16.
 * 全部订单
 */
'use strict';

import React, {Component, PropTypes} from 'react';
import {Text, View, StyleSheet, Platform, Button, PixelRatio, TouchableNativeFeedback, TouchableOpacity, ToastAndroid, Alert, AlertIOS} from 'react-native';
import px2dp from '../util/px2dp';
import theme from '../config/theme';
import Avatar from '../component/Avatar';
import TextButton from '../component/TextButton';
import Icon from 'react-native-vector-icons/Ionicons';

export default class OrderAllTab extends Component{
    constructor(props){
        super(props);
        this.state = {

        };
    }
    _onPressCallback(position){
       
    }

    render(){
        return(
            <View style={styles.container}>
                <Text >全部订单</Text>
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

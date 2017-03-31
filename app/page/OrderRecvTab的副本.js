/**
 * Created by xujunwu on 4/11/16.
 *  待评价
 */
'use strict';

import React, {Component, PropTypes} from 'react';
import {Text, View, StyleSheet, Platform, Button, PixelRatio, TouchableNativeFeedback, TouchableOpacity, ToastAndroid, Alert, AlertIOS} from 'react-native';
import px2dp from '../util/px2dp';
import theme from '../config/theme';
import Avatar from '../component/Avatar';
import TextButton from '../component/TextButton';
import Icon from 'react-native-vector-icons/Ionicons';

export default class OrderEvalTab extends Component{
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
                <Text >待评价</Text>
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

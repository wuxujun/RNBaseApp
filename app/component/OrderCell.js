/**
 * Created by xujunwu on 10/11/16.
 */
import React, {Component, PropTypes} from "react";
import {StyleSheet,TouchableOpacity,Platform,View, Image, Text,Alert,AlertIOS} from "react-native";
import theme from '../config/theme';
import px2dp from '../util/px2dp';


export default class OrderCell extends Component{
    constructor(props){
        super(props);
    }

   	render(){

    }

}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        marginTop: px2dp(12),
        marginBottom: px2dp(3),
    }

}

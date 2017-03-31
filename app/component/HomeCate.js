/**
 * Created by xujunwu on 11/11/16.
 * 首页分类
 */
'use strict';
import React, {Component,PropTypes} from "react";
import {StyleSheet,TouchableOpacity,Platform,View, Image, Text,Alert,AlertIOS} from "react-native";

const  CateImages=[
    require('../images/ic_home_cate0.png'),
    require('../images/ic_home_cate1.png'),
    require('../images/ic_home_cate2.png'),
    require('../images/ic_home_cate3.png')
];

var CateData = ['待收货','投诉','全部订单','新品上线'];

export default class HomeCate extends Component {
    constructor(props){
        super(props);
    }
    onSwitchTabPress(tab){
        this.props.pushSwitchTab(tab);
    }
    render(){
        return(
            <View style={styles.box}>
            <TouchableOpacity onPress={this.onSwitchTabPress.bind(this,0)} style={styles.boxItem}>
            <Image source={CateImages[0]} style={styles.boxImg} />
            <Text style={styles.boxText}>{CateData[0]}</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={this.onSwitchTabPress.bind(this,1)} style={styles.boxItem}>
            <Image source={CateImages[1]} style={styles.boxImg} />
            <Text style={styles.boxText}>{CateData[1]}</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={this.onSwitchTabPress.bind(this,2)} style={styles.boxItem}>
            <Image source={CateImages[2]} style={styles.boxImg} />
            <Text style={styles.boxText}>{CateData[2]}</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={this.onSwitchTabPress.bind(this,3)} style={styles.boxItem}>
            <Image source={CateImages[3]} style={styles.boxImg} />
            <Text style={styles.boxText}>{CateData[3]}</Text>
            </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    box: {
        flexDirection: 'row',
        justifyContent: 'center',
        paddingTop: 10,
        paddingBottom : 10,
        paddingLeft : 5,
        paddingRight: 5,
        backgroundColor : '#eeeeee'
    },
    boxImg : {
        width : 70,
        height: 49,
        marginBottom : 10
    },
    boxItem: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 2
    },
    boxText: {
        color : '#333333',
        fontSize : 12
    }
});

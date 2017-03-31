/**
 * Created by xujunwu on 11/11/16.
 */
'use strict';
import React, {Component,PropTypes} from "react";
import {StyleSheet,TouchableOpacity,View, Image, Text} from "react-native";
import px2dp from '../util/px2dp';

export default class HomeNews extends Component {
  render(){
    return(
      <View style={styles.box}>
        <Image style={styles.boxImg} source={require('../images/ic_news_title.png')} resizeMode="stretch"/>
        <Text style={styles.boxText}>天下良仓系统更新,更多功能尽情期待!</Text>
      </View>
    );
  }


}

const styles = StyleSheet.create({
  box: {
      flexDirection: 'row',
      justifyContent: 'center',
      paddingTop: 8,
      paddingBottom : 8,
      backgroundColor : '#eeeeee'
  },
  boxImg : {
  },
  boxText: {
      color : '#333333',
      fontSize : px2dp(13),
      marginTop:px2dp(10),
      marginLeft:px2dp(10),
      justifyContent: 'center',
      alignItems: 'center'
  }
});

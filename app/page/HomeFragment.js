/**
 * Created by xujunwu on 9/25/16.
 * 首页
 */
'use strict';

import React, {Component} from 'react';
import {Text, View, StyleSheet,TouchableOpacity, Platform,RefreshControl,ScrollView, ToastAndroid,Image,Dimensions,PixelRatio,Alert,AlertIOS} from 'react-native';
import Swiper from 'react-native-swiper';
import HomeCate from '../component/HomeCate';
import HomeNews from '../component/HomeNews';
import ListViewForHome from '../component/ListViewForHome';
import theme from '../config/theme';
import px2dp from '../util/px2dp';

const  bannerImages=[
  require('../images/banner1.png'),
  require('../images/banner2.png')
];

export default class HomeFragment extends Component{
  static navigatorButtons = {
    leftButtons: [{
      icon: require('../images/ic_scan.png'),
      id: 'scan'
    }],
    rightButtons: [
      {
        icon: require('../images/ic_nav_notice.png'),
        id: 'notice'
      }
    ]
  };
  static navigatorStyle = {
    navBarBackgroundColor: '#ff5898',
    navBarTextColor: '#ffffff',
    navBarSubtitleTextColor: '#ff0000',
    navBarButtonColor: '#ffffff',
    statusBarTextColorScheme: 'light',
    tabBarBackgroundColor: '#4dbce9',
    tabBarButtonColor: '#ffffff',
    tabBarSelectedButtonColor: '#ffff00'
  };

  constructor(props){
        super(props);
        this.state = {
          refreshing:true,
          loadedData:false,
          hotData:[]
        };
        this.props.navigator.setOnNavigatorEvent(this.onNavigatorEvent.bind(this));
  }
  componentDidMount(){
    this._fetchData();
  }
  onNavigatorEvent(event) {
    if (event.id === 'scane') {
        Alert.alert('NavBar', 'Edit button pressed');
    }
    if (event.id === 'notice') {
        Alert.alert('NavBar', 'Add button pressed');
    }
  }
  //切换tab
  pushSwitchTab(tab){
    console.log(".....$$$$$",tab);
    if (tab==0||tab==2) {
        this.props.navigator.switchToTab({
          tabIndex:1
        });
    }
  }
  render(){
      return(
        <View style={styles.container}>
        <ScrollView refreshControl={<RefreshControl refreshing={this.state.refreshing}
        onRefresh={this._onRefresh.bind(this)}
        colors={['red','#ffd500','#0080ff','#99e600']}
        tintColor={theme.themeColor}
        title="Loading..."
        titleColor={theme.themeColor}
        />
      }>
      <Swiper height={px2dp(130)} autoplay={true} bounces={true}>
      <View style={styles.slide}>
      <Image style={styles.image} source={bannerImages[0]} resizeMode="stretch"/>
      </View>
      <View style={styles.slide}>
      <Image style={styles.image} source={bannerImages[1]} resizeMode="stretch"/>
      </View>
      </Swiper>
      <HomeCate pushSwitchTab={(tab)=>this.pushSwitchTab(tab)}/>
      <HomeNews/>
      <View style={styles.topTitle}>
          <Image style={styles.topImage} source={require('../images/ic_home_top_icon.png')} resizeMode="stretch"/>
          <Text style={styles.topName}>推荐产品</Text>
        </View>
      {this._renderContents()}
      </ScrollView>
      </View>
    );
  }
  _renderContents(){
    if (!this.state.refreshing||this.state.loadedData) {
      return (
        <View>
          <ListViewForHome contents={this.state.hotData}/>
        </View>
      );
    }
  }
    _onRefresh(){
      this.setState({refreshing:true});
      this._fetchData();
    }

    _fetchData(){
        var url="http://api.totuba.org/index.php?c=app&m=orders";
        fetch(url).then((response)=>response.json()).then((responseData)=>{
          let data=responseData.results;
          var datas=[];
          for (let i in data) {
            let info = {
              id: data[i].id,
              image: data[i].image,
              name: data[i].name,
              desc: data[i].desc,
              price: data[i].price
            }
            datas.push(info);
          }
          if(datas.length!==0){
            this.setState({
              hotData:datas,
              loadedData:true,
              refreshing:false
            });
          }
        }).done();
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: theme.pageBackgroundColor
    },
    slide:{

    },
    image:{
      height:px2dp(130),
      width:Dimensions.get('window').width
    },
    topTitle:{
      marginTop:px2dp(8),
      marginBottom:px2dp(8),
      flexDirection:'row',
      justifyContent: 'center'
    },
    topName:{
      marginTop:px2dp(2),
      marginLeft:px2dp(5),
      justifyContent: 'center'
    },
    topImage:{
      marginLeft:px2dp(10),
    }

});

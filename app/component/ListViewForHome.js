/**
 * Created by xujunwu on 10/11/16.
 */
'use strict';

import React, {Component, PropTypes} from 'react';
import ReactNative, {Text, View, StyleSheet, Platform, TouchableOpacity, TouchableNativeFeedback, ListView, Image, PixelRatio,Alert,AlertIOS} from 'react-native';
import px2dp from '../util/px2dp';
import Icon from 'react-native-vector-icons/MaterialIcons';
import theme from '../config/theme';
import MainPage from '../page/MainPage';
import TextButton from '../component/TextButton';

export default class ListViewForHome extends Component{
    static propTypes = {
        refreshing: PropTypes.func
    };

    constructor(props){
        super(props);
        console.log("Datas:",this.props.contents);
        const ds = new ListView.DataSource({
            rowHasChanged: (r1, r2) => r1 !== r2
        });
        this.state = {
            dataSource: ds.cloneWithRows(this.props.contents)
        };
    }

    _itemClickCallback(rowData){
        // MainPage.switchToWebViewPage(rowData);
    }

    _userNameClickCallback(itemInfo){
        // MainPage.switchToIndividualPage(userInfo);
        console.log(".....",itemInfo);
        Alert.alert('NavBar', 'Edit button pressed');
    }

    _renderItem(rowData, sectionID, rowID, highlightRow){
        return(
            <TouchableOpacity style={styles.items} onPress={this._userNameClickCallback.bind(this, rowData.id)}>
                <View style={styles.goodBar}>
                    <View style={{flex: 10}} >
                        <Image style={styles.avatar} source={{uri: rowData.image}}/>
                        <Text style={styles.nameText}>{rowData.name}</Text>
                        <Text style={styles.priceText}>¥{rowData.price}</Text>
                    </View>
                </View>
            </TouchableOpacity>
        );
    }

    render(){
        return(
            <ListView
                contentContainerStyle={styles.contentViewStyle}
                style={styles.listView}
                dataSource={this.state.dataSource}
                renderRow={this._renderItem.bind(this)}
                enableEmptySections={true}
            />
        )
    }
}

const styles = StyleSheet.create({
    contentViewStyle: {
        // 主轴方向
        flexDirection:'row',
        // 换行
        flexWrap:'wrap'
    },
    listView: {
        // marginTop: px2dp(10),
        flex:1
    },
    items: {
        backgroundColor: '#fff',
        // borderTopWidth: 1/PixelRatio.get(),
        // borderBottomWidth: 1/PixelRatio.get(),
        // borderBottomColor: '#c4c4c4',
        // borderTopColor: '#e4e4e4',
        // marginBottom: px2dp(7),
        alignItems:'center',
        justifyContent:'center',
        height: (theme.screenWidth-px2dp(60))/2+px2dp(60),
        width:theme.screenWidth/2.0
    },
    goodBar: {
        padding: px2dp(10),
        flexDirection: 'row',
        height: (theme.screenWidth-px2dp(60))/2+px2dp(60),
        width: theme.screenWidth/2
    },
    avatar: {
        width: (theme.screenWidth-px2dp(60))/2,
        height: (theme.screenWidth-px2dp(60))/2
        // borderRadius: 1
    },
    nameText: {
        color : '#333333',
        fontSize: px2dp(14)
    },
    priceText: {
        color : '#f37839',
        fontSize: px2dp(16),
        fontWeight: 'bold'
    },
    content: {
        color: '#000',
        padding: px2dp(10)
    },
    linkView: {
        flexDirection: 'row',
        height: px2dp(60),
        width: theme.screenWidth-px2dp(20),
        borderWidth: 1/PixelRatio.get(),
        borderColor: theme.grayColor,
        marginLeft: px2dp(10),
        marginRight: px2dp(10)
    },
    linkImage:{
        width: px2dp(59),
        height: px2dp(59),
        resizeMode: 'cover',
        backgroundColor: '#f4f4f4'
    },
    linkText: {
        fontSize: px2dp(16),
        color: '#000',
        fontWeight: 'bold'
    },
    banner: {
        width: theme.screenWidth,
        height: px2dp(120),
        resizeMode: 'cover',
        marginTop: px2dp(10),
    },
    bottom: {
        flexDirection: 'row',
        padding: px2dp(10),
        alignItems: 'center'
    },
    commentText: {
        marginRight: px2dp(25),
        marginLeft: px2dp(5)
    }
});

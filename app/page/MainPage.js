'use strict';

import React, {Component} from 'react';
import {Text, View, BackAndroid, ToastAndroid} from 'react-native';
import TabBar from '../component/TabBar';
import WebViewPage from './WebViewPage';

export default class MainScene extends Component{
    constructor(props){
        super(props);
        MainScene.switchToWebViewPage = MainScene.switchToWebViewPage.bind(this);
        // MainScene.switchToIndividualPage = MainScene.switchToIndividualPage.bind(this);
    }

    static switchToWebViewPage(rowData){
        this.props.navigator.push({
            component: WebViewPage,
            args: {rowData: rowData}
        });
    }

    // static switchToIndividualPage(userInfo){
    //     this.props.navigator.push({
    //         component: IndividualPage,
    //         args: {user: userInfo}
    //     });
    // }

    componentDidMount(){
        BackAndroid.addEventListener('hardwareBackPress', function () {
            BackAndroid.exitApp(0);
            return true;
        });
    }

    render(){
        return(
            <View style={{flex: 1, justifyContent: 'flex-end'}}>
                <TabBar navigator={this.props.navigator}/>
            </View>
        );
    }
}

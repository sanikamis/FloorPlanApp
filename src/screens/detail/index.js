import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { WebView } from 'react-native-webview';

const Detail = ({route}) => {
    const url = route.params.url
    return (        
        <WebView source={{uri: url}} />       
    )
}

export default Detail;
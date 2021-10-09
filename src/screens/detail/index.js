import React from 'react';
import { StyleSheet, Text, View,TouchableHighlight, Image, Linking } from 'react-native';
import { WebView } from 'react-native-webview';

const Detail = ({route}) => {
    const url = route.params.url
    return (   
        <View style={{flex:1}}>
            <WebView source={{uri: url}} /> 
            <TouchableHighlight style={{position:'absolute',right:10,bottom:10}} onPress={()=>{
                console.log('navigate2');
                const navUrl = Platform.select({
                ios: "maps:0,0?q=" + route.params.name,
                android: "geo:0,0?q=" + route.params.name
                });
                Linking.openURL(navUrl);
            }}>
            <Image style={{ height:50,width:50}} source={require('../../assets/images/mapsIcon.png')}  />
            </TouchableHighlight> 
              
             
        </View>   
    )
}

export default Detail;
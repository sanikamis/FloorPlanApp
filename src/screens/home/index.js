import React, { useEffect, useState } from 'react';
import { ActivityIndicator, FlatList, Text, View, Linking, StyleSheet, TouchableHighlight, Image, TextInput } from 'react-native';
import filter from 'lodash.filter'

import styles from './styles';

export default Home = ({navigation}) => {

    const [isLoading, setLoading] = useState(true);
    const [data, setData] = useState([]);

    const [query, setQuery] = useState('');
    const [fullData, setFullData] = useState([]);
 
    useEffect(() => {
      fetch('https://floorplans.azurewebsites.net/mall')
        .then(response => response.json())
        .then(response => {
          setData(response);
          setFullData(response);
        })        
        .catch(error => console.error(error))
        .finally(() => setLoading(false))
    }, []);

    const handleSearch = text => {
      setQuery(text);
      const formattedQuery = text.toLowerCase();
      const filteredData = filter(fullData, item => {
        return contains(item, formattedQuery);
      })
      setData(filteredData);      
    }

    const contains = ({ name, city, district }, query) => {
      if (name.toLowerCase().includes(query) || city.toLowerCase().includes(query) || district.toLowerCase().includes(query)) {
        return true;
      }
      return false;
    }

    function renderHeader(){
      return (
        <View
          style={styles.headerView}>
          <TextInput
            autoCapitalize='none'
            autoCorrect={false}
            autoFocus={true}
            clearButtonMode = "always"
            value={query}
            onChangeText={queryText => handleSearch(queryText)}
            placeholder='Ara'
            style={styles.searchBar}            
          />
        </View>
      )
    }
  
  return (
    
    <View style={styles.mainContainer}>      
      {isLoading ? <ActivityIndicator size="large" color="#5500dc"/> : (
        <FlatList
          ListHeaderComponent={renderHeader}
          data={data}
          keyExtractor={({ id }, index) => id.toString()}
          renderItem={({ item }) => ( 
            <TouchableHighlight underlayColor='rgba(73,182,77,1,0.9)' 
              onPress={()=> {navigation.setParams({name:item.name}), navigation.navigate('Detail',{url:item.floorPlan,name:item.name})} }>
              <View style={styles.categoriesItemContainer}>                 
                <Image style={styles.categoriesPhoto} resizeMode='contain' source={{ uri: item.photo }} /> 
                <Text style={styles.categoriesName}>{item.name}</Text>                              
                <Text style={styles.categoriesInfo}>{item.address}</Text> 
                <Text style={styles.categoriesInfo}>{item.district + "/" + item.city}</Text>
                <TouchableHighlight  onPress={()=>{
                    console.log('navigate2');
                    const url = Platform.select({
                      ios: "maps:0,0?q=" + item.name,
                      android: "geo:0,0?q=" + item.name
                    });
                    Linking.openURL(url);
                  }}>
                  <Image source={require('../../assets/images/mapsIcon.png')} style={styles.navigateIcon} />
                </TouchableHighlight>
              </View>
            </TouchableHighlight>                      
          )}
        /> 
      ) }
    </View>
  );    
  }

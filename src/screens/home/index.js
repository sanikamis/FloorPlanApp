import React, { useEffect, useState } from 'react';
import { ActivityIndicator, FlatList, Text, View, StyleSheet, TouchableHighlight, Image, TextInput } from 'react-native';
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
      console.log(text);
      const formattedQuery = text.toLowerCase();
      const filteredData = filter(fullData, item => {
        return contains(item, formattedQuery);
      })
      setData(filteredData);
      //console.log(fullData)
      
    }

    const contains = ({ name, city, district }, query) => {
      if (name.toLowerCase().includes(query) || city.toLowerCase().includes(query)  || city.toLowerCase().includes(query)) {
        return true;
      }
      return false;
    }

    function renderHeader(){
      return (
        <View
          style={{
            backgroundColor: '#fff',
            padding: 10,
            alignItems: 'center',
            justifyContent: 'center'
          }}>
          <TextInput
            autoCapitalize='none'
            autoCorrect={false}
            autoFocus={true}
            clearButtonMode = "always"
            value={query}
            onChangeText={queryText => handleSearch(queryText)}
            placeholder='Search'
            style={{
              borderRadius: 25,
              borderColor: '#333',
              backgroundColor: '#fff'              
            }}            
          />
        </View>
      )
    }
  
  return (
    
    <View style={{ flex: 1, padding: 24 }}>

      
      {isLoading ? <ActivityIndicator size="large" color="#5500dc"/> : (
        <FlatList
          ListHeaderComponent={renderHeader}
          data={data}
          keyExtractor={({ id }, index) => id.toString()}
          renderItem={({ item }) => ( 
            <TouchableHighlight underlayColor='rgba(73,182,77,1,0.9)' onPress={()=>navigation.navigate('Detail',{url:item.floorPlan})}>
              <View style={styles.categoriesItemContainer}>
                <Image style={styles.categoriesPhoto} resizeMode='contain' source={{ uri: item.photo }} />
                <Text style={styles.categoriesName}>{item.name}</Text>                
                {/* <Text style={styles.categoriesInfo}>{item.address}</Text> */}
                <Text style={styles.categoriesInfo}>{item.district + "/" + item.city}</Text>
              </View>
            </TouchableHighlight>                      
          )}
        /> 
      ) }
    </View>
  );    
  }
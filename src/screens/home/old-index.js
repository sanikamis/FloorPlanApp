import React, { useEffect, useState } from 'react';
import { ActivityIndicator, Button, FlatList, Text, View } from 'react-native';

export default HomeV1 = ({navigation}) => {
    const [isLoading, setLoading] = useState(true);
    const [data, setData] = useState([]);
 
    useEffect(() => {
      fetch('https://floorplans.azurewebsites.net/mall')
        .then((response) => response.json())
        .then((json) => setData(json))
        .catch((error) => console.error(error))
        .finally(() => setLoading(false));
    }, []);

  return (
    <View style={{ flex: 1, padding: 24 }}>
      {isLoading ? <ActivityIndicator/> : (
        <FlatList
          data={data}
          keyExtractor={({ id }, index) => id.toString()}
          renderItem={({ item }) => ( 
            <View style={{ flex: 1, padding: 4, borderBottomColor: 'blue',
            borderBottomWidth: 1 }}>
              <Text>{item.id} - {item.name}</Text>   
              <Text>{item.floorPlan}</Text>  
              <Button title="Kat Planı" onPress={()=>navigation.navigate('Detail',{url:item.floorPlan})} />    
            </View> 
                      
          )}
        /> 
      ) }
      
    </View>
  ); 
    
  };
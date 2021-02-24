import React, { useEffect, useState } from 'react';
import { ActivityIndicator, FlatList, Text, View, StyleSheet  } from 'react-native';
import { Card, ListItem, Button, Icon, Image, Input } from 'react-native-elements'
import { Colors } from 'react-native/Libraries/NewAppScreen';

export default HomeV2 = ({navigation}) => {
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
    <View>

        {isLoading ? <ActivityIndicator/> : 
        (                
          data.map((avm, i) => {
            return (<Card key={i} onPress={()=>navigation.navigate('Detail',{url:avm.floorPlan})}> 
              <View style={styles.cardContent}>  
                
                <Image
                    backgroundColor="#ccc"
                    style={{ width: 100, height: 50 }}
                    source={{ uri: avm.photo }}
                    resizeMode = 'contain'
                  />    
                <Text >{avm.name}</Text>
              </View></Card>
            );
          })  
        ) }
    </View>
  )    
  }

const styles = StyleSheet.create({
  card: {
      borderRadius:6,
      elevation: 3,
      backgroundColor: '#fff',
      shadowOffset:{width:2,height:2},
      shadowColor: '#333',
      shadowOpacity:0.3,
      shadowRadius:2,
      marginHorizontal:4,
      marginVertical:6,
  },
  cardContent:{
      marginHorizontal:18,
      marginVertical:10,
      
  }
})
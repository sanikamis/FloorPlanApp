import { StyleSheet } from 'react-native';
import { colors } from 'react-native-elements';
import { color } from 'react-native-reanimated';
import { Colors } from 'react-native/Libraries/NewAppScreen';

const styles = StyleSheet.create({
  mainContainer:{ 
    flex: 1, 
    padding: 24 , 
    backgroundColor:"#FA3E78"
  },
  categoriesItemContainer: {
    flex: 1,
    margin: 10,
    justifyContent: 'center',
    alignItems: 'center',
    //height: 215,
    borderColor: '#fff',
    backgroundColor: '#F3698C',
    borderWidth: 0.8,
    borderRadius: 20,
  },
  categoriesPhoto: {
    width: '100%',
    height: 155,
    borderRadius: 5,
    shadowColor: 'blue',
    shadowOffset: {
      width: 0,
      height: 3
    },
    shadowRadius: 5,
    shadowOpacity: 1.0,
    //backgroundColor: '#E8FFE2'
    //elevation: 3
  },
  categoriesName: {
    flex: 1,
    fontSize: 15,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#fff',
    marginTop: 8
  },
  categoriesInfo: {
    marginTop: 3,
    marginBottom: 5,
    color:'#fff'
  },
  headerView:{
    backgroundColor: '#fff',
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius:20,
  },
  searchBar:{
    borderColor: '#333',
    backgroundColor: '#fff',
    color:'#C03461',
    fontWeight:'bold',
    fontSize:20              
  },
  navigateHeader:{
    backgroundColor:'#C03461'
  }
  
});

export default styles;

import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,FlatList } from 'react-native';
import ItemInput from './Components/ItemInput';
import ShopListItem from './Components/ShopListItem';
import { useState } from 'react';

export default function App() {
  const [items, setItems] = useState([

  {
    id: Math.random().toString(),
    title: 'Pan',
    },
  {
    id: Math.random().toString(),
    title: 'Leche',
  },
  {
    id:Math.random().toString(),
    title: 'Jamón',
  },



  ]);




  return (
    <View style={styles.container}>
      <View>
      <ItemInput 
      onPress={(enteredText)=>{
        setItems (currentItems => [
          ...currentItems,
            {
              id: Math.random().toString(),
              title: enteredText,
           },
            ]);
          }}
          />
      </View>

      <View style={styles.listContainer}>
        <FlatList
          data={items}
          renderItem={
            ({item})=><ShopListItem title={item.title}/>
          }
          keyExtractor={item => item.id
          }
        />
      </View>
      <StatusBar style="auto" />
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 20,
    paddingVertical: 32,
    gap: 8,
  },
  listContainer: {
    flex: 1,
    backgroundColor: '#ddd',
  }
});

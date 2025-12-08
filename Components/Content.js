import { StyleSheet, View, FlatList, } from 'react-native';
import ItemInput from './ItemInput';
import ShopListItem from './ShopListItem';
import { useEffect, useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { useSQLiteContext } from 'expo-sqlite';

export default function Content() {
    const db = useSQLiteContext();
    const [items, setItems] = useState([]);

//     const [items,setItems] = useState([
//   {
//     id: Math.random().toString(),
//     title: 'Pan',
//   },
//  {
//     id: Math.random().toString(),
//     title: 'Leche',
//   },
//   {
//     id: Math.random().toString(),
//     title: 'Jamón',
//    },
//   ]);
async function getAllItems() {
    const allItems = await db.getAllAsync('SELECT * FROM ShopList');
    setItems(allItems);
}
async function addItem(enteredItemText){
    await db.runAsync(
        'INSERT INTO ShopList (title) VALUES (?)',
        [enteredItemText]
    );
    getAllItems();
}

useEffect(() => {
    getAllItems();
}, []
);




  return (
    <View style={styles.container}> 
      <View >
        <ItemInput
        onPress={(enteredItemText) => {addItem(enteredItemText)}}
        />
      </View>

      <View style={styles.listContainer}>
        <FlatList 
        data={items} renderItem={
        // ({item}) => (<Text>{item.title}</Text>)
        ({item}) => (<ShopListItem title={item.title}/>)
      }
      keyExtractor={item => item.id}
      />
      </View>
      <StatusBar styles="auto"/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingVertical: 20,
    paddingHorizontal: 32,
    gap: 8,
  },
  listContainer: {
    flex: 1,
    backgroundColor: '#aaa',
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 16,
  },
});
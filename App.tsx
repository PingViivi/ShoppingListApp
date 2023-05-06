import React, { useState } from 'react';
import type { PropsWithChildren } from 'react';
import { FlatList, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import AddItem, { Item } from './components/AddItem';
import ListItem from './components/ListItem';

function App(): JSX.Element {
  // setShoppingList is a function to update the ShoppingList state
  // ShoppingList is array of ListItems
  const [ShoppingList, setShoppingList] = useState<Item[]>([])
   
  // function to delete a listitem from the shopping list
  const handleDeleteItem = (title: string) => {
    setShoppingList(prevList => prevList.filter(item => item.title !== title))
  }
  
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Shopping List</Text>
      <AddItem 
        ShoppingList={ShoppingList} 
        setShoppingList={setShoppingList} 
      />
      <FlatList 
        style={styles.itemsWrapper}
        data={ShoppingList}
        keyExtractor={(item) => item.title }
        renderItem={({item}) => (
          <ListItem title={item.title} quantity={item.quantity} DeleteItem={() => handleDeleteItem(item.title)}/>
        )}
        ListEmptyComponent={() => <Text style={styles.noItems}>No items in the Shopping cart</Text>}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EDE9E8',
    alignItems: 'center',
    justifyContent: 'flex-start',
    height: '100%'
  },
  title: {
    color: '#000',
    fontSize: 24,
    fontWeight: 'bold',
    paddingVertical: 50,
    paddingBottom: 20,
  },
  itemsWrapper: {
    width: '100%',
    paddingHorizontal: 20,
    marginTop: 20,
  },
  noItems: {
    paddingTop: 20,
    color: '#C5B9B6',
    alignSelf: 'center'
  },
});

export default App;
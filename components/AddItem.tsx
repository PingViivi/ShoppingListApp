import React, { useState, SetStateAction } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Alert } from 'react-native';
import { Fontisto } from '@expo/vector-icons';

// The interface of the item
export interface Item {
    title: string;
    quantity: string;
}

// The props ShoppingList and setShoppingList are being passed to the component
interface Props {
    ShoppingList: Item[]; // current shopping list.
    setShoppingList: React.Dispatch<React.SetStateAction<Item[]>>; // The function to update the shopping list.
}

// Defining the AddItem component
const AddItem: React.FC<Props> = ({ShoppingList, setShoppingList}) => {
    // Setting up state for the item title and quantity
    const [title, setTitle] = useState('');
    const [quantity, setQuantity] = useState('');

    // Function to handle submission of new item
    const handleSubmit = () => {
        if(!title) {
            Alert.alert("No item", "Define the name first!"); // Show alert if no item name is defined
        } else {
            setShoppingList([...ShoppingList, {title, quantity: quantity || '1'}]); // Update the shopping list with new item
        }
        setTitle(''); // Clear item title
        setQuantity(''); // Clear item quantity
    };
  
    return (
        <View style={styles.Wrapper}>
            <View style={styles.textWrapper}>
                <Text style={styles.label}>Grossary</Text>
                <Text style={styles.label}>Quantity</Text>
            </View>
            <View style={styles.writeTaskWrapper}>
                <TextInput value={title} onChangeText={(text) => setTitle(text)} style={styles.input} placeholder={'Enter shopping item'} />
                <TextInput keyboardType='numeric' value={quantity} onChangeText={(q) => setQuantity(q)} style={styles.inputQuantity} placeholder={'0'} />
            </View>
            <TouchableOpacity style={styles.addWrapper} onPress={() => {handleSubmit();} }>
                <Text style={styles.addText}>
                    Add item
                </Text>
                <Fontisto name="shopping-basket" size={24} color="white" />
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    Wrapper: {
        paddingHorizontal: 20,
    },
    textWrapper: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingBottom: 12,
    },
    label: {
        color: '#9A8D89',
    },
    writeTaskWrapper: {
        paddingBottom: 20,
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    input: {
        paddingVertical: 15,
        paddingHorizontal: 20,
        backgroundColor: '#fff',
        borderRadius: 50,
        width: 260,
    },
    inputQuantity: {
        borderRadius: 50,
        backgroundColor: '#fff',
        marginLeft: 'auto',
        width: 60,
        paddingVertical: 15,
        paddingHorizontal: 20,
    },
    addWrapper: {
        backgroundColor: '#F96E46',
        borderRadius: 50,
        justifyContent: 'space-between',
        paddingVertical: 15,
        paddingHorizontal: 20,
        flexDirection: 'row',
        alignItems: 'center',
    },
    addText: {
        fontWeight: 'bold',
        color: '#fff',
    },
})
export default AddItem;
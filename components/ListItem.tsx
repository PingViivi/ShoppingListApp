import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import {Item} from './AddItem'

// Component takes items title, quantity and DeleteItem function as props
interface Props {
    title: string;
    quantity: string;
    DeleteItem: () => void;
}

// Component to render individual items in the shopping list
const ListItem: React.FC<Props> = ({title, quantity, DeleteItem}) => {
    return (
        <View style={styles.Item}>
            <View style={styles.Left}>
                <Text style={styles.quantity}>x {quantity}</Text>
                <Text style={styles.title}>{title}</Text>
            </View>
            <TouchableOpacity onPress={DeleteItem}>
                <Ionicons style={styles.delete} name="ios-trash-outline" size={24}/>
            </TouchableOpacity>
        </View>
    )
};
const styles = StyleSheet.create({
    Item: {
        padding: 20,
        backgroundColor: '#fff',
        borderRadius: 5,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%',
        marginBottom: 12,
    },
    Left: {
        alignItems: 'center',
        flexDirection: 'row',
    },
    title: {
        paddingLeft: 20,
    },
    quantity: {
        backgroundColor: '#EDE9E8',
        padding: 8,
        color: '#9A8D89',
    },
    delete: {
        opacity: 0.3,
    },
})
export default ListItem;
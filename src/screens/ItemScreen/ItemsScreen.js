import React, { useState } from 'react';
import { View, Text, FlatList, Alert, TouchableOpacity } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import {
  addItem,
  deleteItem,
  setError,
  clearError,
} from '../../redux/slices/itemsSlice';
import {
  selectAllItems,
  selectIsItemsEmpty,
  selectItemsError,
} from '../../redux/selectors/itemsSelectors';
import Button from '../../components/Button';
import AppHeader from '../../components/AppHeader';
import Input from '../../components/Input';
import { styles } from './styles';

const ItemsScreen = () => {
  const dispatch = useDispatch();
  const items = useSelector(selectAllItems);
  const isEmpty = useSelector(selectIsItemsEmpty);
  const error = useSelector(selectItemsError);

  const [itemName, setItemName] = useState('');
  const [isFormVisible, setIsFormVisible] = useState(false);

  // Validate input
  const validateInput = () => {
    const trimmedName = itemName.trim();

    if (!trimmedName) {
      dispatch(setError('Item name cannot be empty'));
      return false;
    }

    if (trimmedName.length < 2) {
      dispatch(setError('Item name must be at least 2 characters long'));
      return false;
    }

    if (trimmedName.length > 50) {
      dispatch(setError('Item name cannot exceed 50 characters'));
      return false;
    }

    return true;
  };

  // Handle adding item
  const handleAddItem = () => {
    if (validateInput()) {
      dispatch(addItem({ name: itemName.trim() }));
      setItemName('');
      setIsFormVisible(false);
      dispatch(clearError());
    }
  };

  // Handle deleting item
  const handleDeleteItem = (id, name) => {
    Alert.alert('Delete Item', `Are you sure you want to delete "${name}"?`, [
      {
        text: 'Cancel',
        onPress: () => {},
        style: 'cancel',
      },
      {
        text: 'Delete',
        onPress: () => {
          dispatch(deleteItem(id));
          dispatch(clearError());
        },
        style: 'destructive',
      },
    ]);
  };

  // Render item card
  const renderItemCard = ({ item }) => (
    <View style={styles.itemCard}>
      <View style={styles.itemContent}>
        <Text style={styles.itemId}>#{item.id.slice(-4)}</Text>
        <Text style={styles.itemName}>{item.name}</Text>
      </View>
      <TouchableOpacity
        style={styles.deleteButton}
        onPress={() => handleDeleteItem(item.id, item.name)}
      >
        <Text style={styles.deleteButtonText}>✕</Text>
      </TouchableOpacity>
    </View>
  );

  // Render empty state
  const renderEmptyState = () => (
    <View style={styles.emptyContainer}>
      <Text style={styles.emptyTitle}>No Items Yet</Text>
      <Text style={styles.emptyDescription}>
        Create your first item to get started!
      </Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <AppHeader title="Items Management" />

      {/* Error Message */}
      {error && (
        <View style={styles.errorContainer}>
          <Text style={styles.errorText}>{error}</Text>
        </View>
      )}

      {/* Items List */}
      <FlatList
        data={items}
        renderItem={renderItemCard}
        keyExtractor={item => item.id}
        ListEmptyComponent={renderEmptyState}
        contentContainerStyle={
          isEmpty ? styles.emptyListContent : styles.listContent
        }
        scrollEnabled={!isEmpty}
      />

      {/* Add Item Form */}
      {isFormVisible ? (
        <View style={styles.formContainer}>
          <Text style={styles.formTitle}>Add New Item</Text>
          <Input
            placeholder="Enter item name..."
            value={itemName}
            onChangeText={setItemName}
            maxLength={50}
          />
          <Text style={styles.characterCount}>{itemName.length}/50</Text>
          <View style={styles.formActions}>
            <Button
              title="Cancel"
              onPress={() => {
                setItemName('');
                setIsFormVisible(false);
                dispatch(clearError());
              }}
              variant="secondary"
            />
            <Button
              title="Add Item"
              onPress={handleAddItem}
              variant="primary"
            />
          </View>
        </View>
      ) : (
        <View style={styles.buttonContainer}>
          <Button
            title="+ Add New Item"
            onPress={() => setIsFormVisible(true)}
            variant="primary"
          />
        </View>
      )}
    </View>
  );
};

export default ItemsScreen;

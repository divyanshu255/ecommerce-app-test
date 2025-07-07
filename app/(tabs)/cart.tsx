
import { View, Text, StyleSheet, Image, Pressable, ScrollView } from 'react-native';
import { useState } from 'react';

const initialCart = [
  {
    id: '1',
    name: 'Jacket Jeans',
    price: 37.9,
    size: 'L',
    color: '#3B3B98',
    image: require('../assets/01.png'),
  },
  {
    id: '2',
    name: 'Acrylic Sweater',
    price: 35.9,
    size: 'M',
    color: '#B33771',
    image: require('../assets/02.png'),
  },
  {
    id: '3',
    name: 'Acrylic Sweater',
    price: 45.9,
    size: 'M',
    color: '#000',
    image: require('../assets/03.png'),
  },
];

export default function CartScreen() {
  const [cartItems, setCartItems] = useState(initialCart);

  const handleRemove = (id: string) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  const total = cartItems.reduce((sum, item) => sum + item.price, 0);

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>My Cart</Text>

      {cartItems.map((item) => (
        <View key={item.id} style={styles.cartItem}>
          <Image source={item.image} style={styles.image} />
          <View style={styles.details}>
            <Text style={styles.name}>{item.name}</Text>
            <Text style={styles.price}>${item.price}</Text>
            <View style={styles.meta}>
              <Text style={styles.tag}>Size: {item.size}</Text>
              <View style={[styles.colorDot, { backgroundColor: item.color }]} />
            </View>
          </View>
          <Pressable onPress={() => handleRemove(item.id)}>
            <Text style={styles.delete}>🗑️</Text>
          </Pressable>
        </View>
      ))}

      <View style={styles.summary}>
        <View style={styles.row}>
          <Text style={styles.label}>Total:</Text>
          <Text style={styles.value}>${total.toFixed(1)}</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.label}>Shipping:</Text>
          <Text style={styles.value}>$0.0</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.labelBold}>Grand Total:</Text>
          <Text style={styles.valueBold}>${total.toFixed(1)}</Text>
        </View>
      </View>

      <Pressable style={styles.button}>
        <Text style={styles.buttonText}>Checkout</Text>
      </Pressable>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff', padding: 16 },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 16 },
  cartItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
    backgroundColor: '#f8f8f8',
    borderRadius: 12,
    padding: 10,
  },
  image: { width: 60, height: 80, borderRadius: 8, marginRight: 12 },
  details: { flex: 1 },
  name: { fontSize: 16, fontWeight: 'bold' },
  price: { color: '#777' },
  meta: { flexDirection: 'row', alignItems: 'center', marginTop: 4 },
  tag: {
    backgroundColor: '#eee',
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: 6,
    fontSize: 12,
  },
  colorDot: {
    width: 14,
    height: 14,
    borderRadius: 7,
    marginLeft: 10,
    borderWidth: 1,
    borderColor: '#ccc',
  },
  delete: { fontSize: 18, paddingHorizontal: 8 },
  summary: { marginTop: 24 },
  row: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: 8 },
  label: { fontSize: 16 },
  value: { fontSize: 16, color: '#333' },
  labelBold: { fontSize: 18, fontWeight: 'bold' },
  valueBold: { fontSize: 18, fontWeight: 'bold' },
  button: {
    backgroundColor: '#f66',
    padding: 14,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 20,
  },
  buttonText: { color: '#fff', fontWeight: 'bold', fontSize: 16 },
});

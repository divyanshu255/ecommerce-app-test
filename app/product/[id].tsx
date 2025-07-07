import { useLocalSearchParams } from 'expo-router';
import { View, Text, StyleSheet, Image, Pressable, ScrollView } from 'react-native';
import { useState } from 'react';


const productData = {
  1:{id: '1',
  name: 'Winter Coat',
  price: 65.9,
  image: require('../assets/01.png'),},
  2:{
    id: '2',
    name: 'Acrylic Sweater',
    price: 45.9,
    image: require('../assets/02.png'),
  },
  3:{
    id: '3',
    name: 'Leather Jacket',
    price: 85.9,
    image: require('../assets/03.png'),
  },
  4:{
    id: '4',
    name: 'Cotton Sweater',
    price: 35.9,
    image: require('../assets/04.png'),
    },
   // Replace with your image
};
const sizes = ['S', 'M', 'L', 'XL'];
const colors = ['#3B3B98', '#B33771', '#F97F51', '#58B19F', '#000', '#666'];
export default function product() {
     const { id } = useLocalSearchParams();
     const productId = Array.isArray(id) ? id[0] : id;
     const product = productData[productId]; 
  const [selectedSize, setSelectedSize] = useState('M');
  const [selectedColor, setSelectedColor] = useState(colors[0]);

  const handleAddToCart = () => {
    // Logic to add item to cart (use context or state management)
    alert(`Added ${product.name} (Size: ${selectedSize}) to cart`);
  };

  return (
    <ScrollView style={styles.container}>
      <Image source={product.image} style={styles.image} />

      <View style={styles.content}>
        <Text style={styles.name}>{product.name}</Text>
        <Text style={styles.price}>${product.price}</Text>

        <Text style={styles.label}>Size</Text>
        <View style={styles.sizeContainer}>
          {sizes.map((size) => (
            <Pressable
              key={size}
              onPress={() => setSelectedSize(size)}
              style={[
                styles.sizeBox,
                selectedSize === size && styles.sizeBoxSelected,
              ]}
            >
              <Text
                style={[
                  styles.sizeText,
                  selectedSize === size && styles.sizeTextSelected,
                ]}
              >
                {size}
              </Text>
            </Pressable>
          ))}
        </View>

        <Text style={styles.label}>Colors</Text>
        <View style={styles.colorContainer}>
          {colors.map((color) => (
            <Pressable
              key={color}
              onPress={() => setSelectedColor(color)}
              style={[
                styles.colorCircle,
                { backgroundColor: color },
                selectedColor === color && styles.colorSelected,
              ]}
            />
          ))}
        </View>

        <Pressable style={styles.button} onPress={handleAddToCart}>
          <Text style={styles.buttonText}>Add to Cart</Text>
        </Pressable>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff' },
  image: { width: '100%', height:550 },
  content: { padding: 16 },
  name: { fontSize: 24, fontWeight: 'bold', marginBottom: 4 },
  price: { fontSize: 18, color: '#555', marginBottom: 12 },
  label: { fontSize: 16, fontWeight: '500', marginVertical: 8 },
  sizeContainer: { flexDirection: 'row', gap: 10 },
  sizeBox: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 10,
    width: 40,
    alignItems: 'center',
  },
  sizeBoxSelected: {
    borderColor: '#f66',
    backgroundColor: '#fee',
  },
  sizeText: { color: '#000' },
  sizeTextSelected: { fontWeight: 'bold', color: '#f66' },
  colorContainer: { flexDirection: 'row', gap: 10, marginTop: 6 },
  colorCircle: {
    width: 30,
    height: 30,
    borderRadius: 15,
    borderWidth: 2,
    borderColor: '#fff',
  },
  colorSelected: {
    borderColor: '#000',
    borderWidth: 2,
  },
  button: {
    marginTop: 24,
    backgroundColor: '#f66',
    padding: 14,
    borderRadius: 10,
    alignItems: 'center',
  },
  buttonText: { color: 'white', fontSize: 16, fontWeight: '600' },
});
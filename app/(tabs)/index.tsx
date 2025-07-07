import { View, Text, TextInput, StyleSheet, FlatList, Image, Pressable ,SafeAreaView} from 'react-native';
import { useRouter } from 'expo-router';

const data = [
  { id: '1', name: 'Jacket Jeans', price: 45.9, image: require('../assets/01.png') },
  { id: '2', name: 'Acrylic Sweater', price: 37.9, image: require('../assets/02.png') },
  { id: '2', name: 'Acrylic Sweater', price: 37.9, image: require('../assets/03.png') },
  { id: '2', name: 'Acrylic Sweater', price: 37.9, image: require('../assets/04.png') },
  { id: '1', name: 'Jacket Jeans', price: 45.9, image: require('../assets/01.png') },
  { id: '2', name: 'Acrylic Sweater', price: 37.9, image: require('../assets/02.png') },
  { id: '2', name: 'Acrylic Sweater', price: 37.9, image: require('../assets/03.png') },
  { id: '2', name: 'Acrylic Sweater', price: 37.9, image: require('../assets/04.png') },
  { id: '1', name: 'Jacket Jeans', price: 45.9, image: require('../assets/01.png') },
  { id: '2', name: 'Acrylic Sweater', price: 37.9, image: require('../assets/02.png') },
  { id: '2', name: 'Acrylic Sweater', price: 37.9, image: require('../assets/03.png') },
  { id: '2', name: 'Acrylic Sweater', price: 37.9, image: require('../assets/04.png') },
  { id: '1', name: 'Jacket Jeans', price: 45.9, image: require('../assets/01.png') },
  { id: '2', name: 'Acrylic Sweater', price: 37.9, image: require('../assets/02.png') },
  { id: '2', name: 'Acrylic Sweater', price: 37.9, image: require('../assets/03.png') },
  { id: '2', name: 'Acrylic Sweater', price: 37.9, image: require('../assets/04.png') },
  { id: '1', name: 'Jacket Jeans', price: 45.9, image: require('../assets/01.png') },
  { id: '2', name: 'Acrylic Sweater', price: 37.9, image: require('../assets/02.png') },
  { id: '2', name: 'Acrylic Sweater', price: 37.9, image: require('../assets/03.png') },
  { id: '2', name: 'Acrylic Sweater', price: 37.9, image: require('../assets/04.png') },

  
];



export default function index() {
  const router=useRouter();

  return (
    
    <View style={styles.container}>
      <Text style={styles.title}>Match Your Style</Text>
      <TextInput style={styles.search} placeholder="Search" />
      <View style={styles.tabButtons}>
        <Text style={styles.activeTab}>Trending Now</Text>
        <Text style={styles.inactiveTab}>All</Text>
        <Text style={styles.inactiveTab}>New</Text>
      </View>
      <FlatList
  data={data}
  numColumns={2}
  showsVerticalScrollIndicator={false}
  keyExtractor={(item, index) => `${item.id}-${index}`} 
  renderItem={({ item }) => (
    <Pressable onPress={() => router.push(`/product/${item.id}`)} style={styles.card}>
      <Image source={item.image} style={styles.image} />
      <Text style={styles.productName}>{item.name}</Text>
      <Text style={styles.price}>${item.price}</Text>
    </Pressable>
  )}
/>

    </View>
    
  )
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, backgroundColor: '#fff' ,margin:16},
  title: { fontSize: 28, fontWeight: 'bold', marginBottom: 10 },
  search: { backgroundColor: '#f2f2f2', padding: 10, borderRadius: 10, marginBottom: 10 },
  tabButtons: { flexDirection: 'row', marginBottom: 16 },
  activeTab: { backgroundColor: '#f66', padding: 10, borderRadius: 20, marginRight: 9, color: 'white' ,width:140},
  inactiveTab: { backgroundColor: '#ccc', padding: 9, borderRadius: 20, marginRight: 6 ,width:55},
  card: { flex: 1, margin: 5, backgroundColor: '#f9f9f9', borderRadius: 10, padding: 10 ,width:10,},
  image: { width: '100%',  borderRadius: 10 ,
    height: 250

    
  },
  productName: { fontWeight: '600', marginTop: 8 },
  price: { color: '#888' },
})
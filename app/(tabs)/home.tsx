import { FlatList, ListRenderItemInfo, StyleSheet, Text, View } from "react-native";
import { getAllProducts } from "../../services/product";
import { ProductItem } from "../../components/product-item";
import { Product } from "../../types/product";

export default function Home(){
  const products = getAllProducts();

  function renderItem({item}: ListRenderItemInfo<Product>){
    return <ProductItem data={item}/>;
  }

  return (
    <View style={styles.container}>
      <FlatList 
        data={products} 
        renderItem={renderItem}
        keyExtractor={item => item.id.toString()}
        style={styles.list}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  list: {
    flex: 1,
    width: '100%',
    padding: 20
  }
})
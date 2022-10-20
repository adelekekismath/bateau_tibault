import { useContext } from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import ProductsCategories, { Category, Product } from '../components/ProductsCategories';


import { Text, View } from '../components/Themed';
import { CategoriesContext } from '../contexts/ProductsCategoriesContexts';
import { RootTabScreenProps } from '../types';

export default function ProductsCategoriesScreen({ navigation }: { navigation: any}) {

  const {categories}= useContext(CategoriesContext);

  const onPressCategory= (products:Product[])=>{
    navigation.navigate('products', {products});
  }
  
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Categories</Text>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <ScrollView contentContainerStyle={{flex:1}}>
        {categories.map((item: Category, index)=>{
            return <ProductsCategories onPress={()=>onPressCategory(item.products)} data={item} key={index}/>
        })}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 30
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});

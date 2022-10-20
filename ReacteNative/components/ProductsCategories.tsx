import { Text, View } from './Themed';
import { FontAwesome } from '@expo/vector-icons';
import { Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

export type Product ={
    id: number;
    name: string;
    price: number;
    unit: string;
    availability: boolean;
    sale: boolean;
    discount: number;
    comments: string;
    owner: string;
}
export type Category = {
    name: string;
    products: Product[];

};

export type CategoryProps ={
  data: Category;
  onPress:(products:Product[])=>void;
}

export default function ProductsCategories( category: CategoryProps ) {

    return (
      <View style={{flexDirection:'row', margin:10}}>
        <FontAwesome size={30} name="minus"/>
        <View style={{flexDirection:'column', marginLeft:10}}>
            <Button
            onPress={() => category.onPress(category.data.products) }
              title={category.data.name}
              color="blue"
            />
        </View>  
      </View>
    )
}




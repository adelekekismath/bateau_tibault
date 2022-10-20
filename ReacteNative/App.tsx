import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import useCachedResources from './hooks/useCachedResources';
import useColorScheme from './hooks/useColorScheme';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Navigation from './navigation';
import ProductsCategories from './components/ProductsCategories';
import ProductsCategoriesScreen from './screens/ProductsCategoriesSreen';

const Stack = createNativeStackNavigator();

export default function App() {
  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      
      <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen name="ProductsCategories" component={ProductsCategoriesScreen} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
    );
  }
}

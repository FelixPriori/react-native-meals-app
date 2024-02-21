import { StatusBar } from 'expo-status-bar';
import { StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { createDrawerNavigator } from '@react-navigation/drawer'
import CategoriesScreen from './screens/CategoriesScreen';
import MealsOverviewScreen from './screens/MealsOverviewScreen';
import MealDetailScreen from './screens/MealDetailScreen';
import FavouritesScreen from './screens/FavouritesScreen';

const Stack = createNativeStackNavigator()
const Drawer = createDrawerNavigator()

function DrawerNavigator() {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: '#24180f'
        },
        headerTintColor: '#fff',
        sceneContainerStyle: {
          backgroundColor: '#24180f'
        },
        drawerContentStyle: {
          backgroundColor: '#24180f'
        },
        drawerInactiveTintColor: '#e2b497',
        drawerActiveTintColor: '#24180f',
        drawerActiveBackgroundColor: '#e2b497',
      }}
    >
      <Drawer.Screen
        component={CategoriesScreen}
        name="Categories"
        options={{
          drawerIcon: ({ color, size }) => (
            <Ionicons size={size} color={color} name="list" />
          )
        }}
      />
      <Drawer.Screen
        component={FavouritesScreen}
        name="Favourites"
        options={{
          drawerIcon: ({ color, size }) => (
            <Ionicons size={size} color={color} name="star" />
          )
        }}
      />
    </Drawer.Navigator>
  )
}

export default function App() {
  return (
    <>
      <StatusBar style="light" />
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerStyle: {
              backgroundColor: '#24180f'
            },
            headerTintColor: '#fff',
            contentStyle: {
              backgroundColor: '#24180f'
            }
          }}>
          <Stack.Screen
            name="Drawer"
            component={DrawerNavigator}
            options={{
              headerShown: false
            }}
          />
          <Stack.Screen
            name="MealsOverview"
            component={MealsOverviewScreen}
          />
          <Stack.Screen
            name="MealDetail"
            component={MealDetailScreen}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

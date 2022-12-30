import { StatusBar } from 'expo-status-bar';
import {NavigationContainer} from "@react-navigation/native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {createDrawerNavigator} from "@react-navigation/drawer";
import {Ionicons} from '@expo/vector-icons'

import CategoriesScreen from "./screens/CategoriesScreen";
import MealsOverviewScreen from "./screens/MealsOverviewScreen";
import MealDetailScreen from "./screens/MealDetailScreen";
import FavoriteScreen from "./screens/FavoriteScreen";
// import FavoriteContextProvider from "./store/context/favorite-context";
import {Provider} from "react-redux";
import {store} from "./store/redux/store"

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();
function DrawerNavigator(){
    return (
        <Drawer.Navigator
            screenOptions={{
                headerStyle: {backgroundColor: '#351401'},
                headerTintColor: 'white',
                sceneContainerStyle: {backgroundColor: '#3f2f25'},
                drawerContentStyle: {backgroundColor: '#351401'},
                drawerInactiveTintColor: 'white',
                drawerActiveTintColor: '#351401',
                drawerActiveBackgroundColor: '#e4baa1'
            }}
        >
            <Drawer.Screen
                name='Categories'
                component={CategoriesScreen}
                options={{
                    title: "All Categories",
                    drawerIcon: ({color, size}) => <Ionicons name="list" color={color} size={size}/>
                }}
            />
            <Drawer.Screen
                name='Favorites'
                component={FavoriteScreen}
                options={{
                    drawerIcon: ({color, size}) => <Ionicons name="star" color={color} size={size}/>
                }}
            />
        </Drawer.Navigator>
    );
}
export default function App() {
  return (
      <>
          <StatusBar style='light'/>
          {/*<FavoriteContextProvider>*/}
          <Provider store={store}>
              <NavigationContainer>
                  <Stack.Navigator
                      screenOptions={{
                          headerStyle: {backgroundColor: '#351401'},
                          headerTintColor: 'white',
                          contentStyle: {backgroundColor: '#3f2f25'}
                      }}
                  >
                      <Stack.Screen
                          name="Drawer"
                          component={DrawerNavigator}
                          options={{
                              headerShown: false //nasconde l'intestazione dello stack navigator
                          }}
                      />
                      <Stack.Screen
                          name="MealsOverview"
                          component={MealsOverviewScreen}
                      />

                      <Stack.Screen
                          name="MealDetail"
                          component={MealDetailScreen}
                          options={{
                              title: "About the Meal",
                          }}
                      />
                  </Stack.Navigator>
              </NavigationContainer>
          </Provider>
          {/*</FavoriteContextProvider>*/}
      </>

  );
}
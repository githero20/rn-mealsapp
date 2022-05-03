import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { Ionicons } from "@expo/vector-icons";

import CategoriesScreen from "./screens/CategoriesScreen";
import MealsOverviewScreen from "./screens/MealsOverviewScreen";
import MealsDetailScreen from "./screens/MealDetailsScreen";
import FavouritesScreen from "./screens/FavouritesScreen";

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <DrawerNavigator
      screenOptions={{
        headerStyle: { backgroundColor: "#351401" },
        headerTintColor: "white",
        sceneContainerStyle: { backgroundColor: "#3f2f25" },
        drawerContentStyle: { backgroundColor: "#351401" },
        drawerInactiveTintColor: "white", //basically font colour, active
        drawerActiveTintColor: "#351401",
        drawerActiveBackgroundColor: "#e4baa1",
      }}
    >
      <Drawer.Screen
        name="Categories"
        component={CategoriesScreen}
        options={{
          title: "All Categories",
          drawerIcon: ({ color, size }) => <Ionicons name="list" color={color} size={size} />,
        }}
      />
      <Drawer.Screen
        name="Favourites"
        component={FavouritesScreen}
        options={{
          // title: "All Categories", will use the name as title
          drawerIcon: ({ color, size }) => <Ionicons name="star" color={color} size={size} />,
        }}
      />
    </DrawerNavigator>
  );
};

export default function App() {
  return (
    <>
      <StatusBar style="light" />
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerStyle: { backgroundColor: "#351401" },
            headerTintColor: "white",
            contentStyle: { backgroundColor: "#3f2f25" },
          }}
        >
          {/* we're replacing the stack navigator with the drawer own above, and we nest other screens inside the drawer */}
          <Stack.Screen
            name="AllDrawers"
            component={DrawerNavigator}
            options={{
              headerShown: false,
              //with this, we're hiding the stack header but will rely on the drawer header already set above
            }}
          />
          {/* <Stack.Screen
            name="MealsCategories"
            component={CategoriesScreen}
            options={{
              title: "All Categories",
            }}
          /> */}
          <Stack.Screen name="MealsOverview" component={MealsOverviewScreen} />
          {/* npm install react-native-reanimated@1 --save --save-exact */}
          <Stack.Screen name="MealDetails" component={MealsDetailScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({
  container: {},
});

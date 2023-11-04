import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Welcome from "../screens/Welcome";
import Tabs from "../components/Tabs";
import Details from "../screens/Details";
import OrderPlaced from "../screens/OrderPlaced";

const Stack = createNativeStackNavigator();

const AppNavigator = () => {
  return (
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{ headerShown: false }}
          initialRouteName="Welcome"
        >
          <Stack.Screen name="Welcome" component={Welcome} />
          <Stack.Screen name="Tabs" component={Tabs} />
          <Stack.Screen name="Details" component={Details} />
          <Stack.Screen name="Order" component={OrderPlaced} />
        </Stack.Navigator>
      </NavigationContainer>
  );
};

export default AppNavigator;

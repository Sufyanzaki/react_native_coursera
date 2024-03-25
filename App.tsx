import { NavigationContainer } from '@react-navigation/native';
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import HomeScreen from "./features/Home/routes/HomeScreen";
import NewsLetter from "./features/Newletter/routes/NewsLetter";
import {RootStackParamList} from "./types/globalTypes";
import { QueryClient, QueryClientProvider } from 'react-query';

export default function App() {
    const queryClient = new QueryClient();
    const Stack = createNativeStackNavigator<RootStackParamList>();
  return (
      <NavigationContainer>
          <QueryClientProvider client={queryClient}>
              <Stack.Navigator initialRouteName="Welcome" screenOptions={{headerTitleAlign: 'center'}}>
                  <Stack.Screen name="Welcome" component={HomeScreen} />
                  <Stack.Screen name="Newsletter" component={NewsLetter} />
              </Stack.Navigator>
          </QueryClientProvider>
      </NavigationContainer>
  );
}

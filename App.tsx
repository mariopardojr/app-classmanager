import { StatusBar } from 'expo-status-bar';
import { Provider as PaperProvider } from 'react-native-paper';
import {
  useFonts,
  Jost_400Regular,
  Jost_600SemiBold,
  Jost_700Bold,
} from '@expo-google-fonts/jost';
import AppLoading from 'expo-app-loading';
import AppRoutes from './src/routes/routes';

const App = () => {
  const [fontsLoaded] = useFonts({
    Jost_400Regular,
    Jost_600SemiBold,
    Jost_700Bold,
  });

  if (!fontsLoaded) return <AppLoading />;

  return (
    <PaperProvider>
      <StatusBar style="light" />
      <AppRoutes />
    </PaperProvider>
  );
};

export default App;

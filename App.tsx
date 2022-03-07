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
import { StudentProvider } from './src/context/StudentContext/student';

const App = () => {
  const [fontsLoaded] = useFonts({
    Jost_400Regular,
    Jost_600SemiBold,
    Jost_700Bold,
  });

  if (!fontsLoaded) return <AppLoading />;

  return (
    <PaperProvider>
      <StudentProvider>
        <StatusBar style="light" />
        <AppRoutes />
      </StudentProvider>
    </PaperProvider>
  );
};

export default App;

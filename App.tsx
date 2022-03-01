import { LinearGradient } from 'expo-linear-gradient';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import {
  useFonts,
  Jost_400Regular,
  Jost_600SemiBold,
  Jost_700Bold,
} from '@expo-google-fonts/jost';
import AppLoading from 'expo-app-loading';
import AppRoutes from './src/routes/routes'

const App = () => {
  const [fontsLoaded] = useFonts({
    Jost_400Regular,
    Jost_600SemiBold,
    Jost_700Bold,
  });

  if (!fontsLoaded) return <AppLoading />;

  return (
    <View style={style.container}>
      <StatusBar style="light" />
      <AppRoutes />
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  }
});

export default App;

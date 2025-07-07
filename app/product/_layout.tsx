
import { HeaderTitle } from '@react-navigation/elements';
import { Slot } from 'expo-router';

export default function RootLayout() {
  return <Slot 
  screenOptions={{
    HeaderTitle:"My Cart"
  }}
  />;
}

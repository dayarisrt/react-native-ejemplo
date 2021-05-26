import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import LoaderApp from './components/commons/loader';
import ModalApp from './modal';


export default function App() {
  const [suma, setSuma ] = useState(0);
  const [loading, setLoading ] = useState(false);

  const getSuma = () => {
    setLoading(true);
    setSuma(suma+1);
    setLoading(false);
  }

  return (
    <View style={styles.container}>
      <Text>Hola! {suma}</Text>
      <StatusBar style="auto" />

      <Button
        onPress={getSuma}
        title="Contar"
        color="#841584"
        accessibilityLabel="Learn more about this purple button"
      />

      <ModalApp />
      
        <LoaderApp /> 
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

import { Image, SafeAreaView, StyleSheet, Text, View } from "react-native";
import { Button } from "../components/button";
import { router } from "expo-router";

export default function Index(){
  const handleStart = () => {
    router.replace('/home')
  };

  return (
    <SafeAreaView style={styles.container}>
      <Image style={styles.logo} source={require('../assets/logo.png')} resizeMode="cover" />
      <Text style={styles.h1}>Loja do Fulano</Text>
      <Text style={styles.h2}>Aqui você encontra tudo que quiser.</Text>
      <Button title="Começar" onPress={handleStart} />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  logo: {
    width: 200,
    height: 200,
    marginBottom: 20
  },
  h1: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 10
  },
  h2: {
    fontSize: 16,
    marginBottom: 10
  }
})
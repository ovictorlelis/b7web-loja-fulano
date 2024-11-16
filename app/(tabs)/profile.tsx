import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import FontAwesome from '@expo/vector-icons/FontAwesome';

export default function Home(){
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image 
          style={styles.image} 
          source={require('../../assets/perfil.png')} 
          resizeMode="cover" 
        />
        <Text style={styles.name}>Victor Lelis</Text>
      </View>
      <View style={styles.menu}>
        <Pressable style={styles.button}>
          <FontAwesome 
                style={styles.icon}
                size={24} 
                name="credit-card" 
                color="#000000" /> 
            <View>
              <Text style={styles.buttonText}>Pagamentos</Text>
              <Text style={styles.buttonSubtext}>
                Meus salgos e cartões
              </Text>
            </View>
       </Pressable>
       <Pressable style={styles.button}>
          <FontAwesome 
                style={styles.icon}
                size={24} 
                name="heart" 
                color="#000000" /> 
            <View>
              <Text style={styles.buttonText}>Favoritos</Text>
              <Text style={styles.buttonSubtext}>
                Meus produtos favoritos
              </Text>
            </View>
       </Pressable>
       <Pressable style={styles.button}>
          <FontAwesome 
                style={styles.icon}
                size={24} 
                name="ticket" 
                color="#000000" /> 
            <View>
              <Text style={styles.buttonText}>Cupons</Text>
              <Text style={styles.buttonSubtext}>
                Meus cupons de desconto
              </Text>
            </View>
       </Pressable>
       <Pressable style={styles.button}>
          <FontAwesome 
                style={styles.icon}
                size={24} 
                name="location-arrow" 
                color="#000000" /> 
            <View>
              <Text style={styles.buttonText}>Endereços</Text>
              <Text style={styles.buttonSubtext}>
                Meus endereços de entrega
              </Text>
            </View>
       </Pressable>
       <Pressable style={styles.button}>
          <FontAwesome 
                style={styles.icon}
                size={24} 
                name="bars" 
                color="#000000" /> 
            <View>
              <Text style={styles.buttonText}>Dados da conta</Text>
              <Text style={styles.buttonSubtext}>
                Minhas informações da conta
              </Text>
            </View>
       </Pressable>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    marginBottom: 20,
  },
  image: {
    width: 75,
    height: 75,
    borderRadius: 100,
  },
  name: {
    fontSize: 21,
    marginBottom: 5
  },
  menu: {
    flex: 1,
  },
  icon: {
    width: 30
  },
  button: {
    flexDirection: 'row',
    gap: 10,
    alignItems: 'center',
    borderBottomWidth: 1,
    paddingVertical: 20,
    borderBlockColor: '#DDD',
  },
  buttonText: {
    fontSize: 16,
    color: '#000000',
  },
  buttonSubtext: {
    fontSize: 12,
    color: '#333',
  }
})
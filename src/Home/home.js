import React, { useContext } from 'react';
import styles from '../styles/styleHome';
import {Alert,Text, StyleSheet, View, Image, TextInput, TouchableOpacity} from 'react-native';
import AppRoutes from '../Pages/app_routes';
import { useNavigation } from '@react-navigation/native';
import { AntDesign } from '@expo/vector-icons'; 

export default function Home() {
  const navigation = useNavigation();

  return (
    <View style={styles.body}>

      

      <Image
      source={require('../assets/HomeLibraryLogo.png')}
      style={styles.logo}
      />

      <TouchableOpacity style={styles.botao} onPress={() => navigation.navigate('Meus_Livros')}>
        <Text style={styles.botaoText}>Meus Livros</Text>
        <AntDesign name="book" style={styles.ant_dois} />
      </TouchableOpacity>

      <TouchableOpacity style={styles.botao_dois} onPress={() => navigation.navigate('Adicionar_Livros')}>
        <Text style={styles.botaoText}>Adicionar Livros</Text>
        <AntDesign name="book" style={styles.ant_dois} />
      </TouchableOpacity>

      <TouchableOpacity style={styles.botao_tres} onPress={() => navigation.navigate('Favoritos')}>
        <Text style={styles.botaoText}>Favoritos</Text>
        <AntDesign name="book" style={styles.ant_dois} />
      </TouchableOpacity>

      <TouchableOpacity style={styles.botao_quatro} onPress={() => navigation.navigate('H_Compras')}>
        <Text style={styles.botaoText}>Histórico de Compras</Text>
        <AntDesign name="book" style={styles.ant_dois} />
      </TouchableOpacity>
    </View>
  );
}
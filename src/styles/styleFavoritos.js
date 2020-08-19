import {StyleSheet} from 'react-native';
import Constants from 'expo-constants';

export default StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 24,
        paddingTop: Constants.statusBarHeight + 20,
    },

    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },

    headerText:{
        fontSize:15,
        color: '#737380',
    },

    headerTextBold:{
        fontWeight:'bold'
    },
    title:{
        fontSize:30,
        marginBottom: 16,
        marginTop:48,
        color: '#13131a',
        fontWeight: 'bold'
    },

    description:{
        fontSize:16,
        lineHeight:24,
        color: '#737380',
        paddingTop: 10
    },

    Lista:{
        marginTop:32,
    },

    cartaolista:{
        padding:24,
        borderRadius:8,
        backgroundColor:'#FFF',
        marginBottom:16,
    },

    title:{
        fontSize:30,
        marginLeft: 30,
        color: '#13131a',
        fontWeight: 'bold',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },

    logo:{
        width: 100,
        height: 100,
        borderRadius: 100,
        flexDirection: 'row',
        justifyContent: 'space-between',
      },

    conteudo:{
        marginTop: 8,
        fontSize:15,
        marginBottom: 24,
        color: '#737380',
    },

    botao_ml:{
        flexDirection: 'row',
        justifyContent:'space-between',
        alignItems:'center',
    },

    texto_botao:{
        color:'#ffd700',
        fontSize:15,
        fontWeight:'bold',
    },

    deletar_botao:{
        color:'#ff0000',
        fontSize:15,
        fontWeight:'bold',
    },

    ant_dois: {
        color: '#800080',
        flexDirection: 'row',
        justifyContent: 'space-between',
        fontSize:40,
        right: 15
      },
    
      titulos: {
        width:300,
        height:100,
        alignSelf: "center",
        marginTop:5,
        borderRadius:50,
        alignItems: 'center',
        backgroundColor: '#FFF',
        flexDirection: 'row',
        justifyContent: 'space-between',
      }
    
});
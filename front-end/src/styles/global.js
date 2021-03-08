import { StyleSheet } from 'react-native';

export const globalStyles = StyleSheet.create({

    containerCompleto: {
        flex : 1,
        backgroundColor: "#ffffff"
    },
    logoView: {
        textAlign: "center",
        justifyContent: 'center',
        alignContent: 'center',
    },
    campoDados: {
        alignSelf:"center",
        width:"90%",
        margin:12
    },
    campoBotoes: {
        alignSelf:"center",
        width:"60%",
        margin:25
    },
    inputs : {
        marginBottom: '1%',
        marginTop:20
    },
    botao: {
        alignSelf:"center",
        borderWidth: 1,
        marginBottom: 15,
        borderRadius: 5,
        
      },

}); 

export const inputTheme = {
    roundness: 7,
    colors: {
        primary: '#00a19b', //azul pscina loco
        background: '#fff', //branco
    },
};
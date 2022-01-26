import React, { useState } from "react";
import { 
    Text, 
    SafeAreaView, 
    TouchableOpacity,
    StyleSheet
} from 'react-native';

const App = () => {
    const [numero, setNumero] = useState(0);

    function handleNumero() {
        const novoNumero = Math.floor(Math.random() * 100);

        setNumero(novoNumero);
    }

    return(
        <SafeAreaView  style={style.container}>
            <Text style={style.numero}>{numero}</Text>
            <TouchableOpacity onPress={handleNumero} style={style.botao}>
                <Text>Gerar Número</Text>
            </TouchableOpacity>
        </SafeAreaView>
    );
}

const style = StyleSheet.create({
    container: {
        backgroundColor: '#FF0000',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    numero: {
        fontSize: 38,
        color: '#FFFFFFFF',
        fontWeight: 'bold'
    },
    botao: {
        backgroundColor: '#FFFFFFFF',
        width: '80%',
        paddingHorizontal: 10,
        paddingVertical: 15,
        borderRadius: 5,
        alignContent: 'center',
        alignItems: 'center',
        marginTop: 10
    },
});

export default App;
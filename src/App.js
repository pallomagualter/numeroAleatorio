import React from "react";
import { 
    Text, 
    SafeAreaView, 
    TouchableOpacity,
    StyleSheet
} from 'react-native';

const App = () => {
    return(
        <SafeAreaView  style={style.container}>
            <Text>0</Text>
            <TouchableOpacity>
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
    }
});

export default App;
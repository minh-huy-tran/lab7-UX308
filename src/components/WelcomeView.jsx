import { Text, View } from 'react-native';
import InputBar from "./InputBar"

export default function({scrollToBottom, sendMessage, setInputBarText, inputBarText}){
    return(
        <View style={{flex: 1, justifyContent: 'center', paddingHorizontal: 16}}>
        
            <Text style={{textAlign: 'center', fontWeight: 'bold', fontSize: 22, marginBottom: 24}}>Good Bubble Tea Chat Bot 🧋</Text>

            <InputBar 
                onSendPressed={sendMessage} 
                onSizeChange={() => scrollToBottom(false)}
                onChangeText={setInputBarText}
                text={inputBarText}
            />

            <Text style={{textAlign: 'center', color: 'gray', marginTop: 24, marginBottom: 8}}>Try asking:</Text>
            <Text style={{textAlign: 'center', marginBottom: 6}}>What drinks do you have?</Text>
            <Text style={{textAlign: 'center', marginBottom: 6}}>What toppings are available?</Text>
            <Text style={{textAlign: 'center', marginBottom: 6}}>How much does a large cost?</Text>
            <Text style={{textAlign: 'center', marginBottom: 6}}>Can I customize my order?</Text>

        </View>
    )
}

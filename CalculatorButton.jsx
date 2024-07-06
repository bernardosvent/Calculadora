import { StyleSheet } from 'react-native';
import { Button } from "react-native-paper"

export default function CalculatorButton({ title = '?', buttonColor = '', funcaoDoClick }) {
    return (
        <Button
            style={styles.button}
            buttonColor={buttonColor}
            mode='outlined'
            onPress={() => funcaoDoClick(title)}
        >
            {title}
        </Button>
    )
}

const styles = StyleSheet.create({
    button: {
        margin: 2,
        flexGrow: 1
    }
})
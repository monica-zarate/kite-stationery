import { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { Text, Image, Checkbox } from '@rneui/themed';

export default function ProductListItem ({}) {
    const [checked, setState] = useState(false);
    const toggleCheckbox = () => setState(checked);

    return (
        <View style={styles.container}>
            <Image
                source={{}}
            />
               <CheckBox
                    checked={checked}
                    checkedIcon="heart"
                    uncheckedIcon="heart-o"
                    checkedColor="red"
                    onPress={toggleCheckbox}
                />
            <View>
                <Text style={styles.artText}>Luctus Leather Cover Notebook</Text>
                <Text>$29.99</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        width: '100%',
        marginBottom: 20,
        marginHorizontal: 15,
    },
})
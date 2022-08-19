import {View, Button} from 'react'

render() {
    const { navigate } = this.props.navigation
    const name = 'Rick'
    return(
    
    <View>
        <Button
        onPress = {() => navigate('Materia')}
        title = "Materia"
        />
    </View>
);
}
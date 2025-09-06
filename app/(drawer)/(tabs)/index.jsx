import { router } from 'expo-router';
import { Button, StyleSheet, Text, View } from 'react-native';


export default function HomeScreen() {
  return (
    <View style={{flex:1 , justifyContent:'center', alignItems:'center'}}>
      <Text>Hello sir</Text>
      <Button 
      title='Go to Contact Page' 
      onPress={()=>router.push('/screen/contact')}
      />
    </View>
  );
}

const styles = StyleSheet.create({
 
});

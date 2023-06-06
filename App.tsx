
import { View,StyleSheet } from 'react-native';
import ClassComponets from './class-componet';
import FunctionComponets from './function-componet';

export default function App() {
  return (
    <View style=
    {styles.text}>
     <ClassComponets/>
     <FunctionComponets/>

    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'black',
    
  },
  text:{
    justifyContent:'center',
    alignItems:'center',
    height:500,
    width:400,
  
    
    
  },
 
});

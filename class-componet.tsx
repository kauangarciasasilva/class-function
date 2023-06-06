import React from "react";
import { View ,Text, Button} from "react-native";

interface Props{

}
interface State{
    contador:number;
}
 
export default class  ClassComponets extends React.Component<Props,State> {
    constructor (props){
        super(props);
        this.state ={contador:0}
    }
    private incremente (){
        const calculo = this.state.contador + 1
        this.setState({contador :calculo})

   }
    
    
    render() { 
        return (  
            <View>
                <Text>ClassComponets</Text>
            <Text>{this.state.contador}</Text>
            <Button title="click" onPress={()=>{this.incremente()}}/>
        </View>
        );
    }
}


 
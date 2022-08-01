import { View, StyleSheet, TouchableOpacity , Text } from "react-native";
import { useState } from "react";

const cores = ['#0004','#fff','#000']
export default function (props){
    const BN = props.boxN
    const [colorNow,setColorNow] = useState(0)
    return(
          <TouchableOpacity             
            onPress={()=>props.hashF(BN)}
           ><View style={{
                backgroundColor: cores[colorNow],
                width: 80,    
                height: 80,
                margin: 10,
                borderRadius: 15,
           }}>
            <Text>{props.boxColors}</Text>
            
            </View></TouchableOpacity>
    )
}
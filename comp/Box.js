import { View, TouchableOpacity , Text } from "react-native";
import { useState } from "react";

const cores = ['#0004','#fff','#000']
export default function ({boxN:BN , hashF, boxColor}){
    const [colorNow,setColorNow] = useState(0)
    return(
          <TouchableOpacity             
            onPress={()=>hashF(BN)}
           ><View style={{
                backgroundColor: cores[boxColor],
                width: 80,    
                height: 80,
                margin: 10,
                borderRadius: 15,
           }}>            
            </View></TouchableOpacity>
    )
}
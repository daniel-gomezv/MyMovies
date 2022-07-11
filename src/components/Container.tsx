import React,{FC,useContext,useState,useEffect} from 'react';
import { StyleSheet, View,Appearance,AppState } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import ThemeContext from '../Context/ThemeContext';

interface Props {
    navigation?:any;
    children:any;
    style?:any;
  }



const Container: React.FC<Props> = ({
    navigation,
    children,
    style = { backgroundColor: '#FFF' , flex: 1, alignItems: 'center', justifyContent: 'center',}
}) =>{

    const defaultContext = useContext(ThemeContext);

    const [objectTheme, setobjectTheme] = useState(defaultContext)

    


    return(
    
                <View style={{ ...style , ...objectTheme.background}} >
                    <View style={{ width: wp("90%") }}>
                        {children}
                    </View>
                </View>
         
    )
}


export default Container;


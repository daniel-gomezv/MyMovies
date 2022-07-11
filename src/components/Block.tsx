import React,{FC,useContext,useState,useEffect} from 'react';
import ThemeContext from '../Context/ThemeContext';
import { StyleSheet, View} from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

interface Props {
    children:any;
    style?:any;
    aling?:string; 
    mt?:number;
    mb?:number;
  }

  interface PropsStyles{
        alignItems: string,
        marginTop:number,
        marginBottom:number
  }

const Block: React.FC<Props> = ({
    children,
    style = {},
    aling='stretch',
    mt = hp('1.1%'),
    mb = hp('1.1%')
}) =>{

    
     const PropsStyle:PropsStyles = {
        alignItems: aling,
        marginTop:mt,
        marginBottom:mb,
    };


    return(
        <View style={{...style, ...PropsStyle }}>
         {children}
        </View>
    )
}


export default Block;


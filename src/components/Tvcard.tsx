import React,{FC,useContext} from 'react';
import { View, Text,StyleSheet, Image ,TextInput,TouchableOpacity,FlatList,SafeAreaView} from 'react-native';
import ThemeContext from '../Context/ThemeContext';
import MovieHomeContext from '../Context/MovieHomeContext';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

    interface Props {
        filter:string,
        navigation:any,
    }

   

    const Tvcard: React.FC<Props> = ({
        filter='',
        navigation,
    }) =>{
 
    
    const theme = useContext(ThemeContext);
    const MovieHome = useContext(MovieHomeContext);

    

    return(
        <SafeAreaView style={styles.container}>
            <FlatList
            data={MovieHome.getTvFilter(filter)}
            horizontal={true}
            showsVerticalScrollIndicator={false}
            showsHorizontalScrollIndicator={false}
            renderItem={({ item }) => {
                try {
                    
                    return (
                        <View>
                            <Image source={{ uri: item.poster_path}}   style={{width: 150, height: 200,  resizeMode: 'contain'}} />
                        </View>
                    )
                } catch (error) {
                    
                }}}
            keyExtractor={(item) => item.id}
            />
      </SafeAreaView>
    )
}

export default Tvcard;


const styles = StyleSheet.create({
  
});

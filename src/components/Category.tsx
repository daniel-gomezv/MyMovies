import React,{FC,useContext} from 'react';
import { View, Text,StyleSheet, Image ,TextInput,TouchableOpacity,FlatList,SafeAreaView} from 'react-native';
import ThemeContext from '../Context/ThemeContext';
import MovieHomeContext from '../Context/MovieHomeContext';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';


interface Props {
    filter?: string;
    navigation?: any;

}



const Category: React.FC<Props> = ({
    filter = "",
    navigation
}) =>{
 
    
    const theme = useContext(ThemeContext);
    const MovieHome = useContext(MovieHomeContext);

    const getCategoryMovies = (idCategory:number) =>{
        navigation.navigate('CategoryMovies', { idCategory : idCategory });
    }

    return(
        <SafeAreaView>
            <View style={styles.container}>
            { MovieHome.getCategory(filter).map((item,index)=>{
                return (
                    <View key={item.id}>
                        <TouchableOpacity
                            style={[theme.btnSmall,styles.btn]}
                            onPress={() => {
                                getCategoryMovies(item.id);
                            }}
                        >
                            <Text style={theme.small} >{item.name}</Text>
                        </TouchableOpacity>
                    </View> 
                ) 
            })}
            </View>
      </SafeAreaView>
    )
}

export default Category;


const styles = StyleSheet.create({
    container: {flexDirection:'row', flex: 1, flexWrap: 'wrap'},
    btn: {marginRight:wp('1%')}
});

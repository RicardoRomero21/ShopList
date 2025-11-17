import { StyleSheet,Text, View } from "react-native";
export default function ShopListItem(props){
    return(
        <View style={styles.container}>
            <Text style={styles.text}>
{props.title}
            </Text>
        </View>
    );
}
const styles= StyleSheet.create({
container:{
 backgroundColor:'green',
 borderRadius:5,
 paddingHorizontal:6,
 paddingVertical:4,
 marginVertical:1,
},
text:{
    fontSize:16,
    color: 'white',
}
});
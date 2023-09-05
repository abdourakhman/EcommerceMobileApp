import { SIZES } from "../../helper/constants";

const { StyleSheet } = require("react-native");

const styles = StyleSheet.create({
    loadingContainer:{
        flex:1,
        alignItems:'center',
        justifyContent:"center",
        alignContent:"center"
    },
    container:{
        alignItems:"center",
        paddingTop:SIZES.xxlarge,
        paddingLeft:SIZES.small/2
    },
    separator:{
        height:16
    }
})

export default styles;
import { COLORS, SIZES } from "../helper/constants";

const { StyleSheet } = require("react-native");


const styles = StyleSheet.create({
    appBarWrapper:{
        marginHorizontal:22,
        marginTop:SIZES.small
    },
    appBar:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:"center",
    },
    location:{
        fontSize:SIZES.medium,
        color:COLORS.gray,
        fontWeight:"500"
    },
    cartCount:{
        position:"absolute",
        bottom:16,
        width:16,
        height:16,
        borderRadius:16/2,
        backgroundColor:"green",
        alignItems:"center",
        zIndex:999
    },
    cartNumber:{
        fontSize:12,
        color:COLORS.lightwhite,
        fontWeight:"600"
    }
})

export default styles;
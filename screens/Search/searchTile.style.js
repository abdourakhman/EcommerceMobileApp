import { COLORS, SHADOWS, SIZES } from "../../helper/constants";

const { StyleSheet } = require("react-native");

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:"space-between",
        alignItems:"center",
        flexDirection:'row',
        marginBottom:SIZES.small,
        borderRadius:SIZES.medium,
        backgroundColor:"#FFF",
        ...SHADOWS.medium,
        shadowColor:COLORS.lightwhite
    },
    image:{
        width:70,
        color:COLORS.secondary,
        borderRadius:SIZES.medium,
        alignItems:"center",
        alignContent:'center',
    },
    productImg:{
        width:"100%",
        height:65,
        borderRadius:SIZES.small,
        resizeMode:'cover'
    },
    textContainer:{
        flex:1,
        marginHorizontal:SIZES.medium
    },
    productTitle:{
        fontSize:SIZES.medium,
        fontWeight:"bold",
        color:COLORS.primary

    },
    productSupplier:{
        fontSize:SIZES.small+2,
        color:COLORS.gray,
        marginTop:3
    }
})
 
export default styles;
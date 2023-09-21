import { COLORS, SIZES } from "../helper/constants";

const { StyleSheet } = require("react-native");

const styles = StyleSheet.create({
    homeImg:{
        width:SIZES.width,
        marginHorizontal:-20,
        height:SIZES.height/2.4,
        resizeMode:"cover",
        marginBottom:SIZES.xlarge,
    },
    title:{
        fontWeight:'bold',
        fontSize:SIZES.xlarge,
        alignItems:"center",
        color:COLORS.primary,
        marginBottom:SIZES.xxlarge  
    },
    wrapper:{
        marginBottom:20
    },
    label:{
        textAlign:"right",
        fontSize:SIZES.small,
        marginBottom:5,
        marginEnd:5
    },
    inputWrapper: (borderColor)=>({
        borderColor:borderColor,
        backgroundColor:COLORS.lightwhite,
        elevation:1,
        borderWidth:1,
        height:50,
        borderRadius:12,
        flexDirection:"row",
        paddingHorizontal:15,
        alignItems:"center"
    }),
    icon:{
        marginRight:10
    },
    errorMsg:{
        color:"red",
        fontWeight:"700",
        marginTop:5,
        marginLeft:5,
        fontSize:SIZES.xsmall
    },
    registration:{
        fontWeight:"700",
        marginTop:20,
        textAlign:"center"
    }
   
})

export default styles;
import { COLORS, SIZES } from "../helper/constants";

const { StyleSheet } = require("react-native");

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:COLORS.lightwhite
    },
    cover:{
        height:290,
        width:"100%",
        resizeMode:'cover'
    },
    profileContainer:{
        flex:1,
        alignItems:'center'
    },
    profile:{
        height:155,
        width:155,
        borderRadius:99,
        borderColor:COLORS.primary,
        resizeMode:"cover",
        marginTop:-90,
        borderWidth:2
    },
    name:{
        fontWeight:"bold",
        color:COLORS.primary,
        marginVertical:5
    },
    loginBtn:{
        backgroundColor:COLORS.secondary,
        padding:2,
        borderWidth:0.4,
        borderColor:COLORS.primary,
        borderRadius:SIZES.xlarge 
    },
    menuText:{
        marginTop:5,
        fontWeight:"600",
        color:COLORS.gray,
        marginHorizontal:20,
        fontSize:16,
        lineHeight:26
    },
    menuWrapper:{
        marginTop:SIZES.xlarge,
        width:SIZES.width-SIZES.large,
        backgroundColor:COLORS.lightwhite,
        borderRadius:12
    },
    menuItem:(borderBottomWidth) =>({
        borderBottomWidth:borderBottomWidth,
        flexDirection:"row",
        borderColor:COLORS.gray,
        paddingLeft:15,
        paddingTop:10,
        paddingBottom:10
    }),

})
export default styles;
import { COLORS, SIZES } from "../../helper/constants";

const { StyleSheet } = require("react-native");

const styles = StyleSheet.create({
    cartItem:{
        display:"flex",
        flexDirection:"row",
        marginHorizontal:-15,
        paddingTop:10,
        marginBottom:15,
        backgroundColor:COLORS.lightwhite,
        width:SIZES.width,
        borderRadius:SIZES.small,
    },
    orderInfo:{
        display:"flex",
        flexDirection:"row",
        justifyContent:"space-between",  
        marginBottom:5
    },
    imgContainer:{
        width:100,
        borderRadius:SIZES.small,
        overflow:"hidden",
        marginLeft:10,
        marginBottom:10,
    },
    image:{
        elevation:5,
        width:100,
        height:100,
        borderRadius:20,
        aspectRatio:1,
        resizeMode:"cover"
    },
    cartItemDetails:{
        flex:1,
        marginHorizontal:15
    },
   cartTitle:{
    display:"flex",
    flexDirection:"row",
    justifyContent:"space-between"
   },
   subtotal:{
    color:COLORS.gray,
    fontSize:14
},
   title:{
    color:COLORS.primary,
    fontSize:18,
    fontWeight:"800"
   },
   cartBody:{
    flex:1,
    display:"flex",
    flexDirection:"row",
    justifyContent:"space-between",
    marginTop:5   
   },
   btn:{
    backgroundColor:COLORS.primary,   
    borderRadius:16,
    paddingHorizontal:15,
    paddingVertical:3,
    height:27,
    marginTop:15
   },
   btnTxt:{
    fontSize:14,
    color:"#fff",
    textAlign:"center",
   }
})

export default styles;
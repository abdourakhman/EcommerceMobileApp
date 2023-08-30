import { COLORS, SIZES } from "../helper/constants";

const { StyleSheet } = require("react-native");


const styles = StyleSheet.create({
   searchContainer:{
    flexDirection:"row",
    justifyContent:"center",
    alignItems:"center",
    marginHorizontal:SIZES.small,
    backgroundColor:COLORS.secondary,
    borderRadius:SIZES.medium,
    marginVertical:SIZES.medium,
    height:50
   },
   searchIcon:{
    marginHorizontal:10,
    color:COLORS.gray
   },
   searchWrapper:{
    flex:1,
    backgroundColor:COLORS.secondary,
    marginRight:SIZES.small,
    borderRadius:SIZES.small
   },
   searchInput:{
    width:"100%",
    height:"100%",
    paddingHorizontal:SIZES.small,
   },
   searchButton:{
    width:50,
    height:"100%",
    borderRadius:SIZES.medium,
    justifyContent:"center",
    alignItems:'center',
    backgroundColor:COLORS.primary

   }
})

export default styles;
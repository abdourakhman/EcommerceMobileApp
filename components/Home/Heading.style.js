import { SIZES } from "../../helper/constants";

const { StyleSheet } = require("react-native");

const  styles = StyleSheet.create({
    container:{
        marginTop:SIZES.medium,
        marginHorizontal:12,
    },
    header:{
        flexDirection:'row',
        justifyContent:'space-between'
    },
    headerTitle:{
        fontWeight:"bold",
        fontSize:SIZES.xlarge-2
    }
})

export default styles;
const { StyleSheet } = require("react-native");
const { SIZES, COLORS } = require("../helper/constants");

const styles = StyleSheet.create({
    headerBar:{
        display:"flex",
        flexDirection:'row',
        marginBottom:25
    },
    headerText:{
        fontSize:SIZES.xlarge,
        color:"black",
        fontWeight:'bold',
        marginLeft:5
    },
    orderInfo:{
        display:"flex",
        flexDirection:"row",
        justifyContent:"space-between",  
        marginTop:5  
    },
    orderTitle:{
        fontSize:SIZES.large,
        fontWeight:"700",
        color:"#000",
        marginBottom:10
    },
    subtotal:{
        color:COLORS.gray,
        fontSize:16
    },
    total:{
        fontSize:20,
        fontWeight:"bold",
        color:"#000"

    }   
})

export default styles;
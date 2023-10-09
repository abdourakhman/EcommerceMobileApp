const { StyleSheet } = require("react-native");
const { SIZES, COLORS } = require("../../helper/constants");

const styles = StyleSheet.create({
    container:{
        display:"flex",
        flexDirection:"row",
        width:SIZES.width-22,
        marginEnd:22,
        borderRadius:SIZES.medium,
        backgroundColor:COLORS.secondary
    },
    imageContainer:{
        width:120,
        marginLeft:SIZES.small/2,
        marginTop:SIZES.small/2,
        borderRadius:SIZES.small,
        overflow:"hidden",
    },
    image:{
        aspectRatio:1,
        resizeMode:"cover"
    },
    details:{
        padding:SIZES.small,
    },
    title:{
        fontWeight:"bold",
        fontSize:SIZES.large,
        marginBottom:2
    },
    supplier:{
        fontSize:16,
        color:COLORS.gray,
    },
    price:{
        fontSize:16,
        fontWeight:"bold"
    },
    addBtn:{
        position:"absolute",
        bottom:SIZES.xsmall,
        right:SIZES.xsmall
    }
})

export default styles
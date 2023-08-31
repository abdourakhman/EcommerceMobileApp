const { StyleSheet } = require("react-native");
const { SIZES, COLORS } = require("../../helper/constants");

const styles = StyleSheet.create({
    container:{
        width:182,
        height:250,
        marginEnd:22,
        borderRadius:SIZES.medium,
        backgroundColor:COLORS.secondary
    },
    imageContainer:{
        flex:1,
        width:170,
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
        fontSize:SIZES.small,
        color:COLORS.gray,
    },
    price:{
        fontSize:SIZES.small,
        fontWeight:"bold"
    },
    addBtn:{
        position:"absolute",
        bottom:SIZES.xsmall,
        right:SIZES.xsmall
    }
})

export default styles
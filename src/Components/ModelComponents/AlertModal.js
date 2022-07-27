import { Prop } from "ionicons/dist/types/stencil-public-runtime";
import React from "react";
import {
    View, 
    Text, 
    TouchableOpacity,
    TouchableWithoutFeedback,
    StyleSheet} from 'react-native';
import colors from "../../Colors/Color";
import {
    RFPercentage as rfp,
    RFValue as rfv
  } from "react-native-responsive-fontsize";
  import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp
  } from 'react-native-responsive-screen';
  import  Icon  from "react-native-vector-icons/Entypo";
  import Ionicons from "react-native-vector-icons/Ionicons";



const AlertModal=(props)=>{
    return(
        <TouchableWithoutFeedback onPress={props.onOutsidePress}>
        <View style={styles.modalConatiner}>
            <View style={styles.dataContainer}>
                {props.error?          
                <View  style={styles.iconContainer}>
                    <Icon name="cross" size={rfv(70)} color="red"/>
                </View>            
                :
               
                 <View  style={[styles.iconContainer, {borderColor:"green"}]}>
                 <Ionicons name="checkmark-outline" style={{paddingHorizontal:5}} size={rfv(70)} color="green"/>
             </View>}
             {props.error?
          <Text style={styles.title}>{props.error}</Text>:
          <Text style={styles.title}>{props.success}</Text>}

            <TouchableOpacity onPress={props.onPress} style={styles.modalButton}>
                <Text style={styles.modalButtonText}>OK</Text>

            </TouchableOpacity>
            </View>


              </View>
        </TouchableWithoutFeedback>
    )
}

const styles=StyleSheet.create({
    modalConatiner:{
        width:'100%', 
        height: '100%', 
        backgroundColor: "transparent", 
        justifyContent:'center',
        alignItems:'center'
    },
    dataContainer:{
        width:'95%', 
        backgroundColor: colors.secondary, 
        padding:15,
        justifyContent:'center',
        alignItems:'center',
        borderRadius:5

    },
    title:{
        width:"100%",
        fontSize:rfv(16),
        color:'#5a1616', 
        fontWeight:'600',
        backgroundColor:'#fdc9c9',
        padding:10,
        textAlign:'center',
        borderRadius:5
    },
    modalButton:{
        backgroundColor:'#0070FF',
        width:"50%",
        alignItems:'center',
        justifyContent:'center',
        marginTop:30,
        height: hp(6),
        borderRadius:5,
        borderWidth:1,
        borderColor:'white'
    },
    modalButtonText:{
        color:"white",
        fontSize:rfv(16),
        fontWeight:'800'
    },
    iconContainer:{
        backgroundColor:'transparent',
        borderRadius:1000,
        alignSelf:'center',
        alignItems:'center',
        borderWidth:3,
        borderColor:'red',
        justifyContent:'center',
        marginVertical:20,
      // padding:10
    }

})


export default AlertModal;
import React, { Component } from 'react';
import { Platform, View, Text, TouchableOpacity, ScrollView, Animated, AsyncStorage, ActivityIndicator, Image } from 'react-native';
import { connect } from 'react-redux';
var _ = require('lodash');
 import { updateActiveForm } from '../../../actions';
import { bindActionCreators } from "redux"
import Icon from 'react-native-vector-icons/FontAwesome'
import { withNavigationFocus } from 'react-navigation'

import { labelStyle, inputStyle, inputErrorStyle, formGroup }  from "../../common/InputStyle"

//import Autocomplete from 'react-native-autocomplete-input';
import { RNSelectionMenu } from 'react-native-selection-menu'
import { Formik } from 'formik'
import * as Yup from 'yup'
import { Calendar } from 'react-native-calendars';
import { Input } from 'react-native-elements';
import { TEXT1, TEXT2, TEXT3, TEXT4, TEXT5, TEXT6, TEXT7, TEXT8, TEXT9, TEXT10 } from '../../common/Color'
  //import { DatePicker, List, Provider } from '@ant-design/react-native';
  //import enUS from '@ant-design/react-native/lib/locale-provider/en_US';
import moment from 'moment'
var FormData = require('form-data');
//import ImagePicker from 'react-native-image-picker'
import client from '../../../feathers'
const queryLimit = 10;
import LinearGradient from 'react-native-linear-gradient'
import SectionList from './SectionList'
import FlatList from './FlatList';

class Card extends Component{
  constructor(props){
    super(props)

    this.state = {
      loading:true,
      numberOfItemsLoaded: 0,
      refreshing: false,
      total: 0,
      formType: "CARD",
      status: 'PENDING'
    };
    this.map = new Map();
  }
  static navigationOptions = {
    title: 'eForm Log',
    headerStyle: {
      elevation: 0,
      backgroundColor:'#F6F7FF'
    },
    headerTintColor: TEXT5
  }

    switchFormType = (formType) => {
        this.setState({
          formType
        });
    }
    switchStatus = (status) => {
        this.setState({
          status
        });
    }

    render(){

      const navigateAway = () => {
        this.props.navigation.navigate('eFormDetails')
      }
      return (

        <View style={{flex: 1, backgroundColor: '#F6F7FF'}}>
          <View style={{flexDirection: 'row', justifyContent: 'space-around', marginVertical: 10}}>
            <TouchableOpacity onPress={() => {this.switchFormType('CARD')}} style={{padding: 8}}>
              <Text style={{color: (this.state.formType === "CARD")? TEXT7 : TEXT3, fontSize: 15, fontWeight: 'bold'}} >Card</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => {this.switchFormType('RENOVATION')}} style={{padding: 8}}>
              <Text style={{color: (this.state.formType === "RENOVATION")? TEXT7 : TEXT3, fontSize: 15, fontWeight: 'bold'}} >Renovate</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => {this.switchFormType('MOVE')}} style={{padding: 8}}>
              <Text style={{color: (this.state.formType === "MOVE")? TEXT7 : TEXT3, fontSize: 15, fontWeight: 'bold'}} >In/Out</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => {this.switchFormType('CLUB RECREATION')}} style={{padding: 8}}>
              <Text style={{color: (this.state.formType === "CLUB RECREATION")? TEXT7 : TEXT3, fontSize: 15, fontWeight: 'bold'}} >Recreation</Text>
            </TouchableOpacity>
          </View>


          <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>

            <TouchableOpacity onPress={() => {this.switchStatus('PENDING')}}>
              <LinearGradient start={{x: 0, y: 0}} end={{x: 1, y: 0}} colors={
                  (this.state.status === "PENDING")?['#799F0C', '#ACBB78']: ['#F6F7FF', '#F6F7FF']
                } style={{padding: 10, borderWidth: (this.state.status === "PENDING")? 0 : 1.5, borderColor: TEXT5, borderRadius: 5}}>
                <Text style={{color: (this.state.status === "PENDING")? 'white' : TEXT5, fontSize: 15, fontWeight: 'bold'}} >In Progress</Text>
              </LinearGradient>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => {this.switchStatus('PROCESSED')}}>
              <LinearGradient start={{x: 0, y: 0}} end={{x: 1, y: 0}} colors={
                  (this.state.status === "PROCESSED")?['#799F0C', '#ACBB78']: ['#F6F7FF', '#F6F7FF']
                } style={{padding: 10, borderWidth: (this.state.status === "PROCESSED")? 0 : 1.5, borderColor: TEXT5, borderRadius: 5}}>
              <Text style={{color: (this.state.status === "PROCESSED")? 'white' : TEXT5, fontSize: 15, fontWeight: 'bold'}} >Processed</Text>
              </LinearGradient>
            </TouchableOpacity>
          </View>


          <View style={{flex: 1, marginVertical: 30}}>
            {
              (this.state.status === "PROCESSED")?<SectionList formType={this.state.formType} navigateAway={navigateAway} />:

              (
                <React.Fragment>
                  <Text style={{fontSize: 15, fontWeight: 'bold', marginLeft: 20, color: TEXT5, marginBottom:10}}>List</Text>
                  <FlatList formType={this.state.formType} navigateAway={navigateAway} />
                </React.Fragment>
              )
            }
          </View>

        </View>
      )





      /*
              <SectionList
                renderItem={this.renderItem}
                renderSectionHeader={ ({section: {title}}) => (<Text style={{fontWeight: 'bold', backgroundColor: COLOR_TEXT_GREY_LIGHTB, padding: 10}}>{title}</Text>) }
                sections={this.createSectionListData()}
                keyExtractor={(item, index) => item._id}
                onEndReached={()=> {
                    if(this.state.numberOfItemsLoaded < this.state.total){
                      this.fetchMoreData({setTotal: false})
                    }
                }}
                onEndReachedThreshold={0.5}
                extraData={this.state.numberOfItemsLoaded}
                refreshing={this.state.refreshing}
                onRefresh={this.handleRefresh}
              />
          */
    /*




      if( _.isEmpty(this.state.data) && !this.state.refreshing ){
        return (
          <View style={{flex:1, justifyContent: 'center', alignItems: 'center'}}>
            <Text style={labelStyle}>The LogBook is empty</Text>
          </View>
      )
      }
      else {

      }
      */
    }
}

const styles = {  imgContainer:{
    zIndex:-1,
    justifyContent:'space-around',
    width:window.width*0.7,
    height:100,
    borderRadius:10,
    borderColor:'grey',
    borderWidth:3,
    borderStyle:"dotted"
  },
  err:{
  },
}
function mapStateToProps(state) {
  console.log(state);
  return {
    profile: state.profile,
    app: state.app
  }
}

 function mapDispatchToProps(dispatch) {
   return bindActionCreators({
     updateActiveForm: updateActiveForm,
     }, dispatch);
 }

export default connect(mapStateToProps, mapDispatchToProps)(withNavigationFocus(Card));

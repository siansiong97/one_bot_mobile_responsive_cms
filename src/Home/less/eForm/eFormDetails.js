import React, { Component } from 'react';
import { Platform, View, Text, StyleSheet, TouchableOpacity, ScrollView, Animated, AsyncStorage, FlatList, ActivityIndicator, SectionList, Image } from 'react-native';
import { connect } from 'react-redux';
var _ = require('lodash');
 import { updateActiveForm } from '../../../actions';
import { bindActionCreators } from "redux"
import Icon from 'react-native-vector-icons/FontAwesome5'
import { withNavigationFocus } from 'react-navigation'

import { labelStyle, inputStyle, inputErrorStyle, formGroup }  from "../../common/InputStyle"
import { BTN_TEXT ,BTN_PRIMARY }  from "../../common/Styles"
import Autocomplete from 'react-native-autocomplete-input';
import { RNSelectionMenu } from 'react-native-selection-menu'
import { Formik } from 'formik'
import * as Yup from 'yup'
import { Calendar } from 'react-native-calendars';
import { Input } from 'react-native-elements';
import {
  COLOR_NOTIFICATION,
  COLOR_TEXT_GREY_LIGHT,
  COLOR_TEXT_GREY_LIGHTB,
  COLOR_TEXT_GREY_LIGHTC,
  COLOR_TEXT,
  COLOR_RED,
  COLOR_BLUE,
  COLOR_BLUE_2,
  COLOR_TEXT_GREY,
  COLOR_RED_ERR } from '../../common/Color'
  import { DatePicker, List, Provider } from '@ant-design/react-native';
  import enUS from '@ant-design/react-native/lib/locale-provider/en_US';
import moment from 'moment'
var FormData = require('form-data');
import ImagePicker from 'react-native-image-picker'
import client from '../../../feathers'
import { TEXT1, TEXT2, TEXT3, TEXT4, TEXT5, TEXT6, TEXT7, TEXT8, TEXT9, TEXT10 } from '../../common/Color'
import _ from 'lodash'

var schemas = {
  "CARD": [
    {iconName: 'id-card', propertyName: 'idNo'},
    {iconName: 'mobile-alt', propertyName: 'contactNo'},
    {iconName: 'id-card-alt', propertyName: 'card[0].cardType'},
    {iconName: 'car', propertyName: 'vehicleDetail'},
  ],
  'RENOVATION':[
    {iconName: 'id-card', propertyName: 'idNo'},
    {iconName: 'mobile-alt', propertyName: 'contactNo'},
    {iconName: 'id-card-alt', propertyName: 'card[0].cardType'},
    {iconName: 'car', propertyName: 'vehicleDetail'},
  ],
  'MOVE':[

  ],
  'CLUB RECREATION':[

  ]
}

const formatString = 'DD-MM-YYYY';

class eFormDetails extends Component {
  static navigationOptions = {
    title: '',
    headerStyle: {
      elevation: 0,
      backgroundColor:'#F6F7FF'
    },
    headerTintColor: TEXT5
  }
  getTitle(status){
    return (status === 'PENDING')? 'In Progress' : 'Processed'
  }
  massageData(form){
    const {company: {fromDate, toDate}} = form;

    form.date = `${moment(fromDate).format(formatString)} to ${moment(toDate).format(formatString)}`
  }
  renderDetailCard = () => {

    var form = this.props.formInfo

    if(form.formType === 'RENOVATION'){
      this.massageData(form);
    }

    return _.map(schemas[form.formType], ({iconName, propertyName}) => {
      return (

        <View style={styles.line}>
            <Icon
              name={iconName}
              style={styles.icon}
            />

          <Text style={styles.text}>{_.get(form, propertyName)}</Text>
        </View>
      )
    })


  }
  render() {
    const {formInfo: form} = this.props;

    return (
      <View style={styles.container}>
        <Text  style={{fontSize: 15, color:TEXT1, fontWeight: 'bold', marginBottom: 10}}>Status</Text>
        <Text  style={{fontSize: 22, color:TEXT5, marginBottom: 10}}>{this.getTitle(form.status)}</Text>

        <Text  style={{fontSize: 15, color:TEXT3, marginBottom: 15}}>Your record has been sent to the management for review</Text>

        <View style={{backgroundColor: 'white', padding: 20, borderRadius: 10}}>
          <View style={{flexDirection: 'row', justifyContent: 'space-between', marginBottom: 15}}>
            <Text style={{color: TEXT5}}>{form.idName}</Text>
            <Text style={{color: TEXT1, fontSize: 15}}>{moment(form.applyDate).format('DD/MM/YY')}</Text>
          </View>
          {this.renderDetailCard()}

        </View>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'#F6F7FF',
    padding: 20
  },
  line: {
    flexDirection: 'row',
    marginBottom: 15,
    alignItems: 'center'
  },
  text: {
    marginLeft: 10,
    fontSize: 15,
    color: TEXT3
  },
  icon: {
    color: 'white',
    backgroundColor: TEXT5,
    fontSize:15,
    height: 30,
    width: 30,
    borderRadius: 15,
    textAlign: 'center',
    textAlignVertical: 'center'}
});
/*
          <View style={styles.line}>
            <Icon
              name="id-card"
              style={styles.icon}
            />

          <Text style={styles.text}>{form.idNo}</Text>
          </View>

          <View style={styles.line}>
            <Icon
              name="mobile-alt"
              style={styles.icon}
            />

          <Text style={styles.text}>{form.contactNo}</Text>
          </View>

          <View style={styles.line}>
            <Icon
              name="id-card-alt"
              style={styles.icon}
            />

          <Text style={styles.text}>{form.card[0].cardType}</Text>
          </View>

          <View style={styles.line}>
            <Icon
              name="car"
              style={styles.icon}
            />

          <Text style={styles.text}>{form.vehicleDetail}</Text>
          </View>
*/
function mapStateToProps(state) {
  console.log(state.eform.formInfo);
  return {
    formInfo: state.eform.formInfo
  }
}

 function mapDispatchToProps(dispatch) {
   return bindActionCreators({
     updateActiveForm: updateActiveForm,
     }, dispatch);
 }

export default connect(mapStateToProps, mapDispatchToProps)(withNavigationFocus(eFormDetails));

import React, { Component } from 'react';
import { Platform, View, Text, TouchableOpacity, ScrollView, Animated, AsyncStorage, FlatList, ActivityIndicator, SectionList, Image } from 'react-native';
import { connect } from 'react-redux';
var _ = require('lodash');
 import { updateActiveForm } from '../../../actions';
import { bindActionCreators } from "redux"
import Icon from 'react-native-vector-icons/FontAwesome'
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

const queryLimit = 10;


class Card extends Component{
  constructor(props){
    super(props)

    this.state = {
      loading:true,
      numberOfItemsLoaded: 0,
      refreshing: false,
      total: 0,
      map: new Map()
    };
    this.state.map = new Map();
  }


  componentWillUnmount(){
    console.log('I am dead');
  }
  getTitle(date){
    return moment(date).format('D MMMM	YYYY')
  }
  createSectionListData = () => {
    const sections = []
    const entries = this.state.map.entries();
    for([title, data] of entries){
        sections.push({title, data})
    }
    return sections;
  }

  fetchMoreData = ({setTotal}) => {
    let total;
    let appendData;
    /*
      This method depends on the length of data (in state) to know how much to skip.
      Keep in mind that setState is async
    */

   return client.service('eforms').find({
     query:{
       formType: this.props.formType,
       $or: [
        { status: 'APPROVED' },
        { status: 'REJECTED' }
       ],
       //propertyId:this.props.profile.propertyId,
       $sort: {
         createdAt: -1
       },
       $limit:queryLimit,
       $skip: this.state.numberOfItemsLoaded,
       $populate: 'userId'
     }
    })
    .then(res => {

      if(setTotal){
        total = res.total;
      }

      if(_.get(this.props, "formType") === _.get(res, 'data[0].formType') ){
        appendData = true;
      }
      else {
        appendData = false
      }

      return res.data;
    })
    .then(arr => {
      return this.setState( (oldState) => {

        if(appendData){
          let oldMap = oldState.map;
          arr.forEach(item => {

            const title = this.getTitle(item.createdAt)

            if(oldMap.has(title)){
              const arr = oldMap.get(title);
              arr.push(item);
              oldMap.set(title, arr);
            }
            else {
              oldMap.set(title, [item]);
            }
          })

          let obj =  {
            numberOfItemsLoaded: oldState.numberOfItemsLoaded + queryLimit,
            refreshing: false,
            map: oldMap
          }
          return (setTotal)? Object.assign(obj, {total}) : obj;
        }
        else {
            return {
              refreshing: false
            }
        }
      })
    })
    .catch(err => {
      this.setState({refreshing: false});
      console.log(err)
    })
  }

    componentWillMount(){
    //  client.authenticate()
      Promise.resolve()
      .then(() => {
        return this.fetchMoreData({setTotal: true})
      })
      .then(() => this.setState({loading: false}))
      .catch( (err)=> {
        console.log(err);
      })
    }

    handleRefresh = () => {
      this.setState({
        refreshing: true,
        numberOfItemsLoaded: 0,
        total: 0,
        map: new Map()
      }, () => {
        this.fetchMoreData({setTotal: true});
      })
    }
    componentDidUpdate(prevProps, prevState){
      if(this.props.formType !== prevProps.formType){
        this.handleRefresh();
      }
    }

    renderItem = ({item, index, section}) => {
      console.log(item);
//        const {accessType, vehicleDetail, createdAt} = item;
  //      const propertyUnitString = item.propertyunitId.referenceId;
        const {status, vehicleDetail, idName, formType } = item;
        let statuscolor;
        switch(status){
          case "APPROVED":
            statuscolor = TEXT7;
            break;
          case "REJECTED":
            statuscolor = TEXT8;
            break;
          default:
            statuscolor = TEXT3;
        }

        let additionalText;
        switch(formType){
          case "MOVE":
            additionalText = item.company.vehicleNo;
            break;
          case "CARD":
            additionalText = item.vehicleDetail
            break;
          case "RENOVATION":
            additionalText = item.remark
            break;
        }


        console.log(statuscolor);
        return(
          <TouchableOpacity style={{flexDirection: 'row', paddingVertical: 10}} onPress={this.handlePress.bind(this, item)} >

            <View style={{padding: 10}} >
              <Image style={{height: 50, width:50, borderRadius: 25, borderWidth: 25}} resizeMode="contain" source={{uri: item.userId.avatar}} />
            </View>

            <View style={{flex: 1, borderColor: 'black', justifyContent: 'center'}} >
                <Text style={{marginBottom:(additionalText)? 8: 0, fontWeight: 'bold'}}>
                  {idName}
                </Text>

                {
                  (additionalText) &&
                  <Text style={{color: TEXT3}}>
                    {additionalText}
                  </Text>
                }
            </View>

            <View style={{justifyContent: 'center', alignItems: 'center'}}>
              <Text style={{marginRight: 15, color: statuscolor}}>{status}</Text>
            </View>
          </TouchableOpacity>
        )
    }

    handlePress(item) {
      this.props.updateActiveForm(item);
      this.props.navigateAway();
    }

    render(){
      _keyExtractor = (item, index) => item._id
//      console.log(this.state.numberOfItemsLoaded);
//      console.log('SECTION LIST RERENDERS');
      if(this.state.loading){
        return(
          <View style={{flex:1, justifyContent: 'center', alignItems: 'center'}}>
            <ActivityIndicator size="large" color="#0000ff" />
          </View>
        )
      }

      if( _.isEmpty(this.state.map) && !this.state.refreshing && !this.state.loading){
        return (
          <View style={{flex:1, justifyContent: 'center', alignItems: 'center'}}>
            <Text style={labelStyle}>There are no processed eforms</Text>
          </View>
        )
      }
      return (
        <SectionList
          renderItem={this.renderItem}
          renderSectionHeader={ ({section: {title}}) => (
            <View style={{backgroundColor: TEXT5}}>
              <Text style={{fontWeight: 'bold', padding: 10, color: 'white', marginLeft: 10}}>{title}</Text>
            </View>
          ) }
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
      )

    }
}

const styles = {  imgContainer:{
    zIndex:-1,
    justifyContent:'space-around',
    width:window.width*0.7,
    height:100,
    backgroundColor:COLOR_TEXT_GREY_LIGHTC,
    borderRadius:10,
    borderColor:'grey',
    borderWidth:3,
    borderStyle:"dotted"
  },
  err:{
    borderColor:COLOR_RED_ERR,
    color:COLOR_RED_ERR
  },
}
function mapStateToProps(state) {
  //console.log(state);
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

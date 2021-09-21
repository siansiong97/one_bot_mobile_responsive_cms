import React, { Component } from 'react';
import { View, TouchableOpacity, Image, TouchableWithoutFeedback, FlatList, AsyncStorage, ActivityIndicator, RefreshControl} from 'react-native';
import { List, ListItem, Text  } from 'react-native-elements';
import { connect } from 'react-redux';
import Loading from '../../common/Loading'
import EformSubmissionListRow from '../../common/EformSubmissionListRow'
import client from '../../../feathers'
import { updateActiveForm, updateProfile } from '../../../actions';
import { bindActionCreators } from "redux"
var _ = require('lodash');
import Icon from 'react-native-vector-icons/FontAwesome5';
import { labelStyle } from '../../common/InputStyle'
import { TEXT1, TEXT2, TEXT3, TEXT4, TEXT5, TEXT6, TEXT7, TEXT8, TEXT9, TEXT10 } from '../../common/Color'
const queryLimit = 10;
import _ from 'lodash'

class EformSubmissions extends Component {
  static navigationOptions = ({navigation}) => {
    return {
      title: 'E-Form Submissions',
    }
  };

  constructor(props){
    super(props)
    this.state = {
      loading:true,
      data:[],
//      propertyUnitId:null,
      refreshing: false
    };
  }

  componentDidMount(){
/*
    client.service('eforms').on('patched', (complaints) => {
      this.handleRefresh();
    })

    client.service('eforms').on('created', (complaints) => {
      this.handleRefresh();
    })

    this.setState({
      propertyUnitId:this.props.navigation.getParam('propertyUnit')
    })
*/
  }
  componentDidUpdate(prevProps, prevState){
    if(this.props.formType !== prevProps.formType){
      this.handleRefresh();
    }
  }

  initializeData(){

/*
    AsyncStorage.getItem('@authinfo')
    .then( (res)=>{
      if(!res){
        return this.setState({
          loading:false
        })
      }else{
        return this.setState({
          loginUser:JSON.parse(res)
        })
      }
    })
    .then( (res)=>{
      return client.authenticate({
        strategy: 'jwt',
        accessToken: this.state.loginUser.token
      })
    })


    .then( (res)=>{
        this.props.updateProfile(this.state.loginUser)
    })
*/

    Promise.resolve()
    .then(() => {
      return this.fetchMoreData()
    })
    .then(() => this.setState({loading: false}))
    .catch( (err)=> {
      console.log(err);
    })
  }

  fetchMoreData = () => {
  //  console.log('FETCHING DATA')
    /*
      This method depends on the length of data (in state) to know how much to skip.
      Keep in mind that setState is async
    */
   return client.service('eforms').find({
          query:{
            formType: this.props.formType,
            status: "PENDING",
      //      propertyunitId:this.props.navigation.getParam('propertyUnit'),
      //      propertyId:this.props.navigation.getParam('property'),
      //      userId:this.props.profile.userInfo.id,
            $sort: {
              createdAt: -1
            },
            $limit:queryLimit,
            $skip: this.state.data.length
          }
    })
    .then( (res)=> {

      let appendData;
      if(_.get(this.props, "formType") === _.get(res, 'data[0].formType') ){
        appendData = true;
      }
      else {
        appendData = false
      }

      return this.setState( (oldState, props) => {

        if(appendData){
          return  {
            data:[...oldState.data, ...res.data],
            refreshing: false
          }
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
      this.initializeData()
    }

    renderRow = ({ item, index })  => {
  //    console.log(this.state.data);
      const formType = this.props.formType;
      let additionalText;
      switch(formType){
        case "MOVE":
          additionalText = _.get(item, 'company.vehicleNo');
          break;
        case "CARD":
          additionalText = item.vehicleDetail
          break;
        case "RENOVATION":
          additionalText = item.remark
          break;
      }


      return(
        <TouchableOpacity onPress={()=>{
          this.props.updateActiveForm(item);
          this.props.navigateAway();
        }}>

            <View >
              <View style={{width: '88%', borderBottomWidth: 1, borderColor: TEXT3,
              flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingVertical: 5, alignSelf: 'center'}}>

                  <View>
                    <Text style={{fontWeight: 'bold', marginBottom: 7}} >{item.idName}</Text>
                    { (this.props.formType !== "CLUB RECREATION") &&
                      <Text style={{color: TEXT3}}>{additionalText}</Text>
                    }
                  </View>

                  <Icon
                    name="chevron-right"
                    size={20}
                    color={'black'}
                  />
              </View>
            </View >
        </TouchableOpacity>

      )
    }

    handleRefresh = () => {
      this.setState({
        refreshing: true,
        data: []
      }, () => {this.fetchMoreData()})
    }
    getRefreshSpinner(){
      return (
        <View style={{flex:1, justifyContent: 'center', alignItems: 'center'}}>
          <ActivityIndicator size="large" color="#0000ff" />
        </View>
      )
    }

    render(){
      _keyExtractor = (item, index) => item._id

/*
  refreshing={this.state.refreshing}
  onRefresh={this.handleRefresh}
*/
      if(this.state.loading){
        return(
          <View style={{flex:1, justifyContent: 'center', alignItems: 'center'}}>
            <ActivityIndicator size="large" color="#0000ff" />
          </View>
        )
      }
      else {
        return (
          <React.Fragment>
            <FlatList
              data={this.state.data}
              renderItem={this.renderRow}
              keyExtractor={_keyExtractor}
              ItemSeparatorComponent={() => (<View style={{height:1, width: '90%', backgroundColor: 'black', marginLeft: 'auto', marginRight: 'auto'}}></View>)}
              onEndReached={this.fetchMoreData}
              onEndReachedThreshold={0.3}

              listEmptyComponent={() => (
                <View style={{flex:1, justifyContent: 'center', alignItems: 'center'}}>
                  <Text style={labelStyle}>There are no pending eforms</Text>
                </View>
              )}
              refreshControl={
                  <RefreshControl
                    colors={["#0000ff"]}
                    refreshing={this.state.refreshing}
                    onRefresh={this.handleRefresh}
                  />
              }
            />
          </React.Fragment>
        )
      }
    }
}

function mapStateToProps(state) {
  return {
    profile: state.profile
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    updateActiveForm,
    updateProfile
    }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(EformSubmissions);

import React from 'react';
import QueueAnim from 'rc-queue-anim';
import { Row, Col } from 'antd';
import OverPack from 'rc-scroll-anim/lib/ScrollOverPack';
import { appleStoreIcon, facebookIcon, huaweiIcon, instagramIcon, playStoreIcon, youtubeIcon } from '../icon';
import '../common.css'
import _ from 'lodash';

const routes = [
  {
    name : 'home',
    text : 'Home',
    path : '/',
  },
  {
    name : 'about',
    text : 'About',
    path : '/',
  },
  {
    name : 'privacy',
    text : 'Privacy Policy',
    path : '/',
  },
  {
    name : 'termOfUse',
    text : 'Term Of Use',
    path : '/',
  },
  {
    name : 'faq',
    text : 'FAQs',
    path : '/',
  },
  {
    name : 'help',
    text : 'Help',
    path : '/',
  },
  {
    name : 'contactUs',
    text : 'Contact Us',
    path : '/',
  },
]
class Content4 extends React.PureComponent {
  render() {
    const { ...props } = this.props;
    const { dataSource } = props;
    delete props.dataSource;
    delete props.isMobile;
    return (

      <React.Fragment>
        <Row style={{ height: '200px' }}>
          <Col span={24} style={{ textAlign: 'center' }}>
            <h1>Around services</h1>
            <p style={{ paddingLeft: '30%', paddingRight: '30%' }}>In future, Kibo aim to have the integration services within the residency compound. approach is to ease resident's daily routine and enable resident to enjoy full range services</p>
          </Col>
        </Row>

        <Row style={{ height: '100px', backgroundColor: 'brown' }}>
          <Col span={24} style={{ textAlign: 'center', marginTop: '30px', color: '#fff' }}>
            <h1>LETS GET CONNECTED. SHALL WE ?</h1>
          </Col>
        </Row>

        <Row style={{ marginTop: '30px' }}>
          <Col xs={24} sm={24} md={24} lg={24} xl={24}>
            <div className="flex-justify-center flex-items-align-center margin-bottom-md" >
              <a target="_blank" href="https://play.google.com/store/apps/details?id=com.mtse.kiboapp">
                <img src={playStoreIcon} style={{ width: 30, height: 30 }} className="margin-right-md cursor-pointer" />
              </a>
              <a>
                <img src={appleStoreIcon} style={{ width: 30, height: 30 }} className="margin-right-md cursor-pointer" />

              </a>
              <a>
                <img src={huaweiIcon} style={{ width: 30, height: 30 }} className="margin-right-md cursor-pointer" />

              </a>
              <a>
                <img src={facebookIcon} style={{ width: 30, height: 30 }} className="margin-right-md cursor-pointer" />

              </a>
              <a>
                <img src={instagramIcon} style={{ width: 30, height: 30 }} className="margin-right-md cursor-pointer" />

              </a>
              <a>
                <img src={youtubeIcon} style={{ width: 30, height: 30 }} className="margin-right-md cursor-pointer" />
              </a>
            </div>
            <div className="margin-y-lg flex-justify-center flex-items-align-center">
              {
                _.map(routes,(route) => { 
                 return (
                   <span className='d-inline-block margin-right-lg font-weight-black small-text' >
                     {route.text}
                   </span>
                 ) 
                })
              }
            </div>
          </Col>

          <Col span={24} style={{ textAlign: 'center' }}>
            {/* <p>System by Mr Tech Software Engineering(002340901-W)</p> */}
            <p>Kibo &copy; copyright 2021</p>
          </Col>
        </Row>
      </React.Fragment>

    );
  }
}

export default Content4;

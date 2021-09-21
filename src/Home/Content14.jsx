import React from 'react';
import OverPack from 'rc-scroll-anim/lib/ScrollOverPack';
import QueueAnim from 'rc-queue-anim';
import TweenOne from 'rc-tween-one';
import { Row, Col, Icon } from 'antd';
const ImgR = require('./assets/images/management2.png')

class Content14 extends React.PureComponent {
  render() {
    const { ...props } = this.props;
    const { dataSource } = props;
    delete props.dataSource;
    delete props.isMobile;
    return (
      <div style={{height:'300px'}}>
          <Row gutter={20}>
              <Col span={12} style={{paddingLeft:'15%'}}>
                    <h1 style={{}}>MANAGEMENT</h1>
                    <p style={{paddingTop:'3%'}}>
                      Meanwhile, Kibo also (designated) property’s management in helping them to supervise workforce as well as keeping the data storage entry.
                    </p>
                    <br/>
                    <ul>
                      <li>Centralise front office operation </li>
                      <li>Manage daily task & property account </li>
                      <li>Data property in one repository </li>
                      <li>Organized money flow record</li>
                    </ul>
              </Col>
              <Col span={12} style={{ paddingLeft:'10%'}}>
                <QueueAnim
                  key="QueueAnim"
                  type={['right', 'left']}
                  delay={3000}
                  >
                    <img id="mng2" src={ImgR} />
                </QueueAnim>
              </Col>
          </Row>
      </div>
    );
  }
}

export default Content14;

import React from 'react';
import OverPack from 'rc-scroll-anim/lib/ScrollOverPack';
import QueueAnim from 'rc-queue-anim';
import TweenOne from 'rc-tween-one';
import { Row, Col, Icon } from 'antd';
const ImgL = require('./assets/images/managev2.png')
const ImgR = require('./assets/images/residentv2.png')
const ImgBg = require('./assets/images/oneStopPlatform.png')

class Content13 extends React.PureComponent {
  render() {
    const { ...props } = this.props;
    const { dataSource } = props;
    delete props.dataSource;
    delete props.isMobile;
    return (
      <div style={{backgroundImage:`url(${ImgBg})`}}>
          <Row gutter={20}>
              <Col span={6} style={{ paddingLeft:'10%'}}>
                <QueueAnim
                  key="QueueAnim"
                  type={['right', 'left']}
                  delay={3000}
                  >
                    <img id="residentv1" src={ImgL} />
                </QueueAnim>
              </Col>
              <Col span={12}>
                <QueueAnim
                  key="QueueAnim"
                  type={['right', 'left']}
                  delay={3000}
                  >
                    <h1 id="c13title" style={{textAlign:'center'}}>ONE STOP PLATFORM</h1>
                    <p id="c13p" style={{paddingLeft:'20%', paddingRight:'20%', paddingTop:'3%', textAlign:'center'}}>A leading services provider specially designated to help on creating a bond between house owner, tenants, management and comunity</p>
                    {/*}<p>Kibo come with mobile apps features to maximize the usage among the resident. Theses features invluces </p>*/}
                </QueueAnim>
              </Col>
              <Col span={6} style={{paddingRight:'10%'}}>
                <QueueAnim
                  key="QueueAnim"
                  type={['right', 'left']}
                  delay={3000}
                  >
                    <img id="residentv2" src={ImgR} />
                </QueueAnim>
              </Col>
          </Row>
      </div>
    );
  }
}

export default Content13;

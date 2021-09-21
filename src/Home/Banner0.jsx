import React from 'react';
import { Row, Col, Button, Icon } from 'antd';
import QueueAnim from 'rc-queue-anim';
import TweenOne from 'rc-tween-one';
const BannerImg = require('./assets/images/banner23.png')

class Banner extends React.PureComponent {
  render() {
    const { ...currentProps } = this.props;
    const { dataSource } = currentProps;
    delete currentProps.dataSource;
    delete currentProps.isMobile;
    return (
      <div style={{marginTop:'0%'}}>
          <Row gutter={20}>
              <Col span={12} style={{paddingTop:'9%', paddingLeft:'30%'}}>
                <h1 className="bannerTitle" >Connecting Made Easy !</h1>
              </Col>
              <Col span={12} style={{paddingTop: '4%'}}>
                <QueueAnim
                  key="QueueAnim"
                  type={['right', 'left']}
                  delay={3000}
                  >
                    <img src={BannerImg} id="bnrimg" />
                </QueueAnim>
              </Col>
          </Row>
        <TweenOne
          animation={{
            y: '-=20',
            yoyo: true,
            repeat: -1,
            duration: 1000,
          }}
          className="banner0-icon"
          key="icon"
        >
          <Icon type="down" />
        </TweenOne>
      </div>
    );
  }
}
export default Banner;

import React from 'react';

const img1 = require('./assets/images/carousel/facilities.png')
const img2 = require('./assets/images/carousel/visitor.png')
const img3 = require('./assets/images/carousel/news.png')
const img4 = require('./assets/images/carousel/smarthouse.png')
const img5 = require('./assets/images/carousel/security.png')

const imgCtn1 = require('./assets/images/resident/epass.png')
const imgCtn2 = require('./assets/images/resident/eform.png')
const imgCtn3 = require('./assets/images/resident/ebill.png')
const imgCtn4 = require('./assets/images/resident/facilities.png')
const imgCtn5 = require('./assets/images/resident/complaint.png')
const imgCtn6 = require('./assets/images/resident/kibot.png')
const imgCtn7 = require('./assets/images/resident/sos.png')
const imgCtn8 = require('./assets/images/resident/log.png')

const imgSec1 = require('./assets/images/security/pass.png')
const imgSec2 = require('./assets/images/security/qr.png')
const imgSec3 = require('./assets/images/security/control.png')
const imgSec4 = require('./assets/images/security/supervise.png')

const logo = require('./assets/images/security/supervise.png')

export const Nav00DataSource = {
  wrapper: { className: 'header0 home-page-wrapper' },
  page: { className: 'home-page' },
  logo: {
    className: 'header0-logo',
    children: 'https://os.alipayobjects.com/rmsportal/mlcYmsRilwraoAe.svg',
  },
  Menu: {
    className: 'header0-menu',
    children: [
      { name: 'item0', a: { children: 'About', href: '' } },
      { name: 'item1', a: { children: 'Get in touch', href: '' } },
    ],
  },
  mobileMenu: { className: 'header0-mobile-menu' },
};
export const Banner00DataSource = {
  wrapper: { className: 'banner0' },
  textWrapper: { className: 'banner0-text-wrapper' },
  title: {
    className: 'banner0-title',
    children: 'https://zos.alipayobjects.com/rmsportal/HqnZZjBjWRbjyMr.png',
  },
  content: {
    className: 'banner0-content',
  },
  button: { className: 'banner0-button', children: 'Learn More' },
};
export const Content00DataSource = {
  wrapper: { className: 'home-page-wrapper content0-wrapper' },
  page: { className: 'home-page content0' },
  OverPack: { playScale: 0.3, className: '' },
  titleWrapper: {
    className: 'title-wrapper',
    children: [{ name: 'title', children: '' }],
  },
  block: {
    className: 'block-wrapper',
    children: [
      {
        name: 'block0',
        className: 'block',
        md: 6,
        xs: 12,
        children: {
          icon: {
            className: 'icon',
            children:
              img1,
          },
          title: { children: 'Facility Booking' },
          content: { children: '' },
        },
      },
      {
        name: 'block1',
        className: 'block',
        md: 4,
        xs: 12,
        children: {
          icon: {
            className: 'icon',
            children:
              img2,
          },
          title: { children: 'Visitor Management' },
          content: { children: '' },
        },
      },
      {
        name: 'block2',
        className: 'block',
        md: 4,
        xs: 12,
        children: {
          icon: {
            className: 'icon',
            children:
              img3,
          },
          title: { children: 'News & Update' },
          content: { children: '' },
        },
      },
      {
        name: 'block3',
        className: 'block',
        md: 4,
        xs: 12,
        children: {
          icon: {
            className: 'icon',
            children:
              img4,
          },
          title: { children: 'Smart House' },
          content: { children: '' },
        },
      },
      {
        name: 'block4',
        className: 'block',
        md: 4,
        xs: 12,
        children: {
          icon: {
            className: 'icon',
            children:
              img5,
          },
          title: { children: 'Security Guard' },
          content: { children: '' },
        },
      },
    ],
  },
};
export const Content01DataSource = {
  wrapper: { className: 'home-page-wrapper content0-wrapper' },
  page: { className: 'home-page content0' },
  OverPack: { playScale: 0.3, className: '' },
  titleWrapper: {
    className: 'title-wrapper',
    children: [
      { name: 'title', children: 'RESIDENTS' },
      { name: 'content', children: 'Kibo come with mobile apps features to maximize the usage among the resident. These features includes:' },
    ],
  },
  block: {
    className: 'block-wrapper',
    children: [
      {
        name: 'block0',
        className: 'block',
        md: 6,
        xs: 6,
        children: {
          icon: {
            className: 'icon',
            children:
              imgCtn1,
          },
          title: { children: 'ePass' },
          content: { children: '' },
        },
      },
      {
        name: 'block1',
        className: 'block',
        md: 6,
        xs: 6,
        children: {
          icon: {
            className: 'icon',
            children:
              imgCtn2,
          },
          title: { children: 'eForm' },
          content: { children: '' },
        },
      },
      {
        name: 'block2',
        className: 'block',
        md: 6,
        xs: 6,
        children: {
          icon: {
            className: 'icon',
            children:
              imgCtn3,
          },
          title: { children: 'eBill' },
          content: { children: '' },
        },
      },
      {
        name: 'block3',
        className: 'block',
        md: 6,
        xs: 6,
        children: {
          icon: {
            className: 'icon',
            children:
              imgCtn4,
          },
          title: { children: 'Facilities Booking' },
          content: { children: '' },
        },
      },
      {
        name: 'block4',
        className: 'block',
        md: 6,
        xs: 6,
        children: {
          icon: {
            className: 'icon',
            children:
              imgCtn5,
          },
          title: { children: 'Complaint' },
          content: { children: '' },
        },
      },
      {
        name: 'block5',
        className: 'block',
        md: 6,
        xs: 6,
        children: {
          icon: {
            className: 'icon',
            children:
              imgCtn6,
          },
          title: { children: 'Ki-Bot' },
          content: { children: '' },
        },
      },
      {
        name: 'block4',
        className: 'block',
        md: 6,
        xs: 6,
        children: {
          icon: {
            className: 'icon',
            children:
              imgCtn7,
          },
          title: { children: 'SOS' },
          content: { children: '' },
        },
      },
      {
        name: 'block4',
        className: 'block',
        md: 6,
        xs: 6,
        children: {
          icon: {
            className: 'icon',
            children:
              imgCtn8,
          },
          title: { children: 'LogBook' },
          content: { children: '' },
        },
      },
    ],
  },
};
export const Content03DataSource = {
  wrapper: { className: 'home-page-wrapper content0-wrapper' },
  page: { className: 'home-page content0' },
  OverPack: { playScale: 0.3, className: '' },
  titleWrapper: {
    className: 'title-wrapper',
    children: [{ name: 'title', children: '' }],
  },
  block: {
    className: 'block-wrapper',
    children: [
      {
        name: 'block0',
        className: 'block',
        md: 6,
        xs: 6,
        children: {
          icon: {
            className: 'icon',
            children:
              imgSec1,
          },
          title: { children: 'ePass Registration' },
          content: { children: '' },
        },
      },
      {
        name: 'block1',
        className: 'block',
        md: 6,
        xs: 6,
        children: {
          icon: {
            className: 'icon',
            children:
              imgSec2,
          },
          title: { children: 'QR Pass Access' },
          content: { children: '' },
        },
      },
      {
        name: 'block2',
        className: 'block',
        md: 6,
        xs: 6,
        children: {
          icon: {
            className: 'icon',
            children:
              imgSec3,
          },
          title: { children: 'Control Access' },
          content: { children: '' },
        },
      },
      {
        name: 'block3',
        className: 'block',
        md: 6,
        xs: 6,
        children: {
          icon: {
            className: 'icon',
            children:
              imgSec4,
          },
          title: { children: 'Supervise Area' },
          content: { children: '' },
        },
      },
    ],
  },
};
export const Content70DataSource = {
  wrapper: { className: 'home-page-wrapper content7-wrapper' },
  page: { className: 'home-page content7' },
  OverPack: {},
  titleWrapper: {
    className: 'title-wrapper',
    children: [
      {
        name: 'title',
        children: '蚂蚁金融云提供专业的服务',
        className: 'title-h1',
      },
      { name: 'content', children: '基于阿里云计算强大的基础资源' },
    ],
  },
  tabsWrapper: { className: 'content7-tabs-wrapper' },
  block: {
    children: [
      {
        name: 'block0',
        tag: {
          className: 'content7-tag',
          text: { children: 'PHONE', className: 'content7-tag-name' },
          icon: { children: 'mobile' },
        },
        content: {
          className: 'content7-content',
          text: {
            className: 'content7-text',
            md: 14,
            xs: 24,
            children: (
              <span>
                <h3>技术</h3>
                <p>
                  丰富的技术组件，简单组装即可快速搭建金融级应用，丰富的技术组件，简单组装即可快速搭建金融级应用。
                </p>
                <br />
                <h3>融合</h3>
                <p>
                  解放业务及技术生产力，推动金融服务底层创新，推动金融服务底层创新。解放业务及技术生产力，推动金融服务底层创新。
                </p>
                <br />
                <h3>
                  开放
                </h3>
                符合金融及要求的安全可靠、高可用、高性能的服务能力，符合金融及要求的安全可靠、高可用、高性能的服务能力。
              </span>
            ),
          },
          img: {
            className: 'content7-img',
            children:
              'https://zos.alipayobjects.com/rmsportal/xBrUaDROgtFBRRL.png',
            md: 10,
            xs: 24,
          },
        },
      },
      {
        name: 'block1',
        tag: {
          className: 'content7-tag',
          icon: { children: 'tablet' },
          text: { className: 'content7-tag-name', children: 'TABLET' },
        },
        content: {
          className: 'content7-content',
          text: {
            className: 'content7-text',
            md: 14,
            xs: 24,
            children: (
              <span>
                <h3>技术</h3>
                <p>
                  丰富的技术组件，简单组装即可快速搭建金融级应用，丰富的技术组件，简单组装即可快速搭建金融级应用。
                </p>
                <br />
                <h3>融合</h3>
                <p>
                  解放业务及技术生产力，推动金融服务底层创新，推动金融服务底层创新。解放业务及技术生产力，推动金融服务底层创新。
                </p>
                <br />
                <h3>
                  开放
                </h3>
                符合金融及要求的安全可靠、高可用、高性能的服务能力，符合金融及要求的安全可靠、高可用、高性能的服务能力。
              </span>
            ),
          },
          img: {
            className: 'content7-img',
            md: 10,
            xs: 24,
            children:
              'https://zos.alipayobjects.com/rmsportal/xBrUaDROgtFBRRL.png',
          },
        },
      },
      {
        name: 'block2',
        tag: {
          className: 'content7-tag',
          text: { children: 'DESKTOP', className: 'content7-tag-name' },
          icon: { children: 'laptop' },
        },
        content: {
          className: 'content7-content',
          text: {
            className: 'content7-text',
            md: 14,
            xs: 24,
            children: (
              <span>
                <h3>技术</h3>
                <p>
                  丰富的技术组件，简单组装即可快速搭建金融级应用，丰富的技术组件，简单组装即可快速搭建金融级应用。
                </p>
                <br />
                <h3>融合</h3>
                <p>
                  解放业务及技术生产力，推动金融服务底层创新，推动金融服务底层创新。解放业务及技术生产力，推动金融服务底层创新。
                </p>
                <br />
                <h3>
                  开放
                </h3>
                符合金融及要求的安全可靠、高可用、高性能的服务能力，符合金融及要求的安全可靠、高可用、高性能的服务能力。
              </span>
            ),
          },
          img: {
            className: 'content7-img',
            md: 10,
            xs: 24,
            children:
              'https://zos.alipayobjects.com/rmsportal/xBrUaDROgtFBRRL.png',
          },
        },
      },
    ],
  },
};
export const Content130DataSource = {
  wrapper: { className: 'banner0' },
  textWrapper: { className: 'banner0-text-wrapper' },
  title: {
    className: 'banner0-title',
    children: 'https://zos.alipayobjects.com/rmsportal/HqnZZjBjWRbjyMr.png',
  },
  content: {
    className: 'banner0-content',
  },
  button: { className: 'banner0-button', children: 'Learn More' },
};
export const Content140DataSource = {
  wrapper: { className: 'banner0' },
  textWrapper: { className: 'banner0-text-wrapper' },
  title: {
    className: 'banner0-title',
    children: 'https://zos.alipayobjects.com/rmsportal/HqnZZjBjWRbjyMr.png',
  },
  content: {
    className: 'banner0-content',
  },
};
export const Content120DataSource = {
  wrapper: { className: 'home-page-wrapper content12-wrapper' },
  page: { className: 'home-page content12' },
  OverPack: { playScale: 0.3, className: '' },
  titleWrapper: {
    className: 'title-wrapper',
    children: [{ name: 'title', children: '特别鸣谢', className: 'title-h1' }],
  },
  block: {
    className: 'img-wrapper',
    children: [
      {
        name: 'block0',
        className: 'block',
        md: 8,
        xs: 24,
        children: {
          wrapper: { className: 'block-content' },
          img: {
            children:
              'https://gw.alipayobjects.com/zos/rmsportal/TFicUVisNHTOEeMYXuQF.svg',
          },
        },
      },
      {
        name: 'block1',
        className: 'block',
        md: 8,
        xs: 24,
        children: {
          wrapper: { className: 'block-content' },
          img: {
            children:
              'https://gw.alipayobjects.com/zos/rmsportal/hkLGkrlCEkGZeMQlnEkD.svg',
          },
        },
      },
      {
        name: 'block2',
        className: 'block',
        md: 8,
        xs: 24,
        children: {
          wrapper: { className: 'block-content' },
          img: {
            children:
              'https://gw.alipayobjects.com/zos/rmsportal/bqyPRSZmhvrsfJrBvASi.svg',
          },
        },
      },
      {
        name: 'block3',
        className: 'block',
        md: 8,
        xs: 24,
        children: {
          wrapper: { className: 'block-content' },
          img: {
            children:
              'https://gw.alipayobjects.com/zos/rmsportal/UcsyszzOabdCYDkoPPnM.svg',
          },
        },
      },
      {
        name: 'block4',
        className: 'block',
        md: 8,
        xs: 24,
        children: {
          wrapper: { className: 'block-content' },
          img: {
            children:
              'https://gw.alipayobjects.com/zos/rmsportal/kRBeaICGexAmVjqBEqgw.svg',
          },
        },
      },
      {
        name: 'block5',
        className: 'block',
        md: 8,
        xs: 24,
        children: {
          wrapper: { className: 'block-content' },
          img: {
            children:
              'https://gw.alipayobjects.com/zos/rmsportal/ftBIiyJcCHpHEioRvPsV.svg',
          },
        },
      },
    ],
  },
};
export const Footer00DataSource = {
  wrapper: { className: 'home-page-wrapper footer0-wrapper' },
  OverPack: { className: 'home-page footer0', playScale: 0.05 },
  copyright: {
    className: 'copyright',
    children: (
      <span>
        ©2018
        {' '}
        <a href="https://motion.ant.design">Ant Motion</a>
        {' '}
        All Rights Reserved
      </span>
    ),
  },
};

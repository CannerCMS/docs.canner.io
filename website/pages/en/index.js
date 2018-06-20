/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require('react');

const {Alert} = require('antd');
const CompLibrary = require('../../core/CompLibrary.js');
const MarkdownBlock = CompLibrary.MarkdownBlock; /* Used to read markdown */
const Container = CompLibrary.Container;
const GridBlock = CompLibrary.GridBlock;

const siteConfig = require(process.cwd() + '/siteConfig.js');

function imgUrl(img) {
  return siteConfig.baseUrl + 'img/' + img;
}

function docUrl(doc, language) {
  return siteConfig.baseUrl + 'docs/' + (language ? language + '/' : '') + doc;
}

function pageUrl(page, language) {
  return siteConfig.baseUrl + (language ? language + '/' : '') + page;
}

class Button extends React.Component {
  render() {
    return (
      <div className="pluginWrapper buttonWrapper">
        <a className="button" href={this.props.href} target={this.props.target}>
          {this.props.children}
        </a>
      </div>
    );
  }
}

Button.defaultProps = {
  target: '_self',
};

const SplashContainer = props => (
  <div className="homeContainer">
    <div className="homeSplashFade">
      <div className="wrapper homeWrapper">{props.children}</div>
    </div>
  </div>
);

const Logo = props => (
  <div className="projectLogo">
    <img src={props.img_src} style={{width: '300px', height: '250px'}}/>
  </div>
);

const ProjectTitle = props => (
  <h2 className="projectTitle">
    CannerIO <super style={{verticalAlign: "super", fontSize: '20px', color: "#ce4034"}}> alpha</super>
    <small>{siteConfig.tagline}</small>
  </h2>
);

const PromoSection = props => (
  <div className="section promoSection">
    <div className="promoRow">
      <div className="pluginRowBlock">{props.children}</div>
    </div>
  </div>
);

class HomeSplash extends React.Component {
  render() {
    let language = this.props.language || '';
    return (
      <SplashContainer>
        <Logo img_src={imgUrl('banner.gif')} />
        <div className="inner">
          <ProjectTitle />
          <PromoSection>
            <Button href="https://www.canner.io">Back to CannerIO</Button>
            <Button href={docUrl('start-quick-firebase.html', language)}>Get started</Button>
            <Button href={"https://framework.canner.io"} target="_blank">Open source</Button>
          </PromoSection>
        </div>
        <Alert
          style={{maxWidth: '500px', margin: '0 auto', textAlign: 'center'}}
          message="CannerIO v1 document"
          description={<p>Since we radically change our internal infrastructure. The CannerIO v2 document is mostly different from the v1, If you are looking for CannerIO v1 document please visit <a href="https://docs.v1.canner.io/zh">docs.v1.canner.io</a></p>}
          type="info"
          showIcon
        />
      </SplashContainer>
    );
  }
}

const Block = props => (
  <Container
    padding={['bottom', 'top']}
    id={props.id}
    background={props.background}>
    <GridBlock align="center" contents={props.children} layout={props.layout} />
  </Container>
);

const Features = props => (
  <Block layout="fourColumn">
    {[
      {
        content: 'CannerIO support access control lets you assign different privileges to different users for collaberation.',
        image: imgUrl('features/membership.png'),
        imageAlign: 'top',
        title: 'Membership',
      },
      {
        content: 'You can setup a standalone login page for your CMS, without login from canner.io',
        image: imgUrl('features/login.png'),
        imageAlign: 'top',
        title: 'Login page',
      },
      {
        content: 'We provide customized domain service for premium members to establish CMS using your own domain.',
        image: imgUrl('features/domain.png'),
        imageAlign: 'top',
        title: 'Customized domain',
      },
      {
        content: 'CannerIO use Amazon Cloudfront to deliver your website fast and reliable around the globe.',
        image: imgUrl('features/CDN.png'),
        imageAlign: 'top',
        title: 'CDN delivery',
      },
    ]}
  </Block>
);

const OSS = props => (
  <Container
    padding={[]}
    id={'service'}
    background="highlight">
    <GridBlock contents={[
      {
        content: 'Our team at Canner, Inc. believe in open community, so we open sourced our CMS framework to share our reseach and technology to everyone. If you want to use our open source edition please visit &#x1F449;&#x1F449;&#x1F449; <a href="https://framework.canner.io">framework.canner.io</a>',
        image: imgUrl('blocks/demo.png'),
        imageAlign: 'right',
        title: 'Open source: Host anywhere',
      },
    ]} layout={props.layout} />
  </Container>
);

const Showcase = props => {
  if ((siteConfig.users || []).length === 0) {
    return null;
  }
  const showcase = siteConfig.users
    .filter(user => {
      return user.pinned;
    })
    .map((user, i) => {
      return (
        <a href={user.infoLink} key={i}>
          <img src={user.image} alt={user.caption} title={user.caption} />
        </a>
      );
    });

  return (
    <div className="productShowcaseSection paddingBottom">
      <h2>{"Who's Using This?"}</h2>
      <p>This project is used by all these people</p>
      <div className="logos">{showcase}</div>
      <div className="more-users">
        <a className="button" href={pageUrl('users.html', props.language)}>
          More {siteConfig.title} Users
        </a>
      </div>
    </div>
  );
};

class Index extends React.Component {

  render() {
    let language = this.props.language || '';

    return (
      <div>
        {/* <HomeSplash language={language} />
        <div className="mainContainer">
          <Features />
          <OSS />
        </div> */}
      </div>
    );
  }
}

module.exports = Index;

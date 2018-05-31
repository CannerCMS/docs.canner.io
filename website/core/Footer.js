/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require('react');

class Footer extends React.Component {
  docUrl(doc, language) {
    const baseUrl = this.props.config.baseUrl;
    return baseUrl + 'docs/' + (language ? language + '/' : '') + doc;
  }

  pageUrl(doc, language) {
    const baseUrl = this.props.config.baseUrl;
    return baseUrl + (language ? language + '/' : '') + doc;
  }

  render() {
    const currentYear = new Date().getFullYear();

    return (
      <footer className="nav-footer" id="footer">
        <script
          dangerouslySetInnerHTML={{
            __html: `
            ((window.gitter = {}).chat = {}).options = {
              room: 'Canner/CannerCMS'
            };

            const script = document.createElement("script");

            script.src = "https://sidecar.gitter.im/dist/sidecar.v1.js";
            script.async = true;
            script.defer = true;

            document.body.appendChild(script);
            `
          }}/>
        <section className="sitemap">
          <div>
            <h5>Docs</h5>
            <a href={"https://framework.canner.io/docs/why-canner.html"}>
              Why Canner?
            </a>
            <a href={this.docUrl('start-installation.html')}>
              Getting Started
            </a>
            <a href={"https://framework.canner.io/docs/guides-basic-setup.html"}>
              Open Source Documentation
            </a>
          </div>
          <div>
            <h5>Community</h5>
            <a
              href="http://stackoverflow.com/questions/tagged/canner"
              target="_blank"
              rel="noreferrer noopener">
              Stack Overflow
            </a>
            <a href="https://discordapp.com/">Project Chat</a>
            <a
              href="https://twitter.com/CannerIO"
              target="_blank"
              rel="noreferrer noopener">
              Twitter
            </a>
          </div>
          <div>
            <h5>More</h5>
            <a href="https://www.canner.io/">CannerIO</a>
            <a href="https://github.com/canner">GitHub</a>
            <a
              className="github-button"
              href={this.props.config.repoUrl}
              data-icon="octicon-star"
              data-count-href="/facebook/docusaurus/stargazers"
              data-show-count={true}
              data-count-aria-label="# stargazers on GitHub"
              aria-label="Star this project on GitHub">
              Star
            </a>
          </div>
        </section>

        <div style={{textAlign: 'center'}}>
          <a href={"https://www.canner.io"} target="_blank">
            {this.props.config.footerIcon && (
              <img
                src={this.props.config.baseUrl + this.props.config.footerIcon}
                alt={this.props.config.title}
              />
            )}
          </a>
        </div>

        <section className="copyright">{this.props.config.copyright}</section>
      </footer>
    );
  }
}

module.exports = Footer;
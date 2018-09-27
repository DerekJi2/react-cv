
import React, { Component } from 'react';
import $ from 'jquery';
import Prism from 'prismjs';
import PrismCode from 'react-prism';
import './prism.css';
import './App.css';
import Resume from './Resume';

class App extends Component {
  prismlang;
  resumePanelVisible = false;
  delay = 10;
  resumeService = new Resume();
  
  constructor() {
    super();

    this.prismlang = "";

    this.state = {
      name: '',
      fullStyle: '',
      subStyle: '',

      fullResume: '',
      subResume: '',

      resumeLoaded: false,
    };    
  }

  

  renderStylePanel() {
    return new Promise((resolve, reject) =>{
      let showStyle = async (n) => {
        var style = this.resumeService.style();
        // if (n > 30) { resolve(); return; }
        if (n > style.length) { resolve(); return; }
        var subStyle = style.substr(0, n);
        this.setState({
          name: 'Sir/Madam',
          fullStyle: subStyle,
          subStyle: subStyle
        });
        this.goBottom(".editor-panel");

        if (subStyle.indexOf("highlight") > 0) {
          this.prismlang = "language-css";
          Prism.highlightAll();
        }

        if (subStyle.indexOf("resume editor") > 0) {
          this.resumePanelVisible = true;
        }

        setTimeout(() => {
          showStyle(n+1);
        }, this.delay);
      };

      showStyle(1);
    });
  }

  

  renderResumePanel() {
    return new Promise((resolve, reject) =>{
      let showResume = async (n) => {
        var resume = this.resumeService.resume();
        if (n > resume.length)  { this.setState({resumeLoaded: true}); resolve(); return; }
        var subResume = resume.substr(0, n);
        this.setState({
          fullResume: subResume,
          subResume: subResume
        });
        this.goBottom(".resume-panel");
        setTimeout(() => {
          showResume(n+1);
        }, this.delay);
      };

      showResume(1);
    });
  }

  renderPanels = async () => {
    await this.renderStylePanel();

    await this.renderResumePanel();
  }

  goBottom(panel) {
    $(panel).scrollTop(1000);
  }

  componentDidMount() {
    this.renderPanels();
  } 

  render() {
    return (
      <div className="container">
      <style dangerouslySetInnerHTML={{__html: this.state.fullStyle}}></style>
        <div className="panel editor-panel">
          <pre>
            <PrismCode className={this.prismlang}>
              {this.state.subStyle}
            </PrismCode>
          </pre>
        </div>

        <div className={`panel resume-panel ${this.resumePanelVisible ? "" : "hidden"}`}>
          <pre>
                {this.state.subResume}
                <a href="https://github.com/DerekToop/react-cv" target="_blank" className={this.state.resumeLoaded ? "" : "hidden"}>I am on Github!</a>
          </pre>
        </div>
      </div>
    );
  }
}

export default App;

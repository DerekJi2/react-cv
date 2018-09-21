import * as React from 'react';
import { render } from 'react-dom';
import $ from 'jquery';
import Prism from 'prismjs';
import PrismCode from 'react-prism';
import './Prism.css';
import './App.css';

interface ILocalProps {

}

interface IlocalState {
  fullStyle: string,
  subStyle: string,
}

class App extends React.Component<ILocalProps, IlocalState> {
  constructor(props, state) {
    super(props, state);

    this.state = {
      fullStyle: '',
      subStyle: ''
    };    
  }

  showStyle(n) {
    var style = this.style();
    if (n > style.length) return style; 
    var subStyle = style.substr(0, n);
    this.setState({
      fullStyle: subStyle,
      subStyle: subStyle
    });
    this.goBottom();
    setTimeout(() => {
      this.showStyle(n+1);
    }, 10);
  }

  goBottom() {
    $(".editor-panel").scrollTop(1000);
  }

  componentDidMount() {
    // Prism.highlightAll();   

    this.showStyle(1);
  }

  style() {
    return `
/* 
  My name is Derek. 
  Let's make things interesting. Here we go!
*/

/* Transitions to all elements */
* {
  transition: all .1s;
}
/* Set colors */
html {
  color: rgb(222,222,222); background: rgb(0,64,64);
}
.container{
  height:70vh;
  margin:0;
}

/* Set boders */
.editor-panel {
  padding: .5em;
  border: 1px solid;
  margin: .5em;
  overflow: auto;
  width: 50vw; height: 70vh;
  background: rgb(20,20,20);
}
/* highlight */
.token.selector{ color: rgb(130,150,0); }
.token.property{ color: rgb(190,140,0); }
.token.punctuation{ color: blue; }
.token.function{ color: rgb(40,160,150); }

/* 3D effects. Looking cool */
html{
  perspective: 1000px;
}
.editor-panel {
  position: fixed; left: 0; top: 0;
  -webkit-transition: none;
  transition: none;
  -webkit-transform: rotateY(10deg) translateZ(-100px) ;
          transform: rotateY(10deg) translateZ(-100px) ;
}
`;
  }
  
  render() {
    return (
      <div className="container">
      <style dangerouslySetInnerHTML={{__html: this.state.fullStyle}}></style>
        <div className="editor-panel">
          <pre>
            <PrismCode className="language-css">
              {this.state.subStyle}
            </PrismCode>
          </pre>
        </div>
      </div>
    );
  }
}

export default App;

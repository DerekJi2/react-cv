class Resume {

    style() {
        return `/* Hi, this is Derek. Here's my resume. */

/* Transitions to all elements */
* {
    transition: all 0.05s;
}

/* Set colors */
html {
    color: rgb(222,222,222); background: rgb(0,64,64);
}
.container {
    height:70vh;
    margin:0;
}

/* Setup editor panel */
.editor-panel {
    padding: .5em;
    border: 1px solid;
    margin: .5em;
    overflow: auto;
    width: 50vw; height: 70vh;
    background: rgb(20,20,20);
    font-size: 12px;
}

/* Looks boring. Syntax highlight */
.token.selector { color: rgb(130,150,0); }
.token.property { color: rgb(190,140,0); }
.token.punctuation { color: blue; }
.token.function { color: rgb(40,160,150); }

/* 3D effects. Make it cool */
html {
    perspective: 1000px;
}
.editor-panel {
    position: fixed; left: 0; top: 0;
    -webkit-transition: none;
    transition: none;
    -webkit-transform: rotateY(10deg) translateZ(-100px) ;
            transform: rotateY(10deg) translateZ(-100px) ;
}

/* Create a resume editor */
.resume-panel{
  position: fixed; right: 0; top: 0;
  padding: .5em;  margin: .5em;
  width: 49vw; height: 70vh;
  border: 1px solid;
  background: rgb(200,200,200); color: #222;
  overflow: auto;
  -webkit-transition: none;
  transition: none;
  -webkit-transform: rotateY(-10deg) translateZ(-100px) ;
          transform: rotateY(-10deg) translateZ(-100px) ;
}

/* Here we go. */
`;
    }

    resume() {
        return `Derek Ji (Full-stack .Net Developer, Adelaide)
====

Technologies and Programming Languages
====
Database
--------
    - Mircosoft SQL Server: T-SQL, Stored Procedure, View
    - MySQL

Back-end
--------
    - ASP.NET C#
    - MVC5 & Razor
    - .NET Core
    - RESTful Web API
    - Webforms

Front-end
---------
    - Javascript, JQuery, AJAX
    - Typescript
    - ReactJS, Kendo UI
    - NodeJS
    - Bootstrap
    - CSS, LESS, SCSS

Others
------
    - PHP: CodeIgniter
    - OS: Windows, Linux, Solaris
    - Cloud: Azure
    - Version control: Git, SVN
    
Work Experience
---------------
1. Novaworks Inc.
2. Toop & Toop
3. Lambda Scientific PTY LTD.
4. Huawei Technologies
5. Nortel
6. NetEase Entertainment

Education
---------
1. Master of Computer Science (Ji'Nan University, Guangzhou, China) 
2. Bachelor of Mining Engineering (Northeastern University, Shenyang, China)


Contact Me!
-----------
Email: syfool@hotmail.com
Phone: 0433 7xx 2xx

Source Code
-----------
https://github.com/DerekToop/react-cv

`;
    }
}

export default Resume;
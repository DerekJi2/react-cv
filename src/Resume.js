class Resume {

    style() {
        return `/* Hi, this is Derek. */

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
.resume-panel {
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

/* Here's my introduction. */
`;
    }

    styleForHtml() {
        return `/*
Errr ... it should be HTML version, isn't it?
/*`;
    }

    resume() {
        return `Derek Ji (Adelaide, SA, Australia)
====

  As a full stack .Net developer with 10+ years commercial development experience, 
currently I'm working based on:
  * ASP.NET, C#, MVC5/Razor, .NET Core, Webforms
  * Javascript/JQuery, AJAX & Promise, Bootstrap, CSS, LESS/SCSS, HTML
  * ReactJS, Kendo UI (for AngularJS), NodeJS
  * SQL Server & T-SQL, MySQL
  * Azure
  * GIT, SVN
  * SDLC and Agile/Scrum
  * OOP & S.O.L.I.D. principles

My core strengths include, but are not limited to the following:
   Able to work independently within a team with great problem-solving skills 
    & Can-Do attitudes.
   Excellent Project Management and Conflict Management skills for timely 
    deliveries with high quality.
   Good team player with excellent communication and documentation skills
   Continuously striving to improve all practices, routines and systems.  
    
Work Experience
---------------
1. .Net Developer
        NovaWorks 
2. Senior Software Developer
        Toop & Toop Pty Ltd
3. Technical Lead
        Lambda Scientific PTY LTD.
4. Technical Sales
        Huawei Technologies Co., Ltd.
5. Developer / Team Leader
        Nortel Network Inc. (TSX: NT.TO / NYSE: NT)
6. Developer
        NetEase Entertainment (NASDAQ: NTES)

Education
---------
1. Master of Computer Science (Ji'Nan University, Guangzhou, China) 
2. Bachelor of Mining Engineering (Northeastern University, Shenyang, China)


Contact Me!
-----------
Email: <img src="/img/email.png" class="secure" />
Phone: <img src="/img/phone.png" class="secure" />

Source Code
-----------
<a href="https://github.com/DerekToop/react-cv" target="_blank">I am on Github!</a>
`;
    }
}

export default Resume;
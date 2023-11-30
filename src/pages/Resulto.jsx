import React from 'react';


const Resulto = () => { 
    return (
<div>
  <div className="container">
    <div className="ClockHolder">
      <div className="WeekDays">
        <span>sat</span>
        <span>sun</span>
        <span>mon</span>
        <span>tue</span>
        <span>wed</span>
        <span>thu</span>
        <span>fri</span>
      </div>
      <div className="TimeHolder">
        <div className="TimeOptions">
          <i className="fas fa-clock" data-title="Time" />
          <i className="fas fa-stopwatch" data-title="StopWatch" />
          <i className="far fa-clock" data-title="CountDown" />
        </div>
        <div className="Numbers">
          <div className="NumberHolder H1">
            <span className="d1" />
            <span className="d2" />
            <span className="d3" />
            <span className="d4" />
            <span className="d5" />
            <span className="d6" />
            <span className="d7" />
          </div>
          <div className="NumberHolder H2">
            <span className="d1" />
            <span className="d2" />
            <span className="d3" />
            <span className="d4" />
            <span className="d5" />
            <span className="d6" />
            <span className="d7" />
          </div>
          <span>:</span>
          <div className="NumberHolder M1">
            <span className="d1" />
            <span className="d2" />
            <span className="d3" />
            <span className="d4" />
            <span className="d5" />
            <span className="d6" />
            <span className="d7" />
          </div>
          <div className="NumberHolder M2">
            <span className="d1" />
            <span className="d2" />
            <span className="d3" />
            <span className="d4" />
            <span className="d5" />
            <span className="d6" />
            <span className="d7" />
          </div>
          <span>:</span>
          <div className="NumberHolder S1">
            <span className="d1" />
            <span className="d2" />
            <span className="d3" />
            <span className="d4" />
            <span className="d5" />
            <span className="d6" />
            <span className="d7" />
          </div>
          <div className="NumberHolder S2">
            <span className="d1" />
            <span className="d2" />
            <span className="d3" />
            <span className="d4" />
            <span className="d5" />
            <span className="d6" />
            <span className="d7" />
          </div>
        </div>
        <div className="AlarmInput">
          <input type="number" placeholder="Enter Seconds" />
        </div>
        <div className="TimeFormat">
          <div className="Type">
            <span>12hr</span>
            <span className="active">24hr</span>
          </div>
          <div className="Formats">
            <span>am</span>
            <span>pm</span>
          </div>
          <div className="control">
            <span className="Start active"><i className="fas fa-play" />Start</span>
            <span className="Pause"><i className="fas fa-pause" />Pause</span>
            <span className="Stop active"><i className="fas fa-stop" />Stop</span>
          </div>
        </div></div></div></div>
  <style dangerouslySetInnerHTML={{__html: "\n   \n\n\n\n\n\n\n\n\n  \n  \n\n  \nhtml, body, div, span, applet, object, iframe,\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\na, abbr, acronym, address, big, cite, code,\ndel, dfn, em, img, ins, kbd, q, s, samp,\nsmall, strike, strong, sub, sup, tt, var,\nb, u, i, center,\ndl, dt, dd, ol, ul, li,\nfieldset, form, label, legend,\ntable, caption, tbody, tfoot, thead, tr, th, td,\narticle, aside, canvas, details, embed, \nfigure, figcaption, footer, header, hgroup, \nmenu, nav, output, ruby, section, summary,\ntime, mark, audio, video {\nmargin: 0;\npadding: 0;\nborder: 0;\nfont-size: 100%;\nfont: inherit;\nvertical-align: baseline;\n  width:100%;\n}\narticle, aside, details, figcaption, figure, \nfooter, header, hgroup, menu, nav, section {\ndisplay: block;\n}\nbody {\nbackground: url(https://82.servimg.com/u/f82/19/38/53/40/f-310.jpg) repeat top left;\nfont-family: 'Text Me One', sans-serif;\nline-height: 1;\n}\nol, ul {\nlist-style: none;\n}\nblockquote, q {\nquotes: none;\n}\nblockquote:before, blockquote:after,\nq:before, q:after {\ncontent: '';\ncontent: none;\n}\ntable {\nborder-collapse: collapse;\nborder-spacing: 0;\n}\n.container {\nwidth: 90%;\nmax-width: 1400px;\nposition:standard;\ntop: 50%;\nleft: 50%;\n\ntransform: translate(-50%,-50%);\ndisplay: flex;\njustify-content: center;\n}\n.ClockHolder {\nwidth: 500px;\nbackground-color: #1b252a;\npadding: 30px 50px;\n/* border-radius: 15px; */\nborder: 3px solid #0277bd;\nposition: relative;\n}\n.ClockHolder::after {\ncontent: \" \";\nposition: absolute;\nbottom: -15px;\nleft: 50%;\nwidth: 70%;\nheight: 15px;\nbackground-color: #0277bd;\ntransform: translate(-50%,0);\n/* border-radius: 3px 3px 8px 8px; */\n}\n.ClockHolder::before {\n}\n.WeekDays {\ndisplay: flex;\nwidth: 100%;\njustify-content: space-between;\ntext-transform: uppercase;\ncolor: #646c72;\ncursor: default;\n}\n.WeekDays .active{\ncolor: aliceblue;\nposition: relative;\n}\n.WeekDays .active::after {\ncontent: \"\";\nposition: absolute;\nbottom: -3px;\nleft: 0;\nheight: 2px;\nwidth: 100%;\nbackground-color: aliceblue;\n}\n.Numbers, .TimeHolder {\ndisplay: flex;\njustify-content: space-around;\nwidth: 100%;\npadding: 20px 0 5px;\nalign-items: flex-end;\n}\n.NumberHolder {\nposition: relative;\nwidth: 60px;\nheight: 95px;\n}\n.d1, .d2, .d3, .d4, .d5, .d6, .d7 {\nwidth: 8px;\nheight: 40px;\nbackground-color: azure;\nposition: absolute;\n}\n.d1::after, .d2::after, .d3::after, .d4::after, .d5::after, .d6::after, .d7::after {\ncontent: \"\";\nposition: absolute;\nbackground-color: azure;\nwidth: 7px;\nheight: 7px;\ntop: -7px;\nleft: 0;\nclip-path: polygon(0 0, 0% 100%, 100% 100%);\n}\n.d1::before, .d2::before, .d3::before, .d4::before, .d5::before, .d6::before, .d7::before {\ncontent: \"\";\nposition: absolute;\nbackground-color: azure;\nwidth: 7px;\nheight: 7px;\nbottom: -7px;\nleft: 0;\nclip-path: polygon(0 0, 100% 0, 0 100%);\n}\n.d7 {\ntop: 50%;\nleft: 50%;\ntransform: translate(-50%,-50%) rotate(90deg);\n}\n.d7::before {\nclip-path: polygon(0 0, 100% 0, 50% 100%);\n}\n.d7::after {\nclip-path: polygon(0 100%, 100% 100%, 50% 0);\n}\n@keyframes From01 {\nfrom {\ntop: 0;\nleft: 0;\n}\nto {\ntop: 0;\nleft: calc( 100% - 7px );\ntransform: rotate(180deg);\n}\n}\n@keyframes From02 {\nfrom {\nbottom: 0;\nleft: 0;\n}\nto {\nbottom: 0;\nleft: calc(100% - 7px);\ntransform: rotate(180deg);\n}\n}\n@keyframes From05 {\nfrom {\ntop: -22px;\nleft: 7px;\ntransform: rotate(90deg) translate(-50%,-50%);\n}\nto {\ntop: 0;\nleft: calc(100% - 7px);\ntransform: rotate(180deg);\n}\n}\n@keyframes From06 {\nfrom {\nbottom: -22px;\nleft: 7px;\ntransform: rotate(-90deg) translate(-50%,50%);\n}\nto {\nbottom: 0;\nleft: calc(100% - 7px);\ntransform: rotate(180deg) translate(0,0);\n}\n}\n.TimeOptions {\ndisplay: flex;\nflex-direction: column;\ncolor: aliceblue;\n}\n.Numbers>span {\nfont-size: 100px;\ncolor: aliceblue;\n}\n.NumberHolder {\nmargin: 0 7px;\n}\n.Formats span {\ndisplay: none;\ncolor: aliceblue;\nfont-size: 2em;\ncursor: default;\n}\n.Formats .active {\ndisplay: block;\n}\n.Type {\ndisplay: flex;\nflex-direction: column;\ncolor: #98afaf;\n}\n.Type span {\nposition: relative;\nmargin: 2px 0;\ncursor: pointer;\n}\n.Type span::before {\ncontent: \"\";\nposition: absolute;\nbottom: -1px;\nleft: 0;\nwidth: 0;\nheight: 1px;\nbackground-color: #98afaf;\ntransition: all .4s ease;\n}\n.Type span:hover::before {\nwidth: 100%;\n}\n.TimeFormat {\ndisplay: flex;\nflex-direction: column;\njustify-content: space-between;\nheight: 110px;\n}\n.Type .active {\ncolor: aquamarine;\n}\n.Type .active::after {\ncontent: \"\\f053\";\nfont-weight: 900;\nfont-family: \"Font Awesome 5 Free\";\nposition: absolute;\ntop: 50%;\nright: -20px;\ntransform: translate(-50%,-50%);\n}\n.Type .active::before {\nwidth: 100%;\n}\n.TimeOptions i {\nmargin: 10px 3px;\nposition: relative;\ncursor: pointer;\n}\n.TimeOptions i::after {\ndisplay: block;\nopacity: 0;\npointer-events: none;\nposition: absolute;\nbackground: #fff;\ncolor: #646464;\ncontent: attr(data-title);\nfont-size: 12px;\npadding: 3px 11px;\ntop: -45%;\nleft: 50%;\nwhite-space: nowrap;\ntransform: translate(-50%,-50%) scale3d(.2,.2,1);\ntransition: all .35s ease-in-out;\nline-height: initial;\n/* border-radius: 100px; */\nz-index: 20;\n}\n.control {\ndisplay: none;\ncolor: #f0ffff;\nposition: relative;\nmargin-left: 10px\n}\n.control span {\nposition: relative;\ncursor: pointer;\ntext-align: center;\ndisplay: none;\nmargin-bottom: 20px;\n}\n.control .Pause {\ndisplay: none;\n}\n.control span.active {\ndisplay: block;\n}\n.control span i {\nmargin-bottom: 5px;\n}\n.TimeOptions i:hover::after {\nopacity: 1;\ntransform: translate(-50%,-50%) scale3d(1,1,1);\n}\n.StopWatch .Type, .StopWatch .Formats, .Alarm .Type, .Alarm .Formats {\ndisplay: none;\n}\n.StopWatch .control,.Alarm .control {\ndisplay: block;\n}\n.ClockHolder::before {\ncontent: \"\";\nposition: absolute;\nwidth: 110%;\nheight: 10px;\nbackground-color: #00000077;\nbottom: -25px;\nleft: -5%;\nborder-radius: 100%;\nfilter: blur(5px);\n}\n.AlarmInput {\ndisplay: none;\n}\n.AlarmInput input {\nheight: 100px;\nfont-size: 100px;\nmax-width: 400px;\nfont-family: 'Orbitron', sans-serif;\nbackground-color: #1b252a;\nborder: none;\npadding: 5px 20px;\ncolor: azure;\nletter-spacing: 5px;\nposition: relative;\n}\n.AlarmInput input:focus {\nborder: 1px solid #fff;\n}\n.Alarm .AlarmInput {\ndisplay: block;\n}\n.Alarm .AlarmInput.DisNone {\ndisplay: none;\n}\n.AlarmInput input::-webkit-input-placeholder {\nfont-size: 30px;\n}\n.AlarmInput input::-moz-placeholder {\nfont-size: 30px;\n}\n.AlarmInput input:-ms-input-placeholder {\nfont-size: 30px;\n}\n.AlarmInput input:-moz-placeholder {\nfont-size: 30px;\n}\n.show1 .d1 {\nanimation: From01 .35s ease 1 forwards;\n}\n.show1 .d2 {\nanimation: From02 .35s ease 1 forwards;\n}\n.show1 .d3 {\ntop: 0;\nleft: calc( 100% - 7px );\ntransform: rotate(180deg);\n}\n.show1 .d4 {\nbottom: 0;\nleft: calc(100% - 7px);\ntransform: rotate(180deg);\n}\n.show1 .d5 {\nanimation: From05 .35s ease 1 forwards;\n}\n.show1 .d6 {\nanimation: From06 .35s ease 1 forwards;\n}\n.show1 .d7 {\nopacity: 0;\n}\n.show2 .d1 {\ntop: 0;\nleft: calc( 100% - 7px );\ntransform: rotate(180deg);\n}\n.show2 .d2 {\nanimation: From12 .35s ease 1 forwards;\n}\n.show2 .d3 {\ntop: 0;\nleft: calc( 100% - 7px );\ntransform: rotate(180deg);\n}\n.show2 .d4 {\nanimation: From16 .35s ease 1 forwards;\n}\n.show2 .d5 {\nanimation: From15 .35s ease 1 forwards;\n}\n.show2 .d6 {\nanimation: From16 .35s ease 1 forwards;\n}\n.show2 .d7 {\nopacity: 1;\ntransition: opacity .35s ease;\n}\n@keyframes From12 {\nfrom {\nbottom: 0;\nleft: calc(100% - 7px);\ntransform: rotate(180deg);\n}\nto {\nbottom: 0;\nleft: 0;\n}\n}\n@keyframes From15 {\nfrom {\ntop: 0;\nleft: calc(100% - 7px);\ntransform: rotate(180deg);\n}\nto {\ntop: -22px;\nleft: 7px;\ntransform: rotate(90deg) translate(-50%,-50%);\n}\n}\n@keyframes From16 {\nfrom {\nbottom: 0;\nleft: calc(100% - 7px);\ntransform: rotate(180deg) translate(0,0);\n}\nto {\nbottom: -22px;\nleft: 7px;\ntransform: rotate(-90deg) translate(-50%,50%);\n}\n}\n.show3 .d1 {\ntop: 0;\nleft: calc( 100% - 7px );\ntransform: rotate(180deg);\n}\n.show3 .d2 {\nanimation: From22 .35s ease 1 forwards;\n}\n.show3 .d3 {\ntop: 0;\nright: 0;\ntransform: rotate(180deg);\n}\n.show3 .d4 {\nanimation: From24 .35s ease 1 forwards;\n}\n.show3 .d5 {\ntop: -22px;\nleft: 7px;\ntransform: rotate(90deg) translate(-50%,-50%);\n}\n.show3 .d6 {\nanimation: From24 .35s ease 1 forwards;\n}\n.show3 .d7 {\nopacity: 1;\ntransition: opacity .35s ease;\n}\n@keyframes From22 {\nfrom {\nbottom: 0;\nleft: 0;\n}\nto {\nbottom: -22px;\nleft: 7px;\ntransform: rotate(-90deg) translate(-50%,50%);\n}\n}\n@keyframes From24 {\nfrom {\nbottom: -22px;\nleft: 7px;\ntransform: rotate(-90deg) translate(-50%,50%);\n}\nto {\nbottom: 0;\nright: 0;\ntransform: rotate(180deg) translate(0,0);\n}\n}\n.show4 .d1 {\nanimation: From31 .35s ease 1 forwards;\n}\n.show4 .d2 {\ntop: 0;\nright: 0;\ntransform: rotate(180deg);\n}\n.show4 .d3 {\ntop: 0;\nright: 0;\ntransform: rotate(180deg);\n}\n.show4 .d4 {\nbottom: 0;\nright: 0;\ntransform: rotate(180deg);\n}\n.show4 .d5 {\nanimation: From31 .35s ease 1 forwards;\n}\n.show4 .d6 {\nanimation: From36 .35s ease 1 forwards;\n}\n.show4 .d7 {\nopacity: 1;\ntransition: opacity .35s ease;\n}\n@keyframes From31 {\nfrom {\ntop: -22px;\nleft: 7px;\ntransform: rotate(90deg) translate(-50%,-50%);\n}\nto {\ntop: 0;\nleft: 0;\n}\n}\n@keyframes From32 {\nfrom {\nbottom: 0;\nleft: 0;\n}\nto {\nbottom: -22px;\nleft: 7px;\ntransform: rotate(-90deg) translate(-50%,50%);\n}\n}\n@keyframes From36 {\nfrom {\nbottom: -22px;\nleft: 7px;\ntransform: rotate(-90deg) translate(-50%,50%);\n}\nto {\nbottom: 0;\nright: 0;\ntransform: rotate(180deg) translate(0,0);\n}\n}\n.show5 .d1 {\ntop: 0;\nleft: 0;\n}\n.show5 .d2 {\nbottom: 0;\nright: 0;\ntransform: rotate(180deg);\n}\n.show5 .d3 {\nanimation: From43 .35s ease 1 forwards;\n}\n.show5 .d4 {\nbottom: 0;\nright: 0;\ntransform: rotate(180deg);\n}\n.show5 .d5 {\nanimation: From43 .35s ease 1 forwards;\n}\n.show5 .d6 {\nanimation: From46 .35s ease 1 forwards;\n}\n.show5 .d7 {\nopacity: 1;\ntransition: opacity .35s ease;\n}\n@keyframes From43 {\nfrom {\ntop: 0;\nright: 0;\ntransform: rotate(180deg) translate(0,0);\n}\nto {\ntop: -22px;\nleft: 7px;\ntransform: rotate(90deg) translate(-50%,-50%);\n}\n}\n@keyframes From42 {\nfrom {\nbottom: 0;\nleft: 0;\n}\nto {\nbottom: -22px;\nleft: 7px;\ntransform: rotate(-90deg) translate(-50%,50%);\n}\n}\n@keyframes From46 {\nfrom {\nbottom: 0;\nright: 0;\ntransform: rotate(180deg) translate(0,0);\n}\nto {\nbottom: -22px;\nleft: 7px;\ntransform: rotate(-90deg) translate(-50%,50%);\n}\n}\n.show6 .d1 {\ntop: 0;\nleft: 0;\n}\n.show6 .d2 {\nanimation: From52 .35s ease 1 forwards;\n}\n.show6 .d3 {\nbottom: 0;\nright: 0;\ntransform: rotate(180deg);\n}\n.show6 .d4 {\nbottom: 0;\nright: 0;\ntransform: rotate(180deg);\n}\n.show6 .d5 {\ntop: -22px;\nleft: 7px;\ntransform: rotate(90deg) translate(-50%,-50%);\n}\n.show6 .d6 {\nbottom: -22px;\nleft: 7px;\ntransform: rotate(-90deg) translate(-50%,50%);\n}\n.show6 .d7 {\nopacity: 1;\ntransition: opacity .35s ease;\n}\n@keyframes From52 {\nfrom {\nbottom: -22px;\nleft: 7px;\ntransform: rotate(-90deg) translate(-50%,50%);\n}\nto {\nbottom: 0;\nleft: 0;\n}\n}\n.show7 .d1 {\nanimation: From61 .35s ease 1 forwards;\n}\n.show7 .d2 {\nanimation: From62 .35s ease 1 forwards;\n}\n.show7 .d3 {\nanimation: From63 .35s ease 1 forwards;\n}\n.show7 .d4 {\nbottom: 0;\nright: 0;\ntransform: rotate(180deg);\n}\n.show7 .d5 {\ntop: -22px;\nleft: 7px;\ntransform: rotate(90deg) translate(-50%,-50%);\n}\n.show7 .d6 {\nanimation: From66 .35s ease 1 forwards;\n}\n.show7 .d7 {\nopacity: 0;\ntransition: opacity .35s ease;\n}\n@keyframes From61 {\nfrom {\ntop: 0;\nleft: 0;\n}\nto {\ntop: 0;\nright: 0;\ntransform: rotate(180deg);\n}\n}\n@keyframes From63 {\nfrom {\ntop: -22px;\nleft: 7px;\ntransform: rotate(90deg) translate(-50%,-50%);\n}\nto {\ntop: 0;\nright: 0;\ntransform: rotate(180deg);\n}\n}\n@keyframes From62 {\nfrom {\nbottom: 0;\nleft: 0;\n}\nto {\nbottom: 0;\nright: 0;\ntransform: rotate(180deg);\n}\n}\n@keyframes From66 {\nfrom {\nbottom: -22px;\nleft: 7px;\ntransform: rotate(-90deg) translate(-50%,50%);\n}\nto {\nbottom: 0;\nright: 0;\ntransform: rotate(180deg);\n}\n}\n.show8 .d1 {\nanimation: From71 .35s ease 1 forwards;\n}\n.show8 .d2 {\nanimation: From72 .35s ease 1 forwards;\n}\n.show8 .d3 {\ntop: 0;\nright: 0;\ntransform: rotate(180deg);\n}\n.show8 .d4 {\nbottom: 0;\nright: 0;\ntransform: rotate(180deg);\n}\n.show8 .d5 {\ntop: -22px;\nleft: 7px;\ntransform: rotate(90deg) translate(-50%,-50%);\n}\n.show8 .d6 {\nanimation: From76 .35s ease 1 forwards;\n}\n.show8 .d7 {\nopacity: 1;\ntransition: opacity .35s ease;\n}\n@keyframes From71 {\nfrom {\ntop: -22px;\nleft: 7px;\ntransform: rotate(90deg) translate(-50%,-50%);\n}\nto {\ntop: 0;\nleft: 0;\n}\n}\n@keyframes From72 {\nfrom {\nbottom: 0;\nright: 0;\ntransform: rotate(180deg);\n}\nto {\nbottom: 0;\nleft: 0;\n}\n}\n@keyframes From76 {\nfrom {\nbottom: 0;\nright: 0;\ntransform: rotate(180deg);\n}\nto {\nbottom: -22px;\nleft: 7px;\ntransform: rotate(-90deg) translate(-50%,50%);\n}\n}\n.show9 .d1 {\ntop: 0;\nleft: 0;\n}\n.show9 .d2 {\nanimation: From82 .35s ease 1 forwards;\n}\n.show9 .d3 {\ntop: 0;\nright: 0;\ntransform: rotate(180deg);\n}\n.show9 .d4 {\nbottom: 0;\nright: 0;\ntransform: rotate(180deg);\n}\n.show9 .d5 {\ntop: -22px;\nleft: 7px;\ntransform: rotate(90deg) translate(-50%,-50%);\n}\n.show9 .d6 {\nbottom: -22px;\nleft: 7px;\ntransform: rotate(-90deg) translate(-50%,50%);\n}\n.show9 .d7 {\nopacity: 1;\ntransition: opacity .35s ease;\n}\n@keyframes From82 {\nfrom {\nbottom: 0;\nleft: 0;\n}\nto {\nbottom: -22px;\nleft: 7px;\ntransform: rotate(-90deg) translate(-50%,50%);\n}\n}\n.show0 .d1 {\ntop: 0;\nleft: 0;\n}\n.show0 .d2 {\nanimation: From92 .35s ease 1 forwards;\n}\n.show0 .d3 {\ntop: 0;\nright: 0;\ntransform: rotate(180deg);\n}\n.show0 .d4 {\nbottom: 0;\nright: 0;\ntransform: rotate(180deg);\n}\n.show0 .d5 {\ntop: -22px;\nleft: 7px;\ntransform: rotate(90deg) translate(-50%,-50%);\n}\n.show0 .d6 {\nbottom: -22px;\nleft: 7px;\ntransform: rotate(-90deg) translate(-50%,50%);\n}\n.show0 .d7 {\nopacity: 0;\ntransition: opacity .35s ease;\n}\n@keyframes From92 {\nfrom {\nbottom: -22px;\nleft: 7px;\ntransform: rotate(-90deg) translate(-50%,50%);\n}\nto {\nbottom: 0;\nleft: 0;\n}\n}\n.BgAnimation {\nanimation: Colors .35s ease infinite alternate;\n}\n@keyframes Colors {\n0% {\nbackground-color: #7b1fa2;\n}\n100% {\nbackground-color: red;\n}\n}" }} />
</div>
      
                      
    );
  
};

export default Resulto;




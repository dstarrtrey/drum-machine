(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,function(e,t,a){e.exports=a.p+"static/media/friggenheavymate.7655577d.wav"},,,,,,function(e,t,a){e.exports=a.p+"static/media/nownownow.d89c1ba1.wav"},function(e,t,a){e.exports=a.p+"static/media/speakingofimdb.d1f20e1d.wav"},function(e,t,a){e.exports=a.p+"static/media/threemenandamovie.bf85d312.wav"},function(e,t,a){e.exports=a.p+"static/media/premiumpickles.a66d20d9.wav"},function(e,t,a){e.exports=a.p+"static/media/for.bab31c38.wav"},function(e,t,a){e.exports=a.p+"static/media/yourtickles.526518ce.wav"},function(e,t,a){e.exports=a.p+"static/media/buybuybuy.3fdbb8c1.wav"},function(e,t,a){e.exports=a.p+"static/media/mouseteeth.3a121671.wav"},,,function(e,t,a){e.exports=a(18)},function(e,t,a){"use strict";a.r(t);var n=a(3),o=a(4),i=a(15),c=a(5),u=a(16),r=a(0),d=a.n(r),l=a(6),s=a.n(l),m=(a(24),a(7)),p=a.n(m),f=a(8),k=a.n(f),v=a(9),E=a.n(v),h=a(10),y=a.n(h),b=a(11),g=a.n(b),S=a(12),B=a.n(S),C=a(13),w=a.n(C),N=a(14),x=a.n(N),O=a(1),M=a.n(O);function T(e){return d.a.createElement("button",{onClick:function(){console.log("keyBind: ",e.keyBind);var t=document.getElementById(e.keyBind);t.currentTime=0,t.volume=JSON.parse(e.vol),t.play(),console.log("Source: ",M.a),console.log("Pad props: ",e),e.buttonClick(e.audioName)},id:e.audio,className:"drum-pad "+e.keyBind},e.keyBind,d.a.createElement("audio",{id:e.keyBind,className:"clip",src:e.audio},d.a.createElement("source",{src:e.audio}),"Your browser does not support the ",d.a.createElement("code",null,"audio")," element."))}function I(e){return d.a.createElement("h2",{id:"display"},e.text)}var P=function(e){function t(e){var a;return Object(n.a)(this,t),(a=Object(i.a)(this,Object(c.a)(t).call(this,e))).state={pressed:"The Official Podcast Soundboard (Made Using React)"},a}return Object(u.a)(t,e),Object(o.a)(t,[{key:"changeState",value:function(e){console.log("Event: ",e),console.log("This: ",this),this.setState({pressed:e})}},{key:"render",value:function(){var e=this;return d.a.createElement("div",{id:"drum-machine",className:"drum-machine"},d.a.createElement("div",null,d.a.createElement("h1",null,"Three Men and a Movie Soundboard")),d.a.createElement("div",null,d.a.createElement(I,{text:this.state.pressed})),d.a.createElement("div",{className:"pads"},d.a.createElement(T,{buttonClick:function(t){return e.changeState(t)},vol:"1.0",keyBind:"Q",audio:p.a,audioName:"NOW NOW NOW"}),d.a.createElement(T,{buttonClick:function(t){return e.changeState(t)},vol:"1.0",keyBind:"W",audio:k.a,audioName:"Speaking of IMDB"}),d.a.createElement(T,{buttonClick:function(t){return e.changeState(t)},vol:"0.8",keyBind:"E",audio:E.a,audioName:"Three Men and a Movie"}),d.a.createElement(T,{buttonClick:function(t){return e.changeState(t)},vol:"0.6",keyBind:"A",audio:y.a,audioName:"Premium Pickles"}),d.a.createElement(T,{buttonClick:function(t){return e.changeState(t)},vol:"0.6",keyBind:"S",audio:g.a,audioName:"For"}),d.a.createElement(T,{buttonClick:function(t){return e.changeState(t)},vol:"0.6",keyBind:"D",audio:B.a,audioName:"Your Tickles"}),d.a.createElement(T,{buttonClick:function(t){return e.changeState(t)},vol:"1.0",keyBind:"Z",audio:w.a,audioName:"BUY THESE PICKLES PLEASE"}),d.a.createElement(T,{buttonClick:function(t){return e.changeState(t)},vol:"0.8",keyBind:"X",audio:x.a,audioName:"Mouse Teeth"}),d.a.createElement(T,{buttonClick:function(t){return e.changeState(t)},vol:"0.2",keyBind:"C",audio:M.a,audioName:"FriggenHeavyMate MIDI"})),d.a.createElement("footer",null,"\xa9 David L. Starr 2019"))}}]),t}(d.a.Component);document.addEventListener("keyup",function(e){document.getElementById(String.fromCharCode(e.keyCode))&&document.getElementsByClassName(String.fromCharCode(e.keyCode))[0].click()}),s.a.render(d.a.createElement(P,null),document.getElementById("root"))},,,,,,function(e,t,a){}],[[17,1,2]]]);
//# sourceMappingURL=main.373585dd.chunk.js.map
(this.webpackJsonpmeet=this.webpackJsonpmeet||[]).push([[0],{39:function(e,t,n){},40:function(e,t,n){},61:function(e,t,n){},63:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),o=n(31),i=n.n(o),s=(n(39),n(3)),c=n(7),u=n(5),l=n(4),d=(n(40),n(67)),m=n(0),h=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(){var e;Object(s.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={collapsed:!0},e.handleClick=function(){e.setState({collapsed:!e.state.collapsed})},e}return Object(c.a)(n,[{key:"render",value:function(){var e=this.props.event,t=this.state.collapsed;return Object(m.jsxs)("div",{className:"event",children:[Object(m.jsx)("h2",{className:"summary",children:e.summary}),Object(m.jsxs)("p",{className:"start-date",children:[e.start.dateTime," (",e.start.timeZone,")"]}),Object(m.jsxs)("p",{className:"location",children:["@",e.summary," | ",e.location]}),Object(m.jsx)(d.a,{variant:"primary",className:"".concat(t?"show":"hide","-details-btn"),onClick:this.handleClick,children:t?"Show Details":"Hide Details"}),!t&&Object(m.jsxs)("div",{className:"extra-details ".concat(this.state.collapsed?"hide":"show"),children:[Object(m.jsx)("h3",{children:"About the event:"}),Object(m.jsx)("a",{href:e.htmlLink,role:"noopener",target:"_blank",children:"See details on Google Calendar"}),Object(m.jsx)("p",{className:"event-description",children:e.description})]})]})}}]),n}(a.Component),p=h,f=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(){return Object(s.a)(this,n),t.apply(this,arguments)}return Object(c.a)(n,[{key:"render",value:function(){var e=this.props.events;return Object(m.jsx)("ul",{className:"EventList",children:e.map((function(e){return Object(m.jsx)("li",{children:Object(m.jsx)(p,{event:e})},e.id)}))})}}]),n}(a.Component),v=f,g=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(e){var a;return Object(s.a)(this,n),(a=t.call(this,e)).getStyle=function(){return{background:a.background}},a.background=null,a.type=null,a}return Object(c.a)(n,[{key:"render",value:function(){return Object(m.jsx)("div",{className:"Alert ".concat(this.props.text?"visible":"unvisible"," ").concat(this.type),children:Object(m.jsx)("p",{style:this.getStyle(),children:this.props.text})})}}]),n}(a.Component),b=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(e){var a;return Object(s.a)(this,n),(a=t.call(this,e)).background="#0d6efd",a.type="info",a}return n}(g),w=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(e){var a;return Object(s.a)(this,n),(a=t.call(this,e)).background="#e91e63",a.type="error",a}return n}(g),y=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(){var e;Object(s.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={query:"",suggestions:[],showSuggestions:void 0},e.handleInputChanged=function(t){var n=t.target.value;e.setState({showSuggestions:!0});var a=e.props.locations.filter((function(e){return e.toUpperCase().indexOf(n.toUpperCase())>-1}));if(0!==a.length)return e.setState({query:n,suggestions:a,infoText:""});e.setState({query:n,infoText:"We can not find the city you are looking for. Please try another city"})},e.handleItemClicked=function(t){e.setState({query:t,showSuggestions:!1}),e.props.updateEvents(t)},e}return Object(c.a)(n,[{key:"render",value:function(){var e=this;return Object(m.jsxs)("div",{className:"CitySearch",children:[Object(m.jsx)("p",{children:"Search For City"}),Object(m.jsx)(b,{text:this.state.infoText}),Object(m.jsx)("input",{type:"text",className:"city",value:this.state.query,onChange:this.handleInputChanged,onFocus:function(){e.setState({showSuggestions:!0})}}),Object(m.jsxs)("ul",{className:"suggestions",style:this.state.showSuggestions?{}:{display:"none"},children:[this.state.suggestions.map((function(t){return Object(m.jsx)("li",{onClick:function(){return e.handleItemClicked(t)},children:t},t)})),Object(m.jsx)("li",{onClick:function(){return e.handleItemClicked("all")},children:Object(m.jsx)("b",{children:"See all cities"})})]})]})}}]),n}(a.Component),j=y,k=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(){var e;Object(s.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={numberOfEvents:32,errorText:""},e.updateEventCount=function(t){if(t<=0)return e.setState({numberOfEvents:0,errorText:"Please enter a valid number"});e.setState({numberOfEvents:t,errorText:""}),e.props.updateEventCount(t)},e}return Object(c.a)(n,[{key:"render",value:function(){var e=this;return Object(m.jsxs)("div",{className:"number-of-events",children:[Object(m.jsx)("p",{className:"resultNr",children:"Number of results:"}),Object(m.jsx)("input",{type:"number",className:"eventNumber",value:this.props.numberOfEvents,onChange:function(t){return e.updateEventCount(t.target.value)}}),Object(m.jsx)(w,{text:this.state.errorText})]})}}]),n}(a.Component),T=k,Z=n(64),O=n(65),x=n(66),S=(n(42),n(10)),M=n.n(S),E=n(14),q=n(33),W=[{kind:"calendar#event",etag:'"3181161784712000"',id:"4eahs9ghkhrvkld72hogu9ph3e_20200519T140000Z",status:"confirmed",htmlLink:"https://www.google.com/calendar/event?eid=NGVhaHM5Z2hraHJ2a2xkNzJob2d1OXBoM2VfMjAyMDA1MTlUMTQwMDAwWiBmdWxsc3RhY2t3ZWJkZXZAY2FyZWVyZm91bmRyeS5jb20",created:"2020-05-19T19:17:46.000Z",updated:"2020-05-27T12:01:32.356Z",summary:"Learn JavaScript",description:"Have you wondered how you can ask Google to show you the list of the top ten must-see places in London? And how Google presents you the list? How can you submit the details of an application? Well, JavaScript is doing these. :) \n\nJavascript offers interactivity to a dull, static website. Come, learn JavaScript with us and make those beautiful websites.",location:"London, UK",creator:{email:"fullstackwebdev@careerfoundry.com",self:!0},organizer:{email:"fullstackwebdev@careerfoundry.com",self:!0},start:{dateTime:"2020-05-19T16:00:00+02:00",timeZone:"Europe/Berlin"},end:{dateTime:"2020-05-19T17:00:00+02:00",timeZone:"Europe/Berlin"},recurringEventId:"4eahs9ghkhrvkld72hogu9ph3e",originalStartTime:{dateTime:"2020-05-19T16:00:00+02:00",timeZone:"Europe/Berlin"},iCalUID:"4eahs9ghkhrvkld72hogu9ph3e@google.com",sequence:0,reminders:{useDefault:!0},eventType:"default"},{kind:"calendar#event",etag:'"3181159875584000"',id:"3qtd6uscq4tsi6gc7nmmtpqlct_20200520T120000Z",status:"confirmed",htmlLink:"https://www.google.com/calendar/event?eid=M3F0ZDZ1c2NxNHRzaTZnYzdubW10cHFsY3RfMjAyMDA1MjBUMTIwMDAwWiBmdWxsc3RhY2t3ZWJkZXZAY2FyZWVyZm91bmRyeS5jb20",created:"2020-05-19T19:14:30.000Z",updated:"2020-05-27T11:45:37.792Z",summary:"React is Fun",description:"Love HTML, CSS, and JS? Want to become a cool front-end developer? \n\nReact is one of the most popular front-end frameworks. There is a huge number of job openings for React developers in most cities. \n\nJoin us in our free React training sessions and give your career a new direction. ",location:"Berlin, Germany",creator:{email:"fullstackwebdev@careerfoundry.com",self:!0},organizer:{email:"fullstackwebdev@careerfoundry.com",self:!0},start:{dateTime:"2020-05-20T14:00:00+02:00",timeZone:"Europe/Berlin"},end:{dateTime:"2020-05-20T15:00:00+02:00",timeZone:"Europe/Berlin"},recurringEventId:"3qtd6uscq4tsi6gc7nmmtpqlct",originalStartTime:{dateTime:"2020-05-20T14:00:00+02:00",timeZone:"Europe/Berlin"},iCalUID:"3qtd6uscq4tsi6gc7nmmtpqlct@google.com",sequence:0,reminders:{useDefault:!0},eventType:"default"},{kind:"calendar#event",etag:'"3181161784712000"',id:"4eahs9ghkhrvkld72hogu9ph3e_20200521T140000Z",status:"confirmed",htmlLink:"https://www.google.com/calendar/event?eid=NGVhaHM5Z2hraHJ2a2xkNzJob2d1OXBoM2VfMjAyMDA1MjFUMTQwMDAwWiBmdWxsc3RhY2t3ZWJkZXZAY2FyZWVyZm91bmRyeS5jb20",created:"2020-05-19T19:17:46.000Z",updated:"2020-05-27T12:01:32.356Z",summary:"Learn JavaScript",description:"Have you wondered how you can ask Google to show you the list of the top ten must-see places in London? And how Google presents you the list? How can you submit the details of an application? Well, JavaScript is doing these. :) \n\nJavascript offers interactivity to a dull, static website. Come, learn JavaScript with us and make those beautiful websites.",location:"London, UK",creator:{email:"fullstackwebdev@careerfoundry.com",self:!0},organizer:{email:"fullstackwebdev@careerfoundry.com",self:!0},start:{dateTime:"2020-05-21T16:00:00+02:00",timeZone:"Europe/Berlin"},end:{dateTime:"2020-05-21T17:00:00+02:00",timeZone:"Europe/Berlin"},recurringEventId:"4eahs9ghkhrvkld72hogu9ph3e",originalStartTime:{dateTime:"2020-05-21T16:00:00+02:00",timeZone:"Europe/Berlin"},iCalUID:"4eahs9ghkhrvkld72hogu9ph3e@google.com",sequence:0,reminders:{useDefault:!0},eventType:"default"},{kind:"calendar#event",etag:'"3181159875584000"',id:"3qtd6uscq4tsi6gc7nmmtpqlct_20200522T120000Z",status:"confirmed",htmlLink:"https://www.google.com/calendar/event?eid=M3F0ZDZ1c2NxNHRzaTZnYzdubW10cHFsY3RfMjAyMDA1MjJUMTIwMDAwWiBmdWxsc3RhY2t3ZWJkZXZAY2FyZWVyZm91bmRyeS5jb20",created:"2020-05-19T19:14:30.000Z",updated:"2020-05-27T11:45:37.792Z",summary:"React is Fun",description:"Love HTML, CSS, and JS? Want to become a cool front-end developer? \n\nReact is one of the most popular front-end frameworks. There is a huge number of job openings for React developers in most cities. \n\nJoin us in our free React training sessions and give your career a new direction. ",location:"Berlin, Germany",creator:{email:"fullstackwebdev@careerfoundry.com",self:!0},organizer:{email:"fullstackwebdev@careerfoundry.com",self:!0},start:{dateTime:"2020-05-22T14:00:00+02:00",timeZone:"Europe/Berlin"},end:{dateTime:"2020-05-22T15:00:00+02:00",timeZone:"Europe/Berlin"},recurringEventId:"3qtd6uscq4tsi6gc7nmmtpqlct",originalStartTime:{dateTime:"2020-05-22T14:00:00+02:00",timeZone:"Europe/Berlin"},iCalUID:"3qtd6uscq4tsi6gc7nmmtpqlct@google.com",sequence:0,reminders:{useDefault:!0},eventType:"default"},{kind:"calendar#event",etag:'"3181161784712000"',id:"4eahs9ghkhrvkld72hogu9ph3e_20200523T140000Z",status:"confirmed",htmlLink:"https://www.google.com/calendar/event?eid=NGVhaHM5Z2hraHJ2a2xkNzJob2d1OXBoM2VfMjAyMDA1MjNUMTQwMDAwWiBmdWxsc3RhY2t3ZWJkZXZAY2FyZWVyZm91bmRyeS5jb20",created:"2020-05-19T19:17:46.000Z",updated:"2020-05-27T12:01:32.356Z",summary:"Learn JavaScript",description:"Have you wondered how you can ask Google to show you the list of the top ten must-see places in London? And how Google presents you the list? How can you submit the details of an application? Well, JavaScript is doing these. :) \n\nJavascript offers interactivity to a dull, static website. Come, learn JavaScript with us and make those beautiful websites.",location:"London, UK",creator:{email:"fullstackwebdev@careerfoundry.com",self:!0},organizer:{email:"fullstackwebdev@careerfoundry.com",self:!0},start:{dateTime:"2020-05-23T16:00:00+02:00",timeZone:"Europe/Berlin"},end:{dateTime:"2020-05-23T17:00:00+02:00",timeZone:"Europe/Berlin"},recurringEventId:"4eahs9ghkhrvkld72hogu9ph3e",originalStartTime:{dateTime:"2020-05-23T16:00:00+02:00",timeZone:"Europe/Berlin"},iCalUID:"4eahs9ghkhrvkld72hogu9ph3e@google.com",sequence:0,reminders:{useDefault:!0},eventType:"default"},{kind:"calendar#event",etag:'"3181159875584000"',id:"3qtd6uscq4tsi6gc7nmmtpqlct_20200525T120000Z",status:"confirmed",htmlLink:"https://www.google.com/calendar/event?eid=M3F0ZDZ1c2NxNHRzaTZnYzdubW10cHFsY3RfMjAyMDA1MjVUMTIwMDAwWiBmdWxsc3RhY2t3ZWJkZXZAY2FyZWVyZm91bmRyeS5jb20",created:"2020-05-19T19:14:30.000Z",updated:"2020-05-27T11:45:37.792Z",summary:"React is Fun",description:"Love HTML, CSS, and JS? Want to become a cool front-end developer? \n\nReact is one of the most popular front-end frameworks. There is a huge number of job openings for React developers in most cities. \n\nJoin us in our free React training sessions and give your career a new direction. ",location:"Berlin, Germany",creator:{email:"fullstackwebdev@careerfoundry.com",self:!0},organizer:{email:"fullstackwebdev@careerfoundry.com",self:!0},start:{dateTime:"2020-05-25T14:00:00+02:00",timeZone:"Europe/Berlin"},end:{dateTime:"2020-05-25T15:00:00+02:00",timeZone:"Europe/Berlin"},recurringEventId:"3qtd6uscq4tsi6gc7nmmtpqlct",originalStartTime:{dateTime:"2020-05-25T14:00:00+02:00",timeZone:"Europe/Berlin"},iCalUID:"3qtd6uscq4tsi6gc7nmmtpqlct@google.com",sequence:0,reminders:{useDefault:!0},eventType:"default"},{kind:"calendar#event",etag:'"3181161784712000"',id:"4eahs9ghkhrvkld72hogu9ph3e_20200526T140000Z",status:"confirmed",htmlLink:"https://www.google.com/calendar/event?eid=NGVhaHM5Z2hraHJ2a2xkNzJob2d1OXBoM2VfMjAyMDA1MjZUMTQwMDAwWiBmdWxsc3RhY2t3ZWJkZXZAY2FyZWVyZm91bmRyeS5jb20",created:"2020-05-19T19:17:46.000Z",updated:"2020-05-27T12:01:32.356Z",summary:"Learn JavaScript",description:"Have you wondered how you can ask Google to show you the list of the top ten must-see places in London? And how Google presents you the list? How can you submit the details of an application? Well, JavaScript is doing these. :) \n\nJavascript offers interactivity to a dull, static website. Come, learn JavaScript with us and make those beautiful websites.",location:"London, UK",creator:{email:"fullstackwebdev@careerfoundry.com",self:!0},organizer:{email:"fullstackwebdev@careerfoundry.com",self:!0},start:{dateTime:"2020-05-26T16:00:00+02:00",timeZone:"Europe/Berlin"},end:{dateTime:"2020-05-26T17:00:00+02:00",timeZone:"Europe/Berlin"},recurringEventId:"4eahs9ghkhrvkld72hogu9ph3e",originalStartTime:{dateTime:"2020-05-26T16:00:00+02:00",timeZone:"Europe/Berlin"},iCalUID:"4eahs9ghkhrvkld72hogu9ph3e@google.com",sequence:0,reminders:{useDefault:!0},eventType:"default"},{kind:"calendar#event",etag:'"3181159875584000"',id:"3qtd6uscq4tsi6gc7nmmtpqlct_20200527T120000Z",status:"confirmed",htmlLink:"https://www.google.com/calendar/event?eid=M3F0ZDZ1c2NxNHRzaTZnYzdubW10cHFsY3RfMjAyMDA1MjdUMTIwMDAwWiBmdWxsc3RhY2t3ZWJkZXZAY2FyZWVyZm91bmRyeS5jb20",created:"2020-05-19T19:14:30.000Z",updated:"2020-05-27T11:45:37.792Z",summary:"React is Fun",description:"Love HTML, CSS, and JS? Want to become a cool front-end developer? \n\nReact is one of the most popular front-end frameworks. There is a huge number of job openings for React developers in most cities. \n\nJoin us in our free React training sessions and give your career a new direction. ",location:"Berlin, Germany",creator:{email:"fullstackwebdev@careerfoundry.com",self:!0},organizer:{email:"fullstackwebdev@careerfoundry.com",self:!0},start:{dateTime:"2020-05-27T14:00:00+02:00",timeZone:"Europe/Berlin"},end:{dateTime:"2020-05-27T15:00:00+02:00",timeZone:"Europe/Berlin"},recurringEventId:"3qtd6uscq4tsi6gc7nmmtpqlct",originalStartTime:{dateTime:"2020-05-27T14:00:00+02:00",timeZone:"Europe/Berlin"},iCalUID:"3qtd6uscq4tsi6gc7nmmtpqlct@google.com",sequence:0,reminders:{useDefault:!0},eventType:"default"}],C=n(18),J=n.n(C),B=n(21),A=n.n(B),R=function(e){var t=e.map((function(e){return e.location}));return Object(q.a)(new Set(t))},N=function(){var e=Object(E.a)(M.a.mark((function e(t){var n;return M.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://www.googleapis.com/oauth2/v1/tokeninfo?access_token=".concat(t)).then((function(e){return e.json()})).catch((function(e){return e.json()}));case 2:return n=e.sent,e.abrupt("return",n);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),D=function(){var e=Object(E.a)(M.a.mark((function e(){var t,n,a,r;return M.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(J.a.start(),!window.location.href.startsWith("http://localhost")){e.next=4;break}return J.a.done(),e.abrupt("return",W);case 4:return e.next=6,L();case 6:if(!(t=e.sent)){e.next=16;break}return I(),n="https://2tv0as79qc.execute-api.us-east-1.amazonaws.com/dev/api/get-events/"+t,e.next=12,A.a.get(n);case 12:return(a=e.sent).data&&(r=R(a.data.events),localStorage.setItem("lastEvents",JSON.stringify(a.data)),localStorage.setItem("locations",JSON.stringify(r))),J.a.done(),e.abrupt("return",a.data.events);case 16:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),L=function(){var e=Object(E.a)(M.a.mark((function e(){var t,n,a,r,o,i;return M.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=localStorage.getItem("access_token"),e.t0=t,!e.t0){e.next=6;break}return e.next=5,N(t);case 5:e.t0=e.sent;case 6:if(n=e.t0,t&&!n.error){e.next=21;break}return e.next=10,localStorage.removeItem("access_token");case 10:return a=new URLSearchParams(window.location.search),e.next=13,a.get("code");case 13:if(r=e.sent){e.next=20;break}return e.next=17,A.a.get(" https://2tv0as79qc.execute-api.us-east-1.amazonaws.com/dev/api/get-auth-url");case 17:return o=e.sent,i=o.data.authUrl,e.abrupt("return",window.location.href=i);case 20:return e.abrupt("return",r&&H(r));case 21:return e.abrupt("return",t);case 22:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),I=function(){if(window.history.pushState&&window.location.pathname){var e=window.location.protocol+"//"+window.location.host+window.location.pathname;window.history.pushState("","",e)}else e=window.location.protocol+"//"+window.location.host,window.history.pushState("","",e)},H=function(){var e=Object(E.a)(M.a.mark((function e(t){var n,a,r;return M.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=encodeURIComponent(t),e.next=3,fetch("https://2tv0as79qc.execute-api.us-east-1.amazonaws.com/dev/api/token/"+n).then((function(e){return e.json()})).catch((function(e){return e}));case 3:return a=e.sent,(r=a.access_token)&&localStorage.setItem("access_token",r),e.abrupt("return",r);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),F=(n(61),function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(){var e;Object(s.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={events:[],currentLocation:"all",locations:[],numberOfEvents:12},e.updateEvents=function(t){D().then((function(n){var a="all"===t?n:n.filter((function(e){return e.location===t})),r=e.state.numberOfEvents;e.setState({events:a.slice(0,r)})}))},e.updateEventCount=function(t){var n=e.state.currentLocation;e.setState({numberOfEvents:t}),e.updateEvents(n,t)},e}return Object(c.a)(n,[{key:"componentDidMount",value:function(){var e=this;this.mounted=!0,D().then((function(t){e.mounted&&e.setState({events:t,locations:R(t)})}))}},{key:"componentWillUnmount",value:function(){this.mounted=!1}},{key:"render",value:function(){var e=this.state,t=e.locations,n=e.events,a=e.numberOfEvents;return Object(m.jsxs)(Z.a,{className:"App",children:[Object(m.jsxs)(O.a,{children:[Object(m.jsx)(x.a,{className:"CitySearchWrapper",md:6,children:Object(m.jsx)(j,{locations:t,updateEvents:this.updateEvents})}),Object(m.jsx)(x.a,{className:"NumberInputWrapper",md:6,children:Object(m.jsx)(T,{numberOfEvents:a,updateEventCount:this.updateEventCount})})]}),Object(m.jsx)(O.a,{children:Object(m.jsx)(x.a,{md:12,children:Object(m.jsx)(v,{events:n})})})]})}}]),n}(a.Component)),U=F;Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var Y=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,68)).then((function(t){var n=t.getCLS,a=t.getFID,r=t.getFCP,o=t.getLCP,i=t.getTTFB;n(e),a(e),r(e),o(e),i(e)}))};n(32).config("3d98897ac8254210bb16822b6e030af4").install(),i.a.render(Object(m.jsx)(r.a.StrictMode,{children:Object(m.jsx)(U,{})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)})),Y()}},[[63,1,2]]]);
//# sourceMappingURL=main.16933dc6.chunk.js.map
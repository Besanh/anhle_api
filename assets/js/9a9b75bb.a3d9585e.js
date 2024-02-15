"use strict";(self.webpackChunkanh=self.webpackChunkanh||[]).push([[1708],{5788:(e,n,t)=>{t.d(n,{Iu:()=>u,yg:()=>y});var r=t(1504);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var l=r.createContext({}),c=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},u=function(e){var n=c(e.components);return r.createElement(l.Provider,{value:n},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,a=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=c(t),m=i,y=p["".concat(l,".").concat(m)]||p[m]||d[m]||a;return t?r.createElement(y,o(o({ref:n},u),{},{components:t})):r.createElement(y,o({ref:n},u))}));function y(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var a=t.length,o=new Array(a);o[0]=m;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s[p]="string"==typeof e?e:i,o[1]=s;for(var c=2;c<a;c++)o[c]=t[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},9340:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>d,frontMatter:()=>a,metadata:()=>s,toc:()=>c});var r=t(5072),i=(t(1504),t(5788));const a={sidebar_position:1},o="API Get Current Weather",s={unversionedId:"tutorial-basics/api-get-current-weather",id:"tutorial-basics/api-get-current-weather",title:"API Get Current Weather",description:"This API can get current weather in 3 cities in VietNam:",source:"@site/docs/tutorial-basics/api-get-current-weather.md",sourceDirName:"tutorial-basics",slug:"/tutorial-basics/api-get-current-weather",permalink:"/anhle_api/docs/tutorial-basics/api-get-current-weather",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Tutorial - Open Weather API",permalink:"/anhle_api/docs/category/tutorial---open-weather-api"},next:{title:"API Get Historical Weather",permalink:"/anhle_api/docs/tutorial-basics/api-get-historical-weather"}},l={},c=[{value:"Request API",id:"request-api",level:2},{value:"Response",id:"response",level:2}],u={toc:c},p="wrapper";function d(e){let{components:n,...t}=e;return(0,i.yg)(p,(0,r.c)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,i.yg)("h1",{id:"api-get-current-weather"},"API Get Current Weather"),(0,i.yg)("p",null,"This API can get current weather in 3 cities in VietNam:"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("inlineCode",{parentName:"li"},"Ha Noi capital")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("inlineCode",{parentName:"li"},"Da Nang city")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("inlineCode",{parentName:"li"},"Ho Chi Minh city"))),(0,i.yg)("h2",{id:"request-api"},"Request API"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-jsx",metastring:'title="Curl"',title:'"Curl"'},"curl --location '{{DOMAIN}}/v1/weather/data'\n")),(0,i.yg)("h2",{id:"response"},"Response"),(0,i.yg)("p",null,"If API call success, you will recieve http status ",(0,i.yg)("strong",{parentName:"p"},(0,i.yg)("inlineCode",{parentName:"strong"},"200 OK"))," and response here"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-jsx",metastring:'title="Response"',title:'"Response"'},'{\n    "data": [\n        {\n            "coord": {\n                "lon": 106.7018,\n                "lat": 10.7758\n            },\n            "weather": [\n                {\n                    "id": 803,\n                    "main": "Clouds",\n                    "description": "broken clouds",\n                    "icon": "04d"\n                }\n            ],\n            "base": "stations",\n            "main": {\n                "temp": 300.1,\n                "feels_like": 304.16,\n                "temp_min": 300.1,\n                "temp_max": 300.1,\n                "pressure": 1005,\n                "humidity": 94\n            },\n            "visibility": 10000,\n            "wind": {\n                "speed": 4.12,\n                "deg": 260\n            },\n            "clouds": {\n                "all": 75\n            },\n            "dt": 1686391121,\n            "sys": {\n                "type": 1,\n                "id": 9314,\n                "country": "VN",\n                "sunrise": 1686349826,\n                "sunset": 1686395688\n            },\n            "timezone": 25200,\n            "id": 1566083,\n            "name": "Ho Chi Minh City",\n            "cod": 200,\n            "name_location": "Ho Chi Minh"\n        },\n        {\n            "coord": {\n                "lon": 105.8466,\n                "lat": 21.0307\n            },\n            "weather": [\n                {\n                    "id": 804,\n                    "main": "Clouds",\n                    "description": "overcast clouds",\n                    "icon": "04d"\n                }\n            ],\n            "base": "stations",\n            "main": {\n                "temp": 308.12,\n                "feels_like": 311.25,\n                "temp_min": 308.12,\n                "temp_max": 308.12,\n                "pressure": 998,\n                "humidity": 43\n            },\n            "visibility": 10000,\n            "wind": {\n                "speed": 0.67,\n                "deg": 32\n            },\n            "clouds": {\n                "all": 93\n            },\n            "dt": 1686390836,\n            "sys": {\n                "type": 1,\n                "id": 9308,\n                "country": "VN",\n                "sunrise": 1686348877,\n                "sunset": 1686397048\n            },\n            "timezone": 25200,\n            "id": 1561096,\n            "name": "Xom Pho",\n            "cod": 200,\n            "name_location": "Ha Noi"\n        },\n        {\n            "coord": {\n                "lon": 108.212,\n                "lat": 16.068\n            },\n            "weather": [\n                {\n                    "id": 803,\n                    "main": "Clouds",\n                    "description": "broken clouds",\n                    "icon": "04d"\n                }\n            ],\n            "base": "stations",\n            "main": {\n                "temp": 304.14,\n                "feels_like": 309.56,\n                "temp_min": 304.14,\n                "temp_max": 304.14,\n                "pressure": 1001,\n                "humidity": 66\n            },\n            "visibility": 10000,\n            "wind": {\n                "speed": 2.06,\n                "deg": 160\n            },\n            "clouds": {\n                "all": 75\n            },\n            "dt": 1686390866,\n            "sys": {\n                "type": 1,\n                "id": 9306,\n                "country": "VN",\n                "sunrise": 1686348885,\n                "sunset": 1686395904\n            },\n            "timezone": 25200,\n            "id": 1583992,\n            "name": "Turan",\n            "cod": 200,\n            "name_location": "Da Nang"\n        }\n    ]\n}\n')))}d.isMDXComponent=!0}}]);
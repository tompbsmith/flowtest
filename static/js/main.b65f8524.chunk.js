(this.webpackJsonpflowtest=this.webpackJsonpflowtest||[]).push([[0],{130:function(e,t,o){},131:function(e,t,o){},311:function(e,t,o){},312:function(e,t,o){"use strict";o.r(t);var n=o(0),a=o.n(n),s=o(23),i=o.n(s),d=(o(130),o.p,o(131),o(4)),r=o(1),l=o(47),g=o(70),c=o.n(g),u=(o(311),new c.a.graphlib.Graph);u.setDefaultEdgeLabel((function(){return{}}));var p=function(e){return e.fitView()},b=function(e,t){return console.log("drag stop",t)},f=function(e,t){return console.log("click",t)},y=[{id:"edges-1",type:"input",data:{label:"Body of Knowledge"},position:{x:250,y:0}},{id:"edges-2",data:{label:"Automotive"},position:{x:350,y:100}},{id:"edges-2a",data:{label:"Manufacturing"},position:{x:100,y:100}},{id:"edges-3",data:{label:"Identifying hazards "},position:{x:250,y:200}},{id:"edges-4",data:{label:"Defining system scope"},position:{x:350,y:300}},{id:"edges-3a",data:{label:"Designign the operating system"},position:{x:150,y:300}},{id:"edges-5",data:{label:"Next steps"},position:{x:250,y:400}},{id:"edges-6",type:"output",data:{label:"Output Information 1"},position:{x:50,y:550}},{id:"edges-7",type:"output",data:{label:"Output Information 2"},position:{x:250,y:550}},{id:"edges-8",type:"output",data:{label:"Output Information 3"},position:{x:450,y:550}},{id:"edges-e1-2",source:"edges-1",target:"edges-2",className:"normal-edge"},{id:"edges-e1-2a",source:"edges-1",target:"edges-2a",type:"normal-edge",label:"additional information"},{id:"edges-e2-3",source:"edges-2",target:"edges-3",type:"step"},{id:"edges-e3-4",source:"edges-3",target:"edges-4",type:"straight",label:"no?"},{id:"edges-e3-3a",source:"edges-3",target:"edges-3a",type:"straight",label:"yes?"},{id:"edges-e3-5",source:"edges-4",target:"edges-5",animated:!0,label:"drawing attention",style:{stroke:"red"}},{id:"edges-e5-6",source:"edges-5",target:"edges-6",label:"warning",labelStyle:{fill:"red",fontWeight:700},arrowHeadType:"arrow"},{id:"edges-e5-7",source:"edges-5",target:"edges-7",label:"consideration",labelBgPadding:[8,4],labelBgBorderRadius:4,labelBgStyle:{fill:"#FFCC00",color:"#fff",fillOpacity:.7},arrowHeadType:"arrowclosed"},{id:"edges-e5-8",source:"edges-5",target:"edges-8",type:"normal-edge"}],j={custom:function(e){var t=e.id,o=e.sourceX,n=e.sourceY,a=e.targetX,s=e.targetY,i=e.sourcePosition,l=e.targetPosition,g=e.style,c=void 0===g?{}:g,u=e.data,p=e.arrowHeadType,b=e.markerEndId,f=Object(d.g)({sourceX:o,sourceY:n,sourcePosition:i,targetX:a,targetY:s,targetPosition:l}),y=Object(d.h)(p,b);return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)("path",{id:t,style:c,className:"react-flow__edge-path",d:f,markerEnd:y}),Object(r.jsx)("text",{children:Object(r.jsx)("textPath",{href:"#".concat(t),style:{fontSize:"12px"},startOffset:"50%",textAnchor:"middle",children:u.text})})]})}},x=function(){var e=Object(n.useState)(y),t=Object(l.a)(e,2),o=t[0],a=t[1];return Object(r.jsxs)(d.f,{elements:o,onElementClick:f,onElementsRemove:function(e){return a((function(t){return Object(d.j)(e,t)}))},onConnect:function(e){return a((function(t){return Object(d.e)(e,t)}))},onNodeDragStop:b,onLoad:p,snapToGrid:!0,edgeTypes:j,children:[Object(r.jsx)(d.c,{}),Object(r.jsx)(d.b,{}),Object(r.jsx)(d.a,{})]},"edges")};var h=function(){return Object(r.jsx)("div",{className:"App",children:Object(r.jsx)("div",{style:{height:800,borderWidth:"1px",borderColor:"black",borderStyle:"solid"},children:Object(r.jsx)(x,{})})})},m=function(e){e&&e instanceof Function&&o.e(3).then(o.bind(null,313)).then((function(t){var o=t.getCLS,n=t.getFID,a=t.getFCP,s=t.getLCP,i=t.getTTFB;o(e),n(e),a(e),s(e),i(e)}))};i.a.render(Object(r.jsx)(a.a.StrictMode,{children:Object(r.jsx)(h,{})}),document.getElementById("root")),m()}},[[312,1,2]]]);
//# sourceMappingURL=main.b65f8524.chunk.js.map
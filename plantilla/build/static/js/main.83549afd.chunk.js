(window.webpackJsonpfront=window.webpackJsonpfront||[]).push([[0],{14:function(e,t,n){e.exports=n(28)},28:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),o=n(11),l=n.n(o),i=n(3),u=n(4),c=n(6),s=n(5),h=n(7),d=n(9),m=n.n(d),f=n(12),v=n(8),b=n(13),p=n.n(b),E=function(e){function t(e){return Object(i.a)(this,t),Object(c.a)(this,Object(s.a)(t).call(this,e))}return Object(h.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){this.usarNavio()}},{key:"componentDidUpdate",value:function(){this.usarNavio()}},{key:"usarNavio",value:function(){console.log("Datos que llegan a Navio",this.props.datos);var e=new p.a(this.elDiv,600),t=this.props.datos;e.data(t),e.addAllAttribs()}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{ref:function(t){return e.elDiv=t}})}}]),t}(a.Component),g=function(e){function t(e){var n;return Object(i.a)(this,t),(n=Object(c.a)(this,Object(s.a)(t).call(this,e))).state={urlBuscar:"",datos:[],tieneUrl:!1,loading:!1},n.traerInfo=n.traerInfo.bind(Object(v.a)(n)),n.hacerPedido=n.hacerPedido.bind(Object(v.a)(n)),n}return Object(h.a)(t,e),Object(u.a)(t,[{key:"onChange",value:function(){return this.setState({urlBuscar:this.linkInput.value})}},{key:"hacerPedido",value:function(e){var t=this,n=this.state.urlBuscar+"?$limit=900&$offset="+e;console.log(n),fetch(n).then((function(e){return e.json()})).then((function(n){if(console.log("Datos",n),0==n.length)t.setState({tieneUrl:!0,loading:!1});else{var a=n,r=t.state.datos.concat(a);t.setState({datos:r}),console.log("Datos en datos",t.state.datos),e+=900,t.hacerPedido(e)}}))}},{key:"traerInfo",value:function(){var e=Object(f.a)(m.a.mark((function e(){return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:0,this.setState({loading:!0}),console.log("Antes del while"),this.hacerPedido(0);case 4:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement("div",null,r.a.createElement("input",{type:"text",ref:function(t){return e.linkInput=t},onInput:this.onChange.bind(this)}),r.a.createElement("button",{type:"button",onClick:this.traerInfo},"Traer datos "),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null),1==this.state.loading?r.a.createElement("h3",null," Espere un momento, estamos cargando la informacion "):r.a.createElement("br",null),1==this.state.tieneUrl?r.a.createElement(E,{datos:this.state.datos}):r.a.createElement("br",null)))}}]),t}(a.Component),k=function(e){function t(e){var n;return Object(i.a)(this,t),(n=Object(c.a)(this,Object(s.a)(t).call(this,e))).state={amount:1},n}return Object(h.a)(t,e),Object(u.a)(t,[{key:"renderizarDatos",value:function(){var e=[];for(var t in 3)e.push(t);return e.map((function(e){return r.a.createElement(g,null)}))}},{key:"onChange",value:function(){this.setState({amount:this.linkInput.value})}},{key:"render",value:function(){for(var e=this,t=[],n=0;n<this.state.amount;n++)t.push(n);return r.a.createElement("div",null,r.a.createElement("h1",null," Visualizacion Datos Datos.gov.co"),r.a.createElement("label",{for:"numFuentes"}," Indique cuantas fuentes quiere consultar:  "),r.a.createElement("input",{id:"numFuentes",type:"text",ref:function(t){return e.linkInput=t},onInput:this.onChange.bind(this)}),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null),this.state.amount>=1&&r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"}),r.a.createElement("table",{className:"table"},r.a.createElement("thead",null,r.a.createElement("tr",null,t.map((function(e){return r.a.createElement("th",null,"Ingrese el link de la informaci\xf3n que desea consultar")})))),r.a.createElement("tbody",null,r.a.createElement("tr",null,t.map((function(e){return r.a.createElement("td",null,r.a.createElement(g,null))})))))))}}]),t}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(k,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[14,1,2]]]);
//# sourceMappingURL=main.83549afd.chunk.js.map
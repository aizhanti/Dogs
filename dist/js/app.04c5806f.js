(function(e){function t(t){for(var r,i,l=t[0],u=t[1],s=t[2],c=0,g=[];c<l.length;c++)i=l[c],Object.prototype.hasOwnProperty.call(a,i)&&a[i]&&g.push(a[i][0]),a[i]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(e[r]=u[r]);d&&d(t);while(g.length)g.shift()();return o.push.apply(o,s||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],r=!0,l=1;l<n.length;l++){var u=n[l];0!==a[u]&&(r=!1)}r&&(o.splice(t--,1),e=i(i.s=n[0]))}return e}var r={},a={app:0},o=[];function i(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=e,i.c=r,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)i.d(n,r,function(t){return e[t]}.bind(null,r));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],u=l.push.bind(l);l.push=t,l=l.slice();for(var s=0;s<l.length;s++)t(l[s]);var d=u;o.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"034f":function(e,t,n){"use strict";var r=n("85ec"),a=n.n(r);a.a},"3a00":function(e,t,n){},"3acb":function(e,t,n){"use strict";var r=n("3a00"),a=n.n(r);a.a},"56d7":function(e,t,n){"use strict";n.r(t);var r=n("2b0e"),a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("router-link"),n("router-view")],1)},o=[],i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"header"}},[e._v(" "+e._s(e.title)+" ")])},l=[],u=n("9530"),s=n.n(u),d={name:"Header",props:{title:String}},c=d,g=(n("3acb"),n("2877")),p=Object(g["a"])(c,i,l,!1,null,"389bd188",null),f=p.exports,m=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},h=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"favDogTable"}},[n("h1",[e._v("My Favorite Dogs")])])}],v={name:"FavDogTable"},b=v,_=Object(g["a"])(b,m,h,!1,null,"086995d4",null),w=_.exports,y={name:"App"},D=y,$=(n("034f"),Object(g["a"])(D,a,o,!1,null,null,null)),S=$.exports,O=n("2c82"),j=n("522d"),x=n("8c4f"),T=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"homepage"}},[n("router-link"),n("router-view"),n("Header",{staticClass:"header",attrs:{title:"Select a dog"}}),n("select",{directives:[{name:"model",rawName:"v-model",value:e.dog,expression:"dog"}],staticClass:"breed-select",on:{change:[function(t){var n=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){var t="_value"in e?e._value:e.value;return t}));e.dog=t.target.multiple?n:n[0]},function(t){return e.onChange()}]}},e._l(e.getDogs,(function(t){return n("option",{key:t.id,domProps:{value:t}},[e._v(" "+e._s(t.name)+" ")])})),0),n("p"),n("img",{attrs:{id:"dog-image",src:e.selectedDog.url,alt:e.selectedDog.name}}),n("p"),n("button",{staticClass:"button button1",on:{click:function(t){return e.addToFav()}}},[e._v("Add to Favorites")]),n("dl",{attrs:{id:"dog-description"}},[n("dt",[e._v("Name")]),n("dd",[e._v(e._s(e.dog.name))]),n("dt",[e._v("Temperament")]),n("dd",[e._v(e._s(e.dog.temperament))]),n("dt",[e._v("Life span")]),n("dd",[e._v(e._s(e.dog.lifeSpan))]),n("dt",[e._v("Height [cm]")]),n("dd",[e._v(e._s(e.dog.height))]),n("dt",[e._v("Weight [kg]")]),n("dd",[e._v(e._s(e.dog.weight))])])],1)},F=[],P={name:"Home",components:{Header:f,FavDogTable:FavDogTable},data(){return{dog:{},selectedDog:{name:"dog"}}},methods:{async onChange(){const e=await this.$apollo.query({query:s.a`query getDogs ($id:Int){
          getDog (id:$id) {
            id
            url
            name
            temperament
            lifeSpan
            height
            weight
          }
        }`,variables:{id:Number(this.dog.id)}});this.selectedDog=e.data.getDog},async addToFav(){await this.$apollo.mutate({mutation:s.a`mutation (
          $id:ID,
          $name: String, 
          $temperament: String, 
          $lifeSpan: String, 
          $height: String, 
          $weight: String, 
          $url: String
          ){
          addNewFavDog (
            id:$id,
            name:$name, 
            temperament:$temperament, 
            lifeSpan:$lifeSpan, 
            height:$height, 
            weight:$weight, 
            url:$url
            ) {
            id
            url
            name
            temperament
            lifeSpan
            height
            weight
          }
        }`,variables:{id:Number(this.selectedDog.id),name:this.selectedDog.name,temperament:this.selectedDog.temperament,lifeSpan:this.selectedDog.lifeSpan,height:this.selectedDog.height,weight:this.selectedDog.weight,url:this.selectedDog.url}})}},apollo:{getDogs:s.a`query {
      getDogs {
        id
        name
        temperament
        lifeSpan
        height
        weight
      }
    }`}},k=P,C=(n("8b71"),Object(g["a"])(k,T,F,!1,null,null,null)),H=C.exports;r["a"].use(x["a"]);var E=new x["a"]({routes:[{path:"/",name:"Home",component:H},{path:"/favdogs",name:"FavDogTable",component:w}]});r["a"].use(j["a"]);const M=new O["a"]({uri:"http://localhost:4000/"}),N=new j["a"]({defaultClient:M});r["a"].config.productionTip=!1,new r["a"]({apolloProvider:N,router:E,render:e=>e(S)}).$mount("#app")},"85ec":function(e,t,n){},"88d7":function(e,t,n){},"8b71":function(e,t,n){"use strict";var r=n("88d7"),a=n.n(r);a.a}});
//# sourceMappingURL=app.04c5806f.js.map
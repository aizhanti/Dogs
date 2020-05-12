(function(e){function t(t){for(var r,o,l=t[0],d=t[1],s=t[2],c=0,p=[];c<l.length;c++)o=l[c],Object.prototype.hasOwnProperty.call(a,o)&&a[o]&&p.push(a[o][0]),a[o]=0;for(r in d)Object.prototype.hasOwnProperty.call(d,r)&&(e[r]=d[r]);u&&u(t);while(p.length)p.shift()();return i.push.apply(i,s||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],r=!0,l=1;l<n.length;l++){var d=n[l];0!==a[d]&&(r=!1)}r&&(i.splice(t--,1),e=o(o.s=n[0]))}return e}var r={},a={app:0},i=[];function o(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=e,o.c=r,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)o.d(n,r,function(t){return e[t]}.bind(null,r));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],d=l.push.bind(l);l.push=t,l=l.slice();for(var s=0;s<l.length;s++)t(l[s]);var u=d;i.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"034f":function(e,t,n){"use strict";var r=n("85ec"),a=n.n(r);a.a},"3a00":function(e,t,n){},"3acb":function(e,t,n){"use strict";var r=n("3a00"),a=n.n(r);a.a},"56d7":function(e,t,n){"use strict";n.r(t);var r=n("2b0e"),a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("Header",{staticClass:"header",attrs:{title:"Select a dog"}}),n("select",{directives:[{name:"model",rawName:"v-model",value:e.dog,expression:"dog"}],staticClass:"breed-select",on:{change:[function(t){var n=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){var t="_value"in e?e._value:e.value;return t}));e.dog=t.target.multiple?n:n[0]},function(t){return e.onChange()}]}},e._l(e.getDogs,(function(t){return n("option",{key:t.id,domProps:{value:t}},[e._v(" "+e._s(t.name)+" ")])})),0),n("p"),n("img",{attrs:{id:"dog-image",src:e.selectedDog.url,alt:"This is a picture of a dog"}}),n("p"),n("b-button",{attrs:{variant:"primary"}},[e._v("Primary")]),n("button",{on:{click:function(t){return e.addToFav()}}},[e._v("Add to Favorites")]),n("dl",{attrs:{id:"dog-description"}},[n("dt",[e._v("Name")]),n("dd",[e._v(e._s(e.dog.name))]),n("dt",[e._v("Temperament")]),n("dd",[e._v(e._s(e.dog.temperament))]),n("dt",[e._v("Life span")]),n("dd",[e._v(e._s(e.dog.lifeSpan))]),n("dt",[e._v("Height [cm]")]),n("dd",[e._v(e._s(e.dog.height))]),n("dt",[e._v("Weight [kg]")]),n("dd",[e._v(e._s(e.dog.weight))])])],1)},i=[],o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"header"}},[e._v(" "+e._s(e.title)+" ")])},l=[],d=n("9530"),s=n.n(d),u={name:"Header",props:{title:String}},c=u,p=(n("3acb"),n("2877")),g=Object(p["a"])(c,o,l,!1,null,"389bd188",null),h=g.exports,f={name:"App",components:{Header:h},data(){return{dog:{},selectedDog:{}}},methods:{async onChange(){const e=await this.$apollo.query({query:s.a`query getDogs ($id:Int){
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
    }`}},m=f,v=(n("034f"),Object(p["a"])(m,a,i,!1,null,null,null)),_=v.exports,b=n("2c82"),y=n("522d");r["a"].use(y["a"]);const w=new b["a"]({uri:"http://localhost:4000/"}),S=new y["a"]({defaultClient:w});r["a"].config.productionTip=!1,new r["a"]({apolloProvider:S,render:e=>e(_)}).$mount("#app")},"85ec":function(e,t,n){}});
//# sourceMappingURL=app.d6e47f50.js.map
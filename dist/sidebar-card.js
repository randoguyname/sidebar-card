const e="undefined"!=typeof window&&null!=window.customElements&&void 0!==window.customElements.polyfillWrapFlushCallback,t=(e,t,i=null)=>{for(;t!==i;){const i=t.nextSibling;e.removeChild(t),t=i}},i=`{{lit-${String(Math.random()).slice(2)}}}`,n=`\x3c!--${i}--\x3e`,s=new RegExp(`${i}|${n}`),r="$lit$";class o{constructor(e,t){this.parts=[],this.element=t;const n=[],o=[],l=document.createTreeWalker(t.content,133,null,!1);let u=0,h=-1,p=0;const{strings:f,values:{length:m}}=e;for(;p<m;){const e=l.nextNode();if(null!==e){if(h++,1===e.nodeType){if(e.hasAttributes()){const t=e.attributes,{length:i}=t;let n=0;for(let e=0;e<i;e++)a(t[e].name,r)&&n++;for(;n-- >0;){const t=f[p],i=d.exec(t)[2],n=i.toLowerCase()+r,o=e.getAttribute(n);e.removeAttribute(n);const a=o.split(s);this.parts.push({type:"attribute",index:h,name:i,strings:a}),p+=a.length-1}}"TEMPLATE"===e.tagName&&(o.push(e),l.currentNode=e.content)}else if(3===e.nodeType){const t=e.data;if(t.indexOf(i)>=0){const i=e.parentNode,o=t.split(s),l=o.length-1;for(let t=0;t<l;t++){let n,s=o[t];if(""===s)n=c();else{const e=d.exec(s);null!==e&&a(e[2],r)&&(s=s.slice(0,e.index)+e[1]+e[2].slice(0,-5)+e[3]),n=document.createTextNode(s)}i.insertBefore(n,e),this.parts.push({type:"node",index:++h})}""===o[l]?(i.insertBefore(c(),e),n.push(e)):e.data=o[l],p+=l}}else if(8===e.nodeType)if(e.data===i){const t=e.parentNode;null!==e.previousSibling&&h!==u||(h++,t.insertBefore(c(),e)),u=h,this.parts.push({type:"node",index:h}),null===e.nextSibling?e.data="":(n.push(e),h--),p++}else{let t=-1;for(;-1!==(t=e.data.indexOf(i,t+1));)this.parts.push({type:"node",index:-1}),p++}}else l.currentNode=o.pop()}for(const e of n)e.parentNode.removeChild(e)}}const a=(e,t)=>{const i=e.length-t.length;return i>=0&&e.slice(i)===t},l=e=>-1!==e.index,c=()=>document.createComment(""),d=/([ \x09\x0a\x0c\x0d])([^\0-\x1F\x7F-\x9F "'>=/]+)([ \x09\x0a\x0c\x0d]*=[ \x09\x0a\x0c\x0d]*(?:[^ \x09\x0a\x0c\x0d"'`<>=]*|"[^"]*|'[^']*))$/;function u(e,t){const{element:{content:i},parts:n}=e,s=document.createTreeWalker(i,133,null,!1);let r=p(n),o=n[r],a=-1,l=0;const c=[];let d=null;for(;s.nextNode();){a++;const e=s.currentNode;for(e.previousSibling===d&&(d=null),t.has(e)&&(c.push(e),null===d&&(d=e)),null!==d&&l++;void 0!==o&&o.index===a;)o.index=null!==d?-1:o.index-l,r=p(n,r),o=n[r]}c.forEach(e=>e.parentNode.removeChild(e))}const h=e=>{let t=11===e.nodeType?0:1;const i=document.createTreeWalker(e,133,null,!1);for(;i.nextNode();)t++;return t},p=(e,t=-1)=>{for(let i=t+1;i<e.length;i++){const t=e[i];if(l(t))return i}return-1};const f=new WeakMap,m=e=>"function"==typeof e&&f.has(e),g={},y={};class b{constructor(e,t,i){this.__parts=[],this.template=e,this.processor=t,this.options=i}update(e){let t=0;for(const i of this.__parts)void 0!==i&&i.setValue(e[t]),t++;for(const e of this.__parts)void 0!==e&&e.commit()}_clone(){const t=e?this.template.element.content.cloneNode(!0):document.importNode(this.template.element.content,!0),i=[],n=this.template.parts,s=document.createTreeWalker(t,133,null,!1);let r,o=0,a=0,c=s.nextNode();for(;o<n.length;)if(r=n[o],l(r)){for(;a<r.index;)a++,"TEMPLATE"===c.nodeName&&(i.push(c),s.currentNode=c.content),null===(c=s.nextNode())&&(s.currentNode=i.pop(),c=s.nextNode());if("node"===r.type){const e=this.processor.handleTextExpression(this.options);e.insertAfterNode(c.previousSibling),this.__parts.push(e)}else this.__parts.push(...this.processor.handleAttributeExpressions(c,r.name,r.strings,this.options));o++}else this.__parts.push(void 0),o++;return e&&(document.adoptNode(t),customElements.upgrade(t)),t}}const v=window.trustedTypes&&trustedTypes.createPolicy("lit-html",{createHTML:e=>e}),_=` ${i} `;class w{constructor(e,t,i,n){this.strings=e,this.values=t,this.type=i,this.processor=n}getHTML(){const e=this.strings.length-1;let t="",s=!1;for(let o=0;o<e;o++){const e=this.strings[o],a=e.lastIndexOf("\x3c!--");s=(a>-1||s)&&-1===e.indexOf("--\x3e",a+1);const l=d.exec(e);t+=null===l?e+(s?_:n):e.substr(0,l.index)+l[1]+l[2]+r+l[3]+i}return t+=this.strings[e],t}getTemplateElement(){const e=document.createElement("template");let t=this.getHTML();return void 0!==v&&(t=v.createHTML(t)),e.innerHTML=t,e}}const x=e=>null===e||!("object"==typeof e||"function"==typeof e),k=e=>Array.isArray(e)||!(!e||!e[Symbol.iterator]);class S{constructor(e,t,i){this.dirty=!0,this.element=e,this.name=t,this.strings=i,this.parts=[];for(let e=0;e<i.length-1;e++)this.parts[e]=this._createPart()}_createPart(){return new M(this)}_getValue(){const e=this.strings,t=e.length-1,i=this.parts;if(1===t&&""===e[0]&&""===e[1]){const e=i[0].value;if("symbol"==typeof e)return String(e);if("string"==typeof e||!k(e))return e}let n="";for(let s=0;s<t;s++){n+=e[s];const t=i[s];if(void 0!==t){const e=t.value;if(x(e)||!k(e))n+="string"==typeof e?e:String(e);else for(const t of e)n+="string"==typeof t?t:String(t)}}return n+=e[t],n}commit(){this.dirty&&(this.dirty=!1,this.element.setAttribute(this.name,this._getValue()))}}class M{constructor(e){this.value=void 0,this.committer=e}setValue(e){e===g||x(e)&&e===this.value||(this.value=e,m(e)||(this.committer.dirty=!0))}commit(){for(;m(this.value);){const e=this.value;this.value=g,e(this)}this.value!==g&&this.committer.commit()}}class C{constructor(e){this.value=void 0,this.__pendingValue=void 0,this.options=e}appendInto(e){this.startNode=e.appendChild(c()),this.endNode=e.appendChild(c())}insertAfterNode(e){this.startNode=e,this.endNode=e.nextSibling}appendIntoPart(e){e.__insert(this.startNode=c()),e.__insert(this.endNode=c())}insertAfterPart(e){e.__insert(this.startNode=c()),this.endNode=e.endNode,e.endNode=this.startNode}setValue(e){this.__pendingValue=e}commit(){if(null===this.startNode.parentNode)return;for(;m(this.__pendingValue);){const e=this.__pendingValue;this.__pendingValue=g,e(this)}const e=this.__pendingValue;e!==g&&(x(e)?e!==this.value&&this.__commitText(e):e instanceof w?this.__commitTemplateResult(e):e instanceof Node?this.__commitNode(e):k(e)?this.__commitIterable(e):e===y?(this.value=y,this.clear()):this.__commitText(e))}__insert(e){this.endNode.parentNode.insertBefore(e,this.endNode)}__commitNode(e){this.value!==e&&(this.clear(),this.__insert(e),this.value=e)}__commitText(e){const t=this.startNode.nextSibling,i="string"==typeof(e=null==e?"":e)?e:String(e);t===this.endNode.previousSibling&&3===t.nodeType?t.data=i:this.__commitNode(document.createTextNode(i)),this.value=e}__commitTemplateResult(e){const t=this.options.templateFactory(e);if(this.value instanceof b&&this.value.template===t)this.value.update(e.values);else{const i=new b(t,e.processor,this.options),n=i._clone();i.update(e.values),this.__commitNode(n),this.value=i}}__commitIterable(e){Array.isArray(this.value)||(this.value=[],this.clear());const t=this.value;let i,n=0;for(const s of e)i=t[n],void 0===i&&(i=new C(this.options),t.push(i),0===n?i.appendIntoPart(this):i.insertAfterPart(t[n-1])),i.setValue(s),i.commit(),n++;n<t.length&&(t.length=n,this.clear(i&&i.endNode))}clear(e=this.startNode){t(this.startNode.parentNode,e.nextSibling,this.endNode)}}class T{constructor(e,t,i){if(this.value=void 0,this.__pendingValue=void 0,2!==i.length||""!==i[0]||""!==i[1])throw new Error("Boolean attributes can only contain a single expression");this.element=e,this.name=t,this.strings=i}setValue(e){this.__pendingValue=e}commit(){for(;m(this.__pendingValue);){const e=this.__pendingValue;this.__pendingValue=g,e(this)}if(this.__pendingValue===g)return;const e=!!this.__pendingValue;this.value!==e&&(e?this.element.setAttribute(this.name,""):this.element.removeAttribute(this.name),this.value=e),this.__pendingValue=g}}class $ extends S{constructor(e,t,i){super(e,t,i),this.single=2===i.length&&""===i[0]&&""===i[1]}_createPart(){return new O(this)}_getValue(){return this.single?this.parts[0].value:super._getValue()}commit(){this.dirty&&(this.dirty=!1,this.element[this.name]=this._getValue())}}class O extends M{}let E=!1;(()=>{try{const e={get capture(){return E=!0,!1}};window.addEventListener("test",e,e),window.removeEventListener("test",e,e)}catch(e){}})();class N{constructor(e,t,i){this.value=void 0,this.__pendingValue=void 0,this.element=e,this.eventName=t,this.eventContext=i,this.__boundHandleEvent=e=>this.handleEvent(e)}setValue(e){this.__pendingValue=e}commit(){for(;m(this.__pendingValue);){const e=this.__pendingValue;this.__pendingValue=g,e(this)}if(this.__pendingValue===g)return;const e=this.__pendingValue,t=this.value,i=null==e||null!=t&&(e.capture!==t.capture||e.once!==t.once||e.passive!==t.passive),n=null!=e&&(null==t||i);i&&this.element.removeEventListener(this.eventName,this.__boundHandleEvent,this.__options),n&&(this.__options=A(e),this.element.addEventListener(this.eventName,this.__boundHandleEvent,this.__options)),this.value=e,this.__pendingValue=g}handleEvent(e){"function"==typeof this.value?this.value.call(this.eventContext||this.element,e):this.value.handleEvent(e)}}const A=e=>e&&(E?{capture:e.capture,passive:e.passive,once:e.once}:e.capture);function D(e){let t=I.get(e.type);void 0===t&&(t={stringsArray:new WeakMap,keyString:new Map},I.set(e.type,t));let n=t.stringsArray.get(e.strings);if(void 0!==n)return n;const s=e.strings.join(i);return n=t.keyString.get(s),void 0===n&&(n=new o(e,e.getTemplateElement()),t.keyString.set(s,n)),t.stringsArray.set(e.strings,n),n}const I=new Map,L=new WeakMap;const P=new class{handleAttributeExpressions(e,t,i,n){const s=t[0];if("."===s){return new $(e,t.slice(1),i).parts}if("@"===s)return[new N(e,t.slice(1),n.eventContext)];if("?"===s)return[new T(e,t.slice(1),i)];return new S(e,t,i).parts}handleTextExpression(e){return new C(e)}};"undefined"!=typeof window&&(window.litHtmlVersions||(window.litHtmlVersions=[])).push("1.4.1");const R=(e,...t)=>new w(e,t,"html",P),Y=(e,t)=>`${e}--${t}`;let j=!0;void 0===window.ShadyCSS?j=!1:void 0===window.ShadyCSS.prepareTemplateDom&&(console.warn("Incompatible ShadyCSS version detected. Please update to at least @webcomponents/webcomponentsjs@2.0.2 and @webcomponents/shadycss@1.3.1."),j=!1);const z=e=>t=>{const n=Y(t.type,e);let s=I.get(n);void 0===s&&(s={stringsArray:new WeakMap,keyString:new Map},I.set(n,s));let r=s.stringsArray.get(t.strings);if(void 0!==r)return r;const a=t.strings.join(i);if(r=s.keyString.get(a),void 0===r){const i=t.getTemplateElement();j&&window.ShadyCSS.prepareTemplateDom(i,e),r=new o(t,i),s.keyString.set(a,r)}return s.stringsArray.set(t.strings,r),r},H=["html","svg"],U=new Set,q=(e,t,i)=>{U.add(e);const n=i?i.element:document.createElement("template"),s=t.querySelectorAll("style"),{length:r}=s;if(0===r)return void window.ShadyCSS.prepareTemplateStyles(n,e);const o=document.createElement("style");for(let e=0;e<r;e++){const t=s[e];t.parentNode.removeChild(t),o.textContent+=t.textContent}(e=>{H.forEach(t=>{const i=I.get(Y(t,e));void 0!==i&&i.keyString.forEach(e=>{const{element:{content:t}}=e,i=new Set;Array.from(t.querySelectorAll("style")).forEach(e=>{i.add(e)}),u(e,i)})})})(e);const a=n.content;i?function(e,t,i=null){const{element:{content:n},parts:s}=e;if(null==i)return void n.appendChild(t);const r=document.createTreeWalker(n,133,null,!1);let o=p(s),a=0,l=-1;for(;r.nextNode();)for(l++,r.currentNode===i&&(a=h(t),i.parentNode.insertBefore(t,i));-1!==o&&s[o].index===l;){if(a>0){for(;-1!==o;)s[o].index+=a,o=p(s,o);return}o=p(s,o)}}(i,o,a.firstChild):a.insertBefore(o,a.firstChild),window.ShadyCSS.prepareTemplateStyles(n,e);const l=a.querySelector("style");if(window.ShadyCSS.nativeShadow&&null!==l)t.insertBefore(l.cloneNode(!0),t.firstChild);else if(i){a.insertBefore(o,a.firstChild);const e=new Set;e.add(o),u(i,e)}};window.JSCompiler_renameProperty=(e,t)=>e;const F={toAttribute(e,t){switch(t){case Boolean:return e?"":null;case Object:case Array:return null==e?e:JSON.stringify(e)}return e},fromAttribute(e,t){switch(t){case Boolean:return null!==e;case Number:return null===e?null:Number(e);case Object:case Array:return JSON.parse(e)}return e}},B=(e,t)=>t!==e&&(t==t||e==e),V={attribute:!0,type:String,converter:F,reflect:!1,hasChanged:B},W="finalized";class K extends HTMLElement{constructor(){super(),this.initialize()}static get observedAttributes(){this.finalize();const e=[];return this._classProperties.forEach((t,i)=>{const n=this._attributeNameForProperty(i,t);void 0!==n&&(this._attributeToPropertyMap.set(n,i),e.push(n))}),e}static _ensureClassProperties(){if(!this.hasOwnProperty(JSCompiler_renameProperty("_classProperties",this))){this._classProperties=new Map;const e=Object.getPrototypeOf(this)._classProperties;void 0!==e&&e.forEach((e,t)=>this._classProperties.set(t,e))}}static createProperty(e,t=V){if(this._ensureClassProperties(),this._classProperties.set(e,t),t.noAccessor||this.prototype.hasOwnProperty(e))return;const i="symbol"==typeof e?Symbol():`__${e}`,n=this.getPropertyDescriptor(e,i,t);void 0!==n&&Object.defineProperty(this.prototype,e,n)}static getPropertyDescriptor(e,t,i){return{get(){return this[t]},set(n){const s=this[e];this[t]=n,this.requestUpdateInternal(e,s,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this._classProperties&&this._classProperties.get(e)||V}static finalize(){const e=Object.getPrototypeOf(this);if(e.hasOwnProperty(W)||e.finalize(),this[W]=!0,this._ensureClassProperties(),this._attributeToPropertyMap=new Map,this.hasOwnProperty(JSCompiler_renameProperty("properties",this))){const e=this.properties,t=[...Object.getOwnPropertyNames(e),..."function"==typeof Object.getOwnPropertySymbols?Object.getOwnPropertySymbols(e):[]];for(const i of t)this.createProperty(i,e[i])}}static _attributeNameForProperty(e,t){const i=t.attribute;return!1===i?void 0:"string"==typeof i?i:"string"==typeof e?e.toLowerCase():void 0}static _valueHasChanged(e,t,i=B){return i(e,t)}static _propertyValueFromAttribute(e,t){const i=t.type,n=t.converter||F,s="function"==typeof n?n:n.fromAttribute;return s?s(e,i):e}static _propertyValueToAttribute(e,t){if(void 0===t.reflect)return;const i=t.type,n=t.converter;return(n&&n.toAttribute||F.toAttribute)(e,i)}initialize(){this._updateState=0,this._updatePromise=new Promise(e=>this._enableUpdatingResolver=e),this._changedProperties=new Map,this._saveInstanceProperties(),this.requestUpdateInternal()}_saveInstanceProperties(){this.constructor._classProperties.forEach((e,t)=>{if(this.hasOwnProperty(t)){const e=this[t];delete this[t],this._instanceProperties||(this._instanceProperties=new Map),this._instanceProperties.set(t,e)}})}_applyInstanceProperties(){this._instanceProperties.forEach((e,t)=>this[t]=e),this._instanceProperties=void 0}connectedCallback(){this.enableUpdating()}enableUpdating(){void 0!==this._enableUpdatingResolver&&(this._enableUpdatingResolver(),this._enableUpdatingResolver=void 0)}disconnectedCallback(){}attributeChangedCallback(e,t,i){t!==i&&this._attributeToProperty(e,i)}_propertyToAttribute(e,t,i=V){const n=this.constructor,s=n._attributeNameForProperty(e,i);if(void 0!==s){const e=n._propertyValueToAttribute(t,i);if(void 0===e)return;this._updateState=8|this._updateState,null==e?this.removeAttribute(s):this.setAttribute(s,e),this._updateState=-9&this._updateState}}_attributeToProperty(e,t){if(8&this._updateState)return;const i=this.constructor,n=i._attributeToPropertyMap.get(e);if(void 0!==n){const e=i.getPropertyOptions(n);this._updateState=16|this._updateState,this[n]=i._propertyValueFromAttribute(t,e),this._updateState=-17&this._updateState}}requestUpdateInternal(e,t,i){let n=!0;if(void 0!==e){const s=this.constructor;i=i||s.getPropertyOptions(e),s._valueHasChanged(this[e],t,i.hasChanged)?(this._changedProperties.has(e)||this._changedProperties.set(e,t),!0!==i.reflect||16&this._updateState||(void 0===this._reflectingProperties&&(this._reflectingProperties=new Map),this._reflectingProperties.set(e,i))):n=!1}!this._hasRequestedUpdate&&n&&(this._updatePromise=this._enqueueUpdate())}requestUpdate(e,t){return this.requestUpdateInternal(e,t),this.updateComplete}async _enqueueUpdate(){this._updateState=4|this._updateState;try{await this._updatePromise}catch(e){}const e=this.performUpdate();return null!=e&&await e,!this._hasRequestedUpdate}get _hasRequestedUpdate(){return 4&this._updateState}get hasUpdated(){return 1&this._updateState}performUpdate(){if(!this._hasRequestedUpdate)return;this._instanceProperties&&this._applyInstanceProperties();let e=!1;const t=this._changedProperties;try{e=this.shouldUpdate(t),e?this.update(t):this._markUpdated()}catch(t){throw e=!1,this._markUpdated(),t}e&&(1&this._updateState||(this._updateState=1|this._updateState,this.firstUpdated(t)),this.updated(t))}_markUpdated(){this._changedProperties=new Map,this._updateState=-5&this._updateState}get updateComplete(){return this._getUpdateComplete()}_getUpdateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._updatePromise}shouldUpdate(e){return!0}update(e){void 0!==this._reflectingProperties&&this._reflectingProperties.size>0&&(this._reflectingProperties.forEach((e,t)=>this._propertyToAttribute(t,this[t],e)),this._reflectingProperties=void 0),this._markUpdated()}updated(e){}firstUpdated(e){}}K[W]=!0;const G=window.ShadowRoot&&(void 0===window.ShadyCSS||window.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,J=Symbol();class Z{constructor(e,t){if(t!==J)throw new Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e}get styleSheet(){return void 0===this._styleSheet&&(G?(this._styleSheet=new CSSStyleSheet,this._styleSheet.replaceSync(this.cssText)):this._styleSheet=null),this._styleSheet}toString(){return this.cssText}}const X=(e,...t)=>{const i=t.reduce((t,i,n)=>t+(e=>{if(e instanceof Z)return e.cssText;if("number"==typeof e)return e;throw new Error(`Value passed to 'css' function must be a 'css' function result: ${e}. Use 'unsafeCSS' to pass non-literal values, but\n            take care to ensure page security.`)})(i)+e[n+1],e[0]);return new Z(i,J)};(window.litElementVersions||(window.litElementVersions=[])).push("2.5.1");const Q={};class ee extends K{static getStyles(){return this.styles}static _getUniqueStyles(){if(this.hasOwnProperty(JSCompiler_renameProperty("_styles",this)))return;const e=this.getStyles();if(Array.isArray(e)){const t=(e,i)=>e.reduceRight((e,i)=>Array.isArray(i)?t(i,e):(e.add(i),e),i),i=t(e,new Set),n=[];i.forEach(e=>n.unshift(e)),this._styles=n}else this._styles=void 0===e?[]:[e];this._styles=this._styles.map(e=>{if(e instanceof CSSStyleSheet&&!G){const t=Array.prototype.slice.call(e.cssRules).reduce((e,t)=>e+t.cssText,"");return new Z(String(t),J)}return e})}initialize(){super.initialize(),this.constructor._getUniqueStyles(),this.renderRoot=this.createRenderRoot(),window.ShadowRoot&&this.renderRoot instanceof window.ShadowRoot&&this.adoptStyles()}createRenderRoot(){return this.attachShadow(this.constructor.shadowRootOptions)}adoptStyles(){const e=this.constructor._styles;0!==e.length&&(void 0===window.ShadyCSS||window.ShadyCSS.nativeShadow?G?this.renderRoot.adoptedStyleSheets=e.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet):this._needsShimAdoptedStyleSheets=!0:window.ShadyCSS.ScopingShim.prepareAdoptedCssText(e.map(e=>e.cssText),this.localName))}connectedCallback(){super.connectedCallback(),this.hasUpdated&&void 0!==window.ShadyCSS&&window.ShadyCSS.styleElement(this)}update(e){const t=this.render();super.update(e),t!==Q&&this.constructor.render(t,this.renderRoot,{scopeName:this.localName,eventContext:this}),this._needsShimAdoptedStyleSheets&&(this._needsShimAdoptedStyleSheets=!1,this.constructor._styles.forEach(e=>{const t=document.createElement("style");t.textContent=e.cssText,this.renderRoot.appendChild(t)}))}render(){return Q}}function te(){return document.querySelector("hc-main")?document.querySelector("hc-main").hass:document.querySelector("home-assistant")?document.querySelector("home-assistant").hass:void 0}function ie(e){return document.querySelector("hc-main")?document.querySelector("hc-main").provideHass(e):document.querySelector("home-assistant")?document.querySelector("home-assistant").provideHass(e):void 0}function ne(e,t,i=null){if((e=new Event(e,{bubbles:!0,cancelable:!1,composed:!0})).detail=t||{},i)i.dispatchEvent(e);else{var n=function(){var e=document.querySelector("hc-main");return e?(e=(e=(e=e&&e.shadowRoot)&&e.querySelector("hc-lovelace"))&&e.shadowRoot)&&e.querySelector("hui-view")||e.querySelector("hui-panel-view"):(e=(e=(e=(e=(e=(e=(e=(e=(e=(e=(e=(e=document.querySelector("home-assistant"))&&e.shadowRoot)&&e.querySelector("home-assistant-main"))&&e.shadowRoot)&&e.querySelector("app-drawer-layout partial-panel-resolver"))&&e.shadowRoot||e)&&e.querySelector("ha-panel-lovelace"))&&e.shadowRoot)&&e.querySelector("hui-root"))&&e.shadowRoot)&&e.querySelector("ha-app-layout"))&&e.querySelector("#view"))&&e.firstElementChild}();n&&n.dispatchEvent(e)}}async function se(e,t,i=!1){let n=e;"string"==typeof t&&(t=t.split(/(\$| )/)),""===t[t.length-1]&&t.pop();for(const[e,s]of t.entries())if(s.trim().length){if(!n)return null;n.localName&&n.localName.includes("-")&&await customElements.whenDefined(n.localName),n.updateComplete&&await n.updateComplete,n="$"===s?i&&e==t.length-1?[n.shadowRoot]:n.shadowRoot:i&&e==t.length-1?n.querySelectorAll(s):n.querySelector(s)}return n}async function re(e,t=!1){const i=document.querySelector("hc-main")||document.querySelector("home-assistant");ne("hass-more-info",{entityId:e},i);const n=await async function(e,t,i=!1,n=1e4){return Promise.race([se(e,t,i),new Promise((e,t)=>setTimeout(()=>t(new Error("timeout")),n))]).catch(e=>{if(!e.message||"timeout"!==e.message)throw e;return null})}(i,"$ ha-more-info-dialog");return n&&(n.large=t),n}ee.finalized=!0,ee.render=(e,i,n)=>{if(!n||"object"!=typeof n||!n.scopeName)throw new Error("The `scopeName` option is required.");const s=n.scopeName,r=L.has(i),o=j&&11===i.nodeType&&!!i.host,a=o&&!U.has(s),l=a?document.createDocumentFragment():i;if(((e,i,n)=>{let s=L.get(i);void 0===s&&(t(i,i.firstChild),L.set(i,s=new C(Object.assign({templateFactory:D},n))),s.appendInto(i)),s.setValue(e),s.commit()})(e,l,Object.assign({templateFactory:z(s)},n)),a){const e=L.get(l);L.delete(l);const n=e.value instanceof b?e.value.template:void 0;q(s,l,n),t(i,i.firstChild),i.appendChild(l),L.set(i,e)}!r&&o&&window.ShadyCSS.styleElement(i.host)},ee.shadowRootOptions={mode:"open"};const oe="lovelace-player-device-id";function ae(){if(!localStorage[oe]){const e=()=>Math.floor(1e5*(1+Math.random())).toString(16).substring(1);window.fully&&"function"==typeof fully.getDeviceId?localStorage[oe]=fully.getDeviceId():localStorage[oe]=`${e()}${e()}-${e()}${e()}`}return localStorage[oe]}let le=ae();const ce=new URLSearchParams(window.location.search);var de,ue,he,pe;ce.get("deviceID")&&null!==(de=ce.get("deviceID"))&&("clear"===de?localStorage.removeItem(oe):localStorage[oe]=de,le=ae()),(pe=ue||(ue={})).language="language",pe.system="system",pe.comma_decimal="comma_decimal",pe.decimal_comma="decimal_comma",pe.space_comma="space_comma",pe.none="none",function(e){e.language="language",e.system="system",e.am_pm="12",e.twenty_four="24"}(he||(he={}));var fe=["closed","locked","off"],me=function(e,t,i,n){n=n||{},i=null==i?{}:i;var s=new Event(t,{bubbles:void 0===n.bubbles||n.bubbles,cancelable:Boolean(n.cancelable),composed:void 0===n.composed||n.composed});return s.detail=i,e.dispatchEvent(s),s},ge=function(e){me(window,"haptic",e)},ye=function(e,t,i){void 0===i&&(i=!1),i?history.replaceState(null,"",t):history.pushState(null,"",t),me(window,"location-changed",{replace:i})},be=function(e,t){return function(e,t,i){void 0===i&&(i=!0);var n,s=function(e){return e.substr(0,e.indexOf("."))}(t),r="group"===s?"homeassistant":s;switch(s){case"lock":n=i?"unlock":"lock";break;case"cover":n=i?"open_cover":"close_cover";break;default:n=i?"turn_on":"turn_off"}return e.callService(r,n,{entity_id:t})}(e,t,fe.includes(e.states[t].state))};const ve="SIDEBAR-CARD",_e=new Map;let we=null;function xe(e,t){const i=_e.get(e),n=Date.now();if(i&&n-i.timestamp<1e4&&document.contains(i.element))return i.element;const s=t();return s?_e.set(e,{element:s,timestamp:n}):_e.delete(e),s}function ke(){const e=Date.now();if(we&&e-we.timestamp<5e3)return we.root;const t=function(e){const t=[],i=new WeakSet;for(e?t.push(e):t.push(document.body);t.length;){const e=t.pop();if(!e||i.has(e))continue;i.add(e);let n=null;if(e instanceof ShadowRoot)n=e;else if(e instanceof HTMLElement&&e.shadowRoot)n=e.shadowRoot;else{if(!(e instanceof HTMLElement||e instanceof DocumentFragment))continue;n=e}const s=n.querySelector("hui-root");if(null==s?void 0:s.shadowRoot)return s.shadowRoot;const r=n.querySelectorAll("*"),o=Math.min(r.length,50);for(let e=0;e<o;e++){const i=r[e];t.push(i),i.shadowRoot&&t.push(i.shadowRoot)}}return null}(document.querySelector("home-assistant"));return we={root:t,timestamp:e},t}function Se(){const e=ke();return e?e.host:null}function Me(){const e=Se();if(e&&e.lovelace){const t=e.lovelace;return t.current_view=e.___curView,t}return null}function Ce(e){return new Promise(t=>setTimeout(t,e))}async function Te(){let e;for(;!e;)e=Me(),e||await Ce(500);return e}async function $e(e,t,i){var n;const s=await Te();if(null===(n=null==s?void 0:s.config)||void 0===n?void 0:n.sidebar){!0===Object.assign({},s.config.sidebar).debug&&console.info(`%c${ve}: %c ${e.padEnd(24)} -> %c ${t}`,"color: chartreuse; background: black; font-weight: 700;","color: yellow; background: black; font-weight: 700;","",i)}}async function Oe(e,t,i){var n;const s=await Te();if(null===(n=null==s?void 0:s.config)||void 0===n?void 0:n.sidebar){!0===Object.assign({},s.config.sidebar).debug&&console.error(`%c${ve}: %c ${e.padEnd(24)} -> %c ${t}`,"color: red; background: black; font-weight: 700;","color: white; background: black; font-weight: 700;","color:red",i)}}"undefined"!=typeof window&&window.addEventListener("location-changed",()=>{_e.clear(),we=null});let Ee=null;function Ne(){const e=Date.now();if(Ee&&e-Ee.timestamp<2e3)return Ee.value;let t="0px";const i=Se(),n=null==i?void 0:i.shadowRoot;if(!n)return Ee={value:t,timestamp:e},t;const s=n.getElementById("view");if(s)try{const e=window.getComputedStyle(s);void 0!==e&&(t=e.paddingTop)}catch(e){t="0px"}return Ee={value:t,timestamp:e},t}function Ae(){return xe("sidebar",()=>{let e=document.querySelector("home-assistant");return e=e&&e.shadowRoot,e=e&&e.querySelector("home-assistant-main"),e=e&&e.shadowRoot,e=e&&e.querySelector("ha-drawer ha-sidebar"),e})}function De(){return xe("appDrawerLayout",()=>{let e=document.querySelector("home-assistant");return e=e&&e.shadowRoot,e=e&&e.querySelector("home-assistant-main"),e=e&&e.shadowRoot,e=e&&e.querySelector("ha-drawer"),e=e&&e.shadowRoot,e=e&&e.querySelector(".mdc-drawer-app-content"),e})}function Ie(){return xe("appDrawer",()=>{let e=document.querySelector("home-assistant");return e=e&&e.shadowRoot,e=e&&e.querySelector("home-assistant-main"),e=e&&e.shadowRoot,e=e&&e.querySelector("ha-drawer"),e=e&&e.shadowRoot,e=e&&e.querySelector(".mdc-drawer"),e})}function Le(e,t=window.location.href){const i=e.replace(/[\[\]]/g,"\\$&"),n=new RegExp("[?&]"+i+"(=([^&#]*)|&|#|$)").exec(t);return n?n[2]?decodeURIComponent(n[2].replace(/\+/g," ")):"":null}function Pe(e,t){let i=25,n=75,s=!1;const r=Ne();e.width&&("number"==typeof e.width?(i=e.width,n=100-i):"object"==typeof e.width&&(i=e.desktop,n=100-i,s=!0));let o="\n    #customSidebarWrapper { \n      display:flex;\n      flex-direction:row;\n      overflow:hidden;\n    }\n    #customSidebar.hide {\n      display:none!important;\n      width:0!important;\n    }\n    #view.hideSidebar {\n      width:100%!important;\n    }\n  ";return s?t<=e.breakpoints.mobile?o+=`\n        #customSidebar {\n          width:${e.width.mobile}%;\n          overflow:hidden;\n          ${0===e.width.mobile?"display:none;":""}\n          ${e.hideTopMenu?"":"margin-top: calc("+r+" + env(safe-area-inset-top));"}\n        } \n        #view {\n          width:${100-e.width.mobile}%;\n          ${e.hideTopMenu?"padding-top:0!important;margin-top:0!important;":""}\n        }\n      `:t<=e.breakpoints.tablet?o+=`\n        #customSidebar {\n          width:${e.width.tablet}%;\n          overflow:hidden;\n          ${0===e.width.tablet?"display:none;":""}\n          ${e.hideTopMenu?"":"margin-top: calc("+r+" + env(safe-area-inset-top));"}\n        } \n        #view {\n          width:${100-e.width.tablet}%;\n          ${e.hideTopMenu?"padding-top:0!important;margin-top:0!important;":""}\n        }\n      `:o+=`\n        #customSidebar {\n          width:${e.width.desktop}%;\n          overflow:hidden;\n          ${0===e.width.desktop?"display:none;":""}\n          ${e.hideTopMenu?"":"margin-top: calc("+r+" + env(safe-area-inset-top));"}\n        } \n        #view {\n          width:${100-e.width.desktop}%;\n          ${e.hideTopMenu?"padding-top:0!important;margin-top:0!important;":""}\n        }\n      `:o+=`\n      #customSidebar {\n        width:${i}%;\n        overflow:hidden;\n        ${e.hideTopMenu?"":"margin-top: calc("+r+" + env(safe-area-inset-top));"}\n      } \n      #view {\n        width:${n}%;\n        ${e.hideTopMenu?"padding-top:0!important;margin-top:0!important;":""}\n      }\n    `,o}function Re(e,t){if(!e)return;const i=e.querySelector("#customSidebarStyle");if(!i)return;const n=document.body.clientWidth;i.textContent=Pe(t,n);const s=Se(),r=null==s?void 0:s.shadowRoot;if(!r)return void $e("updateStyling","Root/shadowRoot non pronto, skip header/footer");const o=r.querySelector(".header"),a=r.querySelector("ch-footer")||r.querySelector("app-footer"),l=Le("sidebarOff"),c=r.getElementById("view"),d=Ne(),u=document.body.clientWidth;!0===t.hideTopMenu&&!0===t.showTopMenuOnMobile&&u<=t.breakpoints.mobile&&null==l?(o&&(o.style.display="block"),c&&(c.style.minHeight="calc(100vh - "+d+")"),a&&(a.style.display="flex")):!0===t.hideTopMenu&&null==l&&(o&&(o.style.display="none"),a&&(a.style.display="none"),c&&(c.style.minHeight="calc(100vh)"))}function Ye(e,t,i,n){const s=function(e,t){let i=null;return function(...n){i&&clearTimeout(i),i=setTimeout(()=>e(...n),t)}}(()=>Re(e,t),150);window.addEventListener("resize",s,{passive:!0}),"hideOnPath"in t&&(window.addEventListener("location-changed",()=>{t.hideOnPath.includes(window.location.pathname)?(i.classList.add("hideSidebar"),n.classList.add("hide")):(i.classList.remove("hideSidebar"),n.classList.remove("hide"))}),t.hideOnPath.includes(window.location.pathname)&&($e("subscribeEvents","Disable sidebar for this path"),i.classList.add("hideSidebar"),n.classList.add("hide")))}function je(e){const t=Ae(),i=De(),n=Ie();t&&i&&n&&(e?(t.style.removeProperty("display"),n.style.removeProperty("display"),i.style.removeProperty("margin-left"),i.style.removeProperty("padding-left")):(t.style.display="none",n.style.display="none",i.style.marginLeft="0",i.style.paddingLeft="0"))}function ze(){je(function(){const e=Ae();if(!e)return!1;const t=e.style.display,i=window.getComputedStyle(e).display;return"none"===t||"none"===i}())}function He(e){const t=ke();if(!t)return;const i=t.querySelector("div.header"),n=t.querySelector("#customHeaderContainer"),s=t.getElementById("view"),r=document.querySelector("#customSidebar .sidebar-inner");if(s||r)if(e){const e=((null==i?void 0:i.getBoundingClientRect().height)||0)+((null==n?void 0:n.getBoundingClientRect().height)||0);s&&(s.style.paddingTop=`${e}px`),r&&(r.style.paddingTop=`${e}px`)}else s&&s.style.removeProperty("padding-top"),r&&r.style.removeProperty("padding-top")}function Ue(e){const t=ke();if(!t)return;const i=t.querySelector("div.header");if(!i)return;const{mode:n}=function(){var e,t;const i=Me();return{mode:"push"===(null!==(t=null===(e=null==i?void 0:i.config)||void 0===e?void 0:e.header)&&void 0!==t?t:{}).topMenuMode?"push":"overlay"}}();i.style.display=e?"flex":"none",He("push"===n&&e)}const qe=new class{constructor(){this.metrics=new Map,this.lastTime=new Map}start(e){this.lastTime.set(e,performance.now())}end(e){const t=this.lastTime.get(e);if(!t)return;const i=performance.now()-t,n=this.metrics.get(e)||[];n.push(i),n.length>50&&n.shift(),this.metrics.set(e,n),i>16&&Math.random()<.1&&console.warn(`[SIDEBAR-CARD] Slow operation: ${e} took ${i.toFixed(2)}ms`)}getAverage(e){const t=this.metrics.get(e);return t&&0!==t.length?t.reduce((e,t)=>e+t,0)/t.length:0}report(){console.group("[SIDEBAR-CARD] Performance Report");for(const[e,t]of this.metrics){const i=this.getAverage(e),n=Math.max(...t);console.log(`${e}: avg=${i.toFixed(2)}ms max=${n.toFixed(2)}ms count=${t.length}`)}console.groupEnd()}};function Fe(){Ue(function(){const e=ke();if(!e)return!1;const t=e.querySelector("div.header");if(!t)return!1;const i=t.style.display,n=window.getComputedStyle(t).display;return"none"===i||"none"===n}())}function Be(e){throw new Error('Could not dynamically require "'+e+'". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.')}"undefined"!=typeof window&&(window.__sidebarPerfMonitor=qe,console.log("[SIDEBAR-CARD] Performance monitor loaded:",qe)),"undefined"!=typeof window&&(window.silvioToggleHaSidebar=()=>{try{ze()}catch(e){console.error("silvioToggleHaSidebar error",e)}},window.silvioToggleTopMenu=()=>{try{Fe()}catch(e){console.error("silvioToggleTopMenu error",e)}},window.setTopMenuVisible=e=>Ue(e));var Ve,We={exports:{}};var Ke,Ge=(Ve||(Ve=1,(Ke=We).exports=function(){var e,t;function i(){return e.apply(null,arguments)}function n(t){e=t}function s(e){return e instanceof Array||"[object Array]"===Object.prototype.toString.call(e)}function r(e){return null!=e&&"[object Object]"===Object.prototype.toString.call(e)}function o(e){if(Object.getOwnPropertyNames)return 0===Object.getOwnPropertyNames(e).length;var t;for(t in e)if(e.hasOwnProperty(t))return!1;return!0}function a(e){return void 0===e}function l(e){return"number"==typeof e||"[object Number]"===Object.prototype.toString.call(e)}function c(e){return e instanceof Date||"[object Date]"===Object.prototype.toString.call(e)}function d(e,t){var i,n=[];for(i=0;i<e.length;++i)n.push(t(e[i],i));return n}function u(e,t){return Object.prototype.hasOwnProperty.call(e,t)}function h(e,t){for(var i in t)u(t,i)&&(e[i]=t[i]);return u(t,"toString")&&(e.toString=t.toString),u(t,"valueOf")&&(e.valueOf=t.valueOf),e}function p(e,t,i,n){return Wi(e,t,i,n,!0).utc()}function f(){return{empty:!1,unusedTokens:[],unusedInput:[],overflow:-2,charsLeftOver:0,nullInput:!1,invalidMonth:null,invalidFormat:!1,userInvalidated:!1,iso:!1,parsedDateParts:[],meridiem:null,rfc2822:!1,weekdayMismatch:!1}}function m(e){return null==e._pf&&(e._pf=f()),e._pf}function g(e){if(null==e._isValid){var i=m(e),n=t.call(i.parsedDateParts,function(e){return null!=e}),s=!isNaN(e._d.getTime())&&i.overflow<0&&!i.empty&&!i.invalidMonth&&!i.invalidWeekday&&!i.weekdayMismatch&&!i.nullInput&&!i.invalidFormat&&!i.userInvalidated&&(!i.meridiem||i.meridiem&&n);if(e._strict&&(s=s&&0===i.charsLeftOver&&0===i.unusedTokens.length&&void 0===i.bigHour),null!=Object.isFrozen&&Object.isFrozen(e))return s;e._isValid=s}return e._isValid}function y(e){var t=p(NaN);return null!=e?h(m(t),e):m(t).userInvalidated=!0,t}t=Array.prototype.some?Array.prototype.some:function(e){for(var t=Object(this),i=t.length>>>0,n=0;n<i;n++)if(n in t&&e.call(this,t[n],n,t))return!0;return!1};var b=i.momentProperties=[];function v(e,t){var i,n,s;if(a(t._isAMomentObject)||(e._isAMomentObject=t._isAMomentObject),a(t._i)||(e._i=t._i),a(t._f)||(e._f=t._f),a(t._l)||(e._l=t._l),a(t._strict)||(e._strict=t._strict),a(t._tzm)||(e._tzm=t._tzm),a(t._isUTC)||(e._isUTC=t._isUTC),a(t._offset)||(e._offset=t._offset),a(t._pf)||(e._pf=m(t)),a(t._locale)||(e._locale=t._locale),b.length>0)for(i=0;i<b.length;i++)a(s=t[n=b[i]])||(e[n]=s);return e}var _=!1;function w(e){v(this,e),this._d=new Date(null!=e._d?e._d.getTime():NaN),this.isValid()||(this._d=new Date(NaN)),!1===_&&(_=!0,i.updateOffset(this),_=!1)}function x(e){return e instanceof w||null!=e&&null!=e._isAMomentObject}function k(e){return e<0?Math.ceil(e)||0:Math.floor(e)}function S(e){var t=+e,i=0;return 0!==t&&isFinite(t)&&(i=k(t)),i}function M(e,t,i){var n,s=Math.min(e.length,t.length),r=Math.abs(e.length-t.length),o=0;for(n=0;n<s;n++)(i&&e[n]!==t[n]||!i&&S(e[n])!==S(t[n]))&&o++;return o+r}function C(e){!1===i.suppressDeprecationWarnings&&"undefined"!=typeof console&&console.warn&&console.warn("Deprecation warning: "+e)}function T(e,t){var n=!0;return h(function(){if(null!=i.deprecationHandler&&i.deprecationHandler(null,e),n){for(var s,r=[],o=0;o<arguments.length;o++){if(s="","object"==typeof arguments[o]){for(var a in s+="\n["+o+"] ",arguments[0])s+=a+": "+arguments[0][a]+", ";s=s.slice(0,-2)}else s=arguments[o];r.push(s)}C(e+"\nArguments: "+Array.prototype.slice.call(r).join("")+"\n"+(new Error).stack),n=!1}return t.apply(this,arguments)},t)}var $,O={};function E(e,t){null!=i.deprecationHandler&&i.deprecationHandler(e,t),O[e]||(C(t),O[e]=!0)}function N(e){return e instanceof Function||"[object Function]"===Object.prototype.toString.call(e)}function A(e){var t,i;for(i in e)N(t=e[i])?this[i]=t:this["_"+i]=t;this._config=e,this._dayOfMonthOrdinalParseLenient=new RegExp((this._dayOfMonthOrdinalParse.source||this._ordinalParse.source)+"|"+/\d{1,2}/.source)}function D(e,t){var i,n=h({},e);for(i in t)u(t,i)&&(r(e[i])&&r(t[i])?(n[i]={},h(n[i],e[i]),h(n[i],t[i])):null!=t[i]?n[i]=t[i]:delete n[i]);for(i in e)u(e,i)&&!u(t,i)&&r(e[i])&&(n[i]=h({},n[i]));return n}function I(e){null!=e&&this.set(e)}i.suppressDeprecationWarnings=!1,i.deprecationHandler=null,$=Object.keys?Object.keys:function(e){var t,i=[];for(t in e)u(e,t)&&i.push(t);return i};var L={sameDay:"[Today at] LT",nextDay:"[Tomorrow at] LT",nextWeek:"dddd [at] LT",lastDay:"[Yesterday at] LT",lastWeek:"[Last] dddd [at] LT",sameElse:"L"};function P(e,t,i){var n=this._calendar[e]||this._calendar.sameElse;return N(n)?n.call(t,i):n}var R={LTS:"h:mm:ss A",LT:"h:mm A",L:"MM/DD/YYYY",LL:"MMMM D, YYYY",LLL:"MMMM D, YYYY h:mm A",LLLL:"dddd, MMMM D, YYYY h:mm A"};function Y(e){var t=this._longDateFormat[e],i=this._longDateFormat[e.toUpperCase()];return t||!i?t:(this._longDateFormat[e]=i.replace(/MMMM|MM|DD|dddd/g,function(e){return e.slice(1)}),this._longDateFormat[e])}var j="Invalid date";function z(){return this._invalidDate}var H="%d",U=/\d{1,2}/;function q(e){return this._ordinal.replace("%d",e)}var F={future:"in %s",past:"%s ago",s:"a few seconds",ss:"%d seconds",m:"a minute",mm:"%d minutes",h:"an hour",hh:"%d hours",d:"a day",dd:"%d days",M:"a month",MM:"%d months",y:"a year",yy:"%d years"};function B(e,t,i,n){var s=this._relativeTime[i];return N(s)?s(e,t,i,n):s.replace(/%d/i,e)}function V(e,t){var i=this._relativeTime[e>0?"future":"past"];return N(i)?i(t):i.replace(/%s/i,t)}var W={};function K(e,t){var i=e.toLowerCase();W[i]=W[i+"s"]=W[t]=e}function G(e){return"string"==typeof e?W[e]||W[e.toLowerCase()]:void 0}function J(e){var t,i,n={};for(i in e)u(e,i)&&(t=G(i))&&(n[t]=e[i]);return n}var Z={};function X(e,t){Z[e]=t}function Q(e){var t=[];for(var i in e)t.push({unit:i,priority:Z[i]});return t.sort(function(e,t){return e.priority-t.priority}),t}function ee(e,t,i){var n=""+Math.abs(e),s=t-n.length;return(e>=0?i?"+":"":"-")+Math.pow(10,Math.max(0,s)).toString().substr(1)+n}var te=/(\[[^\[]*\])|(\\)?([Hh]mm(ss)?|Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Qo?|YYYYYY|YYYYY|YYYY|YY|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|kk?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g,ie=/(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g,ne={},se={};function re(e,t,i,n){var s=n;"string"==typeof n&&(s=function(){return this[n]()}),e&&(se[e]=s),t&&(se[t[0]]=function(){return ee(s.apply(this,arguments),t[1],t[2])}),i&&(se[i]=function(){return this.localeData().ordinal(s.apply(this,arguments),e)})}function oe(e){return e.match(/\[[\s\S]/)?e.replace(/^\[|\]$/g,""):e.replace(/\\/g,"")}function ae(e){var t,i,n=e.match(te);for(t=0,i=n.length;t<i;t++)se[n[t]]?n[t]=se[n[t]]:n[t]=oe(n[t]);return function(t){var s,r="";for(s=0;s<i;s++)r+=N(n[s])?n[s].call(t,e):n[s];return r}}function le(e,t){return e.isValid()?(t=ce(t,e.localeData()),ne[t]=ne[t]||ae(t),ne[t](e)):e.localeData().invalidDate()}function ce(e,t){var i=5;function n(e){return t.longDateFormat(e)||e}for(ie.lastIndex=0;i>=0&&ie.test(e);)e=e.replace(ie,n),ie.lastIndex=0,i-=1;return e}var de=/\d/,ue=/\d\d/,he=/\d{3}/,pe=/\d{4}/,fe=/[+-]?\d{6}/,me=/\d\d?/,ge=/\d\d\d\d?/,ye=/\d\d\d\d\d\d?/,be=/\d{1,3}/,ve=/\d{1,4}/,_e=/[+-]?\d{1,6}/,we=/\d+/,xe=/[+-]?\d+/,ke=/Z|[+-]\d\d:?\d\d/gi,Se=/Z|[+-]\d\d(?::?\d\d)?/gi,Me=/[+-]?\d+(\.\d{1,3})?/,Ce=/[0-9]{0,256}['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFF07\uFF10-\uFFEF]{1,256}|[\u0600-\u06FF\/]{1,256}(\s*?[\u0600-\u06FF]{1,256}){1,2}/i,Te={};function $e(e,t,i){Te[e]=N(t)?t:function(e,n){return e&&i?i:t}}function Oe(e,t){return u(Te,e)?Te[e](t._strict,t._locale):new RegExp(Ee(e))}function Ee(e){return Ne(e.replace("\\","").replace(/\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g,function(e,t,i,n,s){return t||i||n||s}))}function Ne(e){return e.replace(/[-\/\\^$*+?.()|[\]{}]/g,"\\$&")}var Ae={};function De(e,t){var i,n=t;for("string"==typeof e&&(e=[e]),l(t)&&(n=function(e,i){i[t]=S(e)}),i=0;i<e.length;i++)Ae[e[i]]=n}function Ie(e,t){De(e,function(e,i,n,s){n._w=n._w||{},t(e,n._w,n,s)})}function Le(e,t,i){null!=t&&u(Ae,e)&&Ae[e](t,i._a,i,e)}var Pe=0,Re=1,Ye=2,je=3,ze=4,He=5,Ue=6,qe=7,Fe=8;function Ve(e){return We(e)?366:365}function We(e){return e%4==0&&e%100!=0||e%400==0}re("Y",0,0,function(){var e=this.year();return e<=9999?""+e:"+"+e}),re(0,["YY",2],0,function(){return this.year()%100}),re(0,["YYYY",4],0,"year"),re(0,["YYYYY",5],0,"year"),re(0,["YYYYYY",6,!0],0,"year"),K("year","y"),X("year",1),$e("Y",xe),$e("YY",me,ue),$e("YYYY",ve,pe),$e("YYYYY",_e,fe),$e("YYYYYY",_e,fe),De(["YYYYY","YYYYYY"],Pe),De("YYYY",function(e,t){t[Pe]=2===e.length?i.parseTwoDigitYear(e):S(e)}),De("YY",function(e,t){t[Pe]=i.parseTwoDigitYear(e)}),De("Y",function(e,t){t[Pe]=parseInt(e,10)}),i.parseTwoDigitYear=function(e){return S(e)+(S(e)>68?1900:2e3)};var Ge,Je=Xe("FullYear",!0);function Ze(){return We(this.year())}function Xe(e,t){return function(n){return null!=n?(et(this,e,n),i.updateOffset(this,t),this):Qe(this,e)}}function Qe(e,t){return e.isValid()?e._d["get"+(e._isUTC?"UTC":"")+t]():NaN}function et(e,t,i){e.isValid()&&!isNaN(i)&&("FullYear"===t&&We(e.year())&&1===e.month()&&29===e.date()?e._d["set"+(e._isUTC?"UTC":"")+t](i,e.month(),st(i,e.month())):e._d["set"+(e._isUTC?"UTC":"")+t](i))}function tt(e){return N(this[e=G(e)])?this[e]():this}function it(e,t){if("object"==typeof e)for(var i=Q(e=J(e)),n=0;n<i.length;n++)this[i[n].unit](e[i[n].unit]);else if(N(this[e=G(e)]))return this[e](t);return this}function nt(e,t){return(e%t+t)%t}function st(e,t){if(isNaN(e)||isNaN(t))return NaN;var i=nt(t,12);return e+=(t-i)/12,1===i?We(e)?29:28:31-i%7%2}Ge=Array.prototype.indexOf?Array.prototype.indexOf:function(e){var t;for(t=0;t<this.length;++t)if(this[t]===e)return t;return-1},re("M",["MM",2],"Mo",function(){return this.month()+1}),re("MMM",0,0,function(e){return this.localeData().monthsShort(this,e)}),re("MMMM",0,0,function(e){return this.localeData().months(this,e)}),K("month","M"),X("month",8),$e("M",me),$e("MM",me,ue),$e("MMM",function(e,t){return t.monthsShortRegex(e)}),$e("MMMM",function(e,t){return t.monthsRegex(e)}),De(["M","MM"],function(e,t){t[Re]=S(e)-1}),De(["MMM","MMMM"],function(e,t,i,n){var s=i._locale.monthsParse(e,n,i._strict);null!=s?t[Re]=s:m(i).invalidMonth=e});var rt=/D[oD]?(\[[^\[\]]*\]|\s)+MMMM?/,ot="January_February_March_April_May_June_July_August_September_October_November_December".split("_");function at(e,t){return e?s(this._months)?this._months[e.month()]:this._months[(this._months.isFormat||rt).test(t)?"format":"standalone"][e.month()]:s(this._months)?this._months:this._months.standalone}var lt="Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_");function ct(e,t){return e?s(this._monthsShort)?this._monthsShort[e.month()]:this._monthsShort[rt.test(t)?"format":"standalone"][e.month()]:s(this._monthsShort)?this._monthsShort:this._monthsShort.standalone}function dt(e,t,i){var n,s,r,o=e.toLocaleLowerCase();if(!this._monthsParse)for(this._monthsParse=[],this._longMonthsParse=[],this._shortMonthsParse=[],n=0;n<12;++n)r=p([2e3,n]),this._shortMonthsParse[n]=this.monthsShort(r,"").toLocaleLowerCase(),this._longMonthsParse[n]=this.months(r,"").toLocaleLowerCase();return i?"MMM"===t?-1!==(s=Ge.call(this._shortMonthsParse,o))?s:null:-1!==(s=Ge.call(this._longMonthsParse,o))?s:null:"MMM"===t?-1!==(s=Ge.call(this._shortMonthsParse,o))||-1!==(s=Ge.call(this._longMonthsParse,o))?s:null:-1!==(s=Ge.call(this._longMonthsParse,o))||-1!==(s=Ge.call(this._shortMonthsParse,o))?s:null}function ut(e,t,i){var n,s,r;if(this._monthsParseExact)return dt.call(this,e,t,i);for(this._monthsParse||(this._monthsParse=[],this._longMonthsParse=[],this._shortMonthsParse=[]),n=0;n<12;n++){if(s=p([2e3,n]),i&&!this._longMonthsParse[n]&&(this._longMonthsParse[n]=new RegExp("^"+this.months(s,"").replace(".","")+"$","i"),this._shortMonthsParse[n]=new RegExp("^"+this.monthsShort(s,"").replace(".","")+"$","i")),i||this._monthsParse[n]||(r="^"+this.months(s,"")+"|^"+this.monthsShort(s,""),this._monthsParse[n]=new RegExp(r.replace(".",""),"i")),i&&"MMMM"===t&&this._longMonthsParse[n].test(e))return n;if(i&&"MMM"===t&&this._shortMonthsParse[n].test(e))return n;if(!i&&this._monthsParse[n].test(e))return n}}function ht(e,t){var i;if(!e.isValid())return e;if("string"==typeof t)if(/^\d+$/.test(t))t=S(t);else if(!l(t=e.localeData().monthsParse(t)))return e;return i=Math.min(e.date(),st(e.year(),t)),e._d["set"+(e._isUTC?"UTC":"")+"Month"](t,i),e}function pt(e){return null!=e?(ht(this,e),i.updateOffset(this,!0),this):Qe(this,"Month")}function ft(){return st(this.year(),this.month())}var mt=Ce;function gt(e){return this._monthsParseExact?(u(this,"_monthsRegex")||vt.call(this),e?this._monthsShortStrictRegex:this._monthsShortRegex):(u(this,"_monthsShortRegex")||(this._monthsShortRegex=mt),this._monthsShortStrictRegex&&e?this._monthsShortStrictRegex:this._monthsShortRegex)}var yt=Ce;function bt(e){return this._monthsParseExact?(u(this,"_monthsRegex")||vt.call(this),e?this._monthsStrictRegex:this._monthsRegex):(u(this,"_monthsRegex")||(this._monthsRegex=yt),this._monthsStrictRegex&&e?this._monthsStrictRegex:this._monthsRegex)}function vt(){function e(e,t){return t.length-e.length}var t,i,n=[],s=[],r=[];for(t=0;t<12;t++)i=p([2e3,t]),n.push(this.monthsShort(i,"")),s.push(this.months(i,"")),r.push(this.months(i,"")),r.push(this.monthsShort(i,""));for(n.sort(e),s.sort(e),r.sort(e),t=0;t<12;t++)n[t]=Ne(n[t]),s[t]=Ne(s[t]);for(t=0;t<24;t++)r[t]=Ne(r[t]);this._monthsRegex=new RegExp("^("+r.join("|")+")","i"),this._monthsShortRegex=this._monthsRegex,this._monthsStrictRegex=new RegExp("^("+s.join("|")+")","i"),this._monthsShortStrictRegex=new RegExp("^("+n.join("|")+")","i")}function _t(e,t,i,n,s,r,o){var a;return e<100&&e>=0?(a=new Date(e+400,t,i,n,s,r,o),isFinite(a.getFullYear())&&a.setFullYear(e)):a=new Date(e,t,i,n,s,r,o),a}function wt(e){var t;if(e<100&&e>=0){var i=Array.prototype.slice.call(arguments);i[0]=e+400,t=new Date(Date.UTC.apply(null,i)),isFinite(t.getUTCFullYear())&&t.setUTCFullYear(e)}else t=new Date(Date.UTC.apply(null,arguments));return t}function xt(e,t,i){var n=7+t-i;return-(7+wt(e,0,n).getUTCDay()-t)%7+n-1}function kt(e,t,i,n,s){var r,o,a=1+7*(t-1)+(7+i-n)%7+xt(e,n,s);return a<=0?o=Ve(r=e-1)+a:a>Ve(e)?(r=e+1,o=a-Ve(e)):(r=e,o=a),{year:r,dayOfYear:o}}function St(e,t,i){var n,s,r=xt(e.year(),t,i),o=Math.floor((e.dayOfYear()-r-1)/7)+1;return o<1?n=o+Mt(s=e.year()-1,t,i):o>Mt(e.year(),t,i)?(n=o-Mt(e.year(),t,i),s=e.year()+1):(s=e.year(),n=o),{week:n,year:s}}function Mt(e,t,i){var n=xt(e,t,i),s=xt(e+1,t,i);return(Ve(e)-n+s)/7}function Ct(e){return St(e,this._week.dow,this._week.doy).week}re("w",["ww",2],"wo","week"),re("W",["WW",2],"Wo","isoWeek"),K("week","w"),K("isoWeek","W"),X("week",5),X("isoWeek",5),$e("w",me),$e("ww",me,ue),$e("W",me),$e("WW",me,ue),Ie(["w","ww","W","WW"],function(e,t,i,n){t[n.substr(0,1)]=S(e)});var Tt={dow:0,doy:6};function $t(){return this._week.dow}function Ot(){return this._week.doy}function Et(e){var t=this.localeData().week(this);return null==e?t:this.add(7*(e-t),"d")}function Nt(e){var t=St(this,1,4).week;return null==e?t:this.add(7*(e-t),"d")}function At(e,t){return"string"!=typeof e?e:isNaN(e)?"number"==typeof(e=t.weekdaysParse(e))?e:null:parseInt(e,10)}function Dt(e,t){return"string"==typeof e?t.weekdaysParse(e)%7||7:isNaN(e)?null:e}function It(e,t){return e.slice(t,7).concat(e.slice(0,t))}re("d",0,"do","day"),re("dd",0,0,function(e){return this.localeData().weekdaysMin(this,e)}),re("ddd",0,0,function(e){return this.localeData().weekdaysShort(this,e)}),re("dddd",0,0,function(e){return this.localeData().weekdays(this,e)}),re("e",0,0,"weekday"),re("E",0,0,"isoWeekday"),K("day","d"),K("weekday","e"),K("isoWeekday","E"),X("day",11),X("weekday",11),X("isoWeekday",11),$e("d",me),$e("e",me),$e("E",me),$e("dd",function(e,t){return t.weekdaysMinRegex(e)}),$e("ddd",function(e,t){return t.weekdaysShortRegex(e)}),$e("dddd",function(e,t){return t.weekdaysRegex(e)}),Ie(["dd","ddd","dddd"],function(e,t,i,n){var s=i._locale.weekdaysParse(e,n,i._strict);null!=s?t.d=s:m(i).invalidWeekday=e}),Ie(["d","e","E"],function(e,t,i,n){t[n]=S(e)});var Lt="Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_");function Pt(e,t){var i=s(this._weekdays)?this._weekdays:this._weekdays[e&&!0!==e&&this._weekdays.isFormat.test(t)?"format":"standalone"];return!0===e?It(i,this._week.dow):e?i[e.day()]:i}var Rt="Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_");function Yt(e){return!0===e?It(this._weekdaysShort,this._week.dow):e?this._weekdaysShort[e.day()]:this._weekdaysShort}var jt="Su_Mo_Tu_We_Th_Fr_Sa".split("_");function zt(e){return!0===e?It(this._weekdaysMin,this._week.dow):e?this._weekdaysMin[e.day()]:this._weekdaysMin}function Ht(e,t,i){var n,s,r,o=e.toLocaleLowerCase();if(!this._weekdaysParse)for(this._weekdaysParse=[],this._shortWeekdaysParse=[],this._minWeekdaysParse=[],n=0;n<7;++n)r=p([2e3,1]).day(n),this._minWeekdaysParse[n]=this.weekdaysMin(r,"").toLocaleLowerCase(),this._shortWeekdaysParse[n]=this.weekdaysShort(r,"").toLocaleLowerCase(),this._weekdaysParse[n]=this.weekdays(r,"").toLocaleLowerCase();return i?"dddd"===t?-1!==(s=Ge.call(this._weekdaysParse,o))?s:null:"ddd"===t?-1!==(s=Ge.call(this._shortWeekdaysParse,o))?s:null:-1!==(s=Ge.call(this._minWeekdaysParse,o))?s:null:"dddd"===t?-1!==(s=Ge.call(this._weekdaysParse,o))||-1!==(s=Ge.call(this._shortWeekdaysParse,o))||-1!==(s=Ge.call(this._minWeekdaysParse,o))?s:null:"ddd"===t?-1!==(s=Ge.call(this._shortWeekdaysParse,o))||-1!==(s=Ge.call(this._weekdaysParse,o))||-1!==(s=Ge.call(this._minWeekdaysParse,o))?s:null:-1!==(s=Ge.call(this._minWeekdaysParse,o))||-1!==(s=Ge.call(this._weekdaysParse,o))||-1!==(s=Ge.call(this._shortWeekdaysParse,o))?s:null}function Ut(e,t,i){var n,s,r;if(this._weekdaysParseExact)return Ht.call(this,e,t,i);for(this._weekdaysParse||(this._weekdaysParse=[],this._minWeekdaysParse=[],this._shortWeekdaysParse=[],this._fullWeekdaysParse=[]),n=0;n<7;n++){if(s=p([2e3,1]).day(n),i&&!this._fullWeekdaysParse[n]&&(this._fullWeekdaysParse[n]=new RegExp("^"+this.weekdays(s,"").replace(".","\\.?")+"$","i"),this._shortWeekdaysParse[n]=new RegExp("^"+this.weekdaysShort(s,"").replace(".","\\.?")+"$","i"),this._minWeekdaysParse[n]=new RegExp("^"+this.weekdaysMin(s,"").replace(".","\\.?")+"$","i")),this._weekdaysParse[n]||(r="^"+this.weekdays(s,"")+"|^"+this.weekdaysShort(s,"")+"|^"+this.weekdaysMin(s,""),this._weekdaysParse[n]=new RegExp(r.replace(".",""),"i")),i&&"dddd"===t&&this._fullWeekdaysParse[n].test(e))return n;if(i&&"ddd"===t&&this._shortWeekdaysParse[n].test(e))return n;if(i&&"dd"===t&&this._minWeekdaysParse[n].test(e))return n;if(!i&&this._weekdaysParse[n].test(e))return n}}function qt(e){if(!this.isValid())return null!=e?this:NaN;var t=this._isUTC?this._d.getUTCDay():this._d.getDay();return null!=e?(e=At(e,this.localeData()),this.add(e-t,"d")):t}function Ft(e){if(!this.isValid())return null!=e?this:NaN;var t=(this.day()+7-this.localeData()._week.dow)%7;return null==e?t:this.add(e-t,"d")}function Bt(e){if(!this.isValid())return null!=e?this:NaN;if(null!=e){var t=Dt(e,this.localeData());return this.day(this.day()%7?t:t-7)}return this.day()||7}var Vt=Ce;function Wt(e){return this._weekdaysParseExact?(u(this,"_weekdaysRegex")||Xt.call(this),e?this._weekdaysStrictRegex:this._weekdaysRegex):(u(this,"_weekdaysRegex")||(this._weekdaysRegex=Vt),this._weekdaysStrictRegex&&e?this._weekdaysStrictRegex:this._weekdaysRegex)}var Kt=Ce;function Gt(e){return this._weekdaysParseExact?(u(this,"_weekdaysRegex")||Xt.call(this),e?this._weekdaysShortStrictRegex:this._weekdaysShortRegex):(u(this,"_weekdaysShortRegex")||(this._weekdaysShortRegex=Kt),this._weekdaysShortStrictRegex&&e?this._weekdaysShortStrictRegex:this._weekdaysShortRegex)}var Jt=Ce;function Zt(e){return this._weekdaysParseExact?(u(this,"_weekdaysRegex")||Xt.call(this),e?this._weekdaysMinStrictRegex:this._weekdaysMinRegex):(u(this,"_weekdaysMinRegex")||(this._weekdaysMinRegex=Jt),this._weekdaysMinStrictRegex&&e?this._weekdaysMinStrictRegex:this._weekdaysMinRegex)}function Xt(){function e(e,t){return t.length-e.length}var t,i,n,s,r,o=[],a=[],l=[],c=[];for(t=0;t<7;t++)i=p([2e3,1]).day(t),n=this.weekdaysMin(i,""),s=this.weekdaysShort(i,""),r=this.weekdays(i,""),o.push(n),a.push(s),l.push(r),c.push(n),c.push(s),c.push(r);for(o.sort(e),a.sort(e),l.sort(e),c.sort(e),t=0;t<7;t++)a[t]=Ne(a[t]),l[t]=Ne(l[t]),c[t]=Ne(c[t]);this._weekdaysRegex=new RegExp("^("+c.join("|")+")","i"),this._weekdaysShortRegex=this._weekdaysRegex,this._weekdaysMinRegex=this._weekdaysRegex,this._weekdaysStrictRegex=new RegExp("^("+l.join("|")+")","i"),this._weekdaysShortStrictRegex=new RegExp("^("+a.join("|")+")","i"),this._weekdaysMinStrictRegex=new RegExp("^("+o.join("|")+")","i")}function Qt(){return this.hours()%12||12}function ei(){return this.hours()||24}function ti(e,t){re(e,0,0,function(){return this.localeData().meridiem(this.hours(),this.minutes(),t)})}function ii(e,t){return t._meridiemParse}function ni(e){return"p"===(e+"").toLowerCase().charAt(0)}re("H",["HH",2],0,"hour"),re("h",["hh",2],0,Qt),re("k",["kk",2],0,ei),re("hmm",0,0,function(){return""+Qt.apply(this)+ee(this.minutes(),2)}),re("hmmss",0,0,function(){return""+Qt.apply(this)+ee(this.minutes(),2)+ee(this.seconds(),2)}),re("Hmm",0,0,function(){return""+this.hours()+ee(this.minutes(),2)}),re("Hmmss",0,0,function(){return""+this.hours()+ee(this.minutes(),2)+ee(this.seconds(),2)}),ti("a",!0),ti("A",!1),K("hour","h"),X("hour",13),$e("a",ii),$e("A",ii),$e("H",me),$e("h",me),$e("k",me),$e("HH",me,ue),$e("hh",me,ue),$e("kk",me,ue),$e("hmm",ge),$e("hmmss",ye),$e("Hmm",ge),$e("Hmmss",ye),De(["H","HH"],je),De(["k","kk"],function(e,t,i){var n=S(e);t[je]=24===n?0:n}),De(["a","A"],function(e,t,i){i._isPm=i._locale.isPM(e),i._meridiem=e}),De(["h","hh"],function(e,t,i){t[je]=S(e),m(i).bigHour=!0}),De("hmm",function(e,t,i){var n=e.length-2;t[je]=S(e.substr(0,n)),t[ze]=S(e.substr(n)),m(i).bigHour=!0}),De("hmmss",function(e,t,i){var n=e.length-4,s=e.length-2;t[je]=S(e.substr(0,n)),t[ze]=S(e.substr(n,2)),t[He]=S(e.substr(s)),m(i).bigHour=!0}),De("Hmm",function(e,t,i){var n=e.length-2;t[je]=S(e.substr(0,n)),t[ze]=S(e.substr(n))}),De("Hmmss",function(e,t,i){var n=e.length-4,s=e.length-2;t[je]=S(e.substr(0,n)),t[ze]=S(e.substr(n,2)),t[He]=S(e.substr(s))});var si=/[ap]\.?m?\.?/i;function ri(e,t,i){return e>11?i?"pm":"PM":i?"am":"AM"}var oi,ai=Xe("Hours",!0),li={calendar:L,longDateFormat:R,invalidDate:j,ordinal:H,dayOfMonthOrdinalParse:U,relativeTime:F,months:ot,monthsShort:lt,week:Tt,weekdays:Lt,weekdaysMin:jt,weekdaysShort:Rt,meridiemParse:si},ci={},di={};function ui(e){return e?e.toLowerCase().replace("_","-"):e}function hi(e){for(var t,i,n,s,r=0;r<e.length;){for(t=(s=ui(e[r]).split("-")).length,i=(i=ui(e[r+1]))?i.split("-"):null;t>0;){if(n=pi(s.slice(0,t).join("-")))return n;if(i&&i.length>=t&&M(s,i,!0)>=t-1)break;t--}r++}return oi}function pi(e){var t=null;if(!ci[e]&&Ke&&Ke.exports)try{t=oi._abbr,Be("./locale/"+e),fi(t)}catch(e){}return ci[e]}function fi(e,t){var i;return e&&((i=a(t)?yi(e):mi(e,t))?oi=i:"undefined"!=typeof console&&console.warn&&console.warn("Locale "+e+" not found. Did you forget to load it?")),oi._abbr}function mi(e,t){if(null!==t){var i,n=li;if(t.abbr=e,null!=ci[e])E("defineLocaleOverride","use moment.updateLocale(localeName, config) to change an existing locale. moment.defineLocale(localeName, config) should only be used for creating a new locale See http://momentjs.com/guides/#/warnings/define-locale/ for more info."),n=ci[e]._config;else if(null!=t.parentLocale)if(null!=ci[t.parentLocale])n=ci[t.parentLocale]._config;else{if(null==(i=pi(t.parentLocale)))return di[t.parentLocale]||(di[t.parentLocale]=[]),di[t.parentLocale].push({name:e,config:t}),null;n=i._config}return ci[e]=new I(D(n,t)),di[e]&&di[e].forEach(function(e){mi(e.name,e.config)}),fi(e),ci[e]}return delete ci[e],null}function gi(e,t){if(null!=t){var i,n,s=li;null!=(n=pi(e))&&(s=n._config),(i=new I(t=D(s,t))).parentLocale=ci[e],ci[e]=i,fi(e)}else null!=ci[e]&&(null!=ci[e].parentLocale?ci[e]=ci[e].parentLocale:null!=ci[e]&&delete ci[e]);return ci[e]}function yi(e){var t;if(e&&e._locale&&e._locale._abbr&&(e=e._locale._abbr),!e)return oi;if(!s(e)){if(t=pi(e))return t;e=[e]}return hi(e)}function bi(){return $(ci)}function vi(e){var t,i=e._a;return i&&-2===m(e).overflow&&(t=i[Re]<0||i[Re]>11?Re:i[Ye]<1||i[Ye]>st(i[Pe],i[Re])?Ye:i[je]<0||i[je]>24||24===i[je]&&(0!==i[ze]||0!==i[He]||0!==i[Ue])?je:i[ze]<0||i[ze]>59?ze:i[He]<0||i[He]>59?He:i[Ue]<0||i[Ue]>999?Ue:-1,m(e)._overflowDayOfYear&&(t<Pe||t>Ye)&&(t=Ye),m(e)._overflowWeeks&&-1===t&&(t=qe),m(e)._overflowWeekday&&-1===t&&(t=Fe),m(e).overflow=t),e}function _i(e,t,i){return null!=e?e:null!=t?t:i}function wi(e){var t=new Date(i.now());return e._useUTC?[t.getUTCFullYear(),t.getUTCMonth(),t.getUTCDate()]:[t.getFullYear(),t.getMonth(),t.getDate()]}function xi(e){var t,i,n,s,r,o=[];if(!e._d){for(n=wi(e),e._w&&null==e._a[Ye]&&null==e._a[Re]&&ki(e),null!=e._dayOfYear&&(r=_i(e._a[Pe],n[Pe]),(e._dayOfYear>Ve(r)||0===e._dayOfYear)&&(m(e)._overflowDayOfYear=!0),i=wt(r,0,e._dayOfYear),e._a[Re]=i.getUTCMonth(),e._a[Ye]=i.getUTCDate()),t=0;t<3&&null==e._a[t];++t)e._a[t]=o[t]=n[t];for(;t<7;t++)e._a[t]=o[t]=null==e._a[t]?2===t?1:0:e._a[t];24===e._a[je]&&0===e._a[ze]&&0===e._a[He]&&0===e._a[Ue]&&(e._nextDay=!0,e._a[je]=0),e._d=(e._useUTC?wt:_t).apply(null,o),s=e._useUTC?e._d.getUTCDay():e._d.getDay(),null!=e._tzm&&e._d.setUTCMinutes(e._d.getUTCMinutes()-e._tzm),e._nextDay&&(e._a[je]=24),e._w&&void 0!==e._w.d&&e._w.d!==s&&(m(e).weekdayMismatch=!0)}}function ki(e){var t,i,n,s,r,o,a,l;if(null!=(t=e._w).GG||null!=t.W||null!=t.E)r=1,o=4,i=_i(t.GG,e._a[Pe],St(Ki(),1,4).year),n=_i(t.W,1),((s=_i(t.E,1))<1||s>7)&&(l=!0);else{r=e._locale._week.dow,o=e._locale._week.doy;var c=St(Ki(),r,o);i=_i(t.gg,e._a[Pe],c.year),n=_i(t.w,c.week),null!=t.d?((s=t.d)<0||s>6)&&(l=!0):null!=t.e?(s=t.e+r,(t.e<0||t.e>6)&&(l=!0)):s=r}n<1||n>Mt(i,r,o)?m(e)._overflowWeeks=!0:null!=l?m(e)._overflowWeekday=!0:(a=kt(i,n,s,r,o),e._a[Pe]=a.year,e._dayOfYear=a.dayOfYear)}var Si=/^\s*((?:[+-]\d{6}|\d{4})-(?:\d\d-\d\d|W\d\d-\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?::\d\d(?::\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/,Mi=/^\s*((?:[+-]\d{6}|\d{4})(?:\d\d\d\d|W\d\d\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?:\d\d(?:\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/,Ci=/Z|[+-]\d\d(?::?\d\d)?/,Ti=[["YYYYYY-MM-DD",/[+-]\d{6}-\d\d-\d\d/],["YYYY-MM-DD",/\d{4}-\d\d-\d\d/],["GGGG-[W]WW-E",/\d{4}-W\d\d-\d/],["GGGG-[W]WW",/\d{4}-W\d\d/,!1],["YYYY-DDD",/\d{4}-\d{3}/],["YYYY-MM",/\d{4}-\d\d/,!1],["YYYYYYMMDD",/[+-]\d{10}/],["YYYYMMDD",/\d{8}/],["GGGG[W]WWE",/\d{4}W\d{3}/],["GGGG[W]WW",/\d{4}W\d{2}/,!1],["YYYYDDD",/\d{7}/]],$i=[["HH:mm:ss.SSSS",/\d\d:\d\d:\d\d\.\d+/],["HH:mm:ss,SSSS",/\d\d:\d\d:\d\d,\d+/],["HH:mm:ss",/\d\d:\d\d:\d\d/],["HH:mm",/\d\d:\d\d/],["HHmmss.SSSS",/\d\d\d\d\d\d\.\d+/],["HHmmss,SSSS",/\d\d\d\d\d\d,\d+/],["HHmmss",/\d\d\d\d\d\d/],["HHmm",/\d\d\d\d/],["HH",/\d\d/]],Oi=/^\/?Date\((\-?\d+)/i;function Ei(e){var t,i,n,s,r,o,a=e._i,l=Si.exec(a)||Mi.exec(a);if(l){for(m(e).iso=!0,t=0,i=Ti.length;t<i;t++)if(Ti[t][1].exec(l[1])){s=Ti[t][0],n=!1!==Ti[t][2];break}if(null==s)return void(e._isValid=!1);if(l[3]){for(t=0,i=$i.length;t<i;t++)if($i[t][1].exec(l[3])){r=(l[2]||" ")+$i[t][0];break}if(null==r)return void(e._isValid=!1)}if(!n&&null!=r)return void(e._isValid=!1);if(l[4]){if(!Ci.exec(l[4]))return void(e._isValid=!1);o="Z"}e._f=s+(r||"")+(o||""),zi(e)}else e._isValid=!1}var Ni=/^(?:(Mon|Tue|Wed|Thu|Fri|Sat|Sun),?\s)?(\d{1,2})\s(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(\d{2,4})\s(\d\d):(\d\d)(?::(\d\d))?\s(?:(UT|GMT|[ECMP][SD]T)|([Zz])|([+-]\d{4}))$/;function Ai(e,t,i,n,s,r){var o=[Di(e),lt.indexOf(t),parseInt(i,10),parseInt(n,10),parseInt(s,10)];return r&&o.push(parseInt(r,10)),o}function Di(e){var t=parseInt(e,10);return t<=49?2e3+t:t<=999?1900+t:t}function Ii(e){return e.replace(/\([^)]*\)|[\n\t]/g," ").replace(/(\s\s+)/g," ").replace(/^\s\s*/,"").replace(/\s\s*$/,"")}function Li(e,t,i){return!e||Rt.indexOf(e)===new Date(t[0],t[1],t[2]).getDay()||(m(i).weekdayMismatch=!0,i._isValid=!1,!1)}var Pi={UT:0,GMT:0,EDT:-240,EST:-300,CDT:-300,CST:-360,MDT:-360,MST:-420,PDT:-420,PST:-480};function Ri(e,t,i){if(e)return Pi[e];if(t)return 0;var n=parseInt(i,10),s=n%100;return(n-s)/100*60+s}function Yi(e){var t=Ni.exec(Ii(e._i));if(t){var i=Ai(t[4],t[3],t[2],t[5],t[6],t[7]);if(!Li(t[1],i,e))return;e._a=i,e._tzm=Ri(t[8],t[9],t[10]),e._d=wt.apply(null,e._a),e._d.setUTCMinutes(e._d.getUTCMinutes()-e._tzm),m(e).rfc2822=!0}else e._isValid=!1}function ji(e){var t=Oi.exec(e._i);null===t?(Ei(e),!1===e._isValid&&(delete e._isValid,Yi(e),!1===e._isValid&&(delete e._isValid,i.createFromInputFallback(e)))):e._d=new Date(+t[1])}function zi(e){if(e._f!==i.ISO_8601)if(e._f!==i.RFC_2822){e._a=[],m(e).empty=!0;var t,n,s,r,o,a=""+e._i,l=a.length,c=0;for(s=ce(e._f,e._locale).match(te)||[],t=0;t<s.length;t++)r=s[t],(n=(a.match(Oe(r,e))||[])[0])&&((o=a.substr(0,a.indexOf(n))).length>0&&m(e).unusedInput.push(o),a=a.slice(a.indexOf(n)+n.length),c+=n.length),se[r]?(n?m(e).empty=!1:m(e).unusedTokens.push(r),Le(r,n,e)):e._strict&&!n&&m(e).unusedTokens.push(r);m(e).charsLeftOver=l-c,a.length>0&&m(e).unusedInput.push(a),e._a[je]<=12&&!0===m(e).bigHour&&e._a[je]>0&&(m(e).bigHour=void 0),m(e).parsedDateParts=e._a.slice(0),m(e).meridiem=e._meridiem,e._a[je]=Hi(e._locale,e._a[je],e._meridiem),xi(e),vi(e)}else Yi(e);else Ei(e)}function Hi(e,t,i){var n;return null==i?t:null!=e.meridiemHour?e.meridiemHour(t,i):null!=e.isPM?((n=e.isPM(i))&&t<12&&(t+=12),n||12!==t||(t=0),t):t}function Ui(e){var t,i,n,s,r;if(0===e._f.length)return m(e).invalidFormat=!0,void(e._d=new Date(NaN));for(s=0;s<e._f.length;s++)r=0,t=v({},e),null!=e._useUTC&&(t._useUTC=e._useUTC),t._f=e._f[s],zi(t),g(t)&&(r+=m(t).charsLeftOver,r+=10*m(t).unusedTokens.length,m(t).score=r,(null==n||r<n)&&(n=r,i=t));h(e,i||t)}function qi(e){if(!e._d){var t=J(e._i);e._a=d([t.year,t.month,t.day||t.date,t.hour,t.minute,t.second,t.millisecond],function(e){return e&&parseInt(e,10)}),xi(e)}}function Fi(e){var t=new w(vi(Bi(e)));return t._nextDay&&(t.add(1,"d"),t._nextDay=void 0),t}function Bi(e){var t=e._i,i=e._f;return e._locale=e._locale||yi(e._l),null===t||void 0===i&&""===t?y({nullInput:!0}):("string"==typeof t&&(e._i=t=e._locale.preparse(t)),x(t)?new w(vi(t)):(c(t)?e._d=t:s(i)?Ui(e):i?zi(e):Vi(e),g(e)||(e._d=null),e))}function Vi(e){var t=e._i;a(t)?e._d=new Date(i.now()):c(t)?e._d=new Date(t.valueOf()):"string"==typeof t?ji(e):s(t)?(e._a=d(t.slice(0),function(e){return parseInt(e,10)}),xi(e)):r(t)?qi(e):l(t)?e._d=new Date(t):i.createFromInputFallback(e)}function Wi(e,t,i,n,a){var l={};return!0!==i&&!1!==i||(n=i,i=void 0),(r(e)&&o(e)||s(e)&&0===e.length)&&(e=void 0),l._isAMomentObject=!0,l._useUTC=l._isUTC=a,l._l=i,l._i=e,l._f=t,l._strict=n,Fi(l)}function Ki(e,t,i,n){return Wi(e,t,i,n,!1)}i.createFromInputFallback=T("value provided is not in a recognized RFC2822 or ISO format. moment construction falls back to js Date(), which is not reliable across all browsers and versions. Non RFC2822/ISO date formats are discouraged and will be removed in an upcoming major release. Please refer to http://momentjs.com/guides/#/warnings/js-date/ for more info.",function(e){e._d=new Date(e._i+(e._useUTC?" UTC":""))}),i.ISO_8601=function(){},i.RFC_2822=function(){};var Gi=T("moment().min is deprecated, use moment.max instead. http://momentjs.com/guides/#/warnings/min-max/",function(){var e=Ki.apply(null,arguments);return this.isValid()&&e.isValid()?e<this?this:e:y()}),Ji=T("moment().max is deprecated, use moment.min instead. http://momentjs.com/guides/#/warnings/min-max/",function(){var e=Ki.apply(null,arguments);return this.isValid()&&e.isValid()?e>this?this:e:y()});function Zi(e,t){var i,n;if(1===t.length&&s(t[0])&&(t=t[0]),!t.length)return Ki();for(i=t[0],n=1;n<t.length;++n)t[n].isValid()&&!t[n][e](i)||(i=t[n]);return i}function Xi(){return Zi("isBefore",[].slice.call(arguments,0))}function Qi(){return Zi("isAfter",[].slice.call(arguments,0))}var en=function(){return Date.now?Date.now():+new Date},tn=["year","quarter","month","week","day","hour","minute","second","millisecond"];function nn(e){for(var t in e)if(-1===Ge.call(tn,t)||null!=e[t]&&isNaN(e[t]))return!1;for(var i=!1,n=0;n<tn.length;++n)if(e[tn[n]]){if(i)return!1;parseFloat(e[tn[n]])!==S(e[tn[n]])&&(i=!0)}return!0}function sn(){return this._isValid}function rn(){return Tn(NaN)}function on(e){var t=J(e),i=t.year||0,n=t.quarter||0,s=t.month||0,r=t.week||t.isoWeek||0,o=t.day||0,a=t.hour||0,l=t.minute||0,c=t.second||0,d=t.millisecond||0;this._isValid=nn(t),this._milliseconds=+d+1e3*c+6e4*l+1e3*a*60*60,this._days=+o+7*r,this._months=+s+3*n+12*i,this._data={},this._locale=yi(),this._bubble()}function an(e){return e instanceof on}function ln(e){return e<0?-1*Math.round(-1*e):Math.round(e)}function cn(e,t){re(e,0,0,function(){var e=this.utcOffset(),i="+";return e<0&&(e=-e,i="-"),i+ee(~~(e/60),2)+t+ee(~~e%60,2)})}cn("Z",":"),cn("ZZ",""),$e("Z",Se),$e("ZZ",Se),De(["Z","ZZ"],function(e,t,i){i._useUTC=!0,i._tzm=un(Se,e)});var dn=/([\+\-]|\d\d)/gi;function un(e,t){var i=(t||"").match(e);if(null===i)return null;var n=((i[i.length-1]||[])+"").match(dn)||["-",0,0],s=60*n[1]+S(n[2]);return 0===s?0:"+"===n[0]?s:-s}function hn(e,t){var n,s;return t._isUTC?(n=t.clone(),s=(x(e)||c(e)?e.valueOf():Ki(e).valueOf())-n.valueOf(),n._d.setTime(n._d.valueOf()+s),i.updateOffset(n,!1),n):Ki(e).local()}function pn(e){return 15*-Math.round(e._d.getTimezoneOffset()/15)}function fn(e,t,n){var s,r=this._offset||0;if(!this.isValid())return null!=e?this:NaN;if(null!=e){if("string"==typeof e){if(null===(e=un(Se,e)))return this}else Math.abs(e)<16&&!n&&(e*=60);return!this._isUTC&&t&&(s=pn(this)),this._offset=e,this._isUTC=!0,null!=s&&this.add(s,"m"),r!==e&&(!t||this._changeInProgress?An(this,Tn(e-r,"m"),1,!1):this._changeInProgress||(this._changeInProgress=!0,i.updateOffset(this,!0),this._changeInProgress=null)),this}return this._isUTC?r:pn(this)}function mn(e,t){return null!=e?("string"!=typeof e&&(e=-e),this.utcOffset(e,t),this):-this.utcOffset()}function gn(e){return this.utcOffset(0,e)}function yn(e){return this._isUTC&&(this.utcOffset(0,e),this._isUTC=!1,e&&this.subtract(pn(this),"m")),this}function bn(){if(null!=this._tzm)this.utcOffset(this._tzm,!1,!0);else if("string"==typeof this._i){var e=un(ke,this._i);null!=e?this.utcOffset(e):this.utcOffset(0,!0)}return this}function vn(e){return!!this.isValid()&&(e=e?Ki(e).utcOffset():0,(this.utcOffset()-e)%60==0)}function _n(){return this.utcOffset()>this.clone().month(0).utcOffset()||this.utcOffset()>this.clone().month(5).utcOffset()}function wn(){if(!a(this._isDSTShifted))return this._isDSTShifted;var e={};if(v(e,this),(e=Bi(e))._a){var t=e._isUTC?p(e._a):Ki(e._a);this._isDSTShifted=this.isValid()&&M(e._a,t.toArray())>0}else this._isDSTShifted=!1;return this._isDSTShifted}function xn(){return!!this.isValid()&&!this._isUTC}function kn(){return!!this.isValid()&&this._isUTC}function Sn(){return!!this.isValid()&&this._isUTC&&0===this._offset}i.updateOffset=function(){};var Mn=/^(\-|\+)?(?:(\d*)[. ])?(\d+)\:(\d+)(?:\:(\d+)(\.\d*)?)?$/,Cn=/^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/;function Tn(e,t){var i,n,s,r=e,o=null;return an(e)?r={ms:e._milliseconds,d:e._days,M:e._months}:l(e)?(r={},t?r[t]=e:r.milliseconds=e):(o=Mn.exec(e))?(i="-"===o[1]?-1:1,r={y:0,d:S(o[Ye])*i,h:S(o[je])*i,m:S(o[ze])*i,s:S(o[He])*i,ms:S(ln(1e3*o[Ue]))*i}):(o=Cn.exec(e))?(i="-"===o[1]?-1:1,r={y:$n(o[2],i),M:$n(o[3],i),w:$n(o[4],i),d:$n(o[5],i),h:$n(o[6],i),m:$n(o[7],i),s:$n(o[8],i)}):null==r?r={}:"object"==typeof r&&("from"in r||"to"in r)&&(s=En(Ki(r.from),Ki(r.to)),(r={}).ms=s.milliseconds,r.M=s.months),n=new on(r),an(e)&&u(e,"_locale")&&(n._locale=e._locale),n}function $n(e,t){var i=e&&parseFloat(e.replace(",","."));return(isNaN(i)?0:i)*t}function On(e,t){var i={};return i.months=t.month()-e.month()+12*(t.year()-e.year()),e.clone().add(i.months,"M").isAfter(t)&&--i.months,i.milliseconds=+t-+e.clone().add(i.months,"M"),i}function En(e,t){var i;return e.isValid()&&t.isValid()?(t=hn(t,e),e.isBefore(t)?i=On(e,t):((i=On(t,e)).milliseconds=-i.milliseconds,i.months=-i.months),i):{milliseconds:0,months:0}}function Nn(e,t){return function(i,n){var s;return null===n||isNaN(+n)||(E(t,"moment()."+t+"(period, number) is deprecated. Please use moment()."+t+"(number, period). See http://momentjs.com/guides/#/warnings/add-inverted-param/ for more info."),s=i,i=n,n=s),An(this,Tn(i="string"==typeof i?+i:i,n),e),this}}function An(e,t,n,s){var r=t._milliseconds,o=ln(t._days),a=ln(t._months);e.isValid()&&(s=null==s||s,a&&ht(e,Qe(e,"Month")+a*n),o&&et(e,"Date",Qe(e,"Date")+o*n),r&&e._d.setTime(e._d.valueOf()+r*n),s&&i.updateOffset(e,o||a))}Tn.fn=on.prototype,Tn.invalid=rn;var Dn=Nn(1,"add"),In=Nn(-1,"subtract");function Ln(e,t){var i=e.diff(t,"days",!0);return i<-6?"sameElse":i<-1?"lastWeek":i<0?"lastDay":i<1?"sameDay":i<2?"nextDay":i<7?"nextWeek":"sameElse"}function Pn(e,t){var n=e||Ki(),s=hn(n,this).startOf("day"),r=i.calendarFormat(this,s)||"sameElse",o=t&&(N(t[r])?t[r].call(this,n):t[r]);return this.format(o||this.localeData().calendar(r,this,Ki(n)))}function Rn(){return new w(this)}function Yn(e,t){var i=x(e)?e:Ki(e);return!(!this.isValid()||!i.isValid())&&("millisecond"===(t=G(t)||"millisecond")?this.valueOf()>i.valueOf():i.valueOf()<this.clone().startOf(t).valueOf())}function jn(e,t){var i=x(e)?e:Ki(e);return!(!this.isValid()||!i.isValid())&&("millisecond"===(t=G(t)||"millisecond")?this.valueOf()<i.valueOf():this.clone().endOf(t).valueOf()<i.valueOf())}function zn(e,t,i,n){var s=x(e)?e:Ki(e),r=x(t)?t:Ki(t);return!!(this.isValid()&&s.isValid()&&r.isValid())&&("("===(n=n||"()")[0]?this.isAfter(s,i):!this.isBefore(s,i))&&(")"===n[1]?this.isBefore(r,i):!this.isAfter(r,i))}function Hn(e,t){var i,n=x(e)?e:Ki(e);return!(!this.isValid()||!n.isValid())&&("millisecond"===(t=G(t)||"millisecond")?this.valueOf()===n.valueOf():(i=n.valueOf(),this.clone().startOf(t).valueOf()<=i&&i<=this.clone().endOf(t).valueOf()))}function Un(e,t){return this.isSame(e,t)||this.isAfter(e,t)}function qn(e,t){return this.isSame(e,t)||this.isBefore(e,t)}function Fn(e,t,i){var n,s,r;if(!this.isValid())return NaN;if(!(n=hn(e,this)).isValid())return NaN;switch(s=6e4*(n.utcOffset()-this.utcOffset()),t=G(t)){case"year":r=Bn(this,n)/12;break;case"month":r=Bn(this,n);break;case"quarter":r=Bn(this,n)/3;break;case"second":r=(this-n)/1e3;break;case"minute":r=(this-n)/6e4;break;case"hour":r=(this-n)/36e5;break;case"day":r=(this-n-s)/864e5;break;case"week":r=(this-n-s)/6048e5;break;default:r=this-n}return i?r:k(r)}function Bn(e,t){var i=12*(t.year()-e.year())+(t.month()-e.month()),n=e.clone().add(i,"months");return-(i+(t-n<0?(t-n)/(n-e.clone().add(i-1,"months")):(t-n)/(e.clone().add(i+1,"months")-n)))||0}function Vn(){return this.clone().locale("en").format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ")}function Wn(e){if(!this.isValid())return null;var t=!0!==e,i=t?this.clone().utc():this;return i.year()<0||i.year()>9999?le(i,t?"YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]":"YYYYYY-MM-DD[T]HH:mm:ss.SSSZ"):N(Date.prototype.toISOString)?t?this.toDate().toISOString():new Date(this.valueOf()+60*this.utcOffset()*1e3).toISOString().replace("Z",le(i,"Z")):le(i,t?"YYYY-MM-DD[T]HH:mm:ss.SSS[Z]":"YYYY-MM-DD[T]HH:mm:ss.SSSZ")}function Kn(){if(!this.isValid())return"moment.invalid(/* "+this._i+" */)";var e="moment",t="";this.isLocal()||(e=0===this.utcOffset()?"moment.utc":"moment.parseZone",t="Z");var i="["+e+'("]',n=0<=this.year()&&this.year()<=9999?"YYYY":"YYYYYY",s="-MM-DD[T]HH:mm:ss.SSS",r=t+'[")]';return this.format(i+n+s+r)}function Gn(e){e||(e=this.isUtc()?i.defaultFormatUtc:i.defaultFormat);var t=le(this,e);return this.localeData().postformat(t)}function Jn(e,t){return this.isValid()&&(x(e)&&e.isValid()||Ki(e).isValid())?Tn({to:this,from:e}).locale(this.locale()).humanize(!t):this.localeData().invalidDate()}function Zn(e){return this.from(Ki(),e)}function Xn(e,t){return this.isValid()&&(x(e)&&e.isValid()||Ki(e).isValid())?Tn({from:this,to:e}).locale(this.locale()).humanize(!t):this.localeData().invalidDate()}function Qn(e){return this.to(Ki(),e)}function es(e){var t;return void 0===e?this._locale._abbr:(null!=(t=yi(e))&&(this._locale=t),this)}i.defaultFormat="YYYY-MM-DDTHH:mm:ssZ",i.defaultFormatUtc="YYYY-MM-DDTHH:mm:ss[Z]";var ts=T("moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.",function(e){return void 0===e?this.localeData():this.locale(e)});function is(){return this._locale}var ns=1e3,ss=60*ns,rs=60*ss,os=3506328*rs;function as(e,t){return(e%t+t)%t}function ls(e,t,i){return e<100&&e>=0?new Date(e+400,t,i)-os:new Date(e,t,i).valueOf()}function cs(e,t,i){return e<100&&e>=0?Date.UTC(e+400,t,i)-os:Date.UTC(e,t,i)}function ds(e){var t;if(void 0===(e=G(e))||"millisecond"===e||!this.isValid())return this;var n=this._isUTC?cs:ls;switch(e){case"year":t=n(this.year(),0,1);break;case"quarter":t=n(this.year(),this.month()-this.month()%3,1);break;case"month":t=n(this.year(),this.month(),1);break;case"week":t=n(this.year(),this.month(),this.date()-this.weekday());break;case"isoWeek":t=n(this.year(),this.month(),this.date()-(this.isoWeekday()-1));break;case"day":case"date":t=n(this.year(),this.month(),this.date());break;case"hour":t=this._d.valueOf(),t-=as(t+(this._isUTC?0:this.utcOffset()*ss),rs);break;case"minute":t=this._d.valueOf(),t-=as(t,ss);break;case"second":t=this._d.valueOf(),t-=as(t,ns)}return this._d.setTime(t),i.updateOffset(this,!0),this}function us(e){var t;if(void 0===(e=G(e))||"millisecond"===e||!this.isValid())return this;var n=this._isUTC?cs:ls;switch(e){case"year":t=n(this.year()+1,0,1)-1;break;case"quarter":t=n(this.year(),this.month()-this.month()%3+3,1)-1;break;case"month":t=n(this.year(),this.month()+1,1)-1;break;case"week":t=n(this.year(),this.month(),this.date()-this.weekday()+7)-1;break;case"isoWeek":t=n(this.year(),this.month(),this.date()-(this.isoWeekday()-1)+7)-1;break;case"day":case"date":t=n(this.year(),this.month(),this.date()+1)-1;break;case"hour":t=this._d.valueOf(),t+=rs-as(t+(this._isUTC?0:this.utcOffset()*ss),rs)-1;break;case"minute":t=this._d.valueOf(),t+=ss-as(t,ss)-1;break;case"second":t=this._d.valueOf(),t+=ns-as(t,ns)-1}return this._d.setTime(t),i.updateOffset(this,!0),this}function hs(){return this._d.valueOf()-6e4*(this._offset||0)}function ps(){return Math.floor(this.valueOf()/1e3)}function fs(){return new Date(this.valueOf())}function ms(){var e=this;return[e.year(),e.month(),e.date(),e.hour(),e.minute(),e.second(),e.millisecond()]}function gs(){var e=this;return{years:e.year(),months:e.month(),date:e.date(),hours:e.hours(),minutes:e.minutes(),seconds:e.seconds(),milliseconds:e.milliseconds()}}function ys(){return this.isValid()?this.toISOString():null}function bs(){return g(this)}function vs(){return h({},m(this))}function _s(){return m(this).overflow}function ws(){return{input:this._i,format:this._f,locale:this._locale,isUTC:this._isUTC,strict:this._strict}}function xs(e,t){re(0,[e,e.length],0,t)}function ks(e){return Ts.call(this,e,this.week(),this.weekday(),this.localeData()._week.dow,this.localeData()._week.doy)}function Ss(e){return Ts.call(this,e,this.isoWeek(),this.isoWeekday(),1,4)}function Ms(){return Mt(this.year(),1,4)}function Cs(){var e=this.localeData()._week;return Mt(this.year(),e.dow,e.doy)}function Ts(e,t,i,n,s){var r;return null==e?St(this,n,s).year:(t>(r=Mt(e,n,s))&&(t=r),$s.call(this,e,t,i,n,s))}function $s(e,t,i,n,s){var r=kt(e,t,i,n,s),o=wt(r.year,0,r.dayOfYear);return this.year(o.getUTCFullYear()),this.month(o.getUTCMonth()),this.date(o.getUTCDate()),this}function Os(e){return null==e?Math.ceil((this.month()+1)/3):this.month(3*(e-1)+this.month()%3)}re(0,["gg",2],0,function(){return this.weekYear()%100}),re(0,["GG",2],0,function(){return this.isoWeekYear()%100}),xs("gggg","weekYear"),xs("ggggg","weekYear"),xs("GGGG","isoWeekYear"),xs("GGGGG","isoWeekYear"),K("weekYear","gg"),K("isoWeekYear","GG"),X("weekYear",1),X("isoWeekYear",1),$e("G",xe),$e("g",xe),$e("GG",me,ue),$e("gg",me,ue),$e("GGGG",ve,pe),$e("gggg",ve,pe),$e("GGGGG",_e,fe),$e("ggggg",_e,fe),Ie(["gggg","ggggg","GGGG","GGGGG"],function(e,t,i,n){t[n.substr(0,2)]=S(e)}),Ie(["gg","GG"],function(e,t,n,s){t[s]=i.parseTwoDigitYear(e)}),re("Q",0,"Qo","quarter"),K("quarter","Q"),X("quarter",7),$e("Q",de),De("Q",function(e,t){t[Re]=3*(S(e)-1)}),re("D",["DD",2],"Do","date"),K("date","D"),X("date",9),$e("D",me),$e("DD",me,ue),$e("Do",function(e,t){return e?t._dayOfMonthOrdinalParse||t._ordinalParse:t._dayOfMonthOrdinalParseLenient}),De(["D","DD"],Ye),De("Do",function(e,t){t[Ye]=S(e.match(me)[0])});var Es=Xe("Date",!0);function Ns(e){var t=Math.round((this.clone().startOf("day")-this.clone().startOf("year"))/864e5)+1;return null==e?t:this.add(e-t,"d")}re("DDD",["DDDD",3],"DDDo","dayOfYear"),K("dayOfYear","DDD"),X("dayOfYear",4),$e("DDD",be),$e("DDDD",he),De(["DDD","DDDD"],function(e,t,i){i._dayOfYear=S(e)}),re("m",["mm",2],0,"minute"),K("minute","m"),X("minute",14),$e("m",me),$e("mm",me,ue),De(["m","mm"],ze);var As=Xe("Minutes",!1);re("s",["ss",2],0,"second"),K("second","s"),X("second",15),$e("s",me),$e("ss",me,ue),De(["s","ss"],He);var Ds,Is=Xe("Seconds",!1);for(re("S",0,0,function(){return~~(this.millisecond()/100)}),re(0,["SS",2],0,function(){return~~(this.millisecond()/10)}),re(0,["SSS",3],0,"millisecond"),re(0,["SSSS",4],0,function(){return 10*this.millisecond()}),re(0,["SSSSS",5],0,function(){return 100*this.millisecond()}),re(0,["SSSSSS",6],0,function(){return 1e3*this.millisecond()}),re(0,["SSSSSSS",7],0,function(){return 1e4*this.millisecond()}),re(0,["SSSSSSSS",8],0,function(){return 1e5*this.millisecond()}),re(0,["SSSSSSSSS",9],0,function(){return 1e6*this.millisecond()}),K("millisecond","ms"),X("millisecond",16),$e("S",be,de),$e("SS",be,ue),$e("SSS",be,he),Ds="SSSS";Ds.length<=9;Ds+="S")$e(Ds,we);function Ls(e,t){t[Ue]=S(1e3*("0."+e))}for(Ds="S";Ds.length<=9;Ds+="S")De(Ds,Ls);var Ps=Xe("Milliseconds",!1);function Rs(){return this._isUTC?"UTC":""}function Ys(){return this._isUTC?"Coordinated Universal Time":""}re("z",0,0,"zoneAbbr"),re("zz",0,0,"zoneName");var js=w.prototype;function zs(e){return Ki(1e3*e)}function Hs(){return Ki.apply(null,arguments).parseZone()}function Us(e){return e}js.add=Dn,js.calendar=Pn,js.clone=Rn,js.diff=Fn,js.endOf=us,js.format=Gn,js.from=Jn,js.fromNow=Zn,js.to=Xn,js.toNow=Qn,js.get=tt,js.invalidAt=_s,js.isAfter=Yn,js.isBefore=jn,js.isBetween=zn,js.isSame=Hn,js.isSameOrAfter=Un,js.isSameOrBefore=qn,js.isValid=bs,js.lang=ts,js.locale=es,js.localeData=is,js.max=Ji,js.min=Gi,js.parsingFlags=vs,js.set=it,js.startOf=ds,js.subtract=In,js.toArray=ms,js.toObject=gs,js.toDate=fs,js.toISOString=Wn,js.inspect=Kn,js.toJSON=ys,js.toString=Vn,js.unix=ps,js.valueOf=hs,js.creationData=ws,js.year=Je,js.isLeapYear=Ze,js.weekYear=ks,js.isoWeekYear=Ss,js.quarter=js.quarters=Os,js.month=pt,js.daysInMonth=ft,js.week=js.weeks=Et,js.isoWeek=js.isoWeeks=Nt,js.weeksInYear=Cs,js.isoWeeksInYear=Ms,js.date=Es,js.day=js.days=qt,js.weekday=Ft,js.isoWeekday=Bt,js.dayOfYear=Ns,js.hour=js.hours=ai,js.minute=js.minutes=As,js.second=js.seconds=Is,js.millisecond=js.milliseconds=Ps,js.utcOffset=fn,js.utc=gn,js.local=yn,js.parseZone=bn,js.hasAlignedHourOffset=vn,js.isDST=_n,js.isLocal=xn,js.isUtcOffset=kn,js.isUtc=Sn,js.isUTC=Sn,js.zoneAbbr=Rs,js.zoneName=Ys,js.dates=T("dates accessor is deprecated. Use date instead.",Es),js.months=T("months accessor is deprecated. Use month instead",pt),js.years=T("years accessor is deprecated. Use year instead",Je),js.zone=T("moment().zone is deprecated, use moment().utcOffset instead. http://momentjs.com/guides/#/warnings/zone/",mn),js.isDSTShifted=T("isDSTShifted is deprecated. See http://momentjs.com/guides/#/warnings/dst-shifted/ for more information",wn);var qs=I.prototype;function Fs(e,t,i,n){var s=yi(),r=p().set(n,t);return s[i](r,e)}function Bs(e,t,i){if(l(e)&&(t=e,e=void 0),e=e||"",null!=t)return Fs(e,t,i,"month");var n,s=[];for(n=0;n<12;n++)s[n]=Fs(e,n,i,"month");return s}function Vs(e,t,i,n){"boolean"==typeof e?(l(t)&&(i=t,t=void 0),t=t||""):(i=t=e,e=!1,l(t)&&(i=t,t=void 0),t=t||"");var s,r=yi(),o=e?r._week.dow:0;if(null!=i)return Fs(t,(i+o)%7,n,"day");var a=[];for(s=0;s<7;s++)a[s]=Fs(t,(s+o)%7,n,"day");return a}function Ws(e,t){return Bs(e,t,"months")}function Ks(e,t){return Bs(e,t,"monthsShort")}function Gs(e,t,i){return Vs(e,t,i,"weekdays")}function Js(e,t,i){return Vs(e,t,i,"weekdaysShort")}function Zs(e,t,i){return Vs(e,t,i,"weekdaysMin")}qs.calendar=P,qs.longDateFormat=Y,qs.invalidDate=z,qs.ordinal=q,qs.preparse=Us,qs.postformat=Us,qs.relativeTime=B,qs.pastFuture=V,qs.set=A,qs.months=at,qs.monthsShort=ct,qs.monthsParse=ut,qs.monthsRegex=bt,qs.monthsShortRegex=gt,qs.week=Ct,qs.firstDayOfYear=Ot,qs.firstDayOfWeek=$t,qs.weekdays=Pt,qs.weekdaysMin=zt,qs.weekdaysShort=Yt,qs.weekdaysParse=Ut,qs.weekdaysRegex=Wt,qs.weekdaysShortRegex=Gt,qs.weekdaysMinRegex=Zt,qs.isPM=ni,qs.meridiem=ri,fi("en",{dayOfMonthOrdinalParse:/\d{1,2}(th|st|nd|rd)/,ordinal:function(e){var t=e%10;return e+(1===S(e%100/10)?"th":1===t?"st":2===t?"nd":3===t?"rd":"th")}}),i.lang=T("moment.lang is deprecated. Use moment.locale instead.",fi),i.langData=T("moment.langData is deprecated. Use moment.localeData instead.",yi);var Xs=Math.abs;function Qs(){var e=this._data;return this._milliseconds=Xs(this._milliseconds),this._days=Xs(this._days),this._months=Xs(this._months),e.milliseconds=Xs(e.milliseconds),e.seconds=Xs(e.seconds),e.minutes=Xs(e.minutes),e.hours=Xs(e.hours),e.months=Xs(e.months),e.years=Xs(e.years),this}function er(e,t,i,n){var s=Tn(t,i);return e._milliseconds+=n*s._milliseconds,e._days+=n*s._days,e._months+=n*s._months,e._bubble()}function tr(e,t){return er(this,e,t,1)}function ir(e,t){return er(this,e,t,-1)}function nr(e){return e<0?Math.floor(e):Math.ceil(e)}function sr(){var e,t,i,n,s,r=this._milliseconds,o=this._days,a=this._months,l=this._data;return r>=0&&o>=0&&a>=0||r<=0&&o<=0&&a<=0||(r+=864e5*nr(or(a)+o),o=0,a=0),l.milliseconds=r%1e3,e=k(r/1e3),l.seconds=e%60,t=k(e/60),l.minutes=t%60,i=k(t/60),l.hours=i%24,o+=k(i/24),a+=s=k(rr(o)),o-=nr(or(s)),n=k(a/12),a%=12,l.days=o,l.months=a,l.years=n,this}function rr(e){return 4800*e/146097}function or(e){return 146097*e/4800}function ar(e){if(!this.isValid())return NaN;var t,i,n=this._milliseconds;if("month"===(e=G(e))||"quarter"===e||"year"===e)switch(t=this._days+n/864e5,i=this._months+rr(t),e){case"month":return i;case"quarter":return i/3;case"year":return i/12}else switch(t=this._days+Math.round(or(this._months)),e){case"week":return t/7+n/6048e5;case"day":return t+n/864e5;case"hour":return 24*t+n/36e5;case"minute":return 1440*t+n/6e4;case"second":return 86400*t+n/1e3;case"millisecond":return Math.floor(864e5*t)+n;default:throw new Error("Unknown unit "+e)}}function lr(){return this.isValid()?this._milliseconds+864e5*this._days+this._months%12*2592e6+31536e6*S(this._months/12):NaN}function cr(e){return function(){return this.as(e)}}var dr=cr("ms"),ur=cr("s"),hr=cr("m"),pr=cr("h"),fr=cr("d"),mr=cr("w"),gr=cr("M"),yr=cr("Q"),br=cr("y");function vr(){return Tn(this)}function _r(e){return e=G(e),this.isValid()?this[e+"s"]():NaN}function wr(e){return function(){return this.isValid()?this._data[e]:NaN}}var xr=wr("milliseconds"),kr=wr("seconds"),Sr=wr("minutes"),Mr=wr("hours"),Cr=wr("days"),Tr=wr("months"),$r=wr("years");function Or(){return k(this.days()/7)}var Er=Math.round,Nr={ss:44,s:45,m:45,h:22,d:26,M:11};function Ar(e,t,i,n,s){return s.relativeTime(t||1,!!i,e,n)}function Dr(e,t,i){var n=Tn(e).abs(),s=Er(n.as("s")),r=Er(n.as("m")),o=Er(n.as("h")),a=Er(n.as("d")),l=Er(n.as("M")),c=Er(n.as("y")),d=s<=Nr.ss&&["s",s]||s<Nr.s&&["ss",s]||r<=1&&["m"]||r<Nr.m&&["mm",r]||o<=1&&["h"]||o<Nr.h&&["hh",o]||a<=1&&["d"]||a<Nr.d&&["dd",a]||l<=1&&["M"]||l<Nr.M&&["MM",l]||c<=1&&["y"]||["yy",c];return d[2]=t,d[3]=+e>0,d[4]=i,Ar.apply(null,d)}function Ir(e){return void 0===e?Er:"function"==typeof e&&(Er=e,!0)}function Lr(e,t){return void 0!==Nr[e]&&(void 0===t?Nr[e]:(Nr[e]=t,"s"===e&&(Nr.ss=t-1),!0))}function Pr(e){if(!this.isValid())return this.localeData().invalidDate();var t=this.localeData(),i=Dr(this,!e,t);return e&&(i=t.pastFuture(+this,i)),t.postformat(i)}var Rr=Math.abs;function Yr(e){return(e>0)-(e<0)||+e}function jr(){if(!this.isValid())return this.localeData().invalidDate();var e,t,i=Rr(this._milliseconds)/1e3,n=Rr(this._days),s=Rr(this._months);e=k(i/60),t=k(e/60),i%=60,e%=60;var r=k(s/12),o=s%=12,a=n,l=t,c=e,d=i?i.toFixed(3).replace(/\.?0+$/,""):"",u=this.asSeconds();if(!u)return"P0D";var h=u<0?"-":"",p=Yr(this._months)!==Yr(u)?"-":"",f=Yr(this._days)!==Yr(u)?"-":"",m=Yr(this._milliseconds)!==Yr(u)?"-":"";return h+"P"+(r?p+r+"Y":"")+(o?p+o+"M":"")+(a?f+a+"D":"")+(l||c||d?"T":"")+(l?m+l+"H":"")+(c?m+c+"M":"")+(d?m+d+"S":"")}var zr=on.prototype;return zr.isValid=sn,zr.abs=Qs,zr.add=tr,zr.subtract=ir,zr.as=ar,zr.asMilliseconds=dr,zr.asSeconds=ur,zr.asMinutes=hr,zr.asHours=pr,zr.asDays=fr,zr.asWeeks=mr,zr.asMonths=gr,zr.asQuarters=yr,zr.asYears=br,zr.valueOf=lr,zr._bubble=sr,zr.clone=vr,zr.get=_r,zr.milliseconds=xr,zr.seconds=kr,zr.minutes=Sr,zr.hours=Mr,zr.days=Cr,zr.weeks=Or,zr.months=Tr,zr.years=$r,zr.humanize=Pr,zr.toISOString=jr,zr.toString=jr,zr.toJSON=jr,zr.locale=es,zr.localeData=is,zr.toIsoString=T("toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)",jr),zr.lang=ts,re("X",0,0,"unix"),re("x",0,0,"valueOf"),$e("x",xe),$e("X",Me),De("X",function(e,t,i){i._d=new Date(1e3*parseFloat(e,10))}),De("x",function(e,t,i){i._d=new Date(S(e))}),i.version="2.24.0",n(Ki),i.fn=js,i.min=Xi,i.max=Qi,i.now=en,i.utc=p,i.unix=zs,i.months=Ws,i.isDate=c,i.locale=fi,i.invalid=y,i.duration=Tn,i.isMoment=x,i.weekdays=Gs,i.parseZone=Hs,i.localeData=yi,i.isDuration=an,i.monthsShort=Ks,i.weekdaysMin=Zs,i.defineLocale=mi,i.updateLocale=gi,i.locales=bi,i.weekdaysShort=Js,i.normalizeUnits=G,i.relativeTimeRounding=Ir,i.relativeTimeThreshold=Lr,i.calendarFormat=Ln,i.prototype=js,i.HTML5_FMT={DATETIME_LOCAL:"YYYY-MM-DDTHH:mm",DATETIME_LOCAL_SECONDS:"YYYY-MM-DDTHH:mm:ss",DATETIME_LOCAL_MS:"YYYY-MM-DDTHH:mm:ss.SSS",DATE:"YYYY-MM-DD",TIME:"HH:mm",TIME_SECONDS:"HH:mm:ss",TIME_MS:"HH:mm:ss.SSS",WEEK:"GGGG-[W]WW",MONTH:"YYYY-MM"},i}()),We.exports);const Je=Symbol.for("yaml.alias"),Ze=Symbol.for("yaml.document"),Xe=Symbol.for("yaml.map"),Qe=Symbol.for("yaml.pair"),et=Symbol.for("yaml.scalar"),tt=Symbol.for("yaml.seq"),it=Symbol.for("yaml.node.type"),nt=e=>!!e&&"object"==typeof e&&e[it]===Je,st=e=>!!e&&"object"==typeof e&&e[it]===Ze,rt=e=>!!e&&"object"==typeof e&&e[it]===Xe,ot=e=>!!e&&"object"==typeof e&&e[it]===Qe,at=e=>!!e&&"object"==typeof e&&e[it]===et,lt=e=>!!e&&"object"==typeof e&&e[it]===tt;function ct(e){if(e&&"object"==typeof e)switch(e[it]){case Xe:case tt:return!0}return!1}function dt(e){if(e&&"object"==typeof e)switch(e[it]){case Je:case Xe:case et:case tt:return!0}return!1}const ut=e=>(at(e)||ct(e))&&!!e.anchor,ht=Symbol("break visit"),pt=Symbol("skip children"),ft=Symbol("remove node");function mt(e,t){const i=function(e){if("object"==typeof e&&(e.Collection||e.Node||e.Value))return Object.assign({Alias:e.Node,Map:e.Node,Scalar:e.Node,Seq:e.Node},e.Value&&{Map:e.Value,Scalar:e.Value,Seq:e.Value},e.Collection&&{Map:e.Collection,Seq:e.Collection},e);return e}(t);if(st(e)){gt(null,e.contents,i,Object.freeze([e]))===ft&&(e.contents=null)}else gt(null,e,i,Object.freeze([]))}function gt(e,t,i,n){const s=function(e,t,i,n){return"function"==typeof i?i(e,t,n):rt(t)?i.Map?.(e,t,n):lt(t)?i.Seq?.(e,t,n):ot(t)?i.Pair?.(e,t,n):at(t)?i.Scalar?.(e,t,n):nt(t)?i.Alias?.(e,t,n):void 0}(e,t,i,n);if(dt(s)||ot(s))return function(e,t,i){const n=t[t.length-1];if(ct(n))n.items[e]=i;else if(ot(n))"key"===e?n.key=i:n.value=i;else{if(!st(n)){const e=nt(n)?"alias":"scalar";throw new Error(`Cannot replace node with ${e} parent`)}n.contents=i}}(e,n,s),gt(e,s,i,n);if("symbol"!=typeof s)if(ct(t)){n=Object.freeze(n.concat(t));for(let e=0;e<t.items.length;++e){const s=gt(e,t.items[e],i,n);if("number"==typeof s)e=s-1;else{if(s===ht)return ht;s===ft&&(t.items.splice(e,1),e-=1)}}}else if(ot(t)){n=Object.freeze(n.concat(t));const e=gt("key",t.key,i,n);if(e===ht)return ht;e===ft&&(t.key=null);const s=gt("value",t.value,i,n);if(s===ht)return ht;s===ft&&(t.value=null)}return s}mt.BREAK=ht,mt.SKIP=pt,mt.REMOVE=ft;const yt={"!":"%21",",":"%2C","[":"%5B","]":"%5D","{":"%7B","}":"%7D"},bt=e=>e.replace(/[!,[\]{}]/g,e=>yt[e]);class vt{constructor(e,t){this.docStart=null,this.docEnd=!1,this.yaml=Object.assign({},vt.defaultYaml,e),this.tags=Object.assign({},vt.defaultTags,t)}clone(){const e=new vt(this.yaml,this.tags);return e.docStart=this.docStart,e}atDocument(){const e=new vt(this.yaml,this.tags);switch(this.yaml.version){case"1.1":this.atNextDocument=!0;break;case"1.2":this.atNextDocument=!1,this.yaml={explicit:vt.defaultYaml.explicit,version:"1.2"},this.tags=Object.assign({},vt.defaultTags)}return e}add(e,t){this.atNextDocument&&(this.yaml={explicit:vt.defaultYaml.explicit,version:"1.1"},this.tags=Object.assign({},vt.defaultTags),this.atNextDocument=!1);const i=e.trim().split(/[ \t]+/),n=i.shift();switch(n){case"%TAG":{if(2!==i.length&&(t(0,"%TAG directive should contain exactly two parts"),i.length<2))return!1;const[e,n]=i;return this.tags[e]=n,!0}case"%YAML":{if(this.yaml.explicit=!0,1!==i.length)return t(0,"%YAML directive should contain exactly one part"),!1;const[e]=i;if("1.1"===e||"1.2"===e)return this.yaml.version=e,!0;return t(6,`Unsupported YAML version ${e}`,/^\d+\.\d+$/.test(e)),!1}default:return t(0,`Unknown directive ${n}`,!0),!1}}tagName(e,t){if("!"===e)return"!";if("!"!==e[0])return t(`Not a valid tag: ${e}`),null;if("<"===e[1]){const i=e.slice(2,-1);return"!"===i||"!!"===i?(t(`Verbatim tags aren't resolved, so ${e} is invalid.`),null):(">"!==e[e.length-1]&&t("Verbatim tags must end with a >"),i)}const[,i,n]=e.match(/^(.*!)([^!]*)$/s);n||t(`The ${e} tag has no suffix`);const s=this.tags[i];if(s)try{return s+decodeURIComponent(n)}catch(e){return t(String(e)),null}return"!"===i?e:(t(`Could not resolve tag: ${e}`),null)}tagString(e){for(const[t,i]of Object.entries(this.tags))if(e.startsWith(i))return t+bt(e.substring(i.length));return"!"===e[0]?e:`!<${e}>`}toString(e){const t=this.yaml.explicit?[`%YAML ${this.yaml.version||"1.2"}`]:[],i=Object.entries(this.tags);let n;if(e&&i.length>0&&dt(e.contents)){const t={};mt(e.contents,(e,i)=>{dt(i)&&i.tag&&(t[i.tag]=!0)}),n=Object.keys(t)}else n=[];for(const[s,r]of i)"!!"===s&&"tag:yaml.org,2002:"===r||e&&!n.some(e=>e.startsWith(r))||t.push(`%TAG ${s} ${r}`);return t.join("\n")}}function _t(e){if(/[\x00-\x19\s,[\]{}]/.test(e)){const t=JSON.stringify(e);throw new Error(`Anchor must not contain whitespace or control characters: ${t}`)}return!0}function wt(e){const t=new Set;return mt(e,{Value(e,i){i.anchor&&t.add(i.anchor)}}),t}function xt(e,t){for(let i=1;;++i){const n=`${e}${i}`;if(!t.has(n))return n}}function kt(e,t,i,n){if(n&&"object"==typeof n)if(Array.isArray(n))for(let t=0,i=n.length;t<i;++t){const i=n[t],s=kt(e,n,String(t),i);void 0===s?delete n[t]:s!==i&&(n[t]=s)}else if(n instanceof Map)for(const t of Array.from(n.keys())){const i=n.get(t),s=kt(e,n,t,i);void 0===s?n.delete(t):s!==i&&n.set(t,s)}else if(n instanceof Set)for(const t of Array.from(n)){const i=kt(e,n,t,t);void 0===i?n.delete(t):i!==t&&(n.delete(t),n.add(i))}else for(const[t,i]of Object.entries(n)){const s=kt(e,n,t,i);void 0===s?delete n[t]:s!==i&&(n[t]=s)}return e.call(t,i,n)}function St(e,t,i){if(Array.isArray(e))return e.map((e,t)=>St(e,String(t),i));if(e&&"function"==typeof e.toJSON){if(!i||!ut(e))return e.toJSON(t,i);const n={aliasCount:0,count:1,res:void 0};i.anchors.set(e,n),i.onCreate=e=>{n.res=e,delete i.onCreate};const s=e.toJSON(t,i);return i.onCreate&&i.onCreate(s),s}return"bigint"!=typeof e||i?.keep?e:Number(e)}vt.defaultYaml={explicit:!1,version:"1.2"},vt.defaultTags={"!!":"tag:yaml.org,2002:"};class Mt{constructor(e){Object.defineProperty(this,it,{value:e})}clone(){const e=Object.create(Object.getPrototypeOf(this),Object.getOwnPropertyDescriptors(this));return this.range&&(e.range=this.range.slice()),e}toJS(e,{mapAsMap:t,maxAliasCount:i,onAnchor:n,reviver:s}={}){if(!st(e))throw new TypeError("A document argument is required");const r={anchors:new Map,doc:e,keep:!0,mapAsMap:!0===t,mapKeyWarned:!1,maxAliasCount:"number"==typeof i?i:100},o=St(this,"",r);if("function"==typeof n)for(const{count:e,res:t}of r.anchors.values())n(t,e);return"function"==typeof s?kt(s,{"":o},"",o):o}}class Ct extends Mt{constructor(e){super(Je),this.source=e,Object.defineProperty(this,"tag",{set(){throw new Error("Alias nodes cannot have tags")}})}resolve(e,t){let i,n;t?.aliasResolveCache?i=t.aliasResolveCache:(i=[],mt(e,{Node:(e,t)=>{(nt(t)||ut(t))&&i.push(t)}}),t&&(t.aliasResolveCache=i));for(const e of i){if(e===this)break;e.anchor===this.source&&(n=e)}return n}toJSON(e,t){if(!t)return{source:this.source};const{anchors:i,doc:n,maxAliasCount:s}=t,r=this.resolve(n,t);if(!r){const e=`Unresolved alias (the anchor must be set before the alias): ${this.source}`;throw new ReferenceError(e)}let o=i.get(r);if(o||(St(r,null,t),o=i.get(r)),void 0===o?.res){throw new ReferenceError("This should not happen: Alias anchor was not resolved?")}if(s>=0&&(o.count+=1,0===o.aliasCount&&(o.aliasCount=Tt(n,r,i)),o.count*o.aliasCount>s)){throw new ReferenceError("Excessive alias count indicates a resource exhaustion attack")}return o.res}toString(e,t,i){const n=`*${this.source}`;if(e){if(_t(this.source),e.options.verifyAliasOrder&&!e.anchors.has(this.source)){const e=`Unresolved alias (the anchor must be set before the alias): ${this.source}`;throw new Error(e)}if(e.implicitKey)return`${n} `}return n}}function Tt(e,t,i){if(nt(t)){const n=t.resolve(e),s=i&&n&&i.get(n);return s?s.count*s.aliasCount:0}if(ct(t)){let n=0;for(const s of t.items){const t=Tt(e,s,i);t>n&&(n=t)}return n}if(ot(t)){const n=Tt(e,t.key,i),s=Tt(e,t.value,i);return Math.max(n,s)}return 1}const $t=e=>!e||"function"!=typeof e&&"object"!=typeof e;class Ot extends Mt{constructor(e){super(et),this.value=e}toJSON(e,t){return t?.keep?this.value:St(this.value,e,t)}toString(){return String(this.value)}}Ot.BLOCK_FOLDED="BLOCK_FOLDED",Ot.BLOCK_LITERAL="BLOCK_LITERAL",Ot.PLAIN="PLAIN",Ot.QUOTE_DOUBLE="QUOTE_DOUBLE",Ot.QUOTE_SINGLE="QUOTE_SINGLE";function Et(e,t,i){if(st(e)&&(e=e.contents),dt(e))return e;if(ot(e)){const t=i.schema[Xe].createNode?.(i.schema,null,i);return t.items.push(e),t}(e instanceof String||e instanceof Number||e instanceof Boolean||"undefined"!=typeof BigInt&&e instanceof BigInt)&&(e=e.valueOf());const{aliasDuplicateObjects:n,onAnchor:s,onTagObj:r,schema:o,sourceObjects:a}=i;let l;if(n&&e&&"object"==typeof e){if(l=a.get(e),l)return l.anchor??(l.anchor=s(e)),new Ct(l.anchor);l={anchor:null,node:null},a.set(e,l)}t?.startsWith("!!")&&(t="tag:yaml.org,2002:"+t.slice(2));let c=function(e,t,i){if(t){const e=i.filter(e=>e.tag===t),n=e.find(e=>!e.format)??e[0];if(!n)throw new Error(`Tag ${t} not found`);return n}return i.find(t=>t.identify?.(e)&&!t.format)}(e,t,o.tags);if(!c){if(e&&"function"==typeof e.toJSON&&(e=e.toJSON()),!e||"object"!=typeof e){const t=new Ot(e);return l&&(l.node=t),t}c=e instanceof Map?o[Xe]:Symbol.iterator in Object(e)?o[tt]:o[Xe]}r&&(r(c),delete i.onTagObj);const d=c?.createNode?c.createNode(i.schema,e,i):"function"==typeof c?.nodeClass?.from?c.nodeClass.from(i.schema,e,i):new Ot(e);return t?d.tag=t:c.default||(d.tag=c.tag),l&&(l.node=d),d}function Nt(e,t,i){let n=i;for(let e=t.length-1;e>=0;--e){const i=t[e];if("number"==typeof i&&Number.isInteger(i)&&i>=0){const e=[];e[i]=n,n=e}else n=new Map([[i,n]])}return Et(n,void 0,{aliasDuplicateObjects:!1,keepUndefined:!1,onAnchor:()=>{throw new Error("This should not happen, please report a bug.")},schema:e,sourceObjects:new Map})}const At=e=>null==e||"object"==typeof e&&!!e[Symbol.iterator]().next().done;class Dt extends Mt{constructor(e,t){super(e),Object.defineProperty(this,"schema",{value:t,configurable:!0,enumerable:!1,writable:!0})}clone(e){const t=Object.create(Object.getPrototypeOf(this),Object.getOwnPropertyDescriptors(this));return e&&(t.schema=e),t.items=t.items.map(t=>dt(t)||ot(t)?t.clone(e):t),this.range&&(t.range=this.range.slice()),t}addIn(e,t){if(At(e))this.add(t);else{const[i,...n]=e,s=this.get(i,!0);if(ct(s))s.addIn(n,t);else{if(void 0!==s||!this.schema)throw new Error(`Expected YAML collection at ${i}. Remaining path: ${n}`);this.set(i,Nt(this.schema,n,t))}}}deleteIn(e){const[t,...i]=e;if(0===i.length)return this.delete(t);const n=this.get(t,!0);if(ct(n))return n.deleteIn(i);throw new Error(`Expected YAML collection at ${t}. Remaining path: ${i}`)}getIn(e,t){const[i,...n]=e,s=this.get(i,!0);return 0===n.length?!t&&at(s)?s.value:s:ct(s)?s.getIn(n,t):void 0}hasAllNullValues(e){return this.items.every(t=>{if(!ot(t))return!1;const i=t.value;return null==i||e&&at(i)&&null==i.value&&!i.commentBefore&&!i.comment&&!i.tag})}hasIn(e){const[t,...i]=e;if(0===i.length)return this.has(t);const n=this.get(t,!0);return!!ct(n)&&n.hasIn(i)}setIn(e,t){const[i,...n]=e;if(0===n.length)this.set(i,t);else{const e=this.get(i,!0);if(ct(e))e.setIn(n,t);else{if(void 0!==e||!this.schema)throw new Error(`Expected YAML collection at ${i}. Remaining path: ${n}`);this.set(i,Nt(this.schema,n,t))}}}}const It=e=>e.replace(/^(?!$)(?: $)?/gm,"#");function Lt(e,t){return/^\n+$/.test(e)?e.substring(1):t?e.replace(/^(?! *$)/gm,t):e}const Pt=(e,t,i)=>e.endsWith("\n")?Lt(i,t):i.includes("\n")?"\n"+Lt(i,t):(e.endsWith(" ")?"":" ")+i,Rt="flow",Yt="block",jt="quoted";function zt(e,t,i="flow",{indentAtStart:n,lineWidth:s=80,minContentWidth:r=20,onFold:o,onOverflow:a}={}){if(!s||s<0)return e;s<r&&(r=0);const l=Math.max(1+r,1+s-t.length);if(e.length<=l)return e;const c=[],d={};let u,h,p=s-t.length;"number"==typeof n&&(n>s-Math.max(2,r)?c.push(0):p=s-n);let f=!1,m=-1,g=-1,y=-1;i===Yt&&(m=Ht(e,m,t.length),-1!==m&&(p=m+l));for(let n;n=e[m+=1];){if(i===jt&&"\\"===n){switch(g=m,e[m+1]){case"x":m+=3;break;case"u":m+=5;break;case"U":m+=9;break;default:m+=1}y=m}if("\n"===n)i===Yt&&(m=Ht(e,m,t.length)),p=m+t.length+l,u=void 0;else{if(" "===n&&h&&" "!==h&&"\n"!==h&&"\t"!==h){const t=e[m+1];t&&" "!==t&&"\n"!==t&&"\t"!==t&&(u=m)}if(m>=p)if(u)c.push(u),p=u+l,u=void 0;else if(i===jt){for(;" "===h||"\t"===h;)h=n,n=e[m+=1],f=!0;const t=m>y+1?m-2:g-1;if(d[t])return e;c.push(t),d[t]=!0,p=t+l,u=void 0}else f=!0}h=n}if(f&&a&&a(),0===c.length)return e;o&&o();let b=e.slice(0,c[0]);for(let n=0;n<c.length;++n){const s=c[n],r=c[n+1]||e.length;0===s?b=`\n${t}${e.slice(0,r)}`:(i===jt&&d[s]&&(b+=`${e[s]}\\`),b+=`\n${t}${e.slice(s+1,r)}`)}return b}function Ht(e,t,i){let n=t,s=t+1,r=e[s];for(;" "===r||"\t"===r;)if(t<s+i)r=e[++t];else{do{r=e[++t]}while(r&&"\n"!==r);n=t,s=t+1,r=e[s]}return n}const Ut=(e,t)=>({indentAtStart:t?e.indent.length:e.indentAtStart,lineWidth:e.options.lineWidth,minContentWidth:e.options.minContentWidth}),qt=e=>/^(%|---|\.\.\.)/m.test(e);function Ft(e,t){const i=JSON.stringify(e);if(t.options.doubleQuotedAsJSON)return i;const{implicitKey:n}=t,s=t.options.doubleQuotedMinMultiLineLength,r=t.indent||(qt(e)?"  ":"");let o="",a=0;for(let e=0,t=i[e];t;t=i[++e])if(" "===t&&"\\"===i[e+1]&&"n"===i[e+2]&&(o+=i.slice(a,e)+"\\ ",e+=1,a=e,t="\\"),"\\"===t)switch(i[e+1]){case"u":{o+=i.slice(a,e);const t=i.substr(e+2,4);switch(t){case"0000":o+="\\0";break;case"0007":o+="\\a";break;case"000b":o+="\\v";break;case"001b":o+="\\e";break;case"0085":o+="\\N";break;case"00a0":o+="\\_";break;case"2028":o+="\\L";break;case"2029":o+="\\P";break;default:"00"===t.substr(0,2)?o+="\\x"+t.substr(2):o+=i.substr(e,6)}e+=5,a=e+1}break;case"n":if(n||'"'===i[e+2]||i.length<s)e+=1;else{for(o+=i.slice(a,e)+"\n\n";"\\"===i[e+2]&&"n"===i[e+3]&&'"'!==i[e+4];)o+="\n",e+=2;o+=r," "===i[e+2]&&(o+="\\"),e+=1,a=e+1}break;default:e+=1}return o=a?o+i.slice(a):i,n?o:zt(o,r,jt,Ut(t,!1))}function Bt(e,t){if(!1===t.options.singleQuote||t.implicitKey&&e.includes("\n")||/[ \t]\n|\n[ \t]/.test(e))return Ft(e,t);const i=t.indent||(qt(e)?"  ":""),n="'"+e.replace(/'/g,"''").replace(/\n+/g,`$&\n${i}`)+"'";return t.implicitKey?n:zt(n,i,Rt,Ut(t,!1))}function Vt(e,t){const{singleQuote:i}=t.options;let n;if(!1===i)n=Ft;else{const t=e.includes('"'),s=e.includes("'");n=t&&!s?Bt:s&&!t?Ft:i?Bt:Ft}return n(e,t)}let Wt;try{Wt=new RegExp("(^|(?<!\n))\n+(?!\n|$)","g")}catch{Wt=/\n+(?!\n|$)/g}function Kt({comment:e,type:t,value:i},n,s,r){const{blockQuote:o,commentString:a,lineWidth:l}=n.options;if(!o||/\n[\t ]+$/.test(i))return Vt(i,n);const c=n.indent||(n.forceBlockIndent||qt(i)?"  ":""),d="literal"===o||"folded"!==o&&t!==Ot.BLOCK_FOLDED&&(t===Ot.BLOCK_LITERAL||!function(e,t,i){if(!t||t<0)return!1;const n=t-i,s=e.length;if(s<=n)return!1;for(let t=0,i=0;t<s;++t)if("\n"===e[t]){if(t-i>n)return!0;if(i=t+1,s-i<=n)return!1}return!0}(i,l,c.length));if(!i)return d?"|\n":">\n";let u,h;for(h=i.length;h>0;--h){const e=i[h-1];if("\n"!==e&&"\t"!==e&&" "!==e)break}let p=i.substring(h);const f=p.indexOf("\n");-1===f?u="-":i===p||f!==p.length-1?(u="+",r&&r()):u="",p&&(i=i.slice(0,-p.length),"\n"===p[p.length-1]&&(p=p.slice(0,-1)),p=p.replace(Wt,`$&${c}`));let m,g=!1,y=-1;for(m=0;m<i.length;++m){const e=i[m];if(" "===e)g=!0;else{if("\n"!==e)break;y=m}}let b=i.substring(0,y<m?y+1:m);b&&(i=i.substring(b.length),b=b.replace(/\n+/g,`$&${c}`));let v=(g?c?"2":"1":"")+u;if(e&&(v+=" "+a(e.replace(/ ?[\r\n]+/g," ")),s&&s()),!d){const e=i.replace(/\n+/g,"\n$&").replace(/(?:^|\n)([\t ].*)(?:([\n\t ]*)\n(?![\n\t ]))?/g,"$1$2").replace(/\n+/g,`$&${c}`);let s=!1;const r=Ut(n,!0);"folded"!==o&&t!==Ot.BLOCK_FOLDED&&(r.onOverflow=()=>{s=!0});const a=zt(`${b}${e}${p}`,c,Yt,r);if(!s)return`>${v}\n${c}${a}`}return`|${v}\n${c}${b}${i=i.replace(/\n+/g,`$&${c}`)}${p}`}function Gt(e,t,i,n){const{implicitKey:s,inFlow:r}=t,o="string"==typeof e.value?e:Object.assign({},e,{value:String(e.value)});let{type:a}=e;a!==Ot.QUOTE_DOUBLE&&/[\x00-\x08\x0b-\x1f\x7f-\x9f\u{D800}-\u{DFFF}]/u.test(o.value)&&(a=Ot.QUOTE_DOUBLE);const l=e=>{switch(e){case Ot.BLOCK_FOLDED:case Ot.BLOCK_LITERAL:return s||r?Vt(o.value,t):Kt(o,t,i,n);case Ot.QUOTE_DOUBLE:return Ft(o.value,t);case Ot.QUOTE_SINGLE:return Bt(o.value,t);case Ot.PLAIN:return function(e,t,i,n){const{type:s,value:r}=e,{actualString:o,implicitKey:a,indent:l,indentStep:c,inFlow:d}=t;if(a&&r.includes("\n")||d&&/[[\]{},]/.test(r))return Vt(r,t);if(/^[\n\t ,[\]{}#&*!|>'"%@`]|^[?-]$|^[?-][ \t]|[\n:][ \t]|[ \t]\n|[\n\t ]#|[\n\t :]$/.test(r))return a||d||!r.includes("\n")?Vt(r,t):Kt(e,t,i,n);if(!a&&!d&&s!==Ot.PLAIN&&r.includes("\n"))return Kt(e,t,i,n);if(qt(r)){if(""===l)return t.forceBlockIndent=!0,Kt(e,t,i,n);if(a&&l===c)return Vt(r,t)}const u=r.replace(/\n+/g,`$&\n${l}`);if(o){const e=e=>e.default&&"tag:yaml.org,2002:str"!==e.tag&&e.test?.test(u),{compat:i,tags:n}=t.doc.schema;if(n.some(e)||i?.some(e))return Vt(r,t)}return a?u:zt(u,l,Rt,Ut(t,!1))}(o,t,i,n);default:return null}};let c=l(a);if(null===c){const{defaultKeyType:e,defaultStringType:i}=t.options,n=s&&e||i;if(c=l(n),null===c)throw new Error(`Unsupported default string type ${n}`)}return c}function Jt(e,t){const i=Object.assign({blockQuote:!0,commentString:It,defaultKeyType:null,defaultStringType:"PLAIN",directives:null,doubleQuotedAsJSON:!1,doubleQuotedMinMultiLineLength:40,falseStr:"false",flowCollectionPadding:!0,indentSeq:!0,lineWidth:80,minContentWidth:20,nullStr:"null",simpleKeys:!1,singleQuote:null,trueStr:"true",verifyAliasOrder:!0},e.schema.toStringOptions,t);let n;switch(i.collectionStyle){case"block":n=!1;break;case"flow":n=!0;break;default:n=null}return{anchors:new Set,doc:e,flowCollectionPadding:i.flowCollectionPadding?" ":"",indent:"",indentStep:"number"==typeof i.indent?" ".repeat(i.indent):"  ",inFlow:n,options:i}}function Zt(e,t,i,n){if(ot(e))return e.toString(t,i,n);if(nt(e)){if(t.doc.directives)return e.toString(t);if(t.resolvedAliases?.has(e))throw new TypeError("Cannot stringify circular structure without alias nodes");t.resolvedAliases?t.resolvedAliases.add(e):t.resolvedAliases=new Set([e]),e=e.resolve(t.doc)}let s;const r=dt(e)?e:t.doc.createNode(e,{onTagObj:e=>s=e});s??(s=function(e,t){if(t.tag){const i=e.filter(e=>e.tag===t.tag);if(i.length>0)return i.find(e=>e.format===t.format)??i[0]}let i,n;if(at(t)){n=t.value;let s=e.filter(e=>e.identify?.(n));if(s.length>1){const e=s.filter(e=>e.test);e.length>0&&(s=e)}i=s.find(e=>e.format===t.format)??s.find(e=>!e.format)}else n=t,i=e.find(e=>e.nodeClass&&n instanceof e.nodeClass);if(!i)throw new Error(`Tag not resolved for ${n?.constructor?.name??(null===n?"null":typeof n)} value`);return i}(t.doc.schema.tags,r));const o=function(e,t,{anchors:i,doc:n}){if(!n.directives)return"";const s=[],r=(at(e)||ct(e))&&e.anchor;r&&_t(r)&&(i.add(r),s.push(`&${r}`));const o=e.tag??(t.default?null:t.tag);return o&&s.push(n.directives.tagString(o)),s.join(" ")}(r,s,t);o.length>0&&(t.indentAtStart=(t.indentAtStart??0)+o.length+1);const a="function"==typeof s.stringify?s.stringify(r,t,i,n):at(r)?Gt(r,t,i,n):r.toString(t,i,n);return o?at(r)||"{"===a[0]||"["===a[0]?`${o} ${a}`:`${o}\n${t.indent}${a}`:a}function Xt(e,t){"debug"!==e&&"warn"!==e||console.warn(t)}const Qt="<<",ei={identify:e=>e===Qt||"symbol"==typeof e&&e.description===Qt,default:"key",tag:"tag:yaml.org,2002:merge",test:/^<<$/,resolve:()=>Object.assign(new Ot(Symbol(Qt)),{addToJSMap:ti}),stringify:()=>Qt};function ti(e,t,i){if(i=e&&nt(i)?i.resolve(e.doc):i,lt(i))for(const n of i.items)ii(e,t,n);else if(Array.isArray(i))for(const n of i)ii(e,t,n);else ii(e,t,i)}function ii(e,t,i){const n=e&&nt(i)?i.resolve(e.doc):i;if(!rt(n))throw new Error("Merge sources must be maps or map aliases");const s=n.toJSON(null,e,Map);for(const[e,i]of s)t instanceof Map?t.has(e)||t.set(e,i):t instanceof Set?t.add(e):Object.prototype.hasOwnProperty.call(t,e)||Object.defineProperty(t,e,{value:i,writable:!0,enumerable:!0,configurable:!0});return t}function ni(e,t,{key:i,value:n}){if(dt(i)&&i.addToJSMap)i.addToJSMap(e,t,n);else if(((e,t)=>(ei.identify(t)||at(t)&&(!t.type||t.type===Ot.PLAIN)&&ei.identify(t.value))&&e?.doc.schema.tags.some(e=>e.tag===ei.tag&&e.default))(e,i))ti(e,t,n);else{const s=St(i,"",e);if(t instanceof Map)t.set(s,St(n,s,e));else if(t instanceof Set)t.add(s);else{const r=function(e,t,i){if(null===t)return"";if("object"!=typeof t)return String(t);if(dt(e)&&i?.doc){const t=Jt(i.doc,{});t.anchors=new Set;for(const e of i.anchors.keys())t.anchors.add(e.anchor);t.inFlow=!0,t.inStringifyKey=!0;const n=e.toString(t);if(!i.mapKeyWarned){let e=JSON.stringify(n);e.length>40&&(e=e.substring(0,36)+'..."'),Xt(i.doc.options.logLevel,`Keys with collection values will be stringified due to JS Object restrictions: ${e}. Set mapAsMap: true to use object keys.`),i.mapKeyWarned=!0}return n}return JSON.stringify(t)}(i,s,e),o=St(n,r,e);r in t?Object.defineProperty(t,r,{value:o,writable:!0,enumerable:!0,configurable:!0}):t[r]=o}}return t}function si(e,t,i){const n=Et(e,void 0,i),s=Et(t,void 0,i);return new ri(n,s)}class ri{constructor(e,t=null){Object.defineProperty(this,it,{value:Qe}),this.key=e,this.value=t}clone(e){let{key:t,value:i}=this;return dt(t)&&(t=t.clone(e)),dt(i)&&(i=i.clone(e)),new ri(t,i)}toJSON(e,t){return ni(t,t?.mapAsMap?new Map:{},this)}toString(e,t,i){return e?.doc?function({key:e,value:t},i,n,s){const{allNullValues:r,doc:o,indent:a,indentStep:l,options:{commentString:c,indentSeq:d,simpleKeys:u}}=i;let h=dt(e)&&e.comment||null;if(u){if(h)throw new Error("With simple keys, key nodes cannot have comments");if(ct(e)||!dt(e)&&"object"==typeof e)throw new Error("With simple keys, collection cannot be used as a key value")}let p=!u&&(!e||h&&null==t&&!i.inFlow||ct(e)||(at(e)?e.type===Ot.BLOCK_FOLDED||e.type===Ot.BLOCK_LITERAL:"object"==typeof e));i=Object.assign({},i,{allNullValues:!1,implicitKey:!p&&(u||!r),indent:a+l});let f,m,g,y=!1,b=!1,v=Zt(e,i,()=>y=!0,()=>b=!0);if(!p&&!i.inFlow&&v.length>1024){if(u)throw new Error("With simple keys, single line scalar must not span more than 1024 characters");p=!0}if(i.inFlow){if(r||null==t)return y&&n&&n(),""===v?"?":p?`? ${v}`:v}else if(r&&!u||null==t&&p)return v=`? ${v}`,h&&!y?v+=Pt(v,i.indent,c(h)):b&&s&&s(),v;y&&(h=null),p?(h&&(v+=Pt(v,i.indent,c(h))),v=`? ${v}\n${a}:`):(v=`${v}:`,h&&(v+=Pt(v,i.indent,c(h)))),dt(t)?(f=!!t.spaceBefore,m=t.commentBefore,g=t.comment):(f=!1,m=null,g=null,t&&"object"==typeof t&&(t=o.createNode(t))),i.implicitKey=!1,p||h||!at(t)||(i.indentAtStart=v.length+1),b=!1,d||!(l.length>=2)||i.inFlow||p||!lt(t)||t.flow||t.tag||t.anchor||(i.indent=i.indent.substring(2));let _=!1;const w=Zt(t,i,()=>_=!0,()=>b=!0);let x=" ";if(h||f||m)x=f?"\n":"",m&&(x+=`\n${Lt(c(m),i.indent)}`),""!==w||i.inFlow?x+=`\n${i.indent}`:"\n"===x&&g&&(x="\n\n");else if(!p&&ct(t)){const e=w[0],n=w.indexOf("\n"),s=-1!==n,r=i.inFlow??t.flow??0===t.items.length;if(s||!r){let t=!1;if(s&&("&"===e||"!"===e)){let i=w.indexOf(" ");"&"===e&&-1!==i&&i<n&&"!"===w[i+1]&&(i=w.indexOf(" ",i+1)),(-1===i||n<i)&&(t=!0)}t||(x=`\n${i.indent}`)}}else""!==w&&"\n"!==w[0]||(x="");return v+=x+w,i.inFlow?_&&n&&n():g&&!_?v+=Pt(v,i.indent,c(g)):b&&s&&s(),v}(this,e,t,i):JSON.stringify(this)}}function oi(e,t,i){return(t.inFlow??e.flow?li:ai)(e,t,i)}function ai({comment:e,items:t},i,{blockItemPrefix:n,flowChars:s,itemIndent:r,onChompKeep:o,onComment:a}){const{indent:l,options:{commentString:c}}=i,d=Object.assign({},i,{indent:r,type:null});let u=!1;const h=[];for(let e=0;e<t.length;++e){const s=t[e];let o=null;if(dt(s))!u&&s.spaceBefore&&h.push(""),ci(i,h,s.commentBefore,u),s.comment&&(o=s.comment);else if(ot(s)){const e=dt(s.key)?s.key:null;e&&(!u&&e.spaceBefore&&h.push(""),ci(i,h,e.commentBefore,u))}u=!1;let a=Zt(s,d,()=>o=null,()=>u=!0);o&&(a+=Pt(a,r,c(o))),u&&o&&(u=!1),h.push(n+a)}let p;if(0===h.length)p=s.start+s.end;else{p=h[0];for(let e=1;e<h.length;++e){const t=h[e];p+=t?`\n${l}${t}`:"\n"}}return e?(p+="\n"+Lt(c(e),l),a&&a()):u&&o&&o(),p}function li({items:e},t,{flowChars:i,itemIndent:n}){const{indent:s,indentStep:r,flowCollectionPadding:o,options:{commentString:a}}=t;n+=r;const l=Object.assign({},t,{indent:n,inFlow:!0,type:null});let c=!1,d=0;const u=[];for(let i=0;i<e.length;++i){const s=e[i];let r=null;if(dt(s))s.spaceBefore&&u.push(""),ci(t,u,s.commentBefore,!1),s.comment&&(r=s.comment);else if(ot(s)){const e=dt(s.key)?s.key:null;e&&(e.spaceBefore&&u.push(""),ci(t,u,e.commentBefore,!1),e.comment&&(c=!0));const i=dt(s.value)?s.value:null;i?(i.comment&&(r=i.comment),i.commentBefore&&(c=!0)):null==s.value&&e?.comment&&(r=e.comment)}r&&(c=!0);let o=Zt(s,l,()=>r=null);i<e.length-1&&(o+=","),r&&(o+=Pt(o,n,a(r))),!c&&(u.length>d||o.includes("\n"))&&(c=!0),u.push(o),d=u.length}const{start:h,end:p}=i;if(0===u.length)return h+p;if(!c){const e=u.reduce((e,t)=>e+t.length+2,2);c=t.options.lineWidth>0&&e>t.options.lineWidth}if(c){let e=h;for(const t of u)e+=t?`\n${r}${s}${t}`:"\n";return`${e}\n${s}${p}`}return`${h}${o}${u.join(" ")}${o}${p}`}function ci({indent:e,options:{commentString:t}},i,n,s){if(n&&s&&(n=n.replace(/^\n+/,"")),n){const s=Lt(t(n),e);i.push(s.trimStart())}}function di(e,t){const i=at(t)?t.value:t;for(const n of e)if(ot(n)){if(n.key===t||n.key===i)return n;if(at(n.key)&&n.key.value===i)return n}}class ui extends Dt{static get tagName(){return"tag:yaml.org,2002:map"}constructor(e){super(Xe,e),this.items=[]}static from(e,t,i){const{keepUndefined:n,replacer:s}=i,r=new this(e),o=(e,o)=>{if("function"==typeof s)o=s.call(t,e,o);else if(Array.isArray(s)&&!s.includes(e))return;(void 0!==o||n)&&r.items.push(si(e,o,i))};if(t instanceof Map)for(const[e,i]of t)o(e,i);else if(t&&"object"==typeof t)for(const e of Object.keys(t))o(e,t[e]);return"function"==typeof e.sortMapEntries&&r.items.sort(e.sortMapEntries),r}add(e,t){let i;i=ot(e)?e:e&&"object"==typeof e&&"key"in e?new ri(e.key,e.value):new ri(e,e?.value);const n=di(this.items,i.key),s=this.schema?.sortMapEntries;if(n){if(!t)throw new Error(`Key ${i.key} already set`);at(n.value)&&$t(i.value)?n.value.value=i.value:n.value=i.value}else if(s){const e=this.items.findIndex(e=>s(i,e)<0);-1===e?this.items.push(i):this.items.splice(e,0,i)}else this.items.push(i)}delete(e){const t=di(this.items,e);if(!t)return!1;return this.items.splice(this.items.indexOf(t),1).length>0}get(e,t){const i=di(this.items,e),n=i?.value;return(!t&&at(n)?n.value:n)??void 0}has(e){return!!di(this.items,e)}set(e,t){this.add(new ri(e,t),!0)}toJSON(e,t,i){const n=i?new i:t?.mapAsMap?new Map:{};t?.onCreate&&t.onCreate(n);for(const e of this.items)ni(t,n,e);return n}toString(e,t,i){if(!e)return JSON.stringify(this);for(const e of this.items)if(!ot(e))throw new Error(`Map items must all be pairs; found ${JSON.stringify(e)} instead`);return!e.allNullValues&&this.hasAllNullValues(!1)&&(e=Object.assign({},e,{allNullValues:!0})),oi(this,e,{blockItemPrefix:"",flowChars:{start:"{",end:"}"},itemIndent:e.indent||"",onChompKeep:i,onComment:t})}}const hi={collection:"map",default:!0,nodeClass:ui,tag:"tag:yaml.org,2002:map",resolve:(e,t)=>(rt(e)||t("Expected a mapping for this tag"),e),createNode:(e,t,i)=>ui.from(e,t,i)};class pi extends Dt{static get tagName(){return"tag:yaml.org,2002:seq"}constructor(e){super(tt,e),this.items=[]}add(e){this.items.push(e)}delete(e){const t=fi(e);if("number"!=typeof t)return!1;return this.items.splice(t,1).length>0}get(e,t){const i=fi(e);if("number"!=typeof i)return;const n=this.items[i];return!t&&at(n)?n.value:n}has(e){const t=fi(e);return"number"==typeof t&&t<this.items.length}set(e,t){const i=fi(e);if("number"!=typeof i)throw new Error(`Expected a valid index, not ${e}.`);const n=this.items[i];at(n)&&$t(t)?n.value=t:this.items[i]=t}toJSON(e,t){const i=[];t?.onCreate&&t.onCreate(i);let n=0;for(const e of this.items)i.push(St(e,String(n++),t));return i}toString(e,t,i){return e?oi(this,e,{blockItemPrefix:"- ",flowChars:{start:"[",end:"]"},itemIndent:(e.indent||"")+"  ",onChompKeep:i,onComment:t}):JSON.stringify(this)}static from(e,t,i){const{replacer:n}=i,s=new this(e);if(t&&Symbol.iterator in Object(t)){let e=0;for(let r of t){if("function"==typeof n){const i=t instanceof Set?r:String(e++);r=n.call(t,i,r)}s.items.push(Et(r,void 0,i))}}return s}}function fi(e){let t=at(e)?e.value:e;return t&&"string"==typeof t&&(t=Number(t)),"number"==typeof t&&Number.isInteger(t)&&t>=0?t:null}const mi={collection:"seq",default:!0,nodeClass:pi,tag:"tag:yaml.org,2002:seq",resolve:(e,t)=>(lt(e)||t("Expected a sequence for this tag"),e),createNode:(e,t,i)=>pi.from(e,t,i)},gi={identify:e=>"string"==typeof e,default:!0,tag:"tag:yaml.org,2002:str",resolve:e=>e,stringify:(e,t,i,n)=>Gt(e,t=Object.assign({actualString:!0},t),i,n)},yi={identify:e=>null==e,createNode:()=>new Ot(null),default:!0,tag:"tag:yaml.org,2002:null",test:/^(?:~|[Nn]ull|NULL)?$/,resolve:()=>new Ot(null),stringify:({source:e},t)=>"string"==typeof e&&yi.test.test(e)?e:t.options.nullStr},bi={identify:e=>"boolean"==typeof e,default:!0,tag:"tag:yaml.org,2002:bool",test:/^(?:[Tt]rue|TRUE|[Ff]alse|FALSE)$/,resolve:e=>new Ot("t"===e[0]||"T"===e[0]),stringify({source:e,value:t},i){if(e&&bi.test.test(e)){if(t===("t"===e[0]||"T"===e[0]))return e}return t?i.options.trueStr:i.options.falseStr}};function vi({format:e,minFractionDigits:t,tag:i,value:n}){if("bigint"==typeof n)return String(n);const s="number"==typeof n?n:Number(n);if(!isFinite(s))return isNaN(s)?".nan":s<0?"-.inf":".inf";let r=Object.is(n,-0)?"-0":JSON.stringify(n);if(!e&&t&&(!i||"tag:yaml.org,2002:float"===i)&&/^\d/.test(r)){let e=r.indexOf(".");e<0&&(e=r.length,r+=".");let i=t-(r.length-e-1);for(;i-- >0;)r+="0"}return r}const _i={identify:e=>"number"==typeof e,default:!0,tag:"tag:yaml.org,2002:float",test:/^(?:[-+]?\.(?:inf|Inf|INF)|\.nan|\.NaN|\.NAN)$/,resolve:e=>"nan"===e.slice(-3).toLowerCase()?NaN:"-"===e[0]?Number.NEGATIVE_INFINITY:Number.POSITIVE_INFINITY,stringify:vi},wi={identify:e=>"number"==typeof e,default:!0,tag:"tag:yaml.org,2002:float",format:"EXP",test:/^[-+]?(?:\.[0-9]+|[0-9]+(?:\.[0-9]*)?)[eE][-+]?[0-9]+$/,resolve:e=>parseFloat(e),stringify(e){const t=Number(e.value);return isFinite(t)?t.toExponential():vi(e)}},xi={identify:e=>"number"==typeof e,default:!0,tag:"tag:yaml.org,2002:float",test:/^[-+]?(?:\.[0-9]+|[0-9]+\.[0-9]*)$/,resolve(e){const t=new Ot(parseFloat(e)),i=e.indexOf(".");return-1!==i&&"0"===e[e.length-1]&&(t.minFractionDigits=e.length-i-1),t},stringify:vi},ki=e=>"bigint"==typeof e||Number.isInteger(e),Si=(e,t,i,{intAsBigInt:n})=>n?BigInt(e):parseInt(e.substring(t),i);function Mi(e,t,i){const{value:n}=e;return ki(n)&&n>=0?i+n.toString(t):vi(e)}const Ci={identify:e=>ki(e)&&e>=0,default:!0,tag:"tag:yaml.org,2002:int",format:"OCT",test:/^0o[0-7]+$/,resolve:(e,t,i)=>Si(e,2,8,i),stringify:e=>Mi(e,8,"0o")},Ti={identify:ki,default:!0,tag:"tag:yaml.org,2002:int",test:/^[-+]?[0-9]+$/,resolve:(e,t,i)=>Si(e,0,10,i),stringify:vi},$i={identify:e=>ki(e)&&e>=0,default:!0,tag:"tag:yaml.org,2002:int",format:"HEX",test:/^0x[0-9a-fA-F]+$/,resolve:(e,t,i)=>Si(e,2,16,i),stringify:e=>Mi(e,16,"0x")},Oi=[hi,mi,gi,yi,bi,Ci,Ti,$i,_i,wi,xi];function Ei(e){return"bigint"==typeof e||Number.isInteger(e)}const Ni=({value:e})=>JSON.stringify(e),Ai=[hi,mi].concat([{identify:e=>"string"==typeof e,default:!0,tag:"tag:yaml.org,2002:str",resolve:e=>e,stringify:Ni},{identify:e=>null==e,createNode:()=>new Ot(null),default:!0,tag:"tag:yaml.org,2002:null",test:/^null$/,resolve:()=>null,stringify:Ni},{identify:e=>"boolean"==typeof e,default:!0,tag:"tag:yaml.org,2002:bool",test:/^true$|^false$/,resolve:e=>"true"===e,stringify:Ni},{identify:Ei,default:!0,tag:"tag:yaml.org,2002:int",test:/^-?(?:0|[1-9][0-9]*)$/,resolve:(e,t,{intAsBigInt:i})=>i?BigInt(e):parseInt(e,10),stringify:({value:e})=>Ei(e)?e.toString():JSON.stringify(e)},{identify:e=>"number"==typeof e,default:!0,tag:"tag:yaml.org,2002:float",test:/^-?(?:0|[1-9][0-9]*)(?:\.[0-9]*)?(?:[eE][-+]?[0-9]+)?$/,resolve:e=>parseFloat(e),stringify:Ni}],{default:!0,tag:"",test:/^/,resolve:(e,t)=>(t(`Unresolved plain scalar ${JSON.stringify(e)}`),e)}),Di={identify:e=>e instanceof Uint8Array,default:!1,tag:"tag:yaml.org,2002:binary",resolve(e,t){if("function"==typeof atob){const t=atob(e.replace(/[\n\r]/g,"")),i=new Uint8Array(t.length);for(let e=0;e<t.length;++e)i[e]=t.charCodeAt(e);return i}return t("This environment does not support reading binary tags; either Buffer or atob is required"),e},stringify({comment:e,type:t,value:i},n,s,r){if(!i)return"";const o=i;let a;if("function"!=typeof btoa)throw new Error("This environment does not support writing binary tags; either Buffer or btoa is required");{let e="";for(let t=0;t<o.length;++t)e+=String.fromCharCode(o[t]);a=btoa(e)}if(t??(t=Ot.BLOCK_LITERAL),t!==Ot.QUOTE_DOUBLE){const e=Math.max(n.options.lineWidth-n.indent.length,n.options.minContentWidth),i=Math.ceil(a.length/e),s=new Array(i);for(let t=0,n=0;t<i;++t,n+=e)s[t]=a.substr(n,e);a=s.join(t===Ot.BLOCK_LITERAL?"\n":" ")}return Gt({comment:e,type:t,value:a},n,s,r)}};function Ii(e,t){if(lt(e))for(let i=0;i<e.items.length;++i){let n=e.items[i];if(!ot(n)){if(rt(n)){n.items.length>1&&t("Each pair must have its own sequence indicator");const e=n.items[0]||new ri(new Ot(null));if(n.commentBefore&&(e.key.commentBefore=e.key.commentBefore?`${n.commentBefore}\n${e.key.commentBefore}`:n.commentBefore),n.comment){const t=e.value??e.key;t.comment=t.comment?`${n.comment}\n${t.comment}`:n.comment}n=e}e.items[i]=ot(n)?n:new ri(n)}}else t("Expected a sequence for this tag");return e}function Li(e,t,i){const{replacer:n}=i,s=new pi(e);s.tag="tag:yaml.org,2002:pairs";let r=0;if(t&&Symbol.iterator in Object(t))for(let e of t){let o,a;if("function"==typeof n&&(e=n.call(t,String(r++),e)),Array.isArray(e)){if(2!==e.length)throw new TypeError(`Expected [key, value] tuple: ${e}`);o=e[0],a=e[1]}else if(e&&e instanceof Object){const t=Object.keys(e);if(1!==t.length)throw new TypeError(`Expected tuple with one key, not ${t.length} keys`);o=t[0],a=e[o]}else o=e;s.items.push(si(o,a,i))}return s}const Pi={collection:"seq",default:!1,tag:"tag:yaml.org,2002:pairs",resolve:Ii,createNode:Li};class Ri extends pi{constructor(){super(),this.add=ui.prototype.add.bind(this),this.delete=ui.prototype.delete.bind(this),this.get=ui.prototype.get.bind(this),this.has=ui.prototype.has.bind(this),this.set=ui.prototype.set.bind(this),this.tag=Ri.tag}toJSON(e,t){if(!t)return super.toJSON(e);const i=new Map;t?.onCreate&&t.onCreate(i);for(const e of this.items){let n,s;if(ot(e)?(n=St(e.key,"",t),s=St(e.value,n,t)):n=St(e,"",t),i.has(n))throw new Error("Ordered maps must not include duplicate keys");i.set(n,s)}return i}static from(e,t,i){const n=Li(e,t,i),s=new this;return s.items=n.items,s}}Ri.tag="tag:yaml.org,2002:omap";const Yi={collection:"seq",identify:e=>e instanceof Map,nodeClass:Ri,default:!1,tag:"tag:yaml.org,2002:omap",resolve(e,t){const i=Ii(e,t),n=[];for(const{key:e}of i.items)at(e)&&(n.includes(e.value)?t(`Ordered maps must not include duplicate keys: ${e.value}`):n.push(e.value));return Object.assign(new Ri,i)},createNode:(e,t,i)=>Ri.from(e,t,i)};function ji({value:e,source:t},i){return t&&(e?zi:Hi).test.test(t)?t:e?i.options.trueStr:i.options.falseStr}const zi={identify:e=>!0===e,default:!0,tag:"tag:yaml.org,2002:bool",test:/^(?:Y|y|[Yy]es|YES|[Tt]rue|TRUE|[Oo]n|ON)$/,resolve:()=>new Ot(!0),stringify:ji},Hi={identify:e=>!1===e,default:!0,tag:"tag:yaml.org,2002:bool",test:/^(?:N|n|[Nn]o|NO|[Ff]alse|FALSE|[Oo]ff|OFF)$/,resolve:()=>new Ot(!1),stringify:ji},Ui={identify:e=>"number"==typeof e,default:!0,tag:"tag:yaml.org,2002:float",test:/^(?:[-+]?\.(?:inf|Inf|INF)|\.nan|\.NaN|\.NAN)$/,resolve:e=>"nan"===e.slice(-3).toLowerCase()?NaN:"-"===e[0]?Number.NEGATIVE_INFINITY:Number.POSITIVE_INFINITY,stringify:vi},qi={identify:e=>"number"==typeof e,default:!0,tag:"tag:yaml.org,2002:float",format:"EXP",test:/^[-+]?(?:[0-9][0-9_]*)?(?:\.[0-9_]*)?[eE][-+]?[0-9]+$/,resolve:e=>parseFloat(e.replace(/_/g,"")),stringify(e){const t=Number(e.value);return isFinite(t)?t.toExponential():vi(e)}},Fi={identify:e=>"number"==typeof e,default:!0,tag:"tag:yaml.org,2002:float",test:/^[-+]?(?:[0-9][0-9_]*)?\.[0-9_]*$/,resolve(e){const t=new Ot(parseFloat(e.replace(/_/g,""))),i=e.indexOf(".");if(-1!==i){const n=e.substring(i+1).replace(/_/g,"");"0"===n[n.length-1]&&(t.minFractionDigits=n.length)}return t},stringify:vi},Bi=e=>"bigint"==typeof e||Number.isInteger(e);function Vi(e,t,i,{intAsBigInt:n}){const s=e[0];if("-"!==s&&"+"!==s||(t+=1),e=e.substring(t).replace(/_/g,""),n){switch(i){case 2:e=`0b${e}`;break;case 8:e=`0o${e}`;break;case 16:e=`0x${e}`}const t=BigInt(e);return"-"===s?BigInt(-1)*t:t}const r=parseInt(e,i);return"-"===s?-1*r:r}function Wi(e,t,i){const{value:n}=e;if(Bi(n)){const e=n.toString(t);return n<0?"-"+i+e.substr(1):i+e}return vi(e)}const Ki={identify:Bi,default:!0,tag:"tag:yaml.org,2002:int",format:"BIN",test:/^[-+]?0b[0-1_]+$/,resolve:(e,t,i)=>Vi(e,2,2,i),stringify:e=>Wi(e,2,"0b")},Gi={identify:Bi,default:!0,tag:"tag:yaml.org,2002:int",format:"OCT",test:/^[-+]?0[0-7_]+$/,resolve:(e,t,i)=>Vi(e,1,8,i),stringify:e=>Wi(e,8,"0")},Ji={identify:Bi,default:!0,tag:"tag:yaml.org,2002:int",test:/^[-+]?[0-9][0-9_]*$/,resolve:(e,t,i)=>Vi(e,0,10,i),stringify:vi},Zi={identify:Bi,default:!0,tag:"tag:yaml.org,2002:int",format:"HEX",test:/^[-+]?0x[0-9a-fA-F_]+$/,resolve:(e,t,i)=>Vi(e,2,16,i),stringify:e=>Wi(e,16,"0x")};class Xi extends ui{constructor(e){super(e),this.tag=Xi.tag}add(e){let t;t=ot(e)?e:e&&"object"==typeof e&&"key"in e&&"value"in e&&null===e.value?new ri(e.key,null):new ri(e,null);di(this.items,t.key)||this.items.push(t)}get(e,t){const i=di(this.items,e);return!t&&ot(i)?at(i.key)?i.key.value:i.key:i}set(e,t){if("boolean"!=typeof t)throw new Error("Expected boolean value for set(key, value) in a YAML set, not "+typeof t);const i=di(this.items,e);i&&!t?this.items.splice(this.items.indexOf(i),1):!i&&t&&this.items.push(new ri(e))}toJSON(e,t){return super.toJSON(e,t,Set)}toString(e,t,i){if(!e)return JSON.stringify(this);if(this.hasAllNullValues(!0))return super.toString(Object.assign({},e,{allNullValues:!0}),t,i);throw new Error("Set items must all have null values")}static from(e,t,i){const{replacer:n}=i,s=new this(e);if(t&&Symbol.iterator in Object(t))for(let e of t)"function"==typeof n&&(e=n.call(t,e,e)),s.items.push(si(e,null,i));return s}}Xi.tag="tag:yaml.org,2002:set";const Qi={collection:"map",identify:e=>e instanceof Set,nodeClass:Xi,default:!1,tag:"tag:yaml.org,2002:set",createNode:(e,t,i)=>Xi.from(e,t,i),resolve(e,t){if(rt(e)){if(e.hasAllNullValues(!0))return Object.assign(new Xi,e);t("Set items must all have null values")}else t("Expected a mapping for this tag");return e}};function en(e,t){const i=e[0],n="-"===i||"+"===i?e.substring(1):e,s=e=>t?BigInt(e):Number(e),r=n.replace(/_/g,"").split(":").reduce((e,t)=>e*s(60)+s(t),s(0));return"-"===i?s(-1)*r:r}function tn(e){let{value:t}=e,i=e=>e;if("bigint"==typeof t)i=e=>BigInt(e);else if(isNaN(t)||!isFinite(t))return vi(e);let n="";t<0&&(n="-",t*=i(-1));const s=i(60),r=[t%s];return t<60?r.unshift(0):(t=(t-r[0])/s,r.unshift(t%s),t>=60&&(t=(t-r[0])/s,r.unshift(t))),n+r.map(e=>String(e).padStart(2,"0")).join(":").replace(/000000\d*$/,"")}const nn={identify:e=>"bigint"==typeof e||Number.isInteger(e),default:!0,tag:"tag:yaml.org,2002:int",format:"TIME",test:/^[-+]?[0-9][0-9_]*(?::[0-5]?[0-9])+$/,resolve:(e,t,{intAsBigInt:i})=>en(e,i),stringify:tn},sn={identify:e=>"number"==typeof e,default:!0,tag:"tag:yaml.org,2002:float",format:"TIME",test:/^[-+]?[0-9][0-9_]*(?::[0-5]?[0-9])+\.[0-9_]*$/,resolve:e=>en(e,!1),stringify:tn},rn={identify:e=>e instanceof Date,default:!0,tag:"tag:yaml.org,2002:timestamp",test:RegExp("^([0-9]{4})-([0-9]{1,2})-([0-9]{1,2})(?:(?:t|T|[ \\t]+)([0-9]{1,2}):([0-9]{1,2}):([0-9]{1,2}(\\.[0-9]+)?)(?:[ \\t]*(Z|[-+][012]?[0-9](?::[0-9]{2})?))?)?$"),resolve(e){const t=e.match(rn.test);if(!t)throw new Error("!!timestamp expects a date, starting with yyyy-mm-dd");const[,i,n,s,r,o,a]=t.map(Number),l=t[7]?Number((t[7]+"00").substr(1,3)):0;let c=Date.UTC(i,n-1,s,r||0,o||0,a||0,l);const d=t[8];if(d&&"Z"!==d){let e=en(d,!1);Math.abs(e)<30&&(e*=60),c-=6e4*e}return new Date(c)},stringify:({value:e})=>e?.toISOString().replace(/(T00:00:00)?\.000Z$/,"")??""},on=[hi,mi,gi,yi,zi,Hi,Ki,Gi,Ji,Zi,Ui,qi,Fi,Di,ei,Yi,Pi,Qi,nn,sn,rn],an=new Map([["core",Oi],["failsafe",[hi,mi,gi]],["json",Ai],["yaml11",on],["yaml-1.1",on]]),ln={binary:Di,bool:bi,float:xi,floatExp:wi,floatNaN:_i,floatTime:sn,int:Ti,intHex:$i,intOct:Ci,intTime:nn,map:hi,merge:ei,null:yi,omap:Yi,pairs:Pi,seq:mi,set:Qi,timestamp:rn},cn={"tag:yaml.org,2002:binary":Di,"tag:yaml.org,2002:merge":ei,"tag:yaml.org,2002:omap":Yi,"tag:yaml.org,2002:pairs":Pi,"tag:yaml.org,2002:set":Qi,"tag:yaml.org,2002:timestamp":rn};function dn(e,t,i){const n=an.get(t);if(n&&!e)return i&&!n.includes(ei)?n.concat(ei):n.slice();let s=n;if(!s){if(!Array.isArray(e)){const e=Array.from(an.keys()).filter(e=>"yaml11"!==e).map(e=>JSON.stringify(e)).join(", ");throw new Error(`Unknown schema "${t}"; use one of ${e} or define customTags array`)}s=[]}if(Array.isArray(e))for(const t of e)s=s.concat(t);else"function"==typeof e&&(s=e(s.slice()));return i&&(s=s.concat(ei)),s.reduce((e,t)=>{const i="string"==typeof t?ln[t]:t;if(!i){const e=JSON.stringify(t),i=Object.keys(ln).map(e=>JSON.stringify(e)).join(", ");throw new Error(`Unknown custom tag ${e}; use one of ${i}`)}return e.includes(i)||e.push(i),e},[])}const un=(e,t)=>e.key<t.key?-1:e.key>t.key?1:0;class hn{constructor({compat:e,customTags:t,merge:i,resolveKnownTags:n,schema:s,sortMapEntries:r,toStringDefaults:o}){this.compat=Array.isArray(e)?dn(e,"compat"):e?dn(null,e):null,this.name="string"==typeof s&&s||"core",this.knownTags=n?cn:{},this.tags=dn(t,this.name,i),this.toStringOptions=o??null,Object.defineProperty(this,Xe,{value:hi}),Object.defineProperty(this,et,{value:gi}),Object.defineProperty(this,tt,{value:mi}),this.sortMapEntries="function"==typeof r?r:!0===r?un:null}clone(){const e=Object.create(hn.prototype,Object.getOwnPropertyDescriptors(this));return e.tags=this.tags.slice(),e}}class pn{constructor(e,t,i){this.commentBefore=null,this.comment=null,this.errors=[],this.warnings=[],Object.defineProperty(this,it,{value:Ze});let n=null;"function"==typeof t||Array.isArray(t)?n=t:void 0===i&&t&&(i=t,t=void 0);const s=Object.assign({intAsBigInt:!1,keepSourceTokens:!1,logLevel:"warn",prettyErrors:!0,strict:!0,stringKeys:!1,uniqueKeys:!0,version:"1.2"},i);this.options=s;let{version:r}=s;i?._directives?(this.directives=i._directives.atDocument(),this.directives.yaml.explicit&&(r=this.directives.yaml.version)):this.directives=new vt({version:r}),this.setSchema(r,i),this.contents=void 0===e?null:this.createNode(e,n,i)}clone(){const e=Object.create(pn.prototype,{[it]:{value:Ze}});return e.commentBefore=this.commentBefore,e.comment=this.comment,e.errors=this.errors.slice(),e.warnings=this.warnings.slice(),e.options=Object.assign({},this.options),this.directives&&(e.directives=this.directives.clone()),e.schema=this.schema.clone(),e.contents=dt(this.contents)?this.contents.clone(e.schema):this.contents,this.range&&(e.range=this.range.slice()),e}add(e){fn(this.contents)&&this.contents.add(e)}addIn(e,t){fn(this.contents)&&this.contents.addIn(e,t)}createAlias(e,t){if(!e.anchor){const i=wt(this);e.anchor=!t||i.has(t)?xt(t||"a",i):t}return new Ct(e.anchor)}createNode(e,t,i){let n;if("function"==typeof t)e=t.call({"":e},"",e),n=t;else if(Array.isArray(t)){const e=e=>"number"==typeof e||e instanceof String||e instanceof Number,i=t.filter(e).map(String);i.length>0&&(t=t.concat(i)),n=t}else void 0===i&&t&&(i=t,t=void 0);const{aliasDuplicateObjects:s,anchorPrefix:r,flow:o,keepUndefined:a,onTagObj:l,tag:c}=i??{},{onAnchor:d,setAnchors:u,sourceObjects:h}=function(e,t){const i=[],n=new Map;let s=null;return{onAnchor:n=>{i.push(n),s??(s=wt(e));const r=xt(t,s);return s.add(r),r},setAnchors:()=>{for(const e of i){const t=n.get(e);if("object"!=typeof t||!t.anchor||!at(t.node)&&!ct(t.node)){const t=new Error("Failed to resolve repeated object (this should not happen)");throw t.source=e,t}t.node.anchor=t.anchor}},sourceObjects:n}}(this,r||"a"),p=Et(e,c,{aliasDuplicateObjects:s??!0,keepUndefined:a??!1,onAnchor:d,onTagObj:l,replacer:n,schema:this.schema,sourceObjects:h});return o&&ct(p)&&(p.flow=!0),u(),p}createPair(e,t,i={}){const n=this.createNode(e,null,i),s=this.createNode(t,null,i);return new ri(n,s)}delete(e){return!!fn(this.contents)&&this.contents.delete(e)}deleteIn(e){return At(e)?null!=this.contents&&(this.contents=null,!0):!!fn(this.contents)&&this.contents.deleteIn(e)}get(e,t){return ct(this.contents)?this.contents.get(e,t):void 0}getIn(e,t){return At(e)?!t&&at(this.contents)?this.contents.value:this.contents:ct(this.contents)?this.contents.getIn(e,t):void 0}has(e){return!!ct(this.contents)&&this.contents.has(e)}hasIn(e){return At(e)?void 0!==this.contents:!!ct(this.contents)&&this.contents.hasIn(e)}set(e,t){null==this.contents?this.contents=Nt(this.schema,[e],t):fn(this.contents)&&this.contents.set(e,t)}setIn(e,t){At(e)?this.contents=t:null==this.contents?this.contents=Nt(this.schema,Array.from(e),t):fn(this.contents)&&this.contents.setIn(e,t)}setSchema(e,t={}){let i;switch("number"==typeof e&&(e=String(e)),e){case"1.1":this.directives?this.directives.yaml.version="1.1":this.directives=new vt({version:"1.1"}),i={resolveKnownTags:!1,schema:"yaml-1.1"};break;case"1.2":case"next":this.directives?this.directives.yaml.version=e:this.directives=new vt({version:e}),i={resolveKnownTags:!0,schema:"core"};break;case null:this.directives&&delete this.directives,i=null;break;default:{const t=JSON.stringify(e);throw new Error(`Expected '1.1', '1.2' or null as first argument, but found: ${t}`)}}if(t.schema instanceof Object)this.schema=t.schema;else{if(!i)throw new Error("With a null YAML version, the { schema: Schema } option is required");this.schema=new hn(Object.assign(i,t))}}toJS({json:e,jsonArg:t,mapAsMap:i,maxAliasCount:n,onAnchor:s,reviver:r}={}){const o={anchors:new Map,doc:this,keep:!e,mapAsMap:!0===i,mapKeyWarned:!1,maxAliasCount:"number"==typeof n?n:100},a=St(this.contents,t??"",o);if("function"==typeof s)for(const{count:e,res:t}of o.anchors.values())s(t,e);return"function"==typeof r?kt(r,{"":a},"",a):a}toJSON(e,t){return this.toJS({json:!0,jsonArg:e,mapAsMap:!1,onAnchor:t})}toString(e={}){if(this.errors.length>0)throw new Error("Document with errors cannot be stringified");if("indent"in e&&(!Number.isInteger(e.indent)||Number(e.indent)<=0)){const t=JSON.stringify(e.indent);throw new Error(`"indent" option must be a positive integer, not ${t}`)}return function(e,t){const i=[];let n=!0===t.directives;if(!1!==t.directives&&e.directives){const t=e.directives.toString(e);t?(i.push(t),n=!0):e.directives.docStart&&(n=!0)}n&&i.push("---");const s=Jt(e,t),{commentString:r}=s.options;if(e.commentBefore){1!==i.length&&i.unshift("");const t=r(e.commentBefore);i.unshift(Lt(t,""))}let o=!1,a=null;if(e.contents){if(dt(e.contents)){if(e.contents.spaceBefore&&n&&i.push(""),e.contents.commentBefore){const t=r(e.contents.commentBefore);i.push(Lt(t,""))}s.forceBlockIndent=!!e.comment,a=e.contents.comment}const t=a?void 0:()=>o=!0;let l=Zt(e.contents,s,()=>a=null,t);a&&(l+=Pt(l,"",r(a))),"|"!==l[0]&&">"!==l[0]||"---"!==i[i.length-1]?i.push(l):i[i.length-1]=`--- ${l}`}else i.push(Zt(e.contents,s));if(e.directives?.docEnd)if(e.comment){const t=r(e.comment);t.includes("\n")?(i.push("..."),i.push(Lt(t,""))):i.push(`... ${t}`)}else i.push("...");else{let t=e.comment;t&&o&&(t=t.replace(/^\n+/,"")),t&&(o&&!a||""===i[i.length-1]||i.push(""),i.push(Lt(r(t),"")))}return i.join("\n")+"\n"}(this,e)}}function fn(e){if(ct(e))return!0;throw new Error("Expected a YAML collection as document contents")}class mn extends Error{constructor(e,t,i,n){super(),this.name=e,this.code=i,this.message=n,this.pos=t}}class gn extends mn{constructor(e,t,i){super("YAMLParseError",e,t,i)}}class yn extends mn{constructor(e,t,i){super("YAMLWarning",e,t,i)}}const bn=(e,t)=>i=>{if(-1===i.pos[0])return;i.linePos=i.pos.map(e=>t.linePos(e));const{line:n,col:s}=i.linePos[0];i.message+=` at line ${n}, column ${s}`;let r=s-1,o=e.substring(t.lineStarts[n-1],t.lineStarts[n]).replace(/[\n\r]+$/,"");if(r>=60&&o.length>80){const e=Math.min(r-39,o.length-79);o="…"+o.substring(e),r-=e-1}if(o.length>80&&(o=o.substring(0,79)+"…"),n>1&&/^ *$/.test(o.substring(0,r))){let i=e.substring(t.lineStarts[n-2],t.lineStarts[n-1]);i.length>80&&(i=i.substring(0,79)+"…\n"),o=i+o}if(/[^ ]/.test(o)){let e=1;const t=i.linePos[1];t?.line===n&&t.col>s&&(e=Math.max(1,Math.min(t.col-s,80-r)));const a=" ".repeat(r)+"^".repeat(e);i.message+=`:\n\n${o}\n${a}\n`}};function vn(e,{flow:t,indicator:i,next:n,offset:s,onError:r,parentIndent:o,startOnNewline:a}){let l=!1,c=a,d=a,u="",h="",p=!1,f=!1,m=null,g=null,y=null,b=null,v=null,_=null,w=null;for(const s of e)switch(f&&("space"!==s.type&&"newline"!==s.type&&"comma"!==s.type&&r(s.offset,"MISSING_CHAR","Tags and anchors must be separated from the next token by white space"),f=!1),m&&(c&&"comment"!==s.type&&"newline"!==s.type&&r(m,"TAB_AS_INDENT","Tabs are not allowed as indentation"),m=null),s.type){case"space":t||"doc-start"===i&&"flow-collection"===n?.type||!s.source.includes("\t")||(m=s),d=!0;break;case"comment":{d||r(s,"MISSING_CHAR","Comments must be separated from other tokens by white space characters");const e=s.source.substring(1)||" ";u?u+=h+e:u=e,h="",c=!1;break}case"newline":c?u?u+=s.source:_&&"seq-item-ind"===i||(l=!0):h+=s.source,c=!0,p=!0,(g||y)&&(b=s),d=!0;break;case"anchor":g&&r(s,"MULTIPLE_ANCHORS","A node can have at most one anchor"),s.source.endsWith(":")&&r(s.offset+s.source.length-1,"BAD_ALIAS","Anchor ending in : is ambiguous",!0),g=s,w??(w=s.offset),c=!1,d=!1,f=!0;break;case"tag":y&&r(s,"MULTIPLE_TAGS","A node can have at most one tag"),y=s,w??(w=s.offset),c=!1,d=!1,f=!0;break;case i:(g||y)&&r(s,"BAD_PROP_ORDER",`Anchors and tags must be after the ${s.source} indicator`),_&&r(s,"UNEXPECTED_TOKEN",`Unexpected ${s.source} in ${t??"collection"}`),_=s,c="seq-item-ind"===i||"explicit-key-ind"===i,d=!1;break;case"comma":if(t){v&&r(s,"UNEXPECTED_TOKEN",`Unexpected , in ${t}`),v=s,c=!1,d=!1;break}default:r(s,"UNEXPECTED_TOKEN",`Unexpected ${s.type} token`),c=!1,d=!1}const x=e[e.length-1],k=x?x.offset+x.source.length:s;return f&&n&&"space"!==n.type&&"newline"!==n.type&&"comma"!==n.type&&("scalar"!==n.type||""!==n.source)&&r(n.offset,"MISSING_CHAR","Tags and anchors must be separated from the next token by white space"),m&&(c&&m.indent<=o||"block-map"===n?.type||"block-seq"===n?.type)&&r(m,"TAB_AS_INDENT","Tabs are not allowed as indentation"),{comma:v,found:_,spaceBefore:l,comment:u,hasNewline:p,anchor:g,tag:y,newlineAfterProp:b,end:k,start:w??k}}function _n(e){if(!e)return null;switch(e.type){case"alias":case"scalar":case"double-quoted-scalar":case"single-quoted-scalar":if(e.source.includes("\n"))return!0;if(e.end)for(const t of e.end)if("newline"===t.type)return!0;return!1;case"flow-collection":for(const t of e.items){for(const e of t.start)if("newline"===e.type)return!0;if(t.sep)for(const e of t.sep)if("newline"===e.type)return!0;if(_n(t.key)||_n(t.value))return!0}return!1;default:return!0}}function wn(e,t,i){if("flow-collection"===t?.type){const n=t.end[0];if(n.indent===e&&("]"===n.source||"}"===n.source)&&_n(t)){i(n,"BAD_INDENT","Flow end indicator should be more indented than parent",!0)}}}function xn(e,t,i){const{uniqueKeys:n}=e.options;if(!1===n)return!1;const s="function"==typeof n?n:(e,t)=>e===t||at(e)&&at(t)&&e.value===t.value;return t.some(e=>s(e.key,i))}const kn="All mapping items must start at the same column";function Sn(e,t,i,n){let s="";if(e){let r=!1,o="";for(const a of e){const{source:e,type:l}=a;switch(l){case"space":r=!0;break;case"comment":{i&&!r&&n(a,"MISSING_CHAR","Comments must be separated from other tokens by white space characters");const t=e.substring(1)||" ";s?s+=o+t:s=t,o="";break}case"newline":s&&(o+=e),r=!0;break;default:n(a,"UNEXPECTED_TOKEN",`Unexpected ${l} at node end`)}t+=e.length}}return{comment:s,offset:t}}const Mn="Block collections are not allowed within flow collections",Cn=e=>e&&("block-map"===e.type||"block-seq"===e.type);function Tn(e,t,i,n,s,r){const o="block-map"===i.type?function({composeNode:e,composeEmptyNode:t},i,n,s,r){const o=new(r?.nodeClass??ui)(i.schema);i.atRoot&&(i.atRoot=!1);let a=n.offset,l=null;for(const r of n.items){const{start:c,key:d,sep:u,value:h}=r,p=vn(c,{indicator:"explicit-key-ind",next:d??u?.[0],offset:a,onError:s,parentIndent:n.indent,startOnNewline:!0}),f=!p.found;if(f){if(d&&("block-seq"===d.type?s(a,"BLOCK_AS_IMPLICIT_KEY","A block sequence may not be used as an implicit map key"):"indent"in d&&d.indent!==n.indent&&s(a,"BAD_INDENT",kn)),!p.anchor&&!p.tag&&!u){l=p.end,p.comment&&(o.comment?o.comment+="\n"+p.comment:o.comment=p.comment);continue}(p.newlineAfterProp||_n(d))&&s(d??c[c.length-1],"MULTILINE_IMPLICIT_KEY","Implicit keys need to be on a single line")}else p.found?.indent!==n.indent&&s(a,"BAD_INDENT",kn);i.atKey=!0;const m=p.end,g=d?e(i,d,p,s):t(i,m,c,null,p,s);i.schema.compat&&wn(n.indent,d,s),i.atKey=!1,xn(i,o.items,g)&&s(m,"DUPLICATE_KEY","Map keys must be unique");const y=vn(u??[],{indicator:"map-value-ind",next:h,offset:g.range[2],onError:s,parentIndent:n.indent,startOnNewline:!d||"block-scalar"===d.type});if(a=y.end,y.found){f&&("block-map"!==h?.type||y.hasNewline||s(a,"BLOCK_AS_IMPLICIT_KEY","Nested mappings are not allowed in compact mappings"),i.options.strict&&p.start<y.found.offset-1024&&s(g.range,"KEY_OVER_1024_CHARS","The : indicator must be at most 1024 chars after the start of an implicit block mapping key"));const l=h?e(i,h,y,s):t(i,a,u,null,y,s);i.schema.compat&&wn(n.indent,h,s),a=l.range[2];const c=new ri(g,l);i.options.keepSourceTokens&&(c.srcToken=r),o.items.push(c)}else{f&&s(g.range,"MISSING_CHAR","Implicit map keys need to be followed by map values"),y.comment&&(g.comment?g.comment+="\n"+y.comment:g.comment=y.comment);const e=new ri(g);i.options.keepSourceTokens&&(e.srcToken=r),o.items.push(e)}}return l&&l<a&&s(l,"IMPOSSIBLE","Map comment with trailing content"),o.range=[n.offset,a,l??a],o}(e,t,i,n,r):"block-seq"===i.type?function({composeNode:e,composeEmptyNode:t},i,n,s,r){const o=new(r?.nodeClass??pi)(i.schema);i.atRoot&&(i.atRoot=!1),i.atKey&&(i.atKey=!1);let a=n.offset,l=null;for(const{start:r,value:c}of n.items){const d=vn(r,{indicator:"seq-item-ind",next:c,offset:a,onError:s,parentIndent:n.indent,startOnNewline:!0});if(!d.found){if(!(d.anchor||d.tag||c)){l=d.end,d.comment&&(o.comment=d.comment);continue}"block-seq"===c?.type?s(d.end,"BAD_INDENT","All sequence items must start at the same column"):s(a,"MISSING_CHAR","Sequence item without - indicator")}const u=c?e(i,c,d,s):t(i,d.end,r,null,d,s);i.schema.compat&&wn(n.indent,c,s),a=u.range[2],o.items.push(u)}return o.range=[n.offset,a,l??a],o}(e,t,i,n,r):function({composeNode:e,composeEmptyNode:t},i,n,s,r){const o="{"===n.start.source,a=o?"flow map":"flow sequence",l=new(r?.nodeClass??(o?ui:pi))(i.schema);l.flow=!0;const c=i.atRoot;c&&(i.atRoot=!1),i.atKey&&(i.atKey=!1);let d=n.offset+n.start.source.length;for(let r=0;r<n.items.length;++r){const c=n.items[r],{start:u,key:h,sep:p,value:f}=c,m=vn(u,{flow:a,indicator:"explicit-key-ind",next:h??p?.[0],offset:d,onError:s,parentIndent:n.indent,startOnNewline:!1});if(!m.found){if(!(m.anchor||m.tag||p||f)){0===r&&m.comma?s(m.comma,"UNEXPECTED_TOKEN",`Unexpected , in ${a}`):r<n.items.length-1&&s(m.start,"UNEXPECTED_TOKEN",`Unexpected empty item in ${a}`),m.comment&&(l.comment?l.comment+="\n"+m.comment:l.comment=m.comment),d=m.end;continue}!o&&i.options.strict&&_n(h)&&s(h,"MULTILINE_IMPLICIT_KEY","Implicit keys of flow sequence pairs need to be on a single line")}if(0===r)m.comma&&s(m.comma,"UNEXPECTED_TOKEN",`Unexpected , in ${a}`);else if(m.comma||s(m.start,"MISSING_CHAR",`Missing , between ${a} items`),m.comment){let e="";e:for(const t of u)switch(t.type){case"comma":case"space":break;case"comment":e=t.source.substring(1);break e;default:break e}if(e){let t=l.items[l.items.length-1];ot(t)&&(t=t.value??t.key),t.comment?t.comment+="\n"+e:t.comment=e,m.comment=m.comment.substring(e.length+1)}}if(o||p||m.found){i.atKey=!0;const r=m.end,g=h?e(i,h,m,s):t(i,r,u,null,m,s);Cn(h)&&s(g.range,"BLOCK_IN_FLOW",Mn),i.atKey=!1;const y=vn(p??[],{flow:a,indicator:"map-value-ind",next:f,offset:g.range[2],onError:s,parentIndent:n.indent,startOnNewline:!1});if(y.found){if(!o&&!m.found&&i.options.strict){if(p)for(const e of p){if(e===y.found)break;if("newline"===e.type){s(e,"MULTILINE_IMPLICIT_KEY","Implicit keys of flow sequence pairs need to be on a single line");break}}m.start<y.found.offset-1024&&s(y.found,"KEY_OVER_1024_CHARS","The : indicator must be at most 1024 chars after the start of an implicit flow sequence key")}}else f&&("source"in f&&":"===f.source?.[0]?s(f,"MISSING_CHAR",`Missing space after : in ${a}`):s(y.start,"MISSING_CHAR",`Missing , or : between ${a} items`));const b=f?e(i,f,y,s):y.found?t(i,y.end,p,null,y,s):null;b?Cn(f)&&s(b.range,"BLOCK_IN_FLOW",Mn):y.comment&&(g.comment?g.comment+="\n"+y.comment:g.comment=y.comment);const v=new ri(g,b);if(i.options.keepSourceTokens&&(v.srcToken=c),o){const e=l;xn(i,e.items,g)&&s(r,"DUPLICATE_KEY","Map keys must be unique"),e.items.push(v)}else{const e=new ui(i.schema);e.flow=!0,e.items.push(v);const t=(b??g).range;e.range=[g.range[0],t[1],t[2]],l.items.push(e)}d=b?b.range[2]:y.end}else{const n=f?e(i,f,m,s):t(i,m.end,p,null,m,s);l.items.push(n),d=n.range[2],Cn(f)&&s(n.range,"BLOCK_IN_FLOW",Mn)}}const u=o?"}":"]",[h,...p]=n.end;let f=d;if(h?.source===u)f=h.offset+h.source.length;else{const e=a[0].toUpperCase()+a.substring(1);s(d,c?"MISSING_CHAR":"BAD_INDENT",c?`${e} must end with a ${u}`:`${e} in block collection must be sufficiently indented and end with a ${u}`),h&&1!==h.source.length&&p.unshift(h)}if(p.length>0){const e=Sn(p,f,i.options.strict,s);e.comment&&(l.comment?l.comment+="\n"+e.comment:l.comment=e.comment),l.range=[n.offset,f,e.offset]}else l.range=[n.offset,f,f];return l}(e,t,i,n,r),a=o.constructor;return"!"===s||s===a.tagName?(o.tag=a.tagName,o):(s&&(o.tag=s),o)}function $n(e,t,i){const n=t.offset,s=function({offset:e,props:t},i,n){if("block-scalar-header"!==t[0].type)return n(t[0],"IMPOSSIBLE","Block scalar header not found"),null;const{source:s}=t[0],r=s[0];let o=0,a="",l=-1;for(let t=1;t<s.length;++t){const i=s[t];if(a||"-"!==i&&"+"!==i){const n=Number(i);!o&&n?o=n:-1===l&&(l=e+t)}else a=i}-1!==l&&n(l,"UNEXPECTED_TOKEN",`Block scalar header includes extra characters: ${s}`);let c=!1,d="",u=s.length;for(let e=1;e<t.length;++e){const s=t[e];switch(s.type){case"space":c=!0;case"newline":u+=s.source.length;break;case"comment":if(i&&!c){n(s,"MISSING_CHAR","Comments must be separated from other tokens by white space characters")}u+=s.source.length,d=s.source.substring(1);break;case"error":n(s,"UNEXPECTED_TOKEN",s.message),u+=s.source.length;break;default:{n(s,"UNEXPECTED_TOKEN",`Unexpected token in block scalar header: ${s.type}`);const e=s.source;e&&"string"==typeof e&&(u+=e.length)}}}return{mode:r,indent:o,chomp:a,comment:d,length:u}}(t,e.options.strict,i);if(!s)return{value:"",type:null,comment:"",range:[n,n,n]};const r=">"===s.mode?Ot.BLOCK_FOLDED:Ot.BLOCK_LITERAL,o=t.source?function(e){const t=e.split(/\n( *)/),i=t[0],n=i.match(/^( *)/),s=[n?.[1]?[n[1],i.slice(n[1].length)]:["",i]];for(let e=1;e<t.length;e+=2)s.push([t[e],t[e+1]]);return s}(t.source):[];let a=o.length;for(let e=o.length-1;e>=0;--e){const t=o[e][1];if(""!==t&&"\r"!==t)break;a=e}if(0===a){const e="+"===s.chomp&&o.length>0?"\n".repeat(Math.max(1,o.length-1)):"";let i=n+s.length;return t.source&&(i+=t.source.length),{value:e,type:r,comment:s.comment,range:[n,i,i]}}let l=t.indent+s.indent,c=t.offset+s.length,d=0;for(let t=0;t<a;++t){const[n,r]=o[t];if(""!==r&&"\r"!==r){if(n.length<l){const e="Block scalars with more-indented leading empty lines must use an explicit indentation indicator";i(c+n.length,"MISSING_CHAR",e)}if(0===s.indent&&(l=n.length),d=t,0===l&&!e.atRoot){i(c,"BAD_INDENT","Block scalar values in collections must be indented")}break}0===s.indent&&n.length>l&&(l=n.length),c+=n.length+r.length+1}for(let e=o.length-1;e>=a;--e)o[e][0].length>l&&(a=e+1);let u="",h="",p=!1;for(let e=0;e<d;++e)u+=o[e][0].slice(l)+"\n";for(let e=d;e<a;++e){let[t,n]=o[e];c+=t.length+n.length+1;const a="\r"===n[n.length-1];if(a&&(n=n.slice(0,-1)),n&&t.length<l){const e=`Block scalar lines must not be less indented than their ${s.indent?"explicit indentation indicator":"first line"}`;i(c-n.length-(a?2:1),"BAD_INDENT",e),t=""}r===Ot.BLOCK_LITERAL?(u+=h+t.slice(l)+n,h="\n"):t.length>l||"\t"===n[0]?(" "===h?h="\n":p||"\n"!==h||(h="\n\n"),u+=h+t.slice(l)+n,h="\n",p=!0):""===n?"\n"===h?u+="\n":h="\n":(u+=h+n,h=" ",p=!1)}switch(s.chomp){case"-":break;case"+":for(let e=a;e<o.length;++e)u+="\n"+o[e][0].slice(l);"\n"!==u[u.length-1]&&(u+="\n");break;default:u+="\n"}const f=n+s.length+t.source.length;return{value:u,type:r,comment:s.comment,range:[n,f,f]}}function On(e,t,i){const{offset:n,type:s,source:r,end:o}=e;let a,l;const c=(e,t,s)=>i(n+e,t,s);switch(s){case"scalar":a=Ot.PLAIN,l=function(e,t){let i="";switch(e[0]){case"\t":i="a tab character";break;case",":i="flow indicator character ,";break;case"%":i="directive indicator character %";break;case"|":case">":i=`block scalar indicator ${e[0]}`;break;case"@":case"`":i=`reserved character ${e[0]}`}i&&t(0,"BAD_SCALAR_START",`Plain value cannot start with ${i}`);return En(e)}(r,c);break;case"single-quoted-scalar":a=Ot.QUOTE_SINGLE,l=function(e,t){"'"===e[e.length-1]&&1!==e.length||t(e.length,"MISSING_CHAR","Missing closing 'quote");return En(e.slice(1,-1)).replace(/''/g,"'")}(r,c);break;case"double-quoted-scalar":a=Ot.QUOTE_DOUBLE,l=function(e,t){let i="";for(let n=1;n<e.length-1;++n){const s=e[n];if("\r"!==s||"\n"!==e[n+1])if("\n"===s){const{fold:t,offset:s}=Nn(e,n);i+=t,n=s}else if("\\"===s){let s=e[++n];const r=An[s];if(r)i+=r;else if("\n"===s)for(s=e[n+1];" "===s||"\t"===s;)s=e[1+ ++n];else if("\r"===s&&"\n"===e[n+1])for(s=e[1+ ++n];" "===s||"\t"===s;)s=e[1+ ++n];else if("x"===s||"u"===s||"U"===s){const r={x:2,u:4,U:8}[s];i+=Dn(e,n+1,r,t),n+=r}else{const s=e.substr(n-1,2);t(n-1,"BAD_DQ_ESCAPE",`Invalid escape sequence ${s}`),i+=s}}else if(" "===s||"\t"===s){const t=n;let r=e[n+1];for(;" "===r||"\t"===r;)r=e[1+ ++n];"\n"===r||"\r"===r&&"\n"===e[n+2]||(i+=n>t?e.slice(t,n+1):s)}else i+=s}'"'===e[e.length-1]&&1!==e.length||t(e.length,"MISSING_CHAR",'Missing closing "quote');return i}(r,c);break;default:return i(e,"UNEXPECTED_TOKEN",`Expected a flow scalar value, but found: ${s}`),{value:"",type:null,comment:"",range:[n,n+r.length,n+r.length]}}const d=n+r.length,u=Sn(o,d,t,i);return{value:l,type:a,comment:u.comment,range:[n,d,u.offset]}}function En(e){let t,i;try{t=new RegExp("(.*?)(?<![ \t])[ \t]*\r?\n","sy"),i=new RegExp("[ \t]*(.*?)(?:(?<![ \t])[ \t]*)?\r?\n","sy")}catch{t=/(.*?)[ \t]*\r?\n/sy,i=/[ \t]*(.*?)[ \t]*\r?\n/sy}let n=t.exec(e);if(!n)return e;let s=n[1],r=" ",o=t.lastIndex;for(i.lastIndex=o;n=i.exec(e);)""===n[1]?"\n"===r?s+=r:r="\n":(s+=r+n[1],r=" "),o=i.lastIndex;const a=/[ \t]*(.*)/sy;return a.lastIndex=o,n=a.exec(e),s+r+(n?.[1]??"")}function Nn(e,t){let i="",n=e[t+1];for(;!(" "!==n&&"\t"!==n&&"\n"!==n&&"\r"!==n||"\r"===n&&"\n"!==e[t+2]);)"\n"===n&&(i+="\n"),n=e[(t+=1)+1];return i||(i=" "),{fold:i,offset:t}}const An={0:"\0",a:"",b:"\b",e:"",f:"\f",n:"\n",r:"\r",t:"\t",v:"\v",N:"",_:" ",L:"\u2028",P:"\u2029"," ":" ",'"':'"',"/":"/","\\":"\\","\t":"\t"};function Dn(e,t,i,n){const s=e.substr(t,i),r=s.length===i&&/^[0-9a-fA-F]+$/.test(s)?parseInt(s,16):NaN;if(isNaN(r)){const s=e.substr(t-2,i+2);return n(t-2,"BAD_DQ_ESCAPE",`Invalid escape sequence ${s}`),s}return String.fromCodePoint(r)}function In(e,t,i,n){const{value:s,type:r,comment:o,range:a}="block-scalar"===t.type?$n(e,t,n):On(t,e.options.strict,n),l=i?e.directives.tagName(i.source,e=>n(i,"TAG_RESOLVE_FAILED",e)):null;let c,d;c=e.options.stringKeys&&e.atKey?e.schema[et]:l?function(e,t,i,n,s){if("!"===i)return e[et];const r=[];for(const t of e.tags)if(!t.collection&&t.tag===i){if(!t.default||!t.test)return t;r.push(t)}for(const e of r)if(e.test?.test(t))return e;const o=e.knownTags[i];if(o&&!o.collection)return e.tags.push(Object.assign({},o,{default:!1,test:void 0})),o;return s(n,"TAG_RESOLVE_FAILED",`Unresolved tag: ${i}`,"tag:yaml.org,2002:str"!==i),e[et]}(e.schema,s,l,i,n):"scalar"===t.type?function({atKey:e,directives:t,schema:i},n,s,r){const o=i.tags.find(t=>(!0===t.default||e&&"key"===t.default)&&t.test?.test(n))||i[et];if(i.compat){const e=i.compat.find(e=>e.default&&e.test?.test(n))??i[et];if(o.tag!==e.tag){r(s,"TAG_RESOLVE_FAILED",`Value may be parsed as either ${t.tagString(o.tag)} or ${t.tagString(e.tag)}`,!0)}}return o}(e,s,t,n):e.schema[et];try{const r=c.resolve(s,e=>n(i??t,"TAG_RESOLVE_FAILED",e),e.options);d=at(r)?r:new Ot(r)}catch(e){const r=e instanceof Error?e.message:String(e);n(i??t,"TAG_RESOLVE_FAILED",r),d=new Ot(s)}return d.range=a,d.source=s,r&&(d.type=r),l&&(d.tag=l),c.format&&(d.format=c.format),o&&(d.comment=o),d}function Ln(e,t,i){if(t){i??(i=t.length);for(let n=i-1;n>=0;--n){let i=t[n];switch(i.type){case"space":case"comment":case"newline":e-=i.source.length;continue}for(i=t[++n];"space"===i?.type;)e+=i.source.length,i=t[++n];break}}return e}const Pn={composeNode:Rn,composeEmptyNode:Yn};function Rn(e,t,i,n){const s=e.atKey,{spaceBefore:r,comment:o,anchor:a,tag:l}=i;let c,d=!0;switch(t.type){case"alias":c=function({options:e},{offset:t,source:i,end:n},s){const r=new Ct(i.substring(1));""===r.source&&s(t,"BAD_ALIAS","Alias cannot be an empty string");r.source.endsWith(":")&&s(t+i.length-1,"BAD_ALIAS","Alias ending in : is ambiguous",!0);const o=t+i.length,a=Sn(n,o,e.strict,s);r.range=[t,o,a.offset],a.comment&&(r.comment=a.comment);return r}(e,t,n),(a||l)&&n(t,"ALIAS_PROPS","An alias node must not specify any properties");break;case"scalar":case"single-quoted-scalar":case"double-quoted-scalar":case"block-scalar":c=In(e,t,l,n),a&&(c.anchor=a.source.substring(1));break;case"block-map":case"block-seq":case"flow-collection":c=function(e,t,i,n,s){const r=n.tag,o=r?t.directives.tagName(r.source,e=>s(r,"TAG_RESOLVE_FAILED",e)):null;if("block-seq"===i.type){const{anchor:e,newlineAfterProp:t}=n,i=e&&r?e.offset>r.offset?e:r:e??r;i&&(!t||t.offset<i.offset)&&s(i,"MISSING_CHAR","Missing newline after block sequence props")}const a="block-map"===i.type?"map":"block-seq"===i.type?"seq":"{"===i.start.source?"map":"seq";if(!r||!o||"!"===o||o===ui.tagName&&"map"===a||o===pi.tagName&&"seq"===a)return Tn(e,t,i,s,o);let l=t.schema.tags.find(e=>e.tag===o&&e.collection===a);if(!l){const n=t.schema.knownTags[o];if(n?.collection!==a)return n?s(r,"BAD_COLLECTION_TYPE",`${n.tag} used for ${a} collection, but expects ${n.collection??"scalar"}`,!0):s(r,"TAG_RESOLVE_FAILED",`Unresolved tag: ${o}`,!0),Tn(e,t,i,s,o);t.schema.tags.push(Object.assign({},n,{default:!1})),l=n}const c=Tn(e,t,i,s,o,l),d=l.resolve?.(c,e=>s(r,"TAG_RESOLVE_FAILED",e),t.options)??c,u=dt(d)?d:new Ot(d);return u.range=c.range,u.tag=o,l?.format&&(u.format=l.format),u}(Pn,e,t,i,n),a&&(c.anchor=a.source.substring(1));break;default:n(t,"UNEXPECTED_TOKEN","error"===t.type?t.message:`Unsupported token (type: ${t.type})`),c=Yn(e,t.offset,void 0,null,i,n),d=!1}if(a&&""===c.anchor&&n(a,"BAD_ALIAS","Anchor cannot be an empty string"),s&&e.options.stringKeys&&(!at(c)||"string"!=typeof c.value||c.tag&&"tag:yaml.org,2002:str"!==c.tag)){n(l??t,"NON_STRING_KEY","With stringKeys, all keys must be strings")}return r&&(c.spaceBefore=!0),o&&("scalar"===t.type&&""===t.source?c.comment=o:c.commentBefore=o),e.options.keepSourceTokens&&d&&(c.srcToken=t),c}function Yn(e,t,i,n,{spaceBefore:s,comment:r,anchor:o,tag:a,end:l},c){const d=In(e,{type:"scalar",offset:Ln(t,i,n),indent:-1,source:""},a,c);return o&&(d.anchor=o.source.substring(1),""===d.anchor&&c(o,"BAD_ALIAS","Anchor cannot be an empty string")),s&&(d.spaceBefore=!0),r&&(d.comment=r,d.range[2]=l),d}function jn(e){if("number"==typeof e)return[e,e+1];if(Array.isArray(e))return 2===e.length?e:[e[0],e[1]];const{offset:t,source:i}=e;return[t,t+("string"==typeof i?i.length:1)]}function zn(e){let t="",i=!1,n=!1;for(let s=0;s<e.length;++s){const r=e[s];switch(r[0]){case"#":t+=(""===t?"":n?"\n\n":"\n")+(r.substring(1)||" "),i=!0,n=!1;break;case"%":"#"!==e[s+1]?.[0]&&(s+=1),i=!1;break;default:i||(n=!0),i=!1}}return{comment:t,afterEmptyLine:n}}class Hn{constructor(e={}){this.doc=null,this.atDirectives=!1,this.prelude=[],this.errors=[],this.warnings=[],this.onError=(e,t,i,n)=>{const s=jn(e);n?this.warnings.push(new yn(s,t,i)):this.errors.push(new gn(s,t,i))},this.directives=new vt({version:e.version||"1.2"}),this.options=e}decorate(e,t){const{comment:i,afterEmptyLine:n}=zn(this.prelude);if(i){const s=e.contents;if(t)e.comment=e.comment?`${e.comment}\n${i}`:i;else if(n||e.directives.docStart||!s)e.commentBefore=i;else if(ct(s)&&!s.flow&&s.items.length>0){let e=s.items[0];ot(e)&&(e=e.key);const t=e.commentBefore;e.commentBefore=t?`${i}\n${t}`:i}else{const e=s.commentBefore;s.commentBefore=e?`${i}\n${e}`:i}}t?(Array.prototype.push.apply(e.errors,this.errors),Array.prototype.push.apply(e.warnings,this.warnings)):(e.errors=this.errors,e.warnings=this.warnings),this.prelude=[],this.errors=[],this.warnings=[]}streamInfo(){return{comment:zn(this.prelude).comment,directives:this.directives,errors:this.errors,warnings:this.warnings}}*compose(e,t=!1,i=-1){for(const t of e)yield*this.next(t);yield*this.end(t,i)}*next(e){switch(e.type){case"directive":this.directives.add(e.source,(t,i,n)=>{const s=jn(e);s[0]+=t,this.onError(s,"BAD_DIRECTIVE",i,n)}),this.prelude.push(e.source),this.atDirectives=!0;break;case"document":{const t=function(e,t,{offset:i,start:n,value:s,end:r},o){const a=Object.assign({_directives:t},e),l=new pn(void 0,a),c={atKey:!1,atRoot:!0,directives:l.directives,options:l.options,schema:l.schema},d=vn(n,{indicator:"doc-start",next:s??r?.[0],offset:i,onError:o,parentIndent:0,startOnNewline:!0});d.found&&(l.directives.docStart=!0,!s||"block-map"!==s.type&&"block-seq"!==s.type||d.hasNewline||o(d.end,"MISSING_CHAR","Block collection cannot start on same line with directives-end marker")),l.contents=s?Rn(c,s,d,o):Yn(c,d.end,n,null,d,o);const u=l.contents.range[2],h=Sn(r,u,!1,o);return h.comment&&(l.comment=h.comment),l.range=[i,u,h.offset],l}(this.options,this.directives,e,this.onError);this.atDirectives&&!t.directives.docStart&&this.onError(e,"MISSING_CHAR","Missing directives-end/doc-start indicator line"),this.decorate(t,!1),this.doc&&(yield this.doc),this.doc=t,this.atDirectives=!1;break}case"byte-order-mark":case"space":break;case"comment":case"newline":this.prelude.push(e.source);break;case"error":{const t=e.source?`${e.message}: ${JSON.stringify(e.source)}`:e.message,i=new gn(jn(e),"UNEXPECTED_TOKEN",t);this.atDirectives||!this.doc?this.errors.push(i):this.doc.errors.push(i);break}case"doc-end":{if(!this.doc){const t="Unexpected doc-end without preceding document";this.errors.push(new gn(jn(e),"UNEXPECTED_TOKEN",t));break}this.doc.directives.docEnd=!0;const t=Sn(e.end,e.offset+e.source.length,this.doc.options.strict,this.onError);if(this.decorate(this.doc,!0),t.comment){const e=this.doc.comment;this.doc.comment=e?`${e}\n${t.comment}`:t.comment}this.doc.range[2]=t.offset;break}default:this.errors.push(new gn(jn(e),"UNEXPECTED_TOKEN",`Unsupported token ${e.type}`))}}*end(e=!1,t=-1){if(this.doc)this.decorate(this.doc,!0),yield this.doc,this.doc=null;else if(e){const e=Object.assign({_directives:this.directives},this.options),i=new pn(void 0,e);this.atDirectives&&this.onError(t,"MISSING_CHAR","Missing directives-end indicator line"),i.range=[0,t,t],this.decorate(i,!1),yield i}}}function Un(e){switch(e){case void 0:case" ":case"\n":case"\r":case"\t":return!0;default:return!1}}const qn=new Set("0123456789ABCDEFabcdef"),Fn=new Set("0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-#;/?:@&=+$_.!~*'()"),Bn=new Set(",[]{}"),Vn=new Set(" ,[]{}\n\r\t"),Wn=e=>!e||Vn.has(e);class Kn{constructor(){this.atEnd=!1,this.blockScalarIndent=-1,this.blockScalarKeep=!1,this.buffer="",this.flowKey=!1,this.flowLevel=0,this.indentNext=0,this.indentValue=0,this.lineEndPos=null,this.next=null,this.pos=0}*lex(e,t=!1){if(e){if("string"!=typeof e)throw TypeError("source is not a string");this.buffer=this.buffer?this.buffer+e:e,this.lineEndPos=null}this.atEnd=!t;let i=this.next??"stream";for(;i&&(t||this.hasChars(1));)i=yield*this.parseNext(i)}atLineEnd(){let e=this.pos,t=this.buffer[e];for(;" "===t||"\t"===t;)t=this.buffer[++e];return!t||"#"===t||"\n"===t||"\r"===t&&"\n"===this.buffer[e+1]}charAt(e){return this.buffer[this.pos+e]}continueScalar(e){let t=this.buffer[e];if(this.indentNext>0){let i=0;for(;" "===t;)t=this.buffer[++i+e];if("\r"===t){const t=this.buffer[i+e+1];if("\n"===t||!t&&!this.atEnd)return e+i+1}return"\n"===t||i>=this.indentNext||!t&&!this.atEnd?e+i:-1}if("-"===t||"."===t){const t=this.buffer.substr(e,3);if(("---"===t||"..."===t)&&Un(this.buffer[e+3]))return-1}return e}getLine(){let e=this.lineEndPos;return("number"!=typeof e||-1!==e&&e<this.pos)&&(e=this.buffer.indexOf("\n",this.pos),this.lineEndPos=e),-1===e?this.atEnd?this.buffer.substring(this.pos):null:("\r"===this.buffer[e-1]&&(e-=1),this.buffer.substring(this.pos,e))}hasChars(e){return this.pos+e<=this.buffer.length}setNext(e){return this.buffer=this.buffer.substring(this.pos),this.pos=0,this.lineEndPos=null,this.next=e,null}peek(e){return this.buffer.substr(this.pos,e)}*parseNext(e){switch(e){case"stream":return yield*this.parseStream();case"line-start":return yield*this.parseLineStart();case"block-start":return yield*this.parseBlockStart();case"doc":return yield*this.parseDocument();case"flow":return yield*this.parseFlowCollection();case"quoted-scalar":return yield*this.parseQuotedScalar();case"block-scalar":return yield*this.parseBlockScalar();case"plain-scalar":return yield*this.parsePlainScalar()}}*parseStream(){let e=this.getLine();if(null===e)return this.setNext("stream");if("\ufeff"===e[0]&&(yield*this.pushCount(1),e=e.substring(1)),"%"===e[0]){let t=e.length,i=e.indexOf("#");for(;-1!==i;){const n=e[i-1];if(" "===n||"\t"===n){t=i-1;break}i=e.indexOf("#",i+1)}for(;;){const i=e[t-1];if(" "!==i&&"\t"!==i)break;t-=1}const n=(yield*this.pushCount(t))+(yield*this.pushSpaces(!0));return yield*this.pushCount(e.length-n),this.pushNewline(),"stream"}if(this.atLineEnd()){const t=yield*this.pushSpaces(!0);return yield*this.pushCount(e.length-t),yield*this.pushNewline(),"stream"}return yield"",yield*this.parseLineStart()}*parseLineStart(){const e=this.charAt(0);if(!e&&!this.atEnd)return this.setNext("line-start");if("-"===e||"."===e){if(!this.atEnd&&!this.hasChars(4))return this.setNext("line-start");const e=this.peek(3);if(("---"===e||"..."===e)&&Un(this.charAt(3)))return yield*this.pushCount(3),this.indentValue=0,this.indentNext=0,"---"===e?"doc":"stream"}return this.indentValue=yield*this.pushSpaces(!1),this.indentNext>this.indentValue&&!Un(this.charAt(1))&&(this.indentNext=this.indentValue),yield*this.parseBlockStart()}*parseBlockStart(){const[e,t]=this.peek(2);if(!t&&!this.atEnd)return this.setNext("block-start");if(("-"===e||"?"===e||":"===e)&&Un(t)){const e=(yield*this.pushCount(1))+(yield*this.pushSpaces(!0));return this.indentNext=this.indentValue+1,this.indentValue+=e,yield*this.parseBlockStart()}return"doc"}*parseDocument(){yield*this.pushSpaces(!0);const e=this.getLine();if(null===e)return this.setNext("doc");let t=yield*this.pushIndicators();switch(e[t]){case"#":yield*this.pushCount(e.length-t);case void 0:return yield*this.pushNewline(),yield*this.parseLineStart();case"{":case"[":return yield*this.pushCount(1),this.flowKey=!1,this.flowLevel=1,"flow";case"}":case"]":return yield*this.pushCount(1),"doc";case"*":return yield*this.pushUntil(Wn),"doc";case'"':case"'":return yield*this.parseQuotedScalar();case"|":case">":return t+=(yield*this.parseBlockScalarHeader()),t+=(yield*this.pushSpaces(!0)),yield*this.pushCount(e.length-t),yield*this.pushNewline(),yield*this.parseBlockScalar();default:return yield*this.parsePlainScalar()}}*parseFlowCollection(){let e,t,i=-1;do{e=yield*this.pushNewline(),e>0?(t=yield*this.pushSpaces(!1),this.indentValue=i=t):t=0,t+=(yield*this.pushSpaces(!0))}while(e+t>0);const n=this.getLine();if(null===n)return this.setNext("flow");if(-1!==i&&i<this.indentNext&&"#"!==n[0]||0===i&&(n.startsWith("---")||n.startsWith("..."))&&Un(n[3])){if(!(i===this.indentNext-1&&1===this.flowLevel&&("]"===n[0]||"}"===n[0])))return this.flowLevel=0,yield"",yield*this.parseLineStart()}let s=0;for(;","===n[s];)s+=(yield*this.pushCount(1)),s+=(yield*this.pushSpaces(!0)),this.flowKey=!1;switch(s+=(yield*this.pushIndicators()),n[s]){case void 0:return"flow";case"#":return yield*this.pushCount(n.length-s),"flow";case"{":case"[":return yield*this.pushCount(1),this.flowKey=!1,this.flowLevel+=1,"flow";case"}":case"]":return yield*this.pushCount(1),this.flowKey=!0,this.flowLevel-=1,this.flowLevel?"flow":"doc";case"*":return yield*this.pushUntil(Wn),"flow";case'"':case"'":return this.flowKey=!0,yield*this.parseQuotedScalar();case":":{const e=this.charAt(1);if(this.flowKey||Un(e)||","===e)return this.flowKey=!1,yield*this.pushCount(1),yield*this.pushSpaces(!0),"flow"}default:return this.flowKey=!1,yield*this.parsePlainScalar()}}*parseQuotedScalar(){const e=this.charAt(0);let t=this.buffer.indexOf(e,this.pos+1);if("'"===e)for(;-1!==t&&"'"===this.buffer[t+1];)t=this.buffer.indexOf("'",t+2);else for(;-1!==t;){let e=0;for(;"\\"===this.buffer[t-1-e];)e+=1;if(e%2==0)break;t=this.buffer.indexOf('"',t+1)}const i=this.buffer.substring(0,t);let n=i.indexOf("\n",this.pos);if(-1!==n){for(;-1!==n;){const e=this.continueScalar(n+1);if(-1===e)break;n=i.indexOf("\n",e)}-1!==n&&(t=n-("\r"===i[n-1]?2:1))}if(-1===t){if(!this.atEnd)return this.setNext("quoted-scalar");t=this.buffer.length}return yield*this.pushToIndex(t+1,!1),this.flowLevel?"flow":"doc"}*parseBlockScalarHeader(){this.blockScalarIndent=-1,this.blockScalarKeep=!1;let e=this.pos;for(;;){const t=this.buffer[++e];if("+"===t)this.blockScalarKeep=!0;else if(t>"0"&&t<="9")this.blockScalarIndent=Number(t)-1;else if("-"!==t)break}return yield*this.pushUntil(e=>Un(e)||"#"===e)}*parseBlockScalar(){let e,t=this.pos-1,i=0;e:for(let n=this.pos;e=this.buffer[n];++n)switch(e){case" ":i+=1;break;case"\n":t=n,i=0;break;case"\r":{const e=this.buffer[n+1];if(!e&&!this.atEnd)return this.setNext("block-scalar");if("\n"===e)break}default:break e}if(!e&&!this.atEnd)return this.setNext("block-scalar");if(i>=this.indentNext){-1===this.blockScalarIndent?this.indentNext=i:this.indentNext=this.blockScalarIndent+(0===this.indentNext?1:this.indentNext);do{const e=this.continueScalar(t+1);if(-1===e)break;t=this.buffer.indexOf("\n",e)}while(-1!==t);if(-1===t){if(!this.atEnd)return this.setNext("block-scalar");t=this.buffer.length}}let n=t+1;for(e=this.buffer[n];" "===e;)e=this.buffer[++n];if("\t"===e){for(;"\t"===e||" "===e||"\r"===e||"\n"===e;)e=this.buffer[++n];t=n-1}else if(!this.blockScalarKeep)for(;;){let e=t-1,n=this.buffer[e];"\r"===n&&(n=this.buffer[--e]);const s=e;for(;" "===n;)n=this.buffer[--e];if(!("\n"===n&&e>=this.pos&&e+1+i>s))break;t=e}return yield"",yield*this.pushToIndex(t+1,!0),yield*this.parseLineStart()}*parsePlainScalar(){const e=this.flowLevel>0;let t,i=this.pos-1,n=this.pos-1;for(;t=this.buffer[++n];)if(":"===t){const t=this.buffer[n+1];if(Un(t)||e&&Bn.has(t))break;i=n}else if(Un(t)){let s=this.buffer[n+1];if("\r"===t&&("\n"===s?(n+=1,t="\n",s=this.buffer[n+1]):i=n),"#"===s||e&&Bn.has(s))break;if("\n"===t){const e=this.continueScalar(n+1);if(-1===e)break;n=Math.max(n,e-2)}}else{if(e&&Bn.has(t))break;i=n}return t||this.atEnd?(yield"",yield*this.pushToIndex(i+1,!0),e?"flow":"doc"):this.setNext("plain-scalar")}*pushCount(e){return e>0?(yield this.buffer.substr(this.pos,e),this.pos+=e,e):0}*pushToIndex(e,t){const i=this.buffer.slice(this.pos,e);return i?(yield i,this.pos+=i.length,i.length):(t&&(yield""),0)}*pushIndicators(){switch(this.charAt(0)){case"!":return(yield*this.pushTag())+(yield*this.pushSpaces(!0))+(yield*this.pushIndicators());case"&":return(yield*this.pushUntil(Wn))+(yield*this.pushSpaces(!0))+(yield*this.pushIndicators());case"-":case"?":case":":{const e=this.flowLevel>0,t=this.charAt(1);if(Un(t)||e&&Bn.has(t))return e?this.flowKey&&(this.flowKey=!1):this.indentNext=this.indentValue+1,(yield*this.pushCount(1))+(yield*this.pushSpaces(!0))+(yield*this.pushIndicators())}}return 0}*pushTag(){if("<"===this.charAt(1)){let e=this.pos+2,t=this.buffer[e];for(;!Un(t)&&">"!==t;)t=this.buffer[++e];return yield*this.pushToIndex(">"===t?e+1:e,!1)}{let e=this.pos+1,t=this.buffer[e];for(;t;)if(Fn.has(t))t=this.buffer[++e];else{if("%"!==t||!qn.has(this.buffer[e+1])||!qn.has(this.buffer[e+2]))break;t=this.buffer[e+=3]}return yield*this.pushToIndex(e,!1)}}*pushNewline(){const e=this.buffer[this.pos];return"\n"===e?yield*this.pushCount(1):"\r"===e&&"\n"===this.charAt(1)?yield*this.pushCount(2):0}*pushSpaces(e){let t,i=this.pos-1;do{t=this.buffer[++i]}while(" "===t||e&&"\t"===t);const n=i-this.pos;return n>0&&(yield this.buffer.substr(this.pos,n),this.pos=i),n}*pushUntil(e){let t=this.pos,i=this.buffer[t];for(;!e(i);)i=this.buffer[++t];return yield*this.pushToIndex(t,!1)}}class Gn{constructor(){this.lineStarts=[],this.addNewLine=e=>this.lineStarts.push(e),this.linePos=e=>{let t=0,i=this.lineStarts.length;for(;t<i;){const n=t+i>>1;this.lineStarts[n]<e?t=n+1:i=n}if(this.lineStarts[t]===e)return{line:t+1,col:1};if(0===t)return{line:0,col:e};return{line:t,col:e-this.lineStarts[t-1]+1}}}}function Jn(e,t){for(let i=0;i<e.length;++i)if(e[i].type===t)return!0;return!1}function Zn(e){for(let t=0;t<e.length;++t)switch(e[t].type){case"space":case"comment":case"newline":break;default:return t}return-1}function Xn(e){switch(e?.type){case"alias":case"scalar":case"single-quoted-scalar":case"double-quoted-scalar":case"flow-collection":return!0;default:return!1}}function Qn(e){switch(e.type){case"document":return e.start;case"block-map":{const t=e.items[e.items.length-1];return t.sep??t.start}case"block-seq":return e.items[e.items.length-1].start;default:return[]}}function es(e){if(0===e.length)return[];let t=e.length;e:for(;--t>=0;)switch(e[t].type){case"doc-start":case"explicit-key-ind":case"map-value-ind":case"seq-item-ind":case"newline":break e}for(;"space"===e[++t]?.type;);return e.splice(t,e.length)}function ts(e){if("flow-seq-start"===e.start.type)for(const t of e.items)!t.sep||t.value||Jn(t.start,"explicit-key-ind")||Jn(t.sep,"map-value-ind")||(t.key&&(t.value=t.key),delete t.key,Xn(t.value)?t.value.end?Array.prototype.push.apply(t.value.end,t.sep):t.value.end=t.sep:Array.prototype.push.apply(t.start,t.sep),delete t.sep)}class is{constructor(e){this.atNewLine=!0,this.atScalar=!1,this.indent=0,this.offset=0,this.onKeyLine=!1,this.stack=[],this.source="",this.type="",this.lexer=new Kn,this.onNewLine=e}*parse(e,t=!1){this.onNewLine&&0===this.offset&&this.onNewLine(0);for(const i of this.lexer.lex(e,t))yield*this.next(i);t||(yield*this.end())}*next(e){if(this.source=e,this.atScalar)return this.atScalar=!1,yield*this.step(),void(this.offset+=e.length);const t=function(e){switch(e){case"\ufeff":return"byte-order-mark";case"":return"doc-mode";case"":return"flow-error-end";case"":return"scalar";case"---":return"doc-start";case"...":return"doc-end";case"":case"\n":case"\r\n":return"newline";case"-":return"seq-item-ind";case"?":return"explicit-key-ind";case":":return"map-value-ind";case"{":return"flow-map-start";case"}":return"flow-map-end";case"[":return"flow-seq-start";case"]":return"flow-seq-end";case",":return"comma"}switch(e[0]){case" ":case"\t":return"space";case"#":return"comment";case"%":return"directive-line";case"*":return"alias";case"&":return"anchor";case"!":return"tag";case"'":return"single-quoted-scalar";case'"':return"double-quoted-scalar";case"|":case">":return"block-scalar-header"}return null}(e);if(t)if("scalar"===t)this.atNewLine=!1,this.atScalar=!0,this.type="scalar";else{switch(this.type=t,yield*this.step(),t){case"newline":this.atNewLine=!0,this.indent=0,this.onNewLine&&this.onNewLine(this.offset+e.length);break;case"space":this.atNewLine&&" "===e[0]&&(this.indent+=e.length);break;case"explicit-key-ind":case"map-value-ind":case"seq-item-ind":this.atNewLine&&(this.indent+=e.length);break;case"doc-mode":case"flow-error-end":return;default:this.atNewLine=!1}this.offset+=e.length}else{const t=`Not a YAML token: ${e}`;yield*this.pop({type:"error",offset:this.offset,message:t,source:e}),this.offset+=e.length}}*end(){for(;this.stack.length>0;)yield*this.pop()}get sourceToken(){return{type:this.type,offset:this.offset,indent:this.indent,source:this.source}}*step(){const e=this.peek(1);if("doc-end"!==this.type||"doc-end"===e?.type){if(!e)return yield*this.stream();switch(e.type){case"document":return yield*this.document(e);case"alias":case"scalar":case"single-quoted-scalar":case"double-quoted-scalar":return yield*this.scalar(e);case"block-scalar":return yield*this.blockScalar(e);case"block-map":return yield*this.blockMap(e);case"block-seq":return yield*this.blockSequence(e);case"flow-collection":return yield*this.flowCollection(e);case"doc-end":return yield*this.documentEnd(e)}yield*this.pop()}else{for(;this.stack.length>0;)yield*this.pop();this.stack.push({type:"doc-end",offset:this.offset,source:this.source})}}peek(e){return this.stack[this.stack.length-e]}*pop(e){const t=e??this.stack.pop();if(t)if(0===this.stack.length)yield t;else{const e=this.peek(1);switch("block-scalar"===t.type?t.indent="indent"in e?e.indent:0:"flow-collection"===t.type&&"document"===e.type&&(t.indent=0),"flow-collection"===t.type&&ts(t),e.type){case"document":e.value=t;break;case"block-scalar":e.props.push(t);break;case"block-map":{const i=e.items[e.items.length-1];if(i.value)return e.items.push({start:[],key:t,sep:[]}),void(this.onKeyLine=!0);if(!i.sep)return Object.assign(i,{key:t,sep:[]}),void(this.onKeyLine=!i.explicitKey);i.value=t;break}case"block-seq":{const i=e.items[e.items.length-1];i.value?e.items.push({start:[],value:t}):i.value=t;break}case"flow-collection":{const i=e.items[e.items.length-1];return void(!i||i.value?e.items.push({start:[],key:t,sep:[]}):i.sep?i.value=t:Object.assign(i,{key:t,sep:[]}))}default:yield*this.pop(),yield*this.pop(t)}if(!("document"!==e.type&&"block-map"!==e.type&&"block-seq"!==e.type||"block-map"!==t.type&&"block-seq"!==t.type)){const i=t.items[t.items.length-1];i&&!i.sep&&!i.value&&i.start.length>0&&-1===Zn(i.start)&&(0===t.indent||i.start.every(e=>"comment"!==e.type||e.indent<t.indent))&&("document"===e.type?e.end=i.start:e.items.push({start:i.start}),t.items.splice(-1,1))}}else{const e="Tried to pop an empty stack";yield{type:"error",offset:this.offset,source:"",message:e}}}*stream(){switch(this.type){case"directive-line":return void(yield{type:"directive",offset:this.offset,source:this.source});case"byte-order-mark":case"space":case"comment":case"newline":return void(yield this.sourceToken);case"doc-mode":case"doc-start":{const e={type:"document",offset:this.offset,start:[]};return"doc-start"===this.type&&e.start.push(this.sourceToken),void this.stack.push(e)}}yield{type:"error",offset:this.offset,message:`Unexpected ${this.type} token in YAML stream`,source:this.source}}*document(e){if(e.value)return yield*this.lineEnd(e);switch(this.type){case"doc-start":return void(-1!==Zn(e.start)?(yield*this.pop(),yield*this.step()):e.start.push(this.sourceToken));case"anchor":case"tag":case"space":case"comment":case"newline":return void e.start.push(this.sourceToken)}const t=this.startBlockValue(e);t?this.stack.push(t):yield{type:"error",offset:this.offset,message:`Unexpected ${this.type} token in YAML document`,source:this.source}}*scalar(e){if("map-value-ind"===this.type){const t=es(Qn(this.peek(2)));let i;e.end?(i=e.end,i.push(this.sourceToken),delete e.end):i=[this.sourceToken];const n={type:"block-map",offset:e.offset,indent:e.indent,items:[{start:t,key:e,sep:i}]};this.onKeyLine=!0,this.stack[this.stack.length-1]=n}else yield*this.lineEnd(e)}*blockScalar(e){switch(this.type){case"space":case"comment":case"newline":return void e.props.push(this.sourceToken);case"scalar":if(e.source=this.source,this.atNewLine=!0,this.indent=0,this.onNewLine){let e=this.source.indexOf("\n")+1;for(;0!==e;)this.onNewLine(this.offset+e),e=this.source.indexOf("\n",e)+1}yield*this.pop();break;default:yield*this.pop(),yield*this.step()}}*blockMap(e){const t=e.items[e.items.length-1];switch(this.type){case"newline":if(this.onKeyLine=!1,t.value){const i="end"in t.value?t.value.end:void 0,n=Array.isArray(i)?i[i.length-1]:void 0;"comment"===n?.type?i?.push(this.sourceToken):e.items.push({start:[this.sourceToken]})}else t.sep?t.sep.push(this.sourceToken):t.start.push(this.sourceToken);return;case"space":case"comment":if(t.value)e.items.push({start:[this.sourceToken]});else if(t.sep)t.sep.push(this.sourceToken);else{if(this.atIndentedComment(t.start,e.indent)){const i=e.items[e.items.length-2],n=i?.value?.end;if(Array.isArray(n))return Array.prototype.push.apply(n,t.start),n.push(this.sourceToken),void e.items.pop()}t.start.push(this.sourceToken)}return}if(this.indent>=e.indent){const i=!this.onKeyLine&&this.indent===e.indent,n=i&&(t.sep||t.explicitKey)&&"seq-item-ind"!==this.type;let s=[];if(n&&t.sep&&!t.value){const i=[];for(let n=0;n<t.sep.length;++n){const s=t.sep[n];switch(s.type){case"newline":i.push(n);break;case"space":break;case"comment":s.indent>e.indent&&(i.length=0);break;default:i.length=0}}i.length>=2&&(s=t.sep.splice(i[1]))}switch(this.type){case"anchor":case"tag":return void(n||t.value?(s.push(this.sourceToken),e.items.push({start:s}),this.onKeyLine=!0):t.sep?t.sep.push(this.sourceToken):t.start.push(this.sourceToken));case"explicit-key-ind":return t.sep||t.explicitKey?n||t.value?(s.push(this.sourceToken),e.items.push({start:s,explicitKey:!0})):this.stack.push({type:"block-map",offset:this.offset,indent:this.indent,items:[{start:[this.sourceToken],explicitKey:!0}]}):(t.start.push(this.sourceToken),t.explicitKey=!0),void(this.onKeyLine=!0);case"map-value-ind":if(t.explicitKey)if(t.sep)if(t.value)e.items.push({start:[],key:null,sep:[this.sourceToken]});else if(Jn(t.sep,"map-value-ind"))this.stack.push({type:"block-map",offset:this.offset,indent:this.indent,items:[{start:s,key:null,sep:[this.sourceToken]}]});else if(Xn(t.key)&&!Jn(t.sep,"newline")){const e=es(t.start),i=t.key,n=t.sep;n.push(this.sourceToken),delete t.key,delete t.sep,this.stack.push({type:"block-map",offset:this.offset,indent:this.indent,items:[{start:e,key:i,sep:n}]})}else s.length>0?t.sep=t.sep.concat(s,this.sourceToken):t.sep.push(this.sourceToken);else if(Jn(t.start,"newline"))Object.assign(t,{key:null,sep:[this.sourceToken]});else{const e=es(t.start);this.stack.push({type:"block-map",offset:this.offset,indent:this.indent,items:[{start:e,key:null,sep:[this.sourceToken]}]})}else t.sep?t.value||n?e.items.push({start:s,key:null,sep:[this.sourceToken]}):Jn(t.sep,"map-value-ind")?this.stack.push({type:"block-map",offset:this.offset,indent:this.indent,items:[{start:[],key:null,sep:[this.sourceToken]}]}):t.sep.push(this.sourceToken):Object.assign(t,{key:null,sep:[this.sourceToken]});return void(this.onKeyLine=!0);case"alias":case"scalar":case"single-quoted-scalar":case"double-quoted-scalar":{const i=this.flowScalar(this.type);return void(n||t.value?(e.items.push({start:s,key:i,sep:[]}),this.onKeyLine=!0):t.sep?this.stack.push(i):(Object.assign(t,{key:i,sep:[]}),this.onKeyLine=!0))}default:{const n=this.startBlockValue(e);if(n){if("block-seq"===n.type){if(!t.explicitKey&&t.sep&&!Jn(t.sep,"newline"))return void(yield*this.pop({type:"error",offset:this.offset,message:"Unexpected block-seq-ind on same line with key",source:this.source}))}else i&&e.items.push({start:s});return void this.stack.push(n)}}}}yield*this.pop(),yield*this.step()}*blockSequence(e){const t=e.items[e.items.length-1];switch(this.type){case"newline":if(t.value){const i="end"in t.value?t.value.end:void 0,n=Array.isArray(i)?i[i.length-1]:void 0;"comment"===n?.type?i?.push(this.sourceToken):e.items.push({start:[this.sourceToken]})}else t.start.push(this.sourceToken);return;case"space":case"comment":if(t.value)e.items.push({start:[this.sourceToken]});else{if(this.atIndentedComment(t.start,e.indent)){const i=e.items[e.items.length-2],n=i?.value?.end;if(Array.isArray(n))return Array.prototype.push.apply(n,t.start),n.push(this.sourceToken),void e.items.pop()}t.start.push(this.sourceToken)}return;case"anchor":case"tag":if(t.value||this.indent<=e.indent)break;return void t.start.push(this.sourceToken);case"seq-item-ind":if(this.indent!==e.indent)break;return void(t.value||Jn(t.start,"seq-item-ind")?e.items.push({start:[this.sourceToken]}):t.start.push(this.sourceToken))}if(this.indent>e.indent){const t=this.startBlockValue(e);if(t)return void this.stack.push(t)}yield*this.pop(),yield*this.step()}*flowCollection(e){const t=e.items[e.items.length-1];if("flow-error-end"===this.type){let e;do{yield*this.pop(),e=this.peek(1)}while("flow-collection"===e?.type)}else if(0===e.end.length){switch(this.type){case"comma":case"explicit-key-ind":return void(!t||t.sep?e.items.push({start:[this.sourceToken]}):t.start.push(this.sourceToken));case"map-value-ind":return void(!t||t.value?e.items.push({start:[],key:null,sep:[this.sourceToken]}):t.sep?t.sep.push(this.sourceToken):Object.assign(t,{key:null,sep:[this.sourceToken]}));case"space":case"comment":case"newline":case"anchor":case"tag":return void(!t||t.value?e.items.push({start:[this.sourceToken]}):t.sep?t.sep.push(this.sourceToken):t.start.push(this.sourceToken));case"alias":case"scalar":case"single-quoted-scalar":case"double-quoted-scalar":{const i=this.flowScalar(this.type);return void(!t||t.value?e.items.push({start:[],key:i,sep:[]}):t.sep?this.stack.push(i):Object.assign(t,{key:i,sep:[]}))}case"flow-map-end":case"flow-seq-end":return void e.end.push(this.sourceToken)}const i=this.startBlockValue(e);i?this.stack.push(i):(yield*this.pop(),yield*this.step())}else{const t=this.peek(2);if("block-map"===t.type&&("map-value-ind"===this.type&&t.indent===e.indent||"newline"===this.type&&!t.items[t.items.length-1].sep))yield*this.pop(),yield*this.step();else if("map-value-ind"===this.type&&"flow-collection"!==t.type){const i=es(Qn(t));ts(e);const n=e.end.splice(1,e.end.length);n.push(this.sourceToken);const s={type:"block-map",offset:e.offset,indent:e.indent,items:[{start:i,key:e,sep:n}]};this.onKeyLine=!0,this.stack[this.stack.length-1]=s}else yield*this.lineEnd(e)}}flowScalar(e){if(this.onNewLine){let e=this.source.indexOf("\n")+1;for(;0!==e;)this.onNewLine(this.offset+e),e=this.source.indexOf("\n",e)+1}return{type:e,offset:this.offset,indent:this.indent,source:this.source}}startBlockValue(e){switch(this.type){case"alias":case"scalar":case"single-quoted-scalar":case"double-quoted-scalar":return this.flowScalar(this.type);case"block-scalar-header":return{type:"block-scalar",offset:this.offset,indent:this.indent,props:[this.sourceToken],source:""};case"flow-map-start":case"flow-seq-start":return{type:"flow-collection",offset:this.offset,indent:this.indent,start:this.sourceToken,items:[],end:[]};case"seq-item-ind":return{type:"block-seq",offset:this.offset,indent:this.indent,items:[{start:[this.sourceToken]}]};case"explicit-key-ind":{this.onKeyLine=!0;const t=es(Qn(e));return t.push(this.sourceToken),{type:"block-map",offset:this.offset,indent:this.indent,items:[{start:t,explicitKey:!0}]}}case"map-value-ind":{this.onKeyLine=!0;const t=es(Qn(e));return{type:"block-map",offset:this.offset,indent:this.indent,items:[{start:t,key:null,sep:[this.sourceToken]}]}}}return null}atIndentedComment(e,t){return"comment"===this.type&&(!(this.indent<=t)&&e.every(e=>"newline"===e.type||"space"===e.type))}*documentEnd(e){"doc-mode"!==this.type&&(e.end?e.end.push(this.sourceToken):e.end=[this.sourceToken],"newline"===this.type&&(yield*this.pop()))}*lineEnd(e){switch(this.type){case"comma":case"doc-start":case"doc-end":case"flow-seq-end":case"flow-map-end":case"map-value-ind":yield*this.pop(),yield*this.step();break;case"newline":this.onKeyLine=!1;default:e.end?e.end.push(this.sourceToken):e.end=[this.sourceToken],"newline"===this.type&&(yield*this.pop())}}}function ns(e,t={}){const{lineCounter:i,prettyErrors:n}=function(e){const t=!1!==e.prettyErrors;return{lineCounter:e.lineCounter||t&&new Gn||null,prettyErrors:t}}(t),s=new is(i?.addNewLine),r=new Hn(t);let o=null;for(const t of r.compose(s.parse(e),!0,e.length))if(o){if("silent"!==o.options.logLevel){o.errors.push(new gn(t.range.slice(0,2),"MULTIPLE_DOCS","Source contains multiple documents; please use YAML.parseAllDocuments()"));break}}else o=t;return n&&i&&(o.errors.forEach(bn(e,i)),o.warnings.forEach(bn(e,i))),o}function ss(e){var t;return null!==(t=function(e,t,i){let n=null;if("function"==typeof t||Array.isArray(t)?n=t:void 0===i&&t&&(i=t),"string"==typeof i&&(i=i.length),"number"==typeof i){const e=Math.round(i);i=e<1?void 0:e>8?{indent:8}:{indent:e}}if(void 0===e){const{keepUndefined:e}=i??t??{};if(!e)return}return st(e)&&!n?e.toString(i):new pn(e,n,i).toString(i)}(e,{lineWidth:0}))&&void 0!==t?t:""}function rs(e){return function(e,t,i){let n;"function"==typeof t?n=t:void 0===i&&t&&"object"==typeof t&&(i=t);const s=ns(e,i);if(!s)return null;if(s.warnings.forEach(e=>Xt(s.options.logLevel,e)),s.errors.length>0){if("silent"!==s.options.logLevel)throw s.errors[0];s.errors=[]}return s.toJS(Object.assign({reviver:n},i))}(e)}const os=[{value:"navigate",label:"Navigate"},{value:"toggle",label:"Toggle"},{value:"more-info",label:"More Info"},{value:"call-service",label:"Call Service"},{value:"service-js",label:"JavaScript"},{value:"url",label:"URL"},{value:"toggle-sidebar",label:"Toggle Sidebar"},{value:"toggle-topmenu",label:"Toggle Top Menu"}],as=[{value:"list",label:"List"},{value:"wide",label:"Wide"},{value:"buttons",label:"Buttons"},{value:"grid",label:"Grid"}],ls=[{value:"overlay",label:"Overlay"},{value:"push",label:"Push"},{value:"flip",label:"Flip"}],cs=[{value:"left",label:"Left"},{value:"center",label:"Center"},{value:"right",label:"Right"}],ds={it:{close:"Chiudi",generate_config:"Genera config",saving:"Salvataggio…",save:"Salva",paste_yaml_hint:"Incolla questo YAML in ui-lovelace.yaml",copied:"Copiato!",copy:"Copia",yaml_replace_hint:"Sostituisci (o aggiungi) le sezioni sidebar: e header: nel tuo file di configurazione Lovelace.",unsaved_confirm:"Hai modifiche non salvate. Chiudere senza salvare?",general:"Generale",enabled:"Abilitato",title:"Titolo",clock_date:"Orologio & Data",analog_clock:"Orologio analogico",digital_clock:"Orologio digitale",with_seconds:"Con secondi",twelve_hour:"Formato 12 ore",show_ampm:"Mostra AM/PM",show_date:"Mostra data",date_format:"Formato data",layout:"Layout",hide_ha_sidebar:"Nascondi sidebar HA",hide_top_menu:"Nascondi top menu",show_top_menu_mobile:"Mostra top menu su mobile",menu_style:"Stile menu",show_labels:"Mostra etichette",update_active_menu:"Aggiorna menu attivo",menu_items:"Voci del Menu",add_item:"Aggiungi voce",bottom_card:"Card in basso (bottomCard)",custom_css:"Stile CSS personalizzato",css_sidebar_hint:"Inserisci CSS che verrà iniettato nella sidebar.",sticky:"Sticky",min_height:"Altezza minima (px)",top_menu_mode:"Modalità Top Menu",mode:"Modalità",flip_duration:"Durata flip (sec)",left_card:"Card Sinistra (leftCard)",center_card:"Card Centro (centerCard)",right_card:"Card Destra (rightCard)",position:"Posizione",items_label:"Voci",left_menu_title:"Menu Icone Sinistra (leftMenu",left_menu_hint:"Bottoni icona visualizzati nell'area sinistra dell'header.",add_icon:"Aggiungi icona",right_menu_title:"Menu Icone Destra (rightMenu",right_menu_hint:"Bottoni icona visualizzati nell'area destra dell'header.",css_header_hint:"Inserisci CSS che verrà iniettato nell'header.",remove_slot:"Rimuovi slot",stack_empty:"Stack vuota — clicca Aggiungi card per iniziare",move_up:"Sposta su",move_down:"Sposta giù",delete_card:"Elimina card",delete:"Elimina",card_yaml_hint:"YAML della card · modifica e clicca fuori (Tab/click) per applicare",add_card:"Aggiungi card",remove_card:"Rimuovi card",remove:"Rimuovi",edit_yaml_hint:"Modifica il YAML e premi Tab/click fuori per applicare.",no_card:"Nessuna card configurata",up:"Su",down:"Giù",unnamed:"(senza nome)",name:"Nome",icon:"Icona",action:"Azione",path:"Percorso",entity:"Entità",service:"Servizio",js_code:"Codice JS",colors_optional:"Colori (opzionale)",background:"Sfondo",text_color:"Testo",advanced:"Avanzato",condition:"Condizione (template)",width_pct:"Larghezza (%)",use_fixed:"Usa valore fisso",responsive:"Responsive",none:"nessuno",remove_title:"Rimuovi",new_item:"Nuovo",save_error:"Errore nel salvataggio: ",yaml_invalid:"YAML non valido: ",no_config:"# nessuna configurazione",items_count:"voci",header_menu:"Menu Header"},en:{close:"Close",generate_config:"Generate config",saving:"Saving…",save:"Save",paste_yaml_hint:"Paste this YAML in ui-lovelace.yaml",copied:"Copied!",copy:"Copy",yaml_replace_hint:"Replace (or add) the sidebar: and header: sections in your Lovelace configuration file.",unsaved_confirm:"You have unsaved changes. Close without saving?",general:"General",enabled:"Enabled",title:"Title",clock_date:"Clock & Date",analog_clock:"Analog clock",digital_clock:"Digital clock",with_seconds:"With seconds",twelve_hour:"12-hour format",show_ampm:"Show AM/PM",show_date:"Show date",date_format:"Date format",layout:"Layout",hide_ha_sidebar:"Hide HA sidebar",hide_top_menu:"Hide top menu",show_top_menu_mobile:"Show top menu on mobile",menu_style:"Menu style",show_labels:"Show labels",update_active_menu:"Update active menu",menu_items:"Menu Items",add_item:"Add item",bottom_card:"Bottom card (bottomCard)",custom_css:"Custom CSS style",css_sidebar_hint:"Enter CSS that will be injected into the sidebar.",sticky:"Sticky",min_height:"Min height (px)",top_menu_mode:"Top Menu Mode",mode:"Mode",flip_duration:"Flip duration (sec)",left_card:"Left card (leftCard)",center_card:"Center card (centerCard)",right_card:"Right card (rightCard)",position:"Position",items_label:"Items",left_menu_title:"Left Icon Menu (leftMenu",left_menu_hint:"Icon buttons displayed in the left area of the header.",add_icon:"Add icon",right_menu_title:"Right Icon Menu (rightMenu",right_menu_hint:"Icon buttons displayed in the right area of the header.",css_header_hint:"Enter CSS that will be injected into the header.",remove_slot:"Remove slot",stack_empty:"Empty stack — click Add card to start",move_up:"Move up",move_down:"Move down",delete_card:"Delete card",delete:"Delete",card_yaml_hint:"Card YAML · edit and click outside (Tab/click) to apply",add_card:"Add card",remove_card:"Remove card",remove:"Remove",edit_yaml_hint:"Edit the YAML and press Tab/click outside to apply.",no_card:"No card configured",up:"Up",down:"Down",unnamed:"(unnamed)",name:"Name",icon:"Icon",action:"Action",path:"Path",entity:"Entity",service:"Service",js_code:"JS Code",colors_optional:"Colors (optional)",background:"Background",text_color:"Text",advanced:"Advanced",condition:"Condition (template)",width_pct:"Width (%)",use_fixed:"Use fixed value",responsive:"Responsive",none:"none",remove_title:"Remove",new_item:"New",save_error:"Save error: ",yaml_invalid:"Invalid YAML: ",no_config:"# no configuration",items_count:"items",header_menu:"Header Menu"}};function us(e){return"sidebarMenu"!==e}let hs=!1;const ps="sidebar-card-settings-btn";async function fs(){var e,t,i,n;if(hs)return;const s=await Te();window.__sidebarCardLovelace=s;const r=null!==(t=null===(e=null==s?void 0:s.config)||void 0===e?void 0:e.sidebar)&&void 0!==t?t:null,o=null!==(n=null===(i=null==s?void 0:s.config)||void 0===i?void 0:i.header)&&void 0!==n?n:null;if(function(e){var t;const i=te();if(!(null===(t=null==i?void 0:i.user)||void 0===t?void 0:t.is_admin))return;const n=ke();if(!n)return void $e("injectToolbarButton","hui-root shadowRoot non trovato");const s=n.querySelector(".toolbar .action-items");if(!s)return void $e("injectToolbarButton",".action-items non trovato nella toolbar");if(s.querySelector(`#${ps}`))return;const r=document.createElement("ha-icon-button");r.id=ps,r.setAttribute("slot","actionItems"),r.setAttribute("label","Sidebar Card Settings"),r.setAttribute("title","Sidebar Card Settings");const o=document.createElement("ha-svg-icon");o.setAttribute("path","M21 13.1C20.9 13.1 20.7 13.2 20.6 13.3L19.6 14.3L21.7 16.4L22.7 15.4C22.9 15.2 22.9 14.8 22.7 14.6L21.4 13.3C21.3 13.2 21.2 13.1 21 13.1M19.1 14.9L13 20.9V23H15.1L21.2 16.9L19.1 14.9M21 3H3C1.9 3 1 3.9 1 5V19C1 20.1 1.9 21 3 21H11V19.9L12.1 18.8L12.2 18.7C12.1 18.5 12 18.3 12 18V14C12 13.2 12.3 12.5 12.9 12L17 7.9V7C17 5.9 17.9 5 19 5H21V3M5 7H11V13H5V7M5 15H11V19H5V15M19 5V9H13V5H19Z"),r.appendChild(o),r.addEventListener("click",t=>{var n,s,r,o;t.stopPropagation();let a=document.querySelector("sidebar-card-editor");a||(a=document.createElement("sidebar-card-editor"),document.body.appendChild(a));const l=JSON.parse(JSON.stringify(null!==(s=null===(n=null==e?void 0:e.config)||void 0===n?void 0:n.sidebar)&&void 0!==s?s:{})),c=JSON.parse(JSON.stringify(null!==(o=null===(r=null==e?void 0:e.config)||void 0===r?void 0:r.header)&&void 0!==o?o:{}));a.open(l,c,i)}),s.insertBefore(r,s.firstChild),$e("injectToolbarButton","Bottone settings iniettato nella toolbar HA")}(s),!r&&!o)return $e("build","No sidebar/header config found"),void(hs=!0);const a=Se();if(!a||!a.shadowRoot)return void Oe("build","Root element or shadowRoot not found!");Ae(),De(),Ie();const l=Le("sidebarOff"),c=a.shadowRoot.querySelector("div");if(c){if(r&&!1!==r.enabled&&(!r.width||"number"==typeof r.width&&r.width>0&&r.width<100||"object"==typeof r.width)){if(!c.querySelector("#customSidebarWrapper")){!0===r.hideTopMenu&&null==l?Ue(!1):Ue(!0),!0===r.hideHassSidebar&&null==l?je(!1):je(!0);const d=JSON.parse(JSON.stringify(r));d.breakpoints?(d.breakpoints.mobile||(d.breakpoints.mobile=768),d.breakpoints.tablet||(d.breakpoints.tablet=1024)):d.breakpoints={tablet:1024,mobile:768};const u=Pe(d,document.body.clientWidth),h=document.createElement("style");h.id="customSidebarStyle",h.type="text/css",h.appendChild(document.createTextNode(u)),c.appendChild(h);const p=c.querySelector("#view");if(!p||!p.parentNode)return void Oe("build","View element not found");const f=document.createElement("div");f.id="customSidebarWrapper",p.parentNode.insertBefore(f,p);const m=document.createElement("div");m.id="customSidebar",f.appendChild(m),f.appendChild(p),await async function(e,t){const i=document.createElement("sidebar-card");i.setConfig(t),i.hass=te(),e.appendChild(i)}(m,d),Ye(c,d,p,m),setTimeout(()=>Re(c,d),1)}}else r&&Oe("build","Error in sidebar width config!");if(o&&!1!==o.enabled){const g=c.querySelector("#view");if(g){const y=c.querySelector("#customSidebarWrapper"),b=null!=y?y:g;let v=c.querySelector("#customHeaderWrapper");v?b.parentElement!==v&&v.appendChild(b):(v=document.createElement("div"),v.id="customHeaderWrapper",v.style.display="flex",v.style.flexDirection="column",v.style.width="100%",v.style.minWidth="0",v.style.boxSizing="border-box",b.parentNode?b.parentNode.insertBefore(v,b):c.insertBefore(v,c.firstChild),v.appendChild(b));let _=v.querySelector("#customHeaderContainer");function w(e){let t=e.querySelector("#headerFlipStage");if(!t){t=document.createElement("div"),t.id="headerFlipStage",t.style.position="relative",t.style.width="100%",t.style.boxSizing="border-box",t.style.perspective="1600px",t.style.overflow="hidden";const i=document.createElement("div");i.id="headerFlipRotator",i.style.position="relative",i.style.width="100%",i.style.height="100%",i.style.transformStyle="preserve-3d",i.style.willChange="transform",i.style.transformOrigin="50% 50%",i.style.transform="rotateX(0deg) translateZ(0px)";const n=document.createElement("div");n.id="headerFlipFront",n.style.position="absolute",n.style.inset="0",n.style.backfaceVisibility="hidden",n.style.transform="rotateX(0deg)",n.style.zIndex="2";const s=document.createElement("div");s.id="headerFlipBack",s.style.position="absolute",s.style.inset="0",s.style.backfaceVisibility="hidden",s.style.transform="rotateX(180deg)",s.style.overflow="hidden",s.style.pointerEvents="none",s.style.opacity="0",s.style.zIndex="1",i.appendChild(n),i.appendChild(s),t.appendChild(i),e.appendChild(t)}const i=t.querySelector("#headerFlipFront"),n=e.querySelector("header-card");n&&n.parentElement!==i&&i.appendChild(n);const s=Math.round(i.getBoundingClientRect().height||0);return t.style.height=`${Math.max(s,72)}px`,t}function x(e,t,i,n,s=M){var r,o;const a=e.style.height,l=e.style.minHeight,c=Math.max(72,Math.round(e.getBoundingClientRect().height||0));e.style.height=`${c}px`,e.style.minHeight=`${c}px`;const d=w(e),u=d.querySelector("#headerFlipRotator"),h=d.querySelector("#headerFlipBack"),p=d.querySelector("#headerFlipFront");if(d.style.height=`${Math.max(c,72)}px`,u.__flipping)return e.style.height=a,void(e.style.minHeight=l);u.__flipping=!0;const f=null!==(r=null==ke?void 0:ke())&&void 0!==r?r:null,m=null!==(o=null==f?void 0:f.querySelector("div.header"))&&void 0!==o?o:t.querySelector("div.header");if(!m)return e.style.height=a,e.style.minHeight=l,void(u.__flipping=!1);const g="none"!==window.getComputedStyle(m).display,y=i.style.paddingTop,b=n.style.paddingTop,v=n.style.getPropertyValue("padding-top"),_=()=>{i.style.paddingTop=y,v?n.style.setProperty("padding-top",v):n.style.paddingTop=b,window.__silvioFlipActive=!1},x="__sidebarCardHaHeaderObserver",k=window[x];k&&k.disconnect(),delete window[x];const S="__silvioHaOverlayRestore",C=e=>{const t=window[S];if(!e)return t&&t(),delete window[S],void(g||(m.style.display="none"));if(t)return;const i={display:m.style.display,position:m.style.position,top:m.style.top,left:m.style.left,right:m.style.right,width:m.style.width,zIndex:m.style.zIndex,pointerEvents:m.style.pointerEvents,margin:m.style.margin,transform:m.style.transform};window[S]=()=>{m.style.display=i.display,m.style.position=i.position,m.style.top=i.top,m.style.left=i.left,m.style.right=i.right,m.style.width=i.width,m.style.zIndex=i.zIndex,m.style.pointerEvents=i.pointerEvents,m.style.margin=i.margin,m.style.transform=i.transform},m.style.display="flex",m.style.position="fixed",m.style.top="0px",m.style.left="0px",m.style.right="0px",m.style.width="100%",m.style.zIndex="3000",m.style.pointerEvents="auto",m.style.margin="0",m.style.transform="translateZ(0)"},T=()=>{h.innerHTML="";const t=Ne(),i=Math.max("string"==typeof t&&Number.parseInt(t,10)||0,56),n=m.cloneNode(!0);n.style.display="flex",n.style.position="relative",n.style.width="100%",n.style.height=`${i}px`,n.style.minHeight=`${i}px`,n.style.visibility="visible",n.style.opacity="1",h.appendChild(n);const s=Math.round(p.getBoundingClientRect().height||0),r=Math.round(h.getBoundingClientRect().height||0),o=Math.max(s,r,i,c,72);return d.style.height=`${o}px`,e.style.height=`${Math.max(o,c)}px`,e.style.minHeight=`${Math.max(o,c)}px`,o},$=800,O=()=>{u.getAnimations().forEach(e=>e.cancel()),p.getAnimations().forEach(e=>e.cancel()),h.getAnimations().forEach(e=>e.cancel()),u.style.transformOrigin="50% 50%",u.style.transform="rotateX(0deg) translateZ(0px)",p.style.opacity="1",h.style.opacity="0",h.innerHTML=""},E=async()=>{window.__silvioFlipActive=!0,i.style.paddingTop=window.getComputedStyle(i).paddingTop,n.style.paddingTop=window.getComputedStyle(n).paddingTop;const e=T();p.style.opacity="1",h.style.opacity="0",u.getAnimations().forEach(e=>e.cancel()),p.getAnimations().forEach(e=>e.cancel()),h.getAnimations().forEach(e=>e.cancel()),u.style.transformOrigin="50% 50%",u.style.transform="rotateX(0deg) translateZ(0px)";const t=Math.max(10,Math.min(30,Math.round(e/6)));await new Promise(e=>{const i=u.animate([{transform:"rotateX(0deg) translateZ(0px)"},{transform:`rotateX(89deg) translateZ(${t}px)`},{transform:"rotateX(180deg) translateZ(0px)"}],{duration:$,easing:"ease-in-out",fill:"forwards"});p.animate([{opacity:1},{opacity:0}],{duration:$,easing:"ease-in-out",fill:"forwards"}),h.animate([{opacity:0},{opacity:1}],{duration:$,easing:"ease-in-out",fill:"forwards"}),i.onfinish=()=>e()}),C(!0),h.style.opacity="0",h.innerHTML=""};(async()=>{try{await E(),await(t=s,new Promise(e=>window.setTimeout(e,t))),await(async()=>{C(!1);const t=T();p.style.opacity="0",h.style.opacity="1",u.getAnimations().forEach(e=>e.cancel()),p.getAnimations().forEach(e=>e.cancel()),h.getAnimations().forEach(e=>e.cancel()),u.style.transformOrigin="50% 50%",u.style.transform="rotateX(180deg) translateZ(0px)";const i=Math.max(10,Math.min(30,Math.round(t/6)));await new Promise(e=>{const t=u.animate([{transform:"rotateX(180deg) translateZ(0px)"},{transform:`rotateX(91deg) translateZ(${i}px)`},{transform:"rotateX(0deg) translateZ(0px)"}],{duration:$,easing:"ease-in-out",fill:"forwards"});h.animate([{opacity:1},{opacity:0}],{duration:$,easing:"ease-in-out",fill:"forwards"}),p.animate([{opacity:0},{opacity:1}],{duration:$,easing:"ease-in-out",fill:"forwards"}),t.onfinish=()=>e()}),O(),_(),e.style.height=a,e.style.minHeight=l;const n=Math.round(p.getBoundingClientRect().height||0);d.style.height=`${Math.max(n,72)}px`})()}catch(t){C(!1),O(),_(),e.style.height=a,e.style.minHeight=l}finally{try{const e=new MutationObserver(()=>{A(),requestAnimationFrame(()=>{A()})});e.observe(m,{attributes:!0,attributeFilter:["style","class","hidden"]}),window[x]=e}catch(e){}try{A(),requestAnimationFrame(()=>{A()})}catch(e){}u.__flipping=!1}var t})()}_?_!==v.firstChild&&v.insertBefore(_,v.firstChild):(_=document.createElement("div"),_.id="customHeaderContainer",_.style.width="100%",_.style.boxSizing="border-box",v.insertBefore(_,v.firstChild)),await async function(e,t){let i=e.querySelector("header-card");i||(i=document.createElement("header-card"),e.appendChild(i),ie(i)),i.setConfig(t),i.hass=te()}(_,o);const k=(()=>{const e=o.sticky;if(null==e)return!0;if("boolean"==typeof e)return e;if("string"==typeof e){const t=e.toLowerCase().trim();return!("false"===t||"off"===t||"0"===t||"no"===t)}return"number"!=typeof e||0!==e})(),S="overlay"===o.topMenuMode?"overlay":"flip"===o.topMenuMode?"flip":"push",M=(()=>{const e=o.flipDuration;if(null==e)return 5e3;const t=Number(e);return!Number.isFinite(t)||t<=0?5e3:Math.round(1e3*t)})(),C=()=>{var e,t;const i=null!==(e=null==ke?void 0:ke())&&void 0!==e?e:null;return null!==(t=null==i?void 0:i.querySelector("div.header"))&&void 0!==t?t:c.querySelector("div.header")},T="__sidebarCardHaHeaderObserver",$=()=>{const e=window[T];e&&e.disconnect(),delete window[T];const t=T+"_resize",i=window[t];i&&i.disconnect(),delete window[t]},O=()=>{$();const e=C();if(!e)return;let t=!1,i=0;const n=()=>{const e=Date.now();t||e-i<100||(t=!0,i=e,requestAnimationFrame(()=>{A(),t=!1}))};let s=null;const r=new MutationObserver(()=>{s&&clearTimeout(s),s=setTimeout(n,30)});if(r.observe(e,{attributes:!0,attributeFilter:["style","class","hidden"],subtree:!1}),window[T]=r,"undefined"!=typeof ResizeObserver){const t=T+"_resize",i=window[t];i&&i.disconnect();const s=new ResizeObserver(()=>{n()});s.observe(e),window[t]=s}window[T+"_schedule"]=n};let E=0,N=!1;const A=()=>{if(k?"sticky"!==_.style.position&&(_.style.position="sticky",_.style.top="0px",_.style.zIndex="push"===S?"1":"1000"):"relative"!==_.style.position&&(_.style.position="relative",_.style.top="0px",_.style.zIndex="1"),"flip"!==S||window.silvioFlipTopMenu?"flip"!==S&&window.silvioFlipTopMenu&&delete window.silvioFlipTopMenu:window.silvioFlipTopMenu=()=>{try{x(_,c,v,g,M)}catch(e){}},!0===window.__silvioFlipActive)return;const e=C();if(!e)return void("0px"!==v.style.paddingTop&&(v.style.paddingTop="0px",g.style.removeProperty("padding-top")));const t=e.style.display;let i="none"!==t&&("flex"===t||"block"===t||""===t);if(!i&&"none"!==t)try{i="none"!==window.getComputedStyle(e).display}catch(e){i=!1}let n=0;i&&(i!==N?(n=Math.round(e.getBoundingClientRect().height),E=n):n=E),N=i;const s=i?50:0;let r;("push"===S||"flip"===S)&&n>0?(r=`${n}px`,v.style.paddingTop!==r&&(v.style.paddingTop=r,g.style.paddingTop="0px")):(r=`${s}px`,v.style.paddingTop!==r&&(v.style.paddingTop=r,g.style.removeProperty("padding-top")))},D=window[T+"_schedule"];D?D():A(),O();const I="__sidebarCardHeaderResizeHandler",L=window[I];L&&window.removeEventListener("resize",L);let P=null;const R=()=>{P&&clearTimeout(P),P=setTimeout(()=>{const e=window[T+"_schedule"];e?e():A()},150)};window[I]=R,window.addEventListener("resize",R,{passive:!0});const Y="__sidebarCardHeaderScrollHandler",j=window[Y];j&&window.removeEventListener("scroll",j,{passive:!0});let z=null;const H=()=>{z&&clearTimeout(z),z=setTimeout(()=>{const e=window[T+"_schedule"];e?e():A()},100)};window[Y]=H,window.addEventListener("scroll",H,{passive:!0})}else Oe("build","View element (#view) not found for header")}else{const U=c.querySelector("#customHeaderWrapper"),q=c.querySelector("#customHeaderContainer");if(q&&q.remove(),U){const X=U.querySelector("#customSidebarWrapper"),Q=U.querySelector("#view"),ee=null!=X?X:Q;ee&&U.parentNode&&U.parentNode.insertBefore(ee,U),U.remove()}const F="__sidebarCardHeaderResizeHandler",B=window[F];B&&window.removeEventListener("resize",B),delete window[F];const V="__sidebarCardHeaderScrollHandler",W=window[V];W&&window.removeEventListener("scroll",W,{passive:!0}),delete window[V];const K="__sidebarCardHaHeaderObserver",G=window[K];G&&G.disconnect(),delete window[K];const J=K+"_resize",Z=window[J];Z&&Z.disconnect(),delete window[J]}hs=!0}else Oe("build","App layout not found")}var ms;customElements.get("sidebar-card")||customElements.define("sidebar-card",class extends ee{static get properties(){return{hass:{},config:{},active:{}}}constructor(){super(),this.config={},this.templateLines=[],this.clock=!1,this.updateMenu=!0,this.digitalClock=!1,this.twelveHourVersion=!1,this.digitalClockWithSeconds=!1,this.period=!1,this.date=!1,this.dateFormat="DD MMMM",this.bottomCard=null,this.CUSTOM_TYPE_PREFIX="custom:",this._clockInterval=null,this._dateInterval=null,this._intersectionObserver=null,this._updateMenuTimeout=null,this._lastActivePath="",this._boundLocationChange=()=>{this._updateMenuTimeout&&clearTimeout(this._updateMenuTimeout),this._updateMenuTimeout=setTimeout(()=>this._updateActiveMenu(),100)}}connectedCallback(){super.connectedCallback(),window.addEventListener("location-changed",this._boundLocationChange),this.config&&(this._setupVisibilityObserver(),this._stopClock(),this._stopDate(),this._updateActiveMenu())}disconnectedCallback(){super.disconnectedCallback(),window.removeEventListener("location-changed",this._boundLocationChange),this._stopClock(),this._stopDate(),this._intersectionObserver&&(this._intersectionObserver.disconnect(),this._intersectionObserver=null)}_setupVisibilityObserver(){(this.config.clock||this.config.digitalClock||this.config.date)&&(this._intersectionObserver=new IntersectionObserver(e=>{e.forEach(e=>{e.isIntersecting?((this.config.clock||this.config.digitalClock)&&this._startClock(),this.config.date&&this._startDate()):(this._stopClock(),this._stopDate())})},{threshold:.1}),this._intersectionObserver.observe(this))}_startClock(){this._clockInterval&&clearInterval(this._clockInterval);const e=this;e._runClock(),this._clockInterval=setInterval(()=>{e.isConnected?e._runClock():e._stopClock()},997)}_stopClock(){this._clockInterval&&(clearInterval(this._clockInterval),this._clockInterval=null)}_startDate(){this._dateInterval&&clearInterval(this._dateInterval);const e=this;e._runDate();this._dateInterval=setInterval(()=>{e.isConnected?e._runDate():e._stopDate()},36e5)}_stopDate(){this._dateInterval&&(clearInterval(this._dateInterval),this._dateInterval=null)}render(){var e,t,i;qe.start("sidebar-render");const n=this.config.sidebarMenu,s="title"in this.config&&this.config.title,r="style"in this.config,o=this.config.menuStyle||"list";return this.clock=!!this.config.clock&&this.config.clock,this.digitalClock=!!this.config.digitalClock&&this.config.digitalClock,this.digitalClockWithSeconds=!!this.config.digitalClockWithSeconds&&this.config.digitalClockWithSeconds,this.twelveHourVersion=!!this.config.twelveHourVersion&&this.config.twelveHourVersion,this.period=!!this.config.period&&this.config.period,this.date=!!this.config.date&&this.config.date,this.dateFormat=this.config.dateFormat?this.config.dateFormat:"DD MMMM",this.bottomCard=this.config.bottomCard?this.config.bottomCard:null,this.updateMenu=null===(e=this.config.updateMenu)||void 0===e||e,R`
      ${r?R`
            <style>
              ${this.config.style}
            </style>
          `:R``}

      <div class="sidebar-inner">
        ${this.digitalClock?R`
              <h1
                class="digitalClock${s?" with-title":""}${this.digitalClockWithSeconds?" with-seconds":""}"
              ></h1>
            `:R``}
        ${this.clock?R`
              <div class="clock">
                <div class="wrap">
                  <span class="hour"></span>
                  <span class="minute"></span>
                  <span class="second"></span>
                  <span class="dot"></span>
                </div>
              </div>
            `:R``}
        ${s?R`
              <h1 class="title">${s}</h1>
            `:R``}
        ${this.date?R`
              <h2 class="date"></h2>
            `:R``}
        ${n&&n.length>0?R`
              <ul
                class="sidebarMenu
                ${"buttons"===o?"sidebarMenu--buttons":""}
                ${"wide"===o?"sidebarMenu--wide":""}
                ${"grid"===o?"sidebarMenu--grid":""}"
              >
                ${(n||[]).filter(e=>this._evaluateVisibleCondition(e.conditional,this.hass)).map(e=>{var t,i,n;const s=e.state&&(null===(t=this.hass)||void 0===t?void 0:t.states[e.state])&&"off"!=(null===(i=this.hass)||void 0===i?void 0:i.states[e.state].state)&&"unavailable"!=(null===(n=this.hass)||void 0===n?void 0:n.states[e.state].state),r=e.background_color||"",a=e.icon_color||"",l=`\n                      ${r?`--sidebar-button-bg:${r};--sidebar-wide-bg:${r};--sidebar-grid-bg:${r};`:""}\n                      ${a?`--sidebar-button-icon-color:${a};--sidebar-wide-icon-color:${a};--sidebar-grid-icon-color:${a};`:""}\n                    `;if("buttons"===o){const t=!0===this.config.showLabel;return R`
                        <li
                          @click="${e=>this._menuAction(e)}"
                          class="sidebar-item-button ${t?"sidebar-item-button--with-label":""} ${s?"active":""}"
                          data-type="${e.action}"
                          data-path="${e.navigation_path?e.navigation_path:""}"
                          data-menuitem="${JSON.stringify(e)}"
                          style="${l}"
                        >
                          <div class="sidebar-icon-wrapper">
                            ${e.icon?R`
                                  <ha-icon
                                    class="sidebar-icon"
                                    icon="${e.icon}"
                                  ></ha-icon>
                                `:R``}
                          </div>
                          ${t?R`
                                <span class="sidebar-label"
                                  >${e.name}</span
                                >
                              `:R``}
                        </li>
                      `}return"wide"===o?R`
                        <li
                          @click="${e=>this._menuAction(e)}"
                          class="sidebar-item-wide ${s?"active":""}"
                          data-type="${e.action}"
                          data-path="${e.navigation_path?e.navigation_path:""}"
                          data-menuitem="${JSON.stringify(e)}"
                          style="${l}"
                        >
                          ${e.icon?R`
                                <ha-icon
                                  class="sidebar-icon"
                                  icon="${e.icon}"
                                ></ha-icon>
                              `:R``}
                          <span class="sidebar-label"
                            >${e.name}</span
                          >
                        </li>
                      `:"grid"===o?R`
                        <li
                          @click="${e=>this._menuAction(e)}"
                          class="sidebar-item-grid ${s?"active":""}"
                          data-type="${e.action}"
                          data-path="${e.navigation_path?e.navigation_path:""}"
                          data-menuitem="${JSON.stringify(e)}"
                          style="${l}"
                        >
                          <div
                            class="sidebar-icon-wrapper sidebar-icon-wrapper-grid"
                          >
                            ${e.icon?R`
                                  <ha-icon
                                    class="sidebar-icon"
                                    icon="${e.icon}"
                                  ></ha-icon>
                                `:R``}
                          </div>
                          <span class="sidebar-label"
                            >${e.name}</span
                          >
                        </li>
                      `:R`
                      <li
                        @click="${e=>this._menuAction(e)}"
                        class="${s?"active":""}"
                        data-type="${e.action}"
                        data-path="${e.navigation_path?e.navigation_path:""}"
                        data-menuitem="${JSON.stringify(e)}"
                      >
                        <span>${e.name}</span>
                        ${e.icon?R`
                              <ha-icon
                                @click="${e=>this._menuAction(e)}"
                                icon="${e.icon}"
                              ></ha-icon>
                            `:R``}
                      </li>
                    `})}
              </ul>
            `:R``}
        ${this.config.template?R`
              <ul class="template">
                ${this.templateLines.map(e=>R`
                    ${function(e){const t=document.createElement("div");return t.innerHTML=e.trim(),t.firstChild}(e)}
                  `)}
              </ul>
            `:R``}
        ${(null===(i=null===(t=this.hass)||void 0===t?void 0:t.user)||void 0===i?void 0:i.is_admin)?R`
              <div class="settings-gear" @click="${this._openSettings}">
                <ha-icon icon="mdi:cog"></ha-icon>
              </div>
            `:R``}
        ${this.bottomCard?R`
              <div class="bottom"></div>
            `:R``}
      </div>
    `}_openSettings(e){var t,i,n,s;e.stopPropagation();let r=document.querySelector("sidebar-card-editor");r||(r=document.createElement("sidebar-card-editor"),document.body.appendChild(r));const o=window.__sidebarCardLovelace,a=JSON.parse(JSON.stringify(null!==(i=null===(t=null==o?void 0:o.config)||void 0===t?void 0:t.sidebar)&&void 0!==i?i:{})),l=JSON.parse(JSON.stringify(null!==(s=null===(n=null==o?void 0:o.config)||void 0===n?void 0:n.header)&&void 0!==s?s:{}));r.open(a,l,this.hass)}_runClock(){qe.start("clock-update");const e=new Date,t=e.getHours(),i=e.getMinutes(),n=e.getSeconds();if(this.clock){const e=t%12*30+.5*i,s=6*i,r=6*n,o=this.shadowRoot.querySelector(".hour"),a=this.shadowRoot.querySelector(".minute"),l=this.shadowRoot.querySelector(".second");o&&(o.style.transform=`rotate(${e}deg)`),a&&(a.style.transform=`rotate(${s}deg)`),l&&(l.style.transform=`rotate(${r}deg)`)}if(this.digitalClock){const i=this.hass&&this.hass.language||navigator.language||"en",n={hour:"2-digit",minute:"2-digit",hour12:this.twelveHourVersion};this.digitalClockWithSeconds&&(n.second="2-digit");let s=new Intl.DateTimeFormat(i,n).format(e);if(this.twelveHourVersion&&this.period){const e=t>=12?"pm":"am";s.toLowerCase().includes("am")||s.toLowerCase().includes("pm")||(s+=" "+e)}const r=this.shadowRoot.querySelector(".digitalClock");r&&(r.textContent=s)}qe.end("clock-update")}_runDate(){if(!this.shadowRoot)return;const e=this.shadowRoot.querySelector(".date");if(!e)return;const t=Ge.call(null),i=this.hass&&this.hass.language||navigator.language||"en";e.textContent=t.locale(i).format(this.dateFormat||"LL")}updateSidebarSize(){var e;const t=null===(e=this.shadowRoot)||void 0===e?void 0:e.querySelector(".sidebar-inner");if(!t||!this.config)return;const i=Ne();t.style.width=this.offsetWidth+"px",this.config.hideTopMenu?(Ue(!1),t.style.height=`${window.innerHeight}px`,t.style.top="0px"):(Ue(!0),t.style.height=`calc(${window.innerHeight}px - ${i})`,t.style.top=i)}firstUpdated(){ie(this);const e=this;setTimeout(()=>{e.updateSidebarSize(),e._updateActiveMenu()},50),setTimeout(()=>{e.updateSidebarSize()},350);let t=null;window.addEventListener("resize",()=>{t&&clearTimeout(t),t=setTimeout(()=>{e.updateSidebarSize()},100)},!0),this.bottomCard&&setTimeout(()=>{let e;if(this.bottomCard.cardOptions?(e={type:this.bottomCard.type},e=Object.assign({},e,this.bottomCard.cardOptions)):e=this.bottomCard,$e("firstUpdated","Bottom card: ",e),!e||"object"!=typeof e||!e.type)return void Oe("firstUpdated","Bottom card config error!");let t=e.type;t=t.startsWith(this.CUSTOM_TYPE_PREFIX)?t.substr(this.CUSTOM_TYPE_PREFIX.length):`hui-${t}-card`;const i=this.shadowRoot.querySelector(".bottom");if(!i)return void Oe("firstUpdated","Bottom section not found");const n=()=>{var n;const s=document.createElement(t);if("function"==typeof s.setConfig){if(s.setConfig(e),s.hass=te(),this.config.bottomCardTheme){const e=null===(n=this.hass)||void 0===n?void 0:n.themes.themes[this.config.bottomCardTheme];if(e)for(let t in e)s.style.setProperty(`--${t}`,e[t])}if(i.appendChild(s),ie(s),this.bottomCard.cardStyle&&""!==this.bottomCard.cardStyle){const e=this.bottomCard.cardStyle;let t=0;const i=setInterval(()=>{if(s&&s.shadowRoot){window.clearInterval(i);const t=document.createElement("style");t.innerHTML=e,s.shadowRoot.appendChild(t)}else 10===++t&&window.clearInterval(i)},100)}}else Oe("firstUpdated",`Element "${t}" for bottomCard does not implement setConfig(). Check type "${e.type}".`)};customElements.get(t)?n():customElements.whenDefined(t).then(n).catch(e=>{Oe("firstUpdated",`Error waiting for "${t}" definition`,e)})},2)}_updateActiveMenu(){if(!this.updateMenu)return;const e=document.location.pathname;if(e===this._lastActivePath)return;const t=this.shadowRoot.querySelectorAll('ul.sidebarMenu li[data-type="navigate"]');for(let e=0;e<t.length;e++)t[e].classList.remove("active");const i=this.shadowRoot.querySelector(`ul.sidebarMenu li[data-path="${e}"]`);i&&i.classList.add("active"),this._lastActivePath=e}_menuAction(e){const t=e.target;if(!t)return;const i=t.closest("li[data-menuitem]");if(!i)return;const n=i.getAttribute("data-menuitem");if(!n)return;const s=JSON.parse(n);this._customAction(s)}_evaluateVisibleCondition(e,t){var i,n,s,r,o;if(!e)return!0;const a=e.trim().replace(/^{{\s*|\s*}}$/g,"").trim();try{const e=a.match(/is_state\(['"]([^'"]+)['"],\s*['"]([^'"]+)['"]\)/);if(e){const[,n,s]=e;return(null===(i=t.states[n])||void 0===i?void 0:i.state)===s}const l=a.match(/is_state_attr\(['"]([^'"]+)['"],\s*['"]([^'"]+)['"],\s*['"]([^'"]+)['"]\)/);if(l){const[,e,i,r]=l;return(null===(s=null===(n=t.states[e])||void 0===n?void 0:n.attributes)||void 0===s?void 0:s[i])===r}const c=a.match(/states\[['"]([^'"]+)['"]\]\s*==\s*['"]([^'"]+)['"]/);if(c){const[,e,i]=c;return(null===(r=t.states[e])||void 0===r?void 0:r.state)===i}const d=a.match(/states\[['"]([^'"]+)['"]\]\s*\|\s*(int|float)\s*([<>]=?|==)\s*([\d.]+)/);if(d){const[,e,i,n,s]=d,r=null===(o=t.states[e])||void 0===o?void 0:o.state;if(void 0===r)return!1;const a="float"===i?parseFloat(r):parseInt(r,10),l=parseFloat(s);switch(n){case">":return a>l;case"<":return a<l;case">=":return a>=l;case"<=":return a<=l;case"==":return a==l;default:return!1}}return console.warn("sidebar-card: could not parse visible template:",a),!0}catch(e){return console.error("sidebar-card: visible template evaluation error:",e),!0}}_customAction(e){if(this.hass)switch(e.action){case"more-info":(e.entity||e.camera_image)&&re(e.entity?e.entity:e.camera_image);break;case"navigate":e.navigation_path&&ye(window,e.navigation_path);break;case"url":e.url_path&&window.open(e.url_path);break;case"toggle":e.entity&&(be(this.hass,e.entity),ge("success"));break;case"call-service":{if(!e.service)return void ge("failure");const[t,i]=e.service.split(".",2);this.hass.callService(t,i,e.service_data),ge("success");break}case"service-js":if(null==e?void 0:e.service)try{const t=String(e.service).replace(/^\[\[\[\s*|\s*\]\]\]$/g,"");new Function(t).call(this),ge("success")}catch(e){ge("failure")}else ge("failure");break;case"toggle-sidebar":try{const e=window;e&&"function"==typeof e.silvioToggleHaSidebar?(e.silvioToggleHaSidebar(),ge("success")):ge("failure")}catch(e){ge("failure")}break;case"toggle-topmenu":try{const e=window;e&&"function"==typeof e.silvioFlipTopMenu&&e.silvioFlipTopMenu(),e&&"function"==typeof e.silvioToggleTopMenu?(e.silvioToggleTopMenu(),ge("success")):ge("failure")}catch(e){ge("failure")}}}setConfig(e){this.config=e,this.config.template&&function(e,t,i,n=!0){e||(e=te().connection);let s={user:te().user.name,browser:le,hash:location.hash.substr(1)||" ",...i.variables},r=i.template,o=i.entity_ids;e.subscribeMessage(e=>{if(n){let i=String(e.result);const n=/_\([^)]*\)/g;i=i.replace(n,e=>te().localize(e.substring(2,e.length-1))||e),t(i)}else t(e.result)},{type:"render_template",template:r,variables:s,entity_ids:o})}(null,e=>{this.templateLines=e.match(/<(?:li|div)(?:\s+(?:class|id)\s*=\s*"([^"]*)")*\s*>([\s\S]*?)<\/(?:li|div)>/g).map(e=>e),this.requestUpdate()},{template:this.config.template,variables:{config:this.config},entity_ids:[]})}getCardSize(){return 1}static get styles(){return X`
      :host {
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        background-color: var(
          --sidebar-background,
          var(
            --paper-listbox-background-color,
            var(--primary-background-color, #fff)
          )
        );
      }
      .sidebar-inner {
        padding: 20px;
        display: flex;
        flex-direction: column;
        box-sizing: border-box;
        position: fixed;
        width: var(--sidebar-effective-width, 250px);
        max-width: 100%;
        height: 100vh;
        overflow: visible;
        transition: width 0.25s ease;
      }

      .sidebarMenu {
        list-style: none;
        margin: 20px 0;
        padding: 20px 0;
        border-top: 1px solid rgba(255, 255, 255, 0.2);
        border-bottom: 1px solid rgba(255, 255, 255, 0.2);
      }
      .sidebarMenu li {
        color: var(--sidebar-text-color, #000);
        position: relative;
        padding: 10px 20px;
        border-radius: 12px;
        font-size: 18px;
        line-height: 24px;
        font-weight: 300;
        white-space: normal;
        display: block;
        cursor: pointer;
      }
      .sidebarMenu li ha-icon {
        float: right;
        color: var(--sidebar-icon-color, #000);
      }
      .sidebarMenu li.active {
        color: var(--sidebar-selected-text-color);
      }
      .sidebarMenu li.active ha-icon {
        color: var(--sidebar-selected-icon-color, rgb(247, 217, 89));
      }
      .sidebarMenu li.active::before {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: var(--sidebar-selected-icon-color, #000);
        opacity: 0.12;
        border-radius: 12px;
      }
      h1 {
        margin-top: 0;
        margin-bottom: 20px;
        font-size: 32px;
        line-height: 32px;
        font-weight: 200;
        color: var(--sidebar-text-color, #000);
        cursor: default;
      }
      h1.digitalClock {
        font-size: 60px;
        line-height: 60px;
        cursor: default;
      }
      h1.digitalClock.with-seconds {
        font-size: 48px;
        line-height: 48px;
        cursor: default;
      }
      h1.digitalClock.with-title {
        margin-bottom: 0;
        cursor: default;
      }
      h2 {
        margin: 0;
        font-size: 26px;
        line-height: 26px;
        font-weight: 200;
        color: var(--sidebar-text-color, #000);
        cursor: default;
      }
      .template {
        margin: 0;
        padding: 0;
        list-style: none;
        color: var(--sidebar-text-color, #000);
      }

      .template li {
        display: block;
        color: inherit;
        font-size: 18px;
        line-height: 24px;
        font-weight: 300;
        white-space: normal;
      }

      .clock {
        margin: 20px 0;
        position: relative;
        padding-top: calc(100% - 10px);
        width: calc(100% - 10px);
        border-radius: 100%;
        background: var(--face-color, #fff);
        font-family: "Montserrat";
        border: 5px solid var(--face-border-color, #fff);
        box-shadow: inset 2px 3px 8px 0 rgba(0, 0, 0, 0.1);
      }

      .clock .wrap {
        overflow: hidden;
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        border-radius: 100%;
      }

      .clock .minute,
      .clock .hour {
        position: absolute;
        height: 28%;
        width: 6px;
        margin: auto;
        top: -27%;
        left: 0;
        bottom: 0;
        right: 0;
        background: var(--clock-hands-color, #000);
        transform-origin: bottom center;
        transform: rotate(0deg);
        box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.4);
        z-index: 1;
      }

      .clock .minute {
        position: absolute;
        height: 41%;
        width: 4px;
        top: -38%;
        left: 0;
        box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.4);
        transform: rotate(90deg);
      }

      .clock .second {
        position: absolute;
        top: -48%;
        height: 48%;
        width: 2px;
        margin: auto;
        left: 0;
        bottom: 0;
        right: 0;
        border-radius: 4px;
        background: var(--clock-seconds-hand-color, #ff4b3e);
        transform-origin: bottom center;
        transform: rotate(180deg);
        z-index: 1;
      }

      .clock .dot {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        width: 12px;
        height: 12px;
        border-radius: 100px;
        background: var(--clock-middle-background, #fff);
        border: 2px solid var(--clock-middle-border, #000);
        border-radius: 100px;
        margin: auto;
        z-index: 1;
      }

      .bottom {
        display: flex;
        margin-top: auto;
      }

      /* Settings gear icon */
      .settings-gear {
        margin-top: auto;
        padding: 12px 0;
        cursor: pointer;
        opacity: 0.4;
        transition: opacity 0.2s ease;
        display: flex;
        align-items: center;
        justify-content: center;
      }
      .settings-gear:hover {
        opacity: 1;
      }
      .settings-gear ha-icon {
        color: var(--sidebar-icon-color, var(--secondary-text-color, #727272));
        --mdc-icon-size: 22px;
      }

      /* === STILE MENU "WIDE" === */

      .sidebarMenu.sidebarMenu--wide {
        border-top: none;
        border-bottom: none;
        margin: var(--sidebar-wide-margin-y, 16px) 0;
        padding: 0;
        display: flex;
        flex-direction: column;
        gap: var(--sidebar-wide-gap, 8px);
      }

      .sidebarMenu.sidebarMenu--wide li.sidebar-item-wide {
        padding: 0 var(--sidebar-wide-padding-x, 14px);
        margin: 0;
        width: 100%;
        height: var(--sidebar-wide-height, 48px);
        border-radius: var(--sidebar-wide-radius, 18px);
        display: flex;
        align-items: center;
        gap: var(--sidebar-wide-item-gap, 10px);
        cursor: pointer;
        background-color: var(
          --sidebar-wide-bg,
          var(--sidebar-button-bg, rgba(255, 255, 255, 0.18))
        );
        box-sizing: border-box;
        position: relative;
      }

      .sidebarMenu.sidebarMenu--wide li.sidebar-item-wide ha-icon.sidebar-icon {
        color: var(--sidebar-wide-icon-color, var(--sidebar-icon-color, #000));
        width: var(--sidebar-wide-icon-size, 22px);
        height: var(--sidebar-wide-icon-size, 22px);
        flex-shrink: 0;
      }

      .sidebarMenu.sidebarMenu--wide li.sidebar-item-wide .sidebar-label {
        font-size: var(--sidebar-wide-font-size, 14px);
        line-height: var(--sidebar-wide-line-height, 1.2);
        color: var(--sidebar-wide-text-color, #111111);
        font-weight: var(--sidebar-wide-font-weight, 500);
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }

      .sidebarMenu.sidebarMenu--wide li.sidebar-item-wide.active {
        position: relative;
        border: var(--sidebar-wide-active-border-width, 0px) solid
          var(--sidebar-wide-active-border-color, transparent);
        border-radius: var(--sidebar-wide-radius, 18px);
      }

      .sidebarMenu.sidebarMenu--wide li.sidebar-item-wide.active::before {
        content: "";
        position: absolute;
        inset: 0;
        border-radius: inherit;
        background-color: var(
          --sidebar-wide-active-bg,
          var(--sidebar-selected-bg, #111)
        );
        opacity: var(--sidebar-wide-active-opacity, 0.14);
        pointer-events: none;
      }

      .sidebarMenu.sidebarMenu--wide
        li.sidebar-item-wide.active
        ha-icon.sidebar-icon {
        color: var(
          --sidebar-wide-active-icon-color,
          var(--sidebar-selected-icon-color, rgb(247, 217, 89))
        );
        display: flex;
        align-items: center;
        justify-content: center;
        width: var(--sidebar-wide-active-icon-size, 26px) !important;
        height: var(--sidebar-wide-active-icon-size, 26px) !important;
        transform: none !important;
      }

      .sidebarMenu.sidebarMenu--wide
        li.sidebar-item-wide.active
        .sidebar-label {
        color: var(
          --sidebar-wide-active-text-color,
          var(--sidebar-wide-text-color, #111111)
        );
      }

      /* === STILE MENU "BUTTONS" === */

      .sidebarMenu.sidebarMenu--buttons {
        border-top: none;
        border-bottom: none;
        margin: var(--sidebar-button-margin-y, 16px) 0;
        padding: 0;
        display: flex;
        flex-direction: column;
        gap: var(--sidebar-button-gap, 8px);
        align-items: stretch;
      }

      .sidebarMenu.sidebarMenu--buttons li.sidebar-item-button {
        margin: 0;
        padding: 0;
        display: flex;
        align-items: center;
        gap: var(--sidebar-button-item-gap, 10px);
        cursor: pointer;
        box-sizing: border-box;
        position: relative;
        background: none;
        border-radius: 0;
      }

      .sidebarMenu.sidebarMenu--buttons
        li.sidebar-item-button:not(.sidebar-item-button--with-label) {
        width: var(--sidebar-button-size, 56px);
        height: var(--sidebar-button-size, 56px);
        justify-content: center;
        margin: 0 auto;
      }

      .sidebarMenu.sidebarMenu--buttons
        li.sidebar-item-button.sidebar-item-button--with-label {
        width: 100%;
        height: var(--sidebar-button-size, 56px);
        justify-content: flex-start;
        margin: 0;
      }

      .sidebarMenu.sidebarMenu--buttons
        li.sidebar-item-button
        .sidebar-icon-wrapper {
        width: var(--sidebar-button-box-size, 56px);
        height: var(--sidebar-button-box-size, 56px);
        border-radius: var(--sidebar-button-radius, 18px);
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: var(--sidebar-button-bg, rgba(255, 255, 255, 0.18));
        flex-shrink: 0;
      }

      .sidebarMenu.sidebarMenu--buttons
        li.sidebar-item-button
        ha-icon.sidebar-icon {
        color: var(
          --sidebar-button-icon-color,
          var(--sidebar-icon-color, #000)
        );
        width: var(--sidebar-button-icon-size, 28px);
        height: var(--sidebar-button-icon-size, 28px);
        line-height: 0;
        margin: 0;
        display: flex;
        align-items: center;
        justify-content: center;
      }

      .sidebarMenu.sidebarMenu--buttons li.sidebar-item-button .sidebar-label {
        font-size: var(--sidebar-button-font-size, 13px);
        line-height: var(--sidebar-button-line-height, 1.2);
        color: var(
          --sidebar-button-text-color,
          var(--primary-text-color, #000)
        );
        font-weight: var(--sidebar-button-font-weight, 500);
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }

      .sidebarMenu.sidebarMenu--buttons li.sidebar-item-button.active::before {
        content: none !important;
      }

      .sidebarMenu.sidebarMenu--buttons
        li.sidebar-item-button.active
        .sidebar-icon-wrapper {
        border: var(--sidebar-button-active-border-width, 3px) solid
          var(--sidebar-button-active-border-color, #ffffff);
        box-sizing: border-box;
        box-shadow: 0 0 8px
          var(--sidebar-button-active-shadow-color, rgba(0, 0, 0, 0.18));
      }

      .sidebarMenu.sidebarMenu--buttons
        li.sidebar-item-button.active
        ha-icon.sidebar-icon {
        color: var(
          --sidebar-button-active-icon-color,
          var(--sidebar-selected-icon-color, rgb(247, 217, 89))
        );
      }

      .sidebarMenu.sidebarMenu--buttons
        li.sidebar-item-button.active
        .sidebar-label {
        color: var(
          --sidebar-button-active-text-color,
          var(--sidebar-button-text-color, var(--primary-text-color, #000))
        );
      }

      /* === STILE MENU "GRID" === */

      .sidebarMenu.sidebarMenu--grid {
        border: none;
        margin: var(--sidebar-grid-margin-y, 14px) 0;
        padding: 0;
        display: grid;
        grid-template-columns: repeat(
          var(--sidebar-grid-columns, 3),
          minmax(0, 1fr)
        );
        grid-auto-rows: var(--sidebar-grid-row-height, 96px);
        gap: var(--sidebar-grid-gap, 12px);
        max-height: calc(
          var(--sidebar-grid-row-height, 96px) * var(--sidebar-grid-rows, 2)
        );
        overflow-y: auto;
      }

      .sidebarMenu.sidebarMenu--grid li.sidebar-item-grid {
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: flex-start;
        cursor: pointer;
        background: none;
        padding: var(--sidebar-grid-item-padding, 4px) 0 0;
        position: relative;
      }

      .sidebarMenu.sidebarMenu--grid
        li.sidebar-item-grid
        .sidebar-icon-wrapper {
        width: var(--sidebar-grid-box-size, 72px);
        height: var(--sidebar-grid-box-size, 72px);
        border-radius: var(--sidebar-grid-radius, 22px);
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: var(
          --sidebar-grid-bg,
          var(--sidebar-button-bg, rgba(255, 255, 255, 0.15))
        );
        flex-shrink: 0;
      }

      .sidebarMenu.sidebarMenu--grid li.sidebar-item-grid ha-icon.sidebar-icon {
        --mdc-icon-size: var(--sidebar-grid-icon-size, 40px);
        width: var(--sidebar-grid-icon-size, 40px);
        height: var(--sidebar-grid-icon-size, 40px);
        line-height: 0;
        margin: 0;
        display: flex;
        align-items: center;
        justify-content: center;
        color: var(--sidebar-grid-icon-color, var(--sidebar-icon-color, #000));
      }

      .sidebarMenu.sidebarMenu--grid li.sidebar-item-grid .sidebar-label {
        margin-top: var(--sidebar-grid-label-margin-top, 6px);
        font-size: var(--sidebar-grid-font-size, 11px);
        line-height: var(--sidebar-grid-line-height, 1.2);
        text-align: center;
        color: var(--sidebar-grid-text-color, var(--primary-text-color, #000));
        font-weight: var(--sidebar-grid-font-weight, 500);
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }

      .sidebarMenu.sidebarMenu--grid li.sidebar-item-grid.active::before {
        content: none !important;
      }

      .sidebarMenu.sidebarMenu--grid
        li.sidebar-item-grid.active
        .sidebar-icon-wrapper {
        box-shadow: 0 0 0 2px
          var(--sidebar-grid-active-border, rgba(255, 255, 255, 0.7));
        background-color: var(
          --sidebar-grid-active-bg,
          var(--sidebar-grid-bg, rgba(255, 255, 255, 0.25))
        );
      }

      .sidebarMenu.sidebarMenu--grid
        li.sidebar-item-grid.active
        ha-icon.sidebar-icon {
        color: var(
          --sidebar-grid-active-icon-color,
          var(--sidebar-selected-icon-color, rgb(247, 217, 89))
        );
      }

      .sidebarMenu.sidebarMenu--grid
        li.sidebar-item-grid.active
        .sidebar-label {
        color: var(
          --sidebar-grid-active-text-color,
          var(--sidebar-grid-text-color, var(--primary-text-color, #000))
        );
      }
    `}}),customElements.get("header-card")||customElements.define("header-card",class extends ee{constructor(){super(...arguments),this._builtOnce=!1,this._lastCardConfigKey=""}static get properties(){return{hass:{},config:{}}}setConfig(e){this.config=e}firstUpdated(){ie(this),this._applyHeight(),this._ensureAllCards(),this._builtOnce=!0}updated(e){e.has("config")&&(this._applyHeight(),this._ensureAllCards()),e.has("hass")&&this._builtOnce&&this._pushHassToBuiltCards()}_applyHeight(){var e;const t=Number(null===(e=this.config)||void 0===e?void 0:e.height);Number.isFinite(t)&&t>0?this.style.setProperty("--header-height",`${t}px`):this.style.removeProperty("--header-height")}_pushHassToBuiltCards(){var e;const t=this.renderRoot.querySelectorAll("#slotLeft > *, #slotCenter > *, #slotRight > *"),i=null!==(e=this.hass)&&void 0!==e?e:te();t.forEach(e=>{try{e.hass=i}catch(e){}})}async _buildCardInto(e,t){const i=Symbol("headerBuild");if(e.__headerBuildToken=i,e.innerHTML="",!t||"object"!=typeof t||!t.type)return;let n=String(t.type);n=n.startsWith("custom:")?n.substring(7):`hui-${n}-card`;const s=()=>{var s,r;if(e.__headerBuildToken!==i)return;const o=document.createElement(n);"function"==typeof o.setConfig&&(o.hass=null!==(s=this.hass)&&void 0!==s?s:te(),o.setConfig(t),o.hass=null!==(r=this.hass)&&void 0!==r?r:te(),e.appendChild(o),ie(o))};if(customElements.get(n))s();else try{await customElements.whenDefined(n),s()}catch(e){}}_ensureAllCards(){var e,t,i,n,s,r;const o=this.renderRoot,a=this.config||{},l=JSON.stringify({left:null!==(e=a.leftCard)&&void 0!==e?e:null,center:null!==(t=a.centerCard)&&void 0!==t?t:null,right:null!==(i=a.rightCard)&&void 0!==i?i:null});if(l===this._lastCardConfigKey&&this._builtOnce)return;this._lastCardConfigKey=l;const c=o.querySelector("#slotLeft"),d=o.querySelector("#slotCenter"),u=o.querySelector("#slotRight");c&&this._buildCardInto(c,null!==(n=a.leftCard)&&void 0!==n?n:null),d&&this._buildCardInto(d,null!==(s=a.centerCard)&&void 0!==s?s:null),u&&this._buildCardInto(u,null!==(r=a.rightCard)&&void 0!==r?r:null)}_runAction(e,t){var i,n;e&&(e.preventDefault(),e.stopPropagation());switch(null==t?void 0:t.action){case"navigate":(null==t?void 0:t.navigation_path)&&(ye(window,t.navigation_path),ge("success"));break;case"toggle":if(null==t?void 0:t.entity){const e=null!==(i=this.hass)&&void 0!==i?i:te();be(e,t.entity),ge("success")}break;case"more-info":(null==t?void 0:t.entity)&&(re(t.entity),ge("success"));break;case"call-service":{if(!(null==t?void 0:t.service))return void ge("failure");const[e,i]=String(t.service).split(".",2);(null!==(n=this.hass)&&void 0!==n?n:te()).callService(e,i,t.service_data),ge("success");break}case"service-js":if(null==t?void 0:t.service)try{const e=String(t.service).replace(/^\[\[\[\s*|\s*\]\]\]$/g,"");new Function(e).call(this),ge("success")}catch(e){ge("failure")}else ge("failure");break;case"toggle-sidebar":try{const e=window;e&&"function"==typeof e.silvioToggleHaSidebar?(e.silvioToggleHaSidebar(),ge("success")):ge("failure")}catch(e){ge("failure")}break;case"toggle-topmenu":try{const e=window;e&&"function"==typeof e.silvioFlipTopMenu&&e.silvioFlipTopMenu(),e&&"function"==typeof e.silvioToggleTopMenu?(e.silvioToggleTopMenu(),ge("success")):ge("failure")}catch(e){ge("failure")}}}_renderHeaderMenuItem(e,t){const i=(null==e?void 0:e.background_color)||"",n=(null==e?void 0:e.icon_color)||"",s=(null==e?void 0:e.text_color)||"";return R`
      <button
        class="header-item"
        style="${`\n      ${i?`--header-item-bg:${i};`:""}\n      ${n?`--header-item-icon-color:${n};`:""}\n      ${s?`--header-item-text-color:${s};`:""}\n    `}"
        title="${(null==e?void 0:e.name)||""}"
        aria-label="${(null==e?void 0:e.name)||""}"
        @click=${t=>this._runAction(t,e)}
      >
        ${(null==e?void 0:e.icon)?R`
              <ha-icon class="header-icon" icon="${e.icon}"></ha-icon>
            `:R``}
        ${t&&(null==e?void 0:e.name)?R`<span class="header-label">${e.name}</span>`:R``}
      </button>
    `}render(){const e=this.config||{},t="string"==typeof e.style&&e.style.trim().length>0,i="title"in e?e.title:"",n=Array.isArray(e.leftMenu)?e.leftMenu:[],s=Array.isArray(e.rightMenu)?e.rightMenu:[],r=Array.isArray(e.headerMenu)?e.headerMenu:[],o=e.headerMenuStyle||"wide",a=!1!==e.headerMenuShowLabel,l=e.headerMenuPosition||"right",c=r.length?R`
            <div class="headerMenuWrap">
              <div
                class="headerMenu
                ${"wide"===o?"headerMenu--wide":""}
                ${a?"with-label":"no-label"}"
              >
                ${r.map(e=>this._renderHeaderMenuItem(e,a))}
              </div>
            </div>
          `:R``;return R`
      ${t?R`
            <style>
              ${e.style}
            </style>
          `:R``}

      <div class="header-inner">
        <!-- LEFT AREA (sempre visibile) -->
        <div class="area area-left">
          ${n.length?R`
                <div class="iconMenu iconMenu-left">
                  ${n.map(e=>R`
                      <button
                        class="iconBtn"
                        title="${(null==e?void 0:e.name)||""}"
                        aria-label="${(null==e?void 0:e.name)||""}"
                        @click=${t=>this._runAction(t,e)}
                      >
                        ${(null==e?void 0:e.icon)?R`<ha-icon icon="${e.icon}"></ha-icon>`:R``}
                      </button>
                    `)}
                </div>
              `:R``}

          ${"left"===l?c:R``}

          <div class="header-card-slot header-slot-left">
            <div id="slotLeft"></div>
          </div>
        </div>

        <!-- CENTER CORRIDOR (scroll orizzontale, niente sovrapposizioni) -->
        <div class="area area-center">
          <div class="center-scroll">
            <div class="header-card-slot header-slot-center">
              <div id="slotCenter"></div>
            </div>

            ${"center"===l?c:R``}

            ${i?R`<div class="title">${i}</div>`:R``}
          </div>
        </div>

        <!-- RIGHT AREA (sempre visibile) -->
        <div class="area area-right">
          <div class="header-card-slot header-slot-right">
            <div id="slotRight"></div>
          </div>

          ${"right"===l?c:R``}

          ${s.length?R`
                <div class="iconMenu iconMenu-right">
                  ${s.map(e=>R`
                      <button
                        class="iconBtn"
                        title="${(null==e?void 0:e.name)||""}"
                        aria-label="${(null==e?void 0:e.name)||""}"
                        @click=${t=>this._runAction(t,e)}
                      >
                        ${(null==e?void 0:e.icon)?R`<ha-icon icon="${e.icon}"></ha-icon>`:R``}
                      </button>
                    `)}
                </div>
              `:R``}
        </div>
      </div>
    `}static get styles(){return X`
      :host {
        width: 100%;
        display: block;
        box-sizing: border-box;
        background: transparent;
        color: var(--header-text-color, var(--primary-text-color));
        /* lasciamo decidere all'altezza del contenuto;
           min-height gestita via --header-height in .header-inner */
      }

      .header-inner {
        width: 100%;
        display: flex;
        align-items: center;
        box-sizing: border-box;
        gap: clamp(6px, 1.2vw, 12px);
        min-width: 0;
        /* Altezza minima configurabile, ma può crescere se le card sono più alte */
        min-height: var(--header-height, 72px);
      }

      .area {
        display: flex;
        align-items: center;
        min-width: 0;
        gap: clamp(6px, 1.2vw, 12px);
      }

      .area-left,
      .area-right {
        flex: 0 0 auto; /* sempre visibili */
      }

      .area-center {
        flex: 1 1 auto; /* si adatta */
        min-width: 0;
      }

      .header-card-slot {
        display: flex;
        align-items: center;
        min-width: 0;
      }

      /* contenitori che ospitano le card */
      #slotLeft,
      #slotCenter,
      #slotRight {
        display: flex;
        align-items: center;
        min-width: 0;
      }

      /* CENTER: un solo corridoio scrollabile */
      .center-scroll {
        display: flex;
        align-items: center;
        gap: clamp(6px, 1.2vw, 12px);
        min-width: 0;
        flex: 1 1 auto;
        overflow-x: auto;
        overflow-y: hidden;
        -webkit-overflow-scrolling: touch;
        scrollbar-width: thin;
      }

      /* icon menu */
      .iconMenu {
        display: flex;
        align-items: center;
        gap: 8px;
        flex: 0 0 auto;
      }

      .iconBtn {
        width: clamp(34px, 3.2vw, 40px);
        height: clamp(34px, 3.2vw, 40px);
        border-radius: 999px;
        border: 0;
        cursor: pointer;
        background: transparent;
        color: inherit;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        flex: 0 0 auto;
      }

      .iconBtn:hover {
        background: rgba(255, 255, 255, 0.08);
      }

      /* HEADER MENU */
      .headerMenuWrap {
        display: flex;
        align-items: center;
        min-width: 0;
        flex: 0 0 auto;
      }

      .headerMenu {
        display: flex;
        align-items: center;
        gap: clamp(6px, 1.2vw, 10px);
        min-width: 0;
        flex: 0 0 auto;
      }

      .headerMenu.headerMenu--wide .header-item {
        height: clamp(38px, 3.8vw, 44px);
        padding: 0 clamp(10px, 1.6vw, 14px);
        border-radius: 999px;
        display: inline-flex;
        align-items: center;
        gap: 8px;
        border: 0;
        cursor: pointer;
        background: var(--header-item-bg, rgba(255, 255, 255, 0.14));
        color: var(--header-item-text-color, inherit);
        box-sizing: border-box;
        white-space: nowrap;
        flex: 0 0 auto;
      }

      .headerMenu.headerMenu--wide .header-icon {
        color: var(--header-item-icon-color, currentColor);
      }

      .headerMenu.no-label .header-label {
        display: none !important;
      }

      .header-item:hover {
        filter: brightness(1.02);
      }

      /* titolo opzionale (se lo userai in futuro) */
      .title {
        display: none;
      }
    `}}),customElements.get("sidebar-card-editor")||customElements.define("sidebar-card-editor",class extends ee{constructor(){super(...arguments),this.hass=null,this._open=!1,this._activeTab="sidebar",this._sidebarConfig={},this._headerConfig={},this._dirty=!1,this._saving=!1,this._saveError=null,this._expandedIndices={},this._yamlSidebarText="",this._yamlHeaderText="",this._yamlError=null,this._isYamlMode=!1,this._yamlOutput=null,this._copyDone=!1}static get properties(){return{hass:{type:Object},_open:{type:Boolean},_activeTab:{type:String},_sidebarConfig:{type:Object},_headerConfig:{type:Object},_dirty:{type:Boolean},_saving:{type:Boolean},_saveError:{type:String},_expandedIndices:{type:Object},_yamlSidebarText:{type:String},_yamlHeaderText:{type:String},_yamlError:{type:String},_isYamlMode:{type:Boolean},_yamlOutput:{type:String},_copyDone:{type:Boolean}}}open(e,t,i){this._sidebarConfig=JSON.parse(JSON.stringify(e||{})),this._headerConfig=JSON.parse(JSON.stringify(t||{})),this.hass=i,this._dirty=!1,this._saving=!1,this._saveError=null,this._expandedIndices={},this._yamlSidebarText=ss(this._sidebarConfig),this._yamlHeaderText=ss(this._headerConfig),this._yamlError=null,this._yamlOutput=null,this._copyDone=!1;const n=window.__sidebarCardLovelace;this._isYamlMode="yaml"===(null==n?void 0:n.mode),this._open=!0}close(){this._open=!1}async _save(){var e,t;if("yaml"===this._activeTab)try{this._sidebarConfig=null!==(e=rs(this._yamlSidebarText))&&void 0!==e?e:{},this._headerConfig=null!==(t=rs(this._yamlHeaderText))&&void 0!==t?t:{},this._yamlError=null}catch(e){return void(this._yamlError=this._t("yaml_invalid")+e.message)}if(this._isYamlMode)this._yamlOutput=this._buildYamlOutput();else{this._saving=!0,this._saveError=null;try{await async function(e,t,i){var n,s;const r=null!==(n=window.__sidebarCardLovelace)&&void 0!==n?n:Me();if(!r||!r.config)throw new Error("sidebar-card: impossibile leggere la configurazione Lovelace corrente");if("yaml"===r.mode)throw new Error("La configurazione Lovelace è in modalità YAML (ui-lovelace.yaml). Il salvataggio automatico non è supportato: modifica il file manualmente.");const o=JSON.parse(JSON.stringify(r.config)),a={};for(const e of Object.keys(o))"sidebar"!==e&&"header"!==e&&"views"!==e&&(a[e]=o[e]);const l=void 0!==t?t:o.sidebar;l&&Object.keys(l).length>0&&(a.sidebar=l);const c=void 0!==i?i:o.header;c&&Object.keys(c).length>0&&(a.header=c),void 0!==o.views&&(a.views=o.views),await e.callWS({type:"lovelace/config/save",url_path:null!==(s=r.urlPath)&&void 0!==s?s:null,config:a})}(this.hass,this._sidebarConfig,this._headerConfig),this._dirty=!1,this.close(),window.location.reload()}catch(e){console.error("sidebar-card-editor: save failed",e),this._saveError=this._t("save_error")+(e.message||String(e))}finally{this._saving=!1}}}_buildYamlOutput(){const e=(t,i)=>{if(null==t)return"null";if("boolean"==typeof t)return t?"true":"false";if("number"==typeof t)return String(t);if("string"==typeof t)return/[:{}\[\],&*#?|<>=!%@`\n\r]/.test(t)||t.trim()!==t||""===t?JSON.stringify(t):t;if(Array.isArray(t)){if(0===t.length)return"[]";const n=" ".repeat(i);return t.map(t=>{if("object"==typeof t&&null!==t&&!Array.isArray(t)){const s=Object.keys(t);if(0===s.length)return`${n}- {}`;const[r,...o]=s;let a=`${n}- ${r}: ${e(t[r],i+2)}`;for(const s of o)a+=`\n${n}  ${s}: ${e(t[s],i+2)}`;return a}return`${n}- ${e(t,i+2)}`}).join("\n")}if("object"==typeof t){const n=Object.keys(t);if(0===n.length)return"{}";const s=" ".repeat(i);return n.map(n=>{const r=t[n];return"object"==typeof r&&null!==r&&Object.keys(r).length>0||Array.isArray(r)&&r.length>0?`${s}${n}:\n${e(r,i+2)}`:`${s}${n}: ${e(r,i+2)}`}).join("\n")}return String(t)};let t="";return Object.keys(this._sidebarConfig).length>0&&(t+="sidebar:\n"+e(this._sidebarConfig,2)+"\n"),Object.keys(this._headerConfig).length>0&&(t&&(t+="\n"),t+="header:\n"+e(this._headerConfig,2)+"\n"),t||this._t("no_config")}async _copyYamlOutput(){var e;if(this._yamlOutput){try{await navigator.clipboard.writeText(this._yamlOutput)}catch(t){const i=null===(e=this.shadowRoot)||void 0===e?void 0:e.querySelector(".yaml-copy-ta");i&&(i.select(),document.execCommand("copy"))}this._copyDone=!0,setTimeout(()=>{this._copyDone=!1},2500)}}_t(e){var t,i,n,s,r;const o=(null!==(i=null===(t=this.hass)||void 0===t?void 0:t.language)&&void 0!==i?i:"it").split("-")[0];return null!==(r=null!==(s=(null!==(n=ds[o])&&void 0!==n?n:ds.en)[e])&&void 0!==s?s:ds.en[e])&&void 0!==r?r:e}_setSidebar(e,t){this._sidebarConfig=Object.assign(Object.assign({},this._sidebarConfig),{[e]:t}),this._dirty=!0}_deleteSidebar(e){const t=Object.assign({},this._sidebarConfig);delete t[e],this._sidebarConfig=t,this._dirty=!0}_setHeader(e,t){this._headerConfig=Object.assign(Object.assign({},this._headerConfig),{[e]:t}),this._dirty=!0}_deleteHeader(e){const t=Object.assign({},this._headerConfig);delete t[e],this._headerConfig=t,this._dirty=!0}_getExpandedIdx(e){var t;return null!==(t=this._expandedIndices[e])&&void 0!==t?t:-1}_setExpandedIdx(e,t){this._expandedIndices=Object.assign(Object.assign({},this._expandedIndices),{[e]:t})}_getMenuItems(e){return[...(us(e)?this._headerConfig:this._sidebarConfig)[e]||[]]}_saveMenuItems(e,t){us(e)?this._headerConfig=Object.assign(Object.assign({},this._headerConfig),{[e]:t}):this._sidebarConfig=Object.assign(Object.assign({},this._sidebarConfig),{[e]:t}),this._dirty=!0}_setMenuItemField(e,t,i,n){const s=this._getMenuItems(e);s[t]=Object.assign(Object.assign({},s[t]),{[i]:n}),this._saveMenuItems(e,s)}_addMenuItem(e){const t=this._getMenuItems(e);t.push({action:"navigate",name:this._t("new_item"),icon:"mdi:home",navigation_path:"/lovelace/0"}),this._saveMenuItems(e,t),this._setExpandedIdx(e,t.length-1)}_removeMenuItem(e,t){const i=this._getMenuItems(e);i.splice(t,1),this._saveMenuItems(e,i),this._setExpandedIdx(e,-1)}_moveMenuItem(e,t,i){const n=this._getMenuItems(e),s=t+i;if(s<0||s>=n.length)return;const r=n[t];n[t]=n[s],n[s]=r,this._saveMenuItems(e,n),this._setExpandedIdx(e,s)}render(){return this._open?R`
      <div class="overlay" @click="${this._onOverlayClick}">
        <div class="dialog" @click="${e=>e.stopPropagation()}">
          <!-- Header -->
          <div class="dialog-header">
            <ha-icon-button
              .label="${this._t("close")}"
              @click="${this.close}"
            >
              <ha-icon icon="mdi:close"></ha-icon>
            </ha-icon-button>
            <span class="dialog-title">Sidebar Card Settings</span>
            <button
              class="save-btn ${this._dirty?"dirty":""}"
              @click="${this._save}"
              ?disabled="${this._saving||!this._dirty}"
            >
              ${this._isYamlMode?this._t("generate_config"):this._saving?this._t("saving"):this._t("save")}
            </button>
          </div>

          ${this._saveError?R`<div class="error-banner">${this._saveError}</div>`:""}

          ${null!==this._yamlOutput?R`
                <div class="yaml-output-panel">
                  <div class="yaml-output-header">
                    <span>${this._t("paste_yaml_hint")}</span>
                    <button
                      class="copy-btn ${this._copyDone?"copied":""}"
                      @click="${this._copyYamlOutput}"
                    >
                      <ha-icon icon="${this._copyDone?"mdi:check":"mdi:content-copy"}"></ha-icon>
                      ${this._copyDone?this._t("copied"):this._t("copy")}
                    </button>
                  </div>
                  <textarea
                    class="yaml-editor yaml-copy-ta"
                    readonly
                    .value="${this._yamlOutput}"
                  ></textarea>
                  <div class="yaml-output-hint">
                    ${this._t("yaml_replace_hint")}
                  </div>
                </div>
              `:""}

          <!-- Tabs -->
          <div class="tabs">
            ${["sidebar","header","yaml"].map(e=>R`
                <button
                  class="tab ${this._activeTab===e?"active":""}"
                  @click="${()=>{this._activeTab=e,"yaml"===e&&(this._yamlSidebarText=ss(this._sidebarConfig),this._yamlHeaderText=ss(this._headerConfig),this._yamlError=null)}}"
                >
                  ${"sidebar"===e?"Sidebar":"header"===e?"Header":"YAML"}
                </button>
              `)}
          </div>

          <!-- Tab Content -->
          <div class="tab-content">
            ${"sidebar"===this._activeTab?this._renderSidebarTab():"header"===this._activeTab?this._renderHeaderTab():this._renderYamlTab()}
          </div>
        </div>
      </div>
    `:R``}_onOverlayClick(){this._dirty?confirm(this._t("unsaved_confirm"))&&this.close():this.close()}_renderSidebarTab(){var e,t,i;const n=this._sidebarConfig;return R`
      <!-- Sezione: Generale -->
      <details open>
        <summary>${this._t("general")}</summary>
        <div class="section">
          ${this._renderToggle(this._t("enabled"),!1!==n.enabled,e=>this._setSidebar("enabled",e))}
          ${this._renderText(this._t("title"),n.title||"",e=>this._setSidebar("title",e))}
          ${this._renderWidthField(n)}
        </div>
      </details>

      <!-- Sezione: Orologio & Data -->
      <details>
        <summary>${this._t("clock_date")}</summary>
        <div class="section">
          ${this._renderToggle(this._t("analog_clock"),!!n.clock,e=>this._setSidebar("clock",e))}
          ${this._renderToggle(this._t("digital_clock"),!!n.digitalClock,e=>this._setSidebar("digitalClock",e))}
          ${n.digitalClock?this._renderToggle(this._t("with_seconds"),!!n.digitalClockWithSeconds,e=>this._setSidebar("digitalClockWithSeconds",e)):""}
          ${this._renderToggle(this._t("twelve_hour"),!!n.twelveHourVersion,e=>this._setSidebar("twelveHourVersion",e))}
          ${n.twelveHourVersion?this._renderToggle(this._t("show_ampm"),!!n.period,e=>this._setSidebar("period",e)):""}
          ${this._renderToggle(this._t("show_date"),!1!==n.date,e=>this._setSidebar("date",e))}
          ${!1!==n.date?this._renderText(this._t("date_format"),n.dateFormat||"DD MMMM",e=>this._setSidebar("dateFormat",e)):""}
        </div>
      </details>

      <!-- Sezione: Layout -->
      <details>
        <summary>${this._t("layout")}</summary>
        <div class="section">
          ${this._renderToggle(this._t("hide_ha_sidebar"),!!n.hideHassSidebar,e=>this._setSidebar("hideHassSidebar",e))}
          ${this._renderToggle(this._t("hide_top_menu"),!!n.hideTopMenu,e=>this._setSidebar("hideTopMenu",e))}
          ${n.hideTopMenu?this._renderToggle(this._t("show_top_menu_mobile"),!1!==n.showTopMenuOnMobile,e=>this._setSidebar("showTopMenuOnMobile",e)):""}
          ${this._renderSelect(this._t("menu_style"),n.menuStyle||"list",as,e=>this._setSidebar("menuStyle",e))}
          ${this._renderToggle(this._t("show_labels"),!1!==n.showLabel,e=>this._setSidebar("showLabel",e))}
          ${this._renderToggle(this._t("update_active_menu"),!1!==n.updateMenu,e=>this._setSidebar("updateMenu",e))}
        </div>
      </details>

      <!-- Sezione: Menu Items -->
      <details>
        <summary>${this._t("menu_items")} (${(n.sidebarMenu||[]).length})</summary>
        <div class="section">
          ${this._renderMenuItems(n.sidebarMenu||[],"sidebarMenu")}
          <button class="add-btn" @click="${()=>this._addMenuItem("sidebarMenu")}">
            <ha-icon icon="mdi:plus"></ha-icon> ${this._t("add_item")}
          </button>
        </div>
      </details>

      <!-- Sezione: Card in fondo alla sidebar -->
      <details>
        <summary>
          ${this._t("bottom_card")}
          ${n.bottomCard?R`<span class="slot-badge">${n.bottomCard.type||"?"}</span>`:""}
        </summary>
        <div class="section">
          ${this._renderSelect("Theme","",Object.keys(null!==(t=null===(e=this.hass)||void 0===e?void 0:e.themes.themes)&&void 0!==t?t:{}).map(e=>({value:e,label:e})),e=>{this._setSidebar("bottomCardTheme",e)})}
          ${this._renderCardSlot(null!==(i=n.bottomCard)&&void 0!==i?i:null,e=>e?this._setSidebar("bottomCard",e):this._deleteSidebar("bottomCard"),"vertical-stack")}
        </div>
      </details>

      <!-- Sezione: CSS personalizzato -->
      <details>
        <summary>${this._t("custom_css")}</summary>
        <div class="section">
          <div class="css-hint">${this._t("css_sidebar_hint")}</div>
          <textarea
            class="yaml-editor css-editor"
            .value="${n.style||""}"
            @input="${e=>{const t=e.target.value;t.trim()?this._setSidebar("style",t):this._deleteSidebar("style")}}"
            spellcheck="false"
            placeholder="/* es: .sidebar-inner { background: #1a1a2e; } */"
          ></textarea>
        </div>
      </details>
    `}_renderHeaderTab(){var e,t,i;const n=this._headerConfig;return R`
      <!-- Sezione: Generale -->
      <details open>
        <summary>${this._t("general")}</summary>
        <div class="section">
          ${this._renderToggle(this._t("enabled"),!1!==n.enabled,e=>this._setHeader("enabled",e))}
          ${this._renderToggle(this._t("sticky"),!1!==n.sticky,e=>this._setHeader("sticky",e))}
          ${this._renderNumber(this._t("min_height"),n.height||72,e=>this._setHeader("height",e))}
          ${this._renderText(this._t("title"),n.title||"",e=>this._setHeader("title",e))}
        </div>
      </details>

      <!-- Sezione: Top Menu Mode -->
      <details>
        <summary>${this._t("top_menu_mode")}</summary>
        <div class="section">
          ${this._renderSelect(this._t("mode"),n.topMenuMode||"overlay",ls,e=>this._setHeader("topMenuMode",e))}
          ${"flip"===n.topMenuMode?this._renderNumber(this._t("flip_duration"),n.flipDuration||5,e=>this._setHeader("flipDuration",e)):""}
        </div>
      </details>

      <!-- Sezione: Card Slot Sinistra -->
      <details>
        <summary>
          ${this._t("left_card")}
          ${n.leftCard?R`<span class="slot-badge">${n.leftCard.type||"?"}</span>`:""}
        </summary>
        <div class="section">
          ${this._renderCardSlot(null!==(e=n.leftCard)&&void 0!==e?e:null,e=>e?this._setHeader("leftCard",e):this._deleteHeader("leftCard"),"horizontal-stack")}
        </div>
      </details>

      <!-- Sezione: Card Slot Centro -->
      <details>
        <summary>
          ${this._t("center_card")}
          ${n.centerCard?R`<span class="slot-badge">${n.centerCard.type||"?"}</span>`:""}
        </summary>
        <div class="section">
          ${this._renderCardSlot(null!==(t=n.centerCard)&&void 0!==t?t:null,e=>e?this._setHeader("centerCard",e):this._deleteHeader("centerCard"),"horizontal-stack")}
        </div>
      </details>

      <!-- Sezione: Card Slot Destra -->
      <details>
        <summary>
          ${this._t("right_card")}
          ${n.rightCard?R`<span class="slot-badge">${n.rightCard.type||"?"}</span>`:""}
        </summary>
        <div class="section">
          ${this._renderCardSlot(null!==(i=n.rightCard)&&void 0!==i?i:null,e=>e?this._setHeader("rightCard",e):this._deleteHeader("rightCard"),"horizontal-stack")}
        </div>
      </details>

      <!-- Sezione: Menu Header Centrale -->
      <details>
        <summary>${this._t("header_menu")} (${(n.headerMenu||[]).length} ${this._t("items_count")})</summary>
        <div class="section">
          ${this._renderSelect(this._t("menu_style"),n.headerMenuStyle||"wide",as,e=>this._setHeader("headerMenuStyle",e))}
          ${this._renderToggle(this._t("show_labels"),!1!==n.headerMenuShowLabel,e=>this._setHeader("headerMenuShowLabel",e))}
          ${this._renderSelect(this._t("position"),n.headerMenuPosition||"right",cs,e=>this._setHeader("headerMenuPosition",e))}
          <div class="menu-subsection-label">${this._t("items_label")}</div>
          ${this._renderMenuItems(n.headerMenu||[],"headerMenu")}
          <button class="add-btn" @click="${()=>this._addMenuItem("headerMenu")}">
            <ha-icon icon="mdi:plus"></ha-icon> ${this._t("add_item")}
          </button>
        </div>
      </details>

      <!-- Sezione: Menu icone a sinistra -->
      <details>
        <summary>${this._t("left_menu_title")} – ${(n.leftMenu||[]).length} ${this._t("items_count")})</summary>
        <div class="section">
          <div class="css-hint">${this._t("left_menu_hint")}</div>
          ${this._renderMenuItems(n.leftMenu||[],"leftMenu")}
          <button class="add-btn" @click="${()=>this._addMenuItem("leftMenu")}">
            <ha-icon icon="mdi:plus"></ha-icon> ${this._t("add_icon")}
          </button>
        </div>
      </details>

      <!-- Sezione: Menu icone a destra -->
      <details>
        <summary>${this._t("right_menu_title")} – ${(n.rightMenu||[]).length} ${this._t("items_count")})</summary>
        <div class="section">
          <div class="css-hint">${this._t("right_menu_hint")}</div>
          ${this._renderMenuItems(n.rightMenu||[],"rightMenu")}
          <button class="add-btn" @click="${()=>this._addMenuItem("rightMenu")}">
            <ha-icon icon="mdi:plus"></ha-icon> ${this._t("add_icon")}
          </button>
        </div>
      </details>

      <!-- Sezione: CSS personalizzato -->
      <details>
        <summary>${this._t("custom_css")}</summary>
        <div class="section">
          <div class="css-hint">${this._t("css_header_hint")}</div>
          <textarea
            class="yaml-editor css-editor"
            .value="${n.style||""}"
            @input="${e=>{const t=e.target.value;t.trim()?this._setHeader("style",t):this._deleteHeader("style")}}"
            spellcheck="false"
            placeholder="/* es: .header-inner { background: linear-gradient(...); } */"
          ></textarea>
        </div>
      </details>
    `}_renderYamlTab(){return R`
      ${this._yamlError?R`<div class="error-banner">${this._yamlError}</div>`:""}

      <details open>
        <summary>Sidebar (YAML)</summary>
        <div class="section">
          <textarea
            class="yaml-editor"
            .value="${this._yamlSidebarText}"
            @input="${e=>{this._yamlSidebarText=e.target.value,this._dirty=!0,this._yamlError=null}}"
            spellcheck="false"
          ></textarea>
        </div>
      </details>

      <details open>
        <summary>Header (YAML)</summary>
        <div class="section">
          <textarea
            class="yaml-editor"
            .value="${this._yamlHeaderText}"
            @input="${e=>{this._yamlHeaderText=e.target.value,this._dirty=!0,this._yamlError=null}}"
            spellcheck="false"
          ></textarea>
        </div>
      </details>
    `}_renderCardSlot(e,t,i){var n;const s=null==e?void 0:e.type,r="horizontal-stack"===s||"vertical-stack"===s,o=r?s:null!=i?i:"horizontal-stack";if(r||!!i&&!e){const i=null!==(n=null==e?void 0:e.cards)&&void 0!==n?n:[],s=()=>{const e=[...i,{type:"custom:button-card",show_name:!1,show_icon:!0}];t({type:o,cards:e})},r=e=>{const n=i.filter((t,i)=>i!==e);t({type:o,cards:n})},a=(e,n)=>{const s=[...i],r=e+n;r<0||r>=s.length||([s[e],s[r]]=[s[r],s[e]],t({type:o,cards:s}))},l=(e,n)=>{try{const s=rs(n);if(!s||"object"!=typeof s)return;const r=[...i];r[e]=s,t({type:o,cards:r})}catch(e){}};return R`
        <div class="card-slot">

          <!-- ── Intestazione slot ── -->
          <div class="stack-slot-header">
            <ha-icon icon="mdi:layers-outline" class="stack-slot-icon"></ha-icon>
            <div class="stack-slot-info">
              <span class="stack-type-badge">${o}</span>
              <span class="stack-card-count">${i.length} card</span>
            </div>
            ${e?R`
                  <button class="stack-remove-slot-btn" @click="${()=>t(null)}">
                    <ha-icon icon="mdi:trash-can-outline"></ha-icon>
                    ${this._t("remove_slot")}
                  </button>
                `:""}
          </div>

          <!-- ── Stato vuoto ── -->
          ${0===i.length?R`
            <div class="stack-empty-state">
              <ha-icon icon="mdi:card-plus-outline"></ha-icon>
              <span>${this._t("stack_empty")}</span>
            </div>
          `:""}

          <!-- ── Card collassabili ── -->
          ${i.map((e,t)=>R`
            <details class="stack-card-details">
              <summary class="stack-card-summary" @click="${e=>e.stopPropagation()}">

                <!-- Numero circolare -->
                <span class="stack-card-num">${t+1}</span>

                <!-- Tipo card -->
                <span class="stack-card-type-label">${e.type||"(tipo mancante)"}</span>

                <!-- Frecce riordina -->
                <div class="stack-card-move" @click="${e=>e.stopPropagation()}">
                  <button
                    class="stack-move-btn"
                    @click="${e=>{e.preventDefault(),a(t,-1)}}"
                    ?disabled="${0===t}"
                    title="${this._t("move_up")}"
                  >▲</button>
                  <button
                    class="stack-move-btn"
                    @click="${e=>{e.preventDefault(),a(t,1)}}"
                    ?disabled="${t===i.length-1}"
                    title="${this._t("move_down")}"
                  >▼</button>
                </div>

                <!-- Elimina -->
                <button
                  class="stack-delete-btn"
                  @click="${e=>{e.preventDefault(),r(t)}}"
                  title="${this._t("delete_card")}"
                >
                  <ha-icon icon="mdi:delete"></ha-icon>
                  ${this._t("delete")}
                </button>

                <!-- Chevron expand -->
                <ha-icon class="stack-chevron" icon="mdi:chevron-down"></ha-icon>
              </summary>

              <!-- Corpo: editor YAML -->
              <div class="stack-card-body">
                <div class="stack-card-body-hint">
                  ${this._t("card_yaml_hint")}
                </div>
                <textarea
                  class="stack-card-editor"
                  .value="${ss(e)}"
                  @change="${e=>l(t,e.target.value)}"
                  spellcheck="false"
                ></textarea>
              </div>
            </details>
          `)}

          <!-- ── Aggiungi card ── -->
          <button class="stack-add-btn" @click="${s}">
            <ha-icon icon="mdi:plus"></ha-icon>
            ${this._t("add_card")}
          </button>

        </div>
      `}const a=e&&"object"==typeof e&&e.type,l=a?ss(e):"type: custom:my-card\n";return R`
      <div class="card-slot">
        ${a?R`
              <div class="card-slot-active">
                <div class="card-slot-type-row">
                  <ha-icon icon="mdi:card-outline" class="card-slot-icon"></ha-icon>
                  <span class="card-slot-type">${e.type}</span>
                  <button
                    class="small-btn danger-btn"
                    @click="${()=>t(null)}"
                    title="${this._t("remove_card")}"
                  >
                    <ha-icon icon="mdi:delete"></ha-icon> ${this._t("remove")}
                  </button>
                </div>
                <textarea
                  class="yaml-editor card-json-editor"
                  .value="${l}"
                  @change="${e=>{try{const i=rs(e.target.value);i&&"object"==typeof i&&t(i)}catch(e){}}}"
                  spellcheck="false"
                  rows="6"
                ></textarea>
                <div class="card-slot-hint">${this._t("edit_yaml_hint")}</div>
              </div>
            `:R`
              <div class="card-slot-empty">
                <ha-icon icon="mdi:card-plus-outline" class="card-slot-empty-icon"></ha-icon>
                <span>${this._t("no_card")}</span>
                <button
                  class="small-btn"
                  @click="${()=>t({type:null!=i?i:"custom:my-card"})}"
                >
                  <ha-icon icon="mdi:plus"></ha-icon> ${this._t("add_card")}
                </button>
              </div>
            `}
      </div>
    `}_renderMenuItems(e,t){const i=this._getExpandedIdx(t);return R`
      <div class="menu-items-list">
        ${e.map((n,s)=>{const r=i===s;return R`
            <div class="menu-item-row ${r?"expanded":""}">
              <!-- Header row -->
              <div class="menu-item-header" @click="${()=>{this._setExpandedIdx(t,r?-1:s)}}">
                <div class="menu-item-arrows">
                  <ha-icon-button
                    .label="${this._t("up")}"
                    @click="${e=>{e.stopPropagation(),this._moveMenuItem(t,s,-1)}}"
                    ?disabled="${0===s}"
                  >
                    <ha-icon icon="mdi:arrow-up"></ha-icon>
                  </ha-icon-button>
                  <ha-icon-button
                    .label="${this._t("down")}"
                    @click="${e=>{e.stopPropagation(),this._moveMenuItem(t,s,1)}}"
                    ?disabled="${s===e.length-1}"
                  >
                    <ha-icon icon="mdi:arrow-down"></ha-icon>
                  </ha-icon-button>
                </div>
                <ha-icon
                  class="menu-item-icon"
                  icon="${n.icon||"mdi:help-circle"}"
                ></ha-icon>
                <span class="menu-item-name">${n.name||this._t("unnamed")}</span>
                <span class="menu-item-action-badge">${n.action||"navigate"}</span>
                <ha-icon-button
                  .label="${this._t("delete")}"
                  class="delete-btn"
                  @click="${e=>{e.stopPropagation(),this._removeMenuItem(t,s)}}"
                >
                  <ha-icon icon="mdi:delete"></ha-icon>
                </ha-icon-button>
                <ha-icon
                  class="expand-chevron"
                  icon="${r?"mdi:chevron-up":"mdi:chevron-down"}"
                ></ha-icon>
              </div>

              <!-- Expanded detail -->
              ${r?this._renderMenuItemDetail(n,s,t):""}
            </div>
          `})}
      </div>
    `}_renderMenuItemDetail(e,t,i){const n=e.action||"navigate",s=(e,n)=>this._setMenuItemField(i,t,e,n);return R`
      <div class="menu-item-detail">
        ${this._renderText(this._t("name"),e.name||"",e=>s("name",e))}

        <div class="field-row">
          <label>${this._t("icon")}</label>
          <div class="icon-picker-row">
            <ha-icon icon="${e.icon||"mdi:home"}"></ha-icon>
            <input
              type="text"
              .value="${e.icon||""}"
              placeholder="mdi:home"
              @change="${e=>s("icon",e.target.value)}"
            />
          </div>
        </div>

        ${this._renderSelect(this._t("action"),n,os,e=>s("action",e))}

        ${"navigate"===n?this._renderText(this._t("path"),e.navigation_path||"",e=>s("navigation_path",e)):""}

        ${"toggle"===n||"more-info"===n?this._renderText(this._t("entity"),e.entity||"",e=>s("entity",e)):""}

        ${"call-service"===n?R`
              ${this._renderText(this._t("service"),e.service||"",e=>s("service",e))}
              <div class="field-row">
                <label>Service Data (YAML)</label>
                <textarea
                  class="service-data-editor"
                  .value="${ss(e.service_data||{})}"
                  @change="${e=>{try{const t=rs(e.target.value);null!=t&&s("service_data",t)}catch(e){}}}"
                  spellcheck="false"
                ></textarea>
              </div>
            `:""}

        ${"service-js"===n?R`
              <div class="field-row">
                <label>${this._t("js_code")}</label>
                <textarea
                  class="service-data-editor"
                  .value="${e.service||""}"
                  placeholder="// es: navigate(window, '/lovelace/0')"
                  @change="${e=>s("service",e.target.value)}"
                  spellcheck="false"
                ></textarea>
              </div>
            `:""}

        ${"url"===n?this._renderText("URL",e.url_path||"",e=>s("url_path",e)):""}

        <!-- Colori -->
        <details class="color-section">
          <summary>${this._t("colors_optional")}</summary>
          <div class="color-fields">
            ${this._renderColor(this._t("background"),e.background_color||"",e=>s("background_color",e||void 0))}
            ${this._renderColor(this._t("icon"),e.icon_color||"",e=>s("icon_color",e||void 0))}
            ${this._renderColor(this._t("text_color"),e.text_color||"",e=>s("text_color",e||void 0))}
          </div>
        </details>

        <!-- Stato & Condizionale (avanzato) -->
        <details class="advanced-section">
          <summary>${this._t("advanced")}</summary>
          <div class="section">
            ${this._renderText("State entity",e.state||"",e=>s("state",e))}
            ${this._renderText(this._t("condition"),e.conditional||"",e=>s("conditional",e))}
          </div>
        </details>
      </div>
    `}_renderToggle(e,t,i){return R`
      <div class="field-row">
        <label>${e}</label>
        <ha-switch
          .checked="${t}"
          @change="${e=>i(e.target.checked)}"
        ></ha-switch>
      </div>
    `}_renderText(e,t,i){return R`
      <div class="field-row">
        <label>${e}</label>
        <input
          type="text"
          .value="${t}"
          @change="${e=>i(e.target.value)}"
        />
      </div>
    `}_renderNumber(e,t,i){return R`
      <div class="field-row">
        <label>${e}</label>
        <input
          type="number"
          .value="${String(t)}"
          @change="${e=>i(Number(e.target.value))}"
        />
      </div>
    `}_renderSelect(e,t,i,n){return R`
      <div class="field-row">
        <label>${e}</label>
        <select
          .value="${t}"
          @change="${e=>n(e.target.value)}"
        >
          ${i.map(e=>R`<option value="${e.value}" ?selected="${e.value===t}">${e.label}</option>`)}
        </select>
      </div>
    `}_renderColor(e,t,i){return R`
      <div class="color-field">
        <label>${e}</label>
        <div class="color-input-wrap">
          <input
            type="color"
            .value="${t||"#000000"}"
            @input="${e=>i(e.target.value)}"
          />
          <input
            type="text"
            class="color-text"
            .value="${t}"
            placeholder="${this._t("none")}"
            @change="${e=>i(e.target.value)}"
          />
          ${t?R`<button class="color-clear" @click="${()=>i("")}" title="${this._t("remove_title")}">✕</button>`:""}
        </div>
      </div>
    `}_renderWidthField(e){var t,i,n;const s=e.width,r="object"==typeof s&&null!==s;return R`
      <div class="field-row">
        <label>${this._t("width_pct")}</label>
        <div class="width-control">
          ${r?R`
                <div class="width-responsive">
                  <div class="width-responsive-row">
                    <span>Mobile:</span>
                    <input type="number" .value="${String(null!==(t=s.mobile)&&void 0!==t?t:0)}"
                      @change="${e=>{const t=Number(e.target.value);this._setSidebar("width",Object.assign(Object.assign({},s),{mobile:t}))}}" />
                  </div>
                  <div class="width-responsive-row">
                    <span>Tablet:</span>
                    <input type="number" .value="${String(null!==(i=s.tablet)&&void 0!==i?i:16)}"
                      @change="${e=>{const t=Number(e.target.value);this._setSidebar("width",Object.assign(Object.assign({},s),{tablet:t}))}}" />
                  </div>
                  <div class="width-responsive-row">
                    <span>Desktop:</span>
                    <input type="number" .value="${String(null!==(n=s.desktop)&&void 0!==n?n:18)}"
                      @change="${e=>{const t=Number(e.target.value);this._setSidebar("width",Object.assign(Object.assign({},s),{desktop:t}))}}" />
                  </div>
                  <button class="small-btn" @click="${()=>{var e;return this._setSidebar("width",null!==(e=s.desktop)&&void 0!==e?e:18)}}">
                    ${this._t("use_fixed")}
                  </button>
                </div>
              `:R`
                <input type="number" .value="${String(null!=s?s:18)}"
                  @change="${e=>this._setSidebar("width",Number(e.target.value))}" />
                <button class="small-btn" @click="${()=>this._setSidebar("width",{mobile:0,tablet:null!=s?s:16,desktop:null!=s?s:18})}">
                  ${this._t("responsive")}
                </button>
              `}
        </div>
      </div>
    `}static get styles(){return X`
      /* ══ Variabili tema ══════════════════════════════════════════ */
      :host {
        --editor-bg:       var(--card-background-color, #ffffff);
        --editor-page-bg:  var(--secondary-background-color, #f0f4f8);
        --editor-text:     var(--primary-text-color, #1a202c);
        --editor-secondary:var(--secondary-text-color, #64748b);
        --editor-primary:  var(--primary-color, #0288d1);
        --editor-divider:  var(--divider-color, rgba(0,0,0,0.09));
        --editor-surface:  var(--ha-card-background, var(--card-background-color, #fff));
        --editor-error:    var(--error-color, #e53e3e);
        --editor-success:  #38a169;
        --editor-shadow:   0 2px 10px rgba(0,0,0,0.10), 0 1px 3px rgba(0,0,0,0.06);
        --editor-radius:   12px;
      }

      /* ══ Overlay ═════════════════════════════════════════════════ */
      .overlay {
        position: fixed;
        inset: 0;
        z-index: 9999;
        background: rgba(0,0,0,0.55);
        backdrop-filter: blur(4px);
        display: flex;
        align-items: center;
        justify-content: center;
        font-family: var(--paper-font-body1_-_font-family, "Roboto", sans-serif);
      }

      /* ══ Dialog ══════════════════════════════════════════════════ */
      .dialog {
        background: var(--editor-page-bg);
        color: var(--editor-text);
        border-radius: var(--editor-radius);
        width: 95vw;
        max-width: 860px;
        max-height: 90vh;
        display: flex;
        flex-direction: column;
        overflow: hidden;
        box-shadow: 0 20px 60px rgba(0,0,0,0.35), 0 4px 16px rgba(0,0,0,0.15);
      }
      @media (max-width: 500px) {
        .dialog { width:100vw; height:100vh; max-height:100vh; border-radius:0; }
      }

      /* ══ Dialog header (gradiente blu) ═══════════════════════════ */
      .dialog-header {
        display: flex;
        align-items: center;
        gap: 10px;
        padding: 14px 18px;
        background: linear-gradient(135deg, #1565c0 0%, #0288d1 100%);
        flex-shrink: 0;
      }
      .dialog-header ha-icon-button {
        --mdc-icon-button-size: 36px;
        --mdc-icon-size: 20px;
        color: rgba(255,255,255,0.85);
      }
      .dialog-header ha-icon-button:hover {
        --mdc-icon-button-color: rgba(255,255,255,1);
      }
      .dialog-title {
        flex: 1;
        font-size: 17px;
        font-weight: 700;
        color: #fff;
        letter-spacing: 0.2px;
      }
      .save-btn {
        border: 2px solid rgba(255,255,255,0.45);
        background: rgba(255,255,255,0.12);
        color: rgba(255,255,255,0.6);
        padding: 7px 20px;
        border-radius: 20px;
        font-size: 14px;
        font-weight: 600;
        cursor: not-allowed;
        transition: all 0.2s;
        white-space: nowrap;
      }
      .save-btn.dirty {
        background: #fff;
        border-color: #fff;
        color: #1565c0;
        cursor: pointer;
        box-shadow: 0 3px 12px rgba(0,0,0,0.25);
      }
      .save-btn:disabled {
        cursor: not-allowed;
      }

      /* ══ Error banner ════════════════════════════════════════════ */
      .error-banner {
        background: var(--editor-error);
        color: #fff;
        padding: 10px 18px;
        font-size: 13px;
        font-weight: 500;
        flex-shrink: 0;
      }

      /* ══ Tabs (pill style su sfondo grigio) ══════════════════════ */
      .tabs {
        display: flex;
        gap: 6px;
        padding: 10px 18px;
        background: var(--editor-page-bg);
        flex-shrink: 0;
      }
      .tab {
        flex: 1;
        padding: 8px 16px;
        border: none;
        border-radius: 20px;
        background: rgba(0,0,0,0.06);
        font-size: 13px;
        font-weight: 600;
        color: var(--editor-secondary);
        cursor: pointer;
        transition: all 0.18s;
        letter-spacing: 0.2px;
      }
      .tab:hover { background: rgba(0,0,0,0.10); }
      .tab.active {
        background: var(--editor-bg);
        color: var(--editor-primary);
        box-shadow: 0 2px 8px rgba(0,0,0,0.14);
      }

      /* ══ Tab content ═════════════════════════════════════════════ */
      .tab-content {
        overflow-y: auto;
        flex: 1;
        padding: 4px 14px 20px;
        background: var(--editor-page-bg);
      }

      /* ══ Sezioni come card (details principali) ══════════════════ */
      details:not(.advanced-section):not(.color-section):not(.stack-card-details) {
        background: var(--editor-bg);
        border-radius: var(--editor-radius);
        margin-top: 10px;
        border: none;
        box-shadow: var(--editor-shadow);
        overflow: hidden;
      }
      details:not(.advanced-section):not(.color-section):not(.stack-card-details) > summary {
        padding: 14px 18px;
        font-weight: 700;
        font-size: 14px;
        cursor: pointer;
        color: var(--editor-text);
        user-select: none;
        display: flex;
        align-items: center;
        gap: 10px;
        border-bottom: 2px solid transparent;
        transition: background 0.15s;
        list-style: none;
      }
      details:not(.advanced-section):not(.color-section):not(.stack-card-details) > summary::marker,
      details:not(.advanced-section):not(.color-section):not(.stack-card-details) > summary::-webkit-details-marker {
        display: none;
      }
      details:not(.advanced-section):not(.color-section):not(.stack-card-details) > summary:hover {
        background: rgba(2,136,209,0.04);
      }
      details:not(.advanced-section):not(.color-section):not(.stack-card-details)[open] > summary {
        border-bottom-color: var(--editor-divider);
        color: var(--editor-primary);
      }
      /* Chevron auto nella summary */
      details:not(.advanced-section):not(.color-section):not(.stack-card-details) > summary::after {
        content: "›";
        font-size: 20px;
        font-weight: 400;
        color: var(--editor-secondary);
        margin-left: auto;
        transition: transform 0.18s;
        line-height: 1;
      }
      details:not(.advanced-section):not(.color-section):not(.stack-card-details)[open] > summary::after {
        transform: rotate(90deg);
      }

      /* Badge tipo card nella summary */
      .slot-badge {
        font-size: 10px;
        font-weight: 700;
        color: var(--editor-primary);
        background: rgba(2,136,209,0.12);
        padding: 2px 8px;
        border-radius: 10px;
        letter-spacing: 0.3px;
      }

      /* ══ Section (contenuto delle card) ══════════════════════════ */
      .section {
        padding: 4px 0 12px;
      }

      /* ══ Field rows ══════════════════════════════════════════════ */
      .field-row {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 10px 18px;
        gap: 14px;
        min-height: 44px;
        border-bottom: 1px solid var(--editor-divider);
      }
      .field-row:last-child { border-bottom: none; }
      .field-row label {
        font-size: 13px;
        font-weight: 500;
        color: var(--editor-text);
        flex-shrink: 0;
        min-width: 130px;
      }
      .field-row input[type="text"],
      .field-row input[type="number"] {
        flex: 1;
        min-width: 0;
        padding: 7px 12px;
        border: 1.5px solid var(--editor-divider);
        border-radius: 8px;
        background: var(--editor-page-bg);
        color: var(--editor-text);
        font-size: 13px;
        outline: none;
        transition: border-color 0.15s, box-shadow 0.15s;
      }
      .field-row input[type="text"]:focus,
      .field-row input[type="number"]:focus {
        border-color: var(--editor-primary);
        background: var(--editor-bg);
        box-shadow: 0 0 0 3px rgba(2,136,209,0.12);
      }
      .field-row select {
        flex: 1;
        min-width: 0;
        padding: 7px 12px;
        border: 1.5px solid var(--editor-divider);
        border-radius: 8px;
        background: var(--editor-page-bg);
        color: var(--editor-text);
        font-size: 13px;
        outline: none;
        transition: border-color 0.15s;
        cursor: pointer;
      }
      .field-row select:focus {
        border-color: var(--editor-primary);
        box-shadow: 0 0 0 3px rgba(2,136,209,0.12);
      }
      .field-row ha-switch {
        --mdc-theme-secondary: var(--editor-primary);
      }

      /* ══ Icon picker ═════════════════════════════════════════════ */
      .icon-picker-row {
        display: flex;
        align-items: center;
        gap: 10px;
        flex: 1;
      }
      .icon-picker-row ha-icon { --mdc-icon-size: 22px; color: var(--editor-secondary); }
      .icon-picker-row input {
        flex: 1;
        padding: 7px 12px;
        border: 1.5px solid var(--editor-divider);
        border-radius: 8px;
        background: var(--editor-page-bg);
        color: var(--editor-text);
        font-size: 13px;
        outline: none;
      }
      .icon-picker-row input:focus {
        border-color: var(--editor-primary);
        box-shadow: 0 0 0 3px rgba(2,136,209,0.12);
      }

      /* ══ Width controls ══════════════════════════════════════════ */
      .width-control { flex:1; display:flex; align-items:center; gap:8px; }
      .width-control input[type="number"] {
        width: 72px;
        padding: 7px 10px;
        border: 1.5px solid var(--editor-divider);
        border-radius: 8px;
        background: var(--editor-page-bg);
        color: var(--editor-text);
        font-size: 13px;
        outline: none;
      }
      .width-responsive { display:flex; flex-direction:column; gap:4px; flex:1; }
      .width-responsive-row { display:flex; align-items:center; gap:8px; }
      .width-responsive-row span { font-size:12px; color:var(--editor-secondary); width:60px; }
      .width-responsive-row input {
        width: 64px;
        padding: 5px 8px;
        border: 1.5px solid var(--editor-divider);
        border-radius: 6px;
        background: var(--editor-page-bg);
        color: var(--editor-text);
        font-size: 13px;
        outline: none;
      }

      /* ══ Pulsanti generici ═══════════════════════════════════════ */
      .small-btn {
        padding: 5px 12px;
        font-size: 12px;
        font-weight: 500;
        border: 1.5px solid var(--editor-divider);
        border-radius: 7px;
        background: var(--editor-bg);
        color: var(--editor-primary);
        cursor: pointer;
        white-space: nowrap;
        display: inline-flex;
        align-items: center;
        gap: 5px;
        transition: background 0.13s, border-color 0.13s;
      }
      .small-btn:hover { background: rgba(2,136,209,0.08); border-color: var(--editor-primary); }
      .danger-btn { color: var(--editor-error) !important; border-color: rgba(229,62,62,0.45) !important; }
      .danger-btn:hover { background: rgba(229,62,62,0.08) !important; }

      /* ══ Sezioni colori e avanzate (nested) ══════════════════════ */
      .color-section,
      .advanced-section {
        border: none;
        background: none;
        box-shadow: none;
        border-radius: 0;
        margin: 0;
      }
      .color-section summary,
      .advanced-section summary {
        font-size: 12px;
        font-weight: 600;
        color: var(--editor-secondary);
        padding: 6px 0;
        cursor: pointer;
        user-select: none;
        display: flex;
        align-items: center;
        gap: 6px;
        list-style: none;
      }
      .color-section summary::after,
      .advanced-section summary::after { display: none; }
      .color-fields { display:flex; gap:12px; flex-wrap:wrap; padding-bottom:8px; }
      .color-field { display:flex; flex-direction:column; gap:4px; }
      .color-field label { font-size:11px; color:var(--editor-secondary); }
      .color-input-wrap { display:flex; align-items:center; gap:4px; }
      .color-input-wrap input[type="color"] {
        width:28px; height:28px;
        border: 1.5px solid var(--editor-divider);
        border-radius:6px; padding:2px;
        cursor:pointer; background:var(--editor-surface);
      }
      .color-text {
        width:76px; padding:5px 8px; font-size:12px;
        border: 1.5px solid var(--editor-divider);
        border-radius:6px;
        background: var(--editor-surface);
        color: var(--editor-text);
        outline: none;
      }
      .color-clear {
        border:none; background:none;
        color:var(--editor-secondary); cursor:pointer;
        font-size:14px; padding:0 4px;
      }

      /* ══ Aggiungi voce menu ═══════════════════════════════════════ */
      .add-btn {
        display: flex;
        align-items: center;
        gap: 8px;
        margin-top: 10px;
        padding: 10px 14px;
        border: 2px dashed rgba(2,136,209,0.35);
        border-radius: 10px;
        background: none;
        color: var(--editor-primary);
        font-size: 13px;
        font-weight: 600;
        cursor: pointer;
        width: 100%;
        justify-content: center;
        transition: background 0.15s, border-color 0.15s;
        box-sizing: border-box;
      }
      .add-btn:hover { background: rgba(2,136,209,0.07); border-color: var(--editor-primary); }
      .add-btn ha-icon { --mdc-icon-size: 18px; }

      /* ══ Menu items list ════════════════════════════════════════ */
      .menu-items-list { display:flex; flex-direction:column; gap:6px; }
      .menu-item-row {
        border: 1.5px solid var(--editor-divider);
        border-radius: 10px;
        overflow: hidden;
        background: var(--editor-bg);
        transition: border-color 0.15s, box-shadow 0.15s;
      }
      .menu-item-row.expanded {
        border-color: var(--editor-primary);
        box-shadow: 0 0 0 3px rgba(2,136,209,0.10);
      }
      .menu-item-header {
        display: flex;
        align-items: center;
        gap: 8px;
        padding: 6px 10px;
        cursor: pointer;
        user-select: none;
        min-height: 44px;
      }
      .menu-item-header:hover { background: rgba(0,0,0,0.03); }
      .menu-item-arrows { display:flex; flex-direction:column; }
      .menu-item-arrows ha-icon-button { --mdc-icon-button-size:24px; --mdc-icon-size:14px; color:var(--editor-secondary); }
      .menu-item-icon { --mdc-icon-size:20px; color:var(--editor-secondary); flex-shrink:0; }
      .menu-item-name { flex:1; font-size:13px; font-weight:600; overflow:hidden; text-overflow:ellipsis; white-space:nowrap; }
      .menu-item-action-badge {
        font-size: 10px;
        font-weight: 600;
        color: var(--editor-secondary);
        background: rgba(0,0,0,0.07);
        padding: 2px 8px;
        border-radius: 8px;
        flex-shrink: 0;
      }
      .delete-btn { --mdc-icon-button-size:30px; --mdc-icon-size:17px; color:var(--editor-error); }
      .expand-chevron { --mdc-icon-size:18px; color:var(--editor-secondary); flex-shrink:0; }
      .menu-item-detail {
        padding: 12px 16px 16px;
        border-top: 1px solid var(--editor-divider);
        background: var(--editor-page-bg);
      }
      .menu-subsection-label {
        font-size: 11px;
        font-weight: 700;
        color: var(--editor-secondary);
        text-transform: uppercase;
        letter-spacing: 0.7px;
        margin: 12px 0 8px;
      }

      /* ══ Service data / codice JS ═══════════════════════════════ */
      .service-data-editor {
        width: 100%;
        min-height: 70px;
        padding: 8px 12px;
        border: 1.5px solid var(--editor-divider);
        border-radius: 8px;
        font-family: "Roboto Mono","Consolas",monospace;
        font-size: 12px;
        background: var(--editor-page-bg);
        color: var(--editor-text);
        resize: vertical;
        box-sizing: border-box;
        outline: none;
        transition: border-color 0.15s;
      }
      .service-data-editor:focus { border-color: var(--editor-primary); }

      /* ══ YAML / JSON editor (tab YAML) ══════════════════════════ */
      .yaml-editor {
        width: 100%;
        min-height: 300px;
        padding: 14px;
        border: 1.5px solid var(--editor-divider);
        border-radius: 10px;
        font-family: "Roboto Mono","Consolas",monospace;
        font-size: 13px;
        line-height: 1.55;
        background: var(--editor-bg);
        color: var(--editor-text);
        resize: vertical;
        tab-size: 2;
        box-sizing: border-box;
        outline: none;
        transition: border-color 0.15s, box-shadow 0.15s;
      }
      .yaml-editor:focus {
        border-color: var(--editor-primary);
        box-shadow: 0 0 0 3px rgba(2,136,209,0.12);
      }
      .css-editor { min-height: 130px; font-size: 12px; }
      .css-hint {
        font-size: 12px;
        color: var(--editor-secondary);
        margin-bottom: 8px;
        font-style: italic;
      }

      /* ══ Card slot (non-stack) ══════════════════════════════════ */
      .card-slot { margin: 6px 0 4px; }
      .card-slot-active { display:flex; flex-direction:column; gap:10px; }
      .card-slot-type-row {
        display: flex;
        align-items: center;
        gap: 10px;
        padding: 8px 12px;
        background: rgba(2,136,209,0.07);
        border-radius: 8px;
        border: 1.5px solid rgba(2,136,209,0.20);
      }
      .card-slot-icon { --mdc-icon-size:20px; color:var(--editor-primary); flex-shrink:0; }
      .card-slot-type { flex:1; font-size:13px; font-weight:600; color:var(--editor-primary); font-family:"Roboto Mono",monospace; }
      .card-json-editor { min-height:130px; font-size:12px; }
      .card-slot-hint { font-size:11px; color:var(--editor-secondary); font-style:italic; }
      .card-slot-empty {
        display: flex;
        align-items: center;
        gap: 12px;
        padding: 14px 16px;
        border: 2px dashed var(--editor-divider);
        border-radius: 10px;
        color: var(--editor-secondary);
        font-size: 13px;
      }
      .card-slot-empty-icon { --mdc-icon-size:24px; color:var(--editor-divider); }

      /* ══════════════════════════════════════════════════
         STACK SLOT  (horizontal-stack / vertical-stack)
         ══════════════════════════════════════════════════ */

      /* Intestazione slot ------------------------------------------ */
      .stack-slot-header {
        display: flex;
        align-items: center;
        gap: 10px;
        padding: 10px 14px;
        background: linear-gradient(135deg, rgba(3,169,244,0.10) 0%, rgba(3,169,244,0.04) 100%);
        border-radius: 10px;
        border: 1.5px solid rgba(3, 169, 244, 0.28);
        margin-bottom: 12px;
      }
      .stack-slot-icon {
        --mdc-icon-size: 22px;
        color: var(--editor-primary);
        flex-shrink: 0;
      }
      .stack-slot-info {
        flex: 1;
        display: flex;
        align-items: baseline;
        gap: 10px;
      }
      .stack-type-badge {
        font-family: "Roboto Mono", monospace;
        font-size: 13px;
        font-weight: 700;
        color: var(--editor-primary);
      }
      .stack-card-count {
        font-size: 12px;
        color: var(--editor-secondary);
        background: rgba(0,0,0,0.06);
        padding: 1px 7px;
        border-radius: 10px;
      }
      .stack-remove-slot-btn {
        display: inline-flex;
        align-items: center;
        gap: 5px;
        padding: 5px 12px;
        font-size: 12px;
        font-weight: 500;
        border: 1.5px solid rgba(219, 68, 55, 0.45);
        border-radius: 7px;
        background: none;
        color: var(--editor-error);
        cursor: pointer;
        white-space: nowrap;
        flex-shrink: 0;
        transition: background 0.15s;
      }
      .stack-remove-slot-btn:hover {
        background: rgba(219, 68, 55, 0.10);
      }
      .stack-remove-slot-btn ha-icon { --mdc-icon-size: 15px; }

      /* Stato vuoto ------------------------------------------------- */
      .stack-empty-state {
        display: flex;
        align-items: center;
        gap: 12px;
        padding: 18px 16px;
        border: 2px dashed var(--editor-divider);
        border-radius: 10px;
        color: var(--editor-secondary);
        font-size: 13px;
        margin-bottom: 10px;
      }
      .stack-empty-state ha-icon {
        --mdc-icon-size: 28px;
        color: rgba(3,169,244,0.35);
        flex-shrink: 0;
      }

      /* Card collassabile ------------------------------------------- */
      .stack-card-details {
        border: 1.5px solid var(--editor-divider);
        border-radius: 10px;
        margin-bottom: 8px;
        overflow: hidden;
        background: var(--editor-surface);
        transition: border-color 0.15s;
      }
      .stack-card-details[open] {
        border-color: var(--editor-primary);
      }
      .stack-card-details summary { list-style: none; }
      .stack-card-details summary::-webkit-details-marker { display: none; }

      .stack-card-summary {
        display: flex;
        align-items: center;
        gap: 10px;
        padding: 10px 12px;
        cursor: pointer;
        user-select: none;
        background: rgba(0,0,0,0.025);
        min-height: 48px;
      }
      .stack-card-details[open] .stack-card-summary {
        background: rgba(3,169,244,0.06);
        border-bottom: 1px solid var(--editor-divider);
      }

      /* Numero circolare */
      .stack-card-num {
        width: 26px;
        height: 26px;
        border-radius: 50%;
        background: var(--editor-primary);
        color: #fff;
        font-size: 12px;
        font-weight: 700;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-shrink: 0;
      }

      /* Tipo card */
      .stack-card-type-label {
        flex: 1;
        font-family: "Roboto Mono", "Consolas", monospace;
        font-size: 13px;
        font-weight: 600;
        color: var(--editor-text);
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        min-width: 0;
      }

      /* Pulsanti riordina */
      .stack-card-move {
        display: flex;
        gap: 2px;
        flex-shrink: 0;
      }
      .stack-move-btn {
        width: 28px;
        height: 28px;
        border: 1px solid var(--editor-divider);
        border-radius: 5px;
        background: var(--editor-surface);
        color: var(--editor-secondary);
        font-size: 11px;
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 0;
        transition: background 0.12s, color 0.12s;
      }
      .stack-move-btn:hover:not([disabled]) {
        background: rgba(3,169,244,0.12);
        color: var(--editor-primary);
        border-color: var(--editor-primary);
      }
      .stack-move-btn[disabled] {
        opacity: 0.25;
        cursor: not-allowed;
      }

      /* Pulsante elimina (rosso, testo visibile) */
      .stack-delete-btn {
        display: inline-flex;
        align-items: center;
        gap: 4px;
        padding: 5px 10px;
        border: 1.5px solid rgba(219,68,55,0.45);
        border-radius: 7px;
        background: none;
        color: var(--editor-error);
        font-size: 12px;
        font-weight: 500;
        cursor: pointer;
        flex-shrink: 0;
        transition: background 0.12s;
      }
      .stack-delete-btn:hover {
        background: rgba(219,68,55,0.10);
      }
      .stack-delete-btn ha-icon { --mdc-icon-size: 15px; }

      /* Chevron espansione */
      .stack-chevron {
        --mdc-icon-size: 20px;
        color: var(--editor-secondary);
        flex-shrink: 0;
        transition: transform 0.18s;
      }
      .stack-card-details[open] .stack-chevron {
        transform: rotate(180deg);
      }

      /* Corpo espanso: editor JSON ---------------------------------- */
      .stack-card-body {
        padding: 12px 14px 14px;
        background: var(--editor-surface);
      }
      .stack-card-body-hint {
        font-size: 11px;
        color: var(--editor-secondary);
        font-style: italic;
        margin-bottom: 8px;
      }
      .stack-card-editor {
        display: block;
        width: 100%;
        min-height: 280px;
        padding: 12px 14px;
        border: 1.5px solid var(--editor-divider);
        border-radius: 8px;
        font-family: "Roboto Mono", "Consolas", monospace;
        font-size: 12.5px;
        line-height: 1.6;
        background: rgba(0,0,0,0.025);
        color: var(--editor-text);
        resize: vertical;
        tab-size: 2;
        box-sizing: border-box;
        outline: none;
        transition: border-color 0.15s, background 0.15s;
      }
      .stack-card-editor:focus {
        border-color: var(--editor-primary);
        background: var(--editor-surface);
        box-shadow: 0 0 0 3px rgba(3,169,244,0.10);
      }

      /* Aggiungi card ----------------------------------------------- */
      .stack-add-btn {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 8px;
        width: 100%;
        padding: 12px 0;
        margin-top: 4px;
        border: 2px dashed rgba(3, 169, 244, 0.45);
        border-radius: 10px;
        background: rgba(3, 169, 244, 0.05);
        color: var(--editor-primary);
        font-size: 14px;
        font-weight: 600;
        cursor: pointer;
        box-sizing: border-box;
        transition: background 0.15s, border-color 0.15s;
      }
      .stack-add-btn:hover {
        background: rgba(3, 169, 244, 0.13);
        border-color: var(--editor-primary);
      }
      .stack-add-btn ha-icon { --mdc-icon-size: 20px; }
      .card-slot-active {
        display: flex;
        flex-direction: column;
        gap: 8px;
      }
      .card-slot-type-row {
        display: flex;
        align-items: center;
        gap: 8px;
        padding: 6px 10px;
        background: rgba(3, 169, 244, 0.07);
        border-radius: 6px;
        border: 1px solid rgba(3, 169, 244, 0.2);
      }
      .card-slot-icon {
        --mdc-icon-size: 18px;
        color: var(--editor-primary);
        flex-shrink: 0;
      }
      .card-slot-type {
        flex: 1;
        font-size: 13px;
        font-weight: 500;
        color: var(--editor-primary);
        font-family: "Roboto Mono", monospace;
      }
      .card-json-editor {
        min-height: 120px;
        font-size: 12px;
      }
      .card-slot-hint {
        font-size: 11px;
        color: var(--editor-secondary);
        font-style: italic;
      }
      .card-slot-empty {
        display: flex;
        align-items: center;
        gap: 10px;
        padding: 10px 12px;
        border: 1px dashed var(--editor-divider);
        border-radius: 8px;
        color: var(--editor-secondary);
        font-size: 13px;
      }
      .card-slot-empty-icon {
        --mdc-icon-size: 22px;
        color: var(--editor-divider);
      }

      /* Hint / note */
      .css-hint {
        font-size: 12px;
        color: var(--editor-secondary);
        margin-bottom: 6px;
        font-style: italic;
      }

      /* Separatore sezione menu */
      .menu-subsection-label {
        font-size: 11px;
        font-weight: 600;
        color: var(--editor-secondary);
        text-transform: uppercase;
        letter-spacing: 0.5px;
        margin: 10px 0 6px;
      }

      /* ---- YAML output panel (modalità file YAML) ---- */
      .yaml-output-panel {
        flex-shrink: 0;
        background: rgba(3, 169, 244, 0.06);
        border: 1px solid var(--editor-primary);
        border-radius: 8px;
        padding: 10px 14px;
        margin: 6px 0 0;
        display: flex;
        flex-direction: column;
        gap: 8px;
      }
      .yaml-output-header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 8px;
        font-size: 12px;
        font-weight: 500;
        color: var(--editor-primary);
      }
      .yaml-output-header code {
        font-family: "Roboto Mono", monospace;
        font-style: normal;
        background: rgba(3, 169, 244, 0.12);
        padding: 1px 4px;
        border-radius: 3px;
      }
      .copy-btn {
        display: inline-flex;
        align-items: center;
        gap: 5px;
        padding: 4px 12px;
        border: 1px solid var(--editor-primary);
        border-radius: 6px;
        background: none;
        color: var(--editor-primary);
        font-size: 13px;
        font-weight: 500;
        cursor: pointer;
        flex-shrink: 0;
        transition: background 0.15s, color 0.15s, border-color 0.15s;
      }
      .copy-btn ha-icon {
        --mdc-icon-size: 16px;
      }
      .copy-btn:hover {
        background: rgba(3, 169, 244, 0.12);
      }
      .copy-btn.copied {
        background: var(--editor-success);
        border-color: var(--editor-success);
        color: #fff;
      }
      .yaml-copy-ta {
        min-height: 160px;
        max-height: 320px;
        font-size: 12px;
      }
      .yaml-output-hint {
        font-size: 11px;
        color: var(--editor-secondary);
        font-style: italic;
      }
      .yaml-output-hint code {
        font-family: "Roboto Mono", monospace;
        font-style: normal;
        background: rgba(0, 0, 0, 0.07);
        padding: 1px 4px;
        border-radius: 3px;
      }
    `}}),console.info(`%c  ${ve.padEnd(24)}%c\n  Version: ${"1.3".padEnd(9)}      `,"color: chartreuse; background: black; font-weight: 700;","color: white; background: dimgrey; font-weight: 700;"),fs(),ms=()=>{hs=!1,fs()},setTimeout(()=>{window.addEventListener("location-changed",()=>{const e=Se(),t=null==e?void 0:e.shadowRoot;if(!t)return;const i=t.querySelector("div");if(!i)return;const n=i.querySelector("#customSidebarWrapper");if(n){const e=n.querySelector("#customSidebar"),t=n.querySelector("#customHeaderContainer");e||t||ms()}else ms()})},1e3);

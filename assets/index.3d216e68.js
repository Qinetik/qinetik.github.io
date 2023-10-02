import{i as S,t as w,d as y,m as x,c as u,h as Y,D as X,E as K,u as Z,j as J,k as A,l as Q}from"./web.f4fdd86a.js";function ee(e){for(var r=0,t,i=0,s=e.length;s>=4;++i,s-=4)t=e.charCodeAt(i)&255|(e.charCodeAt(++i)&255)<<8|(e.charCodeAt(++i)&255)<<16|(e.charCodeAt(++i)&255)<<24,t=(t&65535)*1540483477+((t>>>16)*59797<<16),t^=t>>>24,r=(t&65535)*1540483477+((t>>>16)*59797<<16)^(r&65535)*1540483477+((r>>>16)*59797<<16);switch(s){case 3:r^=(e.charCodeAt(i+2)&255)<<16;case 2:r^=(e.charCodeAt(i+1)&255)<<8;case 1:r^=e.charCodeAt(i)&255,r=(r&65535)*1540483477+((r>>>16)*59797<<16)}return r^=r>>>13,r=(r&65535)*1540483477+((r>>>16)*59797<<16),((r^r>>>15)>>>0).toString(36)}var re={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1};function N(e){var r=Object.create(null);return function(t){return r[t]===void 0&&(r[t]=e(t)),r[t]}}var oe=/[A-Z]|^ms/g,te=/_EMO_([^_]+?)_([^]*?)_EMO_/g,F=function(r){return r.charCodeAt(1)===45},P=function(r){return r!=null&&typeof r!="boolean"},C=N(function(e){return F(e)?e:e.replace(oe,"-$&").toLowerCase()}),O=function(r,t){switch(r){case"animation":case"animationName":if(typeof t=="string")return t.replace(te,function(i,s,l){return f={name:s,styles:l,next:f},s})}return re[r]!==1&&!F(r)&&typeof t=="number"&&t!==0?t+"px":t};function $(e,r,t){if(t==null)return"";if(t.__emotion_styles!==void 0)return t;switch(typeof t){case"boolean":return"";case"object":{if(t.anim===1)return f={name:t.name,styles:t.styles,next:f},t.name;if(t.styles!==void 0){var i=t.next;if(i!==void 0)for(;i!==void 0;)f={name:i.name,styles:i.styles,next:f},i=i.next;var s=t.styles+";";return s}return ne(e,r,t)}case"function":{if(e!==void 0){var l=f,c=t(e);return f=l,$(e,r,c)}break}}if(r==null)return t;var d=r[t];return d!==void 0?d:t}function ne(e,r,t){var i="";if(Array.isArray(t))for(var s=0;s<t.length;s++)i+=$(e,r,t[s])+";";else for(var l in t){var c=t[l];if(typeof c!="object")r!=null&&r[c]!==void 0?i+=l+"{"+r[c]+"}":P(c)&&(i+=C(l)+":"+O(l,c)+";");else if(Array.isArray(c)&&typeof c[0]=="string"&&(r==null||r[c[0]]===void 0))for(var d=0;d<c.length;d++)P(c[d])&&(i+=C(l)+":"+O(l,c[d])+";");else{var b=$(e,r,c);switch(l){case"animation":case"animationName":{i+=C(l)+":"+b+";";break}default:i+=l+"{"+b+"}"}}}return i}var M=/label:\s*([^\s;\n{]+)\s*(;|$)/g,f,B=function(r,t,i){if(r.length===1&&typeof r[0]=="object"&&r[0]!==null&&r[0].styles!==void 0)return r[0];var s=!0,l="";f=void 0;var c=r[0];c==null||c.raw===void 0?(s=!1,l+=$(i,t,c)):l+=c[0];for(var d=1;d<r.length;d++)l+=$(i,t,r[d]),s&&(l+=c[d]);M.lastIndex=0;for(var b="",m;(m=M.exec(l))!==null;)b+="-"+m[1];var p=ee(l)+b;return{name:p,styles:l,next:f}},ie=/^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,ae=N(function(e){return ie.test(e)||e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&e.charCodeAt(2)<91}),se=w("<style>");function W(e,r){return r?"k"+e:"c"+e}function le(e){let r;return e.areKeyFrames?r=`@keyframes ${e.name}{${e.styles.styles}}`:r=`.${e.name}{${e.styles.styles}}`,(()=>{const t=se();return S(t,`${r}`),t})()}function R(e){for(var r=0,t,i=0,s=e.length;s>=4;++i,s-=4)t=e.charCodeAt(i)&255|(e.charCodeAt(++i)&255)<<8|(e.charCodeAt(++i)&255)<<16|(e.charCodeAt(++i)&255)<<24,t=(t&65535)*1540483477+((t>>>16)*59797<<16),t^=t>>>24,r=(t&65535)*1540483477+((t>>>16)*59797<<16)^(r&65535)*1540483477+((r>>>16)*59797<<16);switch(s){case 3:r^=(e.charCodeAt(i+2)&255)<<16;case 2:r^=(e.charCodeAt(i+1)&255)<<8;case 1:r^=e.charCodeAt(i)&255,r=(r&65535)*1540483477+((r>>>16)*59797<<16)}return r^=r>>>13,r=(r&65535)*1540483477+((r>>>16)*59797<<16),((r^r>>>15)>>>0).toString(36)}var ce=w("<style>");function de(...e){const r=B(e),t=R(r.styles),i=W(t,!0),s=()=>(()=>{const l=ce();return S(l,()=>`@keyframes ${i}{${r.styles}}`),l})();return s.animationName=i,s}var ue={},me=J(()=>ue);function ge(){return Z(me)()}function pe(){return typeof document<"u"}var fe=ae,he=e=>e!=="theme",be=e=>typeof e=="string"&&e.charCodeAt(0)>96?fe:he,I=(e,r,t)=>{let i;if(r){const s=r.shouldForwardProp;i=e.__emotion_forwardProp&&s?l=>e.__emotion_forwardProp(l)&&s(l):s}return typeof i!="function"&&t&&(i=e.__emotion_forwardProp),i},ve=()=>!0,D=(e,r)=>{const i=e.__emotion_base||e;let s,l;r!==void 0&&(s=r.label,l=r.target);const c=I(e,r,!0),b=!(c||be(i))("as");return function(...m){let p=e.__emotion_styles!==void 0?e.__emotion_styles.slice(0):[];if(s!==void 0&&p.push(`label:${s};`),m[0]==null||m[0].raw===void 0)p.push.apply(p,m);else{m[0][0]===void 0&&console.error(L),p.push(m[0][0]);let h=m.length,g=1;for(;g<h;g++)m[0][g]===void 0&&console.error(L),p.push(m[g],m[0][g])}const v=h=>{const g=b&&h.as||i,V=y(()=>{let k=x(h,{get theme(){return ge()}});return B(p,void 0,k)}),j=x(h),T=V(),G=R(T.styles),E=W(G,!1),_=E;return[u(le,{name:E,styles:T,areKeyFrames:!1}),u(K,{fallback:(k,De)=>(console.error("error making dynamic component in styled -> base "+Y,k),k+" isBrowser = "+pe()+" tag = "+g),get children(){return u(X,x({component:g},j,{get class(){return h.class?`${_} ${h.class}`:_}}))}})]};return v.__emotion_base=i,v.__emotion_styles=p,v.__emotion_forwardProp=c,Object.defineProperty(v,"toString",{value(){return l===void 0&&ve()?"NO_COMPONENT_SELECTOR":`.${l}`}}),v.withComponent=(h,g)=>D(h,{...r,...g,shouldForwardProp:I(v,g,!0)})(...p),v}},L=`You have illegal escape sequence in your template literal, most likely inside content's property value.
Because you write your CSS inside a JavaScript string you actually have to do double escaping, so for example "content: '\\00d7';" should become "content: '\\\\00d7';".
You can read more about this here:
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals#ES2018_revision_of_illegal_escape_sequences`,ye=w("<style>");function H(...e){const r=B(e);return R(r.styles),()=>(()=>{const t=ye();return S(t,()=>r.styles),t})()}var n=D.bind(),xe=class{constructor(){this.unit="px",this.step=5,this.values={xs:0,sm:600,md:900,lg:1200,xl:1536},this.up=e=>`@media (min-width:${e instanceof Number?e:this.values[e]}${this.unit})`,this.down=e=>`@media (max-width:${(e instanceof Number?e:this.values[e])-this.step/100}${this.unit})`,this.between=(e,r)=>{const t=e instanceof Number?e:this.values[e],i=r instanceof Number?r:this.values[r];return`@media (min-width:${t}${this.unit}) and (max-width:${i}${this.unit})`}}},a={border:{smRadius:"a0",mdRadius:"a1",lgRadius:"a2"},font:{primary:"a3",secondary:"a4"},animation:{timing:{ease:"a5",slider:"a6",slideStop:"a7",timingThrottle:"a8"}},colors:{success:"a9",onSuccess:"b0",warning:"b1",onWarning:"b2",error:"b3",onError:"b4",info:"b5",onInfo:"b6",primary:"b7",primary100:"b8",primary200:"b9",primary300:"c0",primary400:"c1",primary500:"c2",accent:"c3",accent100:"c4",accent200:"c5",accent300:"c6",accent400:"c7",accent500:"c8",bg:"c9",bg100:"d0",bg200:"d1",bg300:"d2",bg400:"d3",bg500:"d4",onBg:"d5",onBg100:"d6",onBg200:"d7",onBg300:"d8",onBg400:"d9",onBg500:"e0",backdrop:"e1"}};function $e(e){return{border:{smRadius:`var(--${a.border.smRadius})`,mdRadius:`var(--${a.border.mdRadius})`,lgRadius:`var(--${a.border.lgRadius})`},font:{primary:`var(--${a.font.primary})`,secondary:`var(--${a.font.secondary})`},animation:{timing:{ease:`var(--${a.animation.timing.ease})`,slider:`var(--${a.animation.timing.slider})`,timingThrottle:`var(--${a.animation.timing.timingThrottle})`,slideStop:`var(--${a.animation.timing.slideStop})`}},colors:{accent:`var(--${a.colors.accent})`,accent100:`var(--${a.colors.accent100})`,accent200:`var(--${a.colors.accent200})`,accent300:`var(--${a.colors.accent300})`,accent400:`var(--${a.colors.accent400})`,accent500:`var(--${a.colors.accent500})`,backdrop:`var(--${a.colors.backdrop})`,bg:`var(--${a.colors.bg})`,bg100:`var(--${a.colors.bg100})`,bg200:`var(--${a.colors.bg200})`,bg300:`var(--${a.colors.bg300})`,bg400:`var(--${a.colors.bg400})`,bg500:`var(--${a.colors.bg500})`,error:`var(--${a.colors.error})`,info:`var(--${a.colors.info})`,onBg:`var(--${a.colors.onBg})`,onBg100:`var(--${a.colors.onBg100})`,onBg200:`var(--${a.colors.onBg200})`,onBg300:`var(--${a.colors.onBg300})`,onBg400:`var(--${a.colors.onBg400})`,onBg500:`var(--${a.colors.onBg500})`,onError:`var(--${a.colors.onError})`,onInfo:`var(--${a.colors.onInfo})`,onSuccess:`var(--${a.colors.onSuccess})`,onWarning:`var(--${a.colors.onWarning})`,primary:`var(--${a.colors.primary})`,primary100:`var(--${a.colors.primary100})`,primary200:`var(--${a.colors.primary200})`,primary300:`var(--${a.colors.primary300})`,primary400:`var(--${a.colors.primary400})`,primary500:`var(--${a.colors.primary500})`,success:`var(--${a.colors.success})`,warning:`var(--${a.colors.warning})`},breakpoints:e}}var o=$e(new xe),qe=n("div")`
    display: flex;
    flex-direction: row;
    align-items: center;
    ${e=>e.alignment!=null?"align-items:"+e.alignment+";":""}
    ${e=>e.gap!=null?"gap:"+e.gap+";":null}
`,we=n("div")`
    fill: ${o.colors.onBg};
    width: ${e=>.5+(e.size||1)}rem;
    height: ${e=>.5+(e.size||1)}rem;
`;function z(e){return o.colors["on"+(e||"s")[0].toUpperCase()+(e||"success").substring(1)]}n("div")`
    padding: 1em;
    background: ${e=>o.colors[e.type||"success"]};
    border-radius: ${o.border.mdRadius};
    color: ${e=>z(e.type)};

    & * {
        color: ${e=>z(e.type)};
        fill: ${e=>z(e.type)};
    }
`;var ke=n("div")`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  box-sizing: border-box;
  padding: 0 1em;
  height: 4em;
`,Se=n("div")`
  margin-right: 1rem;
`,Ce=n("h3")`
  flex : 1;
`,ze=n("div")`

`;function Ue(e){return u(ke,x(()=>A(e,["navIcon","title","actions"])[1],{get children(){return[y(()=>y(()=>e.navIcon!=null)()?u(Se,{get children(){return e.navIcon}}):null),u(Ce,{get children(){return e.title}}),y(()=>y(()=>e.actions!=null)()?u(ze,{get children(){return e.actions}}):null)]}}))}n("div")`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;

  &:after {
    content: "";
    background: ${o.colors.bg};
    opacity: 0.7;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    position: absolute;
    z-index: -1;
  }

`;n("div")`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;var Ae=n("button")`

    box-sizing: border-box;
    padding: ${e=>.8+(e.size?e.size*.25:0)}em ${e=>.8+(e.size?e.size*.5:0)}em;
    background: ${o.colors.primary};
    border-radius: 8px;
    cursor: pointer;

    border: 0;
    outline: 0;
    overflow: hidden;

    &:hover {
        background: ${o.colors.primary100};
    }

    &:active {
        background: ${o.colors.primary200};
    }

`,Ve=Ae;n("div")`
    border-radius: ${o.border.mdRadius};
    background: ${o.colors.bg200};
    box-sizing: border-box;
    padding: 1em;
`;var je=n("div")`
    width: ${e=>e.width||"100%"};
    height: ${e=>e.height||"100%"};
`;n("div")`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
`;n("p")`
    
`;n("ul")`
  display: flex;
  flex-direction: column;
  gap: 1em;
`;var Be=n("span")`
  font-family: ${o.font.secondary};
  color: ${e=>o.colors[e.color||"onBg"]};
`;n(Be)`
  font-size: 0.8rem;
`;var Re=n("div")`
  display: flex;
  flex-direction: column;
  align-items: start;
  ${e=>e.gap!=null?"gap:"+e.gap+";":null}
`;n("input")`
    /* Add if not using autoprefixer */
    -webkit-appearance: none;
    /* Remove most all native input styles */
    appearance: none;
    /* For iOS < 15 */
    /* Not removed via appearance */
    margin: 0;

    font: inherit;
    color: currentColor;
    width: ${e=>1.15+(e.size?e.size*.3:0)}em;
    height: ${e=>1.15+(e.size?e.size*.3:0)}em;
    border: ${e=>.15+(e.size||0)*.05}em solid ${o.colors.primary};
    border-radius: 0.15em;
    transform: translateY(-0.075em);

    display: grid;
    place-content: center;

    &::before {
        content: "";
        width: ${e=>.65+(e.size||0)*.2}em;
        height: ${e=>.65+(e.size||0)*.2}em;
        clip-path: polygon(14% 44%, 0 65%, 50% 100%, 100% 16%, 80% 0%, 43% 62%);
        transform: scale(0);
        transform-origin: bottom left;
        transition: 80ms transform ease-in-out;
        box-shadow: inset 1em 1em ${o.colors.onBg300};
        /* Windows High Contrast Mode */
        background-color: CanvasText;
    }

    &:checked::before {
        transform: scale(1);
    }

    &:focus {
        outline: max(0.5px, 0.05em) solid ${o.colors.onBg500};
        outline-offset: 0.1em;
    }

    &:disabled {
        border: 0.15em solid ${o.colors.bg500};
        color: ${o.colors.bg200};
    }

    &:not(:disabled) {
        cursor: pointer;
    }

`;n("div")`
    border-radius: 1em;
    background: ${o.colors.bg400};
    box-sizing: border-box;
    padding: 2em;
    position : absolute;
`;n("div")`
  display: flex;
  flex-direction: column;
  gap: 1em;
  width: 280px;
  box-sizing: border-box;
  padding: 1.5em;
`;n("div")`
  width: 100%;
  box-sizing: border-box;
  padding: 0.6em 0.5em 0.6em 1em;
  border-radius: 999px;
  cursor: pointer;
  font-family:${o.font.secondary};
  color : ${o.colors.onBg};
  ${e=>e.isActive&&"background : "+o.colors.bg200+";"}
    
  &:hover {
    background: ${o.colors.primary};
  }
`;var Te=n("span")`
  box-sizing: border-box;
  display:inline-block;
  padding: 0.6em 0.5em 0.6em 1em;
  margin : 1em 0 0.25em 0;
  font-family : ${o.font.primary};
`;n(e=>{const r=A(e,["title"]);return u(Te,x({color:"onBg100",as:"h4",get children(){return e.title}},()=>r[1]))})`
`;var Ee=(e=>(e.Dark="dark",e.Light="light",e))(Ee||{}),Ge=()=>window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light";function Ye(e){const r=window.matchMedia("(prefers-color-scheme: dark)"),t=()=>{r.matches?e("dark"):e("light")};return r.addEventListener("change",t),()=>r.removeEventListener("change",t)}var _e=(e=>(e[e.Small=0]="Small",e[e.Medium=1]="Medium",e[e.Large=2]="Large",e))(_e||{});H`
    :root * {
        font-family : ${o.font.secondary};
    }
    a {
        color : #0060FE;
    }
    a:hover {
        color : #266bd9;
    }
    h1,h2,h3,h4,h5,h6 {
        font-family : ${o.font.primary};
    }
    p {
        line-height : 1.75rem;
        letter-spacing : 0.05rem;
    }
    code {
        font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New', monospace;
        background : ${o.colors.onBg500};
        color : ${o.colors.bg100};
        border-radius : ${o.border.smRadius};
        padding : 1px 3px;
    }
`;var Pe=w('<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><title>chevron-up</title><path d="M7.41,15.41L12,10.83L16.59,15.41L18,14L12,8L6,14L7.41,15.41Z">'),Oe=w("<div>"),Me=n("div")`

    display: grid;
    grid-template-rows: min-content 0fr;
    transition: grid-template-rows 500ms;
    
    background: ${o.colors.bg200};
    padding: 1.25em;
    gap : 0.5em;
    box-sizing: border-box;
    border-radius: ${o.border.smRadius};

    &.expanded {
        grid-template-rows: min-content 1fr;
    }
    
    & .icon {
        transition : rotate 500ms;
    }
    
    &.expanded .icon {
        rotate : 180deg;
    }
    
`,Ie=n("div")`
    font-size: 1.2em;
    font-weight: bold;
    user-select: none;
    cursor: pointer;
    display:flex;
    flex-direction: row;
    align-items:center;
    
    & > :first-of-type {
          flex : 1;
    }
    
`,Le=n("div")`
  overflow: hidden;
`;function Ne(){return Pe()}function Xe(e){let r=e.expanded,t=e.setExpanded;if(e.expanded==null||e.setExpanded==null){const s=Q(e.defaultExpanded??!0);r=s[0],t=s[1]}const i=()=>e.class?e.class+(r()?" expanded":""):r()?"expanded":void 0;return u(Me,x(()=>A(e,["title","children","class"])[1],{get class(){return i()},get children(){return[u(Ie,{onClick:()=>t(!r()),get children(){return[(()=>{const s=Oe();return S(s,()=>e.title),s})(),y(()=>y(()=>!!(e.showIcon??!0))()&&u(we,{class:"icon",get children(){return u(Ne,{})}}))]}}),u(Le,{get children(){return e.children}})]}}))}var q=n("div")`
    display: flex;
    justify-content: center;
    align-items: center;
    background: ${o.colors.primary};
    cursor: pointer;

    &:hover {
        background: ${o.colors.primary100};
    }

    &:active {
        background: ${o.colors.primary200};
    }
`;n(q)`
    width: ${e=>3+(e.size||0)}em;
    height: ${e=>3+(e.size||0)}em;
    border-radius: 50%;
`;n(q)`
    gap: 0.4em;
    box-sizing: border-box;
    padding: ${e=>e.size||0}em ${e=>1+(e.size||0)*.5}em;
    width: max-content;
    height: ${e=>3+(e.size||0)*.25}em;
    border-radius: 99em;
`;var Ke=n("h1")`
    font-weight: 100;
    font-size : ${e=>3+(e.size?e.size:0)}rem;
`,Ze=n("div")`

    width: ${e=>2+.5*(e.size||0)}rem;
    height: ${e=>2+.5*(e.size||0)}rem;
    border-radius: 50%;

    ${e=>e.disableAutoFill?"":`fill:${o.colors.onBg};`}
    cursor: pointer;

    display: flex;
    justify-content: center;
    align-items: center;

    & > * {
        width: ${e=>1.5+(e.size||0)*.3}rem;
        height: ${e=>1.5+(e.size||0)*.3}rem;
    }

    &:hover {
        background: ${o.colors.primary};
    }

    &:active {
        background: ${o.colors.primary100};
    }

`,Fe=n("select")`
    border: none;
    // A reset of styles, including removing the default dropdown arrow
    appearance: none;
    padding: 0.2em 0.8em 0.2em 0.2em;
    margin: 0;
    width: 100%;
    font-family: inherit;
    font-size: inherit;
    cursor: inherit;
    line-height: inherit;

    // Stack above custom arrow
    z-index: 1;

    // Remove dropdown arrow in IE10 & IE11
    // @link https://www.filamentgroup.com/lab/select-css.html
    &::-ms-expand {
        display: none;
    }

    // Remove focus outline, will add on alternate element
    outline: none;
    
    &:disabled {
        cursor: not-allowed;
        background-color: ${o.colors.onBg400};
        background-image: linear-gradient(to top, ${o.colors.onBg300}, ${o.colors.onBg400} 33%);
        color : ${o.colors.onBg};
    }
    
    &:not(:disabled){
        background-color : ${o.colors.bg100};
    }
    
`;n(Fe)`
    padding: 0.2em 0.8em 0.2em 0.2em;
    border-radius: ${o.border.smRadius};
`;n("input")`

    /* Add if not using autoprefixer */
    -webkit-appearance: none;
    /* Remove most all native input styles */
    appearance: none;
    /* For iOS < 15 */
    background-color: var(--form-background);
    /* Not removed via appearance */
    margin: 0;

    font: inherit;
    color: currentColor;
    width: ${e=>1.15+(e.size?e.size*.3:0)}em;
    height: ${e=>1.15+(e.size?e.size*.3:0)}em;
    border: ${e=>.15+(e.size||0)*.05}em solid ${o.colors.primary};
    border-radius: 50%;
    transform: translateY(-0.075em);

    display: grid;
    place-content: center;


    &::before {
        content: "";
        width: ${e=>.65+(e.size||0)*.2}em;
        height: ${e=>.65+(e.size||0)*.2}em;
        border-radius: 50%;
        transform: scale(0);
        transition: 120ms transform ease-in-out;
        box-shadow: inset 1em 1em var(--form-control-color);
        /* Windows High Contrast Mode */
        background-color: ${o.colors.primary100};
    }

    &:checked::before {
        transform: scale(1);
    }

    &:focus {
        outline: max(0.5px, 0.09em) solid ${o.colors.onBg500};
        outline-offset: 0.1em;
    }

    &:disabled {
        border-color: ${o.colors.onBg500};
    }

    &:not(:disabled) {
        cursor: pointer;
    }

`;H`

    :root::-webkit-scrollbar-track {
        -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3);
        background-color: ${o.colors.bg200};
        border-radius: 10px;
        
    }
    
    :root::-webkit-scrollbar {
        width: 6px;
        background-color: ${o.colors.bg200};
    }
    
    :root::-webkit-scrollbar-thumb {
        background-color: ${o.colors.bg400};
        border-radius: 10px;
    }

`;n("div")`
    position: relative;
    background-color : ${o.colors.bg200};
    border-radius : ${o.border.smRadius};
    max-width:25rem;
    &[data-disabled="true"] {
        pointer-events: none;
    }
`;n("div")`

    padding: 0.25rem 0.5rem;
    border-width: 1px;
    border-color: ${o.colors.bg300};
    border-radius: 0.375rem;
    line-height: 1;
    display: grid;
    background-color : ${o.colors.bg200};
    max-width: 25rem;
    grid-template-columns: repeat(1,minmax(0,1fr));;


    &[data-multiple="true"] {
        display: flex;
        flex-wrap: wrap;
        align-items: stretch;
        gap: 0.25rem;
    }

    &[data-has-value="true"] {
        display: flex;
        flex-wrap: wrap;
        align-items: stretch;
        gap: 0.25rem;
    }

    &[data-disabled="true"] {
        border-color: ${o.colors.onBg500};
        background-color: ${o.colors.bg500};
    }

    &:focus-within {
        outline: 1px dotted ${o.colors.onBg500};
        outline-offset: 2px;
    }

    &[data-disabled="true"]:focus-within {
        outline: none;
    }

`;n("div")`
    grid-column-start: 1;
    grid-row-start: 1;
    color: #718096; /* This corresponds to Windi CSS's "text-gray-400" */
`;n("div")`
    grid-column-start: 1;
    grid-row-start: 1;
`;n("div")`
    display: flex;
    align-items: center;
    border-radius: 4px;
    gap : 0.3em;
    padding: 4px;
    background-color: ${o.colors.bg400};
    font-size: 85%;
    line-height: inherit;
`;n("button")`
    padding: 0 0.25rem; /* Equivalent to px-1 for horizontal padding */

    &:hover {
        text-shadow: 0 0 0.25rem rgba(0, 0, 0, 0.2); /* Equivalent to hover:text-shadow-xl */
    }
`;n("input")`
    grid-column-start: 1;
    grid-row-start: 1;
    flex: 1;
    background-color: transparent;
    outline: none;
    margin: 0;
    padding: 0;
    border: 0;
    color: inherit;
    cursor: default;
    caret-color: transparent;

    &[data-multiple=true] {
        caret-color: currentColor;
    }

    &[data-is-active=true] {
        caret-color: currentColor;
    }
`;n("div")`
    position: absolute;
    min-width: 100%;
    background: inherit;
    color: inherit;
    box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
    white-space: nowrap;
    border-radius: 0.125rem; /* This is equivalent to rounded-sm in Windi CSS */
    margin-top: 0.25rem; /* This is equivalent to mt-1 in Windi CSS */
    padding: 0.5rem; /* This is equivalent to p-2 in Windi CSS */
    z-index: 1;
    overflow-y: auto;
    max-height: 50vh;
`;n("div")`
    padding: 0.5rem 1rem;
    cursor: default; /* cursor-default */
    user-select: none; /* select-none */
`;n("div")`

    padding: 0.5rem 1rem;
    cursor: default;
    user-select: none;
    background-color:${o.colors.bg200};
    border-radius : ${o.border.smRadius};
    color : ${o.colors.onBg200};

    &:hover {
        background-color: ${o.colors.bg300};
    }

    &[data-focused=true] {
        background-color : ${o.colors.bg400};
    }

    &[data-disabled=true] {
        pointer-events: none;
        color: #999999;
    }

    & mark {
        text-decoration: underline;
        background-color: unset;
        color: unset;
    }

`;n("input")`

    -webkit-appearance: none !important;
    width : 14em;
    height: ${e=>6+(e.size||0)*3}px;
    background: ${o.colors.primary};
    border: none;
    outline: none;
    margin-top: ${e=>6+(e.size||0)*.01}px;
    margin-bottom: ${e=>6+(e.size||0)*.01}px;
    border-radius : 99em;
    cursor:pointer;
    
    &::-webkit-slider-thumb {
        -webkit-appearance: none !important;
        width: ${e=>16+(e.size||0)*3}px;
        height: ${e=>16+(e.size||0)*3}px;
        background: ${o.colors.onBg};
        border-radius: 50%;
        border : ${e=>4+(e.size||0)}px solid ${o.colors.primary200};
    }

    &::-webkit-slider-thumb:hover {
        background: ${o.colors.onBg200};
    }

    &::-webkit-slider-thumb:active {
        background: ${o.colors.onBg400};
        border-color : ${o.colors.primary};
    }
    
`;var We=de`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;n("svg")`
  animation: ${We.animationName} 1s linear infinite;
`;var U=n("input")`
    width: 12em;
    font-size: max(16px, 1em);
    font-family: inherit;
    padding: 0.25em 0.5em;
    border: 2px solid ${o.colors.bg300};
    border-radius: 4px;
    transition: 180ms box-shadow ease-in-out;

    &:focus {
        border-color: ${o.colors.primary};
        box-shadow: 0 0 0 2px ${o.colors.primary100};
        outline: 3px solid transparent;
    }

    &:disabled {
        background-color: #eee;
        cursor: not-allowed;
    }
`,Je=n(U)`
    line-height: 1;
    height: 2rem;
`;n(Re)`

    border: 2px solid ${o.colors.bg300};
    border-radius: 4px;
    transition: 180ms box-shadow ease-in-out;

    &:has(input:focus) {
        border-color: ${o.colors.primary};
        box-shadow: 0 0 0 2px ${o.colors.primary100};
        outline: 3px solid transparent;
    }

    padding: 0.25em 0.5em;
    position: relative;
`;n("input")`
    background: transparent;
    border: 0;
    outline: 0;
    padding: 0.5em 0.5em;
    font-family: ${o.font.secondary};
`;n("span")`
    color : ${o.colors.onBg200};
    font-size : 0.8rem;
    margin-left : 0.25em;
`;n(U.withComponent("textarea"))`
    resize: vertical;
    height: 6rem;
`;export{Xe as A,Je as B,Re as C,Ke as H,Ze as I,qe as R,je as S,Ve as a,_e as b,o as c,Ee as d,Ue as e,Ge as g,Ye as o,n as s};

import{c as e,h as g,M as P,N as r,g as o,t as s,x as i,a,s as S,i as l,r as C,b as D,m as I}from"./entry-client-43b8437b.js";import{T,C as j,S as A,G as B}from"./GooglePlayIcon-3e3dcbb0.js";import{P as N}from"./PageContainer-4902de9e.js";const F=s('<img src="/apps/123mind/screenshots/demo (1).png" alt="Demo First" width="450">'),L=s("<div>"),z=s("<div><!#><!/><!#><!/><!#><!/>"),E=s("<span>Available Now"),O=s("<span>Download on Play Store"),G=s('<a href="https://play.google.com/store/apps/details?id=com.wakaztahir.mindnode" target="_blank">'),J=s("<h3>Draw Inside A MindMap"),u=s("<br>"),R=s("<p>If you ever want to make a note, Just draw it inside the MindMap. Drawing capabilities are just as strong as Sketchable, Our drawing App. Which started from 123Mind."),Y=s('<img src="/apps/123mind/screenshots/demo (2).png" alt="Demo Second" width="450">'),H=s('<img src="/apps/123mind/screenshots/demo (3).png" alt="Demo Third" width="450">'),W=s("<h3>Import Images"),q=s("<p>You can import images into your drawing and your MindMap. Just like you would do in Sketchable.");function se(){return e(N,{get children(){return[e(U,{get children(){return e(K,{get children(){return[e(g,{get size(){return P.Large},get style(){return{color:r.colors.onBg,"text-align":"center","margin-top":"-1em"}},children:"Meet 123Mind"}),e(g,{get style(){return{color:r.colors.onBg,"text-align":"center","margin-top":"0"}},children:"A MindMapping Tool"}),e(Q,{get children(){return o(F)}})]}})}}),e(V,{get children(){return[e(ee,{}),e(te,{}),e(X,{}),e(Z,{}),(()=>{const t=o(L);return t.style.setProperty("height","2em"),t})()]}})]}})}i("h2")`
    ${r.breakpoints.down("md")} {
        font-size: 2rem !important;
    }
`;const h=i("div")`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`,K=i(h)`
    padding-top: 2em;
    margin-bottom: 1em;

    ${r.breakpoints.up("sm")} {
        padding-top: 6em;
    }

    ${r.breakpoints.up("md")} {
        padding-top: 14em;
    }
`,Q=i("div")`
    position: absolute;
    top: 30em;
    transform: translateY(-50%);

    ${r.breakpoints.up("sm")} {
        top: 40em;
    }

    ${r.breakpoints.up("md")} {
        top: 60em;
    }
`,U=i("div")`
    width: 100%;
    height: 30em;
    position: relative;
    background: ${r.colors.bg200};

    ${r.breakpoints.up("sm")} {
        height: 40em;
    }

    ${r.breakpoints.up("md")} {
        height: 60em;
    }
`,V=i("div")`
    margin-top: 30em;
`,X=i(t=>(()=>{const n=o(z),x=n.firstChild,[m,b]=a(x.nextSibling),_=m.nextSibling,[p,w]=a(_.nextSibling),k=p.nextSibling,[M,v]=a(k.nextSibling);return S(n,t,!1,!0),l(n,e(c,{get children(){return[e(T,{}),e(d,{children:"Light / Dark Theme"})]}}),m,b),l(n,e(c,{get children(){return[e(j,{}),e(d,{children:"Cloud Auto Sync"})]}}),p,w),l(n,e(c,{get children(){return[e(A,{}),e(d,{children:"Local Backup"})]}}),M,v),C(),n})())`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    min-width: 60%;
    max-width: 80%;
    margin: 2em auto;

    ${r.breakpoints.up("md")} {
        flex-direction: row;
        justify-content: space-between;
    }
`,Z=()=>e(h,{get children(){return[(()=>{const t=o(E);return D(()=>r.colors.primary!=null?t.style.setProperty("color",r.colors.primary):t.style.removeProperty("color")),t})(),(()=>{const t=o(G);return t.style.setProperty("text-decoration","none"),l(t,e(re,{style:{width:"270px"},get children(){return[e(B,{}),(()=>{const n=o(O);return n.style.setProperty("width","100%"),n.style.setProperty("color","white"),n.style.setProperty("margin-left","1em"),n})()]}})),t})()]}}),ee=()=>e(y,{get children(){return[e($,{get children(){return[(()=>{const t=o(J);return t.style.setProperty("text-align","center"),t})(),o(u),(()=>{const t=o(R);return t.style.setProperty("text-align","center"),t})()]}}),e(f,{get children(){return o(Y)}})]}}),te=i(t=>e(y,I(t,{get children(){return[e(f,{get children(){return o(H)}}),e($,{get children(){return[(()=>{const n=o(W);return n.style.setProperty("text-align","center"),n})(),o(u),(()=>{const n=o(q);return n.style.setProperty("text-align","center"),n})()]}})]}})))`
    flex-direction: column-reverse;

    ${r.breakpoints.up("sm")} {
        flex-direction: row;
    }
`,c=i("div")`
    width: 12em;
    height: 2em;
    border-radius: 1.5em;
    padding: 1em;
    margin: 1em;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    border: 2px solid ${r.colors.primary};
`,d=i("span")`
    font-family: 'Roboto', 'sans-serif';
    padding-left: 1em;
    color: ${r.colors.primary};
`,re=i("button")`
    border-radius: 1.5em;
    height: 3.6em;
    text-align: center;
    text-decoration: none;
    opacity: 0.9;
    padding: 2em;
    border: 0;
    display: flex;
    flex-direction: row;
    align-items: center;
    cursor: pointer;
    margin: 0.5em;
    background: ${r.colors.primary};

    &:hover {
        opacity: 1;
    }
`,y=i("div")`
    display: flex;
    flex-direction: column;
    padding: 1em 4em;
    justify-content: center;
    align-items: center;

    ${r.breakpoints.up("sm")} {
        flex-direction: row;
    }
`,$=i("div")`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`,f=i("div")`

`;export{re as CustomMainButton,y as DemoContainer,f as DemoImage,$ as DemoText,c as FeatureBox,d as FeatureText,se as default};

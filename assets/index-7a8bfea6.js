import{c as e,h as g,M as S,N as r,g as i,t as s,x as o,a as l,s as C,i as a,r as D,b as T,m as z}from"./entry-client-43b8437b.js";import{T as M,C as j,S as I,G as Y}from"./GooglePlayIcon-3e3dcbb0.js";import{P as B}from"./PageContainer-4902de9e.js";const F=s('<img src="/apps/easytodo/screenshots/demo (1).png" alt="Demo First" width="450">'),L=s("<div>"),A=s("<div><!#><!/><!#><!/><!#><!/>"),N=s("<span>Available Now"),E=s("<span>Download on Play Store"),O=s('<a href="https://play.google.com/store/apps/details?id=com.wakaztahir.easytodo" target="_blank">'),G=s("<h3>Create Lists Fast"),u=s("<br>"),R=s("<p>Since easyToDo is literally easy, Its very fast to create tasks and lists on the app. You can create lists and tasks in a matter of seconds. You can also create subtasks and details for each task."),H=s('<img src="/apps/easytodo/screenshots/demo (2).png" alt="Demo Second" width="450">'),q=s('<img src="/apps/easytodo/screenshots/demo (3).png" alt="Demo Third" width="450">'),J=s("<h3>Organize and Prioritize"),K=s("<p>You can prioritize items, mark them as important and even add due dates. You can also organize your tasks into lists and even add colors to them. You can add reminder to each task. Tags for organization, Set repition of the reminder");function se(){return e(B,{get children(){return[e(V,{get children(){return e(Q,{get children(){return[e(g,{get size(){return S.Large},get style(){return{color:r.colors.onBg,"text-align":"center","margin-top":"-1em"}},children:"Meet easyToDo"}),e(g,{get style(){return{color:r.colors.onBg,"text-align":"center","margin-top":"0"}},children:"Task Management Tool"}),e(U,{get children(){return i(F)}})]}})}}),e(W,{get children(){return[e(ee,{}),e(te,{}),e(X,{}),e(Z,{}),(()=>{const t=i(L);return t.style.setProperty("height","2em"),t})()]}})]}})}o("h2")`
    ${r.breakpoints.down("md")} {
        font-size: 2rem !important;
    }
`;o("h1")`
    ${t=>r.breakpoints.down("md")} {
        font-size: 4rem !important;
    }
`;const h=o("div")`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`,Q=o(h)`
    padding-top: 2em;
    margin-bottom: 1em;

    ${r.breakpoints.up("sm")} {
        padding-top: 6em;
    }

    ${r.breakpoints.up("md")} {
        padding-top: 14em;
    }
`,U=o("div")`
    position: absolute;
    top: 30em;
    transform: translateY(-50%);

    ${r.breakpoints.up("sm")} {
        top: 40em;
    }

    ${r.breakpoints.up("md")} {
        top: 60em;
    }
`,V=o("div")`
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
`,W=o("div")`
    margin-top: 30em;
`,X=o(t=>(()=>{const n=i(A),x=n.firstChild,[m,b]=l(x.nextSibling),_=m.nextSibling,[p,k]=l(_.nextSibling),w=p.nextSibling,[v,P]=l(w.nextSibling);return C(n,t,!1,!0),a(n,e(c,{get children(){return[e(M,{}),e(d,{children:"Light / Dark Theme"})]}}),m,b),a(n,e(c,{get children(){return[e(j,{}),e(d,{children:"Cloud Auto Sync"})]}}),p,k),a(n,e(c,{get children(){return[e(I,{}),e(d,{children:"Local Backup"})]}}),v,P),D(),n})())`
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
`,Z=()=>e(h,{get children(){return[(()=>{const t=i(N);return T(()=>r.colors.primary!=null?t.style.setProperty("color",r.colors.primary):t.style.removeProperty("color")),t})(),(()=>{const t=i(O);return t.style.setProperty("text-decoration","none"),a(t,e(re,{style:{width:"270px"},get children(){return[e(Y,{}),(()=>{const n=i(E);return n.style.setProperty("width","100%"),n.style.setProperty("color","white"),n.style.setProperty("margin-left","1em"),n})()]}})),t})()]}}),ee=()=>e(y,{get children(){return[e($,{get children(){return[(()=>{const t=i(G);return t.style.setProperty("text-align","center"),t})(),i(u),(()=>{const t=i(R);return t.style.setProperty("text-align","center"),t})()]}}),e(f,{get children(){return i(H)}})]}}),te=o(t=>e(y,z(t,{get children(){return[e(f,{get children(){return i(q)}}),e($,{get children(){return[(()=>{const n=i(J);return n.style.setProperty("text-align","center"),n})(),i(u),(()=>{const n=i(K);return n.style.setProperty("text-align","center"),n})()]}})]}})))`
    flex-direction: column-reverse;

    ${r.breakpoints.up("sm")} {
        flex-direction: row;
    }
`,c=o("div")`
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
`,d=o("span")`
    font-family: 'Roboto', 'sans-serif';
    padding-left: 1em;
    color: ${r.colors.primary};
`,re=o("button")`
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
`,y=o("div")`
    display: flex;
    flex-direction: column;
    padding: 1em 4em;
    justify-content: center;
    align-items: center;

    ${r.breakpoints.up("sm")} {
        flex-direction: row;
    }
`,$=o("div")`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`,f=o("div")`

`;export{re as CustomMainButton,y as DemoContainer,f as DemoImage,$ as DemoText,c as FeatureBox,d as FeatureText,se as default};

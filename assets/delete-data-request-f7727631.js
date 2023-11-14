import{o as i,c as e,g as c,t as l,w as r}from"./entry-client-43b8437b.js";import{P as s}from"./PageContainer-4902de9e.js";const m=l('<div class="container"><h1>Account Removal Request</h1><div class="countdown">3</div><div class="message">Please send an email to <a class="email-link" href="mailto:wakazbix@gmail.com">wakazbix@gmail.com</a> to request removal of your account / data.'),u=r`
    .container {
        width : 100%;
        height : 100%;
        display : flex;
        flex-direction:column;
        padding : 8rem 0;
        align-items:center;
    }
    .countdown {
        font-size : 8rem;
    }
`;function w(){return i(()=>{function n(){let t=3;const o=document.querySelector(".countdown"),a=setInterval(function(){o.textContent=t.toString(),t--,t<0&&(clearInterval(a),window.location.href="mailto:wakazbix@gmail.com")},1e3)}n()}),e(s,{get children(){return[e(u,{}),c(m)]}})}export{w as default};

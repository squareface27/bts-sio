function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = []
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as m,o as r,c as a,k as t,a as h,a1 as R,a7 as u,a8 as _,p as y,q as $,e as b,n as E,a9 as F,aa as M,r as x,t as d,F as v,E as g,I as A,D as P,ab as N,v as C,ac as L,ad as U,ae as T,af as O,ag as j,ah as z,ai as B,aj as H,ak as Q,al as J,X as G,d as Y,u as K,j as W,z as X,am as Z,an as ee,ao as te,ap as ne}from"./chunks/framework.aGaNZw_P.js";import{t as se}from"./chunks/theme.Dpx2kKPt.js";const oe={name:"Contact",data(){return{submited:!1,lastname:"",firstname:"",email:"",message:""}},methods:{encode(e){return Object.keys(e).map(n=>encodeURIComponent(n)+"="+encodeURIComponent(e[n])).join("&")},handleSubmit(){fetch("/contact",{body:this.encode({"form-name":"contact",Nom:this.lastname,Prénom:this.firstname,Email:this.email,Message:this.message}),cache:"no-cache",method:"POST",mode:"cors",headers:{"Content-Type":"application/x-www-form-urlencoded"},referrer:"no-referrer"}).then(()=>{this.submited=!0}),this.submited=!0,this.lastname="",this.firstname="",this.email="",this.message=""}}},k=e=>(y("data-v-e723942c"),e=e(),$(),e),re={key:0,class:"container"},ae={class:"col center"},le=k(()=>t("br",null,null,-1)),ie=k(()=>t("br",null,null,-1)),ce=k(()=>t("p",{class:"hidden"},[t("label",null,[h("Don’t fill this out if you're human: "),t("input",{name:"field"})])],-1)),de=k(()=>t("input",{type:"hidden",name:"form-name",value:"contact"},null,-1)),ue={class:"container"},me={class:"col"},pe={class:"col"},_e={class:"container"},he={class:"col"},fe={class:"container"},ve={class:"col"},be=k(()=>t("div",{class:"container"},[t("div",{class:"col center"},[t("input",{type:"submit",value:"Envoyer",class:"btn btn-primary"})])],-1));function ge(e,n,l,c,s,i){return r(),a("div",null,[s.submited?(r(),a("div",re,[t("div",ae,[h(" Votre message a bien été envoyé. "),le,ie,t("input",{onClick:n[0]||(n[0]=o=>s.submited=!1),type:"button",value:"Retour",class:"btn btn-primary"})])])):(r(),a("form",{key:1,"data-netlify":"true",action:"post",name:"contact","netlify-honeypot":"field",onSubmit:n[5]||(n[5]=R((...o)=>i.handleSubmit&&i.handleSubmit(...o),["prevent"]))},[ce,de,t("div",ue,[t("div",me,[u(t("input",{"onUpdate:modelValue":n[1]||(n[1]=o=>s.lastname=o),class:"form-control",type:"text",name:"Nom",placeholder:"Nom *",required:""},null,512),[[_,s.lastname]])]),t("div",pe,[u(t("input",{"onUpdate:modelValue":n[2]||(n[2]=o=>s.firstname=o),class:"form-control",type:"text",name:"Prénom",placeholder:"Prénom *",required:""},null,512),[[_,s.firstname]])])]),t("div",_e,[t("div",he,[u(t("input",{"onUpdate:modelValue":n[3]||(n[3]=o=>s.email=o),class:"form-control",type:"email",name:"Email",placeholder:"Email *",required:""},null,512),[[_,s.email]])])]),t("div",fe,[t("div",ve,[u(t("textarea",{"onUpdate:modelValue":n[4]||(n[4]=o=>s.message=o),class:"form-control",rows:"10",name:"Message",placeholder:"Ma question / Mon message *",required:""},null,512),[[_,s.message]])])]),be],32))])}const ye=m(oe,[["render",ge],["__scopeId","data-v-e723942c"]]),$e={name:"ExternalIframe",props:{src:{required:!0},bordered:{type:Boolean,default:!1}},computed:{isFullScreenAvailable(){try{return document.fullscreenEnabled||document.mozFullScreenEnabled||document.documentElement.webkitRequestFullScreen}catch{return!0}}},methods:{requestFullscreen(e){e.requestFullscreen?e.requestFullscreen():e.mozRequestFullScreen?e.mozRequestFullScreen():e.webkitRequestFullScreen&&e.webkitRequestFullScreen(Element.ALLOW_KEYBOARD_INPUT),e.focus();try{ga("send","event","requestFullscreen",this.src)}catch{}}}},V=e=>(y("data-v-ee5101d4"),e=e(),$(),e),ke=["src"],we={class:"actions"},xe=V(()=>t("img",{src:F},null,-1)),Se=[xe],Ie=["href"],Ce=V(()=>t("img",{src:M},null,-1)),qe=[Ce];function Ae(e,n,l,c,s,i){return r(),a("div",{class:E({bordered:l.bordered})},[t("iframe",{src:l.src,frameborder:"0",ref:"iframe"},null,8,ke),t("div",we,[i.isFullScreenAvailable?(r(),a("button",{key:0,class:"action",onClick:n[0]||(n[0]=()=>i.requestFullscreen(e.$refs.iframe))},Se)):b("",!0),t("a",{class:"action",href:l.src,target:"_blank"},qe,8,Ie)])],2)}const q=m($e,[["render",Ae],["__scopeId","data-v-ee5101d4"]]),Pe={name:"NoBreak"};function Ne(e,n,l,c,s,i){return r(),a("div",null,[x(e.$slots,"default",{},void 0,!0)])}const Ve=m(Pe,[["render",Ne],["__scopeId","data-v-7ad3396c"]]),De={name:"NoPrint"};function Re(e,n,l,c,s,i){return r(),a("div",null,[x(e.$slots,"default",{},void 0,!0)])}const Ee=m(De,[["render",Re],["__scopeId","data-v-6046272a"]]),Fe={name:"Qcm",props:{data:Object,title:String},methods:{toggleState(e){e.target.getAttribute("checked")===null?e.target.setAttribute("checked",""):e.target.removeAttribute("checked")},print(){var e=window.open("","PRINT","height=400,width=600");e.document.write(`
<html>
    <head>
        <title>${document.title}</title>
        <style>
        .noPrint{
            display: none;
        }
        </style>
    </head>
    <body>
        ${this.$refs.container.innerHTML}
    </body>
</html>
    `),e.document.close(),e.focus(),e.print(),e.close()}}},Me=e=>(y("data-v-873b5bcc"),e=e(),$(),e),Le={class:"container",ref:"container"},Ue={class:"text-center noPrint"},Te=Me(()=>t("hr",null,null,-1));function Oe(e,n,l,c,s,i){return r(),a("div",Le,[t("h2",null,d(l.title?l.title:"QCM"),1),(r(!0),a(v,null,g(Object.keys(l.data),o=>(r(),a("div",null,[t("h4",null,d(o),1),t("ul",null,[(r(!0),a(v,null,g(l.data[o],I=>(r(),a("li",null,[t("label",null,[t("input",{type:"checkbox",onChange:n[0]||(n[0]=(...w)=>i.toggleState&&i.toggleState(...w))},null,32),h(" "+d(I),1)])]))),256))])]))),256)),t("div",Ue,[Te,t("button",{onClick:n[1]||(n[1]=(...o)=>i.print&&i.print(...o))},"Valider mes réponses")])],512)}const je=m(Fe,[["render",Oe],["__scopeId","data-v-873b5bcc"]]),ze={name:"reveal",data(){return{visible:!1}},props:{text:{default:"Click to reveal"}},methods:{requestReveal(){this.visible=!0;try{ga("send","event","requestReveal",window.location)}catch{}}}},Be={class:"click_reveal"},He={key:1};function Qe(e,n,l,c,s,i){return r(),a("div",Be,[s.visible?b("",!0):(r(),a("span",{key:0,onClick:n[0]||(n[0]=(...o)=>i.requestReveal&&i.requestReveal(...o))},d(l.text),1)),s.visible?(r(),a("div",He,[x(e.$slots,"default")])):b("",!0)])}const Je=m(ze,[["render",Qe]]),Ge={name:"Sample",components:{externalIframe:q},props:{src:{required:!0}},computed:{samplePath(){return`/demo/${this.src}/index.html`}}},Ye={class:"center"},Ke=["href"];function We(e,n,l,c,s,i){const o=P("ExternalIframe");return r(),a("div",null,[A(o,{src:i.samplePath},null,8,["src"]),t("div",Ye,[t("a",{target:"_blank",href:i.samplePath},"Ouvrir",8,Ke)])])}const Xe=m(Ge,[["render",We],["__scopeId","data-v-afaecb18"]]),Ze={name:"RevealDeck",components:{externalIframe:q},props:{src:{required:!0}},computed:{deckPath(){return`/cours/revealjs/index.html?source=${this.src}`}}};function et(e,n,l,c,s,i){const o=P("ExternalIframe");return r(),a("div",null,[A(o,{src:i.deckPath},null,8,["src"])])}const tt=m(Ze,[["render",et]]),nt={},st={class:"text-center"};function ot(e,n){return r(),a("div",st,[x(e.$slots,"default",{},void 0,!0)])}const rt=m(nt,[["render",ot],["__scopeId","data-v-7378cc8c"]]),at={name:"Urdle",watch:{selected:{immediate:!0,handler(){try{this.selected>0&&(fetch(`/urdle/${this.selected}/questions.html`).then(e=>e.text()).then(e=>this.details=e),fetch(`/urdle/${this.selected}/exercice.html`).then(e=>e.text()).then(e=>this.pratique=e.replace("{{ today }}",this.today)))}catch{}}}},mounted(){this.isValid||(this.selected=1);try{window&&(this.selected=window.location.hash.replace("#","")||1)}catch{}},computed:{canNext(){return this.selected<=this.levels.length-1},isValid(){return this.selected<=this.levels.length},today(){let e=new Date;return`${e.getDate()}/${e.getMonth()+1}/${e.getFullYear()}`}},data(){return{details:void 0,pratique:void 0,selected:1,levels:[...Array(11).keys()].map(e=>e+1)}}},S=e=>(y("data-v-222e1bdb"),e=e(),$(),e),lt={class:"container"},it={class:"col no-gap center"},ct=S(()=>t("option",{value:"-1"},"Consulter les exercices",-1)),dt=["value"],ut={class:"text-center"},mt=["src"],pt={class:"text-left custom-container tip"},_t=S(()=>t("p",{class:"custom-container-title"},"Dans cet exercice vous devez :",-1)),ht=["innerHTML"],ft={key:1},vt=S(()=>t("ul",null,[t("li",null,"Écrire le code (ou pseudo-code) permettant de définir les propriétés des classes proposées"),t("li",null,"Écrire 2 constructeurs (autre que celui par défaut) des classes proposés")],-1)),bt=[vt],gt={key:0,class:"text-left custom-container warning"},yt=S(()=>t("p",{class:"custom-container-title"},"Mise en pratique :",-1)),$t=["innerHTML"],kt={class:"container"},wt={class:"col center"};function xt(e,n,l,c,s,i){return r(),a("div",null,[t("div",lt,[t("div",it,[u(t("select",{"onUpdate:modelValue":n[0]||(n[0]=o=>s.selected=o),class:"form-select"},[ct,(r(!0),a(v,null,g(s.levels,o=>(r(),a("option",{value:o},"Jour "+d(o),9,dt))),256))],512),[[N,s.selected]])])]),s.selected>0&&i.isValid?(r(),a(v,{key:0},[t("div",ut,[t("img",{src:`/urdle/${s.selected}/uml.png`,alt:""},null,8,mt)]),t("div",pt,[_t,s.details?(r(),a("div",{key:0,innerHTML:s.details},null,8,ht)):(r(),a("div",ft,bt))]),s.pratique?(r(),a("div",gt,[yt,t("p",{innerHTML:s.pratique},null,8,$t)])):b("",!0)],64)):b("",!0),t("div",kt,[t("div",wt,[i.canNext?(r(),a("input",{key:0,onClick:n[1]||(n[1]=o=>s.selected++),type:"button",value:"Suivant",class:"btn btn-primary"})):(r(),a("input",{key:1,onClick:n[2]||(n[2]=o=>s.selected--),type:"button",value:"Précédent",class:"btn btn-primary"}))])])])}const St=m(at,[["render",xt],["__scopeId","data-v-222e1bdb"]]),It={name:"DebianConfiguration",updated(){try{localStorage.setItem("DebianConfiguration",JSON.stringify(this.$data))}catch{}},beforeMount(){try{const e=JSON.parse(localStorage.getItem("DebianConfiguration"));e&&(this.vlan=e.vlan,this.interface=e.interface,this.ip=e.ip,this.netmask=e.netmask,this.gateway=e.gateway,this.dns=e.dns)}catch{}},watch:{vlan(){this.vlan?(this.ip=`192.168.${this.vlan-400}.1`,this.netmask="255.255.0.0",this.gateway=`192.168.${this.vlan-400}.254`):(this.ip="",this.gateway="",this.netmask="")}},data(){return{vlans:{400:Array.from({length:99},(e,n)=>401+n),500:Array.from({length:99},(e,n)=>501+n),600:Array.from({length:99},(e,n)=>601+n)},vlan:"",interface:"ens18",ip:"192.168.1.1",netmask:"255.255.0.0",gateway:"192.168.1.254",dns:"192.168.10.1"}}},p=e=>(y("data-v-21feccca"),e=e(),$(),e),Ct={class:"container"},qt={class:"col"},At=p(()=>t("label",null,"Interface :",-1)),Pt={class:"col"},Nt=p(()=>t("label",null,"VLAN :",-1)),Vt=p(()=>t("option",{value:""},"Choisissez un VLAN",-1)),Dt=["label"],Rt=["value"],Et=p(()=>t("a",{href:"https://192.168.10.9/course/view.php?id=58"},"Retrouvez votre VLAN (Lycée Chevrollier)",-1)),Ft={class:"container"},Mt={class:"col"},Lt=p(()=>t("label",null,"IP :",-1)),Ut={class:"col"},Tt=p(()=>t("label",null,"Masque de sous réseau :",-1)),Ot={class:"container"},jt={class:"col"},zt=p(()=>t("label",null,"Passerelle :",-1)),Bt={class:"col"},Ht=p(()=>t("label",null,"Serveur De Nom (DNS) :",-1)),Qt=p(()=>t("h3",null,"Fichier de configuration :",-1)),Jt=p(()=>t("code",null,"/etc/network/interfaces",-1)),Gt={class:"language-bash","data-ext":"sh"},Yt={class:"language-bash"},Kt=p(()=>t("div",{class:"custom-container tip"},[t("p",{class:"custom-container-title"},"Une configuration à recopier"),t("p",null,[h(" Dans certains cas vous ne pouvez pas copier/coller, vous pouvez juste prendre la partie "),t("code",null,"address"),h(" et "),t("code",null,"gateway"),h(". ")])],-1));function Wt(e,n,l,c,s,i){return r(),a("div",null,[t("div",Ct,[t("div",qt,[At,u(t("input",{"onUpdate:modelValue":n[0]||(n[0]=o=>s.interface=o),class:"form-control",type:"text",name:"Interface",placeholder:"ens18 (eth0, …)",required:""},null,512),[[_,s.interface]])]),t("div",Pt,[Nt,u(t("select",{class:"form-control","onUpdate:modelValue":n[1]||(n[1]=o=>s.vlan=o)},[Vt,(r(!0),a(v,null,g(s.vlans,(o,I)=>(r(),a("optgroup",{label:`VLAN ${I}`},[(r(!0),a(v,null,g(o,w=>(r(),a("option",{value:w},"VLAN "+d(w),9,Rt))),256))],8,Dt))),256))],512),[[N,s.vlan]]),Et])]),t("div",Ft,[t("div",Mt,[Lt,u(t("input",{"onUpdate:modelValue":n[2]||(n[2]=o=>s.ip=o),class:"form-control",type:"text",name:"Adresse IP",placeholder:"192.168…",required:""},null,512),[[_,s.ip]])]),t("div",Ut,[Tt,u(t("input",{"onUpdate:modelValue":n[3]||(n[3]=o=>s.netmask=o),class:"form-control",type:"text",name:"Masque de sous réseau",placeholder:"255.255…",required:""},null,512),[[_,s.netmask]])])]),t("div",Ot,[t("div",jt,[zt,u(t("input",{"onUpdate:modelValue":n[4]||(n[4]=o=>s.gateway=o),class:"form-control",type:"text",name:"Passerelle",placeholder:"192.168…",required:""},null,512),[[_,s.gateway]])]),t("div",Bt,[Ht,u(t("input",{"onUpdate:modelValue":n[5]||(n[5]=o=>s.dns=o),class:"form-control",type:"text",name:"DNS",placeholder:"192.168…",required:""},null,512),[[_,s.dns]])])]),Qt,h(" Fichier à éditer (avec nano ou vim) : "),Jt,t("div",Gt,[t("pre",Yt,[t("code",null,`source /etc/network/interfaces.d/*

# Configuration de l'interface de loopback
auto lo
iface lo inet loopback

# Configuration de votre Interface
allow-hotplug `+d(s.interface)+`

# Configuration pour le VLAN `+d(s.vlan)+`
# Generation depuis cours.brosseau.ovh
auto `+d(s.interface)+`
iface `+d(s.interface)+` inet static
    address `+d(s.ip)+`
    netmask `+d(s.netmask)+`
    gateway `+d(s.gateway)+`
    dns-nameservers `+d(s.dns),1)])]),Kt])}const Xt=m(It,[["render",Wt],["__scopeId","data-v-21feccca"]]),Zt={extends:se,enhanceApp({app:e}){e.component("Contact",ye),e.component("ExternalIframe",q),e.component("NoBreak",Ve),e.component("NoPrint",Ee),e.component("Qcm",je),e.component("Reveal",Je),e.component("Sample",Xe),e.component("SlidesDeck",tt),e.component("center",rt),e.component("Urdle",St),e.component("DebianConfiguration",Xt)}};function D(e){if(e.extends){const n=D(e.extends);return{...n,...e,async enhanceApp(l){n.enhanceApp&&await n.enhanceApp(l),e.enhanceApp&&await e.enhanceApp(l)}}}return e}const f=D(Zt),en=Y({name:"VitePressApp",setup(){const{site:e}=K();return W(()=>{X(()=>{document.documentElement.lang=e.value.lang,document.documentElement.dir=e.value.dir})}),e.value.router.prefetchLinks&&Z(),ee(),te(),f.setup&&f.setup(),()=>ne(f.Layout)}});async function tn(){const e=sn(),n=nn();n.provide(U,e);const l=T(e.route);return n.provide(O,l),n.component("Content",j),n.component("ClientOnly",z),Object.defineProperties(n.config.globalProperties,{$frontmatter:{get(){return l.frontmatter.value}},$params:{get(){return l.page.value.params}}}),f.enhanceApp&&await f.enhanceApp({app:n,router:e,siteData:B}),{app:n,router:e,data:l}}function nn(){return H(en)}function sn(){let e=C,n;return Q(l=>{let c=J(l),s=null;return c&&(e&&(n=c),(e||n===c)&&(c=c.replace(/\.js$/,".lean.js")),s=G(()=>import(c),__vite__mapDeps([]))),C&&(e=!1),s},f.NotFound)}C&&tn().then(({app:e,router:n,data:l})=>{n.go().then(()=>{L(n.route,l.site),e.mount("#app")})});export{tn as createApp};

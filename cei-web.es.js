import{u as n,p as e,c as t,L as i,h as o}from"./index.js";var r=Object.defineProperty,a=Object.getOwnPropertyDescriptor,s=(n,e,t,i)=>{for(var o,s=i>1?void 0:i?a(e,t):e,l=n.length-1;l>=0;l--)(o=n[l])&&(s=(i?o(e,t,s):o(s))||s);return i&&s&&r(e,t,s),s};let l=class extends i{constructor(){super(...arguments),this.imageUrl="https://via.placeholder.com/550",this.title="Title",this.content="lorem ipsum dolor sit amet consectetur"}render(){return o`
    <div id="top-card">
      <img 
        src=${this.imageUrl} 
        alt='picture related to ${this.title}'/>
    </div>
    <div id="bottom-card">
      <h1>${this.title}</h1>
      <p>${this.content}</p>
    </div>
    `}};l.styles=n('@import url("https://fonts.googleapis.com/css?family=Chivo:300,300i,400,400i,700,700i,900,900i|Saira+Extra+Condensed:100,200,300,400,500,600,700,800|Saira:100,200,300,400,500,600,700,800");\n:host {\n  transition: 1s;\n  transform: scale(1);\n  box-shadow: 0px 5px 10px 10px rgba(0, 0, 0, 0.1019607843);\n  display: flex;\n  flex-direction: column;\n  justify-content: space-around;\n  width: 15vw;\n  max-width: 15vw;\n  height: 17vw;\n  color: whitesmoke;\n}\n@media (max-width: 390px) {\n  :host {\n    width: 50vw;\n    max-width: 50vw;\n    height: 50vw;\n  }\n}\n:host #top-card {\n  border-radius: 15px 15px 0 0;\n  overflow: hidden;\n  background-color: #4F5384;\n  object-fit: cover;\n  height: 33.3333333333vw;\n  max-height: 33.3333333333vw;\n}\n:host #top-card img {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n}\n:host #bottom-card {\n  background-color: #393C5C;\n  border-radius: 0 0 15px 15px;\n  overflow: hidden;\n  height: 16.6666666667vw;\n  max-height: 16.6666666667vw;\n  padding: 1em;\n  color: whitesmoke;\n}\n:host #bottom-card h1 {\n  font-size: 1.5em;\n  margin: 0;\n}\n:host #bottom-card p {\n  font-size: 1em;\n  margin: 0;\n}\n:host(:hover) {\n  box-shadow: 0 0 20px 0px rgba(0, 0, 0, 0.35);\n  transform: scale(1.1);\n}'),s([e({type:String})],l.prototype,"imageUrl",2),s([e({type:String})],l.prototype,"title",2),s([e({type:String})],l.prototype,"content",2),l=s([t("cei-card")],l);var m=Object.defineProperty,d=Object.getOwnPropertyDescriptor,h=(n,e,t,i)=>{for(var o,r=i>1?void 0:i?d(e,t):e,a=n.length-1;a>=0;a--)(o=n[a])&&(r=(i?o(e,t,r):o(r))||r);return i&&r&&m(e,t,r),r};let c=class extends i{constructor(){super(...arguments),this.items=[],this.looping=!1,this.offset=0,this.firstIndex=0}connectedCallback(){super.connectedCallback(),this.items=[{m_name:"Loïc Defossé",m_job:"Dévloppement de simulateurs pour satellites"},{m_name:"Samthann Vanden Steen",m_job:"Retail Specialist, Senior IT Business Analyst (Consulting)"},{m_name:"Morgan Mghari",m_job:"Expert endpoint manager (SCCM)"},{m_name:"Marco Bianchin",m_job:"Délégué syndical officier d'un conseil d'entreprise européen d'une grande institution financière internationale"},{m_name:"Arnaud Catoir",m_job:"Développeur spécialisé en traitement d'images"},{m_name:"Nathan Van Dyck",m_job:"Développeur web fullstack/front-end"},{m_name:"Gary Vanbever",m_job:"Incident Management Officer"},{m_name:"Julie Pisarki",m_job:"Software engineer"},{m_name:"Alexia Horga",m_job:"Digital engineering consultant"},{m_name:"Nathan Van Dyck",m_job:"Développeur web fullstack/front-end"},{m_name:"Bryan Bartoloni",m_job:"Développeur front end / UX designer"},{m_name:"Boris Descartes",m_job:"Software engineer"}],window.addEventListener("resize",this.initiateContainers)}disconnectedCallback(){super.disconnectedCallback(),window.removeEventListener("resize",this.initiateContainers)}render(){return o`
      <button class="btn-prev" @click=${()=>this.move("left")}> < </button>
      <div id="member">
        ${this.items.map((({m_job:n,m_name:e})=>o`
            <article>
              <img src='src/assets/pictures/${e}.jpg' onerror="this.src='https://via.placeholder.com/550'" />
              <div class='info'>
                <h3>${e}</h3>
                <p>${n}</p>
              </div>
            </article>
          `))}
      </div>
      <button class="btn-next" @click=${()=>this.move("right")}> > </button>
    `}initiateContainers(){}move(n){const e=this.shadowRoot.getElementById("member"),t=getComputedStyle(this),i=parseFloat(t.getPropertyValue("--item-margin")),o=parseFloat(t.getPropertyValue("--item-width"))+2*i;if(this.looping){const t=e.querySelectorAll("article"),i=t.length-1;this.firstIndex="left"===n?0===this.firstIndex?i:this.firstIndex-1:this.firstIndex===i?0:this.firstIndex+1;for(let n=this.firstIndex;n<t.length;n++)t[n].style.transform=`translateX(-${o*this.firstIndex}px)`;for(let n=0;n<this.firstIndex;n++)t[n].style.transform=`translateX(${o*(t.length-this.firstIndex)}px)`}else{const t=o*this.items.length-e.clientWidth;this.offset="left"===n?this.offset-o>=0?this.offset-o:0:this.offset+o>t?t:this.offset+o}this.style.setProperty("--item-offset",`${this.offset}px`),console.log(this.offset)}};c.styles=n('@import url("https://fonts.googleapis.com/css?family=Chivo:300,300i,400,400i,700,700i,900,900i|Saira+Extra+Condensed:100,200,300,400,500,600,700,800|Saira:100,200,300,400,500,600,700,800");\nhtml body {\n  background-color: #24263B;\n  margin: 0;\n  padding: 0;\n  overflow-x: clip;\n}\nhtml body cei-header {\n  width: 100vw;\n  position: sticky;\n  top: 0;\n}\nhtml body cei-member {\n  margin: 5vh 5%;\n}\nhtml body #hero {\n  top: 4em;\n  left: 0;\n  height: calc(100vh - 4em);\n  width: 100%;\n  display: flex;\n  pointer-events: none;\n}\nhtml body #hero img {\n  position: absolute;\n  margin: auto;\n  width: 40%;\n  left: 50%;\n  transform: translate(-50%, -50%) scale(0.8);\n  top: 50vh;\n}\nhtml body #hero img#logoTxt {\n  animation: rotation 440s infinite linear;\n}\n@keyframes rotation {\n  from {\n    transform: translate(-50%, -50%) scale(1) rotate(0deg);\n  }\n  to {\n    transform: translate(-50%, -50%) scale(1) rotate(359deg);\n  }\n}\n@media (max-width: 390px) {\n  html body #hero img {\n    margin-top: 30%;\n    width: 80%;\n  }\n}\nhtml body main {\n  background-color: #24263B;\n}\nhtml body main #cardHolder {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: space-evenly;\n  align-items: center;\n  margin: 0 12.5vw;\n}\nhtml body main #cardHolder > * {\n  margin: 2.5vh 4.6875vw;\n}\n@media (max-width: 390px) {\n  html body main #cardHolder > * {\n    margin: 2.5vh 25%;\n  }\n}\n:host {\n  --item-margin: 10px;\n  --item-offset: 0px;\n  --item-width: 300px;\n  display: flex;\n  flex-direction: row;\n  font: "Chivo", sans-serif;\n  color: whitesmoke;\n}\n.btn-next,\n.btn-prev {\n  background: none;\n  border: 0;\n  color: #FFD42A;\n  cursor: pointer;\n  font-size: 36px;\n  outline: none;\n}\n.hidden {\n  visibility: hidden;\n}\n#member {\n  display: flex;\n  flex: 1;\n  overflow: hidden;\n  position: relative;\n  height: 500px;\n}\n#member::after {\n  background: linear-gradient(to right, #24263B 0%, transparent 3%, transparent 97%, #24263B 100%);\n  content: "";\n  position: absolute;\n  height: 100%;\n  width: 100%;\n}\n#member article {\n  box-shadow: 0 0 0 1px rgba(63, 63, 68, 0.05), 0 1px 3px 0 rgba(63, 63, 68, 0.15);\n  box-sizing: border-box;\n  flex-shrink: 0;\n  margin: var(--item-margin);\n  padding: 10px;\n  /* width + left and right margins */\n  transform: translateX(calc(-1 * var(--item-offset)));\n  transition: transform 300ms;\n  width: var(--item-width);\n}\n#member article img {\n  width: 100%;\n  margin: auto;\n  border-radius: 100%;\n}\n#member article .info {\n  border: 2px solid #FFD42A;\n  background-color: #393C5C;\n  border-radius: 15px;\n  height: 8em;\n  padding: 0 1em;\n}'),h([e()],c.prototype,"items",2),h([e()],c.prototype,"looping",2),h([e()],c.prototype,"offset",2),h([e()],c.prototype,"firstIndex",2),c=h([t("cei-member")],c),document.querySelector("#header").links=[{label:"Acceuil",urlLink:"#header"},{label:"Historique",urlLink:"./src/pages/historique.html"},{label:"Photos",urlLink:"./src/pages/photos.html"}];

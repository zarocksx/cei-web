import{unsafeCSS as t,property as e,customElement as n,LitElement as r,html as o}from"lit-element";var i=Object.defineProperty,a=Object.getOwnPropertyDescriptor,s=(t,e,n,r)=>{for(var o,s=r>1?void 0:r?a(e,n):e,l=t.length-1;l>=0;l--)(o=t[l])&&(s=(r?o(e,n,s):o(s))||s);return r&&s&&i(e,n,s),s};let l=class extends r{constructor(){super(...arguments),this.links=[]}render(){return o`
      <div id="link-container">
        ${this.links.map((t=>o`
          <a href=${t.urlLink}>${t.label}</a>
        `))}
      </div>
      <img
        src="src/assets/svg/favicon.svg"
        alt="logo du CEI"
      />
    `}};l.styles=t(':host {\n  display: flex;\n  margin: 0;\n  padding: 0;\n  width: 100%;\n  box-shadow: 0px 5px 10px 10px rgba(0, 0, 0, 0.1019607843);\n  background-color: #24263B;\n  height: 4em;\n  flex-direction: row-reverse;\n  align-items: center;\n  justify-content: space-between;\n}\n:host img {\n  background-size: cover;\n  height: calc(100% - 0.75em);\n  margin: 1.25em;\n  filter: saturate(0%);\n}\n:host #link-container {\n  display: flex;\n  flex-wrap: wrap;\n}\n:host a {\n  text-decoration: none;\n  color: whitesmoke;\n  font-size: 1.75em;\n  margin: 0 0.5em;\n  transition: all 0.2s ease;\n  display: block;\n  position: relative;\n  padding: 0.2em 0;\n}\n:host a::after {\n  content: "";\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  width: 100%;\n  height: 0.1em;\n  background-color: #FFD42A;\n  opacity: 0;\n  transition: opacity 300ms, transform 300ms;\n}\n:host a:hover::after, :host a:focus::after {\n  opacity: 1;\n  transform: translate3d(0, 0.2em, 0);\n}\n@media (max-width: 390px) {\n  :host a {\n    font-size: 1em;\n    margin: 0 0.25em;\n  }\n}'),s([e({type:Array})],l.prototype,"links",2),l=s([n("cei-header")],l);var c=Object.defineProperty,d=Object.getOwnPropertyDescriptor,h=(t,e,n,r)=>{for(var o,i=r>1?void 0:r?d(e,n):e,a=t.length-1;a>=0;a--)(o=t[a])&&(i=(r?o(e,n,i):o(i))||i);return r&&i&&c(e,n,i),i};let p=class extends r{constructor(){super(...arguments),this.imageUrl="https://via.placeholder.com/550",this.title="title",this.content="lorem ipsum dolor sit amet consectetur"}render(){return o`
    <div id="top-card">
      <img 
        src=${this.imageUrl} 
        alt='picture related to ${this.title}'/>
    </div>
    <div id="bottom-card">
      <h1>${this.title}</h1>
      <p>${this.content}</p>
    </div>
    `}};p.styles=t(":host {\n  display: flex;\n  flex-direction: column;\n  justify-content: space-around;\n  width: 10vw;\n  max-width: 10vw;\n}\n:host #top-card {\n  border-radius: 15px 15px 0 0;\n  overflow: hidden;\n  background-color: #4F5384;\n  object-fit: cover;\n  max-height: 10vw;\n}\n:host #top-card img {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n}\n:host #bottom-card {\n  background-color: #393C5C;\n  border-radius: 0 0 15px 15px;\n  overflow: hidden;\n  height: 10em;\n  padding: 1em;\n  color: whitesmoke;\n}"),h([e({type:String})],p.prototype,"imageUrl",2),h([e({type:String})],p.prototype,"title",2),h([e({type:String})],p.prototype,"content",2),p=h([n("cei-card")],p),document.querySelector("#header").links=[{label:"Acceuil",urlLink:"#header"},{label:"Historique",urlLink:"./pages/historique.html"},{label:"Photos",urlLink:"./pages/photos.html"}];

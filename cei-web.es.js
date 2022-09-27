import{u as t,p as e,c as n,L as i,h as o}from"./index.js";var r=Object.defineProperty,s=Object.getOwnPropertyDescriptor,a=(t,e,n,i)=>{for(var o,a=i>1?void 0:i?s(e,n):e,h=t.length-1;h>=0;h--)(o=t[h])&&(a=(i?o(e,n,a):o(a))||a);return i&&a&&r(e,n,a),a};let h=class extends i{constructor(){super(...arguments),this.imageUrl="https://via.placeholder.com/550",this.title="Title",this.content="lorem ipsum dolor sit amet consectetur"}render(){return o`
    <div id="top-card">
      <img 
        src=${this.imageUrl} 
        alt='picture related to ${this.title}'/>
    </div>
    <div id="bottom-card">
      <h1>${this.title}</h1>
      <p>${this.content}</p>
    </div>
    `}};h.styles=t('@import url("https://fonts.googleapis.com/css?family=Chivo:300,300i,400,400i,700,700i,900,900i|Saira+Extra+Condensed:100,200,300,400,500,600,700,800|Saira:100,200,300,400,500,600,700,800");\n:host {\n  display: flex;\n  flex-direction: column;\n  justify-content: space-around;\n  width: 15vw;\n  max-width: 15vw;\n  height: 17vw;\n  color: whitesmoke;\n}\n@media (max-width: 390px) {\n  :host {\n    width: 50vw;\n    max-width: 50vw;\n    height: 50vw;\n  }\n}\n:host #top-card {\n  border-radius: 15px 15px 0 0;\n  overflow: hidden;\n  background-color: #4F5384;\n  object-fit: cover;\n  height: 33.3333333333vw;\n  max-height: 33.3333333333vw;\n}\n:host #top-card img {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n}\n:host #bottom-card {\n  background-color: #393C5C;\n  border-radius: 0 0 15px 15px;\n  overflow: hidden;\n  height: 16.6666666667vw;\n  max-height: 16.6666666667vw;\n  padding: 1em;\n  color: whitesmoke;\n}\n:host #bottom-card h1 {\n  font-size: 1.5em;\n  margin: 0;\n}\n:host #bottom-card p {\n  font-size: 1em;\n  margin: 0;\n}'),a([e({type:String})],h.prototype,"imageUrl",2),a([e({type:String})],h.prototype,"title",2),a([e({type:String})],h.prototype,"content",2),h=a([n("cei-card")],h),document.querySelector("#header").links=[{label:"Acceuil",urlLink:"#header"},{label:"Historique",urlLink:"./src/pages/historique.html"},{label:"Photos",urlLink:"./src/pages/photos.html"}];

import"./historique.js";import{u as n,p as t,c as e,L as a,h as i}from"./index.js";var o=Object.defineProperty,r=Object.getOwnPropertyDescriptor,l=(n,t,e,a)=>{for(var i,l=a>1?void 0:a?r(t,e):t,m=n.length-1;m>=0;m--)(i=n[m])&&(l=(a?i(t,e,l):i(l))||l);return a&&l&&o(t,e,l),l};let m=class extends a{constructor(){super(...arguments),this.images=[]}render(){return i`
      <div class="container">
        ${this.images.map((n=>i`
            <div class="image_container ${n.isWide?"image-wide":null}">
              <img src=${n.url} alt=${n.alt} loading="lazy" />
            </div>
          `))}
      </div>
    `}};m.styles=n('@import url("https://fonts.googleapis.com/css?family=Chivo:300,300i,400,400i,700,700i,900,900i|Saira+Extra+Condensed:100,200,300,400,500,600,700,800|Saira:100,200,300,400,500,600,700,800");\nhtml body {\n  background-color: #24263B;\n  margin: 0;\n  padding: 0;\n  overflow-x: clip;\n}\nhtml body cei-header {\n  width: 100vw;\n  position: sticky;\n  top: 0;\n}\nhtml body cei-member {\n  margin: 5vh 5%;\n}\nhtml body #hero {\n  top: 4em;\n  left: 0;\n  height: calc(100vh - 4em);\n  width: 100%;\n  display: flex;\n  pointer-events: none;\n}\nhtml body #hero img {\n  position: absolute;\n  margin: auto;\n  width: 40%;\n  left: 50%;\n  transform: translate(-50%, -50%) scale(0.8);\n  top: 50vh;\n}\nhtml body #hero img#logoTxt {\n  animation: rotation 440s infinite linear;\n}\n@keyframes rotation {\n  from {\n    transform: translate(-50%, -50%) scale(1) rotate(0deg);\n  }\n  to {\n    transform: translate(-50%, -50%) scale(1) rotate(359deg);\n  }\n}\n@media (max-width: 390px) {\n  html body #hero img {\n    margin-top: 30%;\n    width: 80%;\n  }\n}\nhtml body main {\n  background-color: #24263B;\n}\nhtml body main #cardHolder {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: space-evenly;\n  align-items: center;\n  margin: 0 12.5vw;\n}\nhtml body main #cardHolder > * {\n  margin: 2.5vh 4.6875vw;\n}\n@media (max-width: 390px) {\n  html body main #cardHolder > * {\n    margin: 2.5vh 25%;\n  }\n}\n:host .container {\n  display: grid;\n  gap: 1rem;\n  grid-template-columns: repeat(auto-fit, minmax(15em, 1fr));\n  grid-auto-rows: 15.5em;\n  padding: 10px;\n  height: calc(100vh - 12em);\n}\n:host * {\n  padding: 0;\n  margin: 0;\n  box-sizing: border-box;\n}\n:host .image_container img {\n  width: 100%;\n  height: 100%;\n  box-shadow: 0px 5px 10px 10px rgba(0, 0, 0, 0.1019607843);\n  object-fit: cover;\n}\n@media screen and (min-width: 768px) {\n  :host .image-tall {\n    grid-row: span 2/auto;\n  }\n  :host .image-wide {\n    grid-column: span 2/auto;\n  }\n}'),l([t()],m.prototype,"images",2),m=l([e("cei-mosaic")],m);var d=document.querySelector("#mosaic");document.querySelector("#header").links=[{label:"Acceuil",urlLink:"../../index.html"},{label:"Historique",urlLink:"./historique.html"},{label:"Photos",urlLink:"./photos.html"}],d.images=[{alt:"dummy",url:"https://via.placeholder.com/550"},{alt:"dummy",url:"https://via.placeholder.com/750",isWide:!0},{alt:"dummy",url:"https://via.placeholder.com/550"},{alt:"dummy",url:"https://via.placeholder.com/550",isWide:!0},{alt:"dummy",url:"https://via.placeholder.com/550"},{alt:"dummy",url:"https://via.placeholder.com/550"},{alt:"dummy",url:"https://via.placeholder.com/550"},{alt:"dummy",url:"https://via.placeholder.com/550"},{alt:"dummy",url:"https://via.placeholder.com/550"},{alt:"dummy",url:"https://via.placeholder.com/550"},{alt:"dummy",url:"https://via.placeholder.com/550"},{alt:"dummy",url:"https://via.placeholder.com/550"},{alt:"dummy",url:"https://via.placeholder.com/550",isWide:!0}];

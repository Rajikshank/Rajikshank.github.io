heading = document.getElementsByClassName("dynamic-content-container");
navitems = document.getElementsByClassName("nav-items");

// heading.addEventListener('')
const projects = [
  {
    title: "chat app",
    image:
      "https://github.com/Rajikshank/Cloud_application_development/raw/master/git.png?raw=true",
  },
  {
    title: "ecommerce-app",
    image:
      "https://github.com/Rajikshank/Cloud_application_development/raw/master/git.png?raw=true",
  },
  {
    title: "blood bank management app",
    image:
      "https://github.com/Rajikshank/Cloud_application_development/raw/master/git.png?raw=true",
  },{
    title: "Ai Powered Todo",
    image:
      "https://github.com/Rajikshank/Cloud_application_development/raw/master/git.png?raw=true",
  },
];

function changeContent(name) {
  switch (name) {
    case "Education Backround":
      heading[0].innerHTML = `                            <div class="education-main-container"> 

                <div class="timeline-bar">
                
                  <div class="education-content-container">
                
                    <div class="element-container">
                      <div class="white-dot"></div>

                  
                      <div class="text-container">
                      <h4> Bsc(Hons) Software engineering </h2>
                     
                     <p>sri lanka technological campus (2020-2024)
          
                     </p>
                      </div> 
                      </div>
                     
                
                      <div class="element-container">
                        <div class="white-dot"></div>
                        <div class="text-container">
                          <h4> Advanced level </h2>
                         
                         <p>Bt/Hinducollege Batticaloa 
              
                         </p>
                          </div> 
                      
                        </div>
                        
                  
                 
    
          </div>
                </div>
                
             
    </div>`;
      console.log("education clicked");
      break;
    case "My Projects":
      heading[0].innerHTML = "<div class='card-container' > </div>";
      let projectdiv = document.querySelector(".card-container");
      let elem=""
      projects.forEach((item) => {
         elem += `<div class='project-card-element'> 
        
        <img  src=${item.image} />
        <p> ${item.title} </p>
        </div>`;
        
      });
      projectdiv.innerHTML=elem;
      break;
      //   heading[0].innerHTML = `  <div class="project container">

      //  </div>`;
      console.log("project clicked");
  }
}

console.log(navitems);

for (let child of navitems[0].children) {
  child.addEventListener("click", () => changeContent(child.innerText));
  console.log(child);
}

let va = {
  name: "raji",
  fsn: () => {
    console.log(this);
  },
};

let arr = [1, 2, 34];

console.log(va);
console.log(arr);
va.fsn();

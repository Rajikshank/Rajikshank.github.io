heading = document.getElementsByClassName("dynamic-content-container");
navitems = document.getElementsByClassName("nav-items");

// heading.addEventListener('')

function changeContent(name) {
  switch (name) {
    case "Education Backround":
      heading[0].innerHTML = `              <div class="education-main-container"> 

                <div class="timeline-bar">
                
                  <div class="education-content-container">
                
                    <div class="element-container">
                      <div class="white-dot"></div>

                  
                      <div class="text-container">
                      <h4> Bsc(Hons)Software engineering </h2>
                     
                     <p>sri lanka techno
          
                     </p>
                      </div> 
                      </div>
                     
                
                      <div class="element-container">
                        <div class="white-dot"></div>
                        <h4> Advanced Level </h2>
                      
                        </div>
                        
                  
                 
    
          </div>
                </div>
                
             
    </div>`;
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

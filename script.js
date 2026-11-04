//1
  document.getElementById('f').addEventListener('submit', function(e) {
    e.preventDefault(); 
    
    const confirmation = document.getElementById("mess");
        const uname = document.getElementById("name").value;
    const email = document.getElementById("email").value;
   const birthYear = parseInt(document.getElementById("birth-year").value);
const age = 2026 - birthYear;

let discountMsg = "";
if (age <= 25) {
    discountMsg = " You qualify for a student discount!";
} else if (age >= 60) {
    discountMsg = " You qualify for a senior discount!";
}
const msg = `Thank you for visiting, ${uname}. We will contact you at ${email}. You are ${age} years old.${discountMsg}`;
confirmation.innerText = msg;
    
    alert("Feedback submitted!");
  });    


//2rows
  const rows =document.querySelectorAll("#t");
  rows.forEach(row=>{
row.addEventListener("mouseover",function(){
  this.style.backgroundColor='#e9967a';
});
row.addEventListener("mouseout",function(){
this.style.backgroundColor='#ffffff';
});
  })
    

//3mode

const toggleBtn = document.getElementById("toggle");

toggleBtn.addEventListener("click", function () {
    document.body.classList.toggle("dark-mode");

    if (document.body.classList.contains("dark-mode")) {
        this.value = "Light Mode";
    } else {
        this.value = "Dark Mode";
    }
});   

//4 disc


const textarea = document.getElementById('special-notes');
  const counter = document.getElementById('char-counter');
  const maxLength = parseInt(textarea.getAttribute('maxlength'), 10);

  textarea.addEventListener('input', () => {
    const remaining = maxLength - textarea.value.length;
    counter.textContent = `${remaining} characters remaining`;
  });
 


//checkbox
const items = document.querySelectorAll(".item");
const total = document.getElementById("total");

items.forEach(function(item) {
    item.addEventListener("change", function() {
        let sum = 0;

        items.forEach(function(item) {
            if (item.checked) {
                sum += Number(item.value);
            }
        });

        total.textContent = "Total Rs: " + sum;
    });
});



//time
            const currentHour = new Date().getHours();
            const statusBanner = document.getElementById('status-banner');
         const openHour = 8;
            const closeHour = 17;

            if (currentHour >= openHour && currentHour < closeHour) {
                statusBanner.textContent = "We are Open!";
                statusBanner.className = "open";
            } else {
                statusBanner.textContent = "Closed - Open at 8 AM";
                statusBanner.className = "closed";
            }

//filter
const rowz = document.querySelectorAll(".menu-item");

document.getElementById("all").addEventListener("click", function() {
    rowz.forEach(row => row.style.display = "");
});

document.getElementById("drinks").addEventListener("click", function() { rowz.forEach(row => row.style.display = "none");

    Array.from( rowz).filter(row => row.dataset.category === "drinks").forEach(row => row.style.display = "");
});

document.getElementById("pastries").addEventListener("click", function() { rowz.forEach(row => row.style.display = "none");

    Array.from( rowz) .filter(row => row.dataset.category === "pastries").forEach(row => row.style.display = "");
});

document.getElementById("toggle-btn").addEventListener("click", function(event) {
  event.preventDefault(); 
  
  const moreText = document.getElementById("more-about");
  
  if (moreText.style.display === "none") {
    moreText.style.display = "block";
    this.textContent = "Read Less";
  } else {
    moreText.style.display = "none";
    this.textContent = "Read More";
  }
});




const name = document.querySelector("#courseName");
const category = document.querySelector("#coursCatgory");
const price = document.querySelector("#coursePrice");
const description = document.querySelector("#courseDescription");
const capacity = document.querySelector("#courseCapacity");
const addbtn = document.querySelector("#click");

let coruses = []; 
if(localStorage.getItem("coruses")!=null){
    coruses=JSON.parse(localStorage.getItem("coruses"));
    displayCourses();

}
addbtn.addEventListener("click", (e) => {
    e.preventDefault();
    const course = { 
        name: name.value, 
        category: category.value,
        price: price.value, 
        description: description.value, 
        capacity: capacity.value
    };
    
    coruses.push(course); 
  
    localStorage.setItem("coruses", JSON.stringify(coruses)); 
    Swal.fire({
        title: "courses add!",
        text: "new ciursese",
        icon: "success"
      });
    displayCourses();
    console.log(coruses); 
});

function displayCourses() {  
    const result = coruses.map((course, index) => { 
        return `
            <tr>
                <td>${index + 1}</td> 
                <td>${course.name}</td>
                <td>${course.category}</td>
                <td>${course.price}</td>
                <td>${course.description}</td>
                <td>${course.capacity}</td>
            </tr>
        `;
    }).join('');  
    
    document.querySelector("#data").innerHTML = result; 
}


console.log(name, category, price, description, capacity, addbtn); 

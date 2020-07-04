let grandparent = document.getElementById('grand-parent');
let parent = document.getElementById('parent');
let child = document.getElementById('child');
let body = document.getElementById('body');

body.addEventListener('click',(e) => {
    console.log("body clicked...");
},true)


grandparent.addEventListener('click',(e) => {
    console.log("grand parent clicked...");
    e.stopPropagation();
},false)

parent.addEventListener('click',() => {
    console.log("parent clicked...");
})

child.addEventListener('click',() => {
    console.log("child clicked...");
},true)

//useCapture is the 3rd parameter.
// e.stopPropagation()


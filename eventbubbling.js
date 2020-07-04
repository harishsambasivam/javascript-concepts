let grandparent = document.getElementById('grand-parent');
let parent = document.getElementById('parent');
let child = document.getElementById('child');

grandparent.addEventListener('click',() => {
    console.log("grand parent clicked...");
})

parent.addEventListener('click',() => {
    console.log("parent clicked...");
})

child.addEventListener('click',() => {
    console.log("child clicked...");
})
// let category = document.getElementsByClassName('category');


// category[0].addEventListener('click', e => {
//     console.log(e.target.id);
//     if(e.target.tagName === 'li'){
//          window.location.href = '/'+e.target.id;
//     }
// });


let form = document.getElementsByClassName('form');


form[0].addEventListener('keyup', e => {
    if(e.target.dataset.uppercase != undefined){
        e.target.value = e.target.value.toUpperCase();
    }
});


// cons

// - less memory consumption
// - less code
// - DOM manipulation

//limits

// e.preventPropagation()
// all the events cant be bubbled up
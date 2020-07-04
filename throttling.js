function expensive(){
    console.log("called");
}

let betterExperience = throttle(expensive,100);
window.addEventListener('resize',betterExperience);


function throttle(expensive,limit){
    let flag = true;
    return function(){
        let context = this,args = arguments;
        if(flag){
            expensive.apply(context,arguments);
           flag = false;
            setTimeout(
                () => {
                    flag = true
                },limit
            )
        }
    }
}
function callApi(){
    console.log("called");
}

function debounce(callApi,timeout){
    let timer;
    return function(){
        let context = this,args = arguments;
        clearInterval(timer);
        timer = setTimeout(() => {
            callApi.apply(context,args);
        },timeout);
    }
}

const betterFunction = debounce(callApi,300);
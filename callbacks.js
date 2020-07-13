const http = {
    get:function(url,callback){
        let res = 0; // make request and fetch data; 
        callback(res);
    }
}

http.get('api/pokemons',function(res){
    console.log(res);
})
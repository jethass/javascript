var get = function(url){
  return new Promise(function(resolve, reject){
     var xhr = new window.XMLHttpRequest();
     xhr.onreadystatechange = function(){
        if(xhr.readyState === 4){
            if(xhr.status === 200){
               resolve(xhr.responseText);
            } else {
               reject(xhr);
            }
        }
     }
     xhr.open('GET',url,true);
     xhr.send();
  })

}

var catchError = function(e){
    console.log('erreur'+ e)
}

var getPosts = function () {
  return new Promise(function(resolve, reject){
  	get('http://ffffff').then(function (response){
        var users= JSON.parse(response)
        get('http://ffffff?userId'+users[id]).then(function (response){
            var posts = JSON.parse(response)
            resolve(posts)
        }).catch(catchError)
        
  	}).catch(catchError)
  }
}

/// ou 
var getPosts = function () {
    return get('http://ffffff').then(function (response){
        var users= JSON.parse(response)
        return get('http://ffffff?userId'+users[id]
    }).then(function (response){
            var posts = JSON.parse(response)
            return (posts)
    })
}


getPosts().then(function(posts){
  console.log(posts)
}).catch(function(error){
  console.log(error)
}).then(function(){
  console.log("fin des requet ajax")
})


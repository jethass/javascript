var get = function(url,sucess,error){
   var xhr = new window.XMLHttpRequest();
   xhr.onreadystatechange = function(){
      if(xhr.readyState === 4){
          if(xhr.status === 200){
             sucess(xhr.responseText);
          } else {
             error(xhr);
          }
      }
   }
   xhr.open('GET',url,true);
   xhr.send();
	
}

var getPosts = function (sucess,error) {
	get ('http://ffffff',function (response){
      var users= JSON.parse(response)
      get ('http://ffffff?userId'+users[id],function (response){
          var posts = JSON.parse(response)
          sucess(posts)
      },function(e){
          error('erreur ajax' + e);
      })
      
	}, function(e){
	   error('erreur ajax' + e);
	})
}

getPosts(function(posts){
   console.log("le premier post"+posts[0])
},function(error){
	console.log(error)
})
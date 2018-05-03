https://blog.xebia.fr/2017/11/14/asyncawait-une-meilleure-facon-de-faire-de-lasynchronisme-en-javascript/
require ('babel-polyfill')

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


var getPosts = async function () {
    try {
          var response = await get('http://ffffff')
          var users= JSON.parse(response)
          response = await get('http://ffffff?userId'+users[id])
          var posts = JSON.parse(response)
    } catch (e){
      console.log('il y a une erreu')
    }

    return (posts)
}

var getFirstPost = async function(){
  var posts = await getPosts()
  return posts[0]
}


//cas particulier

var demo = async function(){
  var arr = await Promise.all([getPosts(),getFirstPost()])
  console.log(arr)
}

demo()

let img = document.querySelector('img');



setInterval(function(){
    fetch(' https://dog.ceo/api/breeds/image/random')
    .then(response=>response.json())
    .then(data=> img.src = data.message )
}, 2000);
   




   
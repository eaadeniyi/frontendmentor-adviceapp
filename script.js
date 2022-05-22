var button = document.querySelector('.button');


button.addEventListener('click', function(){
    fetch ('https://api.adviceslip.com/advice')
    .then(response=> response.json())
    .then(result => {
      var  adviceId = result['slip']['id'];
      var  adviceWord = result['slip']['advice'];   

      adviceNumber.innerHTML = adviceId;
      adviceWords.innerHTML = "ADVICE: " + adviceWord ;
    }
    )
    
})

const getResponse = () => {
  let randomNumber = getRandomNumber(1,83);
  let response = document.getElementById("element");
  fetch(`http://localhost:3000/star-wars/${randomNumber}`)
    .then(res => res.json())
    .then(json => response.innerText = JSON.stringify(json.Planeta))
    .catch(err => console.log('Solicitud fallida', err));
}

const getRandomNumber = (min,max) => {
   return Math.floor(Math.random() * (max - min)) + min;
}
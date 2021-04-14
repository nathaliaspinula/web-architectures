
function calculate() {
  const weight = document.querySelector('#weight').value;
  const height = document.querySelector('#height').value;

  const imc = (weight/(height*height)).toFixed(2, 10);
  
  let classification = '';

  if (imc < 18.5) classification = 'magreza';
  
  if (imc >= 18.5 && imc < 24.9) classification = 'normal';
  
  if (imc >= 24.9 && imc < 30) classification = 'sobrepeso';

  if (imc > 30) classification = 'obesidade';
    

  return `Seu IMC é de ${imc}, sendo classificado como ${classification}`;
}

function updateResult() {
  document
    .querySelector('#result')
    .innerHTML = calculate();
}

window.onload = function() {
  document
    .querySelector('#calculate')
    .addEventListener('click', updateResult);
};
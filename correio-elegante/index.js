var messages = [
  "A vida trará coisas boas se tiveres paciência.",
  "Defeitos e virtudes são apenas dois lados da mesma moeda.",
  "A maior de todas as torres começa no solo.",
  "Demonstre amor e alegria em todas as oportunidades e verás que a paz nasce dentro de você."
];

function pickMsg() {
  var nro = Math.random();
  var msg = parseInt(nro * messages.length);
  return messages[msg];
}

function updateMsg() {
  document
    .querySelector('.letter-content')
    .innerHTML = pickMsg();
}

window.onload = function() {
  document
    .querySelector('#new-msg-btn')
    .addEventListener('click', updateMsg);
};
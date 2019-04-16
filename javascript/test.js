
let textArea = document.getElementById('text-area');
let okButton = document.getElementById('ok-button');

textArea.style.display = 'none';

okButton.addEventListener('click', function(){
  //textArea.innerText = 'Clicked Button';
  textArea.style.display = 'block';
});


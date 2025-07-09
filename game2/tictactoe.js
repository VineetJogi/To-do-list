const buttons = document.querySelectorAll('#board-button');

  buttons.forEach(button => {
    button.addEventListener('click', () => {
      if (button.innerText === 'X' || button.innerText === 'O') return; // Prevent overwriting
      button.innerText = 'X';
    });
  });
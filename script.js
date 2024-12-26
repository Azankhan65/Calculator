document.addEventListener('keydown', function(event) {
    const display = document.getElementById('display');
    
    if (event.key >= '0' && event.key <= '9') {
      appendToDisplay(event.key);
    } else if (event.key === '+' || event.key === '-' || event.key === '*' || event.key === '/' || event.key === '%') {
      appendToDisplay(event.key);
    } else if (event.key === 'Backspace') {
      clearDisplay();
    } else if (event.key === 'Enter') {
      calculate();
    } else if (event.key === '.') {
      appendToDisplay('.');
    }
  });
  
  function appendToDisplay(value) {
    const display = document.getElementById('display');
    if (value === '.' && display.value.includes('.')) return;
    display.value += value;
  }
  
  function clearDisplay() {
    document.getElementById('display').value = '';
  }
  
  function calculate() {
    const display = document.getElementById('display');
    try {
      display.value = eval(display.value.replace(/[^-()\d/*+.]/g, ''));
    } catch (error) {
      display.value = 'Error';
    }
  }
  
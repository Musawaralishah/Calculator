let calculation = ''|| JSON.parse(localStorage.getItem('calculation'));
      if (!calculation) {
        calculation = 0;
      }
      if (calculation) {
        document.querySelector('.js-display')
          .innerHTML = calculation;
      }
      function updateCalculation(value) {
        calculation += value;
        document.querySelector('.js-display')
          .innerHTML = calculation;

        localStorage.setItem('calculation',JSON.stringify(calculation));
      }
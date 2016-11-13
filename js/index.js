document.addEventListener('DOMContentLoaded', function () {
  var $Input1 = document.getElementById('name-input-1');
  var $Input2 = document.getElementById('name-input-2');
  var $Input3 = document.getElementById('name-input-3');
  var timerInputCheck;

  forEach(document.getElementsByClassName('name-input'), ($Input) => {
    $Input.addEventListener('input', () => {
      clearTimeout(timerInputCheck);
      timerInputCheck = setTimeout(function () {
        if ($Input1.textContent === '4' && $Input2.textContent === '5' && $Input3.textContent === '7') {
          window.open('https://n457.github.io/Uncolored/');
        }
        clearTimeout(timerInputCheck);
      }, 10);
    });

    $Input.addEventListener('blur', () => {
      if (! $Input.textContent) {
        $Input.textContent = '_';
      }
    });
  });

});

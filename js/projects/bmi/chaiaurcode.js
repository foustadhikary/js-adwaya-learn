const form = document.querySelector('form');
//if we initialize height and weight here when the page will load the empty value will get stored here
// const height=parseInt(document.querySelector('#height').value)
form.addEventListener('submit', function (e) {
  e.preventDefault();
  let bmi = null;
  const height = parseInt(document.querySelector('#height').value);
  const weight = parseInt(document.querySelector('#weight').value);
  const results = document.querySelector('#results');
  if (height === '' || height < 0 || isNaN(height)) {
    results.innerHTML = 'please give a valid height';
  } else if (weight === '' || weight < 0 || isNaN(weight)) {
    results.innerHTML = `please give a valid weight ${weight}`;
  } else {
    bmi = (weight / ((height * height) / 10000)).toFixed(2);
    //show the result
    results.innerHTML = `<span>${bmi}</span>`;
  }
  // // Under Weight = Less than 18.6

  // Normal Range = 18.6 and 24.9

  // Overweight = Greater than 24.9
  if (bmi < 18.6) {
    verdict.innerHTML = `<span>you are a skinny bitch</span>`;
  }
  if (bmi > 18.6 && bmi < 24.9) {
    verdict.innerHTML = `<span>you are a okay bitch</span>`;
  }
  if (bmi > 24.9) {
    verdict.innerHTML = `<span>you are a overweight bitch</span>`;
  }

});

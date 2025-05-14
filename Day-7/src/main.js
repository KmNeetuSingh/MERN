document.getElementById('btn').addEventListener('click', async () => {
  const num1 = parseFloat(document.getElementById('num1').value);
  const num2 = parseFloat(document.getElementById('num2').value);

  if (isNaN(num1) || isNaN(num2)) {
    document.getElementById('result').textContent = 'Please enter valid numbers.';
    return;
  }

  // 🧠 Dynamically import the add function
  const { add } = await import('./utils/calc.js');
  const result = add(num1, num2);

  document.getElementById('result').textContent = `Result: ${result}`;
});

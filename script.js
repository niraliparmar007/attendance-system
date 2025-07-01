function countPresent() {
  const checkboxes = document.querySelectorAll('.present');
  let count = 0;
  checkboxes.forEach(cb => {
    if (cb.checked) count++;
  });
  document.getElementById('result').textContent = `Total Present: ${count} Students`;
}
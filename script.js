document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('repair-form');
  const tableBody = document.querySelector('#request-table tbody');
  const requests = JSON.parse(localStorage.getItem('requests') || '[]');

  function render() {
    tableBody.innerHTML = '';
    requests.forEach(r => {
      const row = document.createElement('tr');
      row.innerHTML = `<td>${r.name}</td><td>${r.email}</td><td>${r.issue}</td>`;
      tableBody.appendChild(row);
    });
  }

  form.addEventListener('submit', e => {
    e.preventDefault();
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const issue = document.getElementById('issue').value.trim();
    if (!name || !email || !issue) return;
    requests.push({ name, email, issue, time: Date.now() });
    localStorage.setItem('requests', JSON.stringify(requests));
    form.reset();
    render();
  });

  render();
});

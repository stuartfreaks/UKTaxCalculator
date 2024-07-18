document
  .getElementById('calculateButton')
  .addEventListener('click', calculateTax);

function calculateTax() {
  const salary = parseFloat(document.getElementById('salary').value) || 0;
  const dividends = parseFloat(document.getElementById('dividends').value) || 0;

  const personalAllowance = 12570;
  const dividendAllowance = 2000;

  let taxableSalary =
    salary > personalAllowance ? salary - personalAllowance : 0;
  let taxableDividends =
    dividends > dividendAllowance ? dividends - dividendAllowance : 0;

  // Income Tax Calculation
  let salaryTax = 0;
  let dividendTax = 0;

  // Salary Tax Bands
  if (taxableSalary > 150000) {
    salaryTax += (taxableSalary - 150000) * 0.45;
    taxableSalary = 150000;
  }
  if (taxableSalary > 50270) {
    salaryTax += (taxableSalary - 50270) * 0.4;
    taxableSalary = 50270;
  }
  if (taxableSalary > 12570) {
    salaryTax += (taxableSalary - 12570) * 0.2;
  }

  // Dividend Tax Bands
  if (taxableDividends > 150000) {
    dividendTax += (taxableDividends - 150000) * 0.389;
    taxableDividends = 150000;
  }
  if (taxableDividends > 50270) {
    dividendTax += (taxableDividends - 50270) * 0.325;
    taxableDividends = 50270;
  }
  if (taxableDividends > 12570) {
    dividendTax += (taxableDividends - 12570) * 0.075;
  }

  const totalTax = salaryTax + dividendTax;
  const totalIncomeAfterTax = salary + dividends - totalTax;
  const salaryAfterTax = salary - salaryTax;

  document.getElementById('result').innerHTML = `
        <p class="salary-after-tax">Salary After Tax: £${salaryAfterTax.toLocaleString()}</p>
        <div class="separator"></div>
        <p><strong>Total Tax Due:</strong> £${totalTax.toLocaleString()}</p>
        <p><strong>Tax on Salary:</strong> £${salaryTax.toLocaleString()}</p>
        <p><strong>Tax on Dividends:</strong> £${dividendTax.toLocaleString()}</p>
        <p><strong>Total Income After Tax:</strong> £${totalIncomeAfterTax.toLocaleString()}</p>
    `;
}

const globalSearchForm = document.getElementById('globalSearchForm');
const globalSearch = document.getElementById('globalSearch');
const searchResult = document.getElementById('searchResult');

const searchableTopics = [
  'hsn code 8517 mobile phones 18%',
  'sac 9983 professional services 18%',
  'gstr-1 filing timeline',
  'gstr-3b due date basics',
  'reverse charge mechanism overview',
  'input tax credit eligibility',
  'place of supply decision guide',
  'bill of entry customs import',
  'shipping bill export filing',
  'rodtep scheme summary',
  'epcg scheme',
  'baggage rules international travelers',
  'cbic circular index'
];

globalSearchForm.addEventListener('submit', (event) => {
  event.preventDefault();
  const query = globalSearch.value.trim().toLowerCase();

  if (!query) {
    searchResult.textContent = 'Please enter a keyword, circular number, or tax concept.';
    return;
  }

  const matched = searchableTopics.filter((topic) => topic.includes(query));
  if (matched.length) {
    searchResult.textContent = `Found ${matched.length} matching topic(s): ${matched.slice(0, 3).join(' • ')}`;
  } else {
    searchResult.textContent = 'No exact match found in demo data. Try terms like “ITC”, “HSN 8517”, or “RoDTEP”.';
  }
});

const hsnFilter = document.getElementById('hsnFilter');
const hsnRows = Array.from(document.querySelectorAll('#hsnTableBody tr'));

hsnFilter.addEventListener('input', () => {
  const value = hsnFilter.value.trim().toLowerCase();
  hsnRows.forEach((row) => {
    const rowText = row.textContent.toLowerCase();
    row.style.display = rowText.includes(value) ? '' : 'none';
  });
});

const gstCalcForm = document.getElementById('gstCalcForm');
const gstResult = document.getElementById('gstResult');

gstCalcForm.addEventListener('submit', (event) => {
  event.preventDefault();
  const amount = Number(document.getElementById('amount').value);
  const rate = Number(document.getElementById('rate').value);
  const gst = (amount * rate) / 100;
  const total = amount + gst;
  gstResult.textContent = `GST: ₹${gst.toFixed(2)} | Total: ₹${total.toFixed(2)}`;
});

const customsCalcForm = document.getElementById('customsCalcForm');
const customsResult = document.getElementById('customsResult');

customsCalcForm.addEventListener('submit', (event) => {
  event.preventDefault();
  const assessable = Number(document.getElementById('assessable').value);
  const bcdRate = Number(document.getElementById('bcd').value);
  const igstRate = Number(document.getElementById('igst').value);

  const bcd = (assessable * bcdRate) / 100;
  const taxableValue = assessable + bcd;
  const igst = (taxableValue * igstRate) / 100;
  const totalDuty = bcd + igst;
  const landedCost = assessable + totalDuty;

  customsResult.textContent = `BCD: ₹${bcd.toFixed(2)} | IGST: ₹${igst.toFixed(2)} | Total Duty: ₹${totalDuty.toFixed(2)} | Landed Cost: ₹${landedCost.toFixed(2)}`;
});

const newsletterForm = document.getElementById('newsletterForm');
const newsletterMsg = document.getElementById('newsletterMsg');

newsletterForm.addEventListener('submit', (event) => {
  event.preventDefault();
  newsletterMsg.textContent = 'Subscribed! You will receive the weekly tax update digest.';
  newsletterForm.reset();
});

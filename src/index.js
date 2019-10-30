import _ from 'lodash';
import data from '../data/search-result.js';
const {log} = console;

const {searchJSON} = data;

var table = document.createElement('table');
document.body.appendChild(table);
table.id = 'attributes'
var tableElement = document.getElementById('attributes');

var transactionAttributes = searchJSON.records.page
.filter(record => record.taxonomy_events.includes('Transaction'))
.sort(((a, b) => (a.title > b.title) ? 1 : -1))

transactionAttributes.forEach(
  function (item, index) {
    let row = document.createElement('tr');
    tableElement.appendChild(row);
    let id = `id-${index}`
    row.id = id;
    var rowElem = document.getElementById(id);
    rowElem.innerHTML = `<td>${item.title}</td><td>${item.body}</td><td>${item.url}</td>`;
  });


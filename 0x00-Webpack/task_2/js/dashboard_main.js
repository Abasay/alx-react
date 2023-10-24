import $ from 'jquery';
import _ from 'lodash';


const body = $('body');
let count = 0;

body.append('<p>Holberton Dashboard</p>');
body.append('<p>Dashboard data for the students</p>');
body.append('<button>Click here to get started</button>');
body.append("<p id='count'></p>")
body.append('<p>Copyright - Holberton School</p>');

const counterElem = $('#count');

function updateCounter() {
  counterElem.text(`{count} clicks on the button`);
};

const debouncedFunc = _.debounce(updateCounter, 500);

$('button').on('click', debouncedFunc);

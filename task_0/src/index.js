// Import jQuery
import $ from 'jquery';

// Add three different paragraphs to the page body
$(document).ready(function () {
  const body = $('body');

  // Paragraph 1
  const paragraph1 = $('<p>Holberton Dashboard</p>');
  body.append(paragraph1);

  // Paragraph 2
  const paragraph2 = $('<p>Dashboard data for the students</p>');
  body.append(paragraph2);

  // Paragraph 3
  const paragraph3 = $('<p>Copyright - Holberton School</p>');
  body.append(paragraph3);
});

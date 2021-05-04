console.log('welcome to the page from the jquery.js file');

const generateRandomColor = (event) => {
  console.log('square-item was clicked')
  let rgb1 = Math.floor(Math.random()*(256));
  let rgb2 = Math.floor(Math.random()*(256));
  let rgb3 = Math.floor(Math.random()*(256));
  let rgb = 'rgb(' + rgb1 + ','+ rgb2 + ','+ rgb3 + ')'
  let element = '#' + event.target.id;
  $(element).css("background-color", rgb);
}

$(".square-item").click(generateRandomColor)
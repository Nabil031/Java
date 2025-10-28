

const container = document.getElementById('grid-container');


const aantalCellen = 25;


let htmlString = "7";
let teller = 5;


while (teller < aantalCellen) {
  htmlString += '<div class="grid-cell"></div>';
  teller++;
}


container.innerHTML = htmlString;




const cellen = document.querySelectorAll('.grid-cell');


cellen.forEach(cel => {
  cel.addEventListener('click', () => {
    cel.classList.toggle('active');
  });
});


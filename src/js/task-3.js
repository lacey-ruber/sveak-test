const shuffle = (array) => {
  let m = array.length,
    t,
    i
  while (m) {
    i = Math.floor(Math.random() * m--)
    t = array[m]
    array[m] = array[i]
    array[i] = t
  }

  return array
}

const colors = ['#cfe2ff', '#f8d7da', '#d1e7dd', '#fff3cd']
const cols = document.querySelectorAll('.colored-line')

const btnColorChange = document.querySelector('.task-3__btn')
if (btnColorChange) {
  btnColorChange.addEventListener('click', function (e) {
    let randomArray = shuffle(colors)
    cols[0].style.backgroundColor = randomArray[0]
    cols[1].style.backgroundColor = randomArray[1]
    cols[2].style.backgroundColor = randomArray[2]
    cols[3].style.backgroundColor = randomArray[3]
  })
}

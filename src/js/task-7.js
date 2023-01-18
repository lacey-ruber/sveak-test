const fieldsBtn = document.querySelector('.block-fields__btn')

function changeText1() {
  let text1 = document.querySelector('.block-fields__input_1').value
  document.querySelector('.task-7-btn__text_1').innerHTML = text1
}
function changeText2() {
  let text2 = document.querySelector('.block-fields__input_2').value
  document.querySelector('.task-7-btn__text_2').innerHTML = text2
}
function changeText3() {
  let text3 = document.querySelector('.block-fields__input_3').value
  document.querySelector('.task-7-btn__text_3').innerHTML = text3
}

if (fieldsBtn) {
  document
    .querySelector('.block-fields__btn_1')
    .addEventListener('click', changeText1)
  document
    .querySelector('.block-fields__btn_2')
    .addEventListener('click', changeText2)
  document
    .querySelector('.block-fields__btn_3')
    .addEventListener('click', changeText3)
}

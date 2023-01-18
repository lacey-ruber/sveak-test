// Включение анимации
const blockGift = document.querySelector('.task-6__icon')
const btnAnimGift = document.querySelector('.btn-start')
if (blockGift) {
  btnAnimGift.addEventListener('click', function (e) {
    blockGift.classList.toggle('active')
    btnAnimGift.classList.toggle('active')
  })
}

// Изменение цвета (баг - классы не удаляются при повторном нажатии)
const classColors = ['line-1', 'line-2', 'line-3', 'line-4']
const iconGift = document.querySelector('.gift')
const btnColorGift = document.querySelector('.btn-change-color')
if (iconGift) {
  btnColorGift.addEventListener('click', function (e) {
    let randomColorIndex = getRandom(0, classColors.length)
    function getRandom(min, max) {
      return Math.floor(Math.random() * (max - min) + min)
    }
    iconGift.classList.toggle(classColors[randomColorIndex])
  })
}

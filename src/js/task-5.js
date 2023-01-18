const elForm = document.querySelector('.js-form')
const elBtnSubmit = document.querySelector('.js-form__btn')
const elField = document.querySelector('.js-field-input')
const elTooltip = document.querySelector('.js-form__tooltip')
const elProgress = document.querySelector('.progress-bar')

if (elForm) {
  let ticketsCount = 0
  let isSubmitting = false
  const checkTicketsValidation = () => ticketsCount >= 0 && ticketsCount <= 100
  elField.addEventListener('change', handleCountChange)
  function handleCountChange(event) {
    ticketsCount = Number(event.target.value)
    const hasValidTickets = checkTicketsValidation()

    if (hasValidTickets) {
      elBtnSubmit.removeAttribute('disabled')
      elTooltip.classList.remove('isActive')
    } else {
      elBtnSubmit.setAttribute('disabled', '')
      elTooltip.classList.add('isActive')
    }
  }
  function changeWidth() {
    elProgress.style.width = `${(ticketsCount / 100) * 100}%`
  }
  elBtnSubmit.addEventListener('click', function () {
    ticketsCount = parseInt(elField.value, 10)
    changeWidth()
  })
  elBtnSubmit.addEventListener('click', handleBtnClick)
  function handleBtnClick(event) {}
  elForm.addEventListener('submit', handleFormSubmit)
  async function handleFormSubmit(event) {
    event.preventDefault()

    if (isSubmitting) {
      return false
    }

    isSubmitting = true

    elBtnSubmit.setAttribute('data-loading', 'true')

    const elLoadingStatus = elBtnSubmit.querySelector('.js-loading')
    elLoadingStatus.innerText = elLoadingStatus.getAttribute('data-loading-msg')

    await fakeWaitTime(2000)

    elLoadingStatus.innerText = ''
    elBtnSubmit.setAttribute('data-loading', 'false')
    isSubmitting = false
  }
  function fakeWaitTime(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms))
  }
}

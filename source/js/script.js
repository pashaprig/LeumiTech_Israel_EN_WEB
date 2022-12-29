const form = document.querySelector('.form')
const checkBox = form.querySelector('#checkbox')
const submitBtm = form.querySelector('.form__btn')

checkBox.addEventListener('change', function() {
  if (this.checked) {
    submitBtm.removeAttribute("disabled", "")
  } else {
    submitBtm.setAttribute("disabled", "")
  }
});

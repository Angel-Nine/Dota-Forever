function greetings() {
  var inputName = document.getElementById('guest_name')
  var title = document.getElementById('title')

  title.innerHTML = 'Welcome Player: ' + inputName.value
}
import Modal from './modal.js'

const modal = Modal()

const modalTitle = document.querySelector('.modal h2')
const modalDescription = document.querySelector('.modal p')
const modalButton = document.querySelector('.modal button')
const inputPassword = document.querySelector('#password')

// Pegar todos os botões que existem com a classe check
const checkButtons = document.querySelectorAll('.actions a.check')

checkButtons.forEach(button => {
  // adicionar a escuta
  
  button.addEventListener('click', handleClick)
})

// Quando o botão delete for clicado abrirá a modal
const deleteButtons = document.querySelectorAll('.actions a.delete')

deleteButtons.forEach(button => {
  button.addEventListener('click', (event) => handleClick(event, false))
})

// Pegar quando o marcar como lido for clicado

function handleClick(event, check = true) {
  event.preventDefault()
  const textQuestionModal = check ? "Marcar como lida" : "Excluir"
  const slug = check ? "check" : "delete"

  const roomId = document.querySelector('#room-id').dataset.id
  const questionId = event.target.dataset.id
  
  const form = document.querySelector('.modal form')
  form.setAttribute('action', `/question/${roomId}/${questionId}/${slug}`)

  modalTitle.innerHTML = `${textQuestionModal} esta pergunta`
  modalDescription.innerHTML = `Tem certeza que deseja ${textQuestionModal.toLowerCase()} esta pergunta?`
  modalButton.innerHTML = `Sim, ${textQuestionModal.toLocaleLowerCase()}`
  check ? modalButton.classList.remove('red') : modalButton.classList.add('red')
  // Abrir modal
  modal.open()
  inputPassword.focus()
}
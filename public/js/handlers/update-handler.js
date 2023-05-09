export default updateHandler

function updateHandler(target, formBtn) {
    const element = target.parentElement.parentElement
    const uaTerm = document.querySelector('[name="uaterm"]').value = element.querySelector('.ua').textContent
    const engTerm = document.querySelector('[name="enterm"]').value = element.querySelector('.eng').textContent
    const descr = document.querySelector('[name="shortdescr"]').value = element.querySelector('.short').textContent

    formBtn.textContent = 'update word'
    formBtn.className = element.id
}
import postData from "./sevises/post-data.js"
import getDataObject from "./helpers/get-data-obj.js"
import updateWord from "./sevises/update-word.js"
import callRender from "./render.js"
import updateHandler from "./handlers/update-handler.js"
import deleteHandler from "./handlers/delete-handler.js"
import viewHandler from "./handlers/view-handler.js"

const formBtn = document.querySelector('[type="submit"]')
const form = document.querySelector('form')
const table = document.querySelector('table')

callRender()

document.body.addEventListener('click', (e) => {
    if (e.target?.className == 'back'){
        location.reload()
    }
})

form.addEventListener('submit', (e) => {
    e.preventDefault()

    const formData = new FormData(form)

    if (formBtn.className !== 'send') {
        updateWord(`/api/updateWord:${formBtn.className}`, getDataObject(formData))
            .then(
                form.reset(),
                callRender(),
                formBtn.textContent = 'send word',
                formBtn.className = 'send',
            )
    }
    else {
        postData('/api/addWord', getDataObject(formData))
            .then((data) => {
                callRender()
                form.reset()
            })
    }
})

table.addEventListener('click', (e) => {
    switch (e.target.className) {
        case "delete":
            deleteHandler(e.target)
            break
        case "update":
            updateHandler(e.target, formBtn)
            break
        case "view":
            viewHandler(e.target.parentElement.parentElement.id)
                .then(html => {
                    document.body.innerHTML = html
                })

            break
    }
})



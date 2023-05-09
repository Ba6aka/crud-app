import deleteWord from "../sevises/delete-word.js"
export default deleteHandler

function deleteHandler(target){
    const element = target.parentElement.parentElement

    deleteWord(`/api/deleteWord:${element.id}`)

    element.remove()
}
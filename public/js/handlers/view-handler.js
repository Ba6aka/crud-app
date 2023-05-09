export default viewHandler

async function viewHandler(id) {
    const res = await fetch(`/api/getWord:${id}`)
    const data = await res.json()

    return data
}
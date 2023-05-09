export default deleteWord

async function deleteWord(url){
    const response = await fetch(url, {method: 'DELETE'})

    return response.json()
}
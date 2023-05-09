export default getAll

async function getAll(url){
    const response = await fetch(url, {method: 'GET'})

    return response.json()
}
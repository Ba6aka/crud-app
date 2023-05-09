export default getOne

async function getOne(url){
    const response = await fetch(url, {method: 'GET'})

    return response.json()
}
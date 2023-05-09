module.exports = { getAllWords }

async function getAllWords(words, response) {
    const file = (JSON.stringify(await words.find().toArray()))
    response.end(file)
} 
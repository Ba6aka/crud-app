module.exports = { getDescriptionPage }


async function getDescriptionPage(words, request, response) {
    let file = ` 
     <main class="description">
    <div class="description-container">
      <h1>{engtitle}</h1>
      <h2>{uatitle}</h2>
      <div>{description}</div>
    </div>
    <button class="back">Back</button>
  </main>`
    // Read the input file



    const id = request.url.split(':')[1]

    await words
        .findOne({ _id: new ObjectId(id) })
        .then((word) => {
            const { long, eng, ua } = word
            file = file.replace('{engtitle}', eng)
            file = file.replace('{description}', long)
            file = file.replace('{uatitle}', ua)

            response.end(JSON.stringify(file))
        })

}

const fs = require('fs')
const { ObjectId } = require("mongodb")
import getAll from "./sevises/get-all.js"

export default callRender

const table = document.querySelector('table')

function render(data) {
    const tbodyOnPage = document.querySelector('tbody')

    if (tbodyOnPage) tbodyOnPage.remove()
    let i = 1
    const tbody = document.createElement('tbody')
    for (const { _id, ua, eng, short } of data) {
        const tr = document.createElement('tr')
        tr.id = _id
        tr.innerHTML = `
        <td class="i">${i}</td>
        <td class="ua">${ua}</td>
        <td class="eng">${eng}</td>
        <td class="short">${short}</td>
        <td>
        <button class="delete">delete</button>
        <button class="update">update</button>
        <button class="view">view</button>
        </td>
        `
        i++
        tbody.append(tr)
    }
    table.append(tbody)
}


function callRender() {
    getAll('/api/getAllWords').
        then((data) => render(data))
}

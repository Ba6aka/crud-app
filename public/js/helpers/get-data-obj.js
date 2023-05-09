export default getDataObject

function getDataObject(formData) {
    const data = {
        ua: formData.get('uaterm'),
        eng: formData.get('enterm'),
        short: formData.get('shortdescr'),
        long: formData.get('longdescr')
    }
    return data
}
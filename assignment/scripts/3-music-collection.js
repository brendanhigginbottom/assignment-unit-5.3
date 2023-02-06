console.log('***** Music Collection *****')

let collection = [];

/**
 * 
 * @param {string} title Title of album to add to a new object
 * @param {string} artist Artist name to add to a new object
 * @param {number} yearPublished Publication year to add to a new object
 * @returns {object} Returns object with the above key-value pairs
 */

function addToCollection (title, artist, yearPublished) {
    let newRecord = {
        albumTitle: title,
        albumArtist: artist,
        albumYearPublished: yearPublished
    }
    collection.push(newRecord);
    return newRecord;
}


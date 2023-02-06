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

console.log(addToCollection('Ballads', 'John Coltrane', 1963));
console.log(addToCollection('My Favorite Things', 'John Coltrane', 1961));
console.log(addToCollection("Cher's Golden Greats", 'Cher', 1968));
console.log(addToCollection('Interventions', 'Horse Lords', 2016));
console.log(addToCollection('The Bad Plus Joshua Redman', 'The Bad Plus and Joshua Redman', 2016));
console.log(addToCollection('El Mal Querer', 'Rosalia', 2018));

console.log(collection);
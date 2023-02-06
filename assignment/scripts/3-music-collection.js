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

/**
 * 
 * @param {array} collectionArray Array to log contents of
 */

function showCollection (collectionArray) {
    console.log(collectionArray.length);
    for (let albumInfo of collectionArray) {
        console.log(`${albumInfo.albumTitle} by ${albumInfo.albumArtist} published in ${albumInfo.albumYearPublished}`)
    };
}

showCollection(collection);

/**
 * 
 * @param {string} artist Artist to search collection array for
 * @returns {array} Array of matches by artist name, empty array if no matches found
 */

function findByArtist(artist) {
    let matchingArray = [];
    for (let match of collection) {
        if (match.albumArtist === artist) {
            matchingArray.push(match)
        } 
    }
    return matchingArray;
}

console.log(findByArtist('John Coltrane'));
console.log(findByArtist('Bad Bunny'));
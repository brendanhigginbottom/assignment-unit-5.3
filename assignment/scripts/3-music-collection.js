console.log('***** Music Collection *****')

let collection = [];

/**
 * 
 * @param {string} title Title of album to add to a new object
 * @param {string} artist Artist name to add to a new object
 * @param {number} yearPublished Publication year to add to a new object
 * @param {array} tracks Array of objects, each object in the array containing a track name and duration
 * @returns {object} Returns object with the above key-value pairs
 */

function addToCollection(title, artist, yearPublished, tracks) {
    let newRecord = {
        albumTitle: title,
        albumArtist: artist,
        albumYearPublished: yearPublished,
        albumTracks: tracks
    }
    collection.push(newRecord);
    return newRecord;
}

console.log(addToCollection('Ballads', 'John Coltrane', 1963, [{ name: "What's New", duration: '3:44' }, { name: 'All Or Nothing At All', duration: '3:34' }]));
console.log(addToCollection('My Favorite Things', 'John Coltrane', 1961, [{ name: 'But Not for Me', duration: '9:35' }, { name: 'My Favorite Things', duration: '13:45' }]));
console.log(addToCollection("Cher's Golden Greats", 'Cher', 1968, [{ name: 'All I really Want to Do', duration: '2:58' }, { name: 'Sunny', duration: '3:09' }]));
console.log(addToCollection('Interventions', 'Horse Lords', 2016, [{ name: 'Encounters I / Transfinite Flow', duration: '3:26' }, { name: 'Time Slip', duration: '2:33' }]));
console.log(addToCollection('The Bad Plus Joshua Redman', 'The Bad Plus and Joshua Redman', 2016, [{ name: 'As This Moment Slips Away', duration: '6:55' }, { name: 'Friend or Foe', duration: '8:39' }]));
console.log(addToCollection('El Mal Querer', 'Rosalia', 2018, [{ name: 'MALDICION', duration: '2:55' }, { name: 'MALAMENTE', duration: '2:30' }]));

console.log(collection);


/**
 * 
 * @param {array} collectionArray Array to log contents of
 */

function showCollection(collectionArray) {
    console.log(collectionArray.length);
    let initialTrackNumber = 1;
    for (let i = 0; i < collectionArray.length; i += 1) {
        console.log(`${collectionArray[i].albumTitle} by ${collectionArray[i].albumArtist}, published in ${collectionArray[i].albumYearPublished}:`);
        for (let j = 0; j < collectionArray[i].albumTracks.length; j += 1) {
            console.log(`${initialTrackNumber}. ${collectionArray[i].albumTracks[j].name}: ${collectionArray[i].albumTracks[j].duration}`);
            initialTrackNumber += 1;
        }
        initialTrackNumber = 1;
    }
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

console.log(findByArtist('John Coltrane')); //Should return two matches
console.log(findByArtist('Bad Bunny')); // Should return no matches/an empty array

/**
 * 
 * @param {object} object Object to search collection array for full matches. keys that can be (not must) passed in object are artist, album, year, and trackName.
 * @returns {array} Array of matching album info, empty array if no matches, full collection array if no object key-value pairs provided or no object pass as an argument at all.
 */

function search(object) {
    // first need to test if object is undefined, otherwise I get an error when declaring searchItems equal to no object. Works with an empty object though. Returning before all the other code avoids the error.
    if (object === undefined) {
        return collection;
    }
    // making empty array to fill in there are any matches.
    let matchingArray = [];
    // Determines number of search criteria. If searchItems === 0, no key-value pairs provided in object. Logging it for my own tests.
    let searchItems = Object.keys(object).length;
    console.log(searchItems);
    // There is surely a better way to do this (a function to generate the permutations based on length of argument object passed?), but this checks the length of the object passed, knowing that all are provided if it's === 4, and iterates from there. Permutations add up quick, though.
    if (searchItems === 4) {
        for (let match of collection) {
            let i = 0;
            while (i < match.albumTracks.length) {
                if (object.artist === match.albumArtist && object.album === match.albumTitle && object.year === match.albumYearPublished && object.trackName === match.albumTracks[i].name) {
                    matchingArray.push(match);
                    break;
                }
                i++; //tab in
            }
        }
    } else if (searchItems === 3) {
        for (let match of collection) {
            let i = 0;
            while (i < match.albumTracks.length) {
                if ((object.artist === match.albumArtist && object.album === match.albumTitle && object.year === match.albumYearPublished) || (object.artist === match.albumArtist && object.album === match.albumTitle && object.trackName === match.albumTracks[i].name) || (object.year === match.albumYearPublished && object.album === match.albumTitle && object.trackName === match.albumTracks[i].name) || (object.year === match.albumYearPublished && object.artist === match.albumArtist && object.trackName === match.albumTracks[i].name)) {
                    matchingArray.push(match);
                    break;
                }
                i++;
            }
        }
    } else if (searchItems === 2) {
        for (let match of collection) {
            let i = 0;
            while (i < match.albumTracks.length) {
                if ((object.artist === match.albumArtist && object.album === match.albumTitle) || (object.artist === match.albumArtist && object.year === match.albumYearPublished) || (object.artist === match.albumArtist && object.trackName === match.albumTracks[i].name) || (object.album === match.albumTitle && object.year === match.albumYearPublished) || (object.album === match.albumTitle && object.trackName === match.albumTracks[i].name) || (object.year === match.albumYearPublished && object.trackName === match.albumTracks[i].name)) {
                    matchingArray.push(match);
                    break;
                }
                i++;
            }
        }
    } else if (searchItems === 1) {
        for (let match of collection) {
            let i = 0;
            while (i < match.albumTracks.length) {
                if (object.artist === match.albumArtist || object.album === match.albumTitle || object.year === match.albumYearPublished || object.trackName === match.albumTracks[i].name) {
                    matchingArray.push(match);
                    break;
                }
                i++;
            }
        }
    } else {
        return collection;
    }
    return matchingArray
}

console.log('test');
console.log(search({ artist: 'John Coltrane' })); // Should log 1 to console and return array with length 2
console.log(search({ album: 'Interventions' })); // Should log 1 to console and return array length 1
console.log(search({ artist: 'Bad Bunny' })); // Should log 1 to console and return empty array

console.log(Object.keys(collection)); // Should return array length 6
console.log(search({ artist: 'John Coltrane', album: 'Ballads', year: 1963 })); // Should log 3 to console and return array length 1
console.log(search({ artist: 'John Coltrane', year: 1963 })); // Should log 2 to console and return array length 1
console.log(search({ album: 'Ballads', year: 1963 })); // Should log 2 to console and return array length 1
console.log(search({ artist: 'John Coltrane' })); // Should log 1 to console and return array length 2
console.log(search({})); // Should log 0 to console and return collection array
console.log(search({ artist: 'Bad Bunny' })); // Should log 1 to console and return empty array
console.log(search()); // Should return collection array
console.log(search({ artist: 'Rosalia', album: 'El Mal Querer', year: 2018, trackName: 'MALDICION' })); // Should log 4 to console and return array length 1
console.log(search({ trackName: 'Friend or Foe' })); // Should log 1 to console and return array length 1
console.log(search({ artist: 'Rosalia', trackName: 'MALDICION', year: 2018 })); // Should log 3 to console and return array length 1
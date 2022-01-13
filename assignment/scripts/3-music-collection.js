console.log('***** Music Collection *****')


let collection = [];

function addToCollection(title, artist, yearPublished){
  let info = {
    title: title,
    artist: artist,
    yearPublished: yearPublished
  }//end info
  collection.push(info)
}// end addToCollection

addToCollection('Let it be', 'The Beatles', '1970')

console.log(collection);

let results = [];

function findByArtist(artist){
  for (let i = 0; i < collection.length; i++) {
    if (collection[i] === artist) {
      console.log('Weve found a match', artist);
    }// end if statement
  }// end for loop
}// end findByArtist

findByArtist('The Beatles');

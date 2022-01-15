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
addToCollection('Jack and Diane', 'John Mellancamp', '1982')


console.log(collection);

function showCollection(array){
  console.log(array.length);
  for (let i = 0; i < array.length; i++) {
    console.log(array[i]);
  }//end for loop
}// end showCollection

showCollection(collection);


let results = [];

function findByArtist(artist){
  for (let i = 0; i < collection.length; i++) {
    if (collection[i] == artist) {
      console.log('Match:', artist);
    }// end if statement
  }// end for loop
}// end findByArtist

findByArtist('The Beatles');

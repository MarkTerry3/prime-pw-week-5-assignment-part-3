console.log('***** Music Collection *****')


let collection = [];

function addToCollection(title, artist, yearPublished){
  let input = {
    title: title,
    artist: artist,
    yearPublished: yearPublished
  }//end info
  collection.push(input)
}// end addToCollection

addToCollection('Let it be', 'The Beatles', '1970')
addToCollection('Jack and Diane', 'John Mellancamp', '1982')


console.log(collection);


let showingCollection = [showCollection()];

function showCollection(array){
  console.log(array.length);
  for (let i of array) {
    console.log(`${i.title} by ${i.artist} published in ${i.yearPublished}`);
  }// end for loop
}// end showCollection

showCollection(collection);


let results = [];

function findByArtist(artist){
  for (let i = 0; i < collection.length; i++) {
    if (collection[i] == artist) {
      results.push(artist)
      console.log('Match:', artist);
    }// end if statement
  }// end for loop
}// end findByArtist

findByArtist('The Beatles');

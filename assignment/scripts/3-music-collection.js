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

addToCollection('when im gone', 'eminem', '2007')

console.log(collection);

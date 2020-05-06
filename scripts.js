let data = {
    photo: 'gallery/a.jpg',
    title: 'Tom Sellec ',
    description: 'is so handsome'
  };

let data2 = {
    photo: 'gallery/c.jpg',
    title: 'Tom Sellec ',
    description: 'is soooooo hot'
};
let data3 = {
    photo: 'gallery/d.jpg',
    title: 'Tom Sellec ',
    description: 'is soooooo hot'
};
let data4 = {
    photo: 'gallery/e.jpg',
    title: 'Tom Sellec ',
    description: 'is soooooo hot'
};
let data5 = {
    photo: 'gallery/f.jpg',
    title: 'Tom Sellec ',
    description: 'is soooooo hot'
};

$('#photo').attr('src', data.photo);
$('#photo-title').text( data.title);
$('#photo-desc').text( data.description);

let currentPhoto = 0;
let imagesData = [data,data2,data3,data4,data5]

let loadPhoto = (x) => {
    $('#photo').attr('src', imagesData[x].photo);
    $('#photo-title').text(  imagesData[x].title);
    $('#photo-desc').text(imagesData[x].description);
}
 
loadPhoto(currentPhoto);

$('#right').click(() => { currentPhoto++;loadPhoto(currentPhoto);}) 
$('#left').click(() => { currentPhoto--;loadPhoto(currentPhoto);})
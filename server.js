var Twit = require('twit')

var fs = require('fs'),
    path = require('path'),
    Twit = require('twit'),
    config = require(path.join(__dirname, 'config.js'));

var T = new Twit(config);

var rand = 0;

function pick_random_album_artwork() {
  var album_artwork = [
    'AFlockOfSeagulls-AFlockOfSeagulls.jpg',
    'DEVO-SomethingForEverybody.jpg',
    'JeffBridges-SleepingTapes.jpg',
    'MagicSword-Volume1.jpg',
    'Rush-MovingPictures.jpeg',
    'Skyhill-RunWithTheHunted.jpg',
    'TheBlackKeys-TurnBlue.jpg',
    'TheMonkees-GoodTimes.jpg',
    'TupperWareRemixParty-LadyWorld.png'
  ];
  rand = Math.floor(Math.random() * album_artwork.length);
  return album_artwork[rand];
}

var band_names = [
  'A Flock Of Seagulls',
  'DEVO',
  'Jeff Bridges',
  'Magic Sword',
  'Rush',
  'Skyhill',
  'The Black Keys',
  'The Monkees',
  'Tupper Ware Remix Party'
];

var album_names = [
  'AFlockOfSeagulls',
  'SomethingForEverybody',
  'SleepingTapes',
  'Volume1',
  'MovingPictures',
  'RunWithTheHunted',
  'TurnBlue',
  'GoodTimes',
  'LadyWorld'
];

function upload_random_image() {
  console.log('Opening an image...');
  var image_path = path.join(__dirname, '/album_artwork/' + pick_random_album_artwork()),
      b64content = fs.readFileSync(image_path, { encoding: 'base64' });

  console.log('Uploading an image...');

  T.post('media/upload', { media_data: b64content }, function (err, data, response) {
    if (err){
      console.log('ERROR');
      console.log(err);
    }
    else{
      console.log('Uploaded an image!');

      T.post('statuses/update', {
        status: band_names[rand] + ' - #' + album_names[rand], media_ids: new Array(data.media_id_string)
      },
        function(err, data, response) {
          if (err){
            console.log('Error!');
            console.log(err);
          }
          else{
            console.log('Posted an image!');
          }
        }
      );
    }
  });
}

setInterval(upload_random_image, 120000);

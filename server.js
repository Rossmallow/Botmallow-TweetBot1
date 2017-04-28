var Twit = require('twit')

var fs = require('fs'),
    path = require('path'),
    Twit = require('twit'),
    config = require(path.join(__dirname, 'config.js'));

var T = new Twit(config);

var i = 0;

function pick_random_album_artwork() {
  var album_artwork = [
    'AFlockOfSeagulls-AFlockOfSeagulls.jpg',
    'BeachBoys-PetSounds.jpg',
    'BlackKeys-Brothers.jpg',
    'BlackKeys-Chulahoma.jpg',
    'BlackKeys-ElCamino.jpg',
    'BlackKeys-MagicPotion.jpg',
    'BlackKeys-TurnBlue.jpg',
    'BStory-QuantumMechanics.jpg',
    'DangerMode-Activation.jpg',
    'DangerMode-CrimeWave.jpg',
    'DangerMode-SecretDimensions.jpg',
    'DangerMode-Timeless.jpg',
    'DefLeppard-Hysteria.jpg',
    'Devo-GreatestHits.jpg',
    'Devo-QAreWeNotMen?AWeAreDevo!.jpg',
    'Devo-SomethingForEverybody.jpg',
    'GusJohnson-ChampagneSeats.jpg',
    'Home-Odyssey.jpg',
    'JeffBridges-SleepingTapes.jpg',
    'JeffersonStarship-Superhits.jpg',
    'MagicSword-Legend.jpg',
    'MagicSword-Volume1.jpg',
    'MichaelNesmith-AndTheHitsJustKeepOnComin.jpg',
    'MichaelNesmith-LooseSalute.jpg',
    'MichaelNesmith-MagneticSouth.jpg',
    'MichaelNesmith-NevadaFighter.jpg',
    'MichaelNesmith-TantamountToTreasonVolumeOne.jpg',
    'Monkees-Changes.jpg',
    'Monkees-GoodTimes.jpg',
    'Monkees-Head.jpg',
    'Monkees-Headquarters.jpg',
    'Monkees-InstantReplay.jpg',
    'Monkees-MoreOfTheMonkees.jpg',
    'Monkees-Pices,Aquarius,Capricorn&JonesLtd.jpg',
    'Monkees-TheBirds,TheBees&TheMonkees.jpg',
    'Monkees-TheMonkees.jpg',
    'Monkees-TheMonkees50ClassicAlbumCollection.jpg',
    'Monkees-TheMonkeesPresent.jpg',
    'NightRunner-Starfighter.jpg',
    'NinjaSexParty-AttitudeCity.jpg',
    'NinjaSexParty-NSFW.jpg',
    'NinjaSexParty-StrawberriesAndCream.jpg',
    'NinjaSexParty-UnderTheCovers.jpg',
    'OneRepublic-Native.jpg',
    'OneRepublic-WakingUp.jpg',
    'Outfield-BigInningsBestOfTheOutfield.jpg',
    'PILOTPRIEST-TRANS.jpg',
    'Rush-2112.jpg',
    'Rush-MovingPictures.jpeg',
    'Rush-Presto.jpg',
    'Rush-RollTheBones.jpg',
    'Rush-Rush.jpg',
    'Rush-TestForEcho.jpg',
    'Skyhill-Firefly.jpg',
    'Skyhill-RunWithTheHunted.jpg',
    'Starbomb-PlayerSelect.jpg',
    'Starbomb-Starbomb.jpg',
    'TupperWareRemixParty-2Nite.jpg',
    'TupperWareRemixParty-BelieveInYourDreams.jpg',
    'TupperWareRemixParty-GuardiansOfTheZone.jpg',
    'TupperWareRemixParty-LadyWorld.png',
    'TupperWareRemixParty-TheDevice.jpg',
    'VanHalen-1984.jpg',
    'WeirdAlYankovic-Alpocalypse.jpg',
    'WeirdAlYankovic-Gump.jpg',
    'WeirdAlYankovic-MandatoryFun.jpg',
    'WeirdAlYankovic-OffTheDeepEnd.jpg',
    'WeirdAlYankovic-RunningWithScissors.jpg',
    'WeirdAlYankovic-StraightOuttaLynwood.jpg',
    'WeirdAlYankovic-TheEssentialWeirdAlYankovic.jpg',
    'WeirdAlYankovic-TheTVAlbum.jpg',
    'WeirdAlYankovic-UHF.jpg'
  ];
  if (i < album_artwork.length) {
    rand = i;
    i++;
  }
  else {
    i = 0;
  }
  return album_artwork[rand];
}

var band_names = [
  'A Flock Of Seagulls',
  'TheBeachBoys',
  'TheBlackKeys',
  'TheBlackKeys',
  'TheBlackKeys',
  'TheBlackKeys',
  'BStory',
  'DangerMode',
  'DangerMode',
  'DangerMode',
  'DangerMode',
  'DefLeppard',
  'Devo',
  'Devo',
  'Devo',
  'GusJohnson',
  'Home',
  'JeffBridges',
  'JeffersonStarship',
  'MagicSword',
  'MagicSword',
  'MichaelNesmith',
  'MichaelNesmith',
  'MichaelNesmith',
  'MichaelNesmith',
  'MichaelNesmith',
  'TheMonkees',
  'TheMonkees',
  'TheMonkees',
  'TheMonkees',
  'TheMonkees',
  'TheMonkees',
  'TheMonkees',
  'TheMonkees',
  'TheMonkees',
  'TheMonkees',
  'TheMonkees',
  'NightRunner',
  'NinjaSexParty',
  'NinjaSexParty',
  'NinjaSexParty',
  'NinjaSexParty',
  'OneRepublic',
  'OneRepublic',
  'TheOutfield',
  'PILOTPRIEST',
  'Rush',
  'Rush',
  'Rush',
  'Rush',
  'Rush',
  'Rush',
  'Skyhill',
  'Skyhill',
  'Starbomb',
  'Starbomb',
  'TupperWareRemixParty',
  'TupperWareRemixParty',
  'TupperWareRemixParty',
  'TupperWareRemixParty',
  'TupperWareRemixParty',
  'VanHalen',
  '\"WeirdAl\"Yankovic',
  '\"WeirdAl\"Yankovic',
  '\"WeirdAl\"Yankovic',
  '\"WeirdAl\"Yankovic',
  '\"WeirdAl\"Yankovic',
  '\"WeirdAl\"Yankovic',
  '\"WeirdAl\"Yankovic',
  '\"WeirdAl\"Yankovic',
  '\"WeirdAl\"Yankovic'
];

var album_names = [
  'AFlockOfSeagulls',
  'PetSounds',
  'Brothers',
  'Chulahoma',
  'ElCamino',
  'MagicPotion',
  'TurnBlue',
  'QuantumMechanics',
  'Activation',
  'CrimeWave',
  'SecretDimenstions',
  'Timeless',
  'Hysteria',
  'GreatestHits',
  'Q:AreWeNotMen?A:WeAreDevo',
  'SomethingForEverybody',
  'ChampagneSeats',
  'Odyssey',
  'SleepingTapes',
  'Superhits',
  'Legend',
  'Volume1',
  'AndTheHitsJustKeepOnComin\'',
  'LooseSalute',
  'MagneticSouth',
  'NevadaFighter',
  'TantamountToTreasonVolumeOne',
  'Changes',
  'GoodTimes',
  'Head',
  'Headquarters',
  'InstantReplay',
  'MoreOfTheMonkees',
  'Pices,Aquarius,Capricorn&JonesLtd',
  'TheBirds,TheBees&TheMonkees',
  'TheMonkees',
  'TheMonkees50ClassicAlbumCollection',
  'TheMonkeesPresent',
  'Starfighter',
  'AttitudeCity',
  'NSFW',
  'StrawberriesAndCream',
  'UnderTheCovers',
  'Native',
  'WakingUp',
  'BigInnings:BestOfTheOutfield',
  'TRANS',
  '2112',
  'MovingPictures',
  'Presto',
  'RollTheBones',
  'Rush',
  'TestForEcho',
  'Firefly',
  'RunWithTheHunted',
  'PlayerSelect',
  'Starbomb',
  '2Nite',
  'BelieveInYourDreams',
  'GuardiansOfTheZone',
  'LadyWorld',
  'TheDevice',
  '1984',
  'Alpocalypse',
  'Gump',
  'MandatoryFun',
  'OffTheDeepEnd',
  'RunningWithScissors',
  'StraighOuttaLynwood',
  'TheEssential\"WeirdAl\"Yankovic',
  'TheTVAlbum',
  'UHF'
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

setInterval(upload_random_image, 600000);

/* A Twitterbot made by @Rossmallow
 * GitHub.com/Rossmallow
 * LinkedIn.com/in/RossNel
*/

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
    'HOME-Odyssey.jpg',
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
  rand = Math.floor(Math.random() * album_artwork.length);
  return album_artwork[rand];
}

var band_names = [
  'AFlockOfSeagulls @REALSEAGULLS',
  'TheBeachBoys @TheBeachBoys',
  'TheBlackKeys @theblackkeys',
  'TheBlackKeys @theblackkeys',
  'TheBlackKeys @theblackkeys',
  'TheBlackKeys @theblackkeys',
  'TheBlackKeys @theblackkeys',
  'BStory @bstory',
  'DangerMode @DangerModeMusic',
  'DangerMode @DangerModeMusic',
  'DangerMode @DangerModeMusic',
  'DangerMode @DangerModeMusic',
  'DefLeppard @DefLeppard',
  '‏Devo @DEVO',
  '‏Devo @DEVO',
  '‏Devo @DEVO',
  '‏GusJohnson @Gusbuckets',
  'HOME',
  'JeffBridges @TheJeffBridges',
  'JeffersonStarship',
  'MagicSword @magicswordmusic',
  'MagicSword @magicswordmusic',
  'MichaelNesmith',
  'MichaelNesmith',
  'MichaelNesmith',
  'MichaelNesmith',
  'MichaelNesmith',
  'TheMonkees @TheMonkees',
  'TheMonkees @TheMonkees',
  'TheMonkees @TheMonkees',
  'TheMonkees @TheMonkees',
  'TheMonkees @TheMonkees',
  'TheMonkees @TheMonkees',
  'TheMonkees @TheMonkees',
  'TheMonkees @TheMonkees',
  'TheMonkees @TheMonkees',
  'TheMonkees @TheMonkees',
  'TheMonkees @TheMonkees',
  'NightRunner @Nightrunnermx',
  'NinjaSexParty @ninjasexparty',
  'NinjaSexParty @ninjasexparty',
  'NinjaSexParty @ninjasexparty',
  'NinjaSexParty @ninjasexparty',
  'OneRepublic @OneRepublic',
  'OneRepublic @OneRepublic',
  'TheOutfield',
  'PILOTPRIEST @realpilotpriest',
  '‏Rush @rushtheband',
  '‏Rush @rushtheband',
  '‏Rush @rushtheband',
  '‏Rush @rushtheband',
  '‏Rush @rushtheband',
  '‏Rush @rushtheband',
  'Skyhill',
  'Skyhill',
  '‏Starbomb @starbomb',
  '‏Starbomb @starbomb',
  'TupperWareRemixParty @TWRPband ‏',
  'TupperWareRemixParty @TWRPband ‏',
  'TupperWareRemixParty @TWRPband ‏',
  'TupperWareRemixParty @TWRPband ‏',
  'TupperWareRemixParty @TWRPband ‏',
  'VanHalen @VanHalen',
  '\"WeirdAl\"Yankovic @alyankovic',
  '\"WeirdAl\"Yankovic @alyankovic',
  '\"WeirdAl\"Yankovic @alyankovic',
  '\"WeirdAl\"Yankovic @alyankovic',
  '\"WeirdAl\"Yankovic @alyankovic',
  '\"WeirdAl\"Yankovic @alyankovic',
  '\"WeirdAl\"Yankovic @alyankovic',
  '\"WeirdAl\"Yankovic @alyankovic',
  '\"WeirdAl\"Yankovic @alyankovic'
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
  'QAreWeNotMenAWeAreDevo',
  'SomethingForEverybody',
  'ChampagneSeats',
  'Odyssey',
  'SleepingTapes',
  'Superhits',
  'Legend',
  'Volume1',
  'AndTheHitsJustKeepOnComin',
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
  'PicesAquariusCapricorn&JonesLtd',
  'TheBirdsTheBees&TheMonkees',
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
  'BigInningsBestOfTheOutfield',
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
  'TheEssentialWeirdAlterYankovic',
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
        status: album_names[rand] + ' by #' + band_names[rand], media_ids: new Array(data.media_id_string)
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

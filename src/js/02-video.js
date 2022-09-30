import throttle from 'lodash.throttle'; 
import Player from '@vimeo/player';

const iframe = document.querySelector('iframe');
const localStorageTimeKey = 'videoplayer-current-time';
const player = new Player(iframe);

player.on('timeupdate', throttle(onPlayTime, 1000), );

function onPlayTime({seconds}) {
    // console.log('evt.seconds==', evt.seconds);
    localStorage.setItem(localStorageTimeKey, seconds);
};
player.setCurrentTime(localStorage.getItem(localStorageTimeKey));

//  Для себе, тренувався
player.on('play',onPlay);
function onPlay(evt) {
    console.log(evt);
    console.log('duration clip', (evt.duration/60).toFixed(2), "min");
    console.log('Play clip', (evt.seconds/60).toFixed(2), "min");
}







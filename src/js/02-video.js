import throttle from 'lodash.throttle'; 
import Player from '@vimeo/player';

const iframe = document.querySelector('iframe');
const localStorageTimeKey = 'videoplayer-current-time';

const player = new Player(iframe);

// записуємо в localStorage текуще значення часу
function onPlayTime({seconds}) {localStorage.setItem(localStorageTimeKey, seconds);
    // console.log('evt.seconds==', evt.seconds);    
};

// получаемо із localStorage текуще значення
const currentTimePKey = localStorage.getItem(localStorageTimeKey);
// console.log('currentTimePKey=', currentTimePKey);

// якщо є значення localStorage та != 0, встановлюємо це значення
currentTimePKey ? player.setCurrentTime(currentTimePKey) : null;
// if (currentTimePKey) {
//     player.setCurrentTime(currentTimePKey);
// }
// else {
//   currentTimePKey === null;
// }
player.on('timeupdate', throttle(onPlayTime, 1000), );


//  Для себе, тренувався
player.on('play',onPlay);
function onPlay(evt) {
    console.log(evt);
    console.log('duration clip', (evt.duration/60).toFixed(2), "min");
    console.log('Play clip', (evt.seconds/60).toFixed(2), "min");
}




// если есть сохраненная текущая позиция и она отлична от 0, устанавливаем на плеере сохраненную текущую позицию
// currentTimeOfVideo ? player.setCurrentTime(currentTimeOfVideo) : null;






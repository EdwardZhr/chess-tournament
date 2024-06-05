import './index.css';
import RunningLine from './components/RunningLine/RunningLine';
import Stages from './components/Stages/Stages';
import Participants from './components/Participants/Participants';

const windowWidth = window.innerWidth;
let itemsToShow;
let  participantCardWidth;

const runningLine = new RunningLine
runningLine.duplicateText()

const stages = new Stages
stages.setEventListeners()
stages.showSlides(0)

if (windowWidth > 1199.98) {
    itemsToShow = 3;
    participantCardWidth = 414;
} else if (windowWidth >  699.98) {
    itemsToShow = 2;
    participantCardWidth = 340 + (windowWidth-670)/2;
    console.log(windowWidth)
    console.log(participantCardWidth)
    console.log((windowWidth-690)/4)
} else if (windowWidth >  375.98) {
    itemsToShow = 1;
    participantCardWidth = 7 + windowWidth;
} else {
    itemsToShow = 1;
    participantCardWidth = 355;
}

const participants = new Participants(participantCardWidth, itemsToShow);
participants.updateCounter(itemsToShow)
participants.setEventListeners()
export default class Stages {
    constructor() {
        this._btnLeft = document.querySelector('.stages__btn_direction_left');
        this._btnRight = document.querySelector('.stages__btn_direction_right');
        this._listItems = document.querySelectorAll('.stages__li');
        this._ellipses = document.querySelectorAll('.stages__ellipse');
        this._slideIndex = 0;
    } 
    
    _hideAllSlides() {
        this._listItems.forEach((item) => {
            item.classList.remove('stages__li_active_true')
        })
    }

    _changeElipseState(n) {
        if (this._ellipses[n-1]) {
            this._ellipses[n-1].classList.remove('stages__ellipse_active')
        }
        if (this._ellipses[n+1]) {
            this._ellipses[n+1].classList.remove('stages__ellipse_active');
        }

        this._ellipses[n].classList.add('stages__ellipse_active');
    }

    showSlides(n) {
        this._slideIndex = n
        this._changeElipseState(n);
        this._hideAllSlides();

        if (n === 0) {
            this._btnLeft.classList.add('stages__btn_disabled');
            this._btnLeft.disabled = true;
            this._listItems[0].classList.add('stages__li_active_true');
            this._listItems[1].classList.add('stages__li_active_true');
        }
        if (n === 1) {
            this._btnLeft.classList.remove('stages__btn_disabled');
            this._btnLeft.disabled = false;
            this._listItems[2].classList.add('stages__li_active_true');
        }
        if (n === 2) {
            this._listItems[3].classList.add('stages__li_active_true');
            this._listItems[4].classList.add('stages__li_active_true');
        }
        if (n === 3) {
            this._btnRight.classList.remove('stages__btn_disabled');
            this._btnRight.disabled = false;
            this._listItems[5].classList.add('stages__li_active_true');
        }
        if (n === 4) {
            this._btnRight.classList.add('stages__btn_disabled');
            this._btnRight.disabled = true;
            this._listItems[6].classList.add('stages__li_active_true');
        }
    }

    setEventListeners() {
        this._btnLeft.addEventListener('click', (evt)=> {
            evt.preventDefault();
            this.showSlides(--this._slideIndex);
        })
        this._btnRight.addEventListener('click', (evt)=> {
            evt.preventDefault();
            this.showSlides(++this._slideIndex);
        })
    }
    
}

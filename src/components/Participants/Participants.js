export default class Participants {
    constructor(itemWidth, itemsToShow) {
        this._btnsLeft = document.querySelectorAll('.participants__btn_direction_left');
        this._btnsRight = document.querySelectorAll('.participants__btn_direction_right');
        this._list = document.querySelector('.participants__ul')
        this._listItems = document.querySelectorAll('.participants__li');
        this._counters = document.querySelectorAll('.participants__counter_current');
        this._itemsToShow = itemsToShow;
        this._currentIndex = this._itemsToShow;
        this._itemWidth = itemWidth;
    }

    _debounce(func, wait) {
        let timeout;
        let immediate = true;
        const debouncedFunction = function(...args) {
            if (immediate) {
                func.apply(this, args);
                immediate = false;
            }

            timeout = setTimeout(() => {
                clearTimeout(timeout);
                immediate = true;
            }, wait);
        };
        return debouncedFunction
    }

    _resetCarousel() {
        this._list.style.transform = `translateX(0)`;
        this._listItems = document.querySelectorAll('.participants__li');
        this._listItems.forEach((item, index) => {
            if (index > this._itemsToShow) {
            }
        })
        this._list.classList.remove('participants__ul_animate');
    }

    updateCounter(n) {
        const i = n / 6 - 0.001;
        this._counters.forEach((counter) => (counter.textContent = n - 6 * Math.floor(i)))
    }

    _swipe(n, direction) {
        this.updateCounter(n);
        this._currentIndex = n;
        let timeout;
        
        if (direction === 'right') {
            this._list.classList.add('participants__ul_animate');
            this._list.style.transform = `translateX(${-this._itemWidth}px)`;
            clearTimeout(timeout);
            timeout = setTimeout(() => {
                const firstItem = this._listItems[0];
                this._list.appendChild(firstItem); 
                this._resetCarousel();
            }, 350);
        }

        if (direction === 'left') {
            this._list.style.transform = `translateX(${-this._itemWidth}px)`;
            const lastItem = this._listItems[this._listItems.length - 1];
            this._list.insertBefore(lastItem, this._list.firstChild);
            clearTimeout(timeout);
            timeout = setTimeout(() => {
                this._list.classList.add('participants__ul_animate');
                this._list.style.transform = `translateX(0)`;
            }, 0);
            timeout = setTimeout(() => {
                this._resetCarousel();
            }, 350);
        }
    }

    setEventListeners() {
        const debouncedRight = this._debounce(() => {
            this._swipe(++this._currentIndex, 'right')
        }, 350)

        this._btnsLeft.forEach((btn) => (btn.addEventListener('click', this._debounce(() => {
            this._swipe(--this._currentIndex, 'left')
        }, 350))))

        this._btnsRight.forEach((btn) => (btn.addEventListener('click', debouncedRight)))

        setInterval(debouncedRight, 4000);
    }
}

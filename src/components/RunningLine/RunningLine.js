export default class RunningLine {
    constructor() {
        this._runningLines = document.querySelectorAll('.running-line__content');
    }

    duplicateText() {
        this._runningLines.forEach((line) => {
            const textElements = line.querySelectorAll('.running-line__text');
            textElements.forEach((el)=>{
                let clonedEl = el.cloneNode(true);
                line.appendChild(clonedEl);
            })

        })
    }
}
const TypeWriter = function (txtElement, words, wait = 3000) {
    this.txtxElement = txtElement;
    this.words = words;
    this.wait = wait;
    this.wordIndex = 0;
    this.txt = '';
    this.isDeleting = false;
    this.type();
};

TypeWriter.prototype.type = function () {
    let typeSpeed = 500,
        currentIndex = this.wordIndex % this.words.length,
        currentWord = this.words[currentIndex];


    if (this.isDeleting) {
        typeSpeed = typeSpeed / 2;
        this.txt = currentWord.substring(0, this.txt.length - 1)
    } else {
        typeSpeed = 500;
        this.txt = currentWord.substring(0, this.txt.length + 1)
    }

    this.txtxElement.innerHTML = this.txt;


    if (this.txt === currentWord && !this.isDeleting) {
        typeSpeed = 3000;
        this.isDeleting = true;
    } else if (this.isDeleting && this.txt === '') {
        this.wordIndex++;
        this.isDeleting = false;
    }


    setTimeout(() => this.type(), typeSpeed)
};


document.addEventListener('DOMContentLoaded', init);

function init() {
    let txtElement = document.querySelector('.text'),
        words = JSON.parse(txtElement.getAttribute('data-words')),
        wait = txtElement.getAttribute('data-wait');

    new TypeWriter(txtElement, words, wait);
}

/*
class TypeWriter {
    constructor(txtElement, words, wait = 3000) {
        this.txtElement = txtElement;
        this.words = words;
        this.wait = wait;
        this.wordIndex = 0;
        this.txt = '';
        this.isDeleting = false;
        this.type();
    }
    type () {
        let speed = 500,
            currentIndex = this.wordIndex % this.words.length,
            currentWord = this.words[currentIndex];

        if (this.isDeleting) {
            speed = speed / 2;
            this.txt = currentWord.substring(0, this.txt.length - 1);
        } else {
            speed = 500;
            this.txt = currentWord.substring(0, this.txt.length + 1);
        }

        this.txtElement.innerHTML = this.txt;


        if (!this.isDeleting && this.txt === currentWord) {
            this.isDeleting = true;
            speed = this.wait;
        } else if (this.isDeleting && this.txt === '') {
            this.wordIndex++;
            this.isDeleting = false;
        }


        setTimeout(() => this.type(), speed)
    };
}

document.addEventListener('DOMContentLoaded', init);


function init() {
    let txtElement = document.querySelector('.text'),
        words = JSON.parse(txtElement.getAttribute('data-words')),
        wait = txtElement.getAttribute('data-wait');

    new TypeWriter(txtElement, words, wait);
}*/

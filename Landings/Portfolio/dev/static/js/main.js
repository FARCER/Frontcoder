$(document).ready(function () {
    svg4everybody({});

    const sandwichToggle = function () {
        // Выбираем элементы, которые нам нужны. В примере мы ищем элементы с классом "sandwich"
        let sandwichElements = document.querySelectorAll('.sandwich');
        // Проходим циклом по всем эдементам и на каждый элемент вешаем слушателя, который по клику будет переключать класс
        sandwichElements.forEach((item) => {
            item.addEventListener('click', showSandwichTarget);
        });

        function showSandwichTarget() {
            let targetId = this.getAttribute('data-target-id'),
                targetClassToggle = this.getAttribute('data-target-class-toggle');
            this.classList.toggle('is-active');
            if (targetId && targetClassToggle) {
                document.getElementById(targetId).classList.toggle(targetClassToggle);
            }
        }
    };
    sandwichToggle();


});


// Полифилы

// forEach IE 11
if ('NodeList' in window && !NodeList.prototype.forEach) {
    console.info('polyfill for IE11');
    NodeList.prototype.forEach = function (callback, thisArg) {
        thisArg = thisArg || window;
        for (var i = 0; i < this.length; i++) {
            callback.call(thisArg, this[i], i, this);
        }
    };
}

// closest IE 11
(function () {
    if (!Element.prototype.closest) {
        Element.prototype.closest = function (css) {
            var node = this;
            while (node) {
                if (node.matches(css)) return node;
                else node = node.parentElement;
            }
            return null;
        };
    }
})();

// matches IE 11
(function () {
    if (!Element.prototype.matches) {
        Element.prototype.matches = Element.prototype.matchesSelector ||
            Element.prototype.webkitMatchesSelector ||
            Element.prototype.mozMatchesSelector ||
            Element.prototype.msMatchesSelector;
    }
})();

//Array.form IE 11
if (!Array.from) {
    Array.from = function (object) {
        'use strict';
        return [].slice.call(object);
    };
}

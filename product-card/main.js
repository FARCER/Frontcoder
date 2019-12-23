const buyBtn = document.querySelectorAll('.product__buy');

buyBtn.forEach(btn => {
  btn.addEventListener('click', showCounter)
});

function showCounter() {
  const counter = this.nextElementSibling;
  this.style.display = 'none';
  counter.style.display = 'flex';
}


const counter = function () {
  const btns = document.querySelectorAll('.counter__btn');
  const inputs = document.querySelectorAll('.counter__value');

  btns.forEach(btn => {
    btn.addEventListener('click', counterState);
    btn.addEventListener('click', countPrice);
  });

  inputs.forEach(input => {
    input.addEventListener('keyup', countPrice)
  });

  function counterState() {
    const dir = this.dataset.direction;
    const inputEl = this.parentElement.querySelector('.counter__value');
    let currentValue = inputEl.value;

    dir === 'plus' ? counterPlus(inputEl, currentValue) : counterMinus(inputEl, currentValue)
  }

  const counterPlus = (el, val) => {
    el.value = +val + 1
  };

  const counterMinus = (el, val) => {
    if (+val - 1) el.value = +val - 1;
  };

  function countPrice() {
    const totalPrice = this.parentElement.nextElementSibling;
    const currentPriceValue = this.closest('.product').querySelector('.product__price').innerText;
    const inputEl = this.parentElement.querySelector('.counter__value');
    let currentValue = inputEl.value;
    let totalPriceNumber;
    if (currentValue > 1) {
      totalPriceNumber = +currentPriceValue * +currentValue;
      totalPrice.textContent = `Итого ${totalPriceNumber}`
    } else {
      totalPrice.textContent = '';
    }
  }

};

counter();

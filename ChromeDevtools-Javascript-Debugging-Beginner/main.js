const inp1 = document.getElementById('inp1');
const inp2 = document.getElementById('inp2');
const res =  document.getElementById('result');

function sum() {
    const v1 = +inp1.value;
    const v2 = +inp2.value;
    res.innerText =`Результат: ${v1 + v2}`;
}

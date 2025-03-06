const countValue = document.querySelector('#counter');

const increment = () => {

    let positiveCount = parseInt(countValue.innerText);
    positiveCount++;
    countValue.innerText = positiveCount;

};

const decrement = () => {
    negativeCount = parseInt(countValue.innerText);
    negativeCount--;
    countValue.innerText = negativeCount;
};
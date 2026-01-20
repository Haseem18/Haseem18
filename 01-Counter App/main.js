const countElm = document.querySelector(".counter h2");
const increaseBtn = document.querySelector(".increase_btn");
const decreaseBtn = document.querySelector(".decrease_btn");
const resetBtn = document.querySelector(".reset_btn");

let count = localStorage.getItem("count") || 0;
countElm.textContent = count;

const warnMessage = (msg) => {
    if (document.querySelector(".warn_msg")) {
        return;
    }
    const warnElm = document.createElement("p");
    warnElm.classList.add("warn_msg")
    warnElm.textContent = msg;

    countElm.parentElement.before(warnElm);
    
    setTimeout(() => {
        warnElm.remove();
    }, 2500)
}

const increaseCount = () => {
    if (count >= 10) {
        warnMessage("Maximum Count Limit.");
        return;
    };
    count++;
    countElm.textContent = count;

    localStorage.setItem("count", count)
}

const decreaseCount = () => {
    if (count <= 0) {
        warnMessage("Minimum Count Limit.");
        return;
    };
    count--;
    countElm.textContent = count;
    localStorage.setItem("count", count)
}

const resetCount = () => {
    if (count === 0) {
        warnMessage("Count is Already 0.");
        return;
    }
    count = 0;
    countElm.textContent = count;
    localStorage.setItem("count", count)
}

increaseBtn.addEventListener("click", increaseCount);
decreaseBtn.addEventListener("click", decreaseCount);
resetBtn.addEventListener("click", resetCount);
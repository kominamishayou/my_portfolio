document.addEventListener("DOMContentLoaded", () => {
    const historyContainer = document.querySelector(".history-container");
    const historyList = Array.from(document.querySelectorAll(".history"));

    const sortAsc = function(){
        historyList.sort((a, b) => {
            return new Date(b.dataset.date) - new Date(a.dataset.date);
        });
        doSort();
    }
    
    const sortDesc = function(){
        historyList.sort((a, b) => {
            return new Date(a.dataset.date) - new Date(b.dataset.date);
        });
        doSort();
    }  
    
    
    const doSort = function(){
        historyList.forEach(item => {
            historyContainer.appendChild(item);
        })
    }

    document.querySelector("#sort-new").addEventListener("click", sortAsc);
    document.querySelector("#sort-old").addEventListener("click", sortDesc);
})
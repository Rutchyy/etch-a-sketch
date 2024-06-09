const grid = document.querySelector("#grid");
const btn = document.querySelector("button");


function createGrid(size) {
    for(let i = 1; i <= size; i++) {
        let row = document.createElement("div");
        row.classList.add("row");
    
        for(let i = 1; i <= size; i++) {
            let square = document.createElement("div");
            square.classList.add("square")
    
            row.appendChild(square);
    
            square.addEventListener("mouseover", () => {
                square.setAttribute("style", "background: black;")
            });
        };
    
        grid.appendChild(row);
    };
}

function deleteGrid() {
    while (grid.firstChild) {
        grid.removeChild(grid.lastChild);
      }
}

btn.addEventListener("click", () => {
    let newGrid = prompt("Input a new grid size: ");
    if(newGrid > 100) {
        alert("Size to large!");
    } else {
        deleteGrid();
        createGrid(Number(newGrid));
    }
});

createGrid(8);
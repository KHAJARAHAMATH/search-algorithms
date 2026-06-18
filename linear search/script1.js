const arr = [12, 25, 7, 34, 18, 50, 29];

const container = document.getElementById("array-container");

arr.forEach(num => {
    const div = document.createElement("div");
    div.classList.add("box");
    div.innerText = num;
    container.appendChild(div);
});

const boxes = document.querySelectorAll(".box");

function sleep(ms){
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function linearSearch(){

    let target = Number(document.getElementById("target").value);

    document.getElementById("status").innerText = "";

    boxes.forEach(box=>{
        box.classList.remove("current","found","not-found");
    });

    for(let i=0;i<arr.length;i++){

        boxes[i].classList.add("current");

        await sleep(1000);

        if(arr[i]===target){

            boxes[i].classList.remove("current");
            boxes[i].classList.add("found");

            document.getElementById("status").innerText =
            `Element Found at Index ${i}`;

            return;
        }

        boxes[i].classList.remove("current");
        boxes[i].classList.add("not-found");
    }

    document.getElementById("status").innerText =
    "Element Not Found";
}
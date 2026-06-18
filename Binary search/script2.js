const arr = [5, 10, 15, 20, 25, 30, 35, 40, 45];

const container = document.getElementById("array-container");

arr.forEach(num => {
    const box = document.createElement("div");
    box.classList.add("box");
    box.innerText = num;
    container.appendChild(box);
});

const boxes = document.querySelectorAll(".box");

function sleep(ms){
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function binarySearch(){

    let target = Number(document.getElementById("target").value);

    document.getElementById("status").innerText = "";

    boxes.forEach(box=>{
        box.className = "box";
    });

    let low = 0;
    let high = arr.length - 1;

    while(low <= high){

        boxes.forEach(box=>{
            box.className = "box";
        });

        for(let i=low;i<=high;i++){
            boxes[i].classList.add("range");
        }

        let mid = Math.floor((low + high)/2);

        boxes[mid].classList.add("mid");

        document.getElementById("status").innerText =
        `Low = ${low} | Mid = ${mid} | High = ${high}`;

        await sleep(1500);

        if(arr[mid] === target){

            boxes[mid].className = "box found";

            document.getElementById("status").innerText =
            `Element Found at Index ${mid}`;

            return;
        }

        if(arr[mid] < target){

            for(let i=0;i<=mid;i++){
                boxes[i].className = "box removed";
            }

            low = mid + 1;
        }
        else{

            for(let i=mid;i<arr.length;i++){
                boxes[i].className = "box removed";
            }

            high = mid - 1;
        }

        await sleep(1500);
    }

    document.getElementById("status").innerText =
    "Element Not Found";
}
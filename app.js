function solve() {
const baseUrl = 'https://judgetests.firebaseio.com/schedule/';
let stopId = 'depot';
let info = document.querySelector('.info');
let stopName;

    function depart() {
        const url = `${baseUrl}${stopId}.json`
        fetch(url)
        .then((response)=>response.json())
        .then((data)=>{
            stopId = data.next;
            stopName = data.name;
            info.textContent = `Next stop ${stopName}`
        })
        .catch(()=>{
            info.textContent = "ERROR";
        })
        changeButton();
        
    }

    function arrive() {
        info.textContent = `Arriving at ${stopName}`;

        changeButton();
    }

    return {
        depart,
        arrive
    };
    function changeButton(){
        let departBtn = document.getElementById('depart');
        let btnArrive = document.getElementById('arrive');
        if(departBtn.disabled){
            departBtn.disabled = false;
            btnArrive.disabled = true;
        }else{
            departBtn.disabled = true;
            btnArrive.disabled = false;
        }
    }
   
}

let result = solve();
function getInfo() {
    let stopId = document.getElementById('stopId');
    let stopName = document.getElementById('stopName');
    let buses = document.getElementById('buses');
    let validBuses = ['1287', '1308','1327', '2334']
    if(!validBuses.includes(stopId.value)){
        stopName.textContent = "Error";
        return;
    }
    const url = `https://judgetests.firebaseio.com/businfo/${stopId.value}.json `;
    fetch(url).then((response)=>
        response.json())
        .then((busInfo)=>{
            stopName.textContent = busInfo.name;
            Object.keys(busInfo.buses).forEach(bus=>{
                let li = document.createElement('li');
                li.textContent = `Bus ${bus} arrives in ${busInfo.buses[bus]} minutes`
                buses.appendChild(li);
            })
        });
        stopId.value = '';
}
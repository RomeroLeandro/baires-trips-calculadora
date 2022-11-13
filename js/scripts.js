let vacacionesCalc = document.getElementById('vacacionesCalc')

vacacionesCalc.addEventListener('submit', expensas)

function valores() {
    let destino = document.getElementById('destino').value,
        ahorro = document.getElementById('ahorro').value,
        transporte = document.getElementById('transporte').value,
        hoteleria = document.getElementById('hoteleria').value,
        comida = document.getElementById('comida').value

    return { destino, ahorro, hoteleria, transporte, comida }    
}

function expensas(e) {
    e.preventDefault();
    
    const  { destino, ahorro, hoteleria, transporte,  comida } = valores()

    let expensas = parseInt(hoteleria) + parseInt(transporte) + parseInt(comida)
    let balance = ahorro - expensas

    UI(destino, ahorro, balance)
}

function UI(destino, ahorro, balance) {
    let resultado = document.getElementById('resultado')
    let dataPrint = document.createElement('div')
    
    dataPrint.innerHTML += `
    <div class= "total">
        <div>
            <h6>${destino}</h6>
        </div>
        <div>
            <h6>$${ahorro}</h6>
        </div>
        <div>
            <h6 id="total"><strong>$${balance}</strong></h6> 
        </div>
    </div>
    `
    resultado.appendChild(dataPrint) 

    reset()
}

function reset() {
    document.getElementById('vacacionesCalc').reset()
}

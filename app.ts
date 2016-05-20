namespace app {
    let vehicles: IVehicle[] = [];
    vehicles.push(new models.Car('Dodge', 'Challenger', 'Magenta', 2, 2));
    vehicles.push(new models.Car('Ferrari', 'Modena', 'Red', 2, 2));
    vehicles.push(new models.Car('Chevrolet', 'Volt', 'Purple', 4, 5, false));
    vehicles.push(new models.Truck('Ram', 'SuperCab', 'Navy', 4, 5, true));

    displayVehicles();

    function displayVehicles() {
        let elemString = "";
        vehicles.forEach((v, index) => {
            elemString += `<tr>
    <td class="hcenter">${v.make}</td>
    <td class="hcenter">${v.model}</td>
    <td class = "hcenter" style="background-color:${v.color}">${v.color}</td>
    <td class="hcenter">${v.numDoors}</td>
    <td class="hcenter">${v.numSeats}</td>
    <td class="hcenter">N/A</td>
    <td class="hcenter"> <button class="btn btn-danger" onclick="app.deleteVehicle(${index})">Delete</button> </td>
    </tr>
    `
        });
        $('#vehicle-display').html(elemString);
        //document.getElementbyId('vehicle-display').innerHTML = elemString;
    }
    export function deleteVehicle(index: number) {
      vehicles.splice(index, 1);
      displayVehicles();
        }

    export function startVehicleCreate() {
        $('#create-header').html(`
          <span>Choose a vehicle type: </span>
          <select class="form-control" style="max-width: 10%; display: inline-block";
          id="create-vehicle-type"
          onchange="app.chooseVehicleStyle()">
          <option disabled selected>---</option>
          <option value = "Car">Car</option>
          <option value = "Truck">Truck</option></select>
          <span> or </span><a>Cancel</a>`
        );
    }

    export function chooseVehicleStyle() {
        let type = $('#create-vehicle-type').val();
        //let type = (<HTMLInputElement>document.getElementbyId('create-vehicle-type')).value;
        if (type === 'Car') {
            $('#create-header').html(`
      <div class="row">
      <div class="form-group">
        <label>Car Make</label>
        <input id="car-make-input" class="form-control" />
      </div>
      <div class="form-group">
        <label>Car Model</label>
        <input id="car-model-input" class="form-control" />
      </div>
      <div class="form-group">
        <label>Color</label>
        <input id="car-color-input" type="color" class="form-control" />
      </div>
    </div>
    <div class="row">
      <div class="form-group">
        <label>Number of Doors</label>
        <input id="car-numDoors-input" type="number" class="form-control" />
      </div>
      <div class="form-group">
        <label>Number of Seats</label>
        <input id="car-numSeats-input" type="number" class="form-control" />
      </div>
      <div class="form-group">
        <label>Is it Cool?</label>
        <select id="car-isCool-input" class="form-control">
          <option value="true" selected>Yes</option>
          <option value="false">No</option>
        </select>
      </div>
    </div>
    <div class="row">
      <button class="btn btn-success" onclick="app.createCar()">Submit</button>
      <button class="btn btn-warning" onclick="app.returnToBeg()">Go Back</button>
    </div>
      `)

        } else if (type === 'Truck') {
          //TODO: add create truck form
          //TODO: add createTruck() method
          $('#create-header').html(`
    <div class="row">
    <div class="form-group">
      <label>Truck Make</label>
      <input id="truck-make-input" class="form-control" />
    </div>
    <div class="form-group">
      <label>Truck Model</label>
      <input id="truck-model-input" class="form-control" />
    </div>
    <div class="form-group">
      <label>Color</label>
      <input id="truck-color-input" type="color" class="form-control" />
    </div>
  </div>
  <div class="row">
    <div class="form-group">
      <label>Number of Doors</label>
      <input id="truck-numDoors-input" type="number" class="form-control" />
    </div>
    <div class="form-group">
      <label>Number of Seats</label>
      <input id="truck-numSeats-input" type="number" class="form-control" />
    </div>
    <div class="form-group">
      <label>Is it Cool?</label>
      <select id="truck-isCool-input" class="form-control">
        <option value="true" selected>Yes</option>
        <option value="false">No</option>
      </select>
    </div>
  </div>
  <div class="row">
    <button class="btn btn-success" onclick="app.createTruck()">Submit</button>
    <button class="btn btn-warning" onclick="app.returnToBeg()">Go Back</button>
  </div>
`)
        }
    }

  export function createCar() {
  let make = $('#car-make-input').val();
  let model = $('#car-model-input').val();
  let color = $('#car-color-input').val();
  let numDoors = $('#car-numDoors-input').val();
  let numSeats = $('#car-numSeats-input').val();
  let isCool = $('#car-isCool-input').val();



  let tempCar = new models.Car(make, model, color, numDoors, numSeats, isCool);
  vehicles.push(tempCar);
  displayVehicles();

  //input.value = '';
  $('#car-make-input').val('');
  $('#car-model-input').val('');
  $('#car-color-input').val('');
  $('#car-numDoors-input').val('');
  $('#car-numSeats-input').val('');
  $('#car-isCool-input').val('');
}
export function createTruck() {
let make = $('#truck-make-input').val();
let model = $('#truck-model-input').val();
let color = $('#truck-color-input').val();
let numDoors = $('#truck-numDoors-input').val();
let numSeats = $('#truck-numSeats-input').val();
let isCool = $('#truck-isCool-input').val();

let tempTruck = new models.Truck(make, model, color, numDoors, numSeats, isCool);
vehicles.push(tempTruck);
displayVehicles();

//input.value = '';
$('#truck-make-input').val('');
$('#truck-model-input').val('');
$('#truck-color-input').val('');
$('#truck-numDoors-input').val('');
$('#truck-numSeats-input').val('');
$('#truck-isCool-input').val('');
}
export function returnToBeg(){
$('#create-header').html(`<a onclick= "app.startVehicleCreate()">Add a Vehicle</a>`)
$('#go-back').html(`<a onclick= "app.startVehicleCreate()">Add a Vehicle</a>`)
}
}

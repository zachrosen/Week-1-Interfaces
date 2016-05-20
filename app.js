var app;
(function (app) {
    var vehicles = [];
    vehicles.push(new app.models.Car('Dodge', 'Challenger', 'Magenta', 2, 2));
    vehicles.push(new app.models.Car('Ferrari', 'Modena', 'Red', 2, 2));
    vehicles.push(new app.models.Car('Chevrolet', 'Volt', 'Purple', 4, 5, false));
    vehicles.push(new app.models.Truck('Ram', 'SuperCab', 'Navy', 4, 5, true));
    displayVehicles();
    function displayVehicles() {
        var elemString = "";
        vehicles.forEach(function (v, index) {
            elemString += "<tr>\n    <td class=\"hcenter\">" + v.make + "</td>\n    <td class=\"hcenter\">" + v.model + "</td>\n    <td class = \"hcenter\" style=\"background-color:" + v.color + "\">" + v.color + "</td>\n    <td class=\"hcenter\">" + v.numDoors + "</td>\n    <td class=\"hcenter\">" + v.numSeats + "</td>\n    <td class=\"hcenter\">N/A</td>\n    <td class=\"hcenter\"> <button class=\"btn btn-danger\" onclick=\"app.deleteVehicle(" + index + ")\">Delete</button> </td>\n    </tr>\n    ";
        });
        $('#vehicle-display').html(elemString);
    }
    function deleteVehicle(index) {
        vehicles.splice(index, 1);
        displayVehicles();
    }
    app.deleteVehicle = deleteVehicle;
    function startVehicleCreate() {
        $('#create-header').html("\n          <span>Choose a vehicle type: </span>\n          <select class=\"form-control\" style=\"max-width: 10%; display: inline-block\";\n          id=\"create-vehicle-type\"\n          onchange=\"app.chooseVehicleStyle()\">\n          <option disabled selected>---</option>\n          <option value = \"Car\">Car</option>\n          <option value = \"Truck\">Truck</option></select>\n          <span> or </span><a>Cancel</a>");
    }
    app.startVehicleCreate = startVehicleCreate;
    function chooseVehicleStyle() {
        var type = $('#create-vehicle-type').val();
        if (type === 'Car') {
            $('#create-header').html("\n      <div class=\"row\">\n      <div class=\"form-group\">\n        <label>Car Make</label>\n        <input id=\"car-make-input\" class=\"form-control\" />\n      </div>\n      <div class=\"form-group\">\n        <label>Car Model</label>\n        <input id=\"car-model-input\" class=\"form-control\" />\n      </div>\n      <div class=\"form-group\">\n        <label>Color</label>\n        <input id=\"car-color-input\" type=\"color\" class=\"form-control\" />\n      </div>\n    </div>\n    <div class=\"row\">\n      <div class=\"form-group\">\n        <label>Number of Doors</label>\n        <input id=\"car-numDoors-input\" type=\"number\" class=\"form-control\" />\n      </div>\n      <div class=\"form-group\">\n        <label>Number of Seats</label>\n        <input id=\"car-numSeats-input\" type=\"number\" class=\"form-control\" />\n      </div>\n      <div class=\"form-group\">\n        <label>Is it Cool?</label>\n        <select id=\"car-isCool-input\" class=\"form-control\">\n          <option value=\"true\" selected>Yes</option>\n          <option value=\"false\">No</option>\n        </select>\n      </div>\n    </div>\n    <div class=\"row\">\n      <button class=\"btn btn-success\" onclick=\"app.createCar()\">Submit</button>\n      <button class=\"btn btn-warning\" onclick=\"app.returnToBeg()\">Go Back</button>\n    </div>\n      ");
        }
        else if (type === 'Truck') {
            $('#create-header').html("\n    <div class=\"row\">\n    <div class=\"form-group\">\n      <label>Truck Make</label>\n      <input id=\"truck-make-input\" class=\"form-control\" />\n    </div>\n    <div class=\"form-group\">\n      <label>Truck Model</label>\n      <input id=\"truck-model-input\" class=\"form-control\" />\n    </div>\n    <div class=\"form-group\">\n      <label>Color</label>\n      <input id=\"truck-color-input\" type=\"color\" class=\"form-control\" />\n    </div>\n  </div>\n  <div class=\"row\">\n    <div class=\"form-group\">\n      <label>Number of Doors</label>\n      <input id=\"truck-numDoors-input\" type=\"number\" class=\"form-control\" />\n    </div>\n    <div class=\"form-group\">\n      <label>Number of Seats</label>\n      <input id=\"truck-numSeats-input\" type=\"number\" class=\"form-control\" />\n    </div>\n    <div class=\"form-group\">\n      <label>Is it Cool?</label>\n      <select id=\"truck-isCool-input\" class=\"form-control\">\n        <option value=\"true\" selected>Yes</option>\n        <option value=\"false\">No</option>\n      </select>\n    </div>\n  </div>\n  <div class=\"row\">\n    <button class=\"btn btn-success\" onclick=\"app.createTruck()\">Submit</button>\n    <button class=\"btn btn-warning\" onclick=\"app.returnToBeg()\">Go Back</button>\n  </div>\n");
        }
    }
    app.chooseVehicleStyle = chooseVehicleStyle;
    function createCar() {
        var make = $('#car-make-input').val();
        var model = $('#car-model-input').val();
        var color = $('#car-color-input').val();
        var numDoors = $('#car-numDoors-input').val();
        var numSeats = $('#car-numSeats-input').val();
        var isCool = $('#car-isCool-input').val();
        var tempCar = new app.models.Car(make, model, color, numDoors, numSeats, isCool);
        vehicles.push(tempCar);
        displayVehicles();
        $('#car-make-input').val('');
        $('#car-model-input').val('');
        $('#car-color-input').val('');
        $('#car-numDoors-input').val('');
        $('#car-numSeats-input').val('');
        $('#car-isCool-input').val('');
    }
    app.createCar = createCar;
    function createTruck() {
        var make = $('#truck-make-input').val();
        var model = $('#truck-model-input').val();
        var color = $('#truck-color-input').val();
        var numDoors = $('#truck-numDoors-input').val();
        var numSeats = $('#truck-numSeats-input').val();
        var isCool = $('#truck-isCool-input').val();
        var tempTruck = new app.models.Truck(make, model, color, numDoors, numSeats, isCool);
        vehicles.push(tempTruck);
        displayVehicles();
        $('#truck-make-input').val('');
        $('#truck-model-input').val('');
        $('#truck-color-input').val('');
        $('#truck-numDoors-input').val('');
        $('#truck-numSeats-input').val('');
        $('#truck-isCool-input').val('');
    }
    app.createTruck = createTruck;
    function returnToBeg() {
        $('#create-header').html("<a onclick= \"app.startVehicleCreate()\">Add a Vehicle</a>");
        $('#go-back').html("<a onclick= \"app.startVehicleCreate()\">Add a Vehicle</a>");
    }
    app.returnToBeg = returnToBeg;
})(app || (app = {}));

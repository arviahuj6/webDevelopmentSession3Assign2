var Car = (function () {
    function Car(isStart, distanceCovered, direction) {
        this.isStart = isStart;
        this.distanceCovered = distanceCovered;
        this.direction = direction;
    }
    /**
    *   Start the car
    */
    Car.prototype.start = function () {
        if (this.isStart) {
            console.log('The Car has Started');
        }
        else {
            console.log('The Car has not Started');
        }
    };
    /**
    * Drive is in Process and total distance covered
    */
    Car.prototype.drive = function () {
        if (this.isStart) {
            console.log("The Car has Started and covered " + this.distanceCovered + " km");
        }
        else {
            console.log("Car has not Started yet");
        }
    };
    /**
    * Gives the position of the car
    */
    Car.prototype.getPosition = function () {
        if (this.isStart) {
            console.log("The Car covered " + this.distanceCovered + " km and is travelling towards " + this.direction);
        }
        else {
            console.log("The Car is not moving");
        }
    };
    return Car;
}());
// Using the vehicle Object
var vehicleObject = new Car(false, 20, 'East');
vehicleObject.start();
vehicleObject.drive();
vehicleObject.getPosition();

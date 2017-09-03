interface IDrivable {
    // Start the Engine
    start(): void;
    // Drive the engine
    drive(): void;
    // Get the Position of Car
    getPosition(): void;
}

class Car implements IDrivable {
    private isStart: boolean;
    private distanceCovered: number;
    private direction: string;

    constructor(isStart: boolean, distanceCovered: number, direction: string) {
        this.isStart = isStart;
        this.distanceCovered = distanceCovered;
        this.direction = direction;
    }

    /**
    *   Start the car
    */
    public start() {
        if ( this.isStart ) {
            console.log('The Car has Started');
        } else {
            console.log('The Car has not Started');
        }
    }

    /**
    * Drive is in Process and total distance covered
    */
    public drive() {
        if (this.isStart) {
            console.log(`The Car has Started and covered ${this.distanceCovered} km`);
        } else {
            console.log(`Car has not Started yet`);
        }
    }

    /**
    * Gives the position of the car
    */
    public getPosition() {
        if (this.isStart) {
            console.log(`The Car covered ${this.distanceCovered} km and is travelling towards ${this.direction}`);
        } else {
            console.log(`The Car is not moving`);
        }
    }
}

// Using the vehicle Object
let vehicleObject = new Car(false, 20, 'East');
vehicleObject.start();
vehicleObject.drive();
vehicleObject.getPosition();

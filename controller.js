var vehicles = require("./vehicles");

class Controller {
    async getCars() {
        return new Promise((resolve, _) => resolve(vehicles));
    }

    async getCar(origin) {
        return new Promise((resolve, reject) => {

                let car = vehicles.filter((car) => car.Origin === origin);
                resolve(car);
                if (car) {
                    resolve(car);
                } else {
                    reject(`Car with origin ${origin} not found `);
                }
                
        });
    }
}
module.exports = Controller;



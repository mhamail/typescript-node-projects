// chatgpt solution
function createCar(manufacturer:any, model:any, ...args:any) {
  let car:any = {
    manufacturer: manufacturer,
    model: model,
  };
  for (let i = 0; i < args.length; i += 2) {
    let key = args[i];
    let value = args[i + 1];
    car[key] = value;
  }

  return car;
}

let car = createCar("Honda", "Civic", "color", "red", "transmission", "manual");

console.log(car);
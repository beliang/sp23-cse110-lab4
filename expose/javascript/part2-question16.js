let statistics = {
    redCars: 21,
    blueCars: 45,
    greenCars: 12, 
    raceCars: 5, 
    blackCars: 40,
    rareCars: 2
}

for(let p in statistics) {
    if(p.startsWith('r') || statistics.p % 2 == 1) {
        console.log(`${statistics[p]}`);
    }
}
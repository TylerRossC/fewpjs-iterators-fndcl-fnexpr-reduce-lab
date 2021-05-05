const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

// const totalBatteries = () => {
//     const sumOfBatches = batteryBatches.reduce((total, amount) => total + amount, 0)
//     return sumOfBatches
// }

const totalBatteries = batteryBatches.reduce((total, amount) => total + amount, 0);

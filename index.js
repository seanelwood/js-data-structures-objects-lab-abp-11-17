// Write your solution in this file!
const driver = {};

// updateDriverWithKeyAndValue()- this function should take in a driver object, a key and a value. The function should not mutate the driver parameter and return a new driver that has an updated value for the key passed in.
function updateDriverWithKeyAndValue(driver, key, value) {
  const newObj = { ...driver };
  newObj[key] = value;
  return newObj;
}

function destructivelyUpdateDriverWithKeyAndValue(driver, key, value){
   driver = { ...driver }; 
}

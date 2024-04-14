//Exercise 4
// Switch Statement
let lightBulbStatus = "On";

//Start coding here

switch (lightBulbStatus){
    case "On":
        lightBulbStatus = "Light bulb is On.";
      break;
    case "Off":
        lightBulbStatus = "Light bulb is Off.";
      break;
    case "Broken":
        lightBulbStatus = "Light bulb is Broken.";
    default:
        lightBulbStatus = "Please choose the correct input (On/Off)";
};

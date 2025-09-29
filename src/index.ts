import {readConfig, setUser} from "./config.js";

function main() {
  //console.log("Hello, world!");
  setUser("SparkingSquirrel");
  const config = readConfig();
  console.log(config);
}

main();
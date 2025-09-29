import fs from "fs";
import os from "os";
import path from "path";

export class Config {
    dbUrl: String;
    currentUserName: String

    constructor() {
    this.dbUrl = "";
    this.currentUserName = "";
  }
}

export function readConfig(){
    let configPath = getConfigFilePath();
    let contents = JSON.parse(fs.readFileSync(configPath,{ encoding: 'utf-8' }))
    console.log(contents)
}

export function setUser(){}

function getConfigFilePath(): string {
    let homedir = os.homedir();
    return path.join(homedir, ".gatorconfig.json");

}

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

export function readConfig() : Config {
    let configPath = getConfigFilePath();
    let rawContents = JSON.parse(fs.readFileSync(configPath,{ encoding: 'utf-8' }))
    let config = validateConfig(rawContents, false); //Name could be empty
    console.log(config);
    return config;
}

export function setUser(name: String){
    let config = readConfig()
    config.currentUserName = name;
    //write to file...
    console.log("'writing..." + config.currentUserName + "  " + config.dbUrl);
}

function getConfigFilePath(): string {
    let homedir = os.homedir();
    return path.join(homedir, ".gatorconfig.json");

}

function validateConfig(rawConfig: any, checkName: boolean) : Config {

    if (!rawConfig.db_url || typeof rawConfig.db_url !== "string") {
        throw new Error("db_url is required in config file");
    }
    if (checkName && (!rawConfig.current_user_name || typeof rawConfig.current_user_name !== "string")) {
        throw new Error("current_user_name is required in config file");
    }
    return {
        dbUrl: rawConfig.db_url,
        currentUserName: rawConfig.current_user_name,
    } as Config;
}
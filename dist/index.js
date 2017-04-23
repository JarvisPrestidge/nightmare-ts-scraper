"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const Nightmare = require("nightmare");
const BASE_URL = "https://www.whoscored.com";
const scrape = () => __awaiter(this, void 0, void 0, function* () {
    console.log("Starting season scrape");
    const nightmare = new Nightmare({
        show: true
    });
    try {
        yield nightmare
            .goto(BASE_URL)
            .wait('div#domestic-index > dd:nth-child(5) > a.option.selected:nth-child(1)')
            .click('div#domestic-index > dd:nth-child(5) > a.option.selected:nth-child(1)')
            .wait(5000)
            .end();
    }
    catch (e) {
        console.log(e);
    }
});
scrape();

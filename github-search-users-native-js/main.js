import {View} from "./modules/view.js";
import {Api} from "./modules/api.js";
import {Search} from "./modules/search.js";
import {Log} from "./modules/log.js";

class App {
  constructor(view) {
    this.view = view;
  }
}


const api = new Api();
const log = new Log();
const view = new View(api);
const search = new Search(view, log, api);


const app = new App(view, search);

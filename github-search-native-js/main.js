import {Search} from "./modules/search.js";
import {View} from "./modules/view.js";
import {Api} from "./modules/api.js";
import {Log} from "./modules/log.js";


const api = new Api();


const app = new Search(new View(api), api, new Log());

import {API_URL} from "../constants";
import xhr from "axios/index";
import {tokensMap} from "../utils/tokensMap.js";

export default class App {

  constructor(options = {}) {
    this.options = options;
    // localStorage.setItem('tokensMap', JSON.stringify(tokensMap));
    this.getTokensMap();
    this.setExternalLinkHandler(null);
  }

  async getTokensMap() {
    let {data} = await xhr.get(`${API_URL}/api/token?showAll=1&limit=4000`);
    for (var i = 0; i < data.data.length; i++) {
      if (!tokensMap[data.data[i].id]) {
        tokensMap[data.data[i].id] = data.data[i].name + '_&&_' + data.data[i].id + '_&&_' + data.data[i].precision+'_&&_'+data.data[i].abbr;
      }
    }
    localStorage.setItem('tokensMap', JSON.stringify(tokensMap));
  }

  setExternalLinkHandler(handler) {
    this.externalLinkHandler = handler;
  }

  getExternalLinkHandler() {
    return this.externalLinkHandler;
  }
}

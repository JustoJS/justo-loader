//imports
import path from "path";

/**
 * A loader of Justo.json files.
 */
export default class Loader {
  /**
   * Import a file.
   */
  static load(...args) {
    return require(path.join(process.cwd(), ...args));
  }

  /**
   * Import the justo package.
   */
  static loadJusto() {
    return Loader.load("node_modules", "justo");
  }
}

import * as uuid from "uuid";
import * as path from "node:path";
import * as fs from "node:fs";

class fileService {
  saveFile(file) {
    try {
      const fileName = uuid.v4() + '.jpg'
      const filePath = path.resolve('static', fileName);
      file.mv(filePath);
      return filePath;
    } catch (e) {
      console.log(e);
    }
  }

  deleteFile(filePath) {
    try {
      if (fs.existsSync(filePath)) {
        fs.unlinkSync(filePath);
      }
    } catch (e) {
      console.log(e);
    }
  }
}

export default new fileService();
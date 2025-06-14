import * as path from "path";

class FileService {
  saveFile(file) {
    try {
      const fileName = crypto.randomUUID() + ".jpg";
      const filePath = path.resolve("static", fileName);
      file.mv(filePath);
      return fileName;
    } catch (e) {
      console.log(e);
    }
  }
}

export default new FileService();

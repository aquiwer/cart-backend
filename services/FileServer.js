import * as uuid from 'uuid';
import * as path from 'path';

class FileServer {
    saveFile(file) {
        try {
            const fileName = uuid.v4() + ".jpg";
            const filePath = path.resolve("./static", fileName)
            file.mv(filePath)
            console.log(filePath);
            return filePath;
        } catch (e) {
            console.log(e)
        }
    }
    saveUserPhoto(file, userFileName) {
        try {
            const fileName = userFileName + ".jpg";
            const filePath = path.resolve("./static/users", fileName)
            file.mv(filePath)
            return filePath;
        } catch (e) {
            console.log(e)
        }
    }
}

export default new FileServer()
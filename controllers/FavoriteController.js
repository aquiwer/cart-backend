import FavoriteService from "../services/FavoriteService.js";

class FavoriteController {
    async addToFavorite(req, res) {
        try {
            const response = await FavoriteService.addToFavorite(req.body, req.files.photo);
            console.log(response)
            return res.json(response);
        } catch (e) {
            return res.status(500).json(e.message);
        }
    }


}

export default new FavoriteController()

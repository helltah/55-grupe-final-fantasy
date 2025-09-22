import { connection } from "../../db.js";

export async function getPublicCategories(req, res) {
    try {
        const sql = `
            SELECT *, 0 As moviesCount
            FROM categories;`;
        const [categories] = await connection.execute(sql);

        return res.json({
            status: 'success',
            categories,
        });
    } catch (error) {
        return res.json({
            status: 'success',
            categories: [],
        });
    }
}
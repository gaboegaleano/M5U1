var pool = require('./bd');

async function getNovedades() {
        var query = 'select * from novedadesgg';
        var rows = await pool.query(query);
        return rows;
}

async function deleteNovedadesById(id) {
        var query = 'delete from novedadesgg where id = ?';
        var rows = await pool.query(query, [id]);
        return rows;
}
module.exports = { getNovedades, deleteNovedadesById }//Podemos poner 1 o varias funciones separadas x comas
var express = require('express');
var router = express.Router();

var novedadesModel = require('../../models/novedadesModels')

router.get('/', async function (req, res, next) {

    var novedades = await novedadesModel.getNovedades();

    res.render('admin/novedades', {
        layout: 'admin/layout',
        persona: req.session.nombre,
        novedades
    });
});

/*Eliminar Novedad*/
router.get('/eliminar/:id', async (req, res, next) => {
    const id = req.params.id;
    await novedadesModel.deleteNovedadesById(id);
    res.redirect(`/admin/novedades`)
});


module.exports = router;

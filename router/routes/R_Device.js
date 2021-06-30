const router = require('@koa/router')()

const C_Device = require('../../controller/C_Device');

router.get('/panelData',C_Device.getPanelData);

module.exports = router.routes();

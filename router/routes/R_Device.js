const router = require('@koa/router')()

const C_Device = require('../../controller/C_Device');

router.get('/panelData',C_Device.getPanelData);
router.get('/deviceList', C_Device.getDeviceList);
router.get('/all', C_Device.getData);
router.post('/setDeviceName', C_Device.setDeviceName);
module.exports = router.routes();

/* eslint-disable new-cap */
const express = require('express');
const router = express.Router();
const services = require('../services/render');
const controller = require('../controller/controller');

router.get('/', services.homeRoutes);
router.get('/add_activities', services.addActivities);
router.get('/update_activities', services.updateActivities);

// API
router.post('/api/tasks', controller.create);
router.get('/api/tasks', controller.find);
router.put('/api/tasks/:id', controller.update);
router.delete('/api/tasks/:id', controller.delete);

module.exports = router;

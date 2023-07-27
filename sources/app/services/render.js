// this file used to allows us render different file in router
const axios = require('axios');

exports.homeRoutes = (req, res) => {
  // make a get request to /api/task
  axios.get('http://localhost:3000/api/tasks')
      .then(function(response) {
        console.log(response);
        res.render('index.ejs', {tasks: response.data});
      })
      .catch((error) => {
        res.send(error);
      });
};

exports.addActivities = (req, res) => {
  res.render('add_activities.ejs');
};

exports.updateActivities = (req, res) => {
  axios.get('http://localhost:3000/api/tasks', {params: {id: req.query.id}})
      .then(function(dataTasks) {
        res.render('update_activities.ejs', {tasks: dataTasks.data});
      })
      .catch((error) => {
        res.send(error);
      });
};

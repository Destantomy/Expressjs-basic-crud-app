// this file used to allows us render different file in router

exports.homeRoutes = (req, res) => {
  res.render('index.ejs');
};

exports.addActivities = (req, res) => {
  res.render('add_activities.ejs');
};

exports.updateActivities = (req, res) => {
  res.render('update_activities.ejs');
};

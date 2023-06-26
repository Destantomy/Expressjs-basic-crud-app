/* eslint-disable arrow-parens */
const UserDB = require('../model/model');

// create and save new task
exports.create = (req, res) => {
  // validate request
  if (!req.body) {
    res.status(400).send({message: 'content cant be empty'});
    return;
  }

  // new task
  const task = new UserDB({
    f_name: req.body.f_name,
    status: req.body.status,
  });

  // save task in the mongoDB
  task
      .save(task)
      .then(data => {
        res.send(data);
      })
      .catch(error => {
        res.status(500).send({
          message: error.message || 'some error has occured',
        });
      });
};

// retrieve and return all tasks / retrieve and return single task
exports.find = (req, res) => {
  
};

// update a new identified task by task_id
exports.update = (req, res) => {
  
};

// delete identified task by specified task_id in the request
exports.delete = (req, res) => {
  
};

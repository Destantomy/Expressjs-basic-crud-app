/* eslint-disable max-len */
/* eslint-disable arrow-parens */
const UserDB = require('../model/model');

// create and save new task
exports.create = (req, res) => {
  // validate request
  if (!req.body) {
    res.status(400).send({message: 'content can not be empty'});
    return;
  }

  // new task
  const task = new UserDB({
    series: req.body.series,
    name: req.body.name,
    status: req.body.status,
  });

  // save task in the mongoDB
  task
      .save(task)
      .then(data => {
        // testing postman --> res.send(data);
        res.redirect('/');
      })
      .catch(error => {
        res.status(500).send({
          message: error.message || 'some error has occured',
        });
      });
};

// retrieve and return all tasks / retrieve and return single task
exports.find = (req, res) => {
  if (req.query.id) {
    const id = req.query.id;
    UserDB.findById(id)
        .then(data => {
          if (!data) {
            res.status(404).send({message: `data id ${id} not found`});
          } else {
            res.send(data);
          }
        })
        .catch(error => {
          res.status(500).send({message: `error retrieveing data id ${id}`});
        });
  } else {
    UserDB.find()
        .then(task => {
          res.send(task);
        })
        .catch(error => {
          res.status(500).send({message: error.message || 'Some error has occured !'});
        });
  }
};

// update a new identified task by task_id
exports.update = (req, res) => {
  if (!req.body) {
    return res
        .status(400)
        .send({message: 'update data can not be empty!'});
  }
  const id = req.params.id;
  UserDB.findByIdAndUpdate(id, req.body, {useFindAndModify: false})
      .then(data => {
        if (!data) {
          res.status(404).send({message: `data id: ${id} can not be updated.`});
        } else {
          // postman testing --> res.send(data);
          res.redirect('/');
        }
      })
      .catch(error => {
        res.status(500).send({message: 'Error update the data'});
      });
};

// delete identified task by specified task_id in the request
exports.delete = (req, res) => {
  const id = req.params.id;
  UserDB.findByIdAndDelete(id)
      .then(data => {
        if (!data) {
          res.status(404).send({message: `data id: ${id} maybe is wrong`});
        } else {
          // postman testing --> res.send({message: 'data was deleted successfuly'});
          res.redirect('/');
        }
      })
      .catch(error => {
        res.status(500).send({message: `couldn't delete data with id ${id}`});
      });
};

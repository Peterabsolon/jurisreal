import resource from 'resource-router-middleware'
import db from '../lib/db'

export default resource({

  id : 'contacts',

  load(req, id, callback) {
    db.one('SELECT * FROM contacts WHERE id = $1', id)
      .then(function(contact) {
        callback(null, contact)
      })
      .catch((function(err) {
        callback(err, null)
      }))
  },

  index({ params }, res) {
    const query = 'SELECT * FROM contacts'

    db.any(query)
      .then(function(data) {
        res.status(200)
          .json({
            status: 'success',
            data: data,
            message: 'Retrieved ALL contacts'
          })
      })
      .catch(function(err) {
        res.status(500).send(err)
      })
  },

  create({ body }, res) {
    const query = 'INSERT INTO contacts(title, firstname, lastname, position, phone, email)' +
                  'VALUES (${title}, ${firstname}, ${lastname}, ${position}, ${phone}, ${email})'

    db.none(query, body)
      .then(function() {
        res.status(200)
          .json({
            status: 'success',
            message: 'Inserted one contact'
          })
      })
      .catch(function(err) {
        res.status(500).send(err)
      })
  },

  read({ contact }, res) {
    res.json(contact)
  },

  update({ contact, body }, res) {
    if (contact.id) {
      const query = "UPDATE contacts SET title = $1, firstname = $2, lastname = $3, position = $4, phone = $5, email = $6 WHERE id = $7";
      const data = [body.title, body.firstname, body.lastname, body.position, body.phone, body.email, contact.id]

      db.none(query, data)
        .then(function() {
          res.status(200)
            .json({
              status: 'success',
              message: 'Updated contact'
            })
        })
        .catch(function(err) {
          res.status(500).send(err)
        })
    } else {
      res.status(500).send('no contact found')
    }
  },

  delete({ contact }, res) {
    if (contact.id) {
      db.result('DELETE FROM contacts WHERE id = $1', contact.id)
        .then(function(result) {
          res.status(200)
            .json({
              status: 'success',
              message: `Removed ${result.rowCount} contact`
            })
        })
        .catch(function(err) {
          return next(err);
        })
    } else {
      res.status(500).send('no contact found')
    }
  }
})

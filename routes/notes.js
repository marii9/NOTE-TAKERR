const express = require('express');
const fs = require('fs');
const { fsUtils } = require('../helpers/fsUtils');
const uuid = require('../helpers/uuid');
const notes = express.Router();
const { readJsonFile, writeJsonFile } = require('../helpers/fsUtils');

// GET /notes route handler
notes.get('/', (req, res) => {
  fsUtils.readJsonFile()
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      console.error(err);
      res.status(500).json({ error: 'Unable to retrieve notes.' });
    });
});

// POST /notes route handler
notes.post('/', (req, res) => {
  const { title, text } = req.body;

  if (!title || !text) {
    res.status(400).json({ error: 'Please provide a title and text for the note.' });
    return;
  }

  let newNote; // Declare newNote here

  fsUtils.readJsonFile()
    .then((data) => {
      const notes = data;
      newNote = { id: uuid(), title, text };
      notes.push(newNote);
      return writeJsonFile(notes);
    })
    .then(() => {
      res.json(newNote);
    })
    .catch((err) => {
      console.error(err);
      res.status(500).json({ error: 'Unable to save note.' });
    });
});

// DELETE /notes/:id route handler
notes.delete('/:id', (req, res) => {
  const id = req.params.id;

  fsUtils.readJsonFile()
    .then((data) => {
      const notes = data;
      const filteredNotes = notes.filter((note) => note.id !== id);
      return writeJsonFile(filteredNotes);
    })
    .then(() => {
      res.sendStatus(200);
    })
    .catch((err) => {
      console.error(err);
      res.status(500).json({ error: 'Unable to delete note.' });
    });
});

module.exports = notes;
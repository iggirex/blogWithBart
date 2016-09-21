var express = require('express');
var router = express.Router();
var knex = require('../db/knex')

function Posts() {
  return knex('post_tbl')
}

function DeletePosts() {
  return knex('post_tbl').where('id', '!==', req.params.id)
}

/* GET home page. */
router.get('/', function(req, res, next) {
  Posts().orderBy('id', 'asc')
  .then(function(data){
    res.render('index', { post: data });
  })

});

// function Posts() goes into DB, and .insert our req.body into DB.INFO DONT FORGET .THEN!!!!
router.post('/post', function(req, res, next) {
  Posts().insert({ title: req.body.title, content: req.body.content})
  .then(function() {
    res.redirect('/')
  })
})

router.get('/:id', function(req, res, next){
  Posts().where('id', req.params.id).first().then(function(data){
    res.render('post', {title: data.title, content: data.content})
  })
})

router.post('/:id', function(req, res, next){
  // res.send(req.params.id)
  Posts().where('id', req.params.id)
  .update({
    title: req.body.title,
    content: req.body.content
  })
  .then(function(data){
    console.log(data, req.params.id)
    res.redirect('/')
  })
})

router.post('/:id', function(req, res, next){
  DeletePosts()
  .then(function(data){
    res.redirect('/')
  })
})

module.exports = router;

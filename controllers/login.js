

exports.get_login = function(req, res, next) {    
    res.render('login', { title: 'Mental Health App' });  //will lead to views cuz we defined view engine as 'pug' in app.js
  };
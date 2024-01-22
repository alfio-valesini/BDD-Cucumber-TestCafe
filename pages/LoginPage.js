const {Selector} =  require('testcafe');

function select(selector){
    return Selector(selector).with({boundTestRun:testController})
}

exports.LoginPage ={
    LogInLink: function() {
        return select('.ico-login');
      },

      AccountLink: function() {
        return select('.ico-account');
      },

      Email : function()
      {
        return select('#Email');
      },

      Password : function()
      {
        return select('#Password');
      },

      LoginButton: function(){
        return select('.button-1.login-button');
      },
    
      AccountPersonalDetails: function(){
        return select('div.center-2').withText('Your Personal Details');
      },
}

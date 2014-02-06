function sendEmail(name, email) {
    var name = name;
    var email = email;
    
	console.log("New Email recieved:" + email);
	console.log("New Username recieved: " + name);

    /*// Create a function to log the response from the Mandrill API
    function log(obj) {
        //$('#response').text(JSON.stringify(obj));
        alert(JSON.stringify(obj));
        console.log(JSON.stringify(obj));
    }*/

    // create a new instance of the Mandrill class with your API key
    var m = new mandrill.Mandrill('tQbyx1-idFgbo1qVCBij-Q');

    // create a variable for the API call parameters
    var params = {
        "message": {
            "from_email":"mowz971@gmail.com",
            "to":[{"email": email}],
            "subject": "Welcome to the Fluent Web App *|dude|*!",
            "html": "<p>Dear *|dude|*,</p><p>Please click the link below to confirm your subscription to the Fluent web app</p><img src=\"http://www.bjmlegal.co.uk/wp-content/uploads/2013/09/hello-1774.jpg\">",
            "autotext": true,
            "track_opens" : true,
            "track_clicks" : true,
            
            "merge_vars": [
                {
                    "rcpt": "mowz971@gmail.com",
                    "vars": [
                        {
                            "name": "dude",
                            "content": name
                        },
                    ]
                }
            ]
            
        }
    };

    function sendTheMail() {
    // Send the email!

        m.messages.send(params, function(res) {
            log(res);
        }, function(err) {
            log(err);
        });
    }

};
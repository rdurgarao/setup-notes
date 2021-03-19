$(document).ready(function(){
    var $loginPage = $('#login');
    var $dashboardPage = $('#dashboard');
    
    function redirectToDashboard(){
        var userToken = localStorage.getItem('user-token');

        if(!userToken){
            $loginPage.removeClass('d-none');
            $dashboardPage.addClass('d-none');
        } else {
            $.ajax({
                url: 'http://localhost:3000/authors/checkToken',
                method: 'GET',
                headers: {
                    token: userToken
                },
                success: function(data){
                    $loginPage.addClass('d-none');
                    $dashboardPage.removeClass('d-none');
                },
                error: function(err) {
                    localStorage.removeItem('user-token');
                    alert('Invalid session');

                    $loginPage.removeClass('d-none');
                    $dashboardPage.addClass('d-none');
                }
            })
        }
    }

    redirectToDashboard();

    function submitLogin(e){
        var email = $('#exampleInputEmail1').val();
        var password = $('#exampleInputPassword1').val();

        if(email != '' && password != ''){

            $.ajax({
                url: 'http://localhost:3000/authors/login',
                method: 'POST',
                data: {
                    "email": email,
                    "password": password
                }, 
                success: function(data){
                    localStorage.setItem('user-token', data.token);
                    redirectToDashboard();
                }, 
                error: function(err){
                    localStorage.removeItem('user-token');
                    alert(err.responseJSON.message);
                }
            })
        } else {
            alert('Entered proper email and password');
        }
    }

    $('#loginBtn').click(function(ev){
        submitLogin(ev);
    });

    $('#logoutBtn').click(function(ev){
        localStorage.removeItem('user-token');
        redirectToDashboard();
    });
});


function submitIDCardDetails(){
    var errors = [];
    var photo = document.getElementById('photo');
    var picErrorEle = document.querySelector('#pic_validation_error');

    if(photo.files.length == 0) {
        picErrorEle.removeAttribute('style');
        // alert('Pic is required');
        errors.push('Pic is required');
        // return false;
    } else {
        picErrorEle.setAttribute('style', 'display:none;');
    }

    var cardholderName = document.getElementsByName('card_holder_name')[0];
    var cardholderBloodGroup = document.querySelector('input[name="blood_group"]:checked');
    
    if(cardholderName.value.trim() == ''){
        errors.push('name is required');
    }
    
    if(!cardholderBloodGroup || cardholderBloodGroup.value.trim() == ''){
        errors.push('blood group is required');
    }

    if(errors.length > 0){
        var errorEle = document.getElementById('errors');

        errorEle.innerHTML = errors.join(', ');
        return false;
        // errors.forEach(function(error){
        //     errorEle.append(' ' + error);
        // })
    }

    var displayCardHolderName = document.getElementById('card_holder_name');
    displayCardHolderName.innerText = cardholderName.value;

    var displayCardHolderGroup = document.getElementById('card_holder_blood_group');
    if(cardholderBloodGroup){
        displayCardHolderGroup.innerText = cardholderBloodGroup.value;
    }

    var choosenColor = document.getElementsByName("color_selection")[0].value;
    document.getElementById('frontside').setAttribute('style', `background-color: ${choosenColor}`);
    preview_image();
    document.getElementById('card_details').classList.remove('hide');

    return false;
}

function preview_image() {
    var photo = document.getElementById('photo');

    if (FileReader && photo.files.length > 0) {
        var reader = new FileReader();
        reader.readAsDataURL(photo.files[0]);
        reader.onload = function (e) {
            var image = new Image();
            image.src = e.target.result;
            image.onload = function () {
                document.getElementById('card_holder_photo').src = image.src;
            };
        }
    }
    else {
        // Not supported
    }
}

$(document).ready(function(){
    console.log($('h2').length);

    $('h2').each(function(index, ele){
        $(ele).bind('click', function(event){
            var currentEle = $(event.currentTarget);

            if(currentEle.attr('style')){
                currentEle.removeAttr('style')
            } else {
                currentEle.attr('style', 'color: red;');
            }
        });
    });

    $('#fetchAuthors').click(function(ev){
        ev.stopPropagation();
        ev.preventDefault();

        // var xhttp = new XMLHttpRequest();
        // xhttp.onreadystatechange = function () {
        //     if (this.readyState == 4 && this.status == 200) {
        //         // Typical action to be performed when the document is ready:
        //         var response = JSON.parse(xhttp.responseText);

        //         var tbody = $('<tbody></tbody>');
        //         response.authors.forEach(function(author) {
        //             var td1 = $('<td></td>');
        //             td1.html(author.name);

        //             var td2 = $('<td></td>');
        //             td2.html(author.biography);

        //             var tr = $('<tr></tr>');
        //             // debugger;
        //             tr.append(td1);
        //             tr.append(td2);
        //             tbody.append(tr);
        //         });

        //         $('#authors table').append(tbody);
        //         // document.getElementById("demo").innerHTML = xhttp.responseText;
        //     }
        // };
        // xhttp.open("GET", "http://localhost:3000/authors", true);
        // xhttp.send();


        $.ajax('http://localhost:3000/authors', {
            type: 'POST',
            data: {login: 'test', password: 'test'},
            success: function(data){
                var tbody = $('<tbody></tbody>');
                data.authors.forEach(function(author) {
                    var td1 = $('<td></td>');
                    td1.html(author.name);

                    var td2 = $('<td></td>');
                    td2.html(author.biography);

                    var tr = $('<tr></tr>');
                    // debugger;
                    tr.append(td1);
                    tr.append(td2);
                    tbody.append(tr);
                });

                $('#authors tbody').remove();
                $('#authors table').append(tbody);
            }, 
            error: function(err){
                alert('error');
            }
        })
    });
})

// HTTP Protocol
// Request
// GET, PUT, POST, DELETE
// URL / endpoints: https://www.google.com/apis/gphotos
// Data: 
// Query params 

// Headers - meta information between client and server
// Request 
// I need response in json format 
// I am sending user token (cookie value), give me that user details 
// Response 
// I am sending json response 

// Response 
// Data 

// Http Status
// 1xx - information
// 2xx - success 
// 3xx - redirections 
// 4xx - client side error
// 5xx - server side error


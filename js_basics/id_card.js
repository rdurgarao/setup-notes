function submitIDCardDetails(){
    var cardholderName = document.getElementsByName('card_holder_name')[0];
    var cardholderBloodGroup = document.querySelector('input[name="blood_group"]:checked');
    
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
$(document).on("DOMContentLoaded",function(){  //this event will be triggered when all the elements of the linked file are loaded into memory

    $(".main-form").on("submit", (e) => { //this event will be triggered when the form is submitted
        e.preventDefault(); //this will prevent the default behavior of the form, where it automatically loads after submission
 
        const nameValue = $("#name-input").val().trim(); //this will obtain the value of the input element with id "name-input"
        const result_div = $(".result-div"); //this refers to the div element with class "result-div"

        if (!nameValue || nameValue.length === 0) { //this returns true if the specified criteria is met
            return result_div.html("<b>name must be valid!</b>"); //this will change the html contents of the referred element(result_div)
        }

        return result_div.html(`<b>Hello ${nameValue}!!</b>`); //this will change the html contents of the referred element
    });

});
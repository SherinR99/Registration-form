$.validator.addMethod("customEmail", function(value, element) {
    return this.optional(element) || (value.includes("@") && value.endsWith(".com"));
}, "Please enter a valid email address with '@' and ending with '.com'.");
  
$.validator.addMethod("ageRange", function(value, element) {
    return this.optional(element) || (value >= 18 && value <= 120);
}, "Age should be in between of 18 and 120");
  
$("#survey-form").validate({
    rules: {
        name: {
            required: true,
            minlength: 3,
            maxlength: 50
        },
        email: {
            required: true,
            customEmail: true
        },
        number: {
            required: true,
            minlength: 10,
            maxlength: 14
        },
        age: {
            required: true,
            ageRange: true
        },
        gender: {
            required: true,
            minlength: 4,
            maxlength: 15
        },
        address: {
            required: false,
            maxlength: 50
        }
    },

    messages: {
        name: {
            required: "Name is Required*",
             minlength: "Name must be at least 3 characters long",
            maxlength: "Name cannot exceed 50 characters"
        },
        email: {
            required: "Email id is Required*"
        },
        number: {
            required: "Phone number is Required*",
            minlength:  "Phone number must be at least 10 digits long",
            maxlength: "Phone number cannot exceed 14 digits"
        },
        age: {
            required: "Age is Required*"
        },
        gender: {
            required: "Gender is Required*",
            minlength: "Gender must be at least 4 characters long",
            maxlength: "Gender cannot exceed 15 characters"
        },
        address: {
            maxlength: "Address cannot exceed 50 characters"
        }

    }
});
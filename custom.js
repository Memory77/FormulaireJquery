$("#contact-form").validate({
/* regles pour chaque champ */
    rules:{
        entreprise:{
            required: true,
            minlength: 2
        },
        nom:{
            required: true,
            minlength: 2
        },
        prenom:{
            required: true,
            minlength: 2
        },
        fonction:{
            required: true,
            minlength: 2
        },
        telephone:{
            required: true,
            digits: true,
            minlength: 10,
            maxlength: 15
        },
        email:{
            required: true,
            email: true
        },
        contenu:{
            required: true,
            minlength: 10
        }
    },
/* messages d'erreur pour chaque champ */
    messages:{
        entreprise: {
            required: "Vous devez le nom de votre entreprise",
            minlength: "Le champ doit comporter 2 caractères minimum"
        },
        nom: {
            required: "Vous devez renseigner votre nom",
            minlength: "Le champ doit comporter 2 caractères minimum"
        },
        prenom: {
            required: "Vous devez renseigner votre prenom",
            minlength: "Le champ doit comporter 2 caractères minimum"
        },
        fonction: {
            required: "Vous devez renseigner votre fonction",
            minlength: "Le champ doit comporter 2 caractères minimum"
        },
        telephone: {
            required: "Vous devez renseigner votre numéro de téléphone",
            digits: "Le numéro de téléphone doit être composé de chiffres uniquement",
            minlength: "Le numéro de téléphone doit comporter 10 chiffres",
            maxlength: "Le numéro de téléphone doit comporter 10 chiffres"
        },
        email: {
            required: "Vous devez renseigner votre adresse e-mail",
            email: "L'adresse e-mail doit être valide"
        },
        demande: {
            required: "Vous devez renseigner la demande",
        },
        contenu: {
            required: "Vous devez renseigner votre message",
            minlength: "Le message doit comporter 10 caractères minimum"
        },
    },

    //envoi du formulaire si tout les champs sont validés 
    submitHandler: function(form) {
      form.submit();
    }
   });
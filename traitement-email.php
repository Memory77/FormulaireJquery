<?php 

if($_POST) {
    // récupération des données du formulaire une fois validés par jquery 
    $nom = $_POST['nom'];
    $prenom = $_POST['prenom'];
    $entreprise = $_POST['entreprise'];
    $fonction = $_POST['fonction'];
    $email = $_POST['email'];
    $telephone = $_POST['telephone'];
    $contenu = $_POST['contenu'];
    
    // concaténation des différentes variables pour l'envoi
    $to = "cyprien.prouvot@hotmail.com";
    $subject = "Vous avez reçu un message depuis votre site web";
    $message = "Nom : ".$nom."\r\n";
    $message .= "Prénom : ".$prenom."\r\n";
    $message .= "Entreprise : ".$entreprise."\r\n";
    $message .= "Fonction : ".$fonction."\r\n";
    $message .= "E-mail : ".$email."\r\n";
    $message .= "Téléphone : ".$telephone."\r\n";
    $message .= "Message : ".$contenu."\r\n";
    $headers = "From: ".$nom." <".$email.">\r\n";
    $headers .= "Reply-To: ".$email."\r\n";
    
    // envoi de l'email par la fonction php mail() 
    if(mail($to, $subject, $message, $headers)) {
      echo "Votre message a été envoyé avec succès.";
    } else {
      echo "Une erreur est survenue lors de l'envoi de votre message.";
    }
  }

?>
Database required:
lab_example

Tables required:
CREATE TABLE `pet` (
  `pet_id` int(11) NOT NULL AUTO_INCREMENT,
  `web_user_id` int(11) NOT NULL,
  `name` varchar(50) NOT NULL,
  `pet_type_id` int(11) NOT NULL,
  `image_id` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`pet_id`),
  KEY `pet_web_user_id_idx` (`web_user_id`),
  KEY `pet_pet_type_id_idx` (`pet_type_id`),
  CONSTRAINT `pet_pet_type_id` FOREIGN KEY (`pet_type_id`) REFERENCES `pet_type` (`pet_type_id`),
  CONSTRAINT `pet_web_user_id` FOREIGN KEY (`web_user_id`) REFERENCES `web_user` (`web_user_id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci


CREATE TABLE `web_user` (
  `web_user_id` int(11) NOT NULL AUTO_INCREMENT,
  `first_name` varchar(75) NOT NULL,
  `last_name` varchar(75) NOT NULL,
  `email` varchar(150) NOT NULL,
  `password_hash` varchar(128) DEFAULT NULL,
  `password_salt` varchar(128) DEFAULT NULL,
  PRIMARY KEY (`web_user_id`),
  UNIQUE KEY `email__UNIQUE` (`email`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=latin1


Need to create your own Cloudinary account https://cloudinary.com/console/.
Find in routes/router.js and replace this with your account info:
cloudinary.config({ 
  cloud_name: "Your_Cloud_Name_Here", //process.env.CLOUD_NAME 
  api_key: "Your_API_Key_Here", //process.env.CLOUD_KEY
  api_secret: "Your_API_Secret_Here" //process.env.CLOUD_SECRET
});

Also in views/pet.ejs
		<script type="text/javascript"> 
			$.cloudinary.config({ cloud_name: 'Your_Cloud_Name_Here', secure: true});
		</script>

On the pets page (http://localhost:3000/pets), you will see an upload button to upload images
Once uploaded, the pet table should contain a uuid for the name of the image uploaded:
 # pet_id, web_user_id, name, pet_type_id, image_id
'1', '4', 'Rex', '1', '518789c8-627e-4e4c-8922-4d12326a1c3b'
'2', '4', 'Fluffy', '2', 'e7ff607a-1f64-496b-a835-f0ada5a23bfd'
'3', '6', 'Fido', '1', '6576fd42-7db5-46ee-93aa-15e8e4f6cc42'

You will see the upload button again, if the image_id column is NULL.
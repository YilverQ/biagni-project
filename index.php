<!--Importamos los documentos php-->
<?php require("templates/config.php"); ?>
<?php require("templates/data.php"); ?>

<!DOCTYPE html>
<html>
<head>
	<!--Meta-->
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1">

	<!--Title-->
	<title>
		Catálogo de productos - <?php echo $name_page; ?>
	</title>

	<!--Estilos-->
	<link rel="stylesheet" href="styles/normalize.css">
	<link rel="stylesheet" href="styles/main.css">
	<link rel="stylesheet" href="styles/home.css">
	<link rel="stylesheet" href="styles/hidden.css">

	<!--Favicon-->
	<link rel="icon" href="img/icon.png">
	
	<!--Fuentes-->
	<link rel="preconnect" href="https://fonts.googleapis.com">
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
	<link href="https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@10..48,400;10..48,700&family=Playfair+Display:wght@500&family=Roboto:wght@300;400&display=swap" rel="stylesheet">
	
	<!--Fuentes de Fontawesome-->
	<link rel="stylesheet" type="text/css" href="assets/css/fontawesome.min.css">
	<link rel="stylesheet" type="text/css" href="assets/css/solid.css">
	<link rel="stylesheet" type="text/css" href="assets/css/brands.css">
</head>
<body>
	<!--Banner fijo-->
	<div class="fixedBanner">
		<h1 class="fixedBanner__title">
			<?php echo $name_page; ?> 
		</h1>
	</div>


	<!--Banner fijo-->
	<header class="header">
		<img src="img/logo.png" alt="logo de la página" class="header__img">
		<div class="header__minBox">
			<h2 class="header__title">Accesorios | Joyerías | Girasoles</h2>
			<div class="header__buttons">
				<a href="#" target="_blank">
					<div class="button button--whatsapp">
						<i class="fa-brands fa-whatsapp"></i>
						<p>Whatsapp</p>
					</div>
				</a>
				<a href="#" target="_blank">
					<div class="button button--telegram">
						<i class="fa-brands fa-telegram"></i>
						<p>Telegram</p>
					</div>
				</a>
			</div>
		</div>
	</header>


	<!--Tags - Etiquetas-->
	<div class="tagsBox">
		<div class="tagItem tagItem--All">
			<img src="img/tags/All.png" alt="Etiqueta de la página" 
						class="tagItem__img tagItem__img--checked">
		</div>
		<?php
			foreach ($tags as $key => $value) {
				echo '<div class="tagItem tagItem--' . $value .'">'; 
				
				$img = '<img src="img/tags/' . $value . '.png" alt="Etiqueta de la página" class="tagItem__img">';
				echo $img;
			
				echo '</div>';
			}
		 ?>
	</div>


	<!--Products - Productos-->
	<div class="productsBox">
		<i class="fa-solid fa-xmark xMark xMark--hidden" id="xMark"></i>
		<?php 
			foreach ($tags as $key => $value) {
				foreach ($products[$value] as $minKey => $minValue) {
						echo '<div class="productBox">';
							echo '<div class="productInfo hidden">';
							echo '<span class="product__price">25$</span>';
							echo '<h3 class="product__title">' . $value . " - " . $minValue . ' </h3>';
							echo '</div>';
							
							echo '<img src="img/products/' . $value . '/' . $minValue . '.jpg" alt="Producto de la página" class="product__img">';
						echo '</div>';
				}
			}
		 ?>
	</div>

	<!--Scripts-->
    <script src="js/productScreen.js"></script>
</body>
</html>
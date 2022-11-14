<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Descubriendo la Calzada</title>
    <link rel="stylesheet" href="resources/css/styles.css">
    <link rel="stylesheet" href="resources/css/form.css">

</head>

<body>
        <header>
            <h1 class="title">La Calzada del Gigante</h1>
        </header>
        <nav>
            <ul>
                <li><a class="active" href="indexPrincipal.html">Home</a></li>
                <li><a class="active" href="ciencia.html">Ciencia</a></li>
                <li><a class="active" href="leyenda.html">Leyenda</a></li>
                <li><a class="active" href="galeria.html">Galeria</a></li>
                <li><a class="active" href="contacto.html">Contacto</a></li>
            </ul>
        </nav>
        <div class="breadcrumb">Home &gt; <span style="text-decoration: underline">Leyenda</span></div>
    <main>
        <section>
            <div id="formulario">
                <form action="form.php" method="post">
                    <label for="">Nombre completo:</label>
                    <input type="text" name="nombre" id="nombre" required /><br>
                    <label for="">E-mail:</label>
                    <input type="email" name="email" id="email" required /><br>
                    <label for="">Fotos:</label>
                    <select name="select" id="select" size="5" multiple required>
                        <option value="img1">Foto 1</option>
                        <option value="img2">Foto 2</option>
                        <option value="img3">Foto 3</option>
                        <option value="img4">Foto 4</option>
                        <option value="img5">Foto 5</option>
                        <input list="midatalist"><br>
                        <datalist id="midatalist">
                            <option value="img1"></option>
                            <option value="img1"></option>
                            <option value="img1"></option>
                            <option value="img1"></option>
                            <option value="img1"></option>
                        </datalist><br>
                    </select>
                    <textarea name="textarea" id="area" cols="30" rows="10" style="resize:none"></textarea>
                    <input type="submit" value="Enviar" /><br>
                </form>
            </div>
        </section>
    </main>
    <footer>
        <h4>@Marta Fernández Villanueva</h4>
    </footer>

</body>

</html>
<?php include_once 'Views/template-principal/header.php';?>
  <!-- Start Banner Hero -->
  <div id="template-mo-zay-hero-carousel" class="carousel slide" data-bs-ride="carousel">
    <ol class="carousel-indicators">
      <li data-bs-target="#template-mo-zay-hero-carousel" data-bs-slide-to="0" class="active"></li>
      <li data-bs-target="#template-mo-zay-hero-carousel" data-bs-slide-to="1"></li>
      <li data-bs-target="#template-mo-zay-hero-carousel" data-bs-slide-to="2"></li>
    </ol>
    <div class="carousel-inner">
      <div class="carousel-item active">
        <div class="container">
          <div class="row p-5">
            <div class="mx-auto col-md-8 col-lg-6 order-lg-last">
              <img class="img-fluid" src="<?php echo BASE_URL; ?>assets/img/carrusel/1.jpg" alt="">
            </div>
            <div class="col-lg-6 mb-0 d-flex align-items-center">
              <div class="text-align-left align-self-center">
                <h1 class="h1 text-util"><b>Mascotas</b></h1>
                <h3 class="h2">Alimentos y productos para tus mascotas</h3>
                <p>
                Hemos hecho una increíble selección de marcas y productos exclusivos que mantendrá a tu perro sano, fuerte y feliz. Haz clic y encuentra lo que necesites.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="carousel-item">
        <div class="container">
          <div class="row p-5">
            <div class="mx-auto col-md-8 col-lg-6 order-lg-last">
              <img class="img-fluid" src="<?php echo BASE_URL; ?>assets/img/carrusel/2.jpg" alt="">
            </div>
            <div class="col-lg-6 mb-0 d-flex align-items-center">
              <div class="text-align-left">
                <h1 class="h1">Para tu finca</h1>
                <h3 class="h2">Productos agricolas</h3>
                <p>
                 Tu operación productiva nunca tuvo un aliado que te ofreciera tanta variedad de productos para ayudar en tu día a día como <strong>Terra Pet</strong>. Compra 
                 en una sola tienda virtual todo lo que necesitas y recibe todo a domicilioen muy poco tiempo.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="carousel-item">
        <div class="container">
          <div class="row p-5">
            <div class="mx-auto col-md-8 col-lg-6 order-lg-last">
              <img class="img-fluid" src="<?php echo BASE_URL; ?>assets/img/carrusel/3.jpg" alt="">
            </div>
            <div class="col-lg-6 mb-0 d-flex align-items-center">
              <div class="text-align-left">
                <h1 class="h1">Repr in voluptate</h1>
                <h3 class="h2">Ullamco laboris nisi ut </h3>
                <p>
                  We bring you 100% free CSS templates for your websites.
                  If you wish to support TemplateMo, please make a small contribution via PayPal or tell your friends
                  about our website. Thank you.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <a class="carousel-control-prev text-decoration-none w-auto ps-3" href="#template-mo-zay-hero-carousel"
      role="button" data-bs-slide="prev">
      <i class="fa fa-chevron-left"></i>
    </a>
    <a class="carousel-control-next text-decoration-none w-auto pe-3" href="#template-mo-zay-hero-carousel"
      role="button" data-bs-slide="next">
      <i class="fa fa-chevron-right"></i>
    </a>
  </div>
  <!-- End Banner Hero -->



  <!-- Start Categories of The Month -->
  <section class="container py-5">
    <div class="row text-center pt-3">
      <div class="col-lg-6 m-auto">
        <h1 class="h1">Categorias</h1>
        <p>
          Conoce nuestras categorias
        </p>
      </div>
    </div>
    <div class="row">
      <?php foreach ($data['categorias'] as $categoria) { ?>
      <div class="col-12 col-md-2 p-5 mt-3">
        <a href="<?php echo BASE_URL . 'principal/categorias/' . $categoria['id']; ?>"><img src="<?php echo $categoria['imagen']; ?>" class="rounded-circle img-fluid border"></a>
        <h5 class="text-center mt-3 mb-3"><?php echo $categoria['categoria']?></h5>
      </div>
      <?php }?>
    </div>
  </section>
  <!-- End Categories of The Month -->


  <!-- Start Featured Product -->
  <section class="bg-light">
    <div class="container py-5">
      <div class="row text-center py-3">
        <div class="col-lg-6 m-auto">
          <h1 class="h1">Productos</h1>
          <p>
            Nuevos productossssss
          </p>
        </div>
      </div>
      <div class="row">
        <?php foreach ($data['nuevoProductos'] as $producto) { ?>
        <div class="col-12 col-md-4 mb-4">
          <div class="card h-100">
            <a href="<?php echo BASE_URL . 'principal/detail/' . $producto['id']?>">
              <img src="<?php echo $producto['imagen']; ?>" class="card-img-top" alt="<?php echo $producto['nombre']; ?>">
            </a>
            <div class="card-body">
              <ul class="list-unstyled d-flex justify-content-between">
                <li>
                  <i class="text-warning fa fa-star"></i>
                  <i class="text-warning fa fa-star"></i>
                  <i class="text-warning fa fa-star"></i>
                  <i class="text-muted fa fa-star"></i>
                  <i class="text-muted fa fa-star"></i>
                </li>
                <li class="text-muted text-right"><?php echo MONEDA . ' ' . $producto['precio']; ?></li>
              </ul>
              <a href="<?php echo BASE_URL . 'principal/detail/' . $producto['id']?>" class="h2 text-decoration-none text-dark"><?php echo $producto['nombre']; ?></a>
              <p class="card-text">
              <?php echo $producto['descripcion']; ?>
              </p>
            </div>
          </div>
        </div>
        <?php } ?>
      </div>
    </div>
  </section>
  <!-- End Featured Product -->

  <?php include_once 'Views/template-principal/footer.php';?>
</body>

</html>
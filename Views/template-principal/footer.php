<div id="myModal" class="modal fade" tabindex="-1" role="dialog" aria-labelledby="my-modal-title" aria-hidden="true">
  <div class="modal-dialog modal-lg" role="document">
    <div class="modal-content">
      <div class="modal-header bg-primary text-white">
        <h5 class="modal-title"><i class="fas fa-cart-arrow-down"></i>Carrito</h5>
        <button class="btn-close" data-bs-dismiss="modal" aria-label="Close">
        </button>
      </div>
      <div class="modal-body">
        <div class="table-responsive">
          <table class="table table-bordered table-striped table-hover align-middle" id="tableListaCarrito">
            <thead>
              <tr>
                <th>#</th>
                <th>Producto</th>
                <th>Precio</th>
                <th>Cantidad</th>
                <th>Subtotal</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
            </tbody>
          </table>
        </div>
      </div>
      <div class="modal-footer">
        <h3 id="totalGeneral"></h3>
        <a class="btn btn-outline-primary" href="<?php echo BASE_URL . 'clientes'; ?>">Procesar pedido</a>

      </div>
    </div>
  </div>
</div>
<!-- Login directo -->
<div id="modalLogin" class="modal fade" tabindex="-1" role="dialog" aria-labelledby="my-modal-title" aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header bg-primary text-white">
        <h5 class="modal-title" id="titleLogin">Iniciar sesion</h5>
        <button class="btn-close" data-bs-dismiss="modal" aria-label="Close">
        </button>
      </div>
      <div class="modal-body m-3">
        <form method="get" action="">
          <div class="text-center">
            <img class="img-thumbnail rounded-circle" src="<?php echo BASE_URL . 'assets/img/logo.png'; ?>" alt="" width="100">
          </div>
          <div class="row">
            <div class="col-md-12" id="frmLogin">
              <div class="form-group mb-3">
                <label for="correoLogin"><i class="fas fa-envelope"></i>Correo</label>
                <input id="correoLogin" class="form-control" type="text" name="correoLogin" placeholder="Correo Electrónico">
              </div>
              <div class="form-group mb-3">
                <label for="claveLogin"><i class="fas fa-key"></i>Contraseña</label>
                <input id="claveLogin" class="form-control" type="text" name="claveLogin" placeholder="Contraseña">
              </div>
              <a href="#" id="btnRegister">No tienes cuenta?</a>
              <div class="float-end">
            <button class="btn btn-primary btn-lg" type="button">Login</button>
          </div>
            </div>
            <!--formulario de registro-->
            <div class="col-md-12 d-none" id="frmRegister">
              <div class="form-group mb-3">
                <label for="nombreRegistro"><i class="fas fa-list"></i>Nombre</label>
                <input id="nombreRegistro" class="form-control" type="text" name="nombreRegistro" placeholder="Nombre Completo">
              </div>
              <div class="form-group mb-3">
                <label for="correoRegistro"><i class="fas fa-envelope"></i>Correo</label>
                <input id="correoRegistro" class="form-control" type="text" name="correoRegistro" placeholder="Contraseña">
              </div>
              <div class="form-group mb-3">
                <label for="claveRegistro"><i class="fas fa-key"></i>Contraseña</label>
                <input id="claveRegistro" class="form-control" type="text" name="claveRegistro" placeholder="Contraseña">
              </div>
              <a href="#" id="btnLogin">Ya tienes una cuenta?</a>
              <div class="float-end">
            <button class="btn btn-primary btn-lg" type="button" id="registrarse">Registrarse</button>
          </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</div>


<!-- Start Footer -->
<footer class="bg-dark" id="tempaltemo_footer">
  <div class="container">
    <div class="row">

      <div class="col-md-4 pt-5">
        <h2 class="h2 text-util border-bottom pb-3 border-light logo">Ubicanos</h2>
        <ul class="list-unstyled text-light footer-link-list">
          <li>
            <i class="fas fa-map-marker-alt fa-fw"></i>
           Vereda Morcá, Sogamos, Boyacá.
          </li>
          <li>
            <i class="fa fa-phone fa-fw"></i>
            <a class="text-decoration-none" href="tel:3117996339">3117996339</a>
          </li>
          <li>
            <i class="fa fa-envelope fa-fw"></i>
            <a class="text-decoration-none" href="mailto:clinicaterrapet@gmail.com">clinicaterrapet@gmail.com</a>
          </li>
        </ul>
      </div>

      <div class="col-md-4 pt-5">
        <h2 class="h2 text-light border-bottom pb-3 border-light">Productos</h2>
        <ul class="list-unstyled text-light footer-link-list">
          <li><a class="text-decoration-none" href="#">Mascotas</a></li>
          <li><a class="text-decoration-none" href="#">Perros</a></li>
          <li><a class="text-decoration-none" href="#">Gatos</a></li>
          <li><a class="text-decoration-none" href="#">Marcas</a></li>
          <li><a class="text-decoration-none" href="#">Farmacia</a></li>
          <li><a class="text-decoration-none" href="#">Para tu finca</a></li>
          <li><a class="text-decoration-none" href="#">Veterinaria</a></li>

        </ul>
      </div>

      <div class="col-md-4 pt-5">
        <h2 class="h2 text-light border-bottom pb-3 border-light">Información adicional</h2>
        <ul class="list-unstyled text-light footer-link-list">
          <li><a class="text-decoration-none" href="#">Inicio</a></li>
          <li><a class="text-decoration-none" href="#">Sobre nosotros</a></li>
          <li><a class="text-decoration-none" href="#">Ubicacion de la clinica</a></li>
          <li><a class="text-decoration-none" href="#">Preguntas frecuentes</a></li>
          <li><a class="text-decoration-none" href="#">Contacto</a></li>
        </ul>
      </div>

    </div>

    <div class="row text-light mb-4">
      <div class="col-12 mb-3">
        <div class="w-100 my-3 border-top border-light"></div>
      </div>
      <div class="col-auto me-auto">
        <ul class="list-inline text-left footer-icons">
          <li class="list-inline-item border border-light rounded-circle text-center">
            <a class="text-light text-decoration-none" target="_blank" href="#"><i class="fab fa-facebook-f fa-lg fa-fw"></i></a>
          </li>
          <li class="list-inline-item border border-light rounded-circle text-center">
            <a class="text-light text-decoration-none" target="_blank" href="#"><i class="fab fa-instagram fa-lg fa-fw"></i></a>
          </li>
          <li class="list-inline-item border border-light rounded-circle text-center">
            <a class="text-light text-decoration-none" target="_blank" href="#"><i class="fab fa-twitter fa-lg fa-fw"></i></a>
          </li>
        </ul>
      </div>
    </div>
  </div>

  <div class="w-100 bg-black py-3">
    <div class="container">
      <div class="row pt-2">
        <div class="col-12">
          <p class="text-left text-light">
            Copyright &copy; 2023 Clínica TerraPet
          </p>
        </div>
      </div>
    </div>
  </div>

</footer>
<!-- End Footer -->

<!-- Start Script -->
<script src="<?php echo BASE_URL; ?>assets/js/jquery-3.6.0.min.js"></script>
<script src="<?php echo BASE_URL; ?>assets/js/jquery-migrate-1.2.1.min.js"></script>
<script src="<?php echo BASE_URL; ?>assets/js/bootstrap.bundle.min.js"></script>
<script src="<?php echo BASE_URL; ?>assets/js/templatemo.js"></script>
<script src="<?php echo BASE_URL; ?>assets/js/all.min.js"></script>
<script src="<?php echo BASE_URL; ?>assets/js/sweetalert2.all.min.js"></script>
<script>
  const base_url = '<?php echo BASE_URL; ?>';
</script>
<script src="<?php echo BASE_URL; ?>assets/js/carrito.js"></script>
<script src="<?php echo BASE_URL; ?>assets/js/login.js"></script>
<!-- End Script -->
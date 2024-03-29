<?php include_once 'Views/template/header-principal.php';?>


    <!-- Start Content Page -->
    <div class="container-fluid bg-light py-5">
        <div class="col-md-6 m-auto text-center">
            <h1 class="h1">Contáctenos</h1>
            <p>
                Ponte en contacto con nosotros para solicitar una cosulta.
            </p>
        </div>
    </div>

    <!-- Start Contact -->
    <div class="container py-5">
        <div class="row py-5">
            <form class="col-md-9 m-auto" method="post" role="form" id="frmContactos">
                <div class="row">
                    <div class="form-group col-md-6 mb-3">
                        <label for="nombre">Nombre</label>
                        <input type="text" class="form-control mt-1" id="nombre" name="name" placeholder="Nombre" required>
                    </div>
                    <div class="form-group col-md-6 mb-3">
                        <label for="email">Correo</label>
                        <input type="email" class="form-control mt-1" id="email" name="email" placeholder="Correo" required>
                    </div>
                </div>
                <div class="mb-3">
                    <label for="telefono">Telefono</label>
                    <input type="text" class="form-control mt-1" id="telefono" name="subject" placeholder="Telefono" required>
                </div>
                <div class="mb-3">
                    <label for="inputmessage">Razón de la Cita o Consulta</label>
                    <textarea class="form-control mt-1" id="message" placeholder="Escribe tu motivo de consulta"
                        rows="8"></textarea>
                </div>
                <div class="row">
                    <div class="col text-end mt-2">
                        <button type="submit" class="btn btn-success btn-lg px-3" id="btnContactos">Hablémos</button>
                    </div>
                </div>
            </form>
        </div>
    </div>
    <!-- End Contact -->

    <?php include_once 'Views/template/footer-principal.php';?>
    <script src="<?php echo BASE_URL . 'assets/js/ckeditor.js'; ?>"></script>
    <script src="<?php echo BASE_URL . 'assets/js/modulos/contactos.js'; ?>"></script>
</body>

</html>
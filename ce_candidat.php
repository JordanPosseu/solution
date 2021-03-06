<!-- <!DOCTYPE html>
<html>
<head> -->
  <!-- Required meta tags -->
<!--   <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"> -->

  <!-- awesone fonts css-->
  <!-- <link href="css/font-awesome.css" rel="stylesheet" type="text/css"> -->
  <!-- owl carousel css-->
  <!-- <link rel="stylesheet" href="owl-carousel/assets/owl.carousel.min.css" type="text/css"> -->
  <!-- Bootstrap CSS -->
  <!-- <link rel="stylesheet" href="css/bootstrap.min.css"> -->
  <!-- custom CSS -->
  <!-- <link rel="stylesheet" href="css/ce.css">
  <title>Centre d'examen</title>
</head> -->
<section style=" background: url('images/candida.jpg'); background-repeat: no-repeat; background-size: 100%;" class="body">
  <div class="candidate container" style="padding: 0;">
    <div class="btn btn-secondary btn-lg btn-block" style="margin: 0 0 20 0; width: 100%; font-size: 30px;">Gestionnaire de candidature</div>
    <div class="candidate_manager row ">
      <button class="add btn btn-success" style="margin-left: 30px;" onclick="document.getElementById('modal-wrapper-add').style.display='block'">Nouveau candidat</button>
      <button class="upd btn btn-info" onclick="var updateMatricule =prompt('Entrer le matricule du candidat à modifier ');">Modifier un candidat</button>
      <button class="del btn btn-danger" onclick="var deleteMatricule =prompt('Entrer le matricule du candidat à supprimer ');">Supprimer un candidat</button>
    </div>

     <div class="listCandidat">
      <table>
        <tr class="text-white bg-primary">
          <th>Matricule</th>
          <th>Nom</th>
          <th>Prenom</th>
          <th>Date de naissance</th>
          <th>Serie</th>
          <th>Numero de transaction</th>
          <th>Region</th>
        </tr>
      </table>
    </div>
  </div>


<!-- add candidate -->
<div id="modal-wrapper-add" class="modal login_form">
  <form class="modal-content animate" action="#">
    <div class="imgcontainer">
      <span onclick="document.getElementById('modal-wrapper-add').style.display='none'" class="close" title="Clode login">&times;</span>
      <h1 style="text-align: center;">Nouveau candidat</h1>
    </div>

    <div class="container box">
      <div class="inputbox">
        <input type="text" required="" name="firstName">
        <label for="firstName">Nom du candidat</label>
      </div>
      <div class="inputbox">
        <input type="text" required="" name="lastName" min="8">
        <label for="lastName">Prenom du candidat</label>
      </div>

      <div class="row datNais">
        <div class="col-lg-3">
          <div class="input-group inputbox">
            <input type="number" required="" name="jour" min="1" max="31">
            <label for="jour">Jour</label>
          </div>
        </div>
        <div class="col-lg-3">
          <div class="input-group inputbox">
            <input type="number" required="" name="mois" min="1" max="12">
            <label for="mois">Mois</label>
          </div>
        </div>
        <div class="col-lg-3">
          <div class="input-group inputbox">
            <input type="number" required="" name="annee" min="1975" max="2005">
            <label for="annee">Année</label>
          </div>
        </div>
      </div>

      <div class="row sexe">
        <span>Sexe           </span>
        <div class="col-lg-3">
          <div class="input-group inputbox">
            <input type="radio" required="" name="sexe">
            <label for="feminin">Masculin</label>
          </div>
        </div>
        <div class="col-lg-3">
          <div class="input-group inputbox">
            <input type="radio" required="" name="sexe">
            <label for="masculin">Feminin</label>
          </div>
        </div>
      </div><br>

      <hr><br>

      <div class="inputbox">
        <input type="number" required="" name="transaction">
        <label for="transaction">Numero de transaction</label>
      </div>
       <div class="inputbox">
        <input type="text" required="" name="region">
        <label for="region">Région</label>
      </div>

    </div>
    <button type="submit" class="btn btn-success btn-lg btn-block">Ajouter</button>
  </form>
</div>
<script type="text/javascript">
    var modal = document.getElementById('modal-wrapper-add');
    window.onclick = function (event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
</script>
<!-- end add candidate -->


  <!-- Optional JavaScript -->
<!-- jQuery first, then Popper.js, then Bootstrap JS -->
<script src="js/jquery-3.3.1.slim.min.js"></script>
<script src="js/popper.min.js"></script>
<script src="js/bootstrap.min.js"></script>
<!-- owl carousel js-->
<script src="owl-carousel/owl.carousel.min.js"></script>
<script src="js/main.js"></script>
</section>
<!-- </body>
</html> -->

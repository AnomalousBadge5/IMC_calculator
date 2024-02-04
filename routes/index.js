var express = require('express');
// const bodyParser=require("body-parser");
var router = express.Router();
// router.use(bodyParser.urlencoded({extended:true}));

/* GET home page. */
router.get('/', function(req, res) {
  res.render('IMC_page', {  });
});

router.post("/", function(req, res){
  var m=Number(req.body.poids);
  var g=Number(req.body.grandeur);
  if (g == 0) {
    res.send("Erreur: la grandeur ne peut pas être 0.");
    return; 
  }
  var imc = m / (g * g)
  if (isNaN(imc)) {
    res.send("Erreur: Entrez des chiffres avec un point pour les décimales");
    return;
  }
  res.render('IMC_calculated', {"imc":imc});
});

module.exports = router;

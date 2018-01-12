function select(e,group){

  var x = document.getElementsByClassName('gcc-'+group)
  _.map(x, function(element){
    element.classList.remove("select");
  });
  e.target.classList.toggle("select");
  if(_.isEqual(group,'category')){
    categorySelect=e.target.dataset.value;
  }
  if(_.isEqual(group,'language')){
    languageSelect=e.target.dataset.value;
  }
  if(_.isEqual(group,'publication')){
    publicationSelect=e.target.dataset.value;
  }
  if(_.isEqual(group,'presentation')){
    presentationSelect=e.target.dataset.value;
  }
}

// BUSCA JSON
function Init(){
  loadJSON(JSON_FILE, function(data){
    jsonData = data;
    renderPost(jsonData.data);
    var listSearch = [];
    _.map(data.data, function(item){
      listSearch=_.union(listSearch,[item.teaser,item.title])
    });
    var inputComplete = document.getElementById("inputFinder");
    var awesomplete = new Awesomplete(inputComplete,{
      minChars: 3,
      list: listSearch
    });
  })
  var x = document.getElementsByClassName('is-default-selected')
  _.map(x, function(element){
    element.classList.toggle("select");
  });
}

function searchForm(){
}

function searchInclude(text,data){
  return _.filter(data,
  function (item) {
    return _.some(item,
    function (value){
       return _.includes(_.toLower(value),_.toLower(text))})});
}


function onChangeSearch() {

  var inputButton = document.getElementById("inputButton");
  if(inputComplete.value.length>2){
    inputButton.disabled = false;
  }else{
    inputButton.disabled = true;
  }

}
function onkeydownSearch(e) {
  if(e.keyCode == 13){
    if(e.target.value.length>2){
      renderPost(searchInclude(e.target.value,jsonData.data));
    }
  }
}

//LANZADOR

function onSubmit() {
  var inputComplete = document.getElementById("inputComplete");
  console.log();
  renderPost(searchInclude(inputComplete.value,jsonData.data));

}


function renderPost(posts){
  var renderProducts = document.getElementById("renderProducts");
  renderProducts.innerHTML = "";
  var products = "";
  _.map(posts,function (post){

    products += '<div class="product-wrapper"><img src="'+post.image+'"class="product-img" alt="'+post.title+' foto">'+
            '<h2 class="product-title">'+post.title+'</h2>'+
            '<p class="product-paragraft">'+post.teaser+'</p>'+
          '</div>';


  })
  if(products==""){
    products+= '<div class="product-wrapper">'+
            '<h2 class="product-title">Uy!</h2>'+
            '<p class="product-paragraft">No se a encontrado resultados</p>'+
          '</div>';
  }
  renderProducts.innerHTML = products;
}

Init();

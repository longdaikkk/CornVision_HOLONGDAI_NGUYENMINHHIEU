document.getElementById("btn__search").onclick=function(){
    document.getElementById("btn__search").className = "btn btn-success search__style";
    document.getElementById("search__text").style.display = "block";
}

document.getElementById("close__btn").onclick=function(){
    document.getElementById("search__text").style.display = "none";
    document.getElementById("btn__search").className = "btn btn-success search_style_in";
}
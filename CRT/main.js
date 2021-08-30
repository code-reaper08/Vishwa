let load = document.getElementsByClassName("#loading");
let main = document.getElementById("#maincontent");


if (load.style.display == none){
    main.style.display = block;
}
if (main.style.display == block) {
    load.style.display == none;
}
var $burguerButton = document.getElementById('burguer-button');
var $menu = document.getElementById('menu');

$burguerButton.addEventListener('click', toggleMenu);
$burguerButton.addEventListener('touchstart', toggleMenu);

function toggleMenu() {
    $menu.classList.toggle('active');
}

// Cerrar menu al hacer click en cualquier link del menu movil
var $menuLinks = $menu.querySelectorAll('a');
$menuLinks.forEach(function(link) {
    link.addEventListener('click', function() {
        $menu.classList.remove('active');
    });
});

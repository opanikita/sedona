function initMap() {
    var uluru = { lat: 34.8543583, lng: -111.8651786 };
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 8,
        center: uluru
    });
    var marker = new google.maps.Marker({
        position: uluru,
        map: map
    });
}
var btn = document.querySelector('.search-btn');
var modal = document.querySelector('modal');

btn.addEventListener('click', function (event) {
    event.preventDefault();
    modal.classList.toggle('open');
});

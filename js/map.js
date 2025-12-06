  const map = L.map('map').setView([51.218266, 4.127924], 14); 
 
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 10,
  }).addTo(map);

  // Custom logo marker
  const logoIcon = L.icon({
    iconUrl: 'assets/logo.png',
    iconSize: [50, 50],     
    iconAnchor: [25, 50],   
    popupAnchor: [0, -50]
  });

  // Plaats marker
  L.marker([51.218266, 4.127924], { icon: logoIcon })
    .addTo(map)
    .openPopup();
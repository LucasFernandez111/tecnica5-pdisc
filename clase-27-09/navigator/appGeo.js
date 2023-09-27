const link = document.querySelector("a");
const iframe = document.querySelector("iframe");

navigator.geolocation.getCurrentPosition((cordeanadas, err) => {
  if (err) {
    console.log(err);
  } else {
    const latitud = cordeanadas.coords.latitude;
    const longitud = cordeanadas.coords.longitude;
    const url = `https://maps.google.com/?q=loc:${latitud},${longitud}`;
    link.textContent = url;
    link.href = url;
    window.open(url); //popapst
  }
});

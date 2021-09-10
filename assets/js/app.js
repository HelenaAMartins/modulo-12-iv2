function getDestination() {
  const destinations = document.getElementById("destinations");
  destinations.addEventListener("change", function (el) {
    const coord = el.target.value;
    let obj = {};

    switch (coord) {
      case "disney":
        obj = {
          title: "Disney",
          price: "12x de R$1.500,00",
          days: "12 dias",
          hotel: "Hotel Disney Resorts Collection",
          lat: "28.3771904",
          long: "-81.5729287",
          img:"package-1.png"
        };
        break;
        case "london":
        obj = {
          title: "Londres",
          price: "12x de R$2.500,00",
          days: "10 dias",
          hotel: "Big Bang Hotel",
          lat: "51.5287352",
          long: "-0.3817857",
          img:"package-2.png"
        };
        break;
        case "noronha":
        obj = {
          title: "Fernando de Noronha",
          price: "12x de R$800,00",
          days: "15 dias",
          hotel: "Praia Limpa Resort",
          lat: "-3.8606883",
          long: "-32.4344156",
          img:"package-3.png"
        };
        break;
        case "paris":
          obj = {
            title: "Paris",
            price: "12x de R$1.800,00",
            days: "12 dias",
            hotel: "Eau de Toilette Hotel",
            lat: "48.8589507",
            long: "2.2770197",
            img:"package-4.png"
          };
          break;
          case "egypt":
          obj = {
            title: "Cairo",
            price: "10x de R$3.000,00",
            days: "18 dias",
            hotel: "Ramses Great Hotel",
            lat: "30.0596185",
            long: "31.1884234",
            img:"package-5.png"

          };
          break;
      default:
        break;
    }

    initMap(obj);
  });
}

function initMap(obj) {
  const latitude = obj && obj.lat ? Number(obj.lat) : 0.0405846;
  const longitude = obj && obj.long ? Number(obj.long) : -63.4926026;
  const zoom = obj ? 12 : 3;

  const centerMap = { lat: latitude, lng: longitude };

  const map = new google.maps.Map(document.getElementById("map"), {
    center: centerMap,
    zoom: zoom,
  });

  if (obj) {
    const contentString = `
    <div id="content">
      <div id="siteNotice">
      </div>
      <div id="bodyContent">
      <figure>
      <img src="assets/img/${obj.img}" />
      </figure>
      <div id="bodyContent__text">
      <h1 id="firstHeading" class="firstHeading">${obj.title}</h1>
        <p><b>Preço:</b> ${obj.price}</br><small>por pessoa</small></p>
        <p><b>Total de dias:</b> ${obj.days}</p>
        <p><b>Hospedagem:</b></br> ${obj.hotel}</p>
        </div>
      </div>

    </div>`;

    const infowindow = new google.maps.InfoWindow({
      content: contentString,
    });

    const marker = new google.maps.Marker({
      position: centerMap,
      map: map,
      title: "CVC viagens",
    });

    marker.addListener("click", () => {
      infowindow.open({
        anchor: marker,
        map,
        shouldFocus: false,
      });
    });
  }
}

getDestination();
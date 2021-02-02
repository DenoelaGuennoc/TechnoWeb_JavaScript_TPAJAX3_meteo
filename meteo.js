function getCoordonnees() {
  const url = "http://nominatim.openstreetmap.org/";
  let fetchOptions = { method: "GET" };

  fetch(url, fetchOptions)
    .then((response) => {
      return response.json();
    })
    .then((dataJSON) => {})
    .catch((error) => {
      // Gestion des erreurs
      console.log(error);
    });
}

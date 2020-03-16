//spread operator

const caso = ["caso1", "caso2", "caso3"];
const casoReverse = [...caso].reverse();
console.log(casoReverse);

//AJAX

const descargarUser = cant =>
  new Promise((resolve, reject) => {
    const URL_API = `https://randomuser.me/api/?results=${cant}&nat=uk`;

    // Llamado Ajax
    const xhr = new XMLHttpRequest();
    // Abrir la conexion
    xhr.open("GET", URL_API, true);
    // on load
    xhr.onload = () => {
      if (xhr.status === 200) {
        resolve(JSON.parse(xhr.responseText).results);
      } else {
        reject(new Error(xhr.statusText));
      }
    };
    // on Error (optional)
    xhr.onerror = error => reject(error);
    // Send
    xhr.send();
  });

descargarUser().then(
  user => console.log(user),
  error => console.error(new Error("Error: " + error))
);

//FETCH
const URL_API = "https://randomuser.me/api/?results=10&nat=uk";
fetch(URL_API)
  .then(res => res.json())
  .then(data => console.log(data.results))
  .catch(error => console.error(error));


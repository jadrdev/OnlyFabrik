import { requestOptions, postOptions } from '../utils/conect';
import { BaseURL } from '../utils/constants';
//Creamos la función para extraer las categorias
export function getAllCategoryServices() {
  const url = `${BaseURL}/wpo_bookly_services`;
  return fetch(url, requestOptions) // Extraemos en formato JSON todas las peliculas a través de la promesa
    .then((response) => {
      return response.json();
    })
    .then((result) => {
      return result;
    });
}
export function getAllServices() {
  const url = `${BaseURL}/wpo_bookly_services`;
  // Montamos la url que necesita Moviedb para devolvernos el resultado

  return fetch(url, requestOptions) // Extraemos en formato JSON todas las peliculas a través de la promesa
    .then((response) => {
      return response.json();
    })
    .then((result) => {
      return result;
    });
}
export function getAllStaff() {
  const url = `${BaseURL}/wpo_bookly_staff`;
  // Montamos la url que necesita Moviedb para devolvernos el resultado

  return fetch(url, requestOptions) // Extraemos en formato JSON todas las peliculas a través de la promesa
    .then((response) => {
      return response.json();
    })
    .then((result) => {
      return result;
    });
}
export function getAllDayFree(idstaff, idservice, date) {
  const url = `${BaseURL}/wpo_bookly_timeslots?staffid=${idstaff}&serviceid=${idservice}&date=${date}`;
  // Montamos la url que necesita Moviedb para devolvernos el resultado

  return fetch(url, requestOptions) // Extraemos en formato JSON todas las peliculas a través de la promesa
    .then((response) => {
      return response.json();
    })
    .then((result) => {
      return result;
    });
}

export function InsertCita(parametros) {
  const url = `${BaseURL}/wpo_bookly_appointments`;
  // Montamos la url que necesita Moviedb para devolvernos el resultado

  postOptions.body = JSON.stringify(parametros);

  return fetch(url, postOptions) // Extraemos en formato JSON todas las peliculas a través de la promesa
    .then((response) => {
      return response.json();
    })
    .then((result) => {
      return result;
    });
}

export function InsertarClientes(customer) {
  const url = `${BaseURL}/wpo_bookly_customers`;
  // Montamos la url que necesita Moviedb para devolvernos el resultado

  postOptions.body = JSON.stringify(customer);

  return fetch(url, postOptions) // Extraemos en formato JSON todas las peliculas a través de la promesa
    .then((response) => {
      return response.json();
    })
    .then((json) => {
      return json.customer_id;
    })
    .catch((error) => {
      console.error(error);
    });
}

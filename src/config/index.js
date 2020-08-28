const URL_BACKEND_TOP = window.location.hostname.includes('localhost')
  ? 'http://localhost:8080'
  : 'https://robsonflix.herokuapp.com'; // https://robflix.netlify.app/

export default {
  URL_BACKEND_TOP,
};

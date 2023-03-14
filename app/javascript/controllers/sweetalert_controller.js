import { Controller } from "@hotwired/stimulus"
import swal from 'sweetalert';


// Connects to data-controller="sweetalert"
export default class extends Controller {
  connect() {
    const initSweetalert = (selector, options = {}, callback = () => {}) => {
      const swalButton = document.querySelector(selector);
      if (swalButton) { // protect other pages
        swalButton.addEventListener('click', () => {
          swal(options).then(callback); // <-- add the `.then(callback)`
        });
      }
    };

    initSweetalert('#sweet-alert-demo', {
      title: "Ready for a call?",
      text: "Great, let's go!",
      closeButton: true,

      // icon: "success"
    }, (value) => {
      console.log(value);
    });
  }
}

import { getData, sendData } from './api.js';
import { showAlert } from './util.js';
import { renderGallery } from './render-gallery.js';
import { renderForm, setOnFormSubmit, hideModal } from './form.js';
import { showSuccessMessage, showErrorMessage } from './message.js';
import { showFilters } from './filters.js';


setOnFormSubmit(async (data) => {
  try {
    await sendData(data);
    hideModal();
    showSuccessMessage();
  } catch (error) {
    showErrorMessage();
  }
});

try {
  const data = await getData();
  renderGallery(data);
  showFilters(data);
} catch (err) {
  showAlert(err.message);
}

renderForm();


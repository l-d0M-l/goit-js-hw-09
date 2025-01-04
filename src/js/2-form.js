const form = document.querySelector('.feedback-form-js');

let formData = {
  email: '',
  message: '',
};

function fillFields() {
  try {
    const formDataFromStorage = JSON.parse(
      localStorage.getItem('feedback-form-state')
    );

    if (formDataFromStorage === null) {
      return;
    }

    formData = formDataFromStorage;

    for (const key in formData) {
      form.elements[key].value = formDataFromStorage[key];
    }
  } catch (error) {
    console.log(error);
  }
}

fillFields();

form.addEventListener('input', inputHandler);
function inputHandler(event) {
  formData[event.target.name] = event.target.value;
  localStorage.setItem('feedback-form-state', JSON.stringify(formData));
}

form.addEventListener('submit', submitHandler);
function submitHandler(event) {
  event.preventDefault();

  if (formData.email.length < 1 || formData.message.length < 1) {
    console.log('Fill out both fields!');
  } else {
    console.log(JSON.parse(localStorage.getItem('feedback-form-state')));
    event.currentTarget.reset();
    localStorage.removeItem('feedback-form-state');
  }
}

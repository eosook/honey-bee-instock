import axios from "axios";

const baseUrl = import.meta.env.VITE_API_URL;

//event handling
export const handleChangeInput = (event) => {
  const { name, value } = event.target;
  setValues({
    ...values,
    [name]: value,
  });
};

export const sendAddFormData = async (warehouseObj) => {
  try {
    const sendResponse = await axios.post(`${baseUrl}/`, warehouseObj);
    return sendResponse;
  } catch (error) {
    console.error(error);
  }
};

export const handleAddFormSubmit = (event) => {
  event.preventDefault();
  const formData = { ...values };

  if (isFormValid()) {
    sendAddFormData(formData);
    alert("warehouse added");
  } else {
    alert("unable to add warehouse");
  }
};

//validation functions
export const isPhoneValid = () => {
  if (
    values.contact_phone &&
    !values.contact_phone.match(
      /^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/
    )
  ) {
    return false;
  }
  return true;
};

export const isEmailValid = () => {
  if (
    values.contact_email &&
    !values.contact_email.match(
      /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/
    )
  ) {
    return false;
  }
  return true;
};

export const isFormValid = () => {
  if (
    !values.warehouse_name ||
    !values.address ||
    !values.city ||
    !values.country ||
    !values.contact_name ||
    !values.contact_position ||
    !values.contact_phone ||
    !values.contact_email
  ) {
    return false;
  }
  if (!isPhoneValid() || !isEmailValid()) {
    return false;
  }

  return true;
};

import axios from "axios";
import swal from "sweetalert";

function ContactFormSubmit(msgdata, setSubmitbtn, setCredentials) {
  let baseUrl = "https://api.yatrieducation.edu.np";
  setSubmitbtn("Submitting...");
  let form_data = new FormData();
  form_data.append("name", msgdata.name);
  form_data.append("email", msgdata.email);
  form_data.append("phone", msgdata.phone);
  form_data.append("message", msgdata.message);
  let url = `${baseUrl}/api/contact-form-submit/`;
  axios
    .post(url, form_data, {
      headers: {
        "content-type": "multipart/form-data",
      },
      mode: "no-cors",
    })
    .then(() => {
      setSubmitbtn("Sucessfully Submitted");
      setTimeout(() => {
        setSubmitbtn("Contact Now");
      }, 2000);
      swal(
        `Thank You, ${msgdata.name}`,
        "We will reach out to you soon.",
        "success"
      );
      setCredentials({
        name: "",
        phone: "",
        email: "",
        message: "",
      });
    })
    .catch((errr) => {
      console.log(errr);
      setSubmitbtn("Contact Now");
      swal("Message Failed", "Cannot send your message", "error");
    });
}

export default ContactFormSubmit;

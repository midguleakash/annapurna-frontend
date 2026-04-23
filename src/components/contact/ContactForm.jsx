import "./Contact.css";
import { useTranslation } from "react-i18next";
import i18n from "i18next";

function ContactForm() {
  
  const { t } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    localStorage.setItem("lang", lng);
  };
  
    return (
        <div className="form-card">


            <form>

                <h2>Send us a Message</h2>

                <div className="row">
                    <div class="mb-3">
                        <label for="exampleInputEmail1" class="form-label">First Name</label>
                        <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter first Name" />

                    </div>
                    <div class="mb-3">
                        <label for="exampleInputEmail1" class="form-label">Last Name</label>
                        <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Last Name" />

                    </div>

                </div>

                <div class="mb-3 mt-3">
                    <label for="exampleInputEmail1" class="form-label">Email</label>
                    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="email" />

                </div>

                <div class="mb-3 mt-4">
                    <label for="exampleInputEmail1" class="form-label">Phone Number</label>
                    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="phone number" />

                </div>

                <div class="mb-3 mt-4">
                    <label for="exampleInputEmail1" class="form-label">Subject</label>
                    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="How can help you" />

                </div>

                <div class="mb-3 mt-4">
                    <label for="exampleInputEmail1" class="form-label">Message</label>
                    <textarea
                        class="form-control"
                        rows="4"
                        placeholder="Tell more about your problem"
                    ></textarea>

                </div>


                <button type="submit" class="btn btn-primary">Submit</button>
            </form>


        </div>
    );
}

export default ContactForm;

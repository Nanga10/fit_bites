const content = document.getElementById("content");
const form = document.createElement("div");

const renderForm = () => {
  form.innerHTML = `
  <form>
  <label for="fname">First Name</label>
  <input
    type="text"
    id="fname"
    name="firstname"
    placeholder="Your name.."
  />

  <label for="lname">Last Name</label>
  <input
    type="text"
    id="lname"
    name="lastname"
    placeholder="Your last name.."
  />

  <label for="country">Special Occasion</label>
  <select id="country" name="country">
    <option value="birthday">Birthday</option>
    <option value="anniversary">Anniversary</option>
    <option value="other">Other</option>
    <option value="other">None</option>
  </select>

  <label for="subject">Subject</label>
  <textarea
    id="subject"
    name="subject"
    placeholder="Please let us know more about your special occassion...."
    style="height: 200px"
  ></textarea>

  <input type="submit" value="Submit" />
</form>`;
  form.setAttribute("id", "form");
  content.appendChild(form);
  console.log("Hi");
};

export { renderForm };

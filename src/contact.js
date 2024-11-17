// contact.js
export default function loadContact() {
    const contactDiv = document.createElement('div');
    const heading = document.createElement("h1");
    const contactFormDiv = document.createElement("div");

    contactDiv.classList.add("contact-div");
    contactFormDiv.classList.add("contact-form-div");
    heading.classList.add("contact-heading");

    heading.textContent = "Contact us";
    contactFormDiv.innerHTML = `<div class="contact-form-divs">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>map-marker</title><path d="M12,11.5A2.5,2.5 0 0,1 9.5,9A2.5,2.5 0 0,1 12,6.5A2.5,2.5 0 0,1 14.5,9A2.5,2.5 0 0,1 12,11.5M12,2A7,7 0 0,0 5,9C5,14.25 12,22 12,22C12,22 19,14.25 19,9A7,7 0 0,0 12,2Z" /></svg>
            <p>1024 Oakwood Ave<br>
            San Diego, CA 22434</p>
        </div>
        <div class="contact-form-divs">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>clock-check</title><path d="M23.5 17L18.5 22L15 18.5L16.5 17L18.5 19L22 15.5L23.5 17M13 19C13 17.5 13.5 16.2 14.4 15.1L11 13V7H12.5V12.2L15.6 14.1C16.6 13.4 17.7 13 19 13C20 13 21 13.3 21.8 13.7C21.9 13.1 22 12.6 22 12C22 6.5 17.5 2 12 2S2 6.5 2 12 6.5 22 12 22C12.6 22 13.2 21.9 13.7 21.8C13.3 21 13 20 13 19Z" /></svg>
            <p>Mon-Thurs:8am-8pm<br>
                Fri-Sun:8am-11pm</p>
        </div>
        <div class="contact-form-divs">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>phone</title><path d="M6.62,10.79C8.06,13.62 10.38,15.94 13.21,17.38L15.41,15.18C15.69,14.9 16.08,14.82 16.43,14.93C17.55,15.3 18.75,15.5 20,15.5A1,1 0 0,1 21,16.5V20A1,1 0 0,1 20,21A17,17 0 0,1 3,4A1,1 0 0,1 4,3H7.5A1,1 0 0,1 8.5,4C8.5,5.25 8.7,6.45 9.07,7.57C9.18,7.92 9.1,8.31 8.82,8.59L6.62,10.79Z" /></svg>
            <p>(222)-888 5555</p>
        </div>
        <div class="contact-form-divs">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>message-check</title><path d="M20 2H4C2.9 2 2 2.9 2 4V22L6 18H20C21.11 18 22 17.11 22 16V4C22 2.89 21.1 2 20 2M10.47 14L7 10.5L8.4 9.09L10.47 11.17L15.6 6L17 7.41L10.47 14Z" /></svg>
            <h2>Message Us!</h2>
        </div>
        <form>
            <input type="text" name="full-name" id="full-name" placeholder="Full Name" required>
            <input type="email" name="email-address" id="email-address" placeholder="Email" required>
            <textarea name="message" id="message" placeholder="Type your message..." required></textarea>
            <button type="button">Send</button>
        </form>`;

    contactDiv.appendChild(heading);
    contactDiv.appendChild(contactFormDiv);

    return contactDiv;
  }
import React from "react";
import "./newContact.css";

export function NewContact() {
  const openEmailClient = (email) => {
    window.location.href = `mailto:${email}`;
  };
  const openPhoneClient = (phone) => {
    window.location.href = `tel:${phone}`;
  };

  return (
    <div className="contact-container">
      <h2 className="contact-title">Kontakt na pojišťovnu</h2>
      <div className="contact-box">
        <p className="contact-paragraph">
          <span className="fl fontLabel">Jana Nováková</span>
          <i
            className="iconBox square-box fa fa-phone-square box-phone-contact"
            onClick={() => openPhoneClient("774887999")}
          ></i>
          <span
            className="phone-nummer-contact"
            onClick={() => openPhoneClient("774887999")}
          >
            +420 774 887 999
          </span>
          <i
            className="iconBox square-box fa fa-envelope box-email-contact"
            onClick={() => openEmailClient("jananovakova@reactpojistovna.cz")}
          ></i>
          <span
            className="email-contact"
            onClick={() => openEmailClient("jananovakova@reactpojistovna.cz")}
          >
            jananovakova@reactpojistovna.cz
          </span>
        </p>
      </div>
      <div className="contact-box">
        <p className="contact-paragraph">
          <span className="fl fontLabel">Buka Zázračná</span>
          <i
            className="iconBox square-box fa fa-phone-square box-phone-contact"
            onClick={() => openPhoneClient("774887998")}
          ></i>
          <span
            className="phone-nummer-contact"
            onClick={() => openPhoneClient("774887998")}
          >
            +420 774 887 998
          </span>
          <i
            className="iconBox square-box fa fa-envelope box-email-contact"
            onClick={() => openEmailClient("bukazazracna@reactpojistovna.cz")}
          ></i>
          <span
            className="email-contact"
            onClick={() => openEmailClient("bukazazracna@reactpojistovna.cz")}
          >
            bukazazracna@reactpojistovna.cz
          </span>
        </p>
      </div>
      <div className="contact-box">
        <p className="contact-paragraph">
          <span className="fl fontLabel">Falka Věčná</span>
          <i
            className="iconBox square-box fa fa-phone-square box-phone-contact"
            onClick={() => openPhoneClient("774887997")}
          ></i>
          <span
            className="phone-nummer-contact"
            onClick={() => openPhoneClient("774887997")}
          >
            +420 774 887 997
          </span>
          <i
            className="iconBox square-box fa fa-envelope box-email-contact"
            onClick={() => openEmailClient("falkavecna@reactpojistovna.cz")}
          ></i>
          <span
            className="email-contact"
            onClick={() => openEmailClient("falkavecna@reactpojistovna.cz")}
          >
            falkavecna@reactpojistovna.cz
          </span>
        </p>
      </div>
      <div className="contact-box">
        <p className="contact-paragraph">
          <span className="fl fontLabel">Petra Konečná</span>
          <i
            className="iconBox square-box fa fa-phone-square box-phone-contact"
            onClick={() => openPhoneClient("774887996")}
          ></i>
          <span
            className="phone-nummer-contact"
            onClick={() => openPhoneClient("774887996")}
          >
            +420 774 887 996
          </span>
          <i
            className="iconBox square-box fa fa-envelope box-email-contact"
            onClick={() => openEmailClient("petrakonecna@reactpojistovna.cz")}
          ></i>
          <span
            className="email-contact"
            onClick={() => openEmailClient("petrakonecna@reactpojistovna.cz")}
          >
            petrakonecna@reactpojistovna.cz
          </span>
        </p>
      </div>
      <div className="contact-box">
        <p className="contact-paragraph">
          <span className="fl fontLabel">Jiřina Peřinová</span>
          <i
            className="iconBox square-box fa fa-phone-square box-phone-contact"
            onClick={() => openPhoneClient("774887996")}
          ></i>
          <span
            className="phone-nummer-contact"
            onClick={() => openPhoneClient("774887996")}
          >
            +420 774 887 996
          </span>
          <i
            className="iconBox square-box fa fa-envelope box-email-contact"
            onClick={() => openEmailClient("jirinaperinova@reactpojistovna.cz")}
          ></i>
          <span
            className="email-contact"
            onClick={() => openEmailClient("jirinaperinova@reactpojistovna.cz")}
          >
            jirinaperinova@reactpojistovna.cz
          </span>
        </p>
      </div>
    </div>
  );
}

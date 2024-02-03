import ContactUs from "../components/Home/ContactUs/ContactUs";

const ContactUsPage = () => {
  return (
    <div
      style={{
        backgroundImage:
          "linear-gradient(180deg, rgba(246, 95, 25, 0.10) 0%, rgba(246, 95, 25, 0.01) 100%)",
      }}
      className="contact-us-page pt-6 lg:pt-7"
    >
      <ContactUs />
    </div>
  );
};

export default ContactUsPage;

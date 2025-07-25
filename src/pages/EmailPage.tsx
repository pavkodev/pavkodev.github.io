import HeaderComponent from "../components/HeaderComponent";
import PageSection from "../components/PageSection";
import PageStyling from "../components/PageStyling";

const EmailPage = () => {
  return (
    <PageStyling>
      <HeaderComponent />
      <PageSection>
        <form
          action="https://formsubmit.co/c7bdcf0ca4e623be4deb248dbaa6c530"
          method="POST"
          className="grid grid-cols-2"
        >
          <p className="col-span-2 m-2 p-2">
            Emailing:{" "}
            {
              "\u0070\u0061\u0076\u0065\u006c\u002e\u006b\u006f\u0074\u006b\u0061\u0040\u0067\u006d\u0061\u0069\u006c\u002e\u0063\u006f\u006d"
            }
          </p>
          <input
            type="text"
            name="sender-name"
            placeholder="Your Name"
            className="m-2 border-2 p-2"
            required
          />
          <input
            type="email"
            name="sender-email"
            placeholder="Your email"
            className="m-2 border-2 p-2"
            required
          />
          <textarea
            name="sender-message"
            placeholder="Your message!"
            className="col-span-2 m-2 h-[60%] border-2"
            required
          ></textarea>
          <button type="submit" className="col-span-2 m-2 border-2 p-2">
            Send message
          </button>
        </form>
      </PageSection>
    </PageStyling>
  );
};
export default EmailPage;

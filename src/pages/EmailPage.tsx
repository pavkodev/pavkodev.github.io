import HeaderComponent from "../components/HeaderComponent";
import PageSection from "../components/PageSection";
import PageStyling from "../components/PageStyling";

const EmailPage = () => {
  return (
    <PageStyling>
      <HeaderComponent />
      <PageSection>
        <form action="" method="post" className="grid grid-cols-2">
          <input
            type="text"
            name=""
            id=""
            placeholder="Your Name"
            className="m-2 border-2 p-2"
            required
          />
          <input
            type="email"
            name=""
            id=""
            placeholder="Your email"
            className="m-2 border-2 p-2"
            required
          />
          <textarea
            name=""
            id=""
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

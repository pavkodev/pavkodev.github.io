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
          className="flex flex-col"
        >
          <p className="px-2 text-2xl font-bold">Email Submission</p>
          <label htmlFor="sender-name" className="mt-2 px-2 text-lg">
            Name
          </label>
          <input
            type="text"
            id="sender-name"
            name="sender-name"
            placeholder="What should I call you?"
            className="peer m-2 rounded-md border-1 p-2 transition-all outline-none valid:border-green-500 user-invalid:border-red-500 focus:invalid:border-amber-500"
            required
          />
          <label htmlFor="sender-email" className="mt-2 px-2 text-lg">
            Email
          </label>
          <input
            type="email"
            id="sender-email"
            name="sender-email"
            placeholder="Best email to reach you?"
            className="peer m-2 rounded-md border-1 p-2 transition-all outline-none valid:border-green-500 user-invalid:border-red-500 not-placeholder-shown:user-invalid:text-red-500 focus:invalid:border-amber-500 focus:invalid:text-white"
            required
          />
          <label htmlFor="sender-message" className="mt-2 px-2 text-lg">
            Message
          </label>
          <textarea
            id="sender-message"
            name="sender-message"
            placeholder="Get in touch!"
            className="peer m-2 h-[60%] rounded-md border-1 p-2 transition-all outline-none valid:border-green-500 user-invalid:border-red-500 focus:invalid:border-amber-500"
            required
          ></textarea>
          <button
            type="submit"
            className="peer-valid m-2 w-fit cursor-pointer self-end rounded-xl border-2 p-2 px-4 font-bold transition-transform hover:-translate-y-0.5 active:translate-y-1"
          >
            Send message
          </button>
        </form>
      </PageSection>
    </PageStyling>
  );
};
export default EmailPage;

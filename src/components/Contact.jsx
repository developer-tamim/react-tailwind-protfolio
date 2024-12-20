const Contact = () => {
  return (
    <div className="flex flex-col items-center gap-y-5 mt-20">
      <h1 className="text-2xl uppercase font-semibold">Contact</h1>
      <form
        action=""
        method=""
        className="flex flex-col gap-y-5 text-sm w-[500px] md:w-[400px] sm:w-[270px]"
      >
        <input
          type="text"
          name="name"
          placeholder="Name"
          className="outline-none border border-gray-400 p-2 rounded w-full"
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          className="outline-none border border-gray-400 p-2 rounded w-full"
        />
        <textarea
          placeholder="Message"
          name="message"
          className="outline-none border border-gray-400 p-2 min-w-full min-h-[100px] max-h-[150px]"
        ></textarea>
        <input
          type="submit"
          value="Send Message"
          className="outline-none border border-gray-400 p-2 w-full bg-slate-400 text-white cursor-pointer"
        />
      </form>
      <p className="text-lg m-7 tracking-wider font-light">
        Copyright Nick Smith <span>{new Date().getFullYear()}</span>
      </p>
    </div>
  );
};

export default Contact;

import React from "react";

const Contact: React.FC = () => {
  document.title = "Contact Me";
  const inputStyle = "rounded-lg text-center p-2 focus:outline-none border focus:border-red-500";

  return (
    <div className="flex flex-col justify-center items-center mt-40">
      <h1 className="font-serif text-3xl bg-white select-none text-black my-2 w-max ">CONTACT ME</h1>
      <div className="w-[30rem] bg-black grid grid-cols-2 gap-2 p-4 rounded-md border">
        <input placeholder="Your Name" className={inputStyle} type="text" />
        <input placeholder="Your Email" className={inputStyle} type="text" />
        <input placeholder="Title" className={inputStyle + " col-span-2"} type="text" />
        <input placeholder="Message" className={inputStyle + " col-span-2"} type="text" />
        <button className="rounded-lg text-center p-2 bg-red-500 text-white col-span-2">Send</button>
      </div>
    </div>
  );
}

export default Contact;

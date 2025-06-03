import React, { useRef, useState } from "react";
import { addDoc, collection } from "firebase/firestore";
import firebaseServices from "../firebase/firebaseServices";
import { MdBackHand } from "react-icons/md";

const firestore = firebaseServices.getFirestoreInstance();

const Contact: React.FC = () => {
  const NameRef = useRef<HTMLInputElement>(null);
  const EmailRef = useRef<HTMLInputElement>(null);
  const TitleRef = useRef<HTMLInputElement>(null);
  const MessageRef = useRef<HTMLTextAreaElement>(null);

  const [fieldErrors, setFieldErrors] = useState<{ [key: string]: string }>({});

  function validateFields() {
    const errors: { [key: string]: string } = {};

    const name = NameRef.current?.value || "";
    const email = EmailRef.current?.value || "";
    const title = TitleRef.current?.value || "";
    const message = MessageRef.current?.value || "";

    if (name.trim().length < 2)
      errors.name = "Name must be at least 2 characters";

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) errors.email = "Please enter a valid email";

    if (title.trim().length < 5)
      errors.title = "Title must be at least 5 characters";
    if (message.trim().length < 10)
      errors.message = "Message must be at least 10 characters";

    setFieldErrors(errors);
    return Object.keys(errors).length === 0;
  }

  const Submit = () => {
    if (!validateFields()) {
      return;
    }

    const Name = NameRef.current!.value;
    const Email = EmailRef.current!.value;
    const Title = TitleRef.current!.value;
    const Message = MessageRef.current!.value;
    const contactRef = collection(firestore, "contact");

    return addDoc(contactRef, {
      Name,
      Email,
      Title,
      Message,
      date: new Date().toISOString(),
    })
      .then(() => {
        NameRef.current!.value = "";
        EmailRef.current!.value = "";
        TitleRef.current!.value = "";
        MessageRef.current!.value = "";
        setFieldErrors({});
      })
      .catch(() => {});
  };

  document.title = "Contact Me";

  const inputBase =
    "rounded-lg p-3 bg-gray-700 text-white placeholder-gray-400 focus:outline-none border transition-colors duration-300 ease-in-out";

  return (
    <div className="flex flex-col justify-center items-center mt-32 px-4">
      <h1 className="font-serif text-4xl select-none text-gray-300 mb-8 tracking-wide drop-shadow-md">
        CONTACT ME
      </h1>

      <div className="w-full max-w-3xl bg-black bg-opacity-90 rounded-xl p-8 shadow-lg border border-white grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="flex flex-col">
          <input
            placeholder="Your Name"
            className={`${inputBase} shadow-sm bg-transparent`}
            type="text"
            ref={NameRef}
          />
          {fieldErrors.name && (
            <p className="text-red-500 text-sm mt-1">{fieldErrors.name}</p>
          )}
        </div>

        <div className="flex flex-col">
          <input
            placeholder="Your Email"
            className={`${inputBase} shadow-sm bg-transparent`}
            type="email"
            ref={EmailRef}
          />
          {fieldErrors.email && (
            <p className="text-red-500 text-sm mt-1">{fieldErrors.email}</p>
          )}
        </div>

        <div className="flex flex-col md:col-span-2">
          <input
            placeholder="Title"
            className={`${inputBase} md:col-span-2 shadow-sm bg-transparent`}
            ref={TitleRef}
          />
          {fieldErrors.title && (
            <p className="text-red-500 text-sm mt-1">{fieldErrors.title}</p>
          )}
        </div>

        <div className="flex flex-col md:col-span-2">
          <textarea
            placeholder="Your Message"
            className={`${inputBase} md:col-span-2 resize-none h-48 shadow-sm bg-transparent`}
            ref={MessageRef}
          />
          {fieldErrors.message && (
            <p className="text-red-500 text-sm mt-1">{fieldErrors.message}</p>
          )}
        </div>

        <button
          onClick={Submit}
          className="md:col-span-2 bg-white hover:bg-green-500 transition-colors duration-300 rounded-lg text-black font-semibold p-3 shadow-md hover:shadow-[0_0_20px_4px_#22c55e] focus:ring-4 focus:ring-green-400"
        >
          Send Message
        </button>
      </div>

      <div>
        <a
          href="http://localhost:3000/"
          rel="noopener noreferrer"
          aria-label="Go back"
        >
          <MdBackHand className="mt-10 text-gray-300 hover:text-red-500 transition-colors duration-300 text-3xl cursor-pointer" />
        </a>
      </div>
    </div>
  );
};

export default Contact;

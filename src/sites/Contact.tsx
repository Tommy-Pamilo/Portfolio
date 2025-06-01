import React, { useRef } from "react";
import { addDoc, collection } from "firebase/firestore";
import firebaseServices from "../firebase/firebaseServices";
import { MdBackHand } from "react-icons/md";

const firestore = firebaseServices.getFirestoreInstance();
const Contact: React.FC = () => {
  const NameRef = useRef<HTMLInputElement>(null);
  const EmailRef = useRef<HTMLInputElement>(null);
  const TitleRef = useRef<HTMLInputElement>(null);
  const MessageRef = useRef<HTMLTextAreaElement>(null);

  const Submit = () => {
    const Name = NameRef.current?.value;
    const Email = EmailRef.current?.value;
    const Title = TitleRef.current?.value;
    const Message = MessageRef.current?.value;
    const contactRef = collection(firestore, "contact");

    if (!Name || !Email || !Title || !Message) {
      alert("Please fill all the fields");
      return;
    }

    if (!validateEmail(Email)) {
      alert("Please enter a valid email");
      return;
    }

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
        <input
          placeholder="Your Name"
          className={`${inputBase} focus:border-green-400`}
          type="text"
          ref={NameRef}
        />
        <input
          placeholder="Your Email"
          className={`${inputBase} focus:border-blue-400`}
          type="email"
          ref={EmailRef}
        />
        <input
          placeholder="Title"
          className={`${inputBase} md:col-span-2 focus:border-orange-500`}
          ref={TitleRef}
        />
        <textarea
          placeholder="Your Message"
          className={`${inputBase} md:col-span-2 resize-none h-48 focus:border-pink-500`}
          ref={MessageRef}
        ></textarea>

        <button
          onClick={Submit}
          className="md:col-span-2 bg-blue-500 hover:bg-green-500 transition-colors duration-300 rounded-lg text-black font-semibold p-3 shadow-md hover:shadow-[0_0_20px_4px_#22c55e] focus:ring-4 focus:ring-green-400"
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

function validateEmail(email: string) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
}

export default Contact;

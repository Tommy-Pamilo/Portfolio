import React, { useRef } from "react";
import { addDoc, collection, } from "firebase/firestore";
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
    };

    if (!validateEmail(Email)) {
      alert("Please enter a valid email");
      return;
    };


    return addDoc(contactRef, {
      Name,
      Email,
      Title,
      Message,
      date: new Date().toISOString()
    }).then(() => {
      alert("Message sent");
      NameRef.current!.value = "";
      EmailRef.current!.value = "";
      TitleRef.current!.value = "";
      MessageRef.current!.value = "";
    }).catch(() => {
      alert("Something went wrong please try again or contact me on my social media");
    });
  };

  document.title = "Contact Me";
  const inputStyle = "rounded-lg text-center bg-gray-500 text-black placeholder:text-black p-2 focus:outline-none border ";
  return (
    <div className="flex flex-col justify-center items-center mt-40">
      <h1 className="font-serif text-3xl  select-none text-gray-400 my-2 w-max ">CONTACT ME</h1>
      <div className="w-[30rem] bg-black grid grid-cols-2 gap-2 p-4 rounded-md border">
        <input placeholder="Your Name " className={inputStyle + " focus:border-green-400"} type="text" ref={NameRef} />
        <input placeholder="Your Email" className={inputStyle + " focus:border-blue-400"} type="text" ref={EmailRef} />
        <input placeholder="Title" className={inputStyle + " col-span-2 focus:border-orange-500"} ref={TitleRef} />
        <textarea placeholder="Text" className=" placeholder:text-black bg-gray-500 w-[27.9rem] h-[18rem] focus:outline-none border focus:border-pink-500 rounded-lg" ref={MessageRef}></textarea>

        <button onClick={Submit} className="rounded-lg text-center p-2 bg-blue-300 text-black col-span-2 hover:bg-green-500 hover:shadow-[0_0_20px_2px_#0000FF] ">Send Message</button>

      </div>

      <div>
        <a href="http://localhost:3000/" target="blank">
          <MdBackHand className="hover:text-red-500 text-zinc-200 text-2xl mt-9" />
        </a>
      </div>
    </div>
  );
}

function validateEmail(email: string) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
}

export default Contact;



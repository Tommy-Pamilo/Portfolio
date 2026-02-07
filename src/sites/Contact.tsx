import React, { useRef, useState } from "react";
import { addDoc, collection } from "firebase/firestore";
import firebaseServices from "../firebase/firebaseServices";
import { MdClose } from "react-icons/md";

const firestore = firebaseServices.getFirestoreInstance();


interface ContactProps {
  onClose?: () => void;
}

const Contact: React.FC<ContactProps> = ({ onClose }) => {
  const NameRef = useRef<HTMLInputElement>(null);
  const EmailRef = useRef<HTMLInputElement>(null);
  const TitleRef = useRef<HTMLInputElement>(null);
  const MessageRef = useRef<HTMLTextAreaElement>(null);

  const [fieldErrors, setFieldErrors] = useState<{ [key: string]: string }>({});
  const [isSending, setIsSending] = useState(false);

  function validateFields() {
    const errors: { [key: string]: string } = {};
    const name = NameRef.current?.value || "";
    const email = EmailRef.current?.value || "";
    const title = TitleRef.current?.value || "";
    const message = MessageRef.current?.value || "";

    if (name.trim().length < 2) errors.name = "Name must be at least 2 characters";
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) errors.email = "Please enter a valid email";
    if (title.trim().length < 5) errors.title = "Title must be at least 5 characters";
    if (message.trim().length < 10) errors.message = "Message must be at least 10 characters";

    setFieldErrors(errors);
    return Object.keys(errors).length === 0;
  }

  const Submit = async () => {
    if (!validateFields()) return;

    setIsSending(true);
    const contactRef = collection(firestore, "contact");

    try {
      await addDoc(contactRef, {
        Name: NameRef.current!.value,
        Email: EmailRef.current!.value,
        Title: TitleRef.current!.value,
        Message: MessageRef.current!.value,
        date: new Date().toISOString(),
      });
      
      
      if (NameRef.current) NameRef.current.value = "";
      if (EmailRef.current) EmailRef.current.value = "";
      if (TitleRef.current) TitleRef.current.value = "";
      if (MessageRef.current) MessageRef.current.value = "";
      
      
      if (onClose) onClose();
      
    } catch (err) {
      console.error(err);
    } finally {
      setIsSending(false);
    }
  };

  const inputBase = "rounded-lg p-3 bg-zinc-800 text-white placeholder-zinc-500 focus:outline-none border border-zinc-700 focus:border-red-500 transition-all";

  return (
    <div className="relative w-full max-w-2xl bg-black border border-zinc-800 rounded-2xl p-8 shadow-2xl">
     
      {onClose && (
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 text-zinc-500 hover:text-white transition-colors"
        >
          <MdClose size={28} />
        </button>
      )}

      <h1 className="text-2xl font-bold text-white mb-8 tracking-tighter uppercase italic">
        Contact Me
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="flex flex-col">
          <input placeholder="Your Name" className={inputBase} type="text" ref={NameRef} />
          {fieldErrors.name && <p className="text-red-500 text-[10px] mt-1 uppercase font-bold">{fieldErrors.name}</p>}
        </div>

        <div className="flex flex-col">
          
          <input placeholder="Your Email" className={inputBase} type="email" ref={EmailRef} />
          {fieldErrors.email && <p className="text-red-500 text-[10px] mt-1 uppercase font-bold">{fieldErrors.email}</p>}
        </div>

        <div className="flex flex-col md:col-span-2">
          <input placeholder="Subject Title" className={inputBase} ref={TitleRef} />
          {fieldErrors.title && <p className="text-red-500 text-[10px] mt-1 uppercase font-bold">{fieldErrors.title}</p>}
        </div>

        <div className="flex flex-col md:col-span-2">
          <textarea placeholder="Your Message" className={`${inputBase} resize-none h-32`} ref={MessageRef} />
          {fieldErrors.message && <p className="text-red-500 text-[10px] mt-1 uppercase font-bold">{fieldErrors.message}</p>}
        </div>

        <button
          onClick={Submit}
          disabled={isSending}
          className="md:col-span-2 bg-white hover:bg-red-600 hover:text-white transition-all duration-300 rounded-lg text-black font-bold p-3 uppercase tracking-widest disabled:opacity-50"
        >
          {isSending ? "Sending..." : "Send Message"}
        </button>
      </div>
    </div>
  );
};

export default Contact;
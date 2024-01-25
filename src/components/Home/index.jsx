import React, { useEffect, useState } from "react";
import NoteApp from "./NoteApp";
import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  onSnapshot,
  query,
  updateDoc,
} from "firebase/firestore";
import { db } from "../../firebase";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import { FaPlus } from "react-icons/fa";
import Navbar from "../Navbar";
import autoprefixer from "autoprefixer";

const Home = () => {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");
  const [title, setTitle] = useState("");
  const [bookInput, setBookinput] = useState("");

  // Create note // Oldin shart berib todos ni ichida nimalar bo'lishini yozamiz
  // Create note

  const createNote = async (e) => {
    const newData = new Date();
    const getMonth =
      newData.getMonth() + 1 < 10
        ? "0" + newData.getMonth() + 1
        : newData.getMonth() + 1;
    const getDay =
      newData.getDate() < 10 ? "0" + newData.getDate() : newData.getDate();
    const getYear = newData.getFullYear();
    const getHours =
      newData.getHours() < 10 ? "0" + newData.getHours() : newData.getHours();
    const getMinutes =
      newData.getMinutes() < 10
        ? "0" + newData.getMinutes()
        : newData.getMinutes();

    console.log(newData);
    e.preventDefault(e);
    if (input === "") {
      alert("Please enter a valid todo");
      return;
    }
    await addDoc(collection(db, "notes"), {
      title: title,
      text: input,
      book:bookInput,
      complated: false,
      getDay: getDay,
      getMonth: getMonth,
      getYear: getYear,
      getHours: getHours,
      getMinutes: getMinutes,
      italic: false,
      lineThrough: false,
      wavy: false,
    });
    setInput("");
    setTitle("");
  };

  // Read note // Ekranga chiqaramiz
  // Read note

  useEffect(() => {
    const q = query(collection(db, "notes"));
    const unsubscribe = onSnapshot(q, (QuerySnapshot) => {
      let notesArr = [];
      QuerySnapshot.forEach((doc) => {
        notesArr.push({ ...doc.data(), id: doc.id });
      });
      setTodos(notesArr);
    });
    return () => unsubscribe();
  }, []);

  // Update // Bunda belgilash rangini ozgartirish uchun boolen qiymat beramiz
  // Update

  const toggleComplated = async (todo) => {
    await updateDoc(doc(db, "notes", todo.id), {
      complated: !todo.complated,
    });
  };

  // delete note // O'chirish
  // delete note

  const deleteNote = async (id) => {
    await deleteDoc(doc(db, "notes", id));
  };

  // change text styles
  // change text styles

  const italic = async (todo) => {
    await updateDoc(doc(db, "notes", todo.id), {
      italic: !todo.italic,
    });
  };
  const through = async (todo) => {
    await updateDoc(doc(db, "notes", todo.id), {
      through: !todo.through,
    });
  };
  const wavy = async (todo) => {
    await updateDoc(doc(db, "notes", todo.id), {
      wavy: !todo.wavy,
    });
  };

  // Modal // Qo'shish uchun oyna ochiladi
  // Modal

  const [open, setOpen] = React.useState(false);
  const handleClose = () => setOpen(false);
  const handleOpen = () => setOpen(true);
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    bgcolor: "background.paper",
    boxShadow: 24,
    borderRadius: "8px",
    p: 4,
  };

  return (
    <>
      <button
        className="text-lg mt-10 p-1 ml-4 rounded hover:bg-violet-100 duration-1000 hover:scale-105 text-violet-600 hover:text-violet-800 font-semibold border border-violet-600 flex items-center "
        onClick={handleOpen}
      >
        <FaPlus className="mr-1" size={18} />
        Add Note
      </button>

      <Modal
        aria-labelledby="responsive-dialog-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        className="w-full mx-auto"
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}
      >
        <Fade in={open}>
          <Box sx={style}>
            <form
              onSubmit={createNote}
              className="w-80 max-md:w-72 max-sm:w-64 max-xs:w-44"
            >
              <div className="mb-3">
                <input
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  placeholder="Title ..."
                  type="text"
                  className="border mb-4 w-full border-blue-600 py-1 px-4 outline-none rounded"
                />
              </div>
              
              <div>
                <textarea
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Note ..."
                  type="text"
                  className="border mb-4 border-blue-600 w-full py-1 px-4 outline-none rounded"
                />
              </div>

              <div className="mt-2 ">
                <button
                  onClick={() => setOpen(false)}
                  className="bg-blue-600 rounded text-white hover:scale-110 duration-1000 p-1"
                >
                  {" "}
                  + Add Note
                </button>
              </div>
            </form>
          </Box>
        </Fade>
      </Modal>

      <div className="grid grid-cols-4 mt-10 px-4  gap-x-5 max-xl:grid-cols-3  max-sm:grid-cols-1 max-md:grid-cols-2">
        {todos.map((todo, index) => (
          <ul key={index}>
            <NoteApp
              todo={todo}
              toggleComplated={toggleComplated}
              deleteNote={deleteNote}
              through={through}
              italic={italic}
              wavy={wavy}
            />
          </ul>
        ))}
      </div>
      {todos.length < 1 ? (
        <p className="w-full text-center pt-20">Sizda note mavjud emas</p>
      ) : (
        <p className="text-center pt-20">{`You have ${todos.length} todos`}</p>
      )}
    </>
  );
};

export default Home;

import React, { useEffect, useState } from 'react'
import View from '../View'
import { v4 as uuidv4 } from 'uuid';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  boxShadow: 24,
  borderRadius: '8px',
  p: 4,
};
 

const getDatafromLS = () => {
  const data = localStorage.getItem('books')
  if (data) {
    return JSON.parse(data)
  }
  else {
    return []
  }
}
const NoteList = () => {
  const [notes, setNotes] = useState(getDatafromLS());
  const [modal, setModal] = useState(false);
 
  const handleAddBookSubmit = (e) => {
    const uuid = uuidv4()
    e.preventDefault()
    let note = {
      title,
      author,
      uuid,
      modal,

    }
    setNotes([...notes, note])
    setAuthor('')

    setTitle('')
    setOpen(false)
  }
  const deleteNote = (uuid) => {
    const filteredNotes = notes.filter((element) => {
      return element.uuid !== uuid
    })
    setNotes(filteredNotes)
  }
  useEffect(() => {
    localStorage.setItem('notes', JSON.stringify(notes))
  }, [notes])



  const [title, setTitle] = useState('')
  const [author, setAuthor] = useState('')


  // Modal
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);


  return (
    <div className=''>
      <div>
        <button onClick={handleOpen} className='bg-blue-600 rounded-lg text-white font-semibold p-1 hover:scale-110 duration-1000 mt-8 ml-5'>Add Note +</button>
      </div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}
      >
        <Fade in={open}>
          <Box sx={style}>
            <form
              onSubmit={handleAddBookSubmit}
              autoComplete='off'>
              <div className='relative mb-10'>
                <label className='absolute -top-3 left-3 bg-white px-2'>Title</label>
                <input className='border w-11/12 border-blue-600 rounded-lg  py-2 px-2 focus:shadow-lg outline-none' type="text"
                  onChange={(e) => setTitle(e.target.value)}
                  value={title}

                />
              </div>
              <div className='relative mb-10'>
                <label className='absolute -top-3 left-3 bg-white px-2'>Author</label>
                <textarea className='border w-11/12 border-blue-600 rounded-lg  py-2 px-2 focus:shadow-lg outline-none' type="text"
                  onChange={(e) => setAuthor(e.target.value)}
                  value={author}
                />

              </div>

              <div>
                <button type='submit' className='bg-blue-600 p-1 rounded text-white'>Add Note</button>
              </div>
            </form>
          </Box>
        </Fade>
      </Modal>


      <div className='px-5 mt-5 '>
        {
          notes.length > 0 && <>
            <div className=''>
              <View notes={notes} deleteNote={deleteNote}/>
            </div>
          </>
        }
        {
          notes.length < 1 && <div>No notes are added yet</div>

        }
      </div>
    </div>
  )
}

export default NoteList

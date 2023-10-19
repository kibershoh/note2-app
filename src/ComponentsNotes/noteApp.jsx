import clsx from 'clsx'
import {FaRegTrashAlt} from 'react-icons/fa'
const NoteApp = ({todo, toggleComplated,deleteNote}) => {
  return (    
      <ul>
        <li>
             
            <div className={clsx('border pt-2 my-4 bg-slate-100 justify-between items-center px-3 border-blue-600 rounded', todo.complated ? 'bg-orange-500' : '')}>
                <div className='flex items-center pb-4 justify-between'>
               <div className='flex items-center'>
                 <input onChange={()=>toggleComplated(todo)} className='mr-2 w-[18px] h-[18px]' size={25} type="checkbox"  checked={todo.complated ? 'checked' : ''}/>
                <p className={todo.complated ? 'text-xl font-semibold text-white' : 'text-xl font-semibold'}>{todo.title}</p>
               </div>
               
             <button onClick={()=>deleteNote(todo.id)} className={todo.complated ? 'text-white' : ''}> {<FaRegTrashAlt size={18}/>}</button>
            </div>
             <p className={todo.complated ? 'text-semibold pr-4 pb-2 overflow-y-scroll h-20  text-md text-white' : 'text-semibold pr-4 pb-2  overflow-y-scroll h-20 text-md'}>{todo.text}</p>
             <div className='flex justify-end items-center pt-2'>
              <h1 className={todo.complated ? 'text-black mr-3' : 'text-slate-400 mr-3'}>{todo.getDay}/{todo.getMonth}/{todo.getYear},</h1>
             <h2 className={todo.complated ? 'text-black' : 'text-slate-400'}>{todo.getHours}:{todo.getMinutes}</h2>
             </div>
            </div>
            
        </li>
      </ul>
  )
}

export default NoteApp

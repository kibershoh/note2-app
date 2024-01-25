import clsx from 'clsx'
import {FaRegTrashAlt} from 'react-icons/fa'
import {MdOutlineFormatItalic} from 'react-icons/md'
import {RxStrikethrough} from 'react-icons/rx'
import {GrBold} from 'react-icons/gr'
const NoteApp = ({todo, toggleComplated,deleteNote,wavy,italic,through}) => {
  return (    
        <li className=''>             
            <div className={clsx('border pt-2 my-4 justify-between items-center px-1  rounded', todo.complated ? '  bg-violet-500' : 'bg-slate-50 border-violet-300')}>
                <div className='flex items-center pb-4 justify-between'>
                            
               <div className='flex items-center'>
                 <input onChange={()=>toggleComplated(todo)} className='mr-2 w-[19px] h-[19px] bg-orange-500 accent-violet-800 border border-violet-500	' size={25} type="checkbox"  checked={todo.complated ? 'checked' : ''}/>
                <p className={todo.complated ? 'text-xl font-semibold text-white max-lg:text-lg' : 'text-xl font-semibold max-lg:text-lg'}>{todo.title}</p>
               </div> 

                <button onClick={()=>deleteNote(todo.id)} className={todo.complated ? 'text-white' : ''}> {<FaRegTrashAlt size={16} className='hover:scale-125 duration-500'/>}</button>
                      
            </div>



             <p className={clsx(todo.complated ? 'text-semibold pr-4 pb-2 overflow-y-scroll overflow-x-scroll h-24  text-lg text-white max-lg:text-md' : 'text-semibold pr-4 max-lg:text-md pb-2  overflow-y-scroll h-24 text-md',
             todo.italic ? 'italic' : '',
             todo.through ? 'line-through' : '',
             todo.wavy ? 'font-bold' : '',
             
             )}>{todo.text}</p>
             <div className='grid pt-10 max-lg:pt-10 grid-cols-2 text-rigth'>
            <div>
              <button onClick={()=>italic(todo)} className={clsx('px-1 mx-1 rounded hover:scale-110 ',todo.italic ? 'bg-violet-800 text-white' : 'text-white bg-violet-500',)}><MdOutlineFormatItalic size={20}/></button>
              <button onClick={()=>through(todo)} className={clsx('px-1 mx-1 rounded hover:scale-110 ',todo.through ? 'bg-violet-800 text-white' : 'text-white bg-violet-500', )}><RxStrikethrough size={20}/></button>
              <button onClick={()=>wavy(todo)} className={clsx('px-1 mx-1 rounded hover:scale-110 ',todo.wavy ? 'bg-violet-800 text-white' : 'text-white bg-violet-500', )}><GrBold size={20}/></button>
            </div>
              <h1 className={todo.complated ? 'text-slate-200 mr-3 text-right' : 'text-slate-400 mr-3 text-right'}>{todo.getDay}/{todo.getMonth}/{todo.getYear}, {todo.getHours}:{todo.getMinutes}</h1>
             </div>
             {/* <a href={}  className="bg-blue-600 p-2 rounded text-white">Read book</a> */}
            </div>
            
        </li>
  )
}

export default NoteApp

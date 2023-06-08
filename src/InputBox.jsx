export const InputBox = ({label,setprops})=>{

    return( 
    <div className='label-input-pair'>
        <label className='label'>{label }</label>
        <input className='input' onChange={(e)=>setprops(e.target.value)} type='text' placeholder='Enter your Text' />
    </div>
)}


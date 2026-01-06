import CrossIcon from "../icons/CrossIcon"

 


// we want this to be a controlled componenet
const CreateContentModel = ({open,onClose}) => {
    
    return (<div>
    {(open && <div className="min-w-screen min-h-screen bg-slate-500 fixed top-0 left-0 opacity-80 flex justify-center">
        <div className="flex flex-col justify-center">
            <span className="bg-white opacity-100 p-4 rounded">
                <div className="flex justify-end ">
                    <div onClick={onClose} className="cursor-pointer pb-3">
                        <CrossIcon></CrossIcon>
                    </div>
                </div>
                <div className="flex flex-col gap-3">
                    <Input placeholder="Title"></Input>
                    <Input placeholder="Link"></Input>
                    <select className="py-2 px-4 rounded-xl border bg-white cursor-pointer">
                        <option value="">Select type</option>
                        <option value="youtube">YouTube</option>
                        <option value="instagram">Instagram</option>
                        <option value="pinterest">Pinterest</option>
                        <option value="twitter">X (Twitter)</option>
                        <option value="other">Others</option>
                    </select>
                </div>
                
            </span>
        </div>
        
    </div>)}
    </div>)  
}

export default CreateContentModel

const Input = (props)=>{

    return(
        <input className="py-2 px-4 rounded-xl border" type="text" placeholder={props.placeholder}></input>
    )
}
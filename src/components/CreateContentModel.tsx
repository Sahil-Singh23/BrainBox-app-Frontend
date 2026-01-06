 


// we want this to be a controlled componenet
const CreateContentModel = ({open,setOpen}) => {
    
    return (
        <div>
            {(open && <div className="min-w-screen min-h-screen bg-slate-500 fixed top-0 left-0 opacity-80 flex justify-center">
            <div className="">
                <span className="bg-white opacity-100">Hi there</span>
            </div>
        </div>)}
        </div>
        
    )
}

export default CreateContentModel

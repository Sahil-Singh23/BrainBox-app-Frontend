import CrossIcon from "../icons/CrossIcon"
import { useState, useRef } from "react"

 


// we want this to be a controlled componenet
const CreateContentModel = ({open,onClose}) => {
    const [title, setTitle] = useState("");
    const [link, setLink] = useState("");
    const [type, setType] = useState("");
    const [isResolving, setIsResolving] = useState(false);

    const resolvePinterestUrl = async (url: string) => {
        if (!url.includes('pin.it')) return url;
        
        setIsResolving(true);
        try {
            const response = await fetch('http://localhost:2000/api/v1/resolve-pinterest', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ url }),
            });
            
            const data = await response.json();
            setIsResolving(false);
            return data.fullUrl || url;
        } catch (error) {
            console.error('Error resolving Pinterest URL:', error);
            setIsResolving(false);
            return url;
        }
    };

    const handleSubmit = async () => {
        let finalLink = link;
        
        if (type === 'pinterest' && link.includes('pin.it')) {
            finalLink = await resolvePinterestUrl(link);
        }
        
        // TODO: Send finalLink, title, and type to your backend
        console.log({ title, link: finalLink, type });
        
        // Reset form
        setTitle("");
        setLink("");
        setType("");
        onClose();
    };
    
    return (<div>
    {(open && <div className="min-w-screen min-h-screen bg-slate-500/80 fixed top-0 left-0 flex justify-center items-center">
        <div className="bg-white p-4 rounded shadow-lg">
            <div className="flex justify-end ">
                <div onClick={onClose} className="cursor-pointer pb-3">
                    <CrossIcon></CrossIcon>
                </div>
            </div>
                <div className="flex flex-col gap-3">
                    <Input 
                        placeholder="Title" 
                        value={title} 
                        onChange={(e) => setTitle(e.target.value)}
                    />
                    <Input 
                        placeholder="Link" 
                        value={link} 
                        onChange={(e) => setLink(e.target.value)}
                    />
                    <select 
                        className="py-2 px-4 rounded-xl border bg-white cursor-pointer"
                        value={type}
                        onChange={(e) => setType(e.target.value)}
                    >
                        <option value="">Select type</option>
                        <option value="youtube">YouTube</option>
                        <option value="instagram">Instagram</option>
                        <option value="pinterest">Pinterest</option>
                        <option value="twitter">X (Twitter)</option>
                        <option value="other">Others</option>
                    </select>
                    <button 
                        onClick={handleSubmit}
                        disabled={isResolving}
                        className="py-2 px-4 rounded-xl bg-purple-600 text-white hover:bg-purple-700 disabled:bg-gray-400"
                    >
                        {isResolving ? 'Resolving...' : 'Submit'}
                    </button>
            </div>
        </div>
    </div>)}
    </div>)  
}

export default CreateContentModel

const Input = (props)=>{

    return(
        <input 
            className="py-2 px-4 rounded-xl border w-64" 
            type="text" 
            placeholder={props.placeholder}
            value={props.value}
            onChange={props.onChange}
        />
    )
}
import ShareIcon from "../icons/ShareIcon"

interface CardProps{
    title: string,
    link: string,
    type: "twitter"|"youtube";
}

const Card = (props: CardProps) => {
  return (
    <div className="bg-white max-w-72
     rounded-md shadow-md p-4 border-slate-100">
        <div className="flex justify-between">
            <div className="flex gap-2">
                <ShareIcon size="md"></ShareIcon>
                Project ideas
            </div>
            <div className="flex gap-2">
                 <ShareIcon size="md"></ShareIcon>
                  <ShareIcon size="md"></ShareIcon>
            </div> 
        </div>
      
    </div>
  )
}

export default Card

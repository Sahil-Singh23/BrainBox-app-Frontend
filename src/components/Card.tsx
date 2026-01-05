import ShareIcon from "../icons/ShareIcon"

interface CardProps{
    title: string,
    link: string,
    type: "twitter"|"youtube";
}

const Card = ({title,link,type}: CardProps) => {
  return (
    <div className="bg-white max-w-72 rounded-md shadow-md p-4 border-slate-100 flex flex-col">
        <div className="flex justify-between">
            <div className="flex gap-2">
                <ShareIcon size="md"></ShareIcon>
                {title}
            </div>
            <div className="flex gap-2">
                 <ShareIcon size="md"></ShareIcon>
                  <ShareIcon size="md"></ShareIcon>
            </div> 
        </div>
        <div>
            {(type==="twitter" && <blockquote className="twitter-tweet">
                <a href="https://twitter.com/viralbiryani/status/2007775223089930529?s=20"></a> 
                </blockquote>)}
        </div>
      
    </div>
  )
}

export default Card

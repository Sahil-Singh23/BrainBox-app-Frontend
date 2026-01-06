import NoteIcon from "../icons/NoteIcon";
import ShareIcon from "../icons/ShareIcon"
import { useEffect } from "react";

interface CardProps{
    title: string,
    link: string,
    type: "twitter"|"youtube"|"instagram";
}

const Card = ({title,link,type}: CardProps) => {
  useEffect(() => {
    if (type === "twitter" && window.twttr) {
      window.twttr.widgets.load();
    }
    if (type === "instagram" && window.instgrm) {
      window.instgrm.Embeds.process();
    }
  }, [type]);

  return (
    <div className="bg-white max-w-72 rounded-md shadow-md p-4 border-slate-100 flex flex-col min-h-96">
        <div className="flex justify-between">
            <div className="flex gap-2">
                <NoteIcon size="lg"></NoteIcon>
                <span>{title}</span>
            </div>
            <div className="flex gap-2">
                 <ShareIcon size="md"></ShareIcon>
                  <ShareIcon size="md"></ShareIcon>
            </div> 
        </div>
        <div className="my-auto w-full max-w-full">
            {(type==="twitter" && <blockquote className="twitter-tweet">
                <a href="https://twitter.com/viralbiryani/status/2007775223089930529?s=20"></a> 
                </blockquote>)}


            {(type==="youtube" && <iframe className="w-full rounded-xl" src="https://www.youtube.com/embed/IkPabpDzmT4?si=pjA6rrw8c9WIKgyZ" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>)}


            {(type==="instagram" && <blockquote className="instagram-media rounded-xl max-w-full" data-instgrm-permalink="https://www.instagram.com/p/DSLE8B1D6XX/?utm_source=ig_embed&utm_campaign=loading" data-instgrm-version="14" style={{background:"#FFF", border:"0", borderRadius:"3px", boxShadow:"0 0 1px 0 rgba(0,0,0,0.5),0 1px 10px 0 rgba(0,0,0,0.15)", margin:"1px", maxWidth:"calc(100% - 2px)", padding:"0"}}></blockquote>)}
        </div>
    </div>
  )
}

export default Card

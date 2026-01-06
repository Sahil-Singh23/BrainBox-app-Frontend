import NoteIcon from "../icons/NoteIcon";
import ShareIcon from "../icons/ShareIcon"
import { useEffect } from "react";

interface CardProps{
    title: string,
    link: string,
    type: "twitter"|"youtube"|"instagram"|"pinterest";
}

const Card = ({title,link,type}: CardProps) => {
  useEffect(() => {
    //@ts-ignore
    if (type === "twitter" && window.twttr) {
      //@ts-ignore
      window.twttr.widgets.load();
    }
    //@ts-ignore
    if (type === "instagram" && window.instgrm) {
      //@ts-ignore
      window.instgrm.Embeds.process();
    }
    //@ts-ignore
    if (type === "pinterest" && window.PinUtils) {
      //@ts-ignore
      window.PinUtils.build();
    }
  }, [type]);

  return (
    <div className="bg-white w-full h-auto rounded-md shadow-md p-4 border-slate-100 flex flex-col break-inside-avoid mb-8">
        <div className="flex justify-between">
            <div className="flex gap-2">
                <NoteIcon size="lg"></NoteIcon>
                <span className="pb-2">{title}</span>
            </div>
            <div className="flex gap-2">
                 <ShareIcon size="md"></ShareIcon>
                  <ShareIcon size="md"></ShareIcon>
            </div> 
        </div>
        <div className="w-full">
            {(type==="twitter" && <blockquote className="twitter-tweet">
                <a href="https://twitter.com/viralbiryani/status/2007775223089930529?s=20"></a> 
                </blockquote>)}


            {(type==="pinterest" && <a data-pin-do="embedPin" data-pin-width="medium" href="https://pin.it/5TEPsvVtW"></a>)}

            {(type==="youtube" && <iframe className="w-full rounded-xl aspect-video" src="https://www.youtube.com/embed/IkPabpDzmT4?si=pjA6rrw8c9WIKgyZ" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>)}


            {(type==="instagram" && <blockquote className="instagram-media" data-instgrm-permalink="https://www.instagram.com/p/DSLE8B1D6XX/?utm_source=ig_embed&utm_campaign=loading" data-instgrm-version="14" style={{background:"#FFF", border:"0", borderRadius:"8px", boxShadow:"0 0 1px 0 rgba(0,0,0,0.5),0 1px 10px 0 rgba(0,0,0,0.15)", margin:"0", width:"100%", maxWidth:"100%", minWidth:"0"}}></blockquote>)}
        </div>
    </div>
  )
}

export default Card

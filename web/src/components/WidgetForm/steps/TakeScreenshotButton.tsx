import { Camera, Trash, TrashSimple } from "phosphor-react";
import html2canvas from "html2canvas";
import { FormEvent, useState } from "react";
import { Loading } from "../Loading";

interface TakeScreenshotButtonProps {
    setScreenshot:(base64Image:string | null)=>void
    screenshot: string | null
    
}

export function TakeScreenshotButton({setScreenshot,screenshot}:TakeScreenshotButtonProps) {
    function removeThumb(e:FormEvent){
        e.preventDefault()
        setScreenshot(null)
    }
    const [takingAshot, setTakingAshot] = useState(false)
    async function takeScreenshot(e:FormEvent) {
        e.preventDefault()
        setTakingAshot(true)
        const canvas = await html2canvas(document.querySelector('html')!)
        const base64Image = canvas.toDataURL('img/png')
        setTakingAshot(false)
        setScreenshot(base64Image)
    }

    if (screenshot){
        return (
            <button 
            className="w-10 h-10 flex justify-end items-end  rounded "
            onClick={removeThumb}
            style={{
                backgroundImage:  `url(${screenshot})`,
                backgroundPosition: "right",
                backgroundSize: 180
            }}
            >
                <Trash className="weight-fill"/>
            </button>
        )
    }
    
    return (        
        <>
            <button className="w-10 h-10 flex justify-center items-center bg-darkSurfaceSecondary-500 rounded"
            onClick={takeScreenshot}
            >
                {takingAshot?<Loading />:<Camera className="w-6 h-6 text-darkTextPrimary-500" />
                }
            </button>
        </>
    )
}
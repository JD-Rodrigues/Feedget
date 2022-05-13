import { ArrowLeft, Camera } from "phosphor-react"
import { FormEvent, useState } from "react"
import { feedbackTypeItems, objectTypes } from ".."
import { CloseButton } from "../../CloseButton"
import { TakeScreenshotButton } from "./TakeScreenshotButton"



interface SendFeedbackProps {
    typeSelected: objectTypes
    resetFeedbackType: ()=>void
}

export function SendFeedback({typeSelected,resetFeedbackType}:SendFeedbackProps){
    const [screenshot,setScreenshot] = useState<string | null>(null)
    const selectedTypeInfo = feedbackTypeItems[typeSelected]
    const [comment, setComment] = useState(String)

    function submitFeedback(e:FormEvent) {
        e.preventDefault()
        console.log({
            comment,
            screenshot
        })
    }
    return (
        <>
            <header>
                <button onClick={resetFeedbackType} 
                className=" flex items-center absolute top-4 left-4 border-2 border-transparent hover:border-brand-500 focus:border-brand-500 outline-none "
                >
                    <ArrowLeft className="w-4 h-4 text-darkTextSecondary-500 hover:text-darkTextPrimary-500" 
                    />
                </button>
                <div className="flex gap-2 text-xl items-center justify-center">
                    <img className="w-6 h-6" src={selectedTypeInfo.image.source} alt={selectedTypeInfo.image.alt} />
                    <span>{selectedTypeInfo.title}</span>
                </div>
                <CloseButton />
            </header>
            <form className="flex flex-col gap-2 w-full box-border" action="" onSubmit={submitFeedback}>
                <textarea 
                className="w-full min-w-[304px] min-h-[112px] text-sm placeholder-darkTextSecondary-500 border-1 border-darkStroke-500 focus:border-brand-500 text-darkTextPrimary-500  bg-transparent outline-none scrollbar-thin scrollbar-thumb-darkStroke-500 resize-none rounded-md" 
                placeholder="Conte-nos detalhes sobre o que está acontecendo."
                onChange={(event)=>setComment(event.target.value)}
                />
                <footer className="flex justify-center gap-2">
                    <button className="w-10 h-10 flex justify-center items-center bg-darkSurfaceSecondary-500 rounded"
                    >
                        <TakeScreenshotButton screenshot={screenshot} setScreenshot={setScreenshot} />
                    </button>
                    <button 
                    className=" flex flex-1 justify-center items-center py-2 bg-brand-500 h-10 disabled:bg-[#635996] disabled:hover:bg-brand-500 rounded"
                    type="submit"
                    disabled={comment.length===0}>
                
                        <div className="text-base text-lightText-500">Enviar feedback</div> 
                    </button>
                </footer>
            </form>
        </>
    )
}
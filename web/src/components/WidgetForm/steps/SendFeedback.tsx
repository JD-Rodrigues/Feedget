import { ArrowLeft, Camera } from "phosphor-react"
import { feedbackTypeItems, objectTypes } from ".."
import { CloseButton } from "../../CloseButton"


interface SendFeedbackProps {
    typeSelected: objectTypes
    resetFeedbackType: ()=>void
}

export function SendFeedback({typeSelected,resetFeedbackType}:SendFeedbackProps){
    const selectedTypeInfo = feedbackTypeItems[typeSelected]
    return (
        <>
            <header>
                <button onClick={resetFeedbackType} className=" flex items-center absolute top-4 left-4 border-2 border-transparent hover:border-brand-500 focus:border-brand-500 outline-none"><ArrowLeft className="w-4 h-4 text-darkTextSecondary-500 hover:text-darkTextPrimary-500" /></button>
                <div className="flex gap-2 text-xl items-center justify-center">
                    <img className="w-6 h-6" src={selectedTypeInfo.image.source} alt={selectedTypeInfo.image.alt} />
                    <span>{selectedTypeInfo.title}</span>
                </div>
                <CloseButton />
            </header>
            <form className="flex flex-col gap-2 w-full box-border" action="">
                <textarea 
                className="w-full min-w-[304px] min-h-[112px] text-sm placeholder-darkTextSecondary-500 border-1 border-darkStroke-500 focus:border-brand-500 text-darkTextPrimary-500  bg-transparent outline-none scrollbar-thin scrollbar-thumb-darkStroke-500 resize-none rounded-md" 
                placeholder="Conte-nos detalhes sobre o que está acontecendo."
                />
                <footer className="flex justify-center gap-2">
                    <button className="w-10 h-10 flex justify-center items-center bg-darkSurfaceSecondary-500 rounded">
                        <Camera className="w-6 h-6 text-darkTextPrimary-500" />
                    </button>
                    <button 
                    className=" flex flex-1 justify-center items-center py-2 bg-brand-500 h-10  rounded"
                    type="submit">
                
                        <div className="text-base text-lightText-500">Enviar feedback</div> 
                    </button>
                </footer>
            </form>
        </>
    )
}
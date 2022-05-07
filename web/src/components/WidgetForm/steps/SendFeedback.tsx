import { ArrowLeft } from "phosphor-react"
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
            <form className="w-full" action="">
                <textarea className="w-full min-w-[384px] min-h-[112px]" placeholder="Conte-nos detalhes sobre o que está acontecendo."/>
            </form>
        </>
    )
}
import { feedbackTypeItems, objectTypes } from ".."
import { CloseButton } from "../../CloseButton"

interface SelectFeedbackTypeProps {
    changeFeedbackType: (type: objectTypes)=>void
}

export function SelectFeedbackType({changeFeedbackType}:SelectFeedbackTypeProps) {
    return (
        <>
            <header>
                <span className="text-xl leading-6">Deixe seu feedback</span>
                <CloseButton />
            </header>
            <div className="flex gap-2 w-full py-8">
                {   
                    Object.entries(feedbackTypeItems).map(([key,value])=>{
                        return (
                            <button 
                            className="flex flex-col w-24 rounded-lg bg-darkSurfaceSecondary-500 py-5 gap-2 justify-center items-center border-2 border-transparent focus:border-brand-500 hover:border-brand-500 flex-1  outline-none"
                            type="button"
                            key={key}
                            onClick={()=>changeFeedbackType(key as objectTypes)}
                            >
                                <img src={value.image.source} alt={value.image.alt} className="w-10 h-10"/>
                                <span>{value.title}</span>
                            </button>
                        )
                    })
                }

            </div>
        </>
        
    )
}
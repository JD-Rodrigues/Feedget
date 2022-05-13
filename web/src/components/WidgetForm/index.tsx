
import { useState } from "react";
import bugImageUrl from "../../assets/images/bug.svg";
import ideaImageUrl  from "../../assets/images/idea.svg";
import thoughtImageUrl from "../../assets/images/thought.svg";
import { FeedbackSuccess } from "./steps/FeedbackSuccess";
import { SelectFeedbackType } from "./steps/SelectFeedbackType";
import { SendFeedback } from "./steps/SendFeedback";


export const feedbackTypeItems = {
    BUG: {
        title: 'Problema',
        image: {
            source: bugImageUrl,
            alt: 'Imagem de um inseto.'
        }
    },

    IDEA: {
        title: 'Ideia',
        image: {
            source: ideaImageUrl,
            alt: 'Imagem de uma lâmpada.'
        }
    },

    THOUGHT: {
        title: 'Outro',
        image: {
            source: thoughtImageUrl,
            alt: 'Imagem de um balão de pensamento.'
        }
    },
}

export type objectTypes = keyof typeof feedbackTypeItems

export function WidgetForm() {
    const [selectedType, setSelectedType] = useState<objectTypes |null>(null)
    const [sentState, setSentState] = useState<boolean|void>(false)

    function resetFeedbackType () {
        setSelectedType(null)
        setSentState(false)
    }

    if(sentState) {
        return (
            <div className=" text-darkTextPrimary-500 flex flex-col bg-darkSurfacePrimary-500 mb-4 items-center w-[calc(100vw-2rem)] md:w-auto p-4 gap-4 rounded-2xl relative box-border">

            <FeedbackSuccess  back={resetFeedbackType}/>
            
            <footer className="text-xs text-darkTextSecondary-500">
                <span>Feito com ♥ por JD Rodrigues</span>
            </footer>
            
            </div>
        )
    }

    return (
        <div className=" text-darkTextPrimary-500 flex flex-col bg-darkSurfacePrimary-500 mb-4 items-center w-[calc(100vw-2rem)] md:w-auto p-4 gap-4 rounded-2xl relative box-border">

            {        
                !selectedType?(
                    <SelectFeedbackType changeFeedbackType={setSelectedType}/>
                ):(
                    <SendFeedback typeSelected={selectedType} resetFeedbackType ={resetFeedbackType} setSentState={setSentState}/>
                )       
            }
            
            <footer className="text-xs text-darkTextSecondary-500">
                <span>Feito com ♥ por JD Rodrigues</span>
            </footer>
            
        </div>
        
        
    )
}



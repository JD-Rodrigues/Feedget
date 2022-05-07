
import { useState } from "react";
import bugImageUrl from "../../assets/images/bug.svg";
import ideaImageUrl  from "../../assets/images/idea.svg";
import thoughtImageUrl from "../../assets/images/thought.svg";
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
    console.log(selectedType)

    function resetFeedbackType () {
        setSelectedType(null)
    }

    return (
        <div className=" text-darkTextPrimary-500 flex flex-col bg-darkSurfacePrimary-500 mb-4 items-center w-[calc(100vw-2rem)] md:w-auto p-4 gap-4 rounded-2xl relative box-border">
            {!selectedType?(
                <SelectFeedbackType changeFeedbackType={setSelectedType}/>
            ):(
                <SendFeedback typeSelected={selectedType} resetFeedbackType ={resetFeedbackType}/>
            )       
            }
            
            <footer className="text-xs text-darkTextSecondary-500">
                <span>Feito com ♥ por JD Rodrigues</span>
            </footer>
            
        </div>
        
        
    )
}



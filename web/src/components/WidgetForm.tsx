import { Popover } from "@headlessui/react";
import bugImageUrl from "../assets/images/bug.svg";
import ideaImageUrl  from "../assets/images/idea.svg";
import thoughtImageUrl from "../assets/images/thought.svg";
import { CloseButton } from "./CloseButton";


const feedbackTypeItems = {
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

export function WidgetForm() {
    return (
        <div className=" text-darkTextPrimary-500 flex flex-col bg-darkSurfacePrimary-500 mb-4 items-center w-[calc(100vw-2rem)] md:w-auto p-4 gap-4 rounded-2xl relative">
            <header>
                <span className="text-xl leading-6">Deixe seu feedback</span>
                <CloseButton />
            </header>
            <div className="flex gap-2">
                {
                    Object.entries(feedbackTypeItems).map(([key,value])=>{
                        return (
                            <button className="flex flex-col w-24 h-28 rounded-lg bg-darkSurfaceSecondary-500 p-2 gap-2 justify-center items-center focus:outline-brand-500 outline-none">
                                <img src={value.image.source} alt={value.image.alt} className="w-10 h-10"/>
                                <span>{value.title}</span>
                            </button>
                        )
                    })
                }

            </div>
            <footer className="text-xs text-darkTextSecondary-500 mt-12">
                <span>Feito com ♥ por JD Rodrigues</span>
            </footer>
            
        </div>
        
        
    )
}



import { Popover } from "@headlessui/react";
import { X } from "phosphor-react";


export function CloseButton() {
    return(
        <Popover.Button className="top-4 right-4 text-darkTextSecondary-500 absolute focus:outline-brand-500 outline-none" title="Fechar formulário de feedback">
            <X className="w-4 h-4"/>
        </Popover.Button>
    )

}

    
    
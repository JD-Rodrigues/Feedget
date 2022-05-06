import { ChatTeardropDots } from "phosphor-react"
import { Popover } from '@headlessui/react'
import { WidgetForm } from "./WidgetForm"


export function Widget() {
    return (
        <Popover className="absolute right-5 bottom-5 flex flex-col items-end">
            <Popover.Panel>
                <WidgetForm /> 
            </Popover.Panel>
            <Popover.Button className="bg-brand-500 rounded-full text-lightText-500  px-3 w-auto h-12 flex items-center group">            
                <ChatTeardropDots className="h-6 w-6"  />                   
                <span className="max-w-0 overflow-hidden group-hover:max-w-sm transition-all duration-500">Feedback</span>                
            </Popover.Button> 
        </Popover>         
    )
}
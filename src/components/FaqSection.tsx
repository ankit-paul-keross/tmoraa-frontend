import React from 'react'
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from './ui/accordion'

export default function FaqSection() {
  return (
    <div className='py-15'>
      <div className='mb-10 flex justify-center items-center'>
        <h2 className='text-4xl font-semibold'>Frequently Asked Questions</h2>
      </div>
      <Accordion
        type="single"
        collapsible
        className="px-[25%] space-y-4 p-4"
        defaultValue="item-1"

      >
        <AccordionItem value="item-1" className='shadow-[0_0_15px_rgba(0,0,0,0.15)] rounded-xl'>
          <AccordionTrigger >Shipping Details</AccordionTrigger>
          <AccordionContent className="flex flex-col gap-4 text-balance">
            <p>
              We offer worldwide shipping through trusted courier partners.
              Standard delivery takes 3-5 business days, while express shipping
              ensures delivery within 1-2 business days.
            </p>
            <p>
              All orders are carefully packaged and fully insured. Track your
              shipment in real-time through our dedicated tracking portal.
            </p>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2" className='shadow-[0_0_15px_rgba(0,0,0,0.15)] rounded-xl'>
          <AccordionTrigger >Shipping Details</AccordionTrigger>
          <AccordionContent className="flex flex-col gap-4 text-balance">
            <p>
              We offer worldwide shipping through trusted courier partners.
              Standard delivery takes 3-5 business days, while express shipping
              ensures delivery within 1-2 business days.
            </p>
            <p>
              All orders are carefully packaged and fully insured. Track your
              shipment in real-time through our dedicated tracking portal.
            </p>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3" className='shadow-[0_0_15px_rgba(0,0,0,0.15)] rounded-xl'>
          <AccordionTrigger >Shipping Details</AccordionTrigger>
          <AccordionContent className="flex flex-col gap-4 text-balance">
            <p>
              We offer worldwide shipping through trusted courier partners.
              Standard delivery takes 3-5 business days, while express shipping
              ensures delivery within 1-2 business days.
            </p>
            <p>
              All orders are carefully packaged and fully insured. Track your
              shipment in real-time through our dedicated tracking portal.
            </p>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  )
}

import { FC, HTMLAttributes, forwardRef } from 'react'
import {cva,VariantProps} from 'class-variance-authority'
import { cn } from '@/lib/utils'

const paragraphVariant = cva(
    'max-w-prose text-slate-700 dark:text-slate-300 mb-2 text-center',
    {
        variants:{
                size:{
                    default:'text-base sm:text-lg',
                    sm:'text-sm sm:text-base'
                }
            
        },
        defaultVariants:{
            size:'default'
        }
        
    }
)

interface ParagraphProps extends HTMLAttributes<HTMLParagraphElement>, VariantProps<typeof paragraphVariant> {
  
}

const Paragraph = forwardRef<HTMLParagraphElement,ParagraphProps>(({ size,className,children,...props },ref) => {
    return (
      <p ref={ref} className={cn(paragraphVariant({size,className}))} {...props}>
        {children}
      </p>
    ) }) 

Paragraph.displayName = 'Paragraph'


export default Paragraph;
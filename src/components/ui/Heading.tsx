import { FC, HTMLAttributes, forwardRef } from 'react'
import {cva,VariantProps} from 'class-variance-authority'
import { cn } from '@/lib/utils'

const headingVariant = cva(
    'text-black dark:text-white text-center lg:text-left font-extrabold leading-tight tracking-tighter',
    {
        variants:{
                size:{
                    default:'text-4xl md:text-5xl lg:text-6xl',
                    lg:'text-5xl md:text-6xl lg:text-7xl',
                    sm:'text-2xl md:text-3xl lg:text-4xl'
                }
            
        },
        defaultVariants:{
            size:'default'
        }
        
    }
)

interface HeadingProps extends HTMLAttributes<HTMLHeadingElement>, VariantProps<typeof headingVariant> {
  
}

const Heading = forwardRef<HTMLHeadingElement,HeadingProps>(({ size,className,children,...props },ref) => {
    return (
      <h1 ref={ref} className={cn(headingVariant({size,className}))} {...props}>
        {children}
      </h1>
    ) }) 

Heading.displayName = 'Heading'


export default Heading;
import { ComponentProps } from 'react'
import { twMerge } from 'tailwind-merge'

// ComponentProps é usado para definir que uma tag html receberia

export const Skeleton = ({ className, ...props }: ComponentProps<'div'>) => {
  return (
    <div
      // Para as props de className de div não sobrescrever as definidas com tailwind e sim as juntar
      className={twMerge('bg-zinc-50/10 animate-pulse rounded-md', className)}
      {...props}
    />
  )
}

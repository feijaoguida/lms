import { Button } from "@/components/ui/button"
import Image from "next/image"

const Footer = () => {
  return (
    <footer className="hidden lg:block h-20 w-full border-t-2 border-slate-200 p-2" >
      <div className="max-w-screen-lg mx-auto flex items-center justify-evenly h-full">
        <Button size={'lg'} variant='ghost' className="w-full">
          <Image
            src="/flag_br.svg"
            alt='Brasil'
            height={32}
            width={40}
            className="mr-4 rounded-md"
          />
          Brasil
        </Button>
        <Button size={'lg'} variant='ghost' className="w-full">
          <Image
            src="/flag_es.svg"
            alt='Spain'
            height={32}
            width={40}
            className="mr-4 rounded-md"
          />
          Spain
        </Button>
        <Button size={'lg'} variant='ghost' className="w-full">
          <Image
            src="/flag_us.svg"
            alt='USA'
            height={32}
            width={40}
            className="mr-4 rounded-md"
          />
          English
        </Button>
        <Button size={'lg'} variant='ghost' className="w-full">
          <Image
            src="/flag_hr.svg"
            alt='Croatian'
            height={32}
            width={40}
            className="mr-4 rounded-md"
          />
          Croatian
        </Button>
        <Button size={'lg'} variant='ghost' className="w-full">
          <Image
            src="/flag_fr.svg"
            alt='France'
            height={32}
            width={40}
            className="mr-4 rounded-md"
          />
          France
        </Button>

      </div>
    </footer>
  )
}

export default Footer
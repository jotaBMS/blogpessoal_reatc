import { FacebookLogo, GithubLogo, InstagramLogo, LinkedinLogo } from '@phosphor-icons/react'

function Footer() {

    let data = new Date().getFullYear()

    return (
        <>
            <div className="flex justify-center bg-indigo-900 text-white">
                <div className="container flex flex-col items-center py-4">
                    <p className='text-xl font-bold'>
                            Blog João Bispo | Copyright: {data}
                        </p>
                    <p className='text-lg'>Acesse minhas redes sociais</p>
                    <div className='flex gap-2'>
                        <LinkedinLogo size={48} weight='duotone' />
                        <InstagramLogo size={48} weight='duotone' />
                        <GithubLogo size={48} weight='duotone' />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer
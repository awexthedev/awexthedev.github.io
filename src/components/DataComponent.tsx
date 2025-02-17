import Image from "next/image"

export default async function DataComponent({
    url,
    header,
    projectHeader,
    projectSubheader,
    projectImage
}: {
    url: string,
    header: string,
    projectHeader: string,
    projectSubheader: string,
    projectImage?: string
}) {
    return (
        <a href={url} target="_blank">
            <div className="bg-white rounded-lg text-black p-2">
                <h1 className="text-center font-semibold">{header}</h1>

                <div className="block">
                    <div className="flex items-center">
                        {
                            projectImage && <Image alt="Project Image" src={projectImage} width={100} height={100} className="w-[80px] h-[50px] object-cover" />
                        }

                        <div className="flex flex-col mx-2 min-w-0 flex-grow">
                            <h1 className="font-bold text-left truncate">{projectHeader}</h1>
                            <h1 className="text-left truncate">{projectSubheader}</h1>
                        </div>
                    </div>
                </div>
            </div>
        </a>
    )
}
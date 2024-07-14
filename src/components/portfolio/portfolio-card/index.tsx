interface PortfolioCardProps {
    thumbnail: string;
    name: string;
    url: string;
}

const PortfolioCard = (props:PortfolioCardProps) => {
    const {thumbnail, name, url} = props;
    return (
        <>
        <div className="relative w-full md:w-80 h-64 overflow-hidden rounded-lg shadow-lg cursor-pointer group">
        <img
            src={thumbnail}
            alt={'nothing'}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div
            className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
            <div className="text-center text-white p-4">
                <h3 className="text-lg font-bold mb-2">{name}</h3>
                <div className="flex space-x-2">
                    <a
                        href={'https://files.elfsight.com/storage/f7e9a9de-578a-404d-9755-29717c16030a/e91bf5d7-a553-40ec-8315-e31ebab090ed.jpeg'}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded transition duration-300"
                    >
                        Code
                    </a>
                    <a
                        href={'https://files.elfsight.com/storage/f7e9a9de-578a-404d-9755-29717c16030a/e91bf5d7-a553-40ec-8315-e31ebab090ed.jpeg'}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded transition duration-300"
                    >
                        Open
                    </a>
                </div>
            </div>
        </div>
        </div>


</>
)
}

export default PortfolioCard;
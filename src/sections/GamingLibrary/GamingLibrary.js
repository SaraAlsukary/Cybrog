import './GamingLibrary.css'
import { CardGaming, SectionWrapper, SectionHeader } from '../../Components/index'
import GamingLibraryData from '../../Data/GamingLibraryData'

const GamingLibrary = () => {

    const card = GamingLibraryData.map(card => {
        console.log(card.id);
        return <CardGaming key={card.id} image={card.image} title={card.title} category={card.category} hours_played={card.hours_played} date_added={card.data_added} download={card.downloded} />
    })
    return (
        <>
            <SectionWrapper>
                <SectionHeader>Gaming Library</SectionHeader>
                <div className="gaming-library-cards">
                    {card}
                </div>
            </SectionWrapper>
        </>
    )
}

export default GamingLibrary

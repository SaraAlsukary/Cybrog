import './MostPopular.css'
import { Card, SectionHeader, SectionWrapper } from '../../Components/index'
import mostPopularData from '../../Data/MostPopularData'


const MostPopular = () => {

    const card = mostPopularData.map(card => {
        console.log(card.id);
        return <Card key={card.id} image={card.image} title={card.title} category={card.category} rate={card.rate} download={card.download} />
    })
    return (
        <>
            <SectionWrapper>
                <SectionHeader>Most Popular</SectionHeader>
                <div className="most-popular-items">
                    {card}
                </div>
            </SectionWrapper>
        </>
    )
}

export default MostPopular

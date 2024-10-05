import React, { Component} from 'react';
import NewsIteam from './NewsItem';

export class News extends Component {
    render() {
        return(
    <>
         <h1>Top News Headlines for UPSC CSE aspirents </h1>

         <div className='container my-4'>

            <div className='row'>
                    <div className='col-md-4'>
                        {/* news */}
                        <NewsIteam title= "Climate Change Impact on Panama Canal" 
                        discription= "The Panama Canal, a critical global shipping lane, is facing significant challenges due to prolonged drought conditions exacerbated by climate change " 
                        imageURL="https://media.licdn.com/dms/image/v2/D5612AQERxGuv7ogxTw/article-cover_image-shrink_600_2000/article-cover_image-shrink_600_2000/0/1707434226590?e=2147483647&v=beta&t=w-YnSFI-M3Ce3UUQOBVjfAcXU5JFut-EvGWbLUK5aKY" 
                        Source= "Dristi IAS"/>
                    </div>

                    <div className='col-md-4'>
                        {/* news */}
                        <NewsIteam title= "Red Sea Crisis: Impact on Global and Indian Trade" 
                        discription= "Houthi Militia Attacks: Since November, attacks by the Houthi militia of Yemen have rendered the Red Sea, a crucial marine route via the Suez Canal, unsafe for cargo ships. Alternative Route: This has led to a significant rerouting of cargo, with ships now taking the longer Cape of Good Hope route, affecting global trade and increasing costs. " 
                        imageURL="https://pangea-network.com/wp-content/webp-express/webp-images/doc-root/wp-content/uploads/2024/02/PANGEA_LOGISTICS_NETWORK_Blog-6.png.webp" 
                        Source= "CIVIL DAILY"
                        Detail= "https://www.civilsdaily.com/news/red-sea-crisis-impact-on-global-and-indian-trade/"/>
                    </div>

                    <div className='col-md-4'>
                        {/* news */}
                        <NewsIteam title= "Supreme Court's Role in Upholding Civil Liberties" 
                        discription= "the Supreme Court of India's recent decision to grant bail in Delhi excise policy case, emphasizing that liberty is an intrinsic part of constitutionalism, highlights its role in upholding individual rights and ensuring timely justice. " 
                        imageURL="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5d/Supreme_Court_of_India_-_Central_Wing.jpg/220px-Supreme_Court_of_India_-_Central_Wing.jpg" 
                        Source= "Dristi IAS"
                        Detail= "https://www.drishtiias.com/daily-updates/daily-news-editorials/supreme-court-s-role-in-upholding-civil-liberties"/>
                    </div>

                    <div className='col-md-4'>
                        {/* news */}
                        <NewsIteam title= "How special is education anyway?" 
                        discription= "A flawed framework: As many as 64,377 children with special needs are studying in schools under the SSA. However, only 1,649 special educators have been employed. This highlights a major flaw in the SSA’s inclusive education: the number of disabled students is disproportionate to the number of special educators. M. VEDHAN. " 
                        imageURL="https://epaper.thehindu.com/ccidist-ws/th/th_international/issues/97650/OPS/Public/GUTD9614F.1%2BG8ED98S2K.1.jpg?rev=undefined" 
                        Source= "The Hindu"
                        Detail= "https://epaper.thehindu.com/ccidist-ws/th/th_international/issues/97650/OPS/GUTD9614F.1+G8ED98S2E.1.html"/>
                    </div>

                     <div className='col-md-4'>
                        {/* news */}
                        <NewsIteam title= "National Conference of the District Judiciary" 
                        discription= "A flawed framework: As many as 64,377 children with special needs are studying in schools under the SSA. However, only 1,649 special educators have been employed. This highlights a major flaw in the SSA’s inclusive education: the number of disabled students is disproportionate to the number of special educators. M. VEDHAN. " 
                        imageURL="https://www.pmindia.gov.in/wp-content/uploads/2024/08/H20240831165295.jpg" 
                        Source= "PMINDIA"
                        Detail = "https://www.pmindia.gov.in/en/news_updates/pm-inaugurates-national-conference-of-district-judiciary-in-new-delhi/?comment=disable"
                         Source_Two= "Vajiram & Ravi"
                        Detail_Two= "https://vajiramias.com/article/national-conference-of-the-district-judiciary/66d407ae4f1b742510cfba41/"/>
                    
                    </div>

                     <div className='col-md-4'>
                        {/* news */}
                        <NewsIteam title= "How special is education anyway?" 
                        discription= "A flawed framework: As many as 64,377 children with special needs are studying in schools under the SSA. However, only 1,649 special educators have been employed. This highlights a major flaw in the SSA’s inclusive education: the number of disabled students is disproportionate to the number of special educators. M. VEDHAN. " 
                        imageURL="https://epaper.thehindu.com/ccidist-ws/th/th_international/issues/97650/OPS/Public/GUTD9614F.1%2BG8ED98S2K.1.jpg?rev=undefined" 
                        Source= "The Hindu"
                        Detail= "https://epaper.thehindu.com/ccidist-ws/th/th_international/issues/97650/OPS/GUTD9614F.1+G8ED98S2E.1.html"/>
                    </div>
                    
                   

            </div>

        </div>

    </>
        )
    }
}
export default News


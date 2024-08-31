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
                        imageURL="data:image/jpeg;base64,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" 
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
                        <NewsIteam title= "Supreme Court's Role in Upholding Civil Liberties" 
                        discription= "the Supreme Court of India's recent decision to grant bail in Delhi excise policy case, emphasizing that liberty is an intrinsic part of constitutionalism, highlights its role in upholding individual rights and ensuring timely justice. " 
                        imageURL="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5d/Supreme_Court_of_India_-_Central_Wing.jpg/220px-Supreme_Court_of_India_-_Central_Wing.jpg" 
                        Source= "Dristi IAS"
                        Detail= "https://www.drishtiias.com/daily-updates/daily-news-editorials/supreme-court-s-role-in-upholding-civil-liberties"/>
                    </div>
                    
                   

            </div>

        </div>

    </>
        )
    }
}
export default News


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
                        <NewsIteam title= "Supreme Court's Role in Upholding Civil Liberties" 
                        discription= "the Supreme Court of India's recent decision to grant bail in Delhi excise policy case, emphasizing that liberty is an intrinsic part of constitutionalism, highlights its role in upholding individual rights and ensuring timely justice. " 
                        imageURL="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5d/Supreme_Court_of_India_-_Central_Wing.jpg/220px-Supreme_Court_of_India_-_Central_Wing.jpg" 
                        Source= "Dristi IAS"
                        Detail= "https://www.drishtiias.com/daily-updates/daily-news-editorials/supreme-court-s-role-in-upholding-civil-liberties"/>
                    </div>

                    <div className='col-md-4'>
                        {/* news */}
                        <NewsIteam title= "Climate Change Impact on Panama Canal" 
                        discription= "The Panama Canal, a critical global shipping lane, is facing significant challenges due to prolonged drought conditions exacerbated by climate change " 
                        imageURL="https://media.licdn.com/dms/image/v2/D5612AQERxGuv7ogxTw/article-cover_image-shrink_600_2000/article-cover_image-shrink_600_2000/0/1707434226590?e=2147483647&v=beta&t=w-YnSFI-M3Ce3UUQOBVjfAcXU5JFut-EvGWbLUK5aKY" 
                        Source= "Dristi IAS"/>
                    </div>

            </div>

        </div>

    </>
        )
    }
}
export default News


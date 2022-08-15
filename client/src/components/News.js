import React, {useState, useRef} from 'react'

import { Select, Typography, Row, Card, Avatar, Col } from 'antd';
import {useGetCryptoNewsQuery} from '../services/cryptoNews';

import moment from 'moment';
import "./news.css"


const {Text, Title} = Typography;
const {Option} = Select;

const demoImage = 'https://www.bing.com/th?id=OVFT.mpzuVZnv8dwIMRfQGPbOPC&pid=News';


const News = () => {
  const ref = useRef('noreferrer')
  const {data: cryptoNews} = useGetCryptoNewsQuery({ newsCategory: 'Cryptocurrency', count: 12 })


  if(!cryptoNews?.value) return "..loading";
  console.log(cryptoNews)
  return (
    
    <Row  gutter = {[24,24]}>
        {
        cryptoNews.value.map((news, i)=>(
          <Col xs={1} sm={12} lag={8} key={i}>
            <Card className='news-card'> 
              <a href={news.url} target= "_blank">
                <div className="news-image-container">

                  <Title className='news-title' level={4}>{news.name}</Title>
                  <img className="img1" src ={news?.image?.thumbnail?.contentUrl || demoImage} alt="news" />
                  <p className='provider-desc'>{news.description > 100? `${news.description.substring(0,100)}...`: news.description}</p>

                  <div className='provider-container'>
                    <div className='footer-card'>
                      <Avatar className='avatart-provider' src ={news.provider[0]?.image?.thumbnail?.contentUrl || demoImage} alt="" />
                      <Text className='provider-name'>{news.provider[0]?.name}</Text>
                    </div>
                    <Text className='provider-text'>{moment(news.datePublished).startOf('ss').fromNow()}</Text>
                  </div>
                </div>
              </a>
            </Card>
          </Col>
        ))}
    </Row>
    
   
  )
}

export default News
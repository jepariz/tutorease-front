import styled from "styled-components"
import 'animate.css';
import AOS from 'aos';
import 'aos/dist/aos.css'; 

AOS.init();

export function Feature({title, description, image, altprop}) {
  return (
    <StyledFeature>
        <img src={image} data-aos="zoom-in-up" data-aos-duration="1000" alt="ilustra"></img>
        <h2>{title}</h2>
        <p>{description}</p>
    </StyledFeature>
  )
}


const StyledFeature = styled.div`
width: 320px;
height: 384px;

img{
    width: 320px;
    height: 214px;
}

h2{
    font-size: 24px;
    font-weight: 700;
    color: #2F1160;
    text-align: center;
    margin-top: 10px;
}

p{
    font-size: 16px;
    color: #6F757B;
    text-align: center;
    margin-top: 10px;
}

@media (max-width: 768px) {
  display: flex;
  flex-direction: column;
  align-items: center;
  height: auto;
    img{
      width: 280px;
      height: 180px;
    }

    p{
      line-height: 20px;
    }
  }

`


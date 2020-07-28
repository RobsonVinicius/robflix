import React from 'react';
import Menu from '../../components/Menu';
import data from '../../data/dados_iniciais.json';
import Banner from '../../components/BannerMain';
import Carousel from '../../components/Carousel';
import Footer from '../../components/Footer';

function Home() {
  return (
    <div className="BackgroundApp">
      <Menu />      
      <Banner
        videoTitle={data.categorias[0].videos[0].titulo}
        url={data.categorias[0].videos[0].url}
        videoDescription={"Após a Guerra Civil, um jovem prodígio nas artes marciais, recém chegado da China, acaba envolvido nas sangrentas disputas entre as famílias líderes do crime organizado chinês."}
      />
      <Carousel
        ignoreFirstVideo
        category={data.categorias[0]}
      />

      <Carousel        
        category={data.categorias[1]}
      />
      
      <Carousel        
        category={data.categorias[2]}
      />

      <Carousel        
        category={data.categorias[3]}
      />

      <Carousel        
        category={data.categorias[4]}
      />

      <Carousel        
        category={data.categorias[5]}
      />

      <Footer />
    </div>

    
  );
}

export default Home;

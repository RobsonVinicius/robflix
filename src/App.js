import React from 'react';
import Menu from './components/Menu';
import data from './data/dados_iniciais.json';
import Banner from './components/BannerMain';

function App() {
  return (
    <div>
      <Menu />      
      <Banner
        videoTitle={data.categorias[0].videos[0].titulo}
        url={data.categorias[0].videos[0].url}
        videoDescription={"Após a Guerra Civil, um jovem prodígio nas artes marciais, recém chegado da China, acaba envolvido nas sangrentas disputas entre as famílias líderes do crime organizado chinês."}
      />
    </div>
  );
}

export default App;

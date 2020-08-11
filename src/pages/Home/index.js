import React, { useEffect, useState } from 'react';
// import data from '../../data/dados_iniciais.json';
import Banner from '../../components/BannerMain';
import Carousel from '../../components/Carousel';
import PageDefault from '../../components/PageDefault';
import categoriasRepository from '../../repositories/categorias';

function Home() {
  const [dadosIniciais, setDadosIniciais] = useState([]);

  useEffect(() => {
    categoriasRepository.getAllWithVideos()
      .then((categoriasComVideos) => {
        console.log(categoriasComVideos);
        setDadosIniciais(categoriasComVideos);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);
  // http://localhost:8080/categorias?_embed=videos

  return (
    <PageDefault paddingAll={0}>
      {dadosIniciais.length === 0 && (<div>Loading</div>)}

      {dadosIniciais.map((categoria, indice) => {
        if (indice === 0) {
          return (
            <div key={categoria.id}>
              <Banner
                videoTitle={dadosIniciais[0].videos[0].titulo}
                url={dadosIniciais[0].videos[0].url}
                videoDescription={dadosIniciais[0].videos[0].description}
              />
              <Carousel
                ignoreFirstVideo
                category={dadosIniciais[0]}
              />
            </div>
          );
        }

        return (
          <Carousel
            key={categoria.id}
            category={categoria}
          />
        );
      })}

      {/* {JSON.stringify(dadosIniciais)} */}
      {/* <Banner
        videoTitle={data.categorias[0].videos[0].titulo}
        url={data.categorias[0].videos[0].url}
        videoDescription="Após a Guerra Civil, um jovem prodígio nas artes marciais, recém chegado da China, acaba envolvido nas sangrentas disputas entre as famílias líderes do crime organizado chinês."
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
        */}
    </PageDefault>

  );
}

export default Home;

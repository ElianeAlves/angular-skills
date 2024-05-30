import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';

@Injectable({
  providedIn: 'root'
})
export class FakeApiService implements InMemoryDbService {

  constructor() { }

  createDb() {
    /* let skills = [
      {
        id: 1,
        name: 'HTML5',
        description: 'Ao utilizar tags semânticas como <header>, <nav>, <main> e <footer>, posso estruturar meu conteúdo de forma mais clara e significativa. Isso não só melhora a acessibilidade para usuários com leitores de tela e motores de busca, mas também tornar o código mais compreensível para outros desenvolvedores, seguindo boas práticas.',
        pic: '../assets/images/html5.webp', likes: 1,
        doc: 'https://developer.mozilla.org/pt-BR/docs/Web/HTML'
      },
      {
        id: 2,
        name: 'CSS3',
        description: 'Com recursos como gradientes, sombras, transições e transformações, posso adicionar camadas de profundidade e interatividade às minhas páginas da web, elevando a experiência do usuário para um novo patamar. Além disso, o CSS3 facilita a criação de layouts responsivos e flexíveis, adaptando-se perfeitamente a diferentes tamanhos de tela e dispositivos. ',
        pic: '../assets/images/css3.webp',
        likes: 1,
        doc: 'https://developer.mozilla.org/pt-BR/docs/Web/CSS'
      },
      {
        id: 3,
        name: 'Javascript',
        description: 'Com o poderoso Javascript, fechamos a tríade do front-end, com ele, posso adicionar funcionalidades avançadas e responder às interações dos usuários em tempo real. Sempre busco aplicar boas práticas de codificação e aderir aos padrões modernos, garantindo desempenho e acessibilidade. ',
        pic: '../assets/images/javascript.webp',
        likes: 1,
        doc: 'https://developer.mozilla.org/pt-BR/docs/Web/JavaScript'
      },
      {
        id: 4,
        name: 'Typescript',
        description: 'Com o superset do Javascript, Typescript, trabalho todos os dias realizando requisições a APIs, manipulando dados, implementando funcionalidades, tipando dados, confesso que possuo mais facilidade de desenvolvimento com ele do que com o próprio JS, devido sua sintaxe mais amigável.',
        pic: '../assets/images/typescript.webp',
        likes: 1,
        doc: 'https://www.typescriptlang.org/pt/docs/'
      },
      {
        id: 5,
        name: 'Angular',
        description: 'Comecei trabalhar com Angular a partir da versão 14, atendendo as demandas atualmente com Angular na versão 17 sigo acompanhando as melhorias já de olho na nova atualização para a versão 18, procurando sempre manter-me atualizada no principal framework front-end que uso no dia a dia.',
        pic: '../assets/images/angular.webp',
        likes: 1,
        doc: 'https://angular.dev/overview'
      },
      {
        id: 6,
        name: 'TailwindCSS',
        description: 'Principal framework de estilo que trabalho, tornou-se um forte aliado, com ele substituio quase que 100% o uso de classes escritas em CSS externas ou inline.',
        pic: '../assets/images/tailwind.webp',
        likes: 1,
        doc: 'https://tailwindcss.com/'
      },
      {
        id: 7,
        name: 'PrimeNG',
        description: 'Similar ao Angular Material, o PrimeNG é uma biblioteca de componentes prontos, estilizados, com diversas funcionalidades que facilitam o desenvolvimento, ultilizo bastante inputs com máscaras para formatação, dropdowns, carousel entre outros.',
        pic: '../assets/images/primeng.webp',
        likes: 1,
        doc: 'https://primeng.org/'
      },
      {
        id: 8,
        name: 'Sass',
        description: 'Com o Sass, aprimoro a escrita e produtividade do CSS, além da sintaxe mais organizada e de fácil compreensão.',
        pic: '../assets/images/sass.webp',
        likes: 1,
        doc: 'https://sass-lang.com/documentation/'
      },
      {
        id: 9,
        name: 'Figma',
        description: 'O Figma é minha ferramenta principal para criar layouts de interface de usuário. Utilizo-o principalmente para a leitura e interpretação de layouts existentes. Com sua interface intuitiva, posso facilmente analisar e compreender os designs existentes, examinando a disposição dos elementos, hierarquia visual e interações.',
        pic: '../assets/images/figma.webp',
        likes: 1,
        doc: 'https://www.figma.com/community/plugin/991866272578143756/figma-docs'
      }

    ] */

    let skills = [
      {
        id: 1,
        name: 'HTML5',
        description: 'Ao utilizar tags semânticas como <header>, <nav>, <main> e <footer>, posso estruturar meu conteúdo de forma mais clara e significativa. Isso não só melhora a acessibilidade para usuários com leitores de tela e motores de busca, mas também tornar o código mais compreensível para outros desenvolvedores, seguindo boas práticas.',
        pic: '../assets/images/html5.webp', likes: 1,
        doc: 'https://developer.mozilla.org/pt-BR/docs/Web/HTML',
        type: 'F'
      },
      {
        id: 2,
        name: 'CSS3',
        description: 'Com recursos como gradientes, sombras, transições e transformações, posso adicionar camadas de profundidade e interatividade às minhas páginas da web, elevando a experiência do usuário para um novo patamar. Além disso, o CSS3 facilita a criação de layouts responsivos e flexíveis, adaptando-se perfeitamente a diferentes tamanhos de tela e dispositivos. ',
        pic: '../assets/images/css3.webp',
        likes: 1,
        doc: 'https://developer.mozilla.org/pt-BR/docs/Web/CSS',
        type: 'F'

      },
      {
        id: 3,
        name: 'Javascript',
        description: 'Com o poderoso Javascript, fechamos a tríade do front-end, com ele, posso adicionar funcionalidades avançadas e responder às interações dos usuários em tempo real. Sempre busco aplicar boas práticas de codificação e aderir aos padrões modernos, garantindo desempenho e acessibilidade. ',
        pic: '../assets/images/javascript.webp',
        likes: 1,
        doc: 'https://developer.mozilla.org/pt-BR/docs/Web/JavaScript',
        type: 'F'

      },
      {
        id: 4,
        name: 'Typescript',
        description: 'Com o superset do Javascript, Typescript, trabalho todos os dias realizando requisições a APIs, manipulando dados, implementando funcionalidades, tipando dados, confesso que possuo mais facilidade de desenvolvimento com ele do que com o próprio JS, devido sua sintaxe mais amigável.',
        pic: '../assets/images/typescript.webp',
        likes: 1,
        doc: 'https://www.typescriptlang.org/pt/docs/',
        type: 'F'

      },
      {
        id: 5,
        name: 'Angular',
        description: 'Comecei trabalhar com Angular a partir da versão 14, atendendo as demandas atualmente com Angular na versão 17 sigo acompanhando as melhorias já de olho na nova atualização para a versão 18, procurando sempre manter-me atualizada no principal framework front-end que uso no dia a dia.',
        pic: '../assets/images/angular.webp',
        likes: 1,
        doc: 'https://angular.dev/overview',
        type: 'F'

      },
      {
        id: 6,
        name: 'TailwindCSS',
        description: 'Principal framework de estilo que trabalho, tornou-se um forte aliado, com ele substituio quase que 100% o uso de classes escritas em CSS externas ou inline. Agora com o recurso de PurgeCSS integrado, considera no build apenas as classes utilizadas na implementação, contribuindo muito na otimização do proejto.',
        pic: '../assets/images/tailwind.webp',
        likes: 1,
        doc: 'https://tailwindcss.com/',
        type: 'F'

      },
      {
        id: 7,
        name: 'Bootstrap',
        description: 'Primeiro framework de estilo que trabalhei, o mesmo facilitou a implementação de elementos usando classes de estilos prontas, utilizar classes flex e seu alinhamentos, atualmente não trabalho ativamente com ele mas para recaptular seu uso seria simples por sua documentação bem clara.',
        pic: '../assets/images/bootstrap.webp',
        likes: 1,
        doc: 'https://getbootstrap.com/docs/5.3/getting-started/introduction/',
        type: 'F'

      },
      {
        id: 8,
        name: 'PrimeNG',
        description: 'Similar ao Angular Material, o PrimeNG é uma biblioteca de componentes prontos, estilizados, com diversas funcionalidades que facilitam o desenvolvimento, ultilizo bastante inputs com máscaras para formatação, dropdowns, carousel de imagens de banners e cards de produtos.',
        pic: '../assets/images/primeng.webp',
        likes: 1,
        doc: 'https://primeng.org/',
        type: 'F'

      },
      {
        id: 9,
        name: 'Sass',
        description: 'Com o Sass, aprimoro a escrita e produtividade do CSS, além da sintaxe mais organizada e de fácil compreensão.',
        pic: '../assets/images/sass.webp',
        likes: 1,
        doc: 'https://sass-lang.com/documentation/',
        type: 'F'

      },
      {
        id: 10,
        name: 'Node.js',
        description: 'Iniciei os primeiros passos em back-end com o Node.Js desenvolvendo API com Express, criação de rotas e validações de dados em get, put, patch, delete.',
        pic: '../assets/images/nodejs.webp',
        likes: 1,
        doc: 'https://nodejs.org/docs/latest/api/',
        type: 'B'

      },
      {
        id: 11,
        name: 'SQL/NoSQL',
        description: 'O inicio do meu aprendizado na área de desenvolvimento, tudo começou com SQL, através dele me apaixonei por saber em como funcionava os sistemas de software. Possuo conhecimentos básicos de consulta e manipulação de dados.',
        pic: '../assets/images/sql.webp',
        likes: 1,
        doc: 'https://www.w3schools.com/sql/',
        type: 'B'

      },
      {
        id: 12,
        name: 'MySQL',
        description: 'Primeiro gerenciador de banco de dados que utilizei, reforçou bastante meu aprendizado de SQL inicialmente.',
        pic: '../assets/images/mysql.webp',
        likes: 1,
        doc: 'https://dev.mysql.com/doc/',
        type: 'B'

      },
      {
        id: 13,
        name: 'MongoDB',
        description: 'Acompanhado do Node.js, tenho estudado o back-end com o MongoDB, realizando criação e manipulação de dados em tabela. Inicialmente para facilitar meus estudos, utilizo o (GUI) MongoDB Compass',
        pic: '../assets/images/mongodb.webp',
        likes: 1,
        doc: 'https://www.mongodb.com/docs/',
        type: 'B'

      },
      {
        id: 14,
        name: 'Postman',
        description: 'Utilizo o Postman no dia a dia para consulta de documentação da APIs que consumo nos projetos que dou andamento. Desde o inicio dos estudos com Node.js, utilizo para teste de requisições das rotas que implemento com o Express.',
        pic: '../assets/images/postman.webp',
        likes: 1,
        doc: 'https://learning.postman.com/docs/introduction/overview/',
        type: 'B'

      }
    ]


    return { skills };


  }
}

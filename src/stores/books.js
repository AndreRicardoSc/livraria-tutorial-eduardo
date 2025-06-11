import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useBookStore = defineStore('books', () => {
  const books = ref([
    {
      id: 1,
      title: 'Comigo na livraria',
      cover: '/covers/comigo-na-livraria.png',
      price: 23.24,
      author: 'Martha Medeiros',
      sinopse: 'A sinopse de "Comigo na Livraria" de Martha Medeiros convida o leitor a uma jornada literária através das crônicas da autora, que, apaixonada pela leitura, reflete sobre a vida, seus momentos e suas questões, utilizando os livros como ponto de partida para suas reflexões. A obra é uma mistura de crônicas divertidas e bem-humoradas, que abordam desde experiências da autora enquanto escritora até reflexões sobre conflitos geracionais, instituições sociais, sexo e morte. A autora, que se considera livro-dependente, busca compartilhar essa paixão com os leitores, explorando as provocações que os livros trazem para sua vida. ',
    },
    {
      id: 2,
      title: 'Quincas Borba',
      cover: '/covers/quincas-borba.png',
      price: 23.24,
      author: 'Machado de Assis',
      sinopse: '"Quincas Borba", de Machado de Assis, narra a história de Rubião, um professor de Barbacena que herda a fortuna de Quincas Borba, um filósofo exótico. Rubião, ingênuo e pacato, muda-se para o Rio de Janeiro e se envolve com o casal Palha, que o explora financeiramente e emocionalmente. A narrativa explora a ascensão e queda de Rubião, a crítica à sociedade da época e a ironia presente nas relações humanas. ',
    },
    {
      id: 3,
      title: 'A livraria',
      cover: '/covers/a-livraria.png',
      price: 13.94,
      author: 'Penelope Fitzgerald',
      sinopse: 'A sinopse de "A Livraria", de Penelope Fitzgerald, conta a história de Florence Green, uma viúva que decide abrir uma livraria em Hardborough, uma pequena cidade costeira na Inglaterra, no início dos anos 1950. A iniciativa de Florence, que visa trazer cultura e conhecimento para a comunidade, é fortemente contestada pela influente Violet Gamart, que tem outros planos para a propriedade. A história acompanha a luta de Florence contra a oposição local, a resistência aos hábitos estabelecidos, e a busca por um lugar de destaque em um mundo que não a considera. ',
    },
    {
      id: 4,
      title: 'A hora da estrela',
      cover: '/covers/a-hora-da-estrela.png',
      price: 16.84,
      author: 'Clarice Lispector',
      sinopse: '"A Hora da Estrela", de Clarice Lispector, narra a história de Macabéa, uma jovem nordestina simples e ingênua, que se muda para o Rio de Janeiro após a morte da tia. Ela trabalha como datilógrafa, leva uma vida monótona e solitária, e se apaixona por Olímpico, um homem que a trai com uma colega. A narrativa é intercalada com as reflexões do narrador, Rodrigo S. M., que também é um personagem do livro, sobre a vida de Macabéa e a busca pelo significado da vida. O livro aborda temas como marginalização, solidão, alienação e a crítica à indiferença do mundo em relação aos invisíveis. ',
    },
    {
      id: 5,
      title: 'O alienista',
      cover: '/covers/o-alienista.png',
      price: 266.92,
      author: 'Machado de Assis',
      sinopse: '"O Alienista", de Machado de Assis, conta a história de Simão Bacamarte, um médico que, após retornar à sua cidade natal, Itaguaí, decide dedicar-se ao estudo da mente humana, construindo um hospício que ele chama de "Casa Verde". A narrativa explora a linha tênue entre sanidade e loucura, a partir da obsessão do médico em internar todos os habitantes da cidade, que ele considera "alienados". ',
    },
    {
      id: 6,
      title: 'Mar morto',
      cover: '/covers/mar-morto.png',
      price: 13.95,
      author: 'Jorge Amado',
      sinopse: '"Mar Morto", de Jorge Amado, é um romance que retrata a vida dos marinheiros e pescadores no cais de Salvador, Bahia, com foco no destino inevitável de muitos homens que vão para o mar e jamais retornam, consumidos por Iemanjá. A história acompanha personagens como Guma, um jovem mestre de saveiro, e sua amada Lívia, que luta para libertá-lo do chamado do mar. O romance também explora o papel das mulheres no mundo marítimo, suas esperanças, medos e resignação diante da dureza da vida. ',
    },
    {
      id: 7,
      title: 'Grande sertão',
      cover: '/covers/grande-sertao-veredas.png',
      price: 26.04,
      author: 'Guimarães Rosa',
      sinopse: '"Grande Sertão: Veredas" de Guimarães Rosa é um romance épico que narra a vida de Riobaldo, um jagunço que se torna fazendeiro, através de uma extensa reflexão sobre a vida, a guerra, a morte, o amor e a busca pela verdade. A narrativa é marcada por uma linguagem rica, regionalismos e uma exploração profunda da alma humana, com destaque para a relação de Riobaldo com Diadorim, um personagem misterioso que se revela ser uma mulher disfarçada de homem. ',
    },
    {
      id: 8,
      title: 'Flor de poemas',
      cover: '/covers/flor-de-poema.png',
      price: 15.81,
      author: 'Cecília Meireles',
      sinopse: '"Flor de Poemas" é uma antologia que reúne o melhor da poesia de Cecília Meireles, selecionada por Paulo Mendes Campos. A obra apresenta a diversidade da poesia de Cecília, desde os versos mais introspectivos até os de natureza mais universal, abordando temas como amor, efemeridade e saudade. ',
    },
  ]);

  return { books }; 
});

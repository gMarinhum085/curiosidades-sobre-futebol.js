const add = document.getElementById('champions_l')
const form = document.getElementById('form')

const copa = document.getElementById('copa')

const bola = document.getElementById('bola')

add.addEventListener('click', (ev) =>{
    ev.preventDefault()

    const ul = document.getElementById('evento')
    const br = document.createElement('br')

    const evento = document.createElement('ul')

    const oQueE = document.createElement('h3')
    oQueE.innerText='O que é Champions ?'
    oQueE.id='champ'

    const championsLeague = document.createElement("img")
    championsLeague.setAttribute('src', './src/img/championsLeague.jpg')
    championsLeague.setAttribute('alt', 'na');
    championsLeague.setAttribute('width', '600px');

    const eUma =  document.createElement('p')
    eUma.innerText = 'É uma competição que ocorre todo ano entre clubes da Europa. No total são 32 times com 7 grupos para iniciar, dos 7 grupos só passam dois de cada grupo, e eles vão para a oitavas, quarta, semi e por fim a final. Todas essas fases tem dois jogos (ida e volta), um na casa de um time e no outro no time adiversário'


    const h3 = document.createElement('h3')
    h3.innerText = 'Ano | Vencedor | Vice | Placar | Local '


    const real1956 = document.createElement('li')
    real1956.innerText = '1956 | Real Madrid FC | Stade de Reims | 4x3 para o Real | Parc des princes,França '

    const real1957 = document.createElement('li')
    real1957.innerText = '1957 | Real Madrid FC | Fiorentina | 2x0 para o Real Madrid | Santiago Bernabéu, Espanha'

    const real1958 = document.createElement('li')
    real1958.innerText = '1958 | Real Madrid FC | AC Milan | 3x2 para o Real Madrid | Hyesel, Bélgica '

    const real1959 = document.createElement('li')
    real1959.innerText = '1959 | Real Madrid FC | Stade de Reims  | 2x0 para o Real Madrid | Mercedes Benz Arena, Alemamha'

    const real1960 = document.createElement('li')
    real1960.innerText = '1960 | Real Madrid FC | Eintracht Frankfurt | 7x3 para o Real Madrid | Hampden Park,Escócia '

    const benfica1961 = document.createElement('li')
    benfica1961.innerText = '1961 | Benfica FC | Barcelona FC | 3x2  para o Benfica | Wankdorf Stadium, Suíça'

    const benfica1962 = document.createElement('li')
    benfica1962.innerText = '1962 | Benfica FC | Real Madrid FC | 5x3  para o Benfica | Wankdorf Stadium, Suíça'

    const milan1963 = document.createElement('li')
    milan1963.innerText = '1963 | AC Milan | Benfica FC | 2x1  para o Milan | Estádio de Wenmbley, Inglaterra'

    const inter1964 = document.createElement
    ('li')
    inter1964.innerText = '1964 | Internacionale Milano | Real Madrid | 3x1  para o Inter | Enst-Happel-Stadion, Áustria'

    const inter1965 = document.createElement
    ('li')
    inter1965.innerText = '1965 | Internacionale Milano | Benfica FC | 1x0  para o Inter | Estadio Giuseppe, Italia'

    const inter1966 = document.createElement
    ('li')
    inter1966.innerText = '1966 | Real Madrid | Fudbalski Klub Partizan | 2x1  para o Real | Estadio Rei Bauduino, Belgica'

    const inter1967 = document.createElement
    ('li')
    inter1967.innerText = '1967 | Celtic FC | Inter Milano | 2x1  para o Celtic | Estadio Nacional de Lisboa, Portugal'

    const inter1968 = document.createElement
    ('li')
    inter1968.innerText = '1968 | Manchester United | Benfica FC | 4x1  para o Manchester | Santiago Bernabéu, Espanha'

    const inter1969 = document.createElement
    ('li')
    inter1969.innerText = '1969 | AC Milan | FC Ajax | 4x1  para o Milan | Santiago Bernabéu, Espanha'

    const inter1970 = document.createElement
    ('li')
    inter1970.innerText = '1970 | Feyenord Rotterdan | Celtic FC | 2x1  para o Feyenoord | Santiago Bernabéu, Espanha'

    const inter1971 = document.createElement
    ('li')
    inter1971.innerText = '1971 | Amsterdamsche FC Ajax | Panathinaikos FC | 2x0  para o Ajax | Estadio de Wembley, Inglaterra'

    const inter1972 = document.createElement
    ('li')
    inter1972.innerText = '1972 | Amsterdamsche FC Ajax | Inter Milano | 2x0  para o Ajax | Feynoord Stadium, Paises Baixos'

    const inter1973 = document.createElement
    ('li')
    inter1973.innerText = '1973 | Amsterdamsche FC Ajax | Juventus FC | 1x0  para o Ajax | Rajko Mitic Stadium, Sérvia'

    const inter1974 = document.createElement
    ('li')
    inter1974.innerText = '1974 | FC Bayern München | Atletico de Madrid | 4x0  para o Bayern | Estadio Rei Bauduino, Belgica'

    const inter1975 = document.createElement
    ('li')
    inter1975.innerText = '1975 | FC Bayern München | Leeds United FC | 2x0  para o Bayern | Parc des Princes, França'

    const inter1976 = document.createElement
    ('li')
    inter1976.innerText = '1976 | FC Bayern München | Saint Etienne FC | 1x0  para o Bayern | Hampden Park, Escocia'

    const inter1977 = document.createElement
    ('li')
    inter1977.innerText = '1977 | Liverpool FC | Borussia Mönchengladbach | 3x1  para o Liverpool | Estadio de Wembley, Inglaterra'

    const inter1978 = document.createElement
    ('li')
    inter1978.innerText = '1978 | Liverpool FC | Club Brugge  | 1x0  para o Liverpool | Estadio de Wembley, Inglaterra'

    const inter1979 = document.createElement
    ('li')
    inter1979.innerText = '1979 | Nottingham Fotest FC | Malmö FF | 1x0  para o Forest | Estadio Olimpico de Munique, Alemanha'

    const inter1980 = document.createElement
    ('li')
    inter1980.innerText = '1980 | Nottingham Fotest FC | Hamburguer Sport-Verein | 1x0  para o Forest | Parc des Princes'

    const inter1981 = document.createElement
    ('li')
    inter1981.innerText = '1981 | Liverpool FC | Real Madrid FC | 1x0  para o Liverpool | Parc des Princes'

    const inter1982 = document.createElement
    ('li')
    inter1982.innerText = '1982 | Aston Villa FC | FC Bayern München | 1x0  para o Aston Villa | Feynoord Stadium, Paises Baixos'

    const inter1983 = document.createElement
    ('li')
    inter1983.innerText = '1983 | Hamburguer Sport-Verein | Juventus FC | 1x0  para o Hamburguer | Estadio Olimpico de Atenas'

    const inter1984 = document.createElement
    ('li')
    inter1984.innerText = '1984 | Liverpool FC | Associazone Sportiva Roma | 1x1(4x2 penaltis) | Estadio Olimpico de Roma'

    const inter1985 = document.createElement
    ('li')
    inter1985.innerText = '1985 | Ajax | AC Milan| 1x0 para o Ajax | Ernsr-Happel-Stadion, Austria'

    const inter1986 = document.createElement
    ('li')
    inter1986.innerText = '1986 | FC Steau Bacuresti | Barcelona FC | 0x0(2x0 penaltis) | Estadio Ramón Sanchez Pizjuán, Espanha'

    const inter1987 = document.createElement
    ('li')
    inter1987.innerText = '1987 | FC Porto | FC Bayern München | 2x1 para o Porto | Ernsr-Happel-Stadion, Austria'

    const inter1988 = document.createElement
    ('li')
    inter1988.innerText = '1988 | Philips Sport Verening | Benfica FC | 0x0( 6x5 penaltis) | Mercedes Benz Arena, Alemanha'

    const inter1989 = document.createElement
    ('li')
    inter1989.innerText = '1989 | AC Milan | FC Steau Bacuresti | 4x0 para o Milan | Camp Nou, Barcelona'

    const inter1990 = document.createElement
    ('li')
    inter1990.innerText = '1990 | AC Milan | Bemfica FC | 1x0 para o Milan | Ernsr-Happel-Stadion, Austria'

    const inter1991 = document.createElement
    ('li')
    inter1991.innerText = '1991 | Fudbalski Klub Crvena Zvezda | Olympique Marseille FC | 0x0( 5x3 penaltis) | Estadio San Nicola, Italia'

    const inter1992 = document.createElement
    ('li')
    inter1992.innerText = '1992 | Barcelona FC | Unione Calcio Sampdoria | 1x0 para o Barcelona | Estadio de Wembley, Inglaterra'

    const inter1993 = document.createElement
    ('li')
    inter1993.innerText = '1993 | Olympique Marseille FC | AC Milan | 1x0 para Marseille | Estadio Olimpico de Munique, Alemanha'

    const inter1994 = document.createElement
    ('li')
    inter1994.innerText = '1994 | AC Milan | Barcelona FC | 4x0 para o Milan | Estadio Olimpico de Atenas, Grecia'

    const inter1995 = document.createElement
    ('li')
    inter1995.innerText = '1995 | Ajax | AC Milan| 1x0 para o Ajax | Ernsr-Happel-Stadion, Austria'

     const inter1996 = document.createElement
    ('li')
    inter1996.innerText = '1996 | Juventus FC | Ajax | 1x1( 4x2 penaltis) | Estadio Olimpico de Roma'

    const inter1997 = document.createElement
    ('li')
    inter1997.innerText = '1997 | Borussia Dortmund FC | Juventus FC | 3x1 para o Borussia | Amsterdam Arena, Paises Baixos'

    const inter1998 = document.createElement
    ('li')
    inter1998.innerText = '1998 | Real Madrid FC | Juventus FC | 1x0 para o Real | Amsterdam Arena, Paises Baixos'

    const inter1999 = document.createElement
    ('li')
    inter1999.innerText = '1999 | Manchester United | FC Bayern München| 2x1 para o Manchester | Camp Nou, Barcelona'

    const inter2000 = document.createElement
    ('li')
    inter2000.innerText = '2000 | Real Madrid FC | Velencia FC | 3x0 para o Real | Stade de France, França'

    const inter2001 = document.createElement
    ('li')
    inter2001.innerText = '2001 | FC Bayern München | Velencia FC | 1x1(5x4 penaltis) | San Siro, Italia'

    const inter2002 = document.createElement
    ('li')
    inter2002.innerText = '2002 | Real Madrid FC | Bayern Leverkusen FC | 2x1 para o Real | Hampden Park, Escocia'

    const inter2003 = document.createElement
    ('li')
    inter2003.innerText = '2003 | AC Milan | Juventus FC | 0x0(3x2 penaltis) | Estadio Old Trafford, Inglaterra'

    const inter2004 = document.createElement
    ('li')
    inter2004.innerText = '2004 | FC Porto | Association Sportive Monaco FC | 3x0 para o Porto | Arena AufSchalke, Alemanha'

    const inter2005 = document.createElement
    ('li')
    inter2005.innerText = '2005 | Liverpool FC | AC Milan | 3x3(3x2 penaltis) | Estadio Olimpico Atatürk, Turquia'

    const inter2006 = document.createElement
    ('li')
    inter2006.innerText = '2006 | Barcelona FC | Arsenal FC | 2x1 para o Barcelona | State de France, França '

    const inter2007 = document.createElement
    ('li')
    inter2007.innerText = '2007 | AC Milan | Liverpool FC | 2x1 para o Milan | Estadio Olimpico de Atenas '

    const inter2008 = document.createElement
    ('li')
    inter2008.innerText = '2008 | Manchester United | Chelsea FC | 1x1(6x5 penaltis) | Estadio Luzhniki Stadium, Russia '

    const inter2009 = document.createElement
    ('li')
    inter2009.innerText = '2009 | Barcelona FC | Manchester United | 2x0 para o Barcelona | Estadio Olimpico de Roma'

    const inter2010 = document.createElement
    ('li')
    inter2010.innerText = '2010 | Inter Milano | FC Bayern München | 2x0 para o Inter | Santiago Bernabéu, Espanha'

    const inter2011 = document.createElement
    ('li')
    inter2011.innerText = '2011 | Barcelona FC | Manchester United FC | 3x1 para o Barcelona | Estadio Wembley, Inglaterra'

    const inter2012 = document.createElement
    ('li')
    inter2012.innerText = '2012 | Chelsea | FC Bayern München | 1x1(4x3 penaltis) | Arena München Alemanha'

    const inter2013 = document.createElement
    ('li')
    inter2013.innerText = '2013 | FC Bayern München | Borussia Dortmund | 2x1 para o Bayern | Estadio Wembley Inglaterra'

    const inter2014 = document.createElement
    ('li')
    inter2014.innerText = '2014 | Real Madrid FC | Atletico de Madrid | 4x1 para o Real | Estadio Luz, Portugal'

    const inter2015 = document.createElement
    ('li')
    inter2015.innerText = '2015 | Barcelona FC | Juventus FC | 3x1 para o Barcelona | Estadio Giuseppe Maezza, Italia'

    const inter2016 = document.createElement
    ('li')
    inter2016.innerText = '2016 | Real Madrid FC | Atletico de Madrid | 1x1(5x3 penaltis) | San Siro, Italia'

    const inter2017 = document.createElement
    ('li')
    inter2017.innerText = '2017 | Real Madrid FC | Juventus FC | 4x1 para o Real Madrid | Estadio Nacional de Gales, Pais de Gales'

    const inter2018 = document.createElement
    ('li')
    inter2018.innerText = '2018 | Real Madrid FC | Liverpool FC | 3x1 para o Real Madrid | Estadio Olímpico de Kiev, Ucrânia'

    const inter2019 = document.createElement
    ('li')
    inter2019.innerText = '2019 | Liverpool FC | Tottenham Hospur FC | 2x0 para o Liverpool | Estadio Civitas Matropolitano, Espanha'

    const inter2020 = document.createElement
    ('li')
    inter2020.innerText = '2020 | FC Bayern München | Paris Saint German(PSG) | 1x0 para o Bayern | Estadio Luz, Portugal'

    const inter2021 = document.createElement
    ('li')
    inter2021.innerText = '2021 | Chelsea FC | Manchester City | 1x0 para o Chelsea |  Estádio do Dragão, Portugal'

    const inter2022 = document.createElement
    ('li')
    inter2022.innerText = '2022 | Real Madrid FC | Liverpool FC | 1x0 para o Real Madrid | Stade de France, França'

    const inter2023 = document.createElement
    ('li')
    inter2023.innerText = '2023 | Manchester City | Inter Milano | 1x0 para o City | Atartuk Olympic Stadium, Turquia'

    const inter2024 = document.createElement
    ('li')
    inter2023.innerText = '2024 |  Real Madrid FC | Burussia Dortmund  | 2x0 para o Real | Estádio de Wembley,Inglaterra'

    const h4 = document.createElement('h4')
    h4.innerText='Maiores vencedores do torneio:'

    const real14 = document.createElement('p')
    real14.innerText ='1. Real Madrid - 14 Títulos (1965,1957,1958,1959,1960,1966,1998,2000,2002,2014,2016,2017,2018, 2022 & 2024)'
    real14.id='maior'

    const realimg = document.createElement("img")
    realimg.setAttribute('src', './src/img/realmadrid.jpg')
    realimg.setAttribute('alt', 'na');
    realimg.setAttribute('width', '600px');

    const milan7 = document.createElement('p')
    milan7.innerText='2. Milan - 7 Títulos (1963,1969,1989,1990,1994,2003 & 2007)'
    milan7.id='maior'

    const milanimg = document.createElement("img")
    milanimg.setAttribute('src', './src/img/milan.jpg')
    milanimg.setAttribute('alt', 'na');
    milanimg.setAttribute('width', '600px');

    const liver6=document.createElement('p')
    liver6.innerText='3. Liverpool - 6 Títulos (1977,1978,1981,1984,2005 & 2019)'
    liver6.id='maior'

    const liverimg = document.createElement("img")
    liverimg.setAttribute('src', './src/img/liverpool.jpg')
    liverimg.setAttribute('alt', 'na');
    liverimg.setAttribute('width', '600px');

    const bay4=document.createElement('p')
    bay4.innerText='4. Bayern - 6 Títulos (1974,1975,1976,2001,2013 & 2020)'
    bay4.id='maior'

    const bayimg = document.createElement("img")
    bayimg.setAttribute('src', './src/img/bayern.jpg')
    bayimg.setAttribute('alt', 'na');
    bayimg.setAttribute('width', '600px');

    const barca5=document.createElement('p')
    barca5.innerText='5. Barcelona - 5 Títulos (1992,2006,2009,2011 & 2015)'
    barca5.id='maior'

    const barcaimg = document.createElement("img")
    barcaimg.setAttribute('src', './src/img/barca.jpg')
    barcaimg.setAttribute('alt', 'na');
    barcaimg.setAttribute('width', '600px');

    const ajax4=document.createElement('p')
    ajax4.innerText='6. Ajax - 4 Títulos (1971,1972,1973 & 1995)'
    ajax4.id='maior'

    const ajaximg = document.createElement("img")
    ajaximg.setAttribute('src', './src/img/ajax.jpg')
    ajaximg.setAttribute('alt', 'na');
    ajaximg.setAttribute('width', '600px');

    const remove = document.createElement('button')
    remove.innerText = 'Remover'

    evento.append(oQueE,championsLeague,eUma,h3,real1956,real1957,real1958,real1959,real1960,benfica1961,benfica1962,milan1963,inter1964,inter1965,inter1966,inter1967,inter1968,inter1970,inter1971,inter1972,inter1973,inter1974,inter1975,inter1976,inter1977,inter1978,inter1979,inter1980,inter1981,inter1982,inter1983,inter1984,inter1985,inter1986,inter1987,inter1988,inter1989,inter1990,inter1991,inter1992,inter1993,inter1994,inter1995,inter1996,inter1997,inter1998,inter1999,inter2000,inter2001,inter2002,inter2003,inter2004,inter2005,inter2006,inter2007,inter2008,inter2009,inter2010,inter2011,inter2012,inter2013,inter2014,inter2015,inter2016,inter2017,inter2018,inter2019,inter2020,inter2021,inter2022,inter2023,h4,real14,realimg,milan7,milanimg,liver6,liverimg,bay4,bayimg,barca5,barcaimg,ajax4,ajaximg,br,remove)
    form.appendChild(evento)
    ul.appendChild(form)


    remove.addEventListener('click', (ev) =>{
        ev.preventDefault()
        ul.removeChild(form)
    })
})


copa.addEventListener('click', (ev) =>{
    ev.preventDefault()

    const br = document.createElement('br')
    const ul = document.getElementById('evento')
    const evento = document.createElement('ul')

    const historia = document.createElement('h3')
    historia.innerText='Historia da Copa do Mundo'

    const p1 = document.createElement('p')
    p1.innerText='Você sabe qual é a história da maior competição de seleções de futebol do mundo? Se não, vamos aprender agora!'

    const p2=document.createElement('p')
    p2.innerText='A história da Copa do Mundo de futebol começa em 1928 quando o francês Jules Rimet assume o comando da Federação Internacional de Futebol (FIFA) e começa a organizar a primeira competição de futebol mundial. A estreia do evento aconteceu em 1930 no Uruguai e contou com a participação de 13 seleções convidadas.'

    const campeoes=document.createElement('h3')
    campeoes.innerText='Maiores Campeões'

    const brasil = document.createElement('p')
    brasil.innerText='1. Brasil(5 Títulos)'

    const brasilimg = document.createElement("img")
    brasilimg.setAttribute('src', './src/img/brasil.jpg')
    brasilimg.setAttribute('alt', 'na');
    brasilimg.setAttribute('width', '400px');


    const alemanha = document.createElement('p')
    alemanha.innerText='2. Alemanha(4 Títulos)'

    const alemanhaimg = document.createElement("img")
    alemanhaimg.setAttribute('src', './src/img/alemanha.jpg')
    alemanhaimg.setAttribute('alt', 'na');
    alemanhaimg.setAttribute('width', '400px');

    const italia = document.createElement('p')
    italia.innerText='3. Itália(4 Títulos)'

    const italiaimg = document.createElement("img")
    italiaimg.setAttribute('src', './src/img/italia.jpg')
    italiaimg.setAttribute('alt', 'na');
    italiaimg.setAttribute('width', '300px');

    const argentina = document.createElement('p')
    argentina.innerText = '4. Argentina(3 Títulos)'

    const argentinaimg = document.createElement("img")
    argentinaimg.setAttribute('src', './src/img/argentina.jpg')
    argentinaimg.setAttribute('alt', 'na');
    argentinaimg.setAttribute('width', '300px');

    const ultima = document.createElement('h3')
    ultima.innerText='Ultima edição'

    const ed2022 = document.createElement('p')
    ed2022.innerText='A última edição foi em 2022, no Qatar. Nisso foram 32 seleções para o páis, todos jogaram bem, mas um time se sobressaiu mais do que os outros, os nossos vizinhos argentinos foram campeões pra cima da poderosa França. Empataram em 3x3 em 120 minutos de partida e foram para os pênaltis, com o goleiro Dibu Martinez pegando dois pênaltis.'

    const campeaimg = document.createElement("img")
    campeaimg.setAttribute('src', './src/img/campea.jpg')
    campeaimg.setAttribute('alt', 'na');
    campeaimg.setAttribute('width', '500px');

    const selecaoEm = document.createElement('h3')
    selecaoEm.innerText='Seleção brasileira em copas do mundo'

    const camisaimg= document.createElement("img")
    camisaimg.setAttribute('src', './src/img/camisa.jpg')
    camisaimg.setAttribute('alt', 'na');
    camisaimg.setAttribute('width', '400px');

    const nossaSelecao = document.createElement('p')
    nossaSelecao.innerText='A nossa seleção amarela e verde participou de todas as edições já feitas, de 1930 a 2022 eles foram para todas as edições.'

    const em1958 = document.createElement('p')
    em1958.innerText='- 1958 foi o primeiro título da nossa seleção' 

    const em1962 = document.createElement('p')
    em1962.innerText = '- 1962 o Brasil foi bicampeão, ganhamos dois títulos seguidos'

    const naEdicao= document.createElement('p')
    naEdicao.innerText='- Na edição de 1966 caímos na fase de grupos, mas em 1970 voltamos a ganhar, fomos a primeira seleção a ganhar o tri da copa do mundo.'

    const depois = document.createElement('p')
    depois.innerText='- Depois do tri, ficamos 24 anos em jejum de títulos, somente em 1994 nós ganhamos o tetra nos pênaltis contra a Itália'

    const apos = document.createElement('p')
    apos.innerText='- Após o fiasco que foi em 1998, em 2002 chegamos com tudo para poder nos redimir da decepção que foi em 98, em 2002 fomos campeoões pra cima da Alemanha.'

    const artilheiros = document.createElement('h3')
    artilheiros.innerText='Maiores artilheiros do torneio'

    const klose = document.createElement('p')
    klose.innerText='1. Miroslav Klose: 16 gols pela seleção alemã'

    const kloseimg = document.createElement("img")
    kloseimg.setAttribute('src', './src/img/klose.jpg')
    kloseimg.setAttribute('alt', 'na');
    kloseimg.setAttribute('width', '400px');

    const ronaldo = document.createElement('p')
    ronaldo.innerText='2. Ronaldo Fenômeno: 15 gols pela seleção brasileira'

    const ronaldoimg = document.createElement("img")
    ronaldoimg.setAttribute('src', './src/img/ronaldo.jpg')
    ronaldoimg.setAttribute('alt', 'na');
    ronaldoimg.setAttribute('width', '400px');

    const gerd = document.createElement('p')
    gerd.innerText='3. Gerd Müller: 14 gols pela seleção alemã'

    const gerdimg = document.createElement("img")
    gerdimg.setAttribute('src', './src/img/gerd.jpg')
    gerdimg.setAttribute('alt', 'na');
    gerdimg.setAttribute('width', '400px');

    const just = document.createElement('p')
    just.innerText='4. Just Fonstaine: 13 gols pela seleção francesa'

    const justimg = document.createElement("img")
    justimg.setAttribute('src', './src/img/just.jpg')
    justimg.setAttribute('alt', 'na');
    justimg.setAttribute('width', '400px');

    const messi = document.createElement('p')
    messi.innerText='5. Lionel Messi: 13 gols pela seleção'

    const messiimg = document.createElement("img")
    messiimg.setAttribute('src', './src/img/messi.jpg')
    messiimg.setAttribute('alt', 'na');
    messiimg.setAttribute('width', '400px');

    const mbappe = document.createElement('p')
    mbappe.innerText='6. Kilyan Mbappé: 12 gols pela seleção francesa'

    const mbappeimg = document.createElement("img")
    mbappeimg.setAttribute('src', './src/img/mbappe.jpg')
    mbappeimg.setAttribute('alt', 'na');
    mbappeimg.setAttribute('width', '400px');
    
    const pele = document.createElement('p')
    pele.innerText='7. Pelé : 12 gols pela seleção brasileira'

    const peleimg = document.createElement("img")
    peleimg.setAttribute('src', './src/img/pele.jpg')
    peleimg.setAttribute('alt', 'na');
    peleimg.setAttribute('width', '300px');
    
    const jurgen = document.createElement('p')
    jurgen.innerText='8. Jürgen Klinsmann: 11 gols pela seleção alemã'

    const jurgenimg = document.createElement("img")
    jurgenimg.setAttribute('src', './src/img/jurgen.jpg')
    jurgenimg.setAttribute('alt', 'na');
    jurgenimg.setAttribute('width', '300px');
    
    
    const sandor = document.createElement('p')
    sandor.innerText='9. Sandor Kocsis: 10 gols pela seleção hungara'

    const sandorimg = document.createElement("img")
    sandorimg.setAttribute('src', './src/img/sandor.jpg')
    sandorimg.setAttribute('alt', 'na');
    sandorimg.setAttribute('width', '300px');
    
    const gabriel = document.createElement('p')
    gabriel.innerText='10. Gabriel Batistuta: 10 gols pela seleção argentina'

    const gabrielimg = document.createElement("img")
    gabrielimg.setAttribute('src', './src/img/gabriel.jpg')
    gabrielimg.setAttribute('alt', 'na');
    gabrielimg.setAttribute('width', '300px');
    

    const remove = document.createElement('button')
    remove.innerText='Remover'

    evento.append(historia,p1,p2,campeoes,brasil,brasilimg,alemanha,alemanhaimg,italia,italiaimg,argentina,argentinaimg,ultima,ed2022,campeaimg,selecaoEm,camisaimg,nossaSelecao,em1958,em1962,naEdicao,depois,apos,artilheiros,klose,kloseimg,ronaldo,ronaldoimg,gerd,gerdimg,just,justimg,messi,messiimg,mbappe,mbappeimg,pele,peleimg,jurgen,jurgenimg,sandor,sandorimg,gabriel,gabrielimg,br,remove)

    form.appendChild(evento)
     ul.appendChild(form)

    remove.addEventListener('click', (ev) =>{
        ev.preventDefault()
        ul.removeChild(form)
    })
})

bola.addEventListener('click', (ev) =>{
  ev.preventDefault()
  
    const br = document.createElement('br')
    const ul = document.getElementById('evento')
    const evento = document.createElement('ul')
    
    const oQueEBolaDeOuro = document.createElement('h3')
    oQueEBolaDeOuro.innerText='O que é Bola de Ouro'
    
    const bolaDeOuro = document.createElement("img")
    bolaDeOuro.setAttribute('src', './src/img/bolaDeOuro.jpg')
    bolaDeOuro.setAttribute('alt', 'na');
    bolaDeOuro.setAttribute('width', '500px');
    
    const p1 = document.createElement('p')
    p1.innerText='Bola de Ouro é o prêmio dado para o melhor jogador ou jogadora do ano. Ou seja, reporteres, capitães de times e seleções, treinadores e comentaristas votam nos 30 melhores jogadores do ano. O mais votado ganha o prêmio.'
    
    const todos = document.createElement('h3')
    todos.innerText='Todos os vencedores'
    
    const infelizmente = document.createElement('p')
    infelizmente.innerText='Infelizmente não teve premiação em 2020 por conta da pandemia do Covid-19'
    
    const ganhador = document.createElement('h3')
    ganhador.innerText='Ganhador | Ano | Time do ganhador | Nacionalidade'
    
    const bola1956 = document.createElement('li')
    bola1956.innerText='Sanley Matthews | 1956 | Blackpool | Inglaterra'
    
    const bola1957 = document.createElement('li')
    bola1957.innerText='Alfredo Di Stefano | 1957 | Real Madrid | Argentina'
    
    const bola1958 = document.createElement('li')
    bola1958.innerText='Raymond Kopa | 1958 | Real Madrid | França'
    
    const bola1959 = document.createElement('li')
    bola1959.innerText='Alfredo Di Stefano | 1959 | Real Madrid | Argentina'
    
    const bola1960= document.createElement('li')
    bola1960.innerText='Luis Suarez | 1960 | Barcelona | Espanha'
    
    const bola1961= document.createElement('li')
    bola1961.innerText='Omar Sivori | 1961 | Juventus | Italia'
    
    const bola1962 = document.createElement('li')
    bola1962.innerText='Josef Masopust | 1962 | Dukla Praque | Tchecoslováquia'
    
    const bola1963= document.createElement('li')
    bola1963.innerText=' Lev Yashin    | 1963 | Dynamo Moscou | União Soviética '
    
    const bola1964 = document.createElement('li')
    bola1964.innerText='Denis Law | 1964 | Manchester United | Inglaterra'
    
    const bola1965 = document.createElement('li')
    bola1965.innerText='Eusébio | 1965 | Benfica | Portugal'
    
    const bola1966 = document.createElement('li')
    bola1966.innerText='Bobby Charlton | 1966 | Manchester United | Inglaterra'
    
    const bola1967 = document.createElement('li')
    bola1967.innerText='Florian Albert | 1967 | Ferencvaros | Hungria'
    
    const bola1968 = document.createElement('li')
    bola1968.innerText='George Best | 1968 | Manchester United | Irlanda do Norte'
  
    const bola1969 = document.createElement('li')
    bola1969.innerText='Giannia Rivera | 1969 | Milan | Italia'
    
    const bola1970 = document.createElement('li')
    bola1970.innerText='Gerd Muller | 1970 | Bayern de Munique | Alemanha Ocidental'
    
    const bola1971 = document.createElement('li')
    bola1971.innerText='Johan Cruyff | 1971 | Ajax | Holanda'
    
    const bola1972 = document.createElement('li')
    bola1972.innerText='Franz Backenbauer | 1972 | Bayern de Munique| Alemanha Ocidental'
    
    const bola1973 = document.createElement('li')
    bola1973.innerText='Johan Cruyff | 1973 | Barcelona  | Holanda'
    
    const bola1974= document.createElement('li')
    bola1974.innerText='Johan Cruyff | 1974 | Barcelona | Holanda'
    
    const bola1975 = document.createElement('li')
    bola1975.innerText='Oleg Blokhin | 1975 | Dinamo Kiev | União Soviética'
    
    const bola1976 = document.createElement('li')
    bola1976.innerText='Franz Beckenbauer | 1976 | Bayern de Munique | Alemanha Ocidental'
    
  
    const bola1977 = document.createElement('li')
    bola1977.innerText='Allan Simonse | 1977 | Borussia Mönchengladbach | Dinamarca '   
    
    const bola1978 = document.createElement('li')
    bola1978.innerText='Kevin Keegan | 1978 | Hamburgo |  Inglaterra'
    
    const bola1979 = document.createElement('li')
    bola1979.innerText='Kevin Keegan  | 1979 | Hamburgo | Inglaterra '
    
    const bola1980 = document.createElement('li')
    bola1980.innerText='Karl-Heinz Rummeninge   | 1980 | Bayern de Munique | Alemanha Ocidental '
    
    const bola1981 = document.createElement('li')
    bola1981.innerText='Karl-Heinz Rummeninge | 1981 | Bayern de Munique | Alemanha Ocidental '
    
    const bola1982= document.createElement('li')
    bola1982.innerText='Paolo Rossi   | 1982 | Juventus | Italia '
    
    const bola1983 = document.createElement('li')
    bola1983.innerText='Michel Platini | 1983 | Juventus | França '
    
    const bola1984 = document.createElement('li')
    bola1984.innerText='Michel Platini  | 1984 | Juventus | França '
    
    const bola1985 = document.createElement('li')
    bola1985.innerText='Michel Platini | 1985 | Juventus | França '
    
    const bola1986 = document.createElement('li')
    bola1986.innerText='Igor Belanov | 1986 | Dinamo Kiev | União Soviética '
  
    const bola1987 = document.createElement('li')
    bola1987.innerText='Ruud Gullit | 1987 | Milan | Holanda '
    
    const bola1988= document.createElement('li')
    bola1988.innerText='Marco Van Basten  | 1988 | Milan | Holanda '
    
    const bola1989 = document.createElement('li')
    bola1989.innerText='Marco Van Basten  | 1989 | Milan | Holanda '
    
    const bola1990 = document.createElement('li')
    bola1990.innerText='Lothar Matthaus  | 1991 | Inter de Milão | Alemanha Ocidental '
    
    const bola1991= document.createElement('li')
    bola1991.innerText='Jean-Pierre Papin  | 1991 | Marseille | França '
    
    const bola1992= document.createElement('li')
    bola1992.innerText='Marco Van Basten  | 1992 | Milan | Holanda '
    
    const bola1993= document.createElement('li')
    bola1993.innerText='Roberto Baggio  | 1993 | Juventus | Italia '
    
    const bola1994 = document.createElement('li')
    bola1994.innerText='Histo Stoichkov  | 1994 | Barcelona | Bulgária '
    
    const bola1995 = document.createElement('li')
    bola1995.innerText='George Weah  | 1995 | Milan | Libéria '
    
    const bola1996= document.createElement('li')
    bola1996.innerText='Matthias Sammer  | 1996 | Borussia Dortmund | Alemanha '
    
    const bola1997 = document.createElement('li')
    bola1997.innerText='Ronaldo Fenômeno   | 1997 | Inter de Milão | Brasil '
    
    const bola1998 = document.createElement('li')
    bola1998.innerText=' Zinedine Zidane  | 1998 | Juventus | França '
    
    const bola1999 = document.createElement('li')
    bola1999.innerText='Rivaldo   | 1999 | Barcelona | Brasil '
    
    const bola2000 = document.createElement('li')
    bola2000.innerText='Luis Figo   | 2000 | Real Madrid | Portugal '
    
    const bola2001 = document.createElement('li')
    bola2001.innerText=' Michael Owen  | 2001 | Liverpool | Inglaterra '
    
    const bola2002 = document.createElement('li')
    bola2002.innerText=' Ronaldo Fenômeno   | 2002 | Real Madrid | Brasil '
    
    const bola2003 = document.createElement('li')
    bola2003.innerText=' Pavel Nedved   | 2003 | Juventus | Republica Tcheca '
    
    const bola2004 = document.createElement('li')
    bola2004.innerText=' Andry Shevechenko   | 2004 | Milan | Ucrânia '
    
    const bola2005 = document.createElement('li')
    bola2005.innerText='  Ronaldinho Gaúcho  | 2005 | Barcelona | Brasil '
    
    const bola2006 = document.createElement('li')
    bola2006.innerText='  Fabio Cannavaro  | 2006 | Real Madrid | Itália '
    
    const bola2007 = document.createElement('li')
    bola2007.innerText=' Kaká   | 2007 | Milan | Brasil '
    
    const bola2008 = document.createElement('li')
    bola2008.innerText=' Cristiano Ronaldo   | 2008 |  Manchester United | Portugal '
    
    const bola2009 = document.createElement('li')
    bola2009.innerText=' Lionel Messi   | 2009 | Barcelona | Argentina '
    
    const bola2010 = document.createElement('li')
    bola2010.innerText=' Lionel Messi   | 2010 | Barcelona | Argentina '
    
    const bola2011 = document.createElement('li')
    bola2011.innerText=' Lionel Messi   | 2011 | Barcelona | Argentina '
    
    const bola2012 = document.createElement('li')
    bola2012.innerText=' Lionel Messi   | 2012 | Barcelona | Argentina '
    
    const bola2013 = document.createElement('li')
    bola2013.innerText=' Cristiano Ronaldo    | 2013 | Real Madrid | Portugal '
    
    const bola2014 = document.createElement('li')
    bola2014.innerText=' Cristiano Ronaldo    | 2014 | Real Madrid | Portugal '
    
    const bola2015 = document.createElement('li')
    bola2015.innerText=' Lionel Messi   | 2015 | Barcelona | Argentina '
    
    const bola2016 = document.createElement('li')
    bola2016.innerText=' Cristiano Ronaldo    | 2016 | Real Madrid | Portugal '
    
    const bola2017 = document.createElement('li')
    bola2017.innerText=' Lionel Messi   | 2017 | Barcelona | Argentina '
    
    const bola2018 = document.createElement('li')
    bola2018.innerText=' Luka Modric    | 2018 | Real Madrid | Croácia '
    
    const bola2019 = document.createElement('li')
    bola2019.innerText=' Lionel Messi   | 2019 | Barcelona | Argentina '
    
    const bola2021 = document.createElement('li')
    bola2021.innerText=' Lionel Messi   | 2021 | Barcelona | Argentina '
    
    const bola2022 = document.createElement('li')
    bola2022.innerText=' Karim Benzema    | 2022 | Real Madrid | França '
    
    const bola2023 = document.createElement('li')
    bola2023.innerText=' Lionel Messi   | 2023 | Barcelona | Argentina '
    
    const maioresVencedores = document.createElement('h3')
    maioresVencedores.innerText='Os 5 maiores vencedores da bola de ouro'
    
    const messi8 = document.createElement('p')
    messi8.innerText='Lionel Messi - 8 Bolas de Ouro(2009,2010,2011,2012,2015,2019,2021,2023)'
    
    const messiouro = document.createElement("img")
    messiouro.setAttribute('src', './src/img/messiouro.jpg')
    messiouro.setAttribute('alt', 'na');
    messiouro.setAttribute('width', '500px');
    

    const cristiano5 = document.createElement('p')
    cristiano5.innerText='Cristiano Ronaldo  - 5 Bolas de Ouro(2008,2013,2014,2016,2017)'
    
    const cristianoouro = document.createElement("img")
    cristianoouro.setAttribute('src', './src/img/cristianoouro.jpg')
    cristianoouro.setAttribute('alt', 'na');
    cristianoouro.setAttribute('width', '500px');

    const johan3 = document.createElement('p')
    johan3.innerText=' Johan Cruyff  - 3 Bolas de Ouro(1971,1973,1974)'
    
    const johanouro = document.createElement("img")
    johanouro.setAttribute('src', './src/img/johanouro.jpg')
    johanouro.setAttribute('alt', 'na');
    johanouro.setAttribute('width', '500px');

    const michel3 = document.createElement('p')
    michel3.innerText='Michel Platini  - 3 Bolas de Ouro(1983,1984,1985)'
    
    const michelouro = document.createElement("img")
    michelouro.setAttribute('src', './src/img/michelouro.jpg')
    michelouro.setAttribute('alt', 'na');
    michelouro.setAttribute('width', '500px');

    const vanBasten = document.createElement('p')
    vanBasten.innerText='Marco Van Basten  - 3 Bolas de Ouro(1988,1989,1992)'
    
    const vanouro = document.createElement("img")
    vanouro.setAttribute('src', './src/img/vanouro.jpg')
    vanouro.setAttribute('alt', 'na');
    vanouro.setAttribute('width', '300px');

    const remove = document.createElement('button')
    remove.innerText='Remover'
    
    evento.append(oQueEBolaDeOuro,bolaDeOuro,p1,todos,infelizmente,ganhador,bola1956,bola1957,bola1958,bola1959,bola1960,bola1961,bola1962,bola1963,bola1964,bola1965,bola1966,bola1967,bola1968,bola1969,bola1970,bola1971,bola1972,bola1973,bola1974,bola1975,bola1976,bola1977,bola1978,bola1979,bola1980,bola1981,bola1982,bola1983,bola1984,bola1985,bola1986,bola1987,bola1988,bola1989,bola1990,bola1991,bola1992,bola1993,bola1994,bola1995,bola1996,bola1997,bola1998,bola1999,bola2000,bola2001,bola2002,bola2003,bola2004,bola2005,bola2006,bola2007,bola2008,bola2009,bola2010,bola2011,bola2012,bola2013,bola2014,bola2015,bola2016,bola2017,bola2018,bola2019,bola2021,bola2022,bola2023,maioresVencedores,messi8,messiouro,cristiano5,cristianoouro,johan3,johanouro,michel3,michelouro,vanBasten,vanouro,br,remove)
    
    form.appendChild(evento)
     ul.appendChild(form)
     
    remove.addEventListener('click', (ev) =>{
        ev.preventDefault()
        ul.removeChild(form)
    })
})
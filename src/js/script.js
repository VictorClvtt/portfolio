const agora = new Date()
const hora = agora.getHours()

if(hora>5 && hora <=12){
    document.getElementById('saudacao').innerText = 'Bom dia!'
}else if(hora>12 && hora<=18){
    document.getElementById('saudacao').innerText = 'Boa tarde!'
}else{
    document.getElementById('saudacao').innerText = 'Boa noite!'
}

function fechar(id){
    document.getElementById(id).remove()
}

function aboutTech(id) {
    const techs = {
        HTML: {
            imagem: 'https://user-images.githubusercontent.com/25181517/192158954-f88b5814-d510-4564-b285-dff7d6400dad.png',
            descricao: 'Provavelmente uma das tecnologias que tive mais facilidade para entender, mas que não desvalorizo por ser fácil, eu sei que HTML é a base de todos os sites e mesmo sendo fácil não deixo de estudar, procuro sempre entender melhor sobre semântica e tags novas.'
        },
        CSS: {
            imagem: 'https://user-images.githubusercontent.com/25181517/183898674-75a4a1b1-f960-4ea9-abcb-637170a00a75.png',
            descricao: 'Uma tecnologia de extrema importância para qualquer site, também considero muito fácil mas sempre procuro me aprofundar sempre que necessário.'
        },
        JavaScript: {
            imagem: 'https://user-images.githubusercontent.com/25181517/117447155-6a868a00-af3d-11eb-9cfe-245df15c9f3f.png',
            descricao: 'Uma das linguagens de programação que mais conheço e estudo atualmente, de início não gostava de JavaScript por ter muitas palavras reservadas, mas me acostumei, conheço toda a base da linguagem e do DOM.'
        },
        Nodejs: {
            imagem: 'https://user-images.githubusercontent.com/25181517/183568594-85e280a7-0d7e-4d1a-9028-c8c2209e073c.png',
            descricao: 'Node é uma das tecnologias que comecei a estudar mais recentemente por entender que também é importante conhecer o Back-end, estudei um pouco o Node puro, criei módulos e rotas, mas o meu foco foi no Express e Sequelize.'
        },
        Express: {
            imagem: 'https://user-images.githubusercontent.com/25181517/183859966-a3462d8d-1bc7-4880-b353-e2cbed900ed6.png',
            descricao: 'A maior parte do meu estudo em Node na verdade foi focado no Express, que é um framework orientado a rotas, aprendi a criar rotas e enviar tanto simples textos quanto arquivos HTML pelas rotas.'
        },
        Python: {
            imagem: 'https://user-images.githubusercontent.com/25181517/183423507-c056a6f9-1ba8-4312-a350-19bcbc5a8697.png',
            descricao: 'Estudei muito a base da linguagem, mas também fui além disso, ja desenvolvi projetos de automação(Web e Desktop), análise de dados, e até me aventurei a fazer um clone do WhatsApp com o Back-End em Flask.'
        },
        MySQL: {
            imagem: 'https://user-images.githubusercontent.com/25181517/183896128-ec99105a-ec1a-4d85-b08b-1aa1620b2046.png',
            descricao: 'A maior parte do conhecimento que eu tenho em MySQL veio de quando eu comecei a estudar Node, aprendi a manipular e visualizar tabelas na linha de comando e também através de uma aplicação com o Sequelize.'
        },
        Bash: {
            imagem: 'https://user-images.githubusercontent.com/25181517/192158606-7c2ef6bd-6e04-47cf-b5bc-da2797cb5bda.png',
            descricao: 'Como todo bom nerd de computador eu gosto de fazer coisas de uma forma diferente da qual pessoas leigas fazem, principalmente quando estou usando Linux procuro fazer quase tudo pelo terminal, é algo que comecei a fazer por diversão mas com o tempo aprendi o quanto é vantajoso usar um Shell.'
        }
    }

    const techDiv = document.getElementById('tech-div');

    techDiv.id = 'tech-desc'
    document.getElementsByClassName('title-bar-text')[0].innerText = id
    techDiv.innerHTML = `<img src="${techs[id].imagem}"><p>${techs[id].descricao}</p><input type="button" value="<-" onclick="voltar()">`;
}

function voltar(){
    const techDiv = document.getElementById('tech-desc');
    
    techDiv.id = 'tech-div'
    document.getElementsByClassName('title-bar-text')[0].innerText = 'Tecnologias que estudo:'
    techDiv.innerHTML = `<div id="HTML" onclick="aboutTech('HTML')">
    <img src="https://user-images.githubusercontent.com/25181517/192158954-f88b5814-d510-4564-b285-dff7d6400dad.png" alt="HTML" title="HTML"/>    
    <p>HTML</p>
    </div>
    <div id="CSS" onclick="aboutTech('CSS')">
    <img src="https://user-images.githubusercontent.com/25181517/183898674-75a4a1b1-f960-4ea9-abcb-637170a00a75.png" alt="CSS" title="CSS"/>    
    <p>CSS</p>
    </div>
    <div id="JavaScript" onclick="aboutTech('JavaScript')">
    <img src="https://user-images.githubusercontent.com/25181517/117447155-6a868a00-af3d-11eb-9cfe-245df15c9f3f.png" alt="JavaScript" title="JavaScript"/>    
    <p>JavaScript</p>
    </div>
    <div id="Nodejs" onclick="aboutTech('Nodejs')">
    <img src="https://user-images.githubusercontent.com/25181517/183568594-85e280a7-0d7e-4d1a-9028-c8c2209e073c.png" alt="Node.js" title="Node.js"/>    
    <p>Node.js</p>
    </div>
    <div id="Express" onclick="aboutTech('Express')">
    <img src="https://user-images.githubusercontent.com/25181517/183859966-a3462d8d-1bc7-4880-b353-e2cbed900ed6.png" alt="Express" title="Express"/>    
    <p>Express</p>
    </div>
    <div id="Python" onclick="aboutTech('Python')">
    <img src="https://user-images.githubusercontent.com/25181517/183423507-c056a6f9-1ba8-4312-a350-19bcbc5a8697.png" alt="Python" title="Python"/>    
    <p>Python</p>
    </div>
    <div id="MySQL" onclick="aboutTech('MySQL')">
    <img src="https://user-images.githubusercontent.com/25181517/183896128-ec99105a-ec1a-4d85-b08b-1aa1620b2046.png" alt="MySQL" title="MySQL"/>    
    <p>MySQL</p>
    </div>
    <div id="Bash" onclick="aboutTech('Bash')">
    <img src="https://user-images.githubusercontent.com/25181517/192158606-7c2ef6bd-6e04-47cf-b5bc-da2797cb5bda.png" alt="bash" title="bash"/>    
    <p>Bash</p>
    </div>`
}


const url = 'https://raw.githubusercontent.com/guilhermeonrails/api/main/dados-globais.json&#39'

async function visualizarInformacoesGlobais(params) {
    const res = await fetch (url);
    const dados = await res.json ()
    console.log (dados);
    
    }
    visualizarInformacoesGlobais ()
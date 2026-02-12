// plataforma que permita aos usuários 
// organizar seus trechos de código por 
// linguagem, categoria ou tags
let snippets = JSON.parse(localStorage.getItem("snippets")) || []

const salvar = () => localStorage.setItem("snippets", JSON,Stringify(snippets))

const adicionar = (titulo, linguagem, categoria, codigo) => {
    snippets.push({id: Date.now(), titulo, linguagem, categoria, codigo })
    salvar()
}
snippets = [
    { titulo: "for (i of notas)", linguagem: "javascript", tag: "for" }
    { codigo: "lista.push()", linguagem: "javascript", tag: "função" }
];



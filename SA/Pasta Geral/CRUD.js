let userLogin = document.getElementById('loginInp')
let nameUser = document.getElementById('nameInp')
let emailUser = document.getElementById('emailInp')
let senhaUser = document.getElementById('passwordInp')
let confPass = document.getElementById('confPass')
let tituloPerfil = document.getElementById('hello')


let nomeLogin = document.getElementById('login')
let senhaLogin = document.getElementById('password')

let perfilLogin = document.getElementById('perfilLogin')
let nameLogin = document.getElementById('perfilName')
let perfilEmail = document.getElementById('perfilEmail')
let perfilPassword = document.getElementById('perfilPassword')


let vetorUser = []
let logou = 0
let userLogado
let posicaoUser

function Registrar() {

    vetorUser = JSON.parse(localStorage.getItem('userSalvos'))

    if (vetorUser == null) {

        vetorUser = []

        CadastrarUser()

    } else {

        CadastrarUser()

    }

}

function CadastrarUser() {

    let objUser = {

        login: '',
        nome: '',
        email: '',
        senha: '',
        confSenha: ''

    }


    objUser.login = userLogin.value
    objUser.nome = nameUser.value
    objUser.email = emailUser.value
    objUser.senha = senhaUser.value
    objUser.confSenha = confPass.value

    vetorUser.push(objUser)

    localStorage.setItem('userSalvos', JSON.stringify(vetorUser))

    alert("Cadastro efetuado!")
}

function Logar() {

    vetorUser = JSON.parse(localStorage.getItem('userSalvos'))

    for (i = 0; i < vetorUser.length; i++) {

        if (nomeLogin.value == vetorUser[i].login && senhaLogin.value == vetorUser[i].senha) {

            logou = 1

        }
    }

    if (logou == 1) {

        alert('Login Efetuado')

        //  window.location.href = pagina do jogo

        localStorage.setItem('userLogado', (nomeLogin.value))

    } else {

        alert('Login Falhou')

    }

}

function CarregaDados() {

    userLogado = localStorage.getItem('userLogado')

    tituloPerfil.innerHTML = 'Olá : ' + userLogado

    vetorUser = JSON.parse(localStorage.getItem('userSalvos'))

    for (i = 0; i < vetorUser.length; i++) {

        if (userLogado == vetorUser[i].login) {

            posicaoUser = i


        }


    }

    perfilLogin.value = vetorUser[posicaoUser].login
    nameLogin.value = vetorUser[posicaoUser].nome
    perfilEmail.value = vetorUser[posicaoUser].email
    perfilPassword.value = vetorUser[posicaoUser].senha
}


function Salvar() {

    vetorUser[posicaoUser].login = perfilLogin.value
    vetorUser[posicaoUser].nome = perfilName.value
    vetorUser[posicaoUser].email = perfilEmail.value
    vetorUser[posicaoUser].senha = perfilPassword.value

    localStorage.setItem('userSalvos', JSON.stringify(vetorUser))

    tituloPerfil.innerHTML = 'Olá : ' + perfilLogin.value
    localStorage.setItem('userLogado', perfilLogin.value)


    alert("Dados atualizados!")

}
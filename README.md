# Landing Page — [Nome da Turma]




---

## Objetivo

Desenvolver uma Landing Page responsiva que represente a identidade da turma e organize visualmente sua trajetória, contemplando:

* Identidade da turma;
* Apresentação e contexto da turma;
* Integrantes;
* Mural com frases dos alunos;
* Linha do tempo da trajetória acadêmica.

**Protótipo:** https://canva.link/2abenkkb6e54f0a
---

## Stack

* **HTML5** 
* **CSS3** 
* **JavaScript** 
* **Claude** 
* **Git/GitHub** 


---

## Estrutura do Projeto

```text
/
├── index.html
├── css/
│   ├── main.css
│   ├── quem-somos.css
│   ├── integrantes.css
│   ├── mural.css
│   └── timeline.css
├── js/
│   ├── integrantes.js
│   ├── mural.js
│   └── timeline.js
├── images/
│   ├── logo/
│   ├── integrantes/
│   └── geral/
└── README.md
```

### HTML

O projeto utilizará **um único `index.html`**, contendo todas as seções da Landing Page.

Cada equipe deverá trabalhar exclusivamente na estrutura HTML correspondente à sua seção.

### CSS

O arquivo `main.css` será responsável pelos **estilos globais** da aplicação, como:

* Reset;
* Tipografia geral;
* Variáveis;
* Cores;
* Elementos compartilhados;
* Configurações gerais da página.

Cada seção terá seu próprio arquivo CSS para evitar a concentração de estilos em um único arquivo:

* `quem-somos.css`
* `integrantes.css`
* `mural.css`
* `timeline.css`

### JavaScript


Arquivos específicos poderão ser utilizados quando uma seção possuir comportamentos próprios, como:

* `integrantes.js`
* `mural.js`
* `timeline.js`

Não é necessário criar um arquivo JavaScript para uma seção que não possua funcionalidades específicas.

---

## Equipes

O projeto será dividido em cinco equipes, de acordo com as seções da Landing Page.

| Equipe    | Seção                             |                   Integrantes   
| --------- | --------------------------        | ------------------------------------------------|
| Equipe 01 | Identidade da Turma / Quem Somos  | Nicolas, Manoel, Oliver, Mariana, Cauê, Viana   |
| Equipe 02 | Integrantes                       | Rodrigo, Miguel, Érica, Pietro                  |
| Equipe 03 | Mural da Turma                    | Letícia, Joana, Sebastian, Álvaro               |
| Equipe 04 | Linha do tempo                    | André, Giu, Larissa                             |

---

## Seções

### 01. Identidade da Turma

* Espaço para foto, ilustração ou logo;
* Título principal;
* Slogan;
* Identidade visual da turma.

### 02. Quem Somos

* Contexto da formação;
* Características compartilhadas pela turma;
* Momento atual da jornada acadêmica;
* Imagem representativa.

### 03. Integrantes

* Grid responsivo;
* Card individual para cada integrante;
* Foto/avatar circular;
* Nome;
* Idade;
* Breve descrição.
* Botao portifolio


### 04. Mural da Turma

Área visual para apresentar uma frase de cada integrante, representando:

* Aprendizado;
* Expectativas;
* Descobertas;
* Contribuições;
* Experiências.


### 05. Linha do Tempo

Representação visual da trajetória da turma, contemplando:

* Conteúdos estudados;
* Desafios concluídos;
* Experiências;
* Projetos;
* Marcos relevantes da formação.

---

## Git Workflow

O fluxo de desenvolvimento seguirá uma estrutura de **branch por seção**, com branches individuais para cada tarefa:

```text
main
  │
  └── develop
        │
        ├── section/Identidade-Turma
        │     ├── feature/Identidade-Turma-estrutura
        │     ├── feature/Identidade-Turma-estilo
        │     └── feature/Identidade-Turma-responsivo
        │
        ├── section/quem-somos
        │     ├── feature/quem-somos-html
        │     ├── feature/quem-somos-texto
        │     └── feature/quem-somos-css
        │
        ├── section/integrantes
        │     ├── feature/integrantes-cards
        │     ├── feature/integrantes-dados
        │     └── feature/integrantes-responsivo
        │
        ├── section/mural
        │     ├── feature/mural-layout
        │     └── feature/mural-css
        │
        └── section/timeline
              ├── feature/timeline-estrutura
              └── feature/timeline-css
```

### Main

Branch destinada à versão **estável e final** do projeto.

* Não realizar commits diretamente;
* Recebe alterações após revisão;
* Representa a versão pronta para entrega/publicação.

### Develop

Branch destinada à **integração geral do projeto**.

As branches de seção serão criadas a partir dela e, após a conclusão e validação de cada seção, serão integradas novamente à `develop`.

### Branches de Seção

Cada equipe terá uma branch de integração correspondente à sua seção:

```text
section/Identidade-Turma
section/quem-somos
section/integrantes
section/mural
section/timeline
```

A branch de seção será utilizada para reunir e validar as alterações realizadas pelos integrantes daquela equipe antes da integração com a `develop`.

### Branches de Tarefa

Cada integrante deverá criar uma branch própria para a tarefa que estiver realizando, partindo da branch correspondente à sua seção.

Exemplo:

```text
section/quem-somos
        │
        ├── feature/quem-somos-html
        ├── feature/quem-somos-texto
        └── feature/quem-somos-css
```


As branches de tarefa não devem ser criadas a partir da branch de outro integrante. Todas devem partir da **branch correspondente à seção**.

Também não devem ser realizados commits diretamente nas branches de seção, `develop` ou `main`.

Para correções:

```text
fix/timeline-mobile
fix/hero-espacamento
```

Para documentação:

```text
docs/readme
```

---

## Pull Requests

O fluxo para integração será:

```text
Feature Branch
      ↓
Pull Request
      ↓
Section Branch
      ↓
Revisão da Equipe
      ↓
Pull Request
      ↓
develop
      ↓
Revisão / Testes
      ↓
Pull Request
      ↓
main
```

Cada Pull Request deve:

* Ter uma descrição clara da alteração;
* Informar o que foi implementado;
* Ser relacionado à Issue correspondente;
* Passar por revisão antes da integração;
* Ser validado antes de chegar à `develop` ou `main`, conforme o nível de integração.

Alterações estruturais que afetem outras equipes devem ser alinhadas antes de serem realizadas.

---

## Commits

Será utilizado o padrão **Conventional Commits**.

Formato:

```text
<tipo>: <descrição>
```

Tipos principais:

| Tipo       | Utilização                                 |
| ---------- | ------------------------------------------ |
| `feat`     | Nova funcionalidade                        |
| `fix`      | Correção de problema                       |
| `style`    | Alterações visuais/estilização             |
| `refactor` | Refatoração sem alteração de comportamento |
| `docs`     | Documentação                               |
| `chore`    | Configurações e tarefas auxiliares         |

Exemplos:

```text
feat: adiciona estrutura da seção integrantes
style: ajusta grid dos cards
fix: corrige timeline no mobile
docs: atualiza README
refactor: reorganiza estilos do mural
```


---


## Responsividade

A Landing Page deverá funcionar adequadamente em diferentes tamanhos de tela:
Cada equipe é responsável por garantir a responsividade da sua respectiva seção.

---


### Entrega Final

Antes da entrega do projeto, deverá ser verificado:

* Todas as seções implementadas;
* Conteúdos revisados;
* Responsividade;
* Navegação entre as seções;
* Integração entre os códigos das equipes;
* Ausência de conflitos;
* Revisão final do código;
* Publicação da aplicação;
* Versão final disponível na `main`.

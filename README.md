# MVMNTD INC — Página Oficial

Site estático do selo **MVMNTD INC**, gravadora de Trap, Rap, Funk e Drill do Rio de Janeiro.

## Estrutura

```
├── index.html          # Página principal (single page)
├── css/
│   └── style.css       # Estilos (estética drill — preto, branco, vermelho)
├── js/
│   └── main.js         # Interatividade (navbar, filtros, animações)
└── assets/
    └── logo.png        # Logo do selo
```

## Seções

- **Hero** — apresentação com logo e chamada
- **Lançamentos** — grid de releases com filtros por gênero (Trap, Rap, Funk, Drill)
- **Sobre** — história do selo e estatísticas
- **Contato** — formulário de contato e redes sociais

## Como publicar no GitHub Pages

1. Crie um repositório no GitHub (ex: `mvmntd-inc`)
2. Faça upload de todos os arquivos desta pasta
3. Vá em **Settings → Pages**
4. Em *Source*, selecione **Deploy from a branch → main → / (root)**
5. Salve — o site ficará em `https://SEU-USUARIO.github.io/mvmntd-inc/`

## Personalização

- **Artistas e lançamentos**: edite os cards em `index.html` (seção `#lancamentos`)
- **Capas dos álbuns**: coloque as imagens em `assets/` e referencie em `<img src="assets/nome.jpg">`
- **Redes sociais**: atualize os `href` dos links `.social-link` em `index.html`
- **Estatísticas**: mude os valores `data-target` nos `.stat-num` em `index.html`
- **Cores**: edite as variáveis CSS em `css/style.css` (`:root { --red: #CC0000; ... }`)

---

© 2025 MVMNTD INC · Rio de Janeiro, Brasil

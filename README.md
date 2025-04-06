# Scheduling System

Sistema de agendamento de compromissos desenvolvido com o [Frappe Framework](https://frappeframework.com/), como parte de um **desafio técnico** da [Nexforce](https://www.nexforce.com/).

---

## Sobre o Desafio

Este projeto foi desenvolvido como parte do processo seletivo para a vaga de **FullStack Product Software Developer** na Nexforce. O desafio consistia em:

- Criar um aplicativo chamado `scheduling_system` utilizando Frappe.
- Criar um Doctype chamado `Appointment` com os seguintes campos:
  - `Client Name` (Data)
  - `Start Date` (Datetime)
  - `End Date` (Datetime - preenchido automaticamente)
  - `Duration` (Time)
  - `Description` (Small Text)
  - `Seller` (Link para User)
  - `Status` (Scheduled / Finished / Canceled)
- Habilitar a visualização em modo calendário.
- Validar conflitos de horário para o mesmo vendedor.
- Enviar o código em um repositório público.
- Gravar um vídeo demonstrando o projeto.

---

## Tecnologias Utilizadas

- [Frappe Framework](https://frappeframework.com/)
- Python 3.10+
- Node.js 16+ com Yarn
- MariaDB 10.6+
- Redis
- Bench CLI
- Docker (opcional)

---

## Requisitos

Antes de iniciar, certifique-se de que você tem:

- Python 3.10 ou superior
- Node.js 16+ com Yarn
- MariaDB 10.6+
- Redis
- `pip` instalado
- Bench CLI:

```bash
pip install frappe-bench
```

---

## Instalação e Execução Local

```bash
# Crie o bench
bench init frappe-bench --frappe-branch version-15
cd frappe-bench

# Crie o site
bench new-site scheduling.local

# Clone o app no diretório apps
git clone https://github.com/ErickTCosta/desafio-nexforce.git apps/scheduling_system

# Instale o app no site
bench --site scheduling.local install-app scheduling_system

# Inicie o servidor
bench start
```

> Adicione `127.0.0.1 scheduling.local` ao seu arquivo `/etc/hosts`.

---

## Como Usar

1. Acesse `http://scheduling.local:8000` no navegador.
2. Faça login com o usuário administrador criado no setup do site.
3. Navegue até o módulo "Scheduling System".
4. Crie compromissos usando o Doctype `Appointment`.
5. Veja a agenda na visualização de calendário.

---

## Validações Implementadas

-  O campo `End Date` é calculado automaticamente com base em `Start Date` + `Duration`.
-  Um mesmo vendedor não pode ter dois compromissos no mesmo horário.
-  Não é permitido criar compromissos antes das **08:00** ou depois das **20:00**.
-  Não é permitido agendar compromissos para horários que **já passaram**.

---

## Contribuindo

Instale os hooks de commit com o `pre-commit`:

```bash
pre-commit install
```

Sinta-se à vontade para abrir issues ou enviar pull requests com melhorias!

---

## Licença

Distribuído sob a licença MIT. Veja o arquivo `LICENSE` para mais informações.

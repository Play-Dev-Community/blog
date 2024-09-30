# Use a imagem oficial do Bun como base
FROM oven/bun:1

# Defina o diretório de trabalho no container
WORKDIR /src

# Copie apenas os arquivos necessários para instalar dependências
COPY package*.json bun.lockb ./

# Instale as dependências
RUN bun install --frozen-lockfile

# Copie o restante dos arquivos do projeto
COPY . .

# Exponha a porta que seu app usa
EXPOSE 4321

# Comando para executar o aplicativo
CMD ["bun", "run", "dev", "--host", "0.0.0.0"]
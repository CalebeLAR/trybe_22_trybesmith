import app from './app';

const PORT = 3001;

// iniciando o projeto
const server = app.listen(PORT, () => console.log(
  `Server is running on PORT: ${PORT}`,
));

export default server;

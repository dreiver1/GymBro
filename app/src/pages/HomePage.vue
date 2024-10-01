<template>
  <q-page class="row items-center justify-center">
    <div class="items-center text col-9 q-my-xl">

      <div class="row items-center section q-gutter-md">
        <div class="col-12 col-md-2 img-container">
          <img src="/images/halteres.jpg" class="image" />
        </div>
        <div class="text-h4 col-12 col-md-8 q-mt-md">
          GymBro: a inteligência artificial que personaliza seu treino.
        </div>
      </div>

      <div class="col-12 section">
        <div class="text-h6 col-12 col-md-6">
          <h4>Como funciona</h4>
          <p>
            GymBro usa inteligência artificial para analisar suas necessidades,
            objetivos de treino e personalizar uma rotina específica para você.
            Baseado em parâmetros como frequência, tipo de treino e seu condicionamento,
            criamos o plano ideal para resultados otimizados.
          </p>
        </div>
      </div>

      <div class="col-12 section">
        <h4 class="text-h4">Como Funciona</h4>

        <div class="step row q-gutter-md q-mt-lg">
          <div class="col-12 col-md-2 img-container">
            <img src="/images/fornecer_dados.png" class="image" />
          </div>
          <div class="col-12 col-md-10">
            <h5>1. Adicione seus detalhes e receba seu treino</h5>
            <p>
              Forneça informações sobre seu nível de condicionamento, objetivos e preferências de treino. O GymBro irá criar um plano personalizado para você!
            </p>
          </div>
        </div>

        <div class="step row q-gutter-md q-mt-lg">
          <div class="col-12 col-md-2 img-container">
            <img src="/images/acompanhamento.png" class="image" />
          </div>
          <div class="col-12 col-md-10">
            <h5>2. Acompanhe seu progresso e ajuste o programa</h5>
            <p>
              Monitore seu desempenho e faça ajustes automáticos ou manuais no seu plano de treino para continuar progredindo de forma otimizada.
            </p>
          </div>
        </div>

        <div class="step row q-gutter-md q-mt-lg">
          <div class="col-12 col-md-2 img-container">
            <img src="/images/motivado.png" class="image" />
          </div>
          <div class="col-12 col-md-10">
            <h5>3. Monitore seus ganhos e mantenha-se motivado</h5>
            <p>
              Veja seus resultados ao longo do tempo, acompanhe seus ganhos e mantenha-se motivado com o apoio contínuo do GymBro.
            </p>
          </div>
        </div>
      </div>

      <div class="col-12 section">
        <div class="text-h6 col-12 col-md-6">
          <h4>Cadastre-se</h4>
          <p>
            Quer melhorar seus treinos ou ajudar outras pessoas a atingirem seus objetivos?
            Cadastre-se agora como <strong>usuário</strong> ou <strong>treinador</strong> e faça parte da nossa comunidade.
          </p>
          <div class="q-mt-lg">
            <q-btn label="Cadastre-se" color="primary" class="q-mr-md" />
          </div>
        </div>
      </div>

      <div class="col-12 section">
        <div class="text-h6 col-12 col-md-6">
          <h4>Baixe o aplicativo</h4>
          <p>
            Não perca tempo! Baixe agora o GymBro em seu dispositivo e tenha acesso a treinos personalizados diretamente no seu smartphone.
          </p>
          <div class="q-mt-lg">
            <q-btn label="Baixar para Android" icon="download" color="green" class="q-mr-md" />
            <q-btn label="Baixar para iOS" icon="apple" color="black" />
          </div>
        </div>
      </div>
    </div>

    <footer class="footer q-mt-xl">
      <div class="row justify-between">
        <div class="col-4">
          <h6>Contato</h6>
          <ul>
            <li>Email: contato@gymbro.com</li>
            <li>Telefone: +55 11 1234-5678</li>
            <li>Endereço: Av. dos Treinadores, 1000</li>
          </ul>
        </div>

        <div class="col-4">
          <h6>Siga-nos</h6>
          <ul>
            <li><a href="#">Instagram</a></li>
            <li><a href="#">Facebook</a></li>
            <li><a href="#">LinkedIn</a></li>
          </ul>
        </div>

        <div class="col-4">
          <h6>Informações Legais</h6>
          <p>
            O uso do GymBro é exclusivo para fins educacionais e não substitui o acompanhamento
            de um profissional de educação física. Consulte sempre um especialista antes de iniciar uma rotina de exercícios.
          </p>
        </div>
      </div>
    </footer>
  </q-page>
</template>

<script setup>
defineOptions({
  name: 'IndexPage'
});
</script>

<style>
.section {
  margin-top: 50px;
  padding: 20px;
  border-radius: 1px;
  box-shadow: 1px 1px 1px 1px rgba(0, 0, 0, 0.02);
  background-color: #fff;
}

.img-container {
  width: 100%;
  height: auto;
}

.image {
  width: 100%;
  height: auto;
  object-fit: cover; /* Mantém a proporção correta */
  border-radius: 8px;
}

.text-h3 {
  font-weight: bold;
  color: #333;
  align-self: center;
}

.text-h6 {
  font-weight: normal;
  color: #555;
  margin-top: 20px;
}

.footer {
  background-color: #f8f8f8;
  padding: 20px;
  width: 100%;
}

.footer h6 {
  font-weight: bold;
}

.footer ul {
  list-style-type: none;
  padding: 0;
}

.footer ul li {
  margin: 5px 0;
}

.footer a {
  text-decoration: none;
  color: #333;
}

.footer a:hover {
  color: #007bff;
}
</style>

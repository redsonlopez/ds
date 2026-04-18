class SiteSidebar extends HTMLElement {
  connectedCallback() {

    this.innerHTML = `
      <nav>
        <a href="/">Fundamentos de Machine Learning</a>

        <h2>Modelos Base</h2>
        <a href="topics/models/regression/simple-linear.html">Regressão Linear</a>
        <a href="topics/models/tree-based/decision-tree.html">Árvore de Decisão</a>
        <a href="topics/models/neural-networks/perceptron.html">Perceptron (Redes Neurais)</a>

        <h2>Fundamentos</h2>
        <a href="topics/fundamentals/empirical-risk.html">Risco Empírico</a>
        <a href="topics/fundamentals/loss-functions.html">Funções de Perda</a>
        <a href="topics/fundamentals/overfitting-underfitting.html">Overfitting e Underfitting</a>
        <a href="topics/fundamentals/bias-variance.html">Bias vs Variance</a>
        <a href="topics/fundamentals/regularization.html">Regularização</a>

        <h2>Processo de Aprendizado</h2>
        <a href="topics/learning-process/evaluation/train-test-split.html">Train/Test Split</a>
        <a href="topics/learning-process/evaluation/cross-validation.html">Validação Cruzada</a>
        <a href="topics/learning-process/evaluation/metrics.html">Métricas</a>

        <a href="topics/learning-process/optimization/gradient-descent.html">Gradiente Descendente</a>
        <a href="topics/learning-process/optimization/learning-rate.html">Learning Rate</a>

        <a href="topics/learning-process/feature-engineering/feature-engineering.html">Engenharia de Recursos</a>
        <a href="topics/learning-process/feature-engineering/scaling-normalization.html">Escalonamento</a>
        <a href="topics/learning-process/feature-engineering/encoding.html">Codificação</a>

        <h2>Modelos</h2>

        <!--
        <h2>Regressão</h2>
        <a href="topics/models/regression/multiple-linear.html">Regressão Linear Múltipla</a>
        <a href="topics/models/regression/polynomial-regression.html">Regressão Polinomial</a>

        <h2>Classificação Linear</h2>
        <a href="topics/models/regression/logistic-regression.html">Regressão Logística</a>

        <h2>Regularização Aplicada</h2>
        <a href="topics/models/regression/regularized-regression.html">Regularização em Modelos Lineares</a>

        <h2>Baseado em Distância</h2>
        -->
        <a href="topics/models/neighbors/knn-classification.html">KNN para Classificação</a>
        <!--
        <a href="topics/models/neighbors/distance-metrics.html">Métricas de Distância</a>
        <a href="topics/models/neighbors/knn-regression.html">KNN Regressão</a>

        <h2>Árvores</h2>
        <a href="topics/models/tree-based/random-forest.html">Random Forest</a>
        <a href="topics/models/tree-based/gradient-boosting.html">Gradient Boosting</a>

        <h2>Ensemble</h2>
        <a href="topics/ensemble-methods/bagging.html">Bagging</a>
        <a href="topics/ensemble-methods/random-forest.html">Random Forest</a>
        <a href="topics/ensemble-methods/gradient-boosting.html">Gradient Boosting</a>

        <h2>SVM</h2>
        <a href="topics/models/svm/linear-svm.html">SVM Linear</a>
        <a href="topics/models/svm/kernel-svm.html">SVM com Kernel</a>
        -->

        <!--
        <h2>Redes Neurais</h2>
        <a href="topics/models/neural-networks/mlp.html">MLP</a>
        <a href="topics/models/neural-networks/activation-functions.html">Funções de Ativação</a>
        <a href="topics/models/neural-networks/backpropagation.html">Backpropagation</a>

        <h2>Não Supervisionado</h2>
        <a href="topics/models/unsupervised/kmeans.html">K-Means</a>
        <a href="topics/models/unsupervised/pca.html">PCA</a>
        -->

      </nav>
    `;
  }
}
customElements.define('site-sidebar', SiteSidebar);


class SiteSidebar extends HTMLElement {
  connectedCallback() {

    this.innerHTML = `
      <nav>
        <h2>Fundamentos</h2>
        <a href="ml/01_fundamentals/01_empirical_risk.html">Risco Empírico</a>
        <a href="ml/01_fundamentals/05_loss_functions.html">Funções de Perda</a>
        <a href="ml/01_fundamentals/02_bias_variance.html">Bias vs Variance</a>
        <a href="ml/01_fundamentals/03_overfitting_underfitting.html">Overfitting e Underfitting</a>
        <a href="ml/01_fundamentals/04_regularization.html">Regularização</a>

        <h2>Processo de Aprendizado</h2>
        <a href="ml/02_learning_process/01_optimization/01_gradient_descent.html">Gradiente Descendente</a>
        <a href="ml/02_learning_process/01_optimization/02_learning_rate.html">Learning Rate</a>

        <a href="ml/02_learning_process/03_feature_engineering/01_scaling_normalization.html">Escalonamento</a>

        <a href="ml/02_learning_process/02_evaluation/03_train_test_split.html">Train/Test Split</a>
        <a href="ml/02_learning_process/02_evaluation/02_cross_validation.html">Validação Cruzada</a>
        <a href="ml/02_learning_process/02_evaluation/01_metrics.html">Métricas</a>

        <h2>Regressão</h2>
        <a href="ml/03_models/01_regression/01_simple_linear.html">Regressão Linear Simples</a>
        <a href="ml/03_models/01_regression/02_multiple_linear.html">Regressão Linear Múltipla</a>
        <a href="ml/03_models/01_regression/03_polynomial_regression.html">Regressão Polinomial</a>

        <h2>Classificação Linear</h2>
        <a href="ml/03_models/01_regression/04_logistic_regression.html">Regressão Logística</a>

        <h2>Regularização Aplicada</h2>
        <a href="ml/03_models/01_regression/05_regularized_regression.html">Regularização em Modelos Lineares</a>

        <h2>Modelos Baseados em Distância</h2>
        <a href="ml/03_models/03_neighbors/01_knn_classification.html">KNN Classificação</a>
        <a href="ml/03_models/03_neighbors/03_distance_metrics.html">Métricas de Distância</a>
        <a href="ml/03_models/03_neighbors/02_knn_regression.html">KNN Regressão</a>

        <h2>Árvores</h2>
        <a href="ml/03_models/02_tree_based/01_decision_tree.html">Árvore de Decisão</a>

        <h2>Ensemble</h2>
        <a href="ml/04_ensemble_methods/01_bagging.html">Bagging</a>
        <a href="ml/04_ensemble_methods/02_random_forest.html">Random Forest</a>
        <a href="ml/04_ensemble_methods/03_gradient_boosting.html">Gradient Boosting</a>

        <h2>SVM</h2>
        <a href="ml/03_models/04_svm/01_linear_svm.html">SVM Linear</a>
        <a href="ml/03_models/04_svm/02_kernel_svm.html">SVM com Kernel</a>

        <h2>Redes Neurais</h2>
        <a href="ml/03_models/05_neural_networks/01_perceptron.html">Perceptron</a>
        <a href="ml/03_models/05_neural_networks/02_mlp.html">MLP</a>
        <a href="ml/03_models/05_neural_networks/03_activation_functions.html">Funções de Ativação</a>
        <a href="ml/03_models/05_neural_networks/04_backpropagation.html">Backpropagation</a>

        <h2>Não Supervisionado</h2>
        <a href="ml/03_models/06_unsupervised/01_kmeans.html">K-Means</a>
        <a href="ml/03_models/06_unsupervised/02_pca.html">PCA</a>

      </nav>
    `;
  }
}
customElements.define('site-sidebar', SiteSidebar);


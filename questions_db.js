const examData = [
    {
        "question_number": 1,
        "question": "PyTorch中用於建立神經網路層的基本模組是什麼？",
        "options": {
            "A": "torch.Tensor",
            "B": "torch.Module",
            "C": "torch.NeuralNet",
            "D": "torch.Layer"
        },
        "correct_answer": "B"
    },
    {
        "question_number": 2,
        "question": "在Scikit-Learn中，哪個函數用於劃分訓練集和測試集？",
        "options": {
            "A": "train_test_split",
            "B": "train_test_divide",
            "C": "train_split_test",
            "D": "divide_train_test"
        },
        "correct_answer": "A"
    },
    {
        "question_number": 3,
        "question": "PyTorch的哪個函數可以用來計算梯度下降？",
        "options": {
            "A": "torch.optim",
            "B": "torch.gradient",
            "C": "torch.descent",
            "D": "torch.calc"
        },
        "correct_answer": "A"
    },
    {
        "question_number": 4,
        "question": "在機器學習中，過擬合(overfitting)是指什麼？",
        "options": {
            "A": "模型在訓練集上表現不佳",
            "B": "模型在測試集上表現不佳",
            "C": "模型在訓練集上表現過好，但在測試集上表現不佳",
            "D": "模型在訓練和測試集上都表現不佳"
        },
        "correct_answer": "C"
    },
    {
        "question_number": 5,
        "question": "在Scikit-Learn中，用於構建隨機森林模型的類別是什麼？",
        "options": {
            "A": "RandomForest",
            "B": "RandomForestClassifier",
            "C": "ForestClassifier",
            "D": "TreeClassifier"
        },
        "correct_answer": "B"
    },
    {
        "question_number": 6,
        "question": "在PyTorch中，用於資料加載和前處理的模組是什麼？",
        "options": {
            "A": "torch.utils.data",
            "B": "torch.preprocessing",
            "C": "torch.dataset",
            "D": "torch.loader"
        },
        "correct_answer": "A"
    },
    {
        "question_number": 7,
        "question": "Scikit-Learn中用於資料標準化的類別是哪一個？",
        "options": {
            "A": "StandardScaler",
            "B": "Normalizer",
            "C": "MinMaxScaler",
            "D": "DataScaler"
        },
        "correct_answer": "A"
    },
    {
        "question_number": 8,
        "question": "PyTorch中，哪個類別被用來定義損失函數？",
        "options": {
            "A": "torch.Function",
            "B": "torch.Loss",
            "C": "torch.Criterion",
            "D": "torch.nn.Module"
        },
        "correct_answer": "C"
    },
    {
        "question_number": 9,
        "question": "在機器學習中，'隨機梯度下降'（SGD）通常用於解決什麼問題？",
        "options": {
            "A": "特徵選擇",
            "B": "優化問題",
            "C": "資料前處理",
            "D": "模型選擇"
        },
        "correct_answer": "B"
    },
    {
        "question_number": 10,
        "question": "Scikit-Learn中用於模型評估的函數是什麼？",
        "options": {
            "A": "evaluate_model",
            "B": "test_model",
            "C": "score",
            "D": "assess"
        },
        "correct_answer": "C"
    },
    {
        "question_number": 11,
        "question": "在PyTorch中，用於建立神經網路的父類別是什麼？",
        "options": {
            "A": "torch.nn.Module",
            "B": "torch.nn.Network",
            "C": "torch.nn.Layer",
            "D": "torch.nn.NeuralNet"
        },
        "correct_answer": "A"
    },
    {
        "question_number": 12,
        "question": "Scikit-Learn中，用於進行主成分分析（PCA）的類別是什麼？",
        "options": {
            "A": "PCA",
            "B": "PrincipalComponentAnalysis",
            "C": "PCAnalyzer",
            "D": "Decomposer"
        },
        "correct_answer": "A"
    },
    {
        "question_number": 13,
        "question": "在PyTorch中，哪個類別被用於建立卷積神經網路？",
        "options": {
            "A": "torch.nn.ConvNet",
            "B": "torch.nn.ConvLayer",
            "C": "torch.nn.Conv2d",
            "D": "torch.nn.CNN"
        },
        "correct_answer": "C"
    },
    {
        "question_number": 14,
        "question": "在機器學習中，哪種方法常用於解決分類問題？",
        "options": {
            "A": "線性迴歸",
            "B": "主成分分析",
            "C": "決策樹",
            "D": "梯度提升"
        },
        "correct_answer": "C"
    },
    {
        "question_number": 15,
        "question": "Scikit-Learn中，用於生成訓練集和測試集的函數是哪個？",
        "options": {
            "A": "split_data",
            "B": "train_test_split",
            "C": "divide_dataset",
            "D": "split_train_test"
        },
        "correct_answer": "B"
    },
    {
        "question_number": 16,
        "question": "在PyTorch中，哪個模組被用來處理影像資料集？",
        "options": {
            "A": "torchvision",
            "B": "torchimage",
            "C": "torchpics",
            "D": "torchgraphics"
        },
        "correct_answer": "A"
    },
    {
        "question_number": 17,
        "question": "Scikit-Learn中用於進行k均值聚類的類別是哪一個？",
        "options": {
            "A": "KMeans",
            "B": "ClusterMeans",
            "C": "KClusters",
            "D": "MeanCluster"
        },
        "correct_answer": "A"
    },
    {
        "question_number": 18,
        "question": "在PyTorch中，哪個函數用於應用活化函數ReLU？",
        "options": {
            "A": "torch.relu",
            "B": "torch.nn.ReLU",
            "C": "torch.activation.ReLU",
            "D": "torch.functions.relu"
        },
        "correct_answer": "B"
    },
    {
        "question_number": 19,
        "question": "在機器學習中，哪種演算法常用於回歸問題？",
        "options": {
            "A": "SVM",
            "B": "Logistic Regression",
            "C": "Linear Regression",
            "D": "Decision Trees"
        },
        "correct_answer": "C"
    },
    {
        "question_number": 20,
        "question": "Scikit-Learn中，哪個模組包含了資料前處理工具？",
        "options": {
            "A": "sklearn.preprocessing",
            "B": "sklearn.data",
            "C": "sklearn.transform",
            "D": "sklearn.utils"
        },
        "correct_answer": "A"
    },
    {
        "question_number": 21,
        "question": "在PyTorch中，哪個類別別用於建立一個全連接（dense）層？",
        "options": {
            "A": "torch.nn.Dense",
            "B": "torch.nn.FullyConnected",
            "C": "torch.nn.Linear",
            "D": "torch.nn.Connect"
        },
        "correct_answer": "C"
    },
    {
        "question_number": 22,
        "question": "Scikit-Learn中用於計算模型的交叉驗證分數的函數是什麼？",
        "options": {
            "A": "cross_val_score",
            "B": "validate_score",
            "C": "cross_validate",
            "D": "model_evaluation"
        },
        "correct_answer": "A"
    },
    {
        "question_number": 23,
        "question": "在PyTorch中，哪個包含了資料變換和標準化的工具？",
        "options": {
            "A": "torch.data",
            "B": "torch.transform",
            "C": "torch.utils.data",
            "D": "torch.preprocessing"
        },
        "correct_answer": "C"
    },
    {
        "question_number": 24,
        "question": "在機器學習中，哪種演算法常用於多類別分類問題？",
        "options": {
            "A": "線性回歸",
            "B": "決策樹",
            "C": "支持向量機（SVM）",
            "D": "k-最近鄰（k-NN）"
        },
        "correct_answer": "D"
    },
    {
        "question_number": 25,
        "question": "Scikit-Learn中用於特徵降維的技術之一是什麼？",
        "options": {
            "A": "主成分分析（PCA）",
            "B": "線性迴歸",
            "C": "梯度提升樹",
            "D": "隨機森林"
        },
        "correct_answer": "A"
    },
    {
        "question_number": 26,
        "question": "在PyTorch中，用於建立批次標準化的類別是什麼？",
        "options": {
            "A": "torch.nn.BatchNorm",
            "B": "torch.nn.BatchStandard",
            "C": "torch.nn.Normalize",
            "D": "torch.nn.Standardize"
        },
        "correct_answer": "A"
    },
    {
        "question_number": 27,
        "question": "Scikit-Learn中用於進行支持向量機分類的類別是哪一個？",
        "options": {
            "A": "SVC",
            "B": "SVClassifier",
            "C": "SupportVectorClassifier",
            "D": "VectorMachine"
        },
        "correct_answer": "A"
    },
    {
        "question_number": 28,
        "question": "在PyTorch中，哪個函數用於將資料集劃分為批次？",
        "options": {
            "A": "torch.utils.data.DataLoader",
            "B": "torch.utils.data.BatchLoader",
            "C": "torch.data.Batch",
            "D": "torch.load.DataBatch"
        },
        "correct_answer": "A"
    },
    {
        "question_number": 29,
        "question": "在機器學習中，用於解決非線性問題的常見演算法是什麼？",
        "options": {
            "A": "線性迴歸",
            "B": "決策樹",
            "C": "主成分分析",
            "D": "隨機森林"
        },
        "correct_answer": "B"
    },
    {
        "question_number": 30,
        "question": "Scikit-Learn中用於自動參數調整的工具是什麼？",
        "options": {
            "A": "GridSearch",
            "B": "AutoParam",
            "C": "ParameterSearch",
            "D": "GridTune"
        },
        "correct_answer": "A"
    },
    {
        "question_number": 31,
        "question": "在PyTorch中，用於構建序列神經網路模型的類別是什麼？",
        "options": {
            "A": "torch.nn.RNN",
            "B": "torch.nn.SeqNN",
            "C": "torch.nn.Sequential",
            "D": "torch.nn.SeriesNet"
        },
        "correct_answer": "C"
    },
    {
        "question_number": 32,
        "question": "Scikit-Learn中用於進行羅吉斯迴歸的類別是哪一個？",
        "options": {
            "A": "LogisticRegression",
            "B": "LogitRegression",
            "C": "RogisticModel",
            "D": "RegressionLogit"
        },
        "correct_answer": "A"
    },
    {
        "question_number": 33,
        "question": "在PyTorch中，哪個函數用於將神經網路模型轉換為訓練模式？",
        "options": {
            "A": "model.train()",
            "B": "model.training()",
            "C": "model.to_train()",
            "D": "model.set_train()"
        },
        "correct_answer": "A"
    },
    {
        "question_number": 34,
        "question": "在機器學習中，哪種方法常用於特徵降維？",
        "options": {
            "A": "決策樹",
            "B": "k-最近鄰",
            "C": "隨機森林",
            "D": "主成分分析"
        },
        "correct_answer": "D"
    },
    {
        "question_number": 35,
        "question": "Scikit-Learn中，用於產生多類別假資料的函數是什麼？",
        "options": {
            "A": "make_multiclass",
            "B": "generate_classes",
            "C": "create_multiclass",
            "D": "make_classification"
        },
        "correct_answer": "D"
    },
    {
        "question_number": 36,
        "question": "在PyTorch中，用於建立梯度下降優化的類別是什麼？",
        "options": {
            "A": "torch.optim.SGD",
            "B": "torch.optim.GradientDescent",
            "C": "torch.nn.Optimizer",
            "D": "torch.train.Gradient"
        },
        "correct_answer": "A"
    },
    {
        "question_number": 37,
        "question": "Scikit-Learn中用於資料分類的決策樹類是什麼？",
        "options": {
            "A": "DecisionTree",
            "B": "TreeClassifier",
            "C": "DecisionTreeClassifier",
            "D": "ClassifierTree"
        },
        "correct_answer": "C"
    },
    {
        "question_number": 38,
        "question": "在PyTorch中，哪個類別別用於建立捲積層？",
        "options": {
            "A": "torch.nn.Conv2d",
            "B": "torch.nn.Convolution",
            "C": "torch.nn.ConvLayer",
            "D": "torch.nn.Conv"
        },
        "correct_answer": "A"
    },
    {
        "question_number": 39,
        "question": "在機器學習中，哪種方法常用於處理分類問題的不平衡資料？",
        "options": {
            "A": "隨機森林",
            "B": "資料過取樣",
            "C": "線性迴歸",
            "D": "梯度提升"
        },
        "correct_answer": "B"
    },
    {
        "question_number": 40,
        "question": "Scikit-Learn中，用於進行主成分分析（PCA）降維的類別是什麼？",
        "options": {
            "A": "PCA",
            "B": "PrincipalComponentAnalysis",
            "C": "PCADecomposer",
            "D": "FeatureReducer"
        },
        "correct_answer": "A"
    },
    {
        "question_number": 41,
        "question": "在PyTorch中，用於建立Dropout以減少過擬合的類別是什麼？",
        "options": {
            "A": "torch.nn.Dropout",
            "B": "torch.nn.Drop",
            "C": "torch.nn.ReduceOverfitting",
            "D": "torch.nn.Omit"
        },
        "correct_answer": "A"
    },
    {
        "question_number": 42,
        "question": "Scikit-Learn中用於進行線性迴歸的類別是哪一個？",
        "options": {
            "A": "LinearRegression",
            "B": "RegressionLinear",
            "C": "LinRegressor",
            "D": "SimpleLinearRegression"
        },
        "correct_answer": "A"
    },
    {
        "question_number": 43,
        "question": "在PyTorch中，哪個函數用於計算交叉熵損失？",
        "options": {
            "A": "torch.nn.CrossEntropyLoss",
            "B": "torch.losses.CrossEntropy",
            "C": "torch.nn.EntropyLoss",
            "D": "torch.loss.CrossEntropy"
        },
        "correct_answer": "A"
    },
    {
        "question_number": 44,
        "question": "在機器學習中，哪種方法常用於處理遺漏資料問題？",
        "options": {
            "A": "資料插值",
            "B": "隨機森林",
            "C": "資料標準化",
            "D": "k-最近鄰"
        },
        "correct_answer": "A"
    },
    {
        "question_number": 45,
        "question": "Scikit-Learn中，用於生成聚類分析假資料的函數是什麼？",
        "options": {
            "A": "make_clusters",
            "B": "generate_cluster_data",
            "C": "create_clusters",
            "D": "make_blobs"
        },
        "correct_answer": "D"
    },
    {
        "question_number": 46,
        "question": "在PyTorch中，用於建立一個長短期記憶（LSTM）網路層的類別是什麼？",
        "options": {
            "A": "torch.nn.LSTM",
            "B": "torch.nn.LongShortTermMemory",
            "C": "torch.nn.RNN_LSTM",
            "D": "torch.nn.RecurrentLSTM"
        },
        "correct_answer": "A"
    },
    {
        "question_number": 47,
        "question": "Scikit-Learn中用於進行隨機森林分類的類別是哪一個？",
        "options": {
            "A": "RandomForest",
            "B": "ForestClassifier",
            "C": "RandomForestClassifier",
            "D": "ClassifierForest"
        },
        "correct_answer": "C"
    },
    {
        "question_number": 48,
        "question": "在PyTorch中，哪個函數用於儲存訓練好的模型？",
        "options": {
            "A": "torch.save",
            "B": "torch.model.save",
            "C": "torch.export_model",
            "D": "torch.nn.save"
        },
        "correct_answer": "A"
    },
    {
        "question_number": 49,
        "question": "在機器學習中，用於生成合成資料擴增資料集的方法是什麼？",
        "options": {
            "A": "資料增強",
            "B": "特徵選擇",
            "C": "資料降維",
            "D": "資料歸一化"
        },
        "correct_answer": "A"
    },
    {
        "question_number": 50,
        "question": "Scikit-Learn中，用於進行高斯混合模型聚類的類別是什麼？",
        "options": {
            "A": "GaussianMixture",
            "B": "MixtureModel",
            "C": "GaussianCluster",
            "D": "ClusterMixture"
        },
        "correct_answer": "A"
    },
    {
        "question_number": 51,
        "question": "在PyTorch中，用於建立二維最大池化層的類別是什麼？",
        "options": {
            "A": "torch.nn.MaxPool2d",
            "B": "torch.nn.MaxPooling2d",
            "C": "torch.nn.PoolMax2d",
            "D": "torch.nn.TwoDMaxPool"
        },
        "correct_answer": "A"
    },
    {
        "question_number": 52,
        "question": "Scikit-Learn中用於進行主成分分析（PCA）的類別是哪一個？",
        "options": {
            "A": "PCA",
            "B": "PrincipalComponentAnalysis",
            "C": "PCADecomposer",
            "D": "PCAModel"
        },
        "correct_answer": "A"
    },
    {
        "question_number": 53,
        "question": "在PyTorch中，哪個類別別用於建立一個單層感知器？",
        "options": {
            "A": "torch.nn.Perceptron",
            "B": "torch.nn.SingleLayer",
            "C": "torch.nn.Linear",
            "D": "torch.nn.SLP"
        },
        "correct_answer": "C"
    },
    {
        "question_number": 54,
        "question": "在機器學習中，用於解決過擬合問題的一種技術是什麼？",
        "options": {
            "A": "特徵選擇",
            "B": "交叉驗證",
            "C": "網格搜尋",
            "D": "資料標準化"
        },
        "correct_answer": "B"
    },
    {
        "question_number": 55,
        "question": "Scikit-Learn中，用於進行羅吉斯迴歸分析的類別是什麼？",
        "options": {
            "A": "LogisticRegression",
            "B": "LogitRegression",
            "C": "RogisticModel",
            "D": "RegressionLogit"
        },
        "correct_answer": "A"
    },
    {
        "question_number": 56,
        "question": "在PyTorch中，用於建立軟最大化（Softmax）層的類別是什麼？",
        "options": {
            "A": "torch.nn.Softmax",
            "B": "torch.nn.SoftMaxLayer",
            "C": "torch.nn.MaxSoft",
            "D": "torch.nn.SoftMaximum"
        },
        "correct_answer": "A"
    },
    {
        "question_number": 57,
        "question": "Scikit-Learn中用於進行K均值聚類分析的類別是哪一個？",
        "options": {
            "A": "KMeans",
            "B": "KCluster",
            "C": "ClusterKMeans",
            "D": "MeanCluster"
        },
        "correct_answer": "A"
    },
    {
        "question_number": 58,
        "question": "在PyTorch中，哪個類別別用於建立一個一維卷積層？",
        "options": {
            "A": "torch.nn.Conv1d",
            "B": "torch.nn.Convolution1d",
            "C": "torch.nn.ConvLayer1d",
            "D": "torch.nn.OneDConv"
        },
        "correct_answer": "A"
    },
    {
        "question_number": 59,
        "question": "在機器學習中，用於選擇最佳模型參數的技術是什麼？",
        "options": {
            "A": "資料標準化",
            "B": "特徵降維",
            "C": "網格搜尋",
            "D": "資料增強"
        },
        "correct_answer": "C"
    },
    {
        "question_number": 60,
        "question": "Scikit-Learn中，用於進行支持向量機（SVM）分類的類別是什麼？",
        "options": {
            "A": "SVMClassifier",
            "B": "SupportVectorClassifier",
            "C": "SVC",
            "D": "VectorMachine"
        },
        "correct_answer": "C"
    },
    {
        "question_number": 61,
        "question": "在PyTorch中，用於建立批次標準化（Batch Normalization）層的類別是什麼？",
        "options": {
            "A": "torch.nn.BatchNorm",
            "B": "torch.nn.BatchNormalization",
            "C": "torch.nn.NormalizeBatch",
            "D": "torch.nn.BatchNorm"
        },
        "correct_answer": "D"
    },
    {
        "question_number": 62,
        "question": "Scikit-Learn中用於進行羅吉斯迴歸的類別是哪一個？",
        "options": {
            "A": "LogisticRegression",
            "B": "LogitRegression",
            "C": "RogisticModel",
            "D": "RegressionLogit"
        },
        "correct_answer": "A"
    },
    {
        "question_number": 63,
        "question": "在PyTorch中，哪個類別別用於建立一個長短期記憶（LSTM）網路？",
        "options": {
            "A": "torch.nn.LSTM",
            "B": "torch.nn.LongShortMemory",
            "C": "torch.nn.RNNLSTM",
            "D": "torch.nn.LSTMNetwork"
        },
        "correct_answer": "A"
    },
    {
        "question_number": 64,
        "question": "在機器學習中，哪種方法常用於處理類別不平衡問題？",
        "options": {
            "A": "隨機森林",
            "B": "交叉驗證",
            "C": "資料過取樣或欠取樣",
            "D": "特徵降維"
        },
        "correct_answer": "C"
    },
    {
        "question_number": 65,
        "question": "Scikit-Learn中，用於進行隨機森林回歸的類別是什麼？",
        "options": {
            "A": "RandomForestRegressor",
            "B": "RandomForestRegression",
            "C": "ForestRegressor",
            "D": "RegressionForest"
        },
        "correct_answer": "A"
    },
    {
        "question_number": 66,
        "question": "在PyTorch中，用於建立自適應平均池化層的類別是什麼？",
        "options": {
            "A": "torch.nn.AdaptiveAvgPool",
            "B": "torch.nn.AvgPool",
            "C": "torch.nn.AdaptiveAveragePooling",
            "D": "torch.nn.AdaptiveAvgPooling"
        },
        "correct_answer": "D"
    },
    {
        "question_number": 67,
        "question": "Scikit-Learn中用於進行高斯過程迴歸的類別是哪一個？",
        "options": {
            "A": "GaussianProcessRegressor",
            "B": "GaussianRegressor",
            "C": "ProcessGaussianRegression",
            "D": "RegressionGaussianProcess"
        },
        "correct_answer": "A"
    },
    {
        "question_number": 68,
        "question": "在PyTorch中，哪個函數用於將模型轉換為評估模式？",
        "options": {
            "A": "model.eval()",
            "B": "model.evaluate()",
            "C": "model.testing()",
            "D": "model.set_eval()"
        },
        "correct_answer": "A"
    },
    {
        "question_number": 69,
        "question": "在機器學習中，用於特徵選擇的常用方法是什麼？",
        "options": {
            "A": "資料增強",
            "B": "隨機森林",
            "C": "逐步回歸",
            "D": "交叉驗證"
        },
        "correct_answer": "C"
    },
    {
        "question_number": 70,
        "question": "Scikit-Learn中，用於進行主成分分析（PCA）降維的函數是什麼？",
        "options": {
            "A": "PCA",
            "B": "decompose.PCA",
            "C": "reduce.PCA",
            "D": "analysis.PCA"
        },
        "correct_answer": "A"
    },
    {
        "question_number": 71,
        "question": "在PyTorch中，用於建立一個單層感知器網路的類別是什麼？",
        "options": {
            "A": "torch.nn.Perceptron",
            "B": "torch.nn.SLP",
            "C": "torch.nn.Linear",
            "D": "torch.nn.SingleLayerPerceptron"
        },
        "correct_answer": "C"
    },
    {
        "question_number": 72,
        "question": "Scikit-Learn中用於進行聚類分析的K均值演算法的類別是哪一個？",
        "options": {
            "A": "KMeans",
            "B": "ClusterKMeans",
            "C": "MeanCluster",
            "D": "KCluster"
        },
        "correct_answer": "A"
    },
    {
        "question_number": 73,
        "question": "在PyTorch中，哪個類別別用於建立一個二維卷積層？",
        "options": {
            "A": "torch.nn.Conv2d",
            "B": "torch.nn.ConvLayer2d",
            "C": "torch.nn.Convolution2d",
            "D": "torch.nn.TwoDConvolution"
        },
        "correct_answer": "A"
    },
    {
        "question_number": 74,
        "question": "在機器學習中，用於減少資料維度的技術是什麼？",
        "options": {
            "A": "特徵選擇",
            "B": "主成分分析",
            "C": "資料增強",
            "D": "隨機森林"
        },
        "correct_answer": "B"
    },
    {
        "question_number": 75,
        "question": "Scikit-Learn中，用於進行支持向量機回歸的類別是什麼？",
        "options": {
            "A": "SVR",
            "B": "SVMRegressor",
            "C": "SupportVectorRegressor",
            "D": "VectorRegression"
        },
        "correct_answer": "A"
    },
    {
        "question_number": 76,
        "question": "在PyTorch中，用於建立二維捲積層的類別是什麼？",
        "options": {
            "A": "torch.nn.Conv2d",
            "B": "torch.nn.Convolution2d",
            "C": "torch.nn.TwoDConv",
            "D": "torch.nn.LayerConv2d"
        },
        "correct_answer": "A"
    },
    {
        "question_number": 77,
        "question": "Scikit-Learn中用於進行隨機森林分類的類別是哪一個？",
        "options": {
            "A": "RandomForestClassifier",
            "B": "ForestClassifier",
            "C": "RandomClassifier",
            "D": "TreeClassifier"
        },
        "correct_answer": "A"
    },
    {
        "question_number": 78,
        "question": "在PyTorch中，哪個類別別用於建立一個循環神經網路（RNN）層？",
        "options": {
            "A": "torch.nn.RNN",
            "B": "torch.nn.RecurrentNet",
            "C": "torch.nn.CycleNet",
            "D": "torch.nn.LoopNet"
        },
        "correct_answer": "A"
    },
    {
        "question_number": 79,
        "question": "在機器學習中，用於自動選擇最佳模型參數的技術是什麼？",
        "options": {
            "A": "資料標準化",
            "B": "網格搜尋",
            "C": "特徵選擇",
            "D": "隨機搜尋"
        },
        "correct_answer": "B"
    },
    {
        "question_number": 80,
        "question": "Scikit-Learn中，用於進行多類別分類的支持向量機（SVM）的類別是什麼？",
        "options": {
            "A": "MultiClassSVM",
            "B": "SVMClassifier",
            "C": "SupportVectorClassifier",
            "D": "LinearSVC"
        },
        "correct_answer": "D"
    },
    {
        "question_number": 81,
        "question": "在PyTorch中，用於建立三維捲積層的類別是什麼？",
        "options": {
            "A": "torch.nn.Conv3d",
            "B": "torch.nn.Convolution3d",
            "C": "torch.nn.ThreeDConv",
            "D": "torch.nn.LayerConv3d"
        },
        "correct_answer": "A"
    },
    {
        "question_number": 82,
        "question": "Scikit-Learn中用於進行決策樹回歸的類別是哪一個？",
        "options": {
            "A": "DecisionTreeRegressor",
            "B": "TreeRegressor",
            "C": "RegressorTree",
            "D": "DecisionRegressor"
        },
        "correct_answer": "A"
    },
    {
        "question_number": 83,
        "question": "在PyTorch中，哪個函數用於將模型轉換為訓練模式？",
        "options": {
            "A": "model.train()",
            "B": "model.training()",
            "C": "model.to_train()",
            "D": "model.set_train()"
        },
        "correct_answer": "A"
    },
    {
        "question_number": 84,
        "question": "在機器學習中，用於自動選擇特徵的技術是什麼？",
        "options": {
            "A": "特徵增強",
            "B": "主成分分析",
            "C": "選擇自模型",
            "D": "隨機搜尋"
        },
        "correct_answer": "C"
    },
    {
        "question_number": 85,
        "question": "Scikit-Learn中，用於進行支持向量機分類的類別是什麼？",
        "options": {
            "A": "SVC",
            "B": "SupportVectorClassifier",
            "C": "SVMClassifier",
            "D": "ClassifierSVM"
        },
        "correct_answer": "A"
    },
    {
        "question_number": 86,
        "question": "在PyTorch中，用於建立一維捲積層的類別是什麼？",
        "options": {
            "A": "torch.nn.Conv1d",
            "B": "torch.nn.ConvLayer1d",
            "C": "torch.nn.OneDConv",
            "D": "torch.nn.Convolution1d"
        },
        "correct_answer": "A"
    },
    {
        "question_number": 87,
        "question": "Scikit-Learn中用於進行AdaBoost分類的類別是哪一個？",
        "options": {
            "A": "AdaBoostClassifier",
            "B": "BoostingClassifier",
            "C": "AdaClassifier",
            "D": "ClassifierAdaBoost"
        },
        "correct_answer": "A"
    },
    {
        "question_number": 88,
        "question": "在PyTorch中，哪個函數用於計算均方誤差損失？",
        "options": {
            "A": "torch.nn.MSELoss",
            "B": "torch.loss.MSE",
            "C": "torch.nn.SquareError",
            "D": "torch.losses.MeanSquareError"
        },
        "correct_answer": "A"
    },
    {
        "question_number": 89,
        "question": "在機器學習中，用於對資料進行標準化處理的方法是什麼？",
        "options": {
            "A": "資料降維",
            "B": "特徵選擇",
            "C": "資料標準化",
            "D": "資料轉換"
        },
        "correct_answer": "C"
    },
    {
        "question_number": 90,
        "question": "Scikit-Learn中，用於進行高斯混合模型聚類的類別是什麼？",
        "options": {
            "A": "GaussianMixture",
            "B": "MixtureModel",
            "C": "GaussianCluster",
            "D": "ClusterMixture"
        },
        "correct_answer": "A"
    },
    {
        "question_number": 91,
        "question": "在PyTorch中，用於建立梯度下降優化器的類別是什麼？",
        "options": {
            "A": "torch.optim.SGD",
            "B": "torch.optim.GradientDescent",
            "C": "torch.nn.Optimizer",
            "D": "torch.train.Gradient"
        },
        "correct_answer": "A"
    },
    {
        "question_number": 92,
        "question": "Scikit-Learn中用於進行羅吉斯迴歸的類別是哪一個？",
        "options": {
            "A": "LogisticRegression",
            "B": "LogitRegression",
            "C": "RogisticModel",
            "D": "RegressionLogit"
        },
        "correct_answer": "A"
    },
    {
        "question_number": 93,
        "question": "在PyTorch中，哪個函數用於建立資料加載器？",
        "options": {
            "A": "torch.utils.data.DataLoader",
            "B": "torch.data.Loader",
            "C": "torch.load.Data",
            "D": "torch.dataset.Loader"
        },
        "correct_answer": "A"
    },
    {
        "question_number": 94,
        "question": "在機器學習中，用於降低模型過擬合風險的技術是什麼？",
        "options": {
            "A": "交叉驗證",
            "B": "資料增強",
            "C": "特徵選擇",
            "D": "網格搜尋"
        },
        "correct_answer": "A"
    },
    {
        "question_number": 95,
        "question": "Scikit-Learn中，用於進行k最近鄰（KNN）分類的類別是什麼？",
        "options": {
            "A": "KNeighborsClassifier",
            "B": "NearestNeighbors",
            "C": "KNNClassifier",
            "D": "NeighborsClassifier"
        },
        "correct_answer": "A"
    },
    {
        "question_number": 96,
        "question": "在PyTorch中，用於建立二維平均池化層的類別是什麼？",
        "options": {
            "A": "torch.nn.AvgPool2d",
            "B": "torch.nn.MeanPooling2d",
            "C": "torch.nn.Pool2d",
            "D": "torch.nn.AveragePool2d"
        },
        "correct_answer": "A"
    },
    {
        "question_number": 97,
        "question": "Scikit-Learn中用於進行主成分分析（PCA）降維的類別是哪一個？",
        "options": {
            "A": "PCA",
            "B": "PrincipalComponentAnalysis",
            "C": "PCAReducer",
            "D": "DecomposePCA"
        },
        "correct_answer": "A"
    },
    {
        "question_number": 98,
        "question": "在PyTorch中，哪個類別別用於建立全連接（Dense）網路層？",
        "options": {
            "A": "torch.nn.Dense",
            "B": "torch.nn.FullyConnected",
            "C": "torch.nn.Linear",
            "D": "torch.nn.Connect"
        },
        "correct_answer": "C"
    },
    {
        "question_number": 99,
        "question": "在機器學習中，用於解決過擬合問題的常見技術是什麼？",
        "options": {
            "A": "特徵選擇",
            "B": "資料標準化",
            "C": "交叉驗證",
            "D": "網格搜尋"
        },
        "correct_answer": "C"
    },
    {
        "question_number": 100,
        "question": "Scikit-Learn中，用於進行k均值聚類分析的類別是什麼？",
        "options": {
            "A": "KMeans",
            "B": "ClusterMeans",
            "C": "KCluster",
            "D": "MeanCluster"
        },
        "correct_answer": "A"
    }
]
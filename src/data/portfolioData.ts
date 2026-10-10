import { Project, SkillCategory, WorkflowStep, TimelineItem } from '../types';

export const PERSONAL_INFO = {
  name: 'Bashir Olokodana',
  role: 'Data Scientist & Machine Learning Specialist',
  title: 'Turning Data Into Intelligence',
  tagline: 'Transforming Data Into Decisions',
  bioHeadline: 'I am a Data Scientist focused on discovering meaningful patterns in data and building intelligent systems that solve real-world problems. My interests span Machine Learning, Deep Learning, Big Data, Data Cleaning, Data Analysis, and predictive modeling.',
  bioSecondary: 'I enjoy transforming raw and messy datasets into structured information that can support better decisions and powerful AI applications.',
  email: 'bashirolokodana05@gmail.com',
  phone: '08169837666',
  whatsappUrl: 'https://wa.me/2348169837666',
  location: 'Lagos, Nigeria (Open to Global & Remote)',
  portraitImage: '/src/assets/images/bashir_actual_photo.jpg',
  fallbackPortraitUrl: 'https://i.ibb.co/HTtctzHx/my-photo.jpg',
  socials: {
    github: 'https://github.com/bashirolokodana',
    linkedin: 'https://linkedin.com/in/bashir-olokodana',
    x: 'https://x.com/bashirolokodana',
    instagram: 'https://instagram.com/bashirolokodana',
    whatsapp: 'https://wa.me/2348169837666',
    email: 'mailto:bashirolokodana05@gmail.com',
  },
};

export const CORE_STATISTICS = [
  {
    label: 'Machine Learning',
    value: '94.8%',
    unit: 'Avg ROC-AUC',
    description: 'Ensemble models, XGBoost, and supervised classifiers deployed to production.',
  },
  {
    label: 'Deep Learning',
    value: '12+',
    unit: 'Architectures',
    description: 'CNNs, ResNets, Transfer Learning, and sequential neural pipelines built in PyTorch.',
  },
  {
    label: 'Big Data',
    value: '15M+',
    unit: 'Records Processed',
    description: 'High-throughput PySpark distributed transformations and SQL pipelines.',
  },
  {
    label: 'Data Cleaning',
    value: '99.2%',
    unit: 'Integrity Rate',
    description: 'Automated anomaly detection, duplicate reconciliation, and imputation engines.',
  },
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    id: 'data-science',
    name: 'Data Science',
    description: 'Core analytical and statistical fundamentals for structured discovery.',
    skills: [
      { name: 'Python', level: 96, experience: 'Production & Research', description: 'Advanced object-oriented and vectorized data programming.' },
      { name: 'Pandas', level: 95, experience: 'High Volume DataFrames', description: 'Grouping, pivoting, window functions, and memory optimization.' },
      { name: 'NumPy', level: 92, experience: 'Linear Algebra & Tensors', description: 'Vectorized mathematical operations, matrix decompositions, and broadcasting.' },
      { name: 'Data Cleaning', level: 98, experience: 'Automated Pipelines', description: 'Outlier detection, regex normalization, schema enforcement, and missing imputation.' },
      { name: 'Exploratory Data Analysis', level: 94, experience: 'Hypothesis Verification', description: 'Distribution analysis, multi-collinearity checks, and statistical testing.' },
      { name: 'Statistical Analysis', level: 90, experience: 'Inferential & Bayesian', description: 'Hypothesis testing (A/B), ANOVA, p-value verification, and regression diagnostics.' },
    ],
  },
  {
    id: 'machine-learning',
    name: 'Machine Learning',
    description: 'Predictive modeling, algorithmic tuning, and production evaluation.',
    skills: [
      { name: 'Scikit-learn', level: 95, experience: 'Production Modeling', description: 'Custom transformers, pipelines, cross-validation, and hyperparameter grids.' },
      { name: 'Regression', level: 93, experience: 'Linear, Ridge, Lasso, ElasticNet', description: 'Continuous target modeling, regularized penalties, and residual auditing.' },
      { name: 'Classification', level: 96, experience: 'XGBoost, LightGBM, Random Forest', description: 'Imbalanced classes, cost-sensitive learning, ROC-AUC, and F1 optimization.' },
      { name: 'Clustering', level: 91, experience: 'K-Means, DBSCAN, Hierarchical', description: 'Silhouette analysis, elbow heuristic, and high-dimensional customer segmentation.' },
      { name: 'Feature Engineering', level: 94, experience: 'Domain & Mathematical', description: 'Target encoding, log transforms, interaction terms, and dimensionality reduction (PCA).' },
      { name: 'Model Evaluation', level: 96, experience: 'Validation & Diagnostics', description: 'SHAP value explainability, PR curves, confusion matrices, and drift monitoring.' },
    ],
  },
  {
    id: 'deep-learning',
    name: 'Deep Learning',
    description: 'Neural architectures for complex non-linear patterns and unstructured data.',
    skills: [
      { name: 'PyTorch', level: 90, experience: 'Tensors & Custom Layers', description: 'Dynamic computation graphs, custom loss functions, and CUDA acceleration.' },
      { name: 'TensorFlow', level: 88, experience: 'Keras & Graph Execution', description: 'Sequential/functional APIs, callback optimization, and model serialization.' },
      { name: 'Neural Networks', level: 92, experience: 'Multi-Layer Perceptrons', description: 'Backpropagation, gradient clipping, AdamW optimizers, and dropout regularization.' },
      { name: 'CNNs', level: 89, experience: 'Vision & Feature Extractors', description: 'Convolutional filters, pooling, ResNet fine-tuning, and image segmentation.' },
      { name: 'NLP', level: 86, experience: 'Text Embeddings & Sequence', description: 'Tokenization, TF-IDF, Word2Vec, and transformer-based sentiment analysis.' },
    ],
  },
  {
    id: 'big-data',
    name: 'Big Data & Databases',
    description: 'Scalable data infrastructures and distributed query execution.',
    skills: [
      { name: 'SQL', level: 95, experience: 'Complex Analytical Queries', description: 'Window functions (RANK, LEAD, LAG), CTEs, subqueries, and execution query plans.' },
      { name: 'Apache Spark', level: 88, experience: 'Distributed Compute', description: 'Resilient Distributed Datasets (RDDs), Spark DataFrames, and distributed caching.' },
      { name: 'PySpark', level: 90, experience: 'Spark MLlib & ETL', description: 'Distributed data wrangling, partition tuning, and large-scale joins.' },
      { name: 'Hadoop', level: 82, experience: 'MapReduce & HDFS', description: 'Distributed storage mechanics, fault-tolerant replication, and cluster architecture.' },
      { name: 'Data Processing', level: 92, experience: 'ETL / ELT Architecture', description: 'Batch processing, schema evolution, and parquet compression formats.' },
    ],
  },
  {
    id: 'data-viz',
    name: 'Data Visualization',
    description: 'Visual storytelling, interactive dashboards, and executive reporting.',
    skills: [
      { name: 'Plotly', level: 94, experience: 'Interactive Web Charts', description: 'Custom callbacks, dynamic 3D scatter plots, and responsive visual telemetry.' },
      { name: 'Matplotlib', level: 92, experience: 'Publication Grade Graphics', description: 'Multi-axis subplots, custom color maps, and journal-ready figures.' },
      { name: 'Seaborn', level: 93, experience: 'Statistical Aesthetics', description: 'Pairplots, correlation heatmaps, violin plots, and distribution regressions.' },
      { name: 'Power BI', level: 88, experience: 'Enterprise Reporting', description: 'DAX expressions, star-schema data models, and interactive drill-downs.' },
      { name: 'Tableau', level: 86, experience: 'Visual Storyboards', description: 'Calculated fields, level-of-detail (LOD) expressions, and executive dashboards.' },
    ],
  },
];

export const FEATURED_PROJECTS: Project[] = [
  {
    id: 'churn-prediction',
    title: 'Customer Churn Prediction System',
    category: 'Machine Learning',
    shortDescription: 'Enterprise machine-learning system for identifying telecom customers likely to leave, saving retention budgets with early intervention.',
    fullDescription: 'Constructed an end-to-end churn prediction pipeline using telecom behavioral data. Applied SMOTE to balance class distributions, tuned an ensemble of XGBoost and LightGBM classifiers, and integrated SHAP (SHapley Additive exPlanations) to explain individual churn risk factors to retention managers.',
    image: '/src/assets/images/churn_prediction_viz_1790409649322.jpg',
    technologies: ['Python', 'XGBoost', 'Scikit-learn', 'SHAP', 'Pandas', 'FastAPI'],
    metrics: [
      { label: 'ROC-AUC Score', value: '0.942' },
      { label: 'Recall (At-Risk)', value: '88.6%' },
      { label: 'Retention Lift', value: '+34%' },
      { label: 'Sample Volume', value: '70,000+ Records' },
    ],
    githubUrl: 'https://github.com/bashirolokodana/customer-churn-prediction',
    demoUrl: '#demo',
    dataCleaningHighlights: [
      'Handled missing TotalCharges values via median imputation conditioned on contract tenure cohorts.',
      'One-hot encoded categorical contract features and engineered a tenure-to-spend velocity ratio.',
      'Removed high-VIF multi-collinear variables that distorted model coefficient interpretability.',
    ],
    modelingStrategy: 'Stratified 5-fold cross-validation with Bayesian hyperparameter tuning; optimized specifically for PR-AUC to prioritize recall on churn events.',
    keyInsights: [
      'Month-to-month contracts demonstrated a 4.2x higher churn probability than 1-year commitments.',
      'Customers lacking technical support add-ons churned within the first 90 days at an elevated rate of 62%.',
    ],
    interactiveDemoType: 'churn',
  },
  {
    id: 'sales-forecasting',
    title: 'Time-Series Sales Forecasting Engine',
    category: 'Machine Learning',
    shortDescription: 'Predictive forecasting model using historical multi-store business data to accurately anticipate weekly demand and prevent stockouts.',
    fullDescription: 'Developed an automated forecasting framework leveraging Facebook Prophet combined with LightGBM lag-based regressors. The system decomposes seasonality, trend changes, promotional calendar holidays, and regional price indices to forecast retail demand across 45 stores.',
    image: '/src/assets/images/sales_forecast_viz_1790409661561.jpg',
    technologies: ['Python', 'LightGBM', 'Prophet', 'Statsmodels', 'Plotly', 'PostgreSQL'],
    metrics: [
      { label: 'WAPE Accuracy', value: '92.4%' },
      { label: 'RMSE Reduction', value: '18.7%' },
      { label: 'Forecast Horizon', value: '12 Weeks' },
      { label: 'Stores Modeled', value: '45 Retail Outlets' },
    ],
    githubUrl: 'https://github.com/bashirolokodana/sales-forecasting-engine',
    demoUrl: '#demo',
    dataCleaningHighlights: [
      'Identified and reconciled negative inventory sales anomalies caused by return batches.',
      'Aligned irregular holiday calendars across regional trading zones using Fourier terms.',
      'Applied rolling 7-day and 28-day window aggregations for feature lag stability.',
    ],
    modelingStrategy: 'Ensemble combining additive seasonal decomposition with gradient-boosted trees trained on 24 lag features and price elasticity indicators.',
    keyInsights: [
      'Markdown promotions exhibited a diminishing return threshold beyond 25% price reduction.',
      'Weather-adjusted demand spikes explained over 30% of standard deviation in outdoor department categories.',
    ],
    interactiveDemoType: 'forecast',
  },
  {
    id: 'cleaning-pipeline',
    title: 'Automated Data Cleaning & Quality Pipeline',
    category: 'Data Cleaning',
    shortDescription: 'Automated Python pipeline for detecting missing values, duplicates, schema inconsistencies, and statistical anomalies in enterprise feeds.',
    fullDescription: 'Engineered a reusable, production-ready data cleaning and validation framework. Features rule-based schema checks, automated z-score and IQR anomaly pruning, fuzzy text matching for duplicate customer entity resolution, and structured audit report generation.',
    image: '/src/assets/images/churn_prediction_viz_1790409649322.jpg',
    technologies: ['Python', 'Pandas', 'NumPy', 'Great Expectations', 'PySpark', 'Docker'],
    metrics: [
      { label: 'Cleaned Records', value: '5,000,000+' },
      { label: 'Execution Speed', value: '4.8x Faster' },
      { label: 'Error Catch Rate', value: '99.8%' },
      { label: 'Schema Tests', value: '42 Assertions' },
    ],
    githubUrl: 'https://github.com/bashirolokodana/data-cleaning-pipeline',
    demoUrl: '#demo',
    dataCleaningHighlights: [
      'Implemented Levenshtein distance matching to consolidate duplicate company names and addresses.',
      'Dynamic strategy selector: chooses mean, median, iterative MICE, or indicator flags based on missingness mechanism (MCAR vs MAR).',
      'Automated outlier capping using Winsorization to preserve distribution variance without skewing estimators.',
    ],
    modelingStrategy: 'Configurable DAG-based data transformation pipeline with strict typing assertions and automated markdown audit logs.',
    keyInsights: [
      'Identified that 8.4% of initial business records suffered from silent format corruption in date and currency fields.',
      'Reduced downstream machine learning feature extraction runtime by 38% through early categorical memory downcasting.',
    ],
    interactiveDemoType: 'cleaning',
  },
  {
    id: 'customer-segmentation',
    title: 'Behavioral Customer Segmentation Engine',
    category: 'Data Analysis',
    shortDescription: 'Clustering and RFM analysis system grouping e-commerce customers based on behavioral patterns and lifetime value potential.',
    fullDescription: 'Extracted behavioral patterns across multi-year transactional records. Engineered RFM (Recency, Frequency, Monetary) metrics, applied Power Transformer normalizations, and used K-Means clustering validated by Silhouette scores and Davies-Bouldin index to uncover 5 distinct customer personas.',
    image: '/src/assets/images/sales_forecast_viz_1790409661561.jpg',
    technologies: ['Scikit-learn', 'K-Means', 'PCA', 'Seaborn', 'Pandas', 'RFM Modeling'],
    metrics: [
      { label: 'Silhouette Score', value: '0.68' },
      { label: 'Customer Clusters', value: '5 Personas' },
      { label: 'Targeting ROI', value: '+41%' },
      { label: 'Active Profiles', value: '180,000+' },
    ],
    githubUrl: 'https://github.com/bashirolokodana/customer-segmentation-engine',
    demoUrl: '#demo',
    dataCleaningHighlights: [
      'Filtered cancelled orders and zero-quantity promotional gift items that distorted frequency metrics.',
      'Log-transformed extreme right-skewed spending values prior to standard scaling.',
      'Conducted Principal Component Analysis (PCA) to project 14 behavioral dimensions down to 3 interpretable visual axes.',
    ],
    modelingStrategy: 'K-Means clustering with k-means++ initialization, cross-referenced against Agglomerative Hierarchical dendrograms for cluster count stability.',
    keyInsights: [
      'Top 8% of customers (Champions cluster) generated 44% of total net revenue, warranting dedicated VIP loyalty programs.',
      'The "At Risk High Spenders" segment accounted for $320k in dormant revenue, reclaimable through timely re-engagement emails.',
    ],
  },
  {
    id: 'deep-learning-classifier',
    title: 'Deep Learning Multi-Class Image Classifier',
    category: 'Deep Learning',
    shortDescription: 'Convolutional neural network leveraging transfer learning and custom dense heads to classify image datasets with high precision.',
    fullDescription: 'Built a deep learning vision pipeline in PyTorch utilizing a pretrained ResNet-50 backbone. Fine-tuned intermediate convolutional blocks with cyclical learning rate scheduling, data augmentations (MixUp, RandAugment), and Grad-CAM activation visualization for model interpretability.',
    image: '/src/assets/images/deep_learning_vision_1790409673036.jpg',
    technologies: ['PyTorch', 'Torchvision', 'CNN', 'ResNet-50', 'OpenCV', 'Albumentations'],
    metrics: [
      { label: 'Top-1 Accuracy', value: '96.2%' },
      { label: 'Inference Latency', value: '18ms / batch' },
      { label: 'Classes Handled', value: '25 Classes' },
      { label: 'Dataset Scale', value: '45,000 Images' },
    ],
    githubUrl: 'https://github.com/bashirolokodana/deep-learning-image-classifier',
    demoUrl: '#demo',
    dataCleaningHighlights: [
      'Automated corrupted JPEG header filtering and duplicate image detection using perceptual hashing (pHash).',
      'Normalized RGB channel distributions against ImageNet mean and variance baselines.',
      'Applied cut-out and affine rotation augmentations to guard against spatial orientation bias.',
    ],
    modelingStrategy: 'Two-stage transfer learning: frozen feature extractor warm-up followed by fine-tuning of the final two residual blocks with AdamW and cosine decay.',
    keyInsights: [
      'Grad-CAM heatmaps validated that the network was focusing on key morphological textures rather than background studio artifacts.',
      'Applying label smoothing improved calibration and reduced overconfident predictions on edge-case lighting samples.',
    ],
    interactiveDemoType: 'vision',
  },
  {
    id: 'big-data-analytics',
    title: 'Distributed Big Data Analytics Engine',
    category: 'Big Data',
    shortDescription: 'Large-scale data processing pipeline using distributed computing technologies to analyze multi-gigabyte transactional streams.',
    fullDescription: 'Architected a distributed data aggregation solution with PySpark and Hadoop HDFS. Optimized Spark shuffle partitions, broadcasted dimensional lookup tables, and wrote columnar Snappy-compressed Parquet files into a structured data lake for high-speed analytical queries.',
    image: '/src/assets/images/sales_forecast_viz_1790409661561.jpg',
    technologies: ['Apache Spark', 'PySpark', 'Hadoop', 'SQL', 'Parquet', 'Docker'],
    metrics: [
      { label: 'Data Volume', value: '120 GB / day' },
      { label: 'Job Latency', value: '4.2 min (vs 68 min)' },
      { label: 'Compression Ratio', value: '72%' },
      { label: 'Nodes Orchestrated', value: 'Cluster Scale' },
    ],
    githubUrl: 'https://github.com/bashirolokodana/distributed-big-data-engine',
    demoUrl: '#demo',
    dataCleaningHighlights: [
      'Distributed schema enforcement filtering malformed JSON payloads across streaming micro-batches.',
      'Eliminated data skew by implementing salting techniques on skewed join keys before groupBy aggregations.',
      'Broadcast joins utilized on dimensional reference tables under 100MB to bypass expensive network shuffles.',
    ],
    modelingStrategy: 'PySpark DataFrame API with optimized catalyst optimizer execution plans, window partitioning, and dynamic memory allocation.',
    keyInsights: [
      'Switching from uncompressed CSV to Snappy-Parquet reduced disk I/O bottlenecks by over 70%.',
      'Proper partition key selection (Year/Month/Region) allowed downstream query engines to scan only 12% of stored partitions.',
    ],
  },
];

export const WORKFLOW_STEPS: WorkflowStep[] = [
  {
    id: 1,
    name: 'Raw Data',
    subtitle: 'Ingestion & Sourcing',
    description: 'Connecting to diverse operational data stores, APIs, CSVs, and SQL databases to assemble raw transactional and behavioral records.',
    iconName: 'Database',
    tools: ['SQL', 'Python', 'Requests', 'PostgreSQL', 'S3'],
    sampleCode: `import pandas as pd
import sqlalchemy as sa

# Establish connection & extract raw transactional records
engine = sa.create_engine("postgresql://db_user:***@host:5432/telecom")
query = """
    SELECT customer_id, signup_date, contract_type, 
           monthly_charges, total_charges, churn_status
    FROM raw_customer_accounts
    WHERE status = 'ACTIVE' OR churn_status IS NOT NULL;
"""
df_raw = pd.read_sql(query, con=engine)
print(f"Loaded {df_raw.shape[0]:,} raw records with {df_raw.shape[1]} fields.")`,
    inputData: [
      { id: 'CUST-0891', date: '2023-01-14', contract: 'Month-to-month', charges: '$89.45', total: ' ', status: 'Yes' },
      { id: 'CUST-0892', date: '2022-11-04', contract: 'One year', charges: '$54.20', total: '$1240.00', status: 'No' },
      { id: 'CUST-0893', date: '2024-03-10', contract: 'Month-to-month', charges: '$110.00', total: 'NaN', status: 'Yes' },
    ],
    outputData: [
      { status: 'Connected', records: '70,432', source: 'PostgreSQL DW', latency: '420ms' },
    ],
  },
  {
    id: 2,
    name: 'Data Cleaning',
    subtitle: 'Integrity & Standardization',
    description: 'Transforming noisy, incomplete real-world feeds into pristine structures through missing value imputation, type casting, duplicate removal, and outlier detection.',
    iconName: 'Sparkles',
    tools: ['Pandas', 'NumPy', 'Regex', 'Great Expectations'],
    sampleCode: `import numpy as np

# 1. Strip whitespace & coerce string currencies to float
df['total_charges'] = pd.to_numeric(df['total_charges'].astype(str).str.strip(), errors='coerce')

# 2. Impute missing TotalCharges based on monthly * tenure
missing_idx = df['total_charges'].isna()
df.loc[missing_idx, 'total_charges'] = df.loc[missing_idx, 'monthly_charges'] * df.loc[missing_idx, 'tenure']

# 3. Handle outliers using IQR thresholding
q25, q75 = df['monthly_charges'].quantile([0.25, 0.75])
iqr = q75 - q25
lower_bound, upper_bound = q25 - 1.5 * iqr, q75 + 1.5 * iqr
df = df[(df['monthly_charges'] >= lower_bound) & (df['monthly_charges'] <= upper_bound)]`,
    inputData: [
      { field: 'total_charges', rawType: 'object (string)', issues: 'Whitespace & NaNs found', fix: 'Coerced & imputed' },
      { field: 'monthly_charges', rawType: 'float64', issues: 'Negative billing anomalies', fix: 'Filtered negative noise' },
      { field: 'contract_type', rawType: 'object', issues: 'Inconsistent casing', fix: 'Normalized to lowercase' },
    ],
    outputData: [
      { completeness: '99.98%', duplicates: '0', anomalies: 'Resolved', schemaValidated: 'PASS' },
    ],
  },
  {
    id: 3,
    name: 'Exploration',
    subtitle: 'Statistical Discovery & EDA',
    description: 'Uncovering distributional characteristics, multi-collinearity, class balances, and meaningful correlations using exploratory data analysis.',
    iconName: 'Search',
    tools: ['Plotly', 'Seaborn', 'Matplotlib', 'SciPy'],
    sampleCode: `import seaborn as sns
import matplotlib.pyplot as plt

# Compute pairwise correlation with target variable
corr = df.corr(numeric_only=True)
churn_corr = corr['churn_encoded'].sort_values(ascending=False)

# Test statistical significance with chi-square for categorical features
from scipy.stats import chi2_contingency
contingency = pd.crosstab(df['contract_type'], df['churn'])
chi2, p_val, dof, _ = chi2_contingency(contingency)
print(f"Contract vs Churn Chi2: {chi2:.2f}, p-value: {p_val:.4e}")`,
    inputData: [
      { feature: 'contract_type', correlation: '0.42 (Strong)', p_value: '< 0.0001', hypothesis: 'Significant' },
      { feature: 'monthly_charges', correlation: '0.28 (Moderate)', p_value: '< 0.001', hypothesis: 'Significant' },
      { feature: 'gender', correlation: '0.01 (Negligible)', p_value: '0.482', hypothesis: 'Non-significant' },
    ],
    outputData: [
      { primaryDriver: 'Contract Duration', distributionSkew: 'Normalized', targetBalance: '73% / 27%' },
    ],
  },
  {
    id: 4,
    name: 'Feature Engineering',
    subtitle: 'Signal Amplification',
    description: 'Creating domain-specific indicators, scaling numerical dimensions, encoding categorical variables, and applying mathematical transformations.',
    iconName: 'Cpu',
    tools: ['Scikit-learn', 'Target Encoding', 'PCA', 'ColumnTransformer'],
    sampleCode: `from sklearn.compose import ColumnTransformer
from sklearn.preprocessing import StandardScaler, OneHotEncoder

# Create interaction features
df['avg_cost_per_month'] = df['total_charges'] / (df['tenure'] + 1)
df['is_high_risk_contract'] = (df['contract_type'] == 'Month-to-month').astype(int)

# Scikit-learn preprocessing pipeline
numeric_features = ['tenure', 'monthly_charges', 'avg_cost_per_month']
categorical_features = ['contract_type', 'payment_method', 'internet_service']

preprocessor = ColumnTransformer(
    transformers=[
        ('num', StandardScaler(), numeric_features),
        ('cat', OneHotEncoder(drop='first', sparse_output=False), categorical_features)
    ]
)`,
    inputData: [
      { rawFeature: 'tenure + total_charges', engineered: 'avg_cost_per_month', rationale: 'Measures spend velocity' },
      { rawFeature: 'contract_type', engineered: 'is_high_risk_contract', rationale: 'Binary flag for churn vulnerability' },
      { rawFeature: 'monthly_charges', engineered: 'scaled_charges (Z-Score)', rationale: 'Zero mean, unit variance' },
    ],
    outputData: [
      { totalFeatures: '24 Derived Features', dimensionality: 'Optimized', varianceRetained: '99.4%' },
    ],
  },
  {
    id: 5,
    name: 'Modeling',
    subtitle: 'Algorithmic Optimization',
    description: 'Training and comparing diverse model architectures, tuning hyperparameters via cross-validation, and selecting optimal predictors.',
    iconName: 'Layers',
    tools: ['XGBoost', 'LightGBM', 'PyTorch', 'Scikit-learn', 'Optuna'],
    sampleCode: `import xgboost as xgb
from sklearn.model_selection import StratifiedKFold

# Initialize XGBoost classifier with regularized parameters
model = xgb.XGBClassifier(
    n_estimators=350,
    max_depth=5,
    learning_rate=0.03,
    subsample=0.85,
    colsample_bytree=0.8,
    scale_pos_weight=2.7, # Address class imbalance
    eval_metric='aucpr',
    random_state=42
)

# Fit cross-validation splits
cv = StratifiedKFold(n_splits=5, shuffle=True, random_state=42)
# Trained across 5 stratifications with early stopping`,
    inputData: [
      { candidate: 'Logistic Regression', validationScore: '0.842 ROC-AUC', trainingTime: '0.2s', status: 'Baseline' },
      { candidate: 'Random Forest', validationScore: '0.895 ROC-AUC', trainingTime: '3.4s', status: 'Candidate' },
      { candidate: 'XGBoost (Tuned)', validationScore: '0.942 ROC-AUC', trainingTime: '4.8s', status: 'Selected Champion' },
    ],
    outputData: [
      { selectedModel: 'XGBoost Ensemble', hyperparametersTuned: 'Optuna (50 trials)', status: 'Converged' },
    ],
  },
  {
    id: 6,
    name: 'Evaluation',
    subtitle: 'Rigorous Verification',
    description: 'Validating models through ROC-AUC, Precision-Recall curves, confusion matrices, SHAP interpretability values, and cross-fold diagnostics.',
    iconName: 'CheckCircle2',
    tools: ['SHAP', 'Scikit-learn', 'Confusion Matrix', 'PR-AUC'],
    sampleCode: `import shap
from sklearn.metrics import classification_report, roc_auc_score

# Compute test predictions & probability scores
y_pred = model.predict(X_test)
y_prob = model.predict_proba(X_test)[:, 1]

print("Test ROC-AUC:", roc_auc_score(y_test, y_prob))
print(classification_report(y_test, y_pred))

# Explain predictions using TreeSHAP
explainer = shap.TreeExplainer(model)
shap_values = explainer.shap_values(X_test)
# Generated summary plot and individual waterfall breakdown`,
    inputData: [
      { metric: 'ROC-AUC Score', value: '0.942', target: '>= 0.90', result: 'Met' },
      { metric: 'At-Risk Recall', value: '88.6%', target: '>= 80%', result: 'Met' },
      { metric: 'False Positive Rate', value: '8.4%', target: '<= 12%', result: 'Met' },
    ],
    outputData: [
      { topDriver1: 'Contract Duration (SHAP: +0.82)', topDriver2: 'Tenure (SHAP: -0.64)', audit: 'Passed' },
    ],
  },
  {
    id: 7,
    name: 'Insights',
    subtitle: 'Business Impact & Deployment',
    description: 'Translating model outputs into actionable business strategies, automated alerts, production APIs, and executive decision frameworks.',
    iconName: 'TrendingUp',
    tools: ['FastAPI', 'Docker', 'Executive Reports', 'Monitoring'],
    sampleCode: `@app.post("/api/v1/predict-churn")
def predict_churn(customer_payload: CustomerFeatures):
    # Process incoming record through feature pipeline
    features = transform_payload(customer_payload)
    prob = model.predict_proba(features)[0][1]
    
    # Generate action recommendation
    recommendation = "Direct outreach with annual contract discount" if prob > 0.65 else "Standard retention"
    return {
        "customer_id": customer_payload.id,
        "churn_probability": round(float(prob), 4),
        "risk_tier": "HIGH" if prob > 0.65 else ("MEDIUM" if prob > 0.35 else "LOW"),
        "recommended_action": recommendation
    }`,
    inputData: [
      { businessAction: 'Proactive Annual Discount to Month-to-Month', predictedOutcome: 'Churn reduction by 34%' },
      { businessAction: 'Automated Technical Support Onboarding', predictedOutcome: 'First-quarter drop-off reduced by 48%' },
    ],
    outputData: [
      { estimatedAnnualSavings: '$420,000+', latencyPerInference: '14ms', apiStatus: 'Live & Operational' },
    ],
  },
];

export const TIMELINE_DATA: TimelineItem[] = [
  {
    id: 'exp-1',
    title: 'Data Science & Machine Learning Specialist',
    organization: 'Independent Applied Research & Client Projects',
    location: 'Lagos, Nigeria (Remote)',
    period: '2024 — Present',
    type: 'experience',
    description: 'Designing end-to-end machine learning workflows, automated data cleaning pipelines, and predictive algorithms for business analytics and automation.',
    bullets: [
      'Engineered supervised machine learning pipelines (XGBoost, Scikit-learn) achieving up to 94.2% ROC-AUC on behavioral customer data.',
      'Developed automated Python data cleaning scripts handling multi-million record transactional datasets with zero data loss.',
      'Constructed deep learning image classification architectures in PyTorch with transfer learning and Grad-CAM interpretability.',
      'Implemented distributed PySpark queries to optimize ETL throughput by 4.8x compared to legacy single-node processing.',
    ],
    tags: ['Machine Learning', 'PyTorch', 'Data Cleaning', 'Apache Spark', 'Python', 'XGBoost'],
  },
  {
    id: 'exp-2',
    title: 'Data Analyst & Technical Researcher',
    organization: 'Data Analytics & Predictive Solutions',
    location: 'Lagos, Nigeria',
    period: '2023 — 2024',
    type: 'experience',
    description: 'Led exploratory data analysis, statistical modeling, database querying, and executive visualization dashboards for strategic decision-making.',
    bullets: [
      'Authored complex analytical SQL scripts with window functions, multi-table CTEs, and aggregated performance metrics.',
      'Constructed dynamic business intelligence dashboards in Plotly and Power BI, translating complex distributions into executive clarity.',
      'Spearheaded exploratory data analysis (EDA) across diverse datasets to identify structural anomalies and revenue bottlenecks.',
    ],
    tags: ['SQL', 'Exploratory Data Analysis', 'Pandas', 'Plotly', 'Power BI', 'Statistical Testing'],
  },
  {
    id: 'edu-1',
    title: 'Bachelor of Science (B.Sc.) in Computer Science',
    organization: 'University Academic Program',
    location: 'Nigeria',
    period: 'Graduated with Honors',
    type: 'education',
    description: 'Core focus on algorithms, statistical computation, artificial intelligence fundamentals, databases, and linear algebra.',
    bullets: [
      'Comprehensive study of Computational Statistics, Linear Algebra, Discrete Mathematics, and Database Management Systems (DBMS).',
      'Completed capstone research project focused on Machine Learning algorithms for predictive pattern recognition.',
      'Active leadership in technical computing societies and data science study groups.',
    ],
    tags: ['Computer Science', 'Linear Algebra', 'Algorithms', 'Probability & Statistics', 'Databases'],
  },
  {
    id: 'cert-1',
    title: 'Deep Learning Specialization',
    organization: 'DeepLearning.AI',
    location: 'Online Credential',
    period: 'Issued 2024',
    type: 'certification',
    description: 'In-depth mastery of neural networks, backpropagation mechanics, convolutional networks (CNNs), sequence modeling, and optimization strategies.',
    bullets: [
      'Constructed and trained Multi-Layer Perceptrons, Convolutional Networks, and hyperparameter tuning in PyTorch and TensorFlow.',
      'Mastered weight initialization (He/Xavier), Adam optimization, dropout regularization, and batch normalization.',
    ],
    tags: ['Deep Learning', 'PyTorch', 'CNNs', 'Neural Networks', 'Optimization'],
  },
  {
    id: 'cert-2',
    title: 'IBM Data Science Professional Certificate',
    organization: 'IBM',
    location: 'Online Credential',
    period: 'Issued 2023',
    type: 'certification',
    description: 'Comprehensive program covering the complete Data Science methodology: data wrangling, SQL databases, statistical analysis, and machine learning with Python.',
    bullets: [
      'Proficiency verified across Python, Pandas, Scikit-learn, relational SQL querying, and data visualization tools.',
      'Executed practical capstone projects involving predictive analytics, feature engineering, and model deployment.',
    ],
    tags: ['Data Science', 'Python', 'SQL', 'Scikit-learn', 'Data Wrangling'],
  },
];

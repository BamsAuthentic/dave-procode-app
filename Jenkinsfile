pipeline {

    agent any

    tools {
        nodejs 'NodeJS-18'
    }

    environment {
        PROJECT_NAME = 'dave-procode-app'
        NODE_ENV     = 'test'
    }

    stages {

        stage('Checkout') {
            steps {
                echo 'Recuperation du code depuis GitHub...'
                checkout scm
            }
        }

        stage('Verification Environnement') {
            steps {
                echo 'Verification des outils...'
                bat 'node --version'
                bat 'npm --version'
            }
        }

        stage('Installation Dependances') {
            steps {
                echo 'Installation des dependances NPM...'
                bat 'npm ci'
                echo 'Dependances installees !'
            }
        }

        stage('Build') {
            steps {
                echo 'Build en cours...'
                bat 'npm run build'
                echo 'Build reussi !'
            }
        }

        stage('Tests Automatises') {
            steps {
                echo 'Lancement des tests Jest...'
                bat 'npm run test:ci'
                echo 'Tests passes avec succes !'
            }
            post {
                always {
                    junit allowEmptyResults: true,
                          testResults: 'junit-report.xml'
                }
            }
        }

        stage('Resume Final') {
            steps {
                echo "Projet   : ${env.PROJECT_NAME}"
                echo "Build N  : ${env.BUILD_NUMBER}"
            }
        }
    }

    post {
        success {
            echo 'PIPELINE REUSSI - Tous les tests sont OK !'
        }
        failure {
            echo 'PIPELINE ECHOUE - Consultez les logs !'
        }
        always {
            cleanWs()
        }
    }
}
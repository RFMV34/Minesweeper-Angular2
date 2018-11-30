pipeline {
    agent any

    stages {
        stage('Build') {
            steps {
                bat 'npm install'
                bat 'npm run build'
                archiveArtifacts artifacts: 'dist/*', fingerprint: true
            }
        }
        stage('Test') {
            steps {
                echo -e '\033[31m'
                bat 'npm --version'
                echo -e '\033[0m'
            }
        }
        stage('Deploy') {
            steps {
                echo 'Deploying....'
            }
        }
    }
}
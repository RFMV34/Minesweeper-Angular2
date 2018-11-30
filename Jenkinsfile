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
                bat 'npm --version'
            }
        }
        stage('Deploy') {
            steps {
                echo 'Deploying....'
            }
        }
    }
}
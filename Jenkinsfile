pipeline {
    agent any

    stages {
        stage('Build') {
            steps {
                bat 'npm install'
                bat 'npm run build'
                archiveArtifacts artifacts: '**/dist/*', fingerprint: true
            }
        }
        stage('Test') {
            steps {
                bat 'npm run lint'
            }
        }
        stage('Deploy') {
            steps {
                echo 'Deploying....'
            }
        }
    }
}
pipeline {
  agent any
  stages {
    stage('Checkout Code') {
      steps {
        git(url: 'https://github.com/gguiyo/newtestjenkins.git', branch: 'dev')
      }
    }

    stage('list directory') {
      parallel {
        stage('list directory') {
          steps {
            sh 'pwd && ls -la'
          }
        }

        stage('front-end unit test') {
          steps {
            sh 'cd curriculum-front && npm i'
          }
        }

      }
    }

  }
}
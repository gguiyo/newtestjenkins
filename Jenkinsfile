pipeline {
  agent any
  stages {
    stage('Checkout Code') {
      steps {
        git(url: 'https://github.com/gguiyo/newtestjenkins.git', branch: 'dev')
      }
    }

    stage('list directory') {
      steps {
        sh 'ls -la'
      }
    }

  }
}
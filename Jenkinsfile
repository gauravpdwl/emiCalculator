pipeline{
  agent any
  stages{
    stage("test"){
      steps{
        echo "testing the application"
        nodejs('Node'){
          sh 'npm install'
        }
      }
    }
  }
}

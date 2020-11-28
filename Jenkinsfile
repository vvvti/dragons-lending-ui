pipeline {
    agent {
        docker {
            image 'fintech/base-agent'
            args '--network host -e DOCKER_HOST=tcp://localhost:2375'
        }
    }
    options {
        ansiColor('xterm')
        timestamps()
    }
    environment {
        CI = 'true'
    }
    stages {
        stage('Build') {
            agent {
                docker {
                    image 'node:12.16.1-stretch-slim'
                    reuseNode true
                }
            }
            steps {
                sh 'echo "registry=https://nexus.fintechchallenge.pl/repository/npm" >> ~/.npmrc'
                sh 'yarn'
                sh 'yarn build'
            }
        }
        stage('Test') {
            agent {
                docker {
                    image 'node:12.16.1-stretch-slim'
                    reuseNode true
                }
            }
            steps {
                sh 'yarn test'
            }
        }
        stage('Sonar') {
            when { branch 'master' }
            agent {
                docker {
                    image 'fintech/sonar-agent'
                    reuseNode true
                }
            }
            steps {
                withSonarQubeEnv('SonarQube') {
                    script {
                        sh "sonar-scanner"
                    }
                }
            }
        }
        stage('Docker push') {
            when { branch 'master' }
            agent {
                docker {
                    image 'fintech/base-agent'
                    reuseNode true
                    args '--network host -e DOCKER_HOST=tcp://localhost:2375'
                }
            }
            steps {
                script {
                    docker.withRegistry("https://ersa-team-docker-registry.fintechchallenge.pl/v2/", 'docker-push-user') {
                        def build = docker.build("ersa-team/dragons-lending", '-f ./docker/Dockerfile .')
                        def commitHash = sh(
                            script: 'git rev-parse HEAD',
                            returnStdout: true
                        )
                        build.push(commitHash)
                        build.push("latest")
                    }
                }
            }
        }
        stage('Deploy Sit') {
            when { branch 'master' }
            agent {
                docker {
                    image 'fintech/kubernetes-agent'
                    reuseNode true
                }
            }
            steps {
                script {
                    withCredentials([file(credentialsId: 'kubeconfig-sit', variable: 'KUBECONFIG')]) {
                        sh "kubectl apply -f ./kubernetes-sit.yaml"
                        sh "kubectl rollout restart deployment dragons-lending"
                        sh "kubectl rollout status deployment dragons-lending --timeout=1m"
                    }
                }
            }
        }
        stage('Deploy Uat') {
            when { branch 'master' }
            agent {
                docker {
                    image 'fintech/kubernetes-agent'
                    reuseNode true
                }
            }
            steps {
                script {
                    withCredentials([file(credentialsId: 'kubeconfig-uat', variable: 'KUBECONFIG')]) {
                        sh "kubectl apply -f ./kubernetes-uat.yaml"
                        sh "kubectl rollout restart deployment dragons-lending"
                        sh "kubectl rollout status deployment dragons-lending --timeout=1m"
                    }
                }
            }
        }
    }
    stage('E2E tests') {
                agent {
                docker {
                    image 'node:12.16.1-stretch-slim'
                    reuseNode true
                }
            }
                steps {
                    script {
                        dir('e2e-repo' {

                                git(
                                        branch: 'master',
                                        credentialsId: 'bitbucket-user-pass',
                                        url: "https//bitbucket.fintechchallenge.pl:31999/ersa/dragons-lending-e2e.git"
                                )
                                sh 'yarn install'
                                sh 'yarn start'
                                }
                            }
                        }
                    }
                }
            }
        }
}
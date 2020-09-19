node(){

		def repoURL='https://github.com/ravidkone/cucumber_BDD'

		stage("Prepare Workspace"){
			cleanWs()
			env.WORKSPACE_LOCAL=sh(returnStdout:true,script:'pwd').trim()
			echo"Workspace set to:"+env.WORKSPACE_LOCAL
		}
		stage('Checkout Self'){
		git branch:'master',credentialsId:'',url:repoURL
		}
		stage('Cucumber Tests'){
			withMaven(maven:'maven35'){
				sh """
					cd ${env.WORKSPACE_LOCAL}
					mvn clean test
				"""
			}
		}
		stage('Expose report'){
			archive "**/cucumber.json"
			cucumber '**/cucumber.json'
		}
		stage('import result to xray'){
		                         
		   def description = "[BUILD_URL|${env.BUILD_URL}]"
		   def labels= '[ "regression","auto_regression" ]'
		   def environment="DEV"
		   def testExecutionFieldID=10008
		   def testEnvironmentFieldName="customefield_Number"
		   def projectKey="TestSAP"
		   def xrayConnectorId='db347c94-ae58-4196-b429-09923c7cd249'
		   def info= ''' {
		         "fields":{
		            "project":{
		            "Key" : "'''+projectKey+'''"
		             },
		             "labels" :'''+labels+''',
					 "description": "'''+description+'''",
					 "summary" : "Automated Regression execution @'''+env.BUILD_TIME+' '+environment+'''",
					 "issuetype":{
					  "id": "'''+testExecutionFieldID+'''"
					},
 					"'''+testEnvironmentFieldName+'''":[ 
 					"'''+environment+'''"
 					]
		            }
		            }'''
		            echo info
		            step ([ $class:'XrayImportBuilder',endpointName:'/cucumber/multipart',importFilePath:'json_outpot/cucumber.json',importInfo:info,inputInfoSwitcher:'fileContent',serverInstance:xrayConnectorId ])
		            }
}

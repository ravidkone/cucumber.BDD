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
		   def labels= '[ "lable1","label2" ]'
		   def environment="DEV"
		   def testExecutionFieldID=NUMBER
		   def testEnvironmentFieldName="customefield_Number"
		   def projectKey="key"
		   def xrayConnectorId='ID'
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

"use strict";(self.webpackChunkauto_infra=self.webpackChunkauto_infra||[]).push([[991],{8891:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return l},contentTitle:function(){return u},metadata:function(){return r},toc:function(){return p},default:function(){return c}});var a=t(7462),i=t(3366),s=(t(7294),t(3905)),o=["components"],l={slug:"AzDevops_Selenium_Java",title:"Run Selenium Tests in AzureDevOps",author:"Bhargav Murari",author_title:"Automation Test Engineer @Kongsberg Digital",tags:["Selenium","Java","Healenium"],draft:!0},u=void 0,r={unversionedId:"Articles/2019-06-02-AzDevops_Selenium_Java",id:"Articles/2019-06-02-AzDevops_Selenium_Java",isDocsHomePage:!1,title:"Run Selenium Tests in AzureDevOps",description:"Run Selenium Tests in AzureDevOps",source:"@site/docs/Articles/2019-06-02-AzDevops_Selenium_Java.mdx",sourceDirName:"Articles",slug:"/Articles/AzDevops_Selenium_Java",permalink:"/home/docs/Articles/AzDevops_Selenium_Java",version:"current",frontMatter:{slug:"AzDevops_Selenium_Java",title:"Run Selenium Tests in AzureDevOps",author:"Bhargav Murari",author_title:"Automation Test Engineer @Kongsberg Digital",tags:["Selenium","Java","Healenium"],draft:!0},sidebar:"tutorialSidebar",previous:{title:"Stream Test Results To PowerBI",permalink:"/home/docs/Articles/PowerBI"},next:{title:"Automate SOAP APIs using Rest Assured",permalink:"/home/docs/Articles/Soap_RestAssured"}},p=[{value:"Run Selenium Tests in AzureDevOps",id:"run-selenium-tests-in-azuredevops",children:[]}],m={toc:p};function c(e){var n=e.components,l=(0,i.Z)(e,o);return(0,s.kt)("wrapper",(0,a.Z)({},m,l,{components:n,mdxType:"MDXLayout"}),(0,s.kt)("h2",{id:"run-selenium-tests-in-azuredevops"},"Run Selenium Tests in AzureDevOps"),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"image",src:t(8152).Z})),(0,s.kt)("p",null,"In This Article lets see how to run your Selenium Tests in AzureDevOps"),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"What is Azure DevOps and Azure Pipelines?")),(0,s.kt)("p",null,"Google It, you will find out :)"),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Advantages for Test Automation :")),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"Wide Range of OS ","[Linux, Windows or Mac]"," you can choose. List of available VMs can be seen here"),(0,s.kt)("li",{parentName:"ul"},"Easy Pipeline Configuration ","[Either start from Scratch using yaml or use GUI options]"),(0,s.kt)("li",{parentName:"ul"},"Wide Range of External Connectors"),(0,s.kt)("li",{parentName:"ul"},"Supports Docker and Kubernetes Image build and Push"),(0,s.kt)("li",{parentName:"ul"},"Free for OpenSource Projects")),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"How to Run Selenium Tests?")),(0,s.kt)("p",null,"If you are using selenium I assume you might be using Maven as your Build Tool. As pipelines configuration and execution happens via command line we will use Maven build commands to run our tests."),(0,s.kt)("p",null,"Prerequisites:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("pre",{parentName:"li"},(0,s.kt)("code",{parentName:"pre"},"Maven\n"))),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("pre",{parentName:"li"},(0,s.kt)("code",{parentName:"pre"},"Testng.xml\n")))),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Step1:"),"Create a free account at dev.azure.com"),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Step2:"),"Go to Pipelines and Click on New Pipeline"),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"image",src:t(8192).Z})),(0,s.kt)("p",null,"Step3: Select the Source of your Code ","[In my case it is GitHub]"),(0,s.kt)("p",null,"if this is your first time, you can upload your code to Azure Repos ","[available just above the pipelines]"),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"image",src:t(5575).Z}),"\nStep4: Select your Repo"),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"image",src:t(1525).Z}),"\nStep5: You will see a lot of pipeline Configuration Options, As our goal is run framework using Maven build, Click on Show more."),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"image",src:t(7614).Z}),"\nNow Click on Maven"),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"image",src:t(1033).Z}),"\nStep6:"),(0,s.kt)("p",null,"It is time to Review our Pipeline, Some changes we need to do like choosing windows over ubuntu or mac over ubuntu/windows ","[depending on your requirement]"),(0,s.kt)("p",null,"you can choose your JDK version if using java 9 and above."),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"image",src:t(7858).Z}),"\nList of available OS Agents can be found here"),(0,s.kt)("p",null,"Here is my Pipeline yaml, you can refer it and change as per your needs."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-yml"},"#@Owner: Bhargav Murari \n#type: Starter pipeline\n#Add steps that build, run tests, deploy, and more:\n#Full yaml config options:  https://aka.ms/yaml\n\n\ntrigger:\n    branches:\n      include:\n      - master \n      \n    paths:\n      exclude:\n      - additions.md\n      - ChangeLog.Txt\n      - README.md\njobs:\n  - job: 'TestRun_in_Windows' #Name of Job\n    pool:\n      vmImage: 'windows-latest' \n\n    steps:\n    - task: Maven@3\n      inputs:\n        mavenPomFile: 'pom.xml'\n        goals: 'verify sonar:sonar test'\n        options: '-DGRID_TYPE=\"NO_GRID\"'\n        publishJUnitResults: true\n        testResultsFiles: '**/surefire-reports/TEST-*.xml'\n        javaHomeOption: 'JDKVersion'\n        jdkVersionOption: '1.8'\n        mavenVersionOption: 'Default'\n        mavenAuthenticateFeed: false\n        effectivePomSkip: false\n        sonarQubeRunAnalysis: true\n        sqMavenPluginVersionChoice: 'pom'\n")),(0,s.kt)("p",null,"Lets Dive into above yaml:"),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"trigger")," : Specify your branch to be pulled and executed."),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"exclude"),": List of file changes to be untracked after commit. ","[you can eliminate un necessary builds]"),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Jobs"),": List of Jobs to Run one after other, ","[refer this to a jenkins job like]"),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Pool"),": Azure Devops OS Pool"),(0,s.kt)("p",null,"Vm Image: 'Windows-Latest' or choose one from here"),(0,s.kt)("p",null,"goals: Your Maven Goal"),(0,s.kt)("p",null,"options: your Maven -D Options"),(0,s.kt)("p",null,"Make sure you have defined your testng.xmls in maven surefire plugin path like below"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-xml"},"<plugin>\n   <groupId>org.apache.maven.plugins</groupId>\n      <artifactId>maven-surefire-plugin</artifactId>\n         <version>2.20</version>\n             <configuration>\n                 <suiteXmlFiles>\n                    <suiteXmlFile>TEST_NG XML 1</suiteXmlFile>\n                    <suiteXmlFile>TEST_NG XML 2</suiteXmlFile>\n                  </suiteXmlFiles>\n                     <properties>\n                        <property>\n                            <name>usedefaultlisteners</name>\n                             <value>false</value>\n                        </property>\n                     </properties>\n               </configuration>\n</plugin>\n")),(0,s.kt)("p",null,"Now Click on Run and See your results"),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"image",src:t(5190).Z}),"\n",(0,s.kt)("img",{alt:"image",src:t(9509).Z}),"\nAfter Couple of Runs you will get Test analytics of Your Pipeline like Below."),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"image",src:t(7120).Z}),"\n",(0,s.kt)("img",{alt:"image",src:t(5646).Z}),"\n",(0,s.kt)("img",{alt:"image",src:t(8368).Z}),"\n",(0,s.kt)("img",{alt:"image",src:t(6280).Z}),"\nHappy Learning :)"))}c.isMDXComponent=!0},8152:function(e,n,t){n.Z=t.p+"assets/images/1-9d54935cca1064bc71c1d101b56467ab.gif"},7120:function(e,n,t){n.Z=t.p+"assets/images/10-1cdf555d97956466a3856f4f9868e03c.png"},5646:function(e,n,t){n.Z=t.p+"assets/images/11-2a8f0d2b1d03dd8c9f78122a3eb575ff.png"},8368:function(e,n,t){n.Z=t.p+"assets/images/12-79030038bf409225497aeb661547597a.png"},6280:function(e,n,t){n.Z=t.p+"assets/images/13-a8f4f5c9b7083e3869cc4cfef2d55c8c.png"},8192:function(e,n,t){n.Z=t.p+"assets/images/2-f9f2848c8a117e95fb7e3c9b68462c6c.png"},5575:function(e,n,t){n.Z=t.p+"assets/images/3-34a2f96d459f199527a80cd577cca6e9.png"},1525:function(e,n,t){n.Z=t.p+"assets/images/4-499ac139c78ce6bc72d97348d504945b.png"},7614:function(e,n,t){n.Z=t.p+"assets/images/5-cfc27379363600be91ce370e24d2b6f2.png"},1033:function(e,n,t){n.Z=t.p+"assets/images/6-2661e1ac51526898822e925ca9d208f6.png"},7858:function(e,n,t){n.Z=t.p+"assets/images/7-0741140eedb854c53758d297277ea1eb.png"},5190:function(e,n,t){n.Z=t.p+"assets/images/8-3f755dcddba16265ef618f5c200b7082.png"},9509:function(e,n,t){n.Z=t.p+"assets/images/9-63d334ce621360a5835dec343c61a4b7.png"}}]);
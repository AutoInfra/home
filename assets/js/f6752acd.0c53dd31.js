"use strict";(self.webpackChunkauto_infra=self.webpackChunkauto_infra||[]).push([[562],{5532:function(e,t,s){s.r(t),s.d(t,{frontMatter:function(){return l},contentTitle:function(){return i},metadata:function(){return u},toc:function(){return p},default:function(){return c}});var n=s(7462),a=s(3366),o=(s(7294),s(3905)),r=["components"],l={slug:"Soap_RestAssured",title:"Automate SOAP APIs using Rest Assured",author:"Bhargav Murari",author_title:"Automation Test Engineer @Kongsberg Digital",tags:["Selenium","Java","Healenium"],draft:!0},i=void 0,u={unversionedId:"Articles/2019-06-03-Soap_RestAssured",id:"Articles/2019-06-03-Soap_RestAssured",isDocsHomePage:!1,title:"Automate SOAP APIs using Rest Assured",description:"Automate SOAP APIs using Rest Assured",source:"@site/docs/Articles/2019-06-03-Soap_RestAssured.mdx",sourceDirName:"Articles",slug:"/Articles/Soap_RestAssured",permalink:"/home/docs/Articles/Soap_RestAssured",version:"current",frontMatter:{slug:"Soap_RestAssured",title:"Automate SOAP APIs using Rest Assured",author:"Bhargav Murari",author_title:"Automation Test Engineer @Kongsberg Digital",tags:["Selenium","Java","Healenium"],draft:!0},sidebar:"tutorialSidebar",previous:{title:"Run Selenium Tests in AzureDevOps",permalink:"/home/docs/Articles/AzDevops_Selenium_Java"},next:{title:"SetUp your own On-Premise Source Code Management tools.",permalink:"/home/docs/Articles/SCM"}},p=[{value:"Automate SOAP APIs using Rest Assured",id:"automate-soap-apis-using-rest-assured",children:[]}],d={toc:p};function c(e){var t=e.components,l=(0,a.Z)(e,r);return(0,o.kt)("wrapper",(0,n.Z)({},d,l,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"automate-soap-apis-using-rest-assured"},"Automate SOAP APIs using Rest Assured"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"image",src:s(52).Z})),(0,o.kt)("p",null,"I recently came across a task to automate SOAP APIs using Rest Assured."),(0,o.kt)("p",null,"Before accepting this task I've been in a misconception that Soap APIs can't be automated using rest assured (popular for Rest API Automation) and it can be only achievable with SOAP UI tool."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Pre-Requisites:")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre"},"Rest-Assured Automation Knowledge\n")))),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Advantages of RestAssured over SoapUI.")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Open Source"),(0,o.kt)("li",{parentName:"ul"},"More flexibility over Automation solution design ","[Interacting with 2 or more Apps APIs for an E2E Flow, Data Providers etc.,]"),(0,o.kt)("li",{parentName:"ul"},"No need to any pro version for things like reporting etc., ","[Soap UI Pro]")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"What are the different API Calls available for SOAP APIs?")),(0,o.kt)("p",null,"Rest APIs have different calls like GET, POST, PUT, UPDATE, DELETE etc., Unlike Rest SOAP has two calls GET and POST. Although GET Is available as per SOAP API docs, i never came across where I need to invoke GET Call. All the Get Calls are executed via POST Mechanism ","[input XML structure defines what to respond]"),(0,o.kt)("p",null,"Let's See How to Use RestAssured for Automating SOAP APIs\nBaseClass - Here I'm writing request and Response spec builders."),(0,o.kt)("p",null,'Carefully see the Headers section in below httpSoapRequestSpecBuilder method, You Must add .addHeader("SoapAction",add) to tell RestAssured that this is a SOAP API Call.'),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},'public class BaseClass  {\n\nprotected RequestSpecification httpSoapReqSpecBuilder()\n{\n    RequestSpecification xmlReqSpecBuilder= new RequestSpecBuilder()\n            .setBaseUri("YOUR_BASE_URL")\n            .setContentType(ContentType.XML)\n            .addHeader("HEADER1","VALUE")\n            .addHeader("HEADER2","VALUE")\n            .addHeader("SOAPAction","add")\n            .build();\n    return xmlReqSpecBuilder;\n}\n\n   public void validate(File inputxml, Response response)\n    {\n        XmlPath requestbody = new XmlPath(inputxml);\n        XmlPath responebody = new XmlPath(response.asString());\n        String responsecode = responebody.getString("ns1:code").substring(0,10);\n        Assert.assertEquals(responsecode,"0000000000");\n        writeInExtentRepInfo(requestbody.prettyPrint(),responebody.prettyPrint());\n    }\n}\n')),(0,o.kt)("p",null,"How to Write Assertions?\nif you are familiar with jsonpath then you can relate it to xmlpath class provided by RestAssured Library."),(0,o.kt)("p",null,"BaseClass has validate method which uses XmlPath to get the Data and assert it. Consider your API Response is as below then your assertion will be like below. Remember to add .text() method at the end of the traverse."),(0,o.kt)("p",null,"Sample Assertion"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},'Assert.assertEquals(response.getString("soapenv:Envelope.soapenv:Body.tag0:SomeText.tag1:SomeRandomTest.tag2:responseInfo.ns1:code.text()"),"0000000000");\n')),(0,o.kt)("p",null,"Sample OutputXML"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-xml"},'<?xml version="1.0" encoding="UTF-8"?>\n    <soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/">\n        <soapenv:Body>\n            <tag0:SomeText>\n                <tag1:SomeRandomTest>\n                    <tag2:responseInfo>\n                        <ns1:code>0000000000</ns1:code>\n                    </tag2:responseInfo>\n                </tag1:SomeRandomTest>\n            </tag0:SomeText>\n        </soapenv:Body>\n    </soapenv:Envelope>\n')),(0,o.kt)("p",null,"Below is the TestClass.\nAPI Call is POST"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},'public class testClass extends BaseClass {\n\n    @Test(priority = 1, description ="YOUR_DESCRIPTION")\n    public void getDataMethod() {\n        File input = new File("INPUT_XML_FILE_PATH");\n        Response response = RestAssured.given()\n                .spec(httpSoapReqSpecBuilder())\n                .body(input)\n                .when().post()\n                .then().assertThat().statusCode(200).contentType(ContentType.XML).extract().response();\n\n        validate(input, response);\n    }\n')),(0,o.kt)("p",null,"TestNG XML"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-xml"},'<?xml version="1.0" encoding="UTF-8"?>\n<!DOCTYPE suite SYSTEM "https://testng.org/testng-1.0.dtd">\n<suite name="CompareRequests">\n<listeners> <listener class-name="listeners.ExtentListener"/> </listeners>\n    <test name="EXAMPLE_TEST_LINKEDIN">\n        <classes>\n            <class name="testClass" >  </class>\n        </classes>\n    </test>\n</suite>\n')),(0,o.kt)("p",null,"Enjoy :)"))}c.isMDXComponent=!0},52:function(e,t,s){t.Z=s.p+"assets/images/1-2a4edcac5ae63ac991ab9dcca644dc19.jpeg"}}]);
(self.webpackChunkauto_infra=self.webpackChunkauto_infra||[]).push([[562],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return p},kt:function(){return m}});var s=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,s)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,s,r=function(e,t){if(null==e)return{};var n,s,r={},a=Object.keys(e);for(s=0;s<a.length;s++)n=a[s],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(s=0;s<a.length;s++)n=a[s],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=s.createContext({}),u=function(e){var t=s.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=u(e.components);return s.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return s.createElement(s.Fragment,{},t)}},d=s.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=u(n),m=r,g=d["".concat(l,".").concat(m)]||d[m]||c[m]||a;return n?s.createElement(g,o(o({ref:t},p),{},{components:n})):s.createElement(g,o({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,o=new Array(a);o[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var u=2;u<a;u++)o[u]=n[u];return s.createElement.apply(null,o)}return s.createElement.apply(null,n)}d.displayName="MDXCreateElement"},5532:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return i},contentTitle:function(){return l},metadata:function(){return u},toc:function(){return p},default:function(){return d}});var s=n(2122),r=n(9756),a=(n(7294),n(3905)),o=["components"],i={slug:"Soap_RestAssured",title:"Automate SOAP APIs using Rest Assured",author:"Bhargav Murari",author_title:"Automation Test Engineer @Kongsberg Digital",tags:["Selenium","Java","Healenium"],draft:!0},l=void 0,u={unversionedId:"Articles/2019-06-03-Soap_RestAssured",id:"Articles/2019-06-03-Soap_RestAssured",isDocsHomePage:!1,title:"Automate SOAP APIs using Rest Assured",description:"Automate SOAP APIs using Rest Assured",source:"@site/docs/Articles/2019-06-03-Soap_RestAssured.mdx",sourceDirName:"Articles",slug:"/Articles/Soap_RestAssured",permalink:"/home/docs/Articles/Soap_RestAssured",version:"current",frontMatter:{slug:"Soap_RestAssured",title:"Automate SOAP APIs using Rest Assured",author:"Bhargav Murari",author_title:"Automation Test Engineer @Kongsberg Digital",tags:["Selenium","Java","Healenium"],draft:!0},sidebar:"tutorialSidebar",previous:{title:"Run Selenium Tests in AzureDevOps",permalink:"/home/docs/Articles/AzDevops_Selenium_Java"},next:{title:"SetUp your own On-Premise Source Code Management tools.",permalink:"/home/docs/Articles/SCM"}},p=[{value:"Automate SOAP APIs using Rest Assured",id:"automate-soap-apis-using-rest-assured",children:[]}],c={toc:p};function d(e){var t=e.components,i=(0,r.Z)(e,o);return(0,a.kt)("wrapper",(0,s.Z)({},c,i,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"automate-soap-apis-using-rest-assured"},"Automate SOAP APIs using Rest Assured"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"image",src:n(52).Z})),(0,a.kt)("p",null,"I recently came across a task to automate SOAP APIs using Rest Assured."),(0,a.kt)("p",null,"Before accepting this task I've been in a misconception that Soap APIs can't be automated using rest assured (popular for Rest API Automation) and it can be only achievable with SOAP UI tool."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Pre-Requisites:")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre"},"Rest-Assured Automation Knowledge\n")))),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Advantages of RestAssured over SoapUI.")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Open Source"),(0,a.kt)("li",{parentName:"ul"},"More flexibility over Automation solution design ","[Interacting with 2 or more Apps APIs for an E2E Flow, Data Providers etc.,]"),(0,a.kt)("li",{parentName:"ul"},"No need to any pro version for things like reporting etc., ","[Soap UI Pro]")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"What are the different API Calls available for SOAP APIs?")),(0,a.kt)("p",null,"Rest APIs have different calls like GET, POST, PUT, UPDATE, DELETE etc., Unlike Rest SOAP has two calls GET and POST. Although GET Is available as per SOAP API docs, i never came across where I need to invoke GET Call. All the Get Calls are executed via POST Mechanism ","[input XML structure defines what to respond]"),(0,a.kt)("p",null,"Let's See How to Use RestAssured for Automating SOAP APIs\nBaseClass - Here I'm writing request and Response spec builders."),(0,a.kt)("p",null,'Carefully see the Headers section in below httpSoapRequestSpecBuilder method, You Must add .addHeader("SoapAction",add) to tell RestAssured that this is a SOAP API Call.'),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},'public class BaseClass  {\n\nprotected RequestSpecification httpSoapReqSpecBuilder()\n{\n    RequestSpecification xmlReqSpecBuilder= new RequestSpecBuilder()\n            .setBaseUri("YOUR_BASE_URL")\n            .setContentType(ContentType.XML)\n            .addHeader("HEADER1","VALUE")\n            .addHeader("HEADER2","VALUE")\n            .addHeader("SOAPAction","add")\n            .build();\n    return xmlReqSpecBuilder;\n}\n\n   public void validate(File inputxml, Response response)\n    {\n        XmlPath requestbody = new XmlPath(inputxml);\n        XmlPath responebody = new XmlPath(response.asString());\n        String responsecode = responebody.getString("ns1:code").substring(0,10);\n        Assert.assertEquals(responsecode,"0000000000");\n        writeInExtentRepInfo(requestbody.prettyPrint(),responebody.prettyPrint());\n    }\n}\n')),(0,a.kt)("p",null,"How to Write Assertions?\nif you are familiar with jsonpath then you can relate it to xmlpath class provided by RestAssured Library."),(0,a.kt)("p",null,"BaseClass has validate method which uses XmlPath to get the Data and assert it. Consider your API Response is as below then your assertion will be like below. Remember to add .text() method at the end of the traverse."),(0,a.kt)("p",null,"Sample Assertion"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},'Assert.assertEquals(response.getString("soapenv:Envelope.soapenv:Body.tag0:SomeText.tag1:SomeRandomTest.tag2:responseInfo.ns1:code.text()"),"0000000000");\n')),(0,a.kt)("p",null,"Sample OutputXML"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-xml"},'<?xml version="1.0" encoding="UTF-8"?>\n    <soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/">\n        <soapenv:Body>\n            <tag0:SomeText>\n                <tag1:SomeRandomTest>\n                    <tag2:responseInfo>\n                        <ns1:code>0000000000</ns1:code>\n                    </tag2:responseInfo>\n                </tag1:SomeRandomTest>\n            </tag0:SomeText>\n        </soapenv:Body>\n    </soapenv:Envelope>\n')),(0,a.kt)("p",null,"Below is the TestClass.\nAPI Call is POST"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},'public class testClass extends BaseClass {\n\n    @Test(priority = 1, description ="YOUR_DESCRIPTION")\n    public void getDataMethod() {\n        File input = new File("INPUT_XML_FILE_PATH");\n        Response response = RestAssured.given()\n                .spec(httpSoapReqSpecBuilder())\n                .body(input)\n                .when().post()\n                .then().assertThat().statusCode(200).contentType(ContentType.XML).extract().response();\n\n        validate(input, response);\n    }\n')),(0,a.kt)("p",null,"TestNG XML"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-xml"},'<?xml version="1.0" encoding="UTF-8"?>\n<!DOCTYPE suite SYSTEM "https://testng.org/testng-1.0.dtd">\n<suite name="CompareRequests">\n<listeners> <listener class-name="listeners.ExtentListener"/> </listeners>\n    <test name="EXAMPLE_TEST_LINKEDIN">\n        <classes>\n            <class name="testClass" >  </class>\n        </classes>\n    </test>\n</suite>\n')),(0,a.kt)("p",null,"Enjoy :)"))}d.isMDXComponent=!0},52:function(e,t,n){"use strict";t.Z=n.p+"assets/images/1-2a4edcac5ae63ac991ab9dcca644dc19.jpeg"}}]);
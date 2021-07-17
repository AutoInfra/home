(self.webpackChunkauto_infra=self.webpackChunkauto_infra||[]).push([[735],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return c},kt:function(){return m}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},s=Object.keys(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),u=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=u(e.components);return a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,s=e.originalType,l=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),d=u(n),m=r,g=d["".concat(l,".").concat(m)]||d[m]||p[m]||s;return n?a.createElement(g,i(i({ref:t},c),{},{components:n})):a.createElement(g,i({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=n.length,i=new Array(s);i[0]=d;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var u=2;u<s;u++)i[u]=n[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},3695:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return o},contentTitle:function(){return l},metadata:function(){return u},toc:function(){return c},default:function(){return d}});var a=n(2122),r=n(9756),s=(n(7294),n(3905)),i=["components"],o={slug:"PowerBI",title:"Stream Test Results To PowerBI",author:"Bhargav Murari",author_title:"Automation Test Engineer @Kongsberg Digital",tags:["Selenium","Java","Healenium"],draft:!1},l=void 0,u={unversionedId:"Articles/2019-06-01-PowerBI",id:"Articles/2019-06-01-PowerBI",isDocsHomePage:!1,title:"Stream Test Results To PowerBI",description:"Stream Test Results To PowerBI And Watch It Live From Mobile App",source:"@site/docs/Articles/2019-06-01-PowerBI.mdx",sourceDirName:"Articles",slug:"/Articles/PowerBI",permalink:"/home/docs/Articles/PowerBI",version:"current",frontMatter:{slug:"PowerBI",title:"Stream Test Results To PowerBI",author:"Bhargav Murari",author_title:"Automation Test Engineer @Kongsberg Digital",tags:["Selenium","Java","Healenium"],draft:!1},sidebar:"tutorialSidebar",previous:{title:"Self Healing Selenium - Healenium",permalink:"/home/docs/Articles/Healenium"},next:{title:"Run Selenium Tests in AzureDevOps",permalink:"/home/docs/Articles/AzDevops_Selenium_Java"}},c=[{value:"Stream Test Results To PowerBI And Watch It Live From Mobile App",id:"stream-test-results-to-powerbi-and-watch-it-live-from-mobile-app",children:[]}],p={toc:c};function d(e){var t=e.components,o=(0,r.Z)(e,i);return(0,s.kt)("wrapper",(0,a.Z)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h2",{id:"stream-test-results-to-powerbi-and-watch-it-live-from-mobile-app"},"Stream Test Results To PowerBI And Watch It Live From Mobile App"),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"image",src:n(6345).Z})),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Overview:"),"\nRunning automated regression on a daily basis as part of the daily build is inevitable nowadays! It is cool to find & report the issues as soon as they are introduced. But it is very painful to maintain hundreds of automated tests & remote parallel execution! Once you have a huge automated regression test suite in place, you might have split it into multiple test suites based on business modules and you might be running them in parallel as part of your daily automated regression. Most of these automated regression suites run in a remote VM and the test results are created / accessible only at the end of the test execution. Otherwise, you might need to look into jenkins console for the test execution results log to see the progress. It might be annoying in certain cases. It might be cool to have a solution which gives us the test execution results while the tests are being executed in the remote VMs."),(0,s.kt)("p",null,"To overcome the above problem we can use PowerBI streaming Dataset and build our own dashboard."),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Pros:")),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"Realtime Streaming of Test Results"),(0,s.kt)("li",{parentName:"ul"},"Nice Dashboards"),(0,s.kt)("li",{parentName:"ul"},"Stream Execution results on Mobile")),(0,s.kt)("p",null,"Cons: ","[This is negligible to me, might vary with others]"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"Old data gets flushed automatically ","[after 200,000 Rows]"),(0,s.kt)("li",{parentName:"ul"},"Old data gets flused after 20 mins")),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Why Use PowerBI Streaming Dataset?")),(0,s.kt)("p",null,"These days Microsoft is including PowerBI basic license to every organization as a part of their office365 License, Why waste it when it is available already?\nThis Streaming Dataset comes with Rich RestAPI endpoints which makes it easy to Push DataSet\nOkay, That's too much of overview, lets dive into how can we implement it."),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Step1: Click on Create Streaming Dataset")),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"image",src:n(6828).Z})),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Step2:")),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"image",src:n(145).Z})),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Step3:")),(0,s.kt)("p",null,"Enter the Test results Fields you want to stream"),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"image",src:n(3377).Z}),"\n",(0,s.kt)("strong",{parentName:"p"},"Step4:")),(0,s.kt)("p",null,"Once you create columns, make Sure Historic Analysis is turned ON, Now click on Create and Click on PowerShell."),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"image",src:n(8881).Z})),(0,s.kt)("p",null,"Once you complete this you will get a sample PowerShell script to send the data to streaming dataset like below."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-json"},'$endpoint = "https://api.powerbi.com/beta/{YOUR_DATASET_URL}\n$payload = @{\n"Suitename" ="AAAAA555555"\n"Classname" ="AAAAA555555"\n"Methodname" ="AAAAA555555"\n"MethodDescription" ="AAAAA555555"\n"Host" ="AAAAA555555"\n"Result" ="AAAAA555555"\n"Duration" =98.6\n}\n\nInvoke-RestMethod -Method Post -Uri "$endpoint" -Body (ConvertTo-Json @($payload))\n')),(0,s.kt)("p",null,"Let's Start Implementing this in Framework:"),(0,s.kt)("p",null,"Maven POM Dependencies:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-java"},"<dependency>\n    <groupId>io.rest-assured</groupId>\n    <artifactId>rest-assured</artifactId>\n    <version>4.3.0</version>\n</dependency>\n<dependency>\n    <groupId>org.testng</groupId>\n    <artifactId>testng</artifactId>\n    <version>7.1.0</version>\n\n</dependency>\n")),(0,s.kt)("p",null,"As PowerBI Streaming dataset accepts only JSON Form of data we need to create our own pojo classes to send the data."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-java"},"public class PowerBI_Pojo_Base {\n\n    public List<PowerBI_Pojo> rows;\n\n    public List<PowerBI_Pojo> getRows() {\n        return rows;\n    }\n\n    public void setRows(List<PowerBI_Pojo> rows) {\n        this.rows = rows;\n    }\n\n\n\n\n}\n")),(0,s.kt)("p",null,"Main POJO Class:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-java"},"@Builder\npublic class PowerBI_Pojo {\n    private String Suitename;\n    private String Classname;\n    private String Methodname;\n    private String MethodDescription;\n    private String Host;\n    private String Result;\n    private long Duration;\n\n  \n}\n")),(0,s.kt)("p",null,"Itestlistener Class:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-java"},'public class PowerBI_Listener implements ITestListener {\n\n    private  PowerBI_ResultSender PowerBI_ResultSender;\n    private ITestContext ITC;\n\n    @Override\n    public void onTestStart(ITestResult result) {\n        this.PowerBI_ResultSender = new PowerBI_ResultSender();\n    }\n\n    @Override\n    public void onTestSuccess(ITestResult result) {\n        this.sendStatus(result,"PASS");\n    }\n\n    @Override\n    public void onTestFailure(ITestResult result) { this.sendStatus(result,"FAIL");\n    }\n\n    @Override\n    public void onTestSkipped(ITestResult result) {\n        this.sendStatus(result,"SKIPPED");\n    }\n\n    @Override\n    public void onTestFailedButWithinSuccessPercentage(ITestResult result) {\n        //SKIP\n    }\n\n    @Override\n    public void onTestFailedWithTimeout(ITestResult result) {this.sendStatus(result,"Time Out");}\n\n    @Override\n    public void onStart(ITestContext context) {\n        //SKIP\n        this.ITC=context;\n    }\n\n    @Override\n    public void onFinish(ITestContext context) {\n        //SKIP\n    }\n\n    public void sendStatus(ITestResult ITR, String status){\n\n        long Duration = ITR.getEndMillis() - ITR.getStartMillis();\n\n        PowerBI_Pojo p = PowerBI_Pojo.builder()\n                .Suitename(ITC.getCurrentXmlTest().getSuite().getName())\n                .Classname(ITR.getTestClass().getName())\n                .Methodname(ITR.getMethod().getMethodName())\n                .MethodDescription(ITR.getMethod().getDescription())\n                .Host(System.getProperty("user.name"))\n                .Result(status)\n                .Duration(Duration)\n                .build();\n\n        List<PowerBI_Pojo> List = new ArrayList<PowerBI_Pojo>();\n        List.add(p);\n        PowerBI_Pojo_Base PB = new PowerBI_Pojo_Base();\n        PB.setRows(List);\n        PowerBI_ResultSender.PushData(PB);\n    }\n\n}\n')),(0,s.kt)("p",null,"PowerBI Result Sender Class:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-java"},'public class PowerBI_ResultSender {\n\n    private static final String APIKEY = "APIKEY";\n    private static final String PowerBiServer = "https://api.powerbi.com";\n    private static final String UPN_VALUE = "UPN_VALUE";\n    private static final String Tenant_Value ="TENENT_VALUE";\n    private static final String DataSet ="PUSH_DATA_SET";\n\n    public void PushData(PowerBI_Pojo_Base PowerBI_Json_Result)  {\n\n        RestAssured.baseURI = PowerBiServer;\n        RestAssured.useRelaxedHTTPSValidation();\n        //RestAssured.proxy("YOUR_PROXY", 8080);\n\n        String Json_Payload = new Gson().toJson(PowerBI_Json_Result);\n        try {\n            given()\n                    .header("Content-type", "application/json")\n                    .queryParam("tenant", Tenant_Value)\n                    .queryParam("UPN", UPN_VALUE)\n                    .queryParam("Key", APIKEY)\n                    .urlEncodingEnabled(false)\n                    .body(Json_Payload)\n                    .when().log().all().post(DataSet)\n                    .then().log().all().assertThat().statusCode(200);\n        }\n        catch (Exception e) {\n            //e.printStackTrace();\n        }\n\n    }\n}\n')),(0,s.kt)("p",null,"Add Listener class in TestNG XML as Below:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-java"},'<listeners>\n\n     <listener class-name="listeners.PowerBI_Listener"/>\n\n</listeners>\n')),(0,s.kt)("p",null,"Now Navigate to PowerBI and Check your Results, Live Streaming to Dataset create above."),(0,s.kt)("p",null,"No alt text provided for this image\nNote: Above test results showed are only for reference purpose, This is an experimental activity, Do Let me know your story when you implement this."),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Final Step:")),(0,s.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,s.kt)("div",{parentName:"div",className:"admonition-heading"},(0,s.kt)("h5",{parentName:"div"},(0,s.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,s.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,s.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"Pro tip ")),(0,s.kt)("div",{parentName:"div",className:"admonition-content"},(0,s.kt)("p",{parentName:"div"},"Once your dashboard is ready Download PowerBI Android/IOS App and Sign in, view your dashboard on mobile from anywhere."))),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"image",src:n(2353).Z})),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"image",src:n(639).Z})),(0,s.kt)("p",null,"Last but not least, Special Thanks to Sudarshan Selvaraj, Karthik KK , vinoth selvaraj and Sai Krishna Kurada for their Contributions to Automation community and motivating me to share tips.\n",(0,s.kt)("img",{alt:"image",src:n(8956).Z})))}d.isMDXComponent=!0},6345:function(e,t,n){"use strict";t.Z=n.p+"assets/images/1-cae326266cde75dd55d3db8e85b30d04.gif"},6828:function(e,t,n){"use strict";t.Z=n.p+"assets/images/2-617f2e2e6bb2ddb2d6680f0bd47308c6.png"},145:function(e,t,n){"use strict";t.Z=n.p+"assets/images/3-2a7f7d4640c30e525f09fc24e22e215c.png"},3377:function(e,t,n){"use strict";t.Z=n.p+"assets/images/4-9095f3f8fabc4284a7796c3f2e52e937.png"},8881:function(e,t,n){"use strict";t.Z=n.p+"assets/images/5-5eb6f24e1b2e1f015509b376ee28dd97.png"},2353:function(e,t,n){"use strict";t.Z=n.p+"assets/images/6-7bd6c6aabe0d0516d9c7a209596afbcf.png"},639:function(e,t,n){"use strict";t.Z=n.p+"assets/images/7-a82daaae2d81feaa2f61456e86a2c90c.png"},8956:function(e,t,n){"use strict";t.Z=n.p+"assets/images/8-f01a115f084b47db5a80cabe6b64a17a.png"}}]);